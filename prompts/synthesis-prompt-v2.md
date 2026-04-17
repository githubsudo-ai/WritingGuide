# Synthesis Prompt — V2 (LLM-Optimized)

**Status:** Active — this is what the app currently uses.
**Replaces:** [synthesis-prompt-v1.md](./synthesis-prompt-v1.md)
**Based on:** [WritingLikeAbhinav-LLMEvaluation.md](./WritingLikeAbhinav-LLMEvaluation.md) — a critique of v1 that scored it 5.9/10 for LLM readiness.
**Pairs with:** the 12-question interview in `index.html`.

---

## Why V2 Exists

V1 produced a guide that read beautifully to humans but was too vague and contradictory for LLMs to consistently pattern-match on. The evaluation surfaced three critical failures:

1. **Contradictory structure guidance** — said the writer used long flowing sentences AND said to avoid them. LLMs got confused.
2. **Format-specific rules were missing** — Slack got ~13 words of guidance.
3. **Philosophy disguised as rules** — "warm and conversational" doesn't tell an LLM what punctuation to use, what sentence length to aim for, or how to start a sentence.

V2 fixes these by:

- Reframing the audience: the guide is a system prompt for LLMs, not a wall poster
- Banning vague qualifiers ("appropriate," "natural," "balanced")
- Forcing concrete patterns: tone dial scales, lexical fingerprints, format-specific micro-rules
- Adding sections for punctuation, hedging, openings/closings, edge cases, meta-rules
- Telling the AI to mine **how** people wrote their answers as much as **what** they wrote — never output "insufficient data"

---

## Companion Interview (12 Questions)

V2 is paired with a redesigned 12-question interview that surfaces the data V2 needs. It mixes 8 text questions (mostly short writing samples) with 4 A/B preference questions (5 seconds each).

| Phase | # | Type | Goal |
|---|---|---|---|
| Voice Discovery | 1 | text | baseline rhythm, formality, hedging style |
| Voice Discovery | 2 | text | how they think out loud, transition patterns |
| Voice Discovery | 3 | text | audience, success criteria |
| Taste Calibration | 4 | text | anti-patterns, words to avoid |
| Taste Calibration | 5 | text | growth edge, weaknesses |
| Writing Samples | 6 | text | long-form rhythm, opening/closing moves |
| Writing Samples | 7 | text | hedging vocabulary directly |
| Writing Samples | 8 | text *(optional)* | format-specific patterns (Slack) |
| Quick Preferences | 9 | A/B | formality |
| Quick Preferences | 10 | A/B | sentence length & build |
| Quick Preferences | 11 | A/B | confidence/hedging |
| Quick Preferences | 12 | A/B | humor placement |

---

## How to Use

1. User completes the 12-question interview at `index.html`.
2. The app builds a full prompt: **V2 system prompt + transcript**.
3. User hits "Copy prompt" and pastes into Claude, ChatGPT, Gemini, or Rovo Chat.
4. The AI returns a structured 13-section style guide that's ready to paste back into any AI as a system prompt.

---

## The V2 System Prompt (the part that's actively used)

The full prompt lives in `index.html` as `SYNTHESIS_SYSTEM_PROMPT`. Key sections:

### Critical reading instruction
The prompt explicitly tells the LLM that interview answers are two data sources — what people say AND how they say it. The way they typed their answers IS their lexical fingerprint. The LLM is told to mine both.

### Rules of Output
1. Output ONLY the markdown document. No preamble.
2. Replace `[Name]` with their actual first name.
3. Use their own words wherever possible. Quote them.
4. Never write vague qualifiers like "appropriate," "natural," "thoughtful."
5. Be honest about weaknesses.
6. Every "do" gets a paired "don't" wherever possible.
7. **Never output "INSUFFICIENT DATA"** — derive what you can from the style of their answers. Mark weak inferences with `*(inferred from writing style; refine with samples)*`. Never hallucinate facts.

### Output structure (13 sections)
1. Voice Snapshot (with bolded "When in doubt, sound like X" line)
2. Core Identity & Goals
3. Tone Dial (1-10 scales for formality, warmth, confidence, humor, energy)
4. Rhythm & Sentence Architecture (default sentence/paragraph length, build pattern, pacing technique)
5. Lexical Fingerprint (signature phrases, sentence-starters, words to avoid, anti-patterns)
6. Punctuation & Mechanics Signature (em-dashes, ellipses, exclamations, fragments, capitalization, emoji, parentheses, Oxford comma)
7. Format-Specific Playbooks (Slack, long-form, stakeholder, others)
8. Hedging & Uncertainty (concrete phrasings)
9. Opening & Closing Moves (with examples)
10. The "Sound Check" Test (a checklist the LLM applies to its own draft)
11. Worked Examples (3 minimum — quote, polished version, what changed)
12. Edge Cases (off-topic, disagreement, celebration)
13. Meta: When Rules Conflict (priority order)

---

## Key Differences from V1

| Dimension | V1 | V2 |
|---|---|---|
| Audience framing | Human + AI (mixed) | LLM first |
| Sections | 10 vague | 13 concrete |
| Vague qualifiers | Allowed | Explicitly banned |
| Tone described as | Adjectives | 1-10 scales |
| Punctuation rules | None | Dedicated section |
| Format-specific rules | One line each | 4-6 micro-rules per format |
| Hedging guidance | None | Dedicated section |
| Openings/closings | None | Dedicated section |
| Sound-check checklist | None | Built-in self-test |
| Conflict resolution | None | Meta-rule section |
| Handling of weak data | None | "Never insufficient — derive & flag" |
| Reading instruction | None | Mine both content & style of answers |

---

## When to Make a V3

Update the prompt when:

- Output guides still feel generic across multiple users
- A new generation of LLMs handles instructions differently
- New interview questions are added that surface different signal
- The "inferred from writing style" footnote is appearing too often (means we need more questions, not a better prompt)

When you do, follow the same pattern: archive the previous version with a version number, write a new one, and document why it changed in this folder's README.
