import express from 'express';
import { startRovoDev, setSystemPrompt, sendMessage, streamChat, getRovoStatus } from './rovodev.js';

export const interviewRoutes = express.Router();

const FOLLOW_UP_SYSTEM_PROMPT = `You are a writing coach conducting a voice interview to understand someone's writing style and voice.

Your ONLY job right now: read the question and the user's answer, then decide if a short follow-up would meaningfully deepen your understanding of their voice.

Rules:
- ONLY ask a follow-up if the answer is vague, very short, or reveals something genuinely interesting worth exploring.
- If the answer is already rich and detailed, return null.
- Follow-ups must be short, warm, conversational — max 1 sentence.
- Never repeat the original question.
- Respond with ONLY valid JSON. No explanation. No markdown. Example: {"followUp": "What made you change your mind?"} or {"followUp": null}`;

const SYNTHESIS_SYSTEM_PROMPT = `You are a world-class writing coach and editor. You've just conducted a deep interview with someone about their communication style, taste, and goals.

Based on their answers, create a Personal Writing Guide — a concise, specific, highly personalized reference doc that any AI can use to write authentically in their voice.

The guide must feel like it was written *specifically* for this person — not generic advice. Use their own words and phrases wherever possible. Be honest, including about weaknesses.

Format the guide in clean markdown with these exact sections:

# Personal Writing Guide

## Voice in One Line
A single sentence capturing their essence as a communicator.

## Tone
- Overall feeling, energy, formality level

## Rhythm & Structure
- Sentence length tendencies, how they build to a point, use of lists vs prose

## Vocabulary
- Words/phrases that feel natural, ones to avoid, any signature expressions

## What They're Optimizing For
- What they want readers to feel or do; trust/clarity/action/warmth/authority

## Writing Contexts
For each context they mentioned, one line on how tone shifts.

## Admire & Aspire
- Who they admire and what specific qualities they're reaching toward

## What to Avoid
- Cringe-worthy patterns, known weaknesses, off-brand phrases or structures

## Growth Edge
The one thing they most want to improve, framed constructively.

## Example Rewrites
Take 1-2 short phrases or sentences from their actual interview answers and show:
- **Their words:** (quote)
- **Polished version:** (rewrite in their voice)
- **What changed:** (one line explanation)

Be specific. Be honest. Make this feel earned.`;

// ── GET /api/interview/status ─────────────────────────────────────────────────
interviewRoutes.get('/status', (req, res) => {
  res.json({ status: getRovoStatus() });
});

// ── POST /api/interview/start ─────────────────────────────────────────────────
// Starts the Rovo Dev instance (call this once when the interview begins)
interviewRoutes.post('/start', async (req, res) => {
  try {
    await startRovoDev();
    res.json({ status: getRovoStatus() });
  } catch (err) {
    console.error('[start]', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ── POST /api/interview/follow-up ─────────────────────────────────────────────
// Returns { followUp: string | null }
interviewRoutes.post('/follow-up', async (req, res) => {
  const { question, answer } = req.body;
  if (!question || !answer) return res.status(400).json({ error: 'question and answer required' });

  if (getRovoStatus() !== 'ready') return res.json({ followUp: null }); // not ready — skip silently

  try {
    await setSystemPrompt(FOLLOW_UP_SYSTEM_PROMPT);
    await sendMessage(`Question: "${question}"\n\nTheir answer: "${answer}"\n\nShould I ask a follow-up? Respond with JSON only.`);

    const streamRes = await streamChat();
    const reader = streamRes.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let fullText = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const data = JSON.parse(line.slice(6));
            if (data.part_kind === 'text' || data.content) {
              fullText += data.content || data.text || '';
            }
          } catch {}
        } else if (line.startsWith('event: ') && (line.includes('done') || line.includes('agent-run-end'))) {
          break;
        }
      }
    }

    // Extract JSON from response
    const jsonMatch = fullText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return res.json({ followUp: parsed.followUp || null });
    }
    res.json({ followUp: null });
  } catch (err) {
    console.error('[follow-up]', err.message);
    res.json({ followUp: null }); // fail gracefully
  }
});

// ── POST /api/interview/synthesize ────────────────────────────────────────────
// Streams the Writing Guide back via SSE
interviewRoutes.post('/synthesize', async (req, res) => {
  const { transcript } = req.body;
  if (!transcript) return res.status(400).json({ error: 'transcript required' });

  // Set up SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  try {
    if (getRovoStatus() !== 'ready') {
      await startRovoDev();
    }

    await setSystemPrompt(SYNTHESIS_SYSTEM_PROMPT);
    await sendMessage(`Here is the full interview transcript:\n\n${transcript}\n\nNow generate their Personal Writing Guide in markdown.`);

    const streamRes = await streamChat();
    const reader = streamRes.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const data = JSON.parse(line.slice(6));
            const text = data.content || data.text || '';
            if (text) {
              res.write(`data: ${JSON.stringify({ type: 'text', content: text })}\n\n`);
            }
          } catch {}
        } else if (line.startsWith('event: ')) {
          const eventType = line.slice(7).trim();
          if (eventType === 'done' || eventType === 'agent-run-end') {
            res.write(`data: ${JSON.stringify({ type: 'done' })}\n\n`);
            res.end();
            return;
          }
        }
      }
    }

    res.write(`data: ${JSON.stringify({ type: 'done' })}\n\n`);
    res.end();

  } catch (err) {
    console.error('[synthesize]', err.message);
    res.write(`data: ${JSON.stringify({ type: 'error', error: err.message })}\n\n`);
    res.end();
  }
});
