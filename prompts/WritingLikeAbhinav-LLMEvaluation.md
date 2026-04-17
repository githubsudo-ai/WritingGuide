# RIGOROUS LLM-CONSUMABILITY EVALUATION
## "Writing like Abhinav" Style Guide

**Evaluated by:** Master Style Guide Architect  
**Date:** April 17, 2026  
**Purpose:** Assess whether this guide will enable an LLM to authentically write in Abhinav's voice

---

## SECTION-BY-SECTION SCORING

### **01. TONE** (pp. 1)

**Specificity Score: 4/10**  
**Actionability for LLM: 3/10**  
**Voice Fingerprinting: 5/10**

**What works:**
- "Conversational and approachable" is a decent starting point
- The "chai over chai" metaphor is vivid and memorable
- "Quiet confidence underneath" is useful as a tonal anchor
- "Warm, direct, and grounded" trio is strong

**What fails spectacularly:**
- "Genuinely curious and wants you to get it" — too vague. An LLM can't pattern-match "wants you to get it"
- "Earns trust through empathy and plain talk, not polish" — aspirational but not actionable. What does "not polish" look like syntactically?
- "Casual-professional sweet spot" — undefined. Where's the line? What's the ratio?
- "Never forced" humor — an LLM will force humor anyway; needs specific rules about *when* and *how*
- "Humor surfaces naturally" — completely unhelpful instruction. Say *when* it appears and *what kind*
- "Self-deprecating" — good keyword, but no examples of what that sounds like

**LLM Problem:** An LLM reading this will produce writing that *sounds* warm but lacks Abhinav's specific syntactic signature. It will over-explain, over-soften, and miss the decisiveness underneath the warmth.

**Missing:**
- Sentence-starter patterns (does he use "Look," "Here's the thing," "Honestly," etc.?)
- Punctuation patterns (em-dashes, ellipses, parentheticals?)
- How he handles disagreement or pushback
- Specifics on humor timing and targets

---

### **02. RHYTHM & STRUCTURE** (p. 2)

**Specificity Score: 7/10**  
**Actionability for LLM: 6/10**  
**Voice Fingerprinting: 6/10**

**What works:**
- "Layering context before arriving at the point" is concrete and observable
- "Longer, flowing sentences that stack clauses with 'and then' connectors" — **this is excellent**. Specific syntax pattern.
- The callout box is great: "Lead with the decision or insight. Then explain how you got there."
- "Short paragraphs over bullet lists" — clear preference

**What's weak:**
- "At his worst, the buildup delays the punchline too long" — acknowledges the problem but doesn't solve it
- "His spoken rhythm — warm, building, connective — translates well" — vague. What does "building" mean syntactically?
- The fix says "Lead with decision" but that's *inconsistent* with "layers context before arriving at the point." This is contradictory guidance that will confuse an LLM.

