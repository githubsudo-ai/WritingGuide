/**
 * Rovo Dev Process Manager
 * Spawns and manages a single `acli rovodev serve` instance for the writing guide.
 */
import { spawn } from 'child_process';
import { EventEmitter } from 'events';

const PORT = 19200;
const emitter = new EventEmitter();
let proc = null;
let status = 'offline'; // offline | starting | ready

export function getRovoStatus() { return status; }
export function getRovoPort() { return PORT; }

export async function startRovoDev() {
  if (status === 'ready') return PORT;
  if (status === 'starting') {
    await waitForReady(10000);
    return PORT;
  }

  console.log(`[RovoDev] Starting acli rovodev serve on port ${PORT}...`);
  status = 'starting';

  proc = spawn('acli', [
    'rovodev', 'serve', String(PORT),
    '--non-interactive',
    '--disable-session-token'
  ], {
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false
  });

  const isReady = (text) =>
    text.includes('Uvicorn running') ||
    text.includes('Application startup complete') ||
    (text.includes('INFO') && text.includes('started'));

  const markReady = () => {
    if (status !== 'ready') {
      status = 'ready';
      emitter.emit('ready');
      console.log(`[RovoDev] Ready on port ${PORT}`);
    }
  };

  proc.stdout.on('data', d => { if (isReady(d.toString())) markReady(); });
  proc.stderr.on('data', d => { if (isReady(d.toString())) markReady(); });

  proc.on('exit', (code) => {
    console.log(`[RovoDev] Process exited (code ${code})`);
    status = 'offline';
    proc = null;
    emitter.emit('offline');
  });

  await waitForReady(20000);
  return PORT;
}

export async function stopRovoDev() {
  if (!proc) return;
  try { await fetch(`http://localhost:${PORT}/shutdown`, { method: 'POST' }).catch(() => {}); } catch {}
  proc.kill('SIGTERM');
  proc = null;
  status = 'offline';
}

export async function setSystemPrompt(prompt) {
  await fetch(`http://localhost:${PORT}/v3/inline-system-prompt`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
}

export async function sendMessage(message) {
  await fetch(`http://localhost:${PORT}/v3/set_chat_message`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });
}

export async function streamChat() {
  return fetch(`http://localhost:${PORT}/v3/stream_chat`);
}

function waitForReady(timeoutMs) {
  return new Promise((resolve) => {
    if (status === 'ready') return resolve();
    const timer = setTimeout(async () => {
      // Try polling healthcheck
      for (let i = 0; i < 10; i++) {
        try {
          const r = await fetch(`http://localhost:${PORT}/healthcheck`);
          if (r.ok) { status = 'ready'; emitter.emit('ready'); return resolve(); }
        } catch {}
        await new Promise(r => setTimeout(r, 1000));
      }
      resolve(); // give up waiting, let routes handle the error
    }, timeoutMs);
    emitter.once('ready', () => { clearTimeout(timer); resolve(); });
  });
}
