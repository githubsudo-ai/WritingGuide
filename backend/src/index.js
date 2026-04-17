import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { interviewRoutes } from './interviewRoutes.js';
import { startRovoDev, stopRovoDev, getRovoStatus } from './rovodev.js';

const PORT = process.env.PORT || 3030;
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '2mb' }));

// Routes
app.use('/api/interview', interviewRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', rovodev: getRovoStatus(), version: '1.0.0' });
});

const server = createServer(app);

const shutdown = async () => {
  console.log('\n[Server] Shutting down — stopping Rovo Dev...');
  await stopRovoDev();
  server.close();
  process.exit(0);
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

server.listen(PORT, async () => {
  console.log(`\n✍️  Writing Guide backend running on http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health\n`);
  console.log(`[RovoDev] Starting acli rovodev serve...`);
  try {
    await startRovoDev();
    console.log(`[RovoDev] Ready ✓\n`);
  } catch (err) {
    console.warn(`[RovoDev] Could not start automatically: ${err.message}`);
    console.warn(`[RovoDev] It will be started on first request.\n`);
  }
});