**LLM Problem:** The guide says "he layers context first" but then prescribes "lead with the takeaway." An LLM will alternate between these or get stuck in conflict. You need to resolve: Is he a front-loader or a context-builder? (Answer: He's a context-builder who *should* front-load more.)

**Missing:**
- Paragraph length norms (does he write 2-3 sentence paragraphs or longer ones?)
- Transition patterns beyond "and then"
- How long is "long"? (15 words? 30 words?)
- Example of good multi-clause sentence vs. bad one with timing
- How to handle technical/complex topics that might require more structure

---

### **03. VOCABULARY** (p. 2)

**Specificity Score: 8/10**  
**Actionability for LLM: 9/10**  
**Voice Fingerprinting: 7/10**

**What works:**
- **"Words That Feel Like Him"** section is *excellent*. Concrete phrases an LLM can pattern-match:
  - "the value of…" (high-value, abstract)
  - "honestly" (truth-telling signal)
  - "whatever it takes" (conviction + effort)
  - "very clear" (emphasis on clarity)
  - "that's the idea" (colloquial confirmation)
  - "keeps me engaged" (personal investment)

- **"Words to Avoid"** section is strong:
  - "leverage," "streamline," "delve," "robust" — all corporate-speak, correctly flagged
  - "it's not X, it's Y" — explicitly banned, good catch
  - "excessive metaphors" — useful guardrail

**What's missing:**
- No frequency guidance. Does he say "honestly" once per message or three times?
- No context. When does he use "whatever it takes"? (Commitment statements? Challenges?)
- No synomyms or alternatives. If he can't say "leverage," what *can* he say? "Use"? "Activate"?
- No pattern for how these phrases connect. Does "honestly" + "very clear" appear together?
- Missing: intensifiers he actually uses. Does he use "really"? "Actually"? "Genuinely"?
- Missing: words he *overuses* that LLM should dial back (e.g., does he repeat phrases?)

**LLM Problem:** This is the strongest section, but it's a vocabulary list, not a writing system. An LLM can sprinkle these words in, but won't understand *contextual deployment*. Someone could write "honestly, the value of whatever it takes keeps me engaged" and technically follow the rules while sounding ridiculous.

---

### **04. WHAT HE'S OPTIMIZING FOR** (p. 3)

**Specificity Score: 6/10**  
**Actionability for LLM: 4/10**  
**Voice Fingerprinting: 5/10**

**What works:**
- Priority ranking is clear: Trust → Clarity → Feeling
- Quote is authentic and useful: "I want them to definitely trust me, feel something, and they should come out of that like — oh, this was such a nicely written piece and I'm very clear about everything the person wanted to convey."
- "Nicely written" is a useful fingerprint (aesthetic, not just functional)

**What's weak:**
- "Trust" is too abstract. What does a trustworthy sentence look like vs. an untrustworthy one?
- "Clarity second" — contradicts earlier sections that emphasize context-layering (which can obscure clarity)
- "Feeling third" — how does an LLM make readers *feel* something? This needs concrete examples.
- No guidance on *trade-offs*. When trust conflicts with feeling, which wins?
- "Very clear what they're writing" — circular. Doesn't explain *how to be clear*

**LLM Problem:** These are values, not rules. An LLM needs rules. It needs to know: Is a metaphor good or bad? (Depends on whether it builds trust and feeling, but that's not actionable.)

---

### **05. WRITING CONTEXTS** (p. 3)

**Specificity Score: 5/10**  
**Actionability for LLM: 4/10**  
**Voice Fingerprinting: 3/10**

**What works:**
- Four context buckets are sensible
- "Slack: Quick, warm, direct" is concise
- "Product Docs: Leads with 'so what'" — useful principle

**What's completely inadequate:**
- **Slack guideline is 13 words.** For a primary writing context, this is laughably sparse.
  - No Slack-specific sentence length norms
  - No emoji guidance (does he use them? which ones? how often?)
  - No thread conventions (how does he structure long conversations?)
  - No punctuation quirks (more dashes? exclamation marks?)
  - "Punchy and human" — what does that look like?

- **Product Docs: 15 words of guidance.** Should be 100.
  - "Structured but not sterile" — meaningless. What structure?
  - "Leads with 'so what'" — good, but then what? How deep does the doc go?
  - Does he use numbered lists or prose? Headers or flowing narrative?
  - Tone shift from Slack — how much?
  - What's the voice on technical constraints vs. vision statements?

- **Blog Posts: "Aspirational territory. Aiming for the Shreyas/Shane register"**
  - Outsourcing to other writers' voices (weak)
  - "Clear, emotionally resonant, concise" — every blog post claims this
  - No structural guidance (how long? 800 words? 2000?)
  - No specific patterns for openings, conclusions, or transitions

- **LinkedIn: "Not active yet"**
  - So why include it? This is a placeholder that wastes space.

**LLM Problem:** An LLM needs format-specific micro-rules. If I'm writing Slack, I need to know: Are sentences 5 words or 15? One sentence per message or three? Should I use "—" or ":" for emphasis? The guide gives vibes, not rules.

---

### **06. ADMIRE & ASPIRE** (p. 4)

**Specificity Score: 6/10**  
**Actionability for LLM: 3/10**  
**Voice Fingerprinting: 4/10**

**What works:**
- Shreyas Doshi comparison is solid: "Straight talk. No wasted words. Says the thing product people are thinking but haven't articulated yet."
  - This is concrete and instructive

- Shane Parrish comparison: "Emotional appeal with intellectual clarity. Writes in a way that feels effortless but lands hard."
  - The "effortless but lands hard" is a useful target

**What fails:**
- These are *aspirations*, not baseline. An LLM might overshoot or miss the mark entirely.
- No examples of Shreyas/Shane sentences. An LLM has no actual reference.
- "Straight talk. No wasted words." — does that mean short sentences? Or just efficient ones? (Very different.)
- No guidance on *what makes it Abhinav* vs. just "good writing"
- Missing: How is Abhinav *different* from Shreyas/Shane? (This is more important than similarity.)

**LLM Problem:** Holding up other writers as mirrors is risky. An LLM will just generate generic "good writing" that happens to mention both clarity and emotion.

---

### **07. WHAT TO AVOID** (p. 4)

**Specificity Score: 8/10**  
**Actionability for LLM: 8/10**  
**Voice Fingerprinting: 6/10**

**What works:**
- "Beating around the bush" — specific, acknowledged as his weakness, gives LLM permission to edit aggressively
- "Long, clause-heavy sentences that bury the point" — concrete to flag during generation
- "Jargon-stuffed corporate speak" — clear boundary
- "Overloaded metaphors or forced comparisons" — good guardrail
- "Excessive slang or trying too hard to sound casual" — cuts against typical AI pitfall
- **"AI speak" — the generic, polished-but-hollow patterns of AI-generated text** — EXCELLENT self-awareness
- "Negation parallelisms: 'it's not just X — it's Y'" — specific, banned pattern

**What's weak:**
- Good list, but mostly negative guidance. Tells LLM what NOT to do, but less about what TO do
- "Beating around the bush" appears in both Rhythm section and Avoid section (redundant)
- No severity levels (is jargon a dealbreaker or just something to minimize?)

**LLM Problem:** Strong negative guardrails, but LLMs are biased toward *doing something*. A ban on "AI speak" won't stop the LLM from generating tepid, cautious prose unless paired with affirmative rules on how to be decisive.

---

### **08. GROWTH EDGE** (p. 5)

**Specificity Score: 7/10**  
**Actionability for LLM: 5/10**  
**Voice Fingerprinting: 8/10**

**What works:**
- Acknowledges the real tension: storyteller's instinct vs. clarity
- Direct quote: "I beat around the bush quite a bit and I might write way too long sentences for it to get that point convoluted."
  - This is honest and useful
- "The voice is strong. The editing muscle is what's developing."
  - Useful frame: preserve voice, tighten delivery

**What's weak:**
- Positioned as growth, not a rule. An LLM should know: "Default to front-loading. Abhinav *wants* to front-load more."
- "Tightening the loop" — vague instruction
- No concrete threshold (when is a sentence too long?)
- Doesn't address: How do you preserve the narrative warmth while front-loading?

**LLM Problem:** This section should be mandatory instruction, not optional growth. It's the editing rule the LLM needs most.

---

### **09. EXAMPLE REWRITES** (p. 5-6)

**Specificity Score: 9/10**  
**Actionability for LLM: 8/10**  
**Voice Fingerprinting: 8/10**

**What works:**
- This is the *strongest* section of the guide
- Shows before/after with explanation
- "Collapsed repetitive clauses. Kept 'whatever it takes' — that's pure Abhinav."
  - Teaches LLM that some words are non-negotiable, others are expendable
- Second example shows sophisticated editing: "Distilled a winding narrative into a tight arc. Preserved his core insight."
  - Shows LLM how to tighten without losing essence

**Minor weakness:**
- Only two examples. Would benefit from 4-6 across different contexts (Slack, doc, email, etc.)
- No negative example (here's how NOT to rewrite this)
- Doesn't show the intermediate steps (the *thinking* behind the rewrite)

**LLM Strength:** This section does what the rest of the guide doesn't: shows concrete transformation rules. An LLM can learn from "repetitive → collapsed" and "winding narrative → tight arc."

---

## CRITICAL STRUCTURAL WEAKNESSES

### 1. **Contradiction Between Rhythm & Structure**
The guide states:
- "He tends toward longer, flowing sentences that stack clauses with 'and then' connectors" (section 02)
- "Lead with the decision or insight. Then explain how you got there" (section 02, "The fix")
- "Long, clause-heavy sentences that bury the point" is listed in "What to Avoid" (section 07)

**Problem:** Is long, clause-heavy writing good or bad? The guide contradicts itself. An LLM will oscillate or default to short, choppy sentences (safest option), losing the "flowing" quality.

**Reality Check:** Abhinav should lead *strategically* — decision first in high-stakes writing (docs, emails), but narrative/context building is fine for lower-stakes (Slack, blog). The guide doesn't make this distinction.

### 2. **Philosophy vs. Rules Confusion**
- Sections 01, 04 are mostly philosophy (values, not rules)
- Sections 03, 07 are mostly rules (concrete do/don'ts)
- Sections 02, 05 are neither (vague principles + insufficient detail)

An LLM needs the ratio to be 20% philosophy : 80% rules. Current ratio is more like 50:50.

### 3. **Missing Meta-Rules**
The guide doesn't explain *how to use* the guide:
- When do you prioritize Tone vs. Rhythm?
- If a sentence violates Vocabulary but nails Tone, which wins?
- What if a context requires longer sentences (technical explanation) but the style guide says "short paragraphs"?
- How hard are the rules? (Is "avoid leverage" a hard ban or a preference?)

### 4. **Vague Qualifiers Throughout**
- "Appropriate" — where does it appear?
- "Natural" — used in "humor surfaces naturally" but never defined
- "Very clear" — appears multiple times but "very" is subjective
- "Keep it punchy" — how punchy? (5-word sentences? 10-word?)
- "Structured but not sterile" — neither term is defined

These are LLM killers. An LLM will over-index on whatever sounds reasonable.

### 5. **Zero Guidance on Edge Cases**
- How does Abhinav write when he's angry or frustrated?
- How does he write to people who disagree with him?
- How does he handle uncertainty or "I don't know"?
- Does he use hedging language? ("I think," "might be," "arguably")
- What if the topic is inherently complex or jargon-heavy?
- How does he end things? (Sign-offs? Final thoughts?)

---

## MISSING SECTIONS (CRITICAL)

### **A. Sentence Starters & Connectors**
Does Abhinav use specific opening moves?
- "Look," / "Here's the thing," / "Honestly," / etc.?
- Frequency and contexts?

### **B. Punctuation Signature**
- Em-dashes: does he use them liberally or sparingly?
- Ellipses: how often?
- Parentheticals: frequency?
- Question marks: does he use rhetorical questions?
- Exclamation marks: when and how often?

### **C. Format-Specific Micro-Rules**

**SLACK:**
- Single vs. multi-line messages?
- Threading patterns?
- Emoji conventions?
- Line breaks for emphasis?
- Reaction patterns?

**PRODUCT DOCS:**
- TL;DR up front or at end?
- Headings: descriptive or question-based?
- Prose vs. lists ratio?
- How much narrative vs. specs?
- How to handle "we don't know yet"?

**EMAIL:**
- Subject line patterns?
- How long are opening lines?
- Sign-off style?
- How does he handle bad news?

### **D. Hedging & Uncertainty Patterns**
- Does he say "I think" or avoid it?
- "Might," "could," "probably" — how often?
- How does he express confidence without being arrogant?
- How does he say "I don't know" or "we need to find out"?

### **E. Opening & Closing Patterns**
- How does he start a Slack message? (Direct statement, context, question?)
- How does he end? (Clear call to action? Open question? Soft close?)
- Does style change if audience is familiar vs. new?

### **F. Lexical Frequency & Collocation**
- Words he repeats (does "clear" appear once per 100 words? More?)
- Phrases that cluster (does "whatever it takes" + "the value of" appear together?)
- Favorite contractions? (doesn't, won't, I'm vs. formal equivalents?)

### **G. Negative Examples**
The guide has two rewrite examples, both positive. Should have 2-3 explicit negatives:
- "DON'T write like this: [bad version], because [reason from style guide]"

### **H. Stylistic Variation by Audience**
- Does he write differently to engineers vs. designers vs. stakeholders vs. peers?
- How much does he adjust for seniority?
- Remote communication (Slack/docs) vs. synchronous (meetings)?

### **I. Emotional Bandwidth Rules**
- High-stakes situations (bad news, disagreement, crisis): does voice shift?
- Celebratory situations: does tone change?
- Routine updates vs. important moments: same voice?

---

## FINAL VERDICT: IS THIS GUIDE LLM-READY?

### **Current State: 5.5/10**

**What it does well:**
- Vocabulary section (words that feel like him) is solid
- Example rewrites show concrete transformation
- "What to Avoid" section is specific and useful
- Overall tone is captured (warm, direct, grounded)

**What it fails at:**
- **Insufficient specificity for reliable pattern-matching.** An LLM can generate "good writing that sounds vaguely like Abhinav" but won't consistently hit his voice
- **Structural contradictions** that confuse instruction priorities
- **Zero format-specific guidance.** Slack and Slack alone would need 5x more detail
- **No actionable rules for 60% of writing decisions.** What about punctuation? Sentence length? Opening moves? Edge cases?
- **Philosophy over rules.** The guide feels inspirational but not prescriptive

### **Gap to 80% Quality:**

To reach "an LLM following this would produce 80% Abhinav-quality writing," you need:

| Missing Element | Current | Needed | Impact |
|---|---|---|---|
| Format-specific rules | 10% coverage | 80% | High |
| Punctuation patterns | 0% | 100% | High |
| Sentence-starter phrases | 0% | 100% | High |
| Hedging/uncertainty rules | 0% | 80% | Medium |
| Edge case guidance | 0% | 60% | Medium |
| Meta-rules (priority hierarchy) | 0% | 100% | High |
| Negative examples | 10% | 40% | Medium |

**Reality:** Current guide gets you to ~60-65% authenticity. Adding the missing sections gets you to 80%+.

---

## RECOMMENDED STRUCTURE FOR v2

Replace the current 9-section structure with this:

```
01. ELEVATOR PITCH (current, keep as-is)

02. CORE VOICE ARCHITECTURE
    - Foundational tone (warm, direct, grounded)
    - Three optimization priorities (trust → clarity → feeling)
    - Metaphorical touchstone: "explaining to a friend over chai"

03. SENTENCE PATTERNS & RHYTHM
    - Sentence length norms: 12-18 words (avg), rarely below 8, rarely above 25
    - Clause stacking: when to use "and" connectors vs. periods
    - Frontloading rule: strategic by format (docs: yes, slack: flexible)
    - The builder's habit: context → point (with warning to tighten)

04. LEXICAL SIGNATURE (current, keep mostly as-is)
    - Words that feel like him (with frequency guidance)
    - Words to avoid (with alternatives)
    - Add: signature phrases per context

05. PUNCTUATION & FLOW
    - Em-dash usage (he uses them; when and why?)
    - Ellipses (rare? frequent?)
    - Parenthetical asides (style?)
    - Exclamation marks (enthusiasm level?)
    - Question marks (rhetorical or genuine?)

06. CONTEXT-SPECIFIC MICRO-RULES
    06a. SLACK
    06b. PRODUCT DOCS
    06c. EMAIL
    06d. BLOG / LONG-FORM

07. OPENING & CLOSING MOVES
    - How he starts conversations/sections
    - How he ends (clear asks? soft closes?)
    - Variation by audience seniority

08. HEDGING & UNCERTAINTY
    - How to express "I don't know"
    - How to express doubt vs. conviction
    - Confidence without arrogance patterns

09. WHAT NOT TO DO (current, strengthen with negatives)
    - Avoid patterns (current)
    - Negative examples: "Here's what not to write and why"

10. ADMIRE & ASPIRE (current, keep but reframe)
    - Shreyas/Shane as reference points
    - Add: How Abhinav differs from them

11. EDGE CASES & EXCEPTIONS
    - High-stakes (bad news, disagreement)
    - Low-stakes (celebratory, routine)
    - Emotionally charged situations

12. VOICE CONSISTENCY RULES (new)
    - Priority hierarchy (when rules conflict)
    - Format trumps topic?
    - Audience trumps format?
    - When to break the rules

13. EXAMPLE REWRITES (expand current section)
    - Add 4-6 examples across formats
    - Include negative examples
    - Show intermediate edits (step-by-step)

14. EXAMPLE OUTPUTS BY CONTEXT
    - Sample Slack thread
    - Sample product doc section
    - Sample email
    - Sample blog paragraph
```

This structure separates:
- **Philosophy** (01-02): ~15% of guide
- **Rules & Patterns** (03-12): ~80% of guide
- **Examples** (13-14): ~5% of guide

---

## SPECIFIC REVISION RECOMMENDATIONS

### **Immediate Fixes (High ROI, Low Effort)**

1. **Resolve the Rhythm contradiction** (Section 02)
   - Current: "He tends toward longer, flowing sentences" + "Lead with the decision"
   - Reframe: "Storyteller's instinct (context → point) is authentic to his voice. BUT strategic frontloading in high-stakes writing (docs, decisions) is necessary for clarity. The growth is learning to *choose* when to layer vs. when to lead."

2. **Add punctuation guidance to Tone section**
   - "Abhinav's punctuation emphasizes connection and breath: he uses em-dashes frequently to signal 'and by the way' moments, rarely uses semicolons, and uses exclamation marks sparingly (saves them for real emphasis or humor)."

3. **Expand Vocabulary section with context**
   - "Whatever it takes" — appears when discussing effort, commitment, or solving problems. Not used for routine tasks.
   - "The value of…" — appears in reflective moments, broader thinking. Not in tactical decisions.

4. **Make "What to Avoid" actionable with alternatives**
   - Don't: "We need to leverage this synergy"
   - Do: "We should use this opportunity" or "This is how we build on it"

5. **Create format-specific templates**
   - One real example of Slack from him, with annotations
   - One real example of doc section, with annotations
   - One real example of email, with annotations

### **Medium-Effort Additions**

6. **Add sentence-length norms with examples**
   - "Abhinav's sentences average 14-16 words. He rarely writes below 8 (feels choppy, kills warmth) and rarely above 22 (clarity suffers). When he writes longer, he uses connectors ('and', 'but', 'because') to make the structure obvious."

7. **Create a "Hedging Playbook"**
   - How does he express uncertainty while maintaining confidence?
   - Does he say "I think" or "I believe" or neither?
   - How does he handle "we don't know yet"?

8. **Add "Opening Moves" section**
   - "For Slack, Abhinav often opens with a direct statement or question, not scene-setting. He doesn't say 'So I was thinking about our conversation yesterday' — he says 'Two thoughts on the roadmap.'"

9. **Negative example section**
   - "DON'T: 'It's not about leverage; it's about synergy.' WHY: This is the exact negation parallelism he avoids. DO: 'The opportunity is in how we activate existing relationships.'"

10. **Add a decision tree or "When to Apply Which Rule"**
    - "If you're writing high-stakes (decision docs, difficult conversations): prioritize frontloading and clarity over narrative. If you're writing low-stakes (Slack, brainstorm): you can layer context more freely. If you're writing emotionally resonant (blog, reflection): preserve the storyteller's rhythm but tighten ruthlessly."

---

## EXECUTIVE SUMMARY

### **The Honest Take**

This guide captures Abhinav's *spirit* but not his *system*. It's 60-65% effective for an LLM. It will produce writing that sounds warm and sincere, but won't consistently hit his specific syntax, punctuation, and structural patterns.

**Core Problem:** The guide prioritizes voice over rules. It tells an LLM how Abhinav *feels* but not how he *writes*. An LLM needs both, with a 20/80 split.

**Specific Failures:**
1. **Contradictory guidance on sentence length and structure** (confuses LLM priorities)
2. **Zero format-specific guidance** (Slack alone needs 10x more detail)
3. **Missing tactical rules** on punctuation, sentence starters, hedging, openings/closings
4. **Philosophy masquerading as rules** ("Conversational and approachable" is not actionable)
5. **No edge cases or exceptions** (what happens when tone conflicts with clarity?)

**The Fix (Priority Order):**
1. Resolve the rhythm/structure contradiction
2. Add format-specific micro-rules (especially Slack)
3. Add punctuation and sentence-starter patterns
4. Expand "What to Avoid" with affirmative alternatives
5. Create a decision tree for rule priorities
6. Add 4-6 real examples across formats with detailed annotations

**Why This Matters:** The current guide will make an LLM produce serviceable Abhinav-ish writing. The revised guide will make it produce *authentically* Abhinav writing — the kind where someone reads it and thinks "that's exactly how Abhinav would say that."

**Estimated effort to reach 80% quality:** 6-8 hours of focused revision + extraction of real writing samples from Abhinav's vault.

---

## SCORING SUMMARY TABLE

| Section | Specificity | Actionability | Voice Fingerprinting | Overall |
|---------|-------------|----------------|----------------------|---------|
| 01. Tone | 4 | 3 | 5 | **4/10** |
| 02. Rhythm & Structure | 7 | 6 | 6 | **6.3/10** |
| 03. Vocabulary | 8 | 9 | 7 | **8/10** |
| 04. Optimizing For | 6 | 4 | 5 | **5/10** |
| 05. Writing Contexts | 5 | 4 | 3 | **4/10** |
| 06. Admire & Aspire | 6 | 3 | 4 | **4.3/10** |
| 07. What to Avoid | 8 | 8 | 6 | **7.3/10** |
| 08. Growth Edge | 7 | 5 | 8 | **6.7/10** |
| 09. Example Rewrites | 9 | 8 | 8 | **8.3/10** |
| **OVERALL GUIDE** | **6.3** | **5.6** | **5.8** | **5.9/10** |

**For LLM-readiness, you need Specificity ≥ 8 and Actionability ≥ 8 across all sections. Current guide: 2 sections hit that bar.**

