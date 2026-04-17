# Prompts

Source documents for the synthesis prompt that converts a 15-question interview into a Personal Writing Style Guide.

---

## What's in here

| File | What it is | Status |
|---|---|---|
| [`synthesis-prompt-v2.md`](./synthesis-prompt-v2.md) | The current prompt — designed for LLMs to consume, not humans. Forces concrete patterns (tone scales, lexical fingerprints, punctuation rules, format-specific micro-rules). | ✅ **Active** |
| [`synthesis-prompt-v1.md`](./synthesis-prompt-v1.md) | The original prompt. Produced human-readable guides but too vague for LLMs to consistently pattern-match on. | 📦 Archived |
| [`WritingLikeAbhinav-LLMEvaluation.md`](./WritingLikeAbhinav-LLMEvaluation.md) | A brutal critique of a V1-generated guide, scoring it 5.9/10 for LLM readiness. Drove the design of V2. | 📊 Reference |

---

## How the prompt is used

1. User completes the 15-question interview at `index.html`.
2. The app concatenates: **active synthesis prompt + interview transcript**.
3. User copies the full prompt and pastes it into Claude, ChatGPT, Gemini, or Rovo Chat.
4. The AI returns a structured Writing Style Guide.
5. The user saves that guide and pastes it as a system prompt in future AI conversations to make the AI write in their voice.

---

## Why V2 exists

V1 had three critical failures the evaluation surfaced:

1. **Contradictory rhythm guidance** — said "long flowing sentences" and "avoid clause-heavy sentences" in the same doc.
2. **Format-specific rules essentially missing** — Slack got ~13 words of guidance.
3. **Philosophy disguised as rules** — "warm and conversational" doesn't tell an LLM what punctuation to use or what sentence length to aim for.

V2 fixes all three by reframing the audience (LLM, not human), banning vague qualifiers, and adding sections for punctuation, hedging, openings/closings, edge cases, and conflict resolution.

See `synthesis-prompt-v2.md` for the full comparison table.

---

## When to make a V3

Update this prompt when:

- Output guides still feel generic across multiple users
- A new generation of LLMs handles instructions differently
- New interview questions are added that surface different signal (e.g., real writing samples, sentence-starter exercises, format-specific writing prompts)

When you do, follow the same pattern: archive the previous version with a version number, write a new one, and document why it changed.
