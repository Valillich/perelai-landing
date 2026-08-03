# Homepage Hero Copy Audit

**Repository:** `/Users/valery/Sites/perelai-landing`
**Created:** 2026-08-02
**Governing plan:** `.cursor/plans/messages/00_home_hero_positioning_and_experiment_plan_20260802.md`
**Companion prompts:** `.cursor/plans/messages/01_home_hero_positioning_llm_prompts_20260802.md`
**Evidence log:** `docs/research/home-hero-message-evidence-2026-08-02.md`

This file accumulates homepage-hero audit sections across MSG0–MSG4. **MSG0 owns the
evidence / claim / research sections (§1–§3). MSG1 owns the scorecard, sweeps, panel, rejected-direction
register and English freeze (§5–§12).** Locale QA and implementation records are later phases and are
intentionally absent or marked not started.

---

## 0. Phase register

| Phase | Scope | Status |
|---|---|---|
| **MSG0** | Evidence, claim re-verify, recommendation triage, research confidence | **PASS** 2026-08-02 |
| **MSG1** | Rails, candidate scorecard, sweeps, panel, English freeze | **HOLD** 2026-08-03 — English frozen and presented; **panel ≥8 gate not met (7.75)**; **owner approval missing** |
| MSG2–MSG7 | Translation, implementation, rollout, experiment readiness | Not started — blocked until MSG1 panel gate and owner approval both clear |

### Repository snapshot (MSG0)

| Item | Value |
|---|---|
| Landing HEAD | `7e528d67231d9a772eec71af4bb7b4f1ea80bd14` |
| Product HEAD (`beauty-finance`) | `f081179fe5beba5f5eeb3bf0bdb7568ad61f032f` |
| Unrelated dirty paths preserved | `?? .cursor/plans/messages/` (user-owned) |
| Public locale / React / analytics edits | **None** |

### Repository snapshot (MSG1)

| Item | Value |
|---|---|
| Landing HEAD | `7e528d67231d9a772eec71af4bb7b4f1ea80bd14` (unchanged since MSG0) |
| Product source re-run in this phase | **None** — MSG1 is documentation only and inherits the MSG0 claim verdict |
| Unrelated dirty paths preserved | `?? .cursor/plans/messages/` (user-owned), `?? docs/research/home-hero-message-evidence-2026-08-02.md` (MSG0 output) |
| Files written | `.agents/product-marketing.md`, `.cursor/plans/reference/messaging-and-claims.md`, `docs/home-hero-copy-audit.md`, `docs/experiment-backlog.md` |
| Public locale / React / analytics / environment / product edits | **None** |

---

## 1. Evidence (MSG0)

Full detail: `docs/research/home-hero-message-evidence-2026-08-02.md`.

### 1.1 Evidence classes

| Class | What it proves | MSG0 finding |
|---|---|---|
| **a) Implementation proof** | Product can do the thing | F1 (source), F3–F6 (source + unit tests) PASS for recommended clauses |
| **b) Proxy customer language** | Theme relevance / wording | Colorist VOC: 10 independent threads, unreverified (Reddit 403); ICP homepage inventory UNVERIFIED |
| **c) Owner/advisor hypothesis** | Strategy input | R1 pasted memo + R2 plan excerpts (raw R2 missing); not VOC |

### 1.2 Implementation proof commands (smallest practical)

| Area | Command | Result |
|---|---|---|
| F3–F6 unit batch | `jest … payment-accounts/finance/clients/public-booking/notes *.service.spec.ts` | **173 passed** |
| F4 visit-history filter (added 2026-08-03) | Primary path: `ClientDetailsPage.loadClientHistory` → `getTransactionsPage({ clientId })` → `transactions.service` `where.clientId`; focused test `scopes mixed client history when clientId is provided` | Cite in evidence log; capability unchanged PASS |
| Completed ≠ paid (web) | `jest … useGhostVisitUndo.spec.ts` | **15 passed** |
| F1 integration | `jest … --testPathIgnorePatterns='a^' --testPathPatterns='operational-inbox.integration.spec'` | **Blocked:** `TEST_DATABASE_URL` unset (`beauty-finance/.env` has `DATABASE_URL` only) |
| TC5 coworker (context) | Same DB requirement as prior TEAM0 | Remains **HOLD** |

### 1.3 Recommendation inputs

| Input | Disposition |
|---|---|
| R1 `…/64092e6f-…/pasted-text.txt` | Triaged row-by-row in evidence §4; owner hypothesis only |
| R2 second recommendation raw file | **Missing** — plan excerpts used; marked excerpt-only |
| Binding primary `operational_clarity` | Maps to PASS claims; recommended first-launch candidate |

---

## 2. Claim contract (MSG0)

### 2.1 Recommended hero → claim rows

| Clause | Ledger | MSG0 status |
|---|---|---|
| Know what still needs doing | F1 | **PASS (source)** — integration live-run blocked |
| — and what was actually paid. | F5 / F6 | **PASS** |
| unresolved work visible until you deal with it | F1 | **PASS (source)** |
| connects visits to client history | F4 | **PASS** |
| separates completed work from money received | F5 / F6 | **PASS** |
| Clients book through one link. | F3 | **PASS** |

### 2.2 Explicitly out of the recommended first hero

| Theme | Gate | Status |
|---|---|---|
| Coworker privacy / occupied-time sync | TC5 / F25 | **HOLD** — excluded |
| Client hub / magic link | Separate audit required | Excluded |
| Personal CFO; CRM; ERP; all-in-one; billing | Rails bans | Banned |
| Apple/Stripe public comparison | Brand posture | Internal analogy only |
| Smart/AI Inbox; automatic conflict guarantees | Rails / overclaim | Banned |
| Native app / install as hero promise | Device contract | Unchanged / subordinate |

### 2.3 Claim-contract verdict for MSG1 unlock

**PASS** — every recommended clause maps to a current PASS claim row (F1 via source inspection with
recorded integration blocker). MSG1 may begin. This is not English publication approval.

---

## 3. Research confidence (MSG0)

### 3.1 Flagship ICP proxy sample

| Metric | Value |
|---|---|
| Colorist VOC quote rows | 15 |
| Independent threads | **10** |
| Live URL recheck 2026-08-02 | All attempted Reddit/Capterra fetches → **403** → unreverified |
| ICP homepage inventory (`docs/icp-research-homepage.md`) | All 5 rows **UNVERIFIED**; sequential ID pattern raises fabrication risk |
| Lash VOC | Adjacent only — **not** counted for flagship |

### 3.2 Pain-led theme threshold (≥5 independent flagship signals)

| Theme | Independent threads (≤) | Threshold met? | Status |
|---|---:|---|---|
| No-shows | 4 | No | Provisional |
| Earnings / cash clarity | 2 | No | Provisional |
| DM booking overload | 1 | No | Provisional |
| Payment chase | 1 | No | Provisional |
| Day reconstruction / lost actions | 1 | No | Provisional |
| Migration anxiety | 1 | No | Provisional |

**Bias:** public Reddit hairstylist communities; intensity and salon/booth language mix; not
first-party Perelai customers; English online sample ≠ proven US independent colorist buyers.

### 3.3 Research implication for copy

- Mechanism-led primary (`operational_clarity`) may proceed on **implementation proof**.
- Pain-led wording must stay **provisional** and must **not** be labeled proven VOC.
- Five-second comprehension protocol is defined in the evidence log §8; participants unavailable →
  **required future work**; no fabricated responses.

### 3.4 Research confidence label

**LOW** for proxy VOC relevance claims.
**Does not block** mechanism-led MSG1.
**Does block** presenting pain-led hero language as proven customer research.

---

## 4. Sections reserved for later phases

| Section | Owner phase | State |
|---|---|---|
| Candidate scorecard + English freeze | MSG1 | **Complete — §5, §11** |
| Dependent meta/closing English | MSG1 | **Complete — §11** |
| Locale translation QA | MSG2–MSG4 | Not started |
| Owner approval record | MSG1+ | **Missing — §11.3 is `AWAITING OWNER APPROVAL`** |
| Implementation / experiment | MSG5–MSG7 | Not started |

---

## 5. Candidate scorecard (MSG1, 2026-08-03)

### 5.1 Method

Rubric and weights are taken verbatim from binding-plan §5.3. Each dimension is scored 1–5; the
weighted total is the sum of `score × weight`. Rationale below cites the MSG0 record, the claim rail,
or the product-marketing context — never taste, and never invented customer response. The five-second
comprehension protocol (plan §6.2) has **not** been run; no participant data exists and none was
simulated, so no score below is derived from comprehension testing.

All four candidates share the fixed body (plan §5.1), so the scorecard compares `title + accent` only.

| Criterion | Weight |
|---|---:|
| Five-second clarity | 25% |
| Differentiation | 25% |
| Claim safety | 20% |
| Solo-ICP fit | 15% |
| Localization resilience | 10% |
| Visual fit | 5% |

### 5.2 Weighted scores

| Candidate | 5-sec clarity (25%) | Differentiation (25%) | Claim safety (20%) | Solo-ICP fit (15%) | Localization (10%) | Visual fit (5%) | **Weighted** |
|---|---:|---:|---:|---:|---:|---:|---:|
| **`operational_clarity`** | 4 | 5 | 5 | 5 | 4 | 4 | **4.60** |
| `beyond_calendar` | 2 | 4 | 5 | 3 | 4 | 5 | **3.60** |
| `fragmented_week` | 4 | 3 | 2 | 5 | 3 | 4 | **3.40** |
| `booking_to_payment` | 3 | 3 | 3 | 4 | 3 | 4 | **3.20** |

### 5.3 Rationale per candidate

#### `operational_clarity` — “Know what still needs doing” / “— and what was actually paid.”

| Criterion | Score | Evidence-backed rationale |
|---|---:|---|
| Five-second clarity | **4** | States an outcome in five plain words with no category knowledge required. It is deliberately **not** a 5: the H1 names what the reader will *know*, not what the software *is*. Plan §3.1 assigns the category shelf to metadata and the body, not to the headline, so the missing shelf is a designed trade-off rather than a defect — but it is still a real cost for a cold visitor, and the score records that. |
| Differentiation | **5** | Neither half survives being copied by a passive calendar. “Still needs doing” requires the unresolved-work projection where reading does not clear the row (MSG0 evidence §3.2: `listActionItems` projects only unresolved domain rows; `does not remove the action item when the notification is marked read`). “Actually paid” requires the fulfilment/money split (MSG0 §3.6: a visit can be `COMPLETED` with `paymentStatus: 'PENDING'`; ADR-0002 makes allocations cash truth). Rails §1 lists these as differentiators 1 and 2. |
| Claim safety | **5** | Every clause maps to a current PASS row — F1, F5/F6 in the headline; F1, F4, F5/F6, F3 in the body (MSG0 §2.1 and evidence §3.7). MSG0 §7 records no accounting, processing, DM-import, AI, native-app, team or guarantee inference for this candidate. The single residual is F1 being PASS-on-source with its integration run blocked; the wording claims nothing the source does not support. |
| Solo-ICP fit | **5** | Second person, one operator, one day. It restates the flagship JTBD almost verbatim — product-marketing context: *“Stop losing track of what still needs doing after a busy day”* and *“Know what I actually earned this week without rebuilding it from memory.”* Nothing in it addresses a salon, a team or a manager. |
| Localization resilience | **4** | No idiom, no wordplay, no pun; the structure is two plain relative clauses. Held off 5 by one named risk: “paid” is the highest-risk word in the set and the risk register (plan §14) makes “‘paid’ translated as profit/accounting income” a launch blocker. The locale contract §8.2 constrains it; it does not eliminate it. |
| Visual fit | **4** | 27 + 29 characters, 57 in the joined H1. The accent is a six-word clause, so it cannot collapse to a one-word orphan line — but “paid.” can still land alone at 390 px, and the leading em dash is its own break token. See §9. |

#### `beyond_calendar` — “Your business runs beyond” / “the calendar.”

| Criterion | Score | Evidence-backed rationale |
|---|---:|---|
| Five-second clarity | **2** | Tells a cold visitor what Perelai is *not*. It only lands for a reader who already holds the “this is another booking calendar” frame; a visitor without that frame gets no product information at all. MSG0 §7 records it as “abstract.” This is the score that keeps it out of first launch. |
| Differentiation | **4** | An explicit category reframe a calendar product cannot honestly make. Held off 5 because it *asserts* difference instead of naming a mechanism — a competitor could publish the identical sentence tomorrow without changing anything in their product. |
| Claim safety | **5** | It claims no capability, so nothing can be overclaimed. MSG0 §7 scores every false-inference column Low or None. |
| Solo-ICP fit | **3** | “Your business” reads identically to a 12-chair salon owner and a solo colorist. It neither targets nor excludes the flagship, which is exactly the ambiguity rails §1 and the “built for salons with 12 chairs, not me” anxiety exist to remove. |
| Localization resilience | **4** | Translates as a preposition phrase in all nine locales. Residual risk: several target languages render “beyond” with a temporal reading (“after the calendar”), which changes the argument. |
| Visual fit | **5** | 25 + 13 characters, the shortest pair in the set; the accent is a two-word noun phrase that wraps as a unit. |

#### `fragmented_week` — “Stop rebuilding your workweek” / “from DMs, notes and memory.”

| Criterion | Score | Evidence-backed rationale |
|---|---:|---|
| Five-second clarity | **4** | The most immediately recognisable line in the set; it names a concrete daily behaviour. Not a 5 for the same reason as the winner — it describes the situation, not the product. |
| Differentiation | **3** | Any booking tool, CRM or notes app can print this sentence. It is switching language, not mechanism language, and rails §1 puts mechanism first. |
| Claim safety | **2** | The lowest score in the set, and disqualifying for first launch on two counts. (a) MSG0 §7 records a **Medium** DM-import inference risk: “from DMs” invites the reader to conclude Perelai reads or imports direct messages, which is a hard ban (plan §13, “automatic DM ingestion or message-reading implication”). (b) Its persuasive force rests on pain language that MSG0 §3.2 rated **provisional** — DM-booking overload appears in **1** independent thread against a ≥5 threshold, and every source failed live recheck (HTTP 403). Publishing it as recognition would present unverified proxy language as established customer truth. |
| Solo-ICP fit | **5** | “Your workweek,” DMs, notes and memory is the flagship operator’s literal day, and it matches the rails §1 Push force word for word. |
| Localization resilience | **3** | “Rebuilding your workweek” is idiomatic. Several published locales have no single-word “workweek” and back-translate toward *working hours*, which changes the sentence from “reconstructing what happened” to “reducing the hours you work.” |
| Visual fit | **4** | 29 + 26 characters; balanced, no orphan risk beyond the winner’s. |

#### `booking_to_payment` — “From booking to payment” / “— keep the next step visible.”

| Criterion | Score | Evidence-backed rationale |
|---|---:|---|
| Five-second clarity | **3** | The lifecycle span is classifiable, but “the next step” is unanchored — the reader is not told whose step, in what, or why it would otherwise be invisible. |
| Differentiation | **3** | “From booking to payment” is the span every booking suite already claims. The differentiating half is a weaker restatement of F1 than the winner’s. |
| Claim safety | **3** | MSG0 §7 records a **Medium** payment-processing inference risk. “From booking to payment” reads naturally as *Perelai takes the payment*, colliding with the F5 never-say list (“payment processing,” “we handle payments,” “get paid instantly”) — Perelai **records** payments. Salvageable with body support, but not safe as the lead. |
| Solo-ICP fit | **4** | Operator-shaped and free of salon framing, but less specific to the flagship day than the winner or `fragmented_week`. |
| Localization resilience | **3** | Carries the same “paid/payment” hazard as the winner while putting the risky noun in the headline’s strongest position, and adds a second failure mode: *payment* reading as *payment processing* in locales where the two share a root. |
| Visual fit | **4** | 23 + 28 characters; balanced. |

### 5.4 Selection decision

`operational_clarity` wins at **4.60**, ahead of `beyond_calendar` (3.60), `fragmented_week` (3.40) and
`booking_to_payment` (3.20).

Per binding-plan §5.3 the default winner may be replaced **only** by concrete contradictory evidence in
MSG0. MSG0 contains none: its claim contract is PASS for exactly the winner’s clauses (§2.1), its
false-inference audit (§7) records the winner as the only candidate with no Medium-or-higher risk
column, and its research verdict (§3.4) blocks pain-led wording rather than mechanism-led wording. The
default therefore stands on evidence, not on preference.

`beyond_calendar` is confirmed as the future challenger for the first true A/B test (plan §7.4): it is
the only alternative that scores 5 on claim safety and 4+ on differentiation, and its one disqualifying
weakness — five-second clarity — is precisely what a comprehension test is for. It is a **documented
reserve**, not a runtime branch. No candidate in this table becomes an environment value, a query
switch, a cookie, a flag or a random assignment in MSG0–MSG5.

---

## 6. Seven Sweeps (MSG1)

Subjects: the winning `title` + `accent`, the shared `body`, and the dependent drafts (`meta.title`,
`meta.description`, `closing.title`, internal one-liner, `siteConfig.description`).

Two hard constraints bound this pass. The hero `title`/`accent`/`body` are **first-launch invariants** —
they are frozen inputs to MSG1, not editable drafts. The body is additionally fixed across all four
candidates (plan §5.1), so shortening it would destroy candidate comparability for any future test.
Findings that would otherwise have produced an edit are therefore recorded with an explicit
disposition: **INVARIANT** (cannot be edited in this phase), **ACCEPTED** (trade-off, rationale
recorded), or **DEFERRED** (named later phase owns it).

### 6.1 Sweep 1 — Clarity

| Finding | Disposition |
|---|---|
| H1 reads as one grammatical sentence across the colour boundary: “Know what still needs doing — and what was actually paid.” No dangling clause, no unclear pronoun. | PASS |
| “Unresolved work” is product vocabulary, not chair vocabulary. A colorist would more likely say “what I still have to deal with.” | **ACCEPTED** — the plain form already carries the H1 (“what still needs doing”); the body’s clause self-defines within the same sentence (“until you deal with it”). Recorded in §8 as a body-language idea for a future challenger, not an MSG1 edit. |
| Body sentence 1 is 22 words with a three-item list — near the web scan limit at 17–19 px. | **INVARIANT** (fixed shared body). Mitigated by sentence 2 at 5 words, which restores rhythm. |
| Meta description’s “Keep …” is imperative and could read as an instruction to the reader rather than a product behaviour. | **ACCEPTED** — imperative product framing is the search-result convention, and the preceding sentence establishes the subject. |
| “Rule of One” holds: the hero advances exactly one argument (know the two things that matter). “You Rule” holds: second person throughout. | PASS |

### 6.2 Sweep 2 — Voice and tone

| Finding | Disposition |
|---|---|
| Direct, concrete, no adjective stacking, no exclamation points — matches the documented voice (“Direct, honest, founder-led”; “concrete over adjectives”). | PASS |
| No formality drift between H1, body, metadata and closing; all are plain declaratives in the same register. | PASS |
| Closing title is two short sentences where the hero is one — a deliberate cadence change at the page’s end, not a tonal shift. | PASS |
| No banned style word present: no *streamline, optimize, seamless, empower, innovative, leverage, effortlessly*. | PASS |
| Re-check of Sweep 1 after this sweep: no edits made, clarity findings unchanged. | PASS |

### 6.3 Sweep 3 — So what

| Statement | “So what?” answer present? |
|---|---|
| “Know what still needs doing” | The outcome **is** the benefit — the reader stops losing track after a busy day. PASS |
| “— and what was actually paid.” | Answers the documented money anxiety (“What did I actually earn this week?”). PASS |
| “keeps unresolved work visible until you deal with it” | Consequence is stated inside the clause: it does not disappear when read. PASS |
| “connects visits to client history” | Weakest link in the set — the benefit is implied (you can see a client’s past before you serve them), not stated. **ACCEPTED**: it is deliberately positioned as supporting/table-stakes proof (plan §4, MSG0 §4.2), and stating its benefit fully would compete with the two mechanisms for the reader’s attention. |
| “separates completed work from money received” | Benefit is one clause away in the H1 accent (“what was actually paid”) rather than in the sentence itself. PASS by proximity. |
| “Clients book through one link.” | Supporting capability, benefit obvious and unstated by design. PASS |
| Re-check of Sweeps 2 and 1: unchanged. | PASS |

### 6.4 Sweep 4 — Prove it

| Claim in frozen copy | Proof | Verdict |
|---|---|---|
| unresolved work stays visible until dealt with | F1 — `inbox.service.ts` `listActionItems`; ADR-0009; existing spec `does not remove the action item when the notification is marked read`. **PASS (source)**; integration run blocked on `TEST_DATABASE_URL`. | PASS with recorded residual |
| what was actually paid / separates completed work from money received | F5 + F6 — ADR-0002 allocations as cash truth; `useGhostVisitUndo.spec.ts` (`COMPLETED` + `paymentStatus: 'PENDING'`), 15 tests passed; `payment-accounts` and `finance` unit suites within the 173-test batch. | PASS |
| connects visits to client history | F4 — `clients.service.ts` + `notes.service.ts` unit suites within the 173-test batch. | PASS |
| Clients book through one link. | F3 — `public-booking.service.spec.ts` passed; no commission module present. | PASS |
| Category shelf: “Booking, client and money software for independent service professionals” | Rails §1 category line; ICP unchanged. | PASS |
| **Zero** statistics, customer counts, testimonials, logos, named customers, performance promises or superlatives appear in any frozen string. | Nothing to prove because nothing is asserted. | PASS |
| No unearned superlative, no absolute (`100%`, `always`, `never`, `guaranteed`, `flawless`). | Automated token scan of all seven frozen strings: clean. | PASS |
| Re-check of Sweeps 3, 2, 1: unchanged. | | PASS |

### 6.5 Sweep 5 — Specificity

| Finding | Disposition |
|---|---|
| “Still,” “actually” and “received” are the three load-bearing words. Each names a distinction the product actually implements rather than intensifying an adjective. | PASS |
| The generic copy-editing rule cuts *actually* as filler. Here it is **not** filler: it is the entire F5/F6 argument — it separates money recorded as received from work merely booked or completed. Removing it would collapse the accent into a parity claim. | **ACCEPTED — documented exception** to the standard filler rule. |
| Same for *still* in “what still needs doing”: it carries the F1 unresolved-until-resolved semantics, not emphasis. | **ACCEPTED — documented exception.** |
| No number, timeframe or quantity appears anywhere in the frozen copy. | **ACCEPTED** — the pre-commercial proof strategy (rails §5) bans unearned numbers; specificity is carried by the mechanism nouns instead, which is the sanctioned substitute (“Specificity as proof”). |
| “A clear record of what was paid” (closing) uses *clear* as an adjective where the hero uses a verb. | **ACCEPTED** — closing copy recaps rather than argues; the recap is measurably weaker than the hero by design (plan §5.5: “recap, not introduce a fifth message angle”). |
| Body uses “completed work” where the meta description uses “completed visits.” | **ACCEPTED and intentional**: *Visit* is the product glossary term and belongs in the machine-readable surface; “work” pairs with “unresolved work” in the hero body’s own sentence. Both map to F6. |
| Re-check of Sweeps 4, 3, 2, 1: unchanged. | PASS |

### 6.6 Sweep 6 — Heightened emotion

| Finding | Disposition |
|---|---|
| The emotional load sits on recognition, not on dramatised pain: “what still needs doing” and “what was actually paid” are the two questions the documented ICP asks themselves. | PASS |
| Deliberately flat where a pain-led candidate would be vivid. That is a constraint, not an oversight: MSG0 §3.2 puts every pain theme below the ≥5-independent-signal threshold with all sources unreverified, so dramatising the reader’s day would be persuasion built on unverified proxy language. | **ACCEPTED** |
| “Actually” carries the only emotional charge in the set — it acknowledges that the reader has been told a number before and did not trust it. That is the Pratfall/honesty mechanism from plan §3.3, applied without a claim. | PASS |
| No manufactured urgency, scarcity, FOMO or loss framing. None is available pre-commercially (rails §5, `docs/commercial-policy.md`). | PASS |
| Re-check of Sweeps 5, 4, 3, 2, 1: unchanged. | PASS |

### 6.7 Sweep 7 — Zero risk

| Finding | Disposition |
|---|---|
| Risk reversal near the CTA is unchanged and still accurate: “No card. You’ll get a verification email to finish setting up.” | PASS — **out of MSG1 scope**; CTA labels, destinations and microcopy are frozen invariants and were not edited. |
| The hero creates two open questions (“what still needs doing?” / “what was actually paid?”) that the existing page answers in order — Problem → Inbox, then Money. | PASS — page order unchanged. |
| The hero could raise an unanswered “is this accounting?” objection through the word *paid*. | **DEFERRED to existing surfaces** — FAQ 6 and the “What Perelai is not” section already answer it, both unchanged. No new copy added. |
| Nothing in the frozen set implies a native app, an install requirement, an App Store listing, a team, a coworker, shared availability, or automatic DM ingestion. | PASS — see §9.3 admission check. |
| Final loop back through Sweeps 6 → 1 after the full pass: **no edit was made in any sweep**, so no earlier finding was invalidated. Every finding above is disposed as INVARIANT, ACCEPTED or DEFERRED, with its reason recorded. | PASS |

**Sweep outcome: zero copy edits.** That is the correct result for this phase — the hero is a binding
invariant and the dependent drafts survived all seven passes. The three findings that would otherwise
have produced an edit (body length, “unresolved work” register, closing-title adjective) are recorded
above and carried into §12 as open items, not silently dropped.

---

## 7. Copy-editing checklist (full pass, 2026-08-03)

Source: `copy-editing/references/checklist.md`.

| Sweep | Item | Result |
|---|---|---|
| Before | Goal of this copy understood | ✅ First-launch homepage hero + dependent positioning surfaces |
| Before | Target audience known | ✅ Independent US colorists / premium solo beauty professionals |
| Before | Desired action identified | ✅ Create your free workspace (unchanged) |
| Before | Read through once without editing | ✅ |
| 1 | Every sentence immediately understandable | ✅ |
| 1 | No jargon without explanation | ✅ “Unresolved work” is defined in-sentence; no product-internal term (Visit, Order, Package, Allocation) appears in the hero |
| 1 | Pronouns have clear references | ✅ “it” → unresolved work; “you” → the reader throughout |
| 1 | No sentences trying to do too much | ⚠️ Body sentence 1 carries three clauses — **INVARIANT** (fixed shared body), mitigated by the 5-word second sentence |
| 2 | Consistent formality throughout | ✅ |
| 2 | Brand personality maintained | ✅ Honest, practical, calm, precise |
| 2 | No jarring shifts in mood | ✅ |
| 2 | Reads well aloud | ✅ — verified as the screen-reader string in §9.1 |
| 3 | Every feature connects to a benefit | ⚠️ “connects visits to client history” — benefit implied, **ACCEPTED** as supporting proof |
| 3 | Claims answer “why should I care?” | ✅ |
| 3 | Benefits connect to real desires | ✅ Maps to the two documented JTBD lines |
| 3 | No impressive-but-empty statements | ✅ |
| 4 | Claims are substantiated | ✅ Every clause maps to a PASS ledger row (§6.4) |
| 4 | Social proof specific and attributed | ➖ **N/A** — no social proof used; testimonials, logos and counts are banned pre-commercially |
| 4 | Numbers and stats have sources | ➖ **N/A** — no number appears in any frozen string |
| 4 | No unearned superlatives | ✅ Token scan clean |
| 5 | Vague words replaced with concrete ones | ✅ |
| 5 | Numbers and timeframes included | ➖ **N/A by policy** (rails §5) |
| 5 | Generic statements made specific | ✅ The rejected “in one place” frame is exactly the generic statement this freeze removes |
| 5 | Filler content removed | ✅ with two documented exceptions — *still* and *actually* are load-bearing, not filler (§6.5) |
| 6 | Copy evokes feeling, not just information | ⚠️ Deliberately restrained; **ACCEPTED** given LOW research confidence (§6.6) |
| 6 | Pain points feel real | ✅ via recognition rather than dramatisation |
| 6 | Aspirations feel achievable | ✅ Both promises are day-sized, not transformational |
| 6 | Emotion serves the message authentically | ✅ |
| 7 | Objections addressed near CTA | ✅ Unchanged microcopy; no new objection introduced |
| 7 | Trust signals present | ✅ Honesty-as-differentiation (“separates completed work from money received”) is the trust signal; no fabricated substitute |
| 7 | Next steps crystal clear | ✅ CTA unchanged |
| 7 | Risk reversals stated | ✅ “No card…” microcopy unchanged and still code-backed |
| Final | No typos or grammatical errors | ✅ Proofread against §11 character counts |
| Final | Consistent formatting | ✅ Em dash `—` matches the existing accent convention; sentence case; no trailing space |
| Final | Links work | ➖ N/A — no link in the frozen strings |
| Final | Core message preserved through all edits | ✅ Zero edits made |

---

## 8. Expert panel (MSG1)

Four perspectives per binding-plan §12.2. Each scores 1–10; the gate is every reviewer ≥7 with a panel
average ≥8.

> **Provenance warning.** All four perspectives are **reviewer roles applied by the executing agent**,
> including the “flagship solo professional.” None is a real person, a customer, an interview, or a
> five-second-test participant. Nothing in this section is Voice of Customer, and nothing here may be
> quoted, counted as a research signal, or used to mark the plan §6.2 comprehension protocol as run.
> That protocol remains **required future work** (MSG0 evidence §8).

### 8.1 Initial scores and critiques

| Reviewer | Initial | Critique |
|---|---:|---|
| Conversion copywriter | **8** | (a) The H1 gives no category. A visitor arriving cold learns the outcome before learning what kind of software this is, and must reach the body’s fourth clause for the shelf. (b) “Know what still needs doing” is a bare verb phrase with no object noun — strong as an outcome, weak as a product statement. (c) Nothing else in the set is weak: the accent does real differentiating work, and the CTA path is untouched. |
| UX writer | **7** | (a) The H1 is one 57-character sentence split across a colour boundary; it must be verified that assistive technology announces it as a single heading and not two fragments. (b) Body sentence 1 is 22 words with a three-item list — at the upper bound for scanning at 17–19 px. (c) “Unresolved work” is the only term in the hero that is system language rather than the reader’s language. |
| Flagship solo professional *(simulated role — not a real participant)* | **8** | (a) “What was actually paid” is the line that lands; “actually” is the word that signals someone understands the number has been wrong before. (b) “Unresolved work” is not how the work gets described in the chair. (c) Nothing in the copy suggests this is built for a salon, which removes the usual disqualifying reflex. |
| Skeptical product/claim reviewer | **7** | (a) F1 is PASS **on source only** — its integration run was blocked on an unset `TEST_DATABASE_URL`, so “keeps unresolved work visible until you deal with it” rests on source inspection plus existing test definitions, not a green live run. (b) “Actually paid” is one mistranslation away from “profit,” and that failure would be invisible on the English route. (c) The meta description’s imperative “Keep …” could be read as instructing the user rather than describing the product. |

### 8.2 Disagreements and how they were resolved

| Disagreement | Resolution |
|---|---|
| **Conversion copywriter vs. UX writer on the missing category.** The copywriter wants the shelf higher; the UX writer argues that adding it would push the H1 past a scannable length. | **OPEN — not resolved on the visible hero.** Plan §3.1 puts the category shelf on metadata/footer and the outcome on the H1, and `meta.title` / `meta.description` do carry an explicit software/workspace shelf. That does **not** fix cold-visitor classification *after arrival*: the visible `H1 + body` contains no `software`, `workspace`, or other explicit category noun, and the five-second protocol (plan §6.2) has not run. Treating this as closed would overclaim. Owner must choose before approval: (a) accept outcome-first hero and record category clarity as an **unvalidated risk**, or (b) change binding English/body and re-run sweeps, panel and freeze. Until that choice is recorded, this concern stays open. |
| **UX writer and solo-professional role agree** that “unresolved work” is system language; the claim reviewer opposes replacing it, because every plainer paraphrase tested against the ledger (“what you haven’t dealt with,” “loose ends”) either loses the until-resolved semantics or drifts toward an automation implication. | Resolved in favour of the claim reviewer, and constrained anyway: the body is a fixed shared string across all four candidates (plan §5.1), so editing it in MSG1 would break comparability for the future `beyond_calendar` test. Logged as a **future challenger-body idea**, not an MSG1 edit. |
| **Claim reviewer vs. the rest on whether F1’s blocked integration run should block the freeze.** | **Not scored away.** Claim-contract PASS for MSG0/MSG1 wording remains source-backed (MSG0 §2.3), but the skeptical reviewer’s panel score stays at **7** until `operational-inbox.integration.spec` runs green with a real `TEST_DATABASE_URL`. No conditional bump is applied before that condition. Recorded in §8.3 and §12. |
| **Solo-professional role vs. copywriter on the accent’s em dash** — whether “— and what was actually paid.” reads as an afterthought. | Resolved by the screen-reader and wrap audit in §9: the dash is a joining pause inside one announced heading, and the accent is a six-word clause that cannot orphan to a single word. The 390 px wrap check is handed to MSG4. **No copy change.** |

### 8.3 Final re-score

| Reviewer | Initial | Final | Basis for the change |
|---|---:|---:|---|
| Conversion copywriter | 8 | **8** | Category concern remains open (§8.2); score unchanged because the critique was about shelf placement, not a claim-safety failure. |
| UX writer | 7 | **8** | (a) resolved on inspection — the accent is an inline `<span>` inside a single `<h1>`, announced as one heading (§9.1). (b) and (c) reclassified as INVARIANT with the reason recorded, and the 390 px wrap check assigned to MSG4. |
| Flagship solo professional *(simulated role)* | 8 | **8** | Unchanged; its one critique was deferred, not fixed. |
| Skeptical product/claim reviewer | 7 | **7** | (b) and (c) are bound by locale contract / convention, but **(a) is unmet**: F1 integration is still blocked on unset `TEST_DATABASE_URL`. A later green run may justify raising this reviewer to 8; that condition has not occurred. Score stays **7**. |
| **Average** | **7.50** | **7.75** | Floor clear (all ≥7). **≥8 average gate not met.** |

**Honesty note.** No copy was changed between the initial and final scores. The re-score reflects
critiques resolved by recorded rationale, binding constraint or explicit deferral — not improvements to
the text. The F1 integration condition was previously counted early; that is corrected here. Category
clarity and F1 live-test remain genuinely open and are carried into §12 rather than scored away.

**Correction record (2026-08-03).** An earlier MSG1 draft reported skeptical reviewer **8 (conditional)** and
average **8.00 / Gate met**. That was premature: the condition (green F1 integration) had not passed.
Current honest scores are skeptical **7**, average **7.75**, gate **not met**.

---

## 9. Screen-reader and line-break audit

Layout, type scale, animation and markup are **not** edited in this phase. This section records what the
current markup does with the frozen strings and hands the visual checks to MSG4.

### 9.1 Screen-reader text

`components/homepage/hero.tsx` renders the H1 as `{t("hero.title")}{" "}<span …>{t("hero.accent")}</span>`.

| Check | Result |
|---|---|
| Announced string | `Know what still needs doing — and what was actually paid.` |
| Single heading or two? | **Single.** The accent is an inline `<span>` inside one `<h1>` — it carries colour, not semantics, so assistive technology announces one level-1 heading, not two fragments. |
| Separator between title and accent | Exactly one space, supplied by `{" "}`. No missing space, no double space. |
| Grammatical as one unit | ✅ Reads as one sentence. It stays grammatical whether the screen reader announces the em dash, renders it as a pause, or skips it entirely. |
| Terminal punctuation | ✅ The full stop lives on the accent, so the heading ends cleanly. |
| Locale consequence | Locale drafts must keep `title + accent` grammatical with one space between them, and must not move the terminal punctuation into `title` (locale contract §8.2). |

### 9.2 Likely line breaks (informational — no layout change)

The H1 is `text-balance`, `40px` below `sm` and `56px` at `sm`+, `leading-[1.05]`, `tracking-tight`,
inside `lg:col-span-7`.

| Width | Expectation | Risk |
|---|---|---|
| 390 px (40 px type) | ~57 characters over roughly 4 balanced lines | **“paid.” alone on the final line.** The accent cannot collapse to a one-word orphan of the whole phrase, but its last token can still land alone. Plan §12.1 already requires “accent is not orphaned on a one-word final line” — this is the exact case to check. |
| 390 px | — | **A line may end on the bare em dash.** The accent string tokenises as `—` / `and` / `what` / …, so `—` is its own break opportunity and can sit at the end of a line, immediately after the non-coloured title. Typographically acceptable, but worth eyeballing at the colour boundary. |
| 768 / 1024 px | 2–3 lines | Low |
| 1440 px (56 px type, 7-column) | 2 lines, natural break at or near the em dash | Low |

**Handed to MSG4:** verify both risks above at 390 px in all nine published locales, light and dark, and
spot-check 768/1024/1440. Do **not** fix a bad wrap by reducing the font size (plan §12.1).

### 9.3 Held / banned admission re-check on the frozen set

| Item | Present in any frozen string? |
|---|---|
| TC5 coworker / shared availability / occupied times / privacy sync / double-booking | **No** |
| Team, staff, salon, colleague, “built for teams” | **No** |
| Client hub / magic link | **No** |
| Personal CFO / CRM / ERP / all-in-one / billing / accounting / bookkeeping | **No** |
| Native app / iOS / Android / install / download / App Store / Google Play | **No** |
| AI / smart Inbox / automation / “we handle the rest” | **No** |
| Automatic DM ingestion or message-reading implication | **No** |
| Public Apple/Stripe comparison | **No** |
| “finally,” “at last,” “all in one,” “everything you need,” “in one place” | **No** |
| Absolutes (`100%`, `always`, `never`, `guaranteed`, `flawless`, `magic`) | **No** |
| Exclamation point | **No** |
| Statistic, testimonial, logo, customer count, performance promise | **No** |
| Generic filler (`streamline`, `optimize`, `seamless`, `empower`) | **No** |

---

## 10. Rejected direction register (MSG1)

Every supplied direction that did not enter the freeze, with the reason it was rejected. Retained here as
the historical audit record so the reasoning survives after the rails stop mentioning these lines.

| # | Supplied direction | Reason rejected | Where the ban lives |
|---|---|---|---|
| 1 | **“…finally in one place” / “in one place”** — the current live hero, *“Your clients, bookings and cash flow — finally in one place.”* | Category parity: booking tools, CRMs, calendars and salon suites can all say it unchanged, so it differentiates nothing. “Finally” adds novelty theatre without naming anything novel. Together they make Perelai sound like a larger planner rather than a system that keeps unresolved work visible and separates completed work from received money. | Rails §4.1 (new row, MSG1); plan §0 and §13 |
| 2 | **“Personal CFO”** | Creates accounting, tax, forecasting and financial-advice expectations against a product that records payments and shows a finance overview. Also a pre-existing hard ban. | Rails §4.1 (existing row) |
| 3 | **“Your business is art. Your CRM should be too.”** | Uses a banned category (CRM), flatters instead of explaining, and makes aesthetics carry the differentiation. | Rails §4.1; plan §5.4 |
| 4 | **“Elegant operating system for independent professionals”** | Jargon plus enterprise weight; “operating system” forces the reader to decode what the product does, which is the ambiguity-aversion failure mode in plan §3.3. | Plan §5.4; rails §4.3 |
| 5 | **“Flawless service starts before the visit”** | An absolute B2C outcome promise Perelai cannot guarantee, and it addresses the client’s experience rather than the operator’s unresolved-work and money problem. | Plan §13 (absolutes); rails §4.1 |
| 6 | **“Run your business from one smart Inbox”** | “Smart” implies AI, which is not shippable (rails §3), and it shrinks the whole product to one feature. | Rails §2.1 F1 never-say; plan §13 |
| 7 | **Private coworking sync / “100% privacy” / “complete isolation”** | TC5 is `HOLD`; no coworker sentence, key, label, panel or visual may ship. The privacy absolutes are additionally false at several boundaries — company name, colour and occupied intervals genuinely do cross. | `docs/team-collaboration-claim-contract.md` TC5; rails §2.2 F25 + §4.1 |
| 8 | **“The Apple/Stripe of …”** | Borrowed authority and a competitor-trademark comparison that adds no customer value. Retained as an **internal quality bar only** (calm, precise, coherent), never as public copy. | Plan §3.4 |
| 9 | **Liquid Glass / European minimalism** | Implementation and style language, not a reason to buy. Retained as a **visual brief**, not a claim. | Plan §4 |
| 10 | **“Everything you need…” / “all in one”** | Returns to undifferentiated feature aggregation and invites a feature-count comparison Perelai does not win. | Rails §4.1; plan §13 |
| 11 | **Automatic conflict resolution / “the system handles it”** | Overstates checks as automation and reads as a guarantee. Coworker occupied times are *checked on save*; that is a check, not a promise. | Rails §4.1; TC7 |
| 12 | **Google Calendar as the hero wedge** | Stays in Setup. Promoting an integration to the hero would make availability a headline promise under its own claim/integration readiness contract. | Plan §4 |
| 13 | **Client hub / magic links in the hero** | Requires a separate current-source claim audit and shifts the hero’s focus to a secondary user (the client) rather than the operator. | MSG0 §4.2 |
| 14 | **Niche colorist hero lines** (e.g. “Your color business, beyond the calendar”) | Better suited to a niche route than the general homepage; using them here would also collide with the ≥60% niche uniqueness rule. | Plan §5.4; rails §9 |

**Not rejected — documented reserves.** `beyond_calendar`, `fragmented_week` and `booking_to_payment`
remain candidate records in plan §5.2 and §5 above. They are not rejected copy, and they are not runtime
configuration. `fragmented_week` additionally may not be published in any form until its DM-import
inference risk is resolved and its pain language stops being presented as verified customer research.

**Historical retention.** The exact rejected hero string is preserved in row 1 above and in the rails
§4.1 ban row, so the old positioning stays auditable after it is removed from active positioning.

---

## 11. Frozen English — `AWAITING OWNER APPROVAL`

### 11.1 The frozen set

| Key / surface | Frozen English | Chars |
|---|---|---:|
| `home.hero.title` | `Know what still needs doing` | 27 |
| `home.hero.accent` | `— and what was actually paid.` | 29 |
| `home.hero.body` | `Perelai keeps unresolved work visible until you deal with it, connects visits to client history, and separates completed work from money received. Clients book through one link.` | 177 |
| `home.meta.title` | `Perelai — Booking, Client & Money Workspace` | 43 (≤60 ✅) |
| `home.meta.description` | `Booking, client and money software for independent service professionals. Keep unresolved work visible and completed visits separate from money received.` | 153 (≤155 ✅) |
| `home.closing.title` | `One list for what needs doing. A clear record of what was paid.` | 63 |
| `siteConfig.description` (`lib/site.ts`) | *Identical to `home.meta.description` above.* | 153 |
| Internal product one-liner *(not public copy)* | `Perelai is booking, client and money software that keeps unresolved work visible and completed work separate from money received.` | 129 |

Joined H1 as announced by assistive technology: `Know what still needs doing — and what was actually paid.` (57 chars).

### 11.2 Clause → claim map

| Frozen phrase | Ledger | MSG0 status |
|---|---|---|
| Know what still needs doing | F1 | PASS (source; integration run blocked) |
| — and what was actually paid. | F5 / F6 | PASS |
| keeps unresolved work visible until you deal with it | F1 | PASS (source) |
| connects visits to client history | F4 | PASS |
| separates completed work from money received | F5 / F6 | PASS |
| Clients book through one link. | F3 | PASS |
| Keep unresolved work visible *(meta)* | F1 | PASS (source) |
| completed visits separate from money received *(meta)* | F5 / F6 | PASS |
| One list for what needs doing *(closing)* | F1 | PASS (source) |
| A clear record of what was paid *(closing)* | F5 / F6 | PASS |
| Booking, client and money software for independent service professionals | Category line, rails §1 | Positioning, not a capability claim |

No frozen phrase depends on F25/TC5, on a device row, or on any `HOLD` or `BLOCKED` contract row.

### 11.3 Approval record

| Field | Value |
|---|---|
| Status | **`AWAITING OWNER APPROVAL`** |
| Frozen by | MSG1 executor (agent), 2026-08-03 |
| Approved by | — |
| Approval date | — |
| Exact approved set | — |

**This status may be changed only by a real reply from the repository owner.** An agent may not approve
its own English source (plan §8.1). When approval arrives, record the approver, the date, and the exact
set of strings approved; if any single string is rejected, MSG1 stays open and MSG2 must not begin —
smaller models must not improvise a replacement during translation.

---

## 12. MSG1 gates and verdict

| Gate | Result |
|---|---|
| All four candidates scored on the §5.3 weighted rubric with evidence-backed rationale | **PASS** (§5) |
| `operational_clarity` retained as default; replaced only on concrete MSG0 contradiction | **PASS** — no contradiction exists (§5.4) |
| Seven Sweeps run on winner and dependent drafts, with earlier sweeps re-checked | **PASS** (§6) |
| Full copy-editing checklist run | **PASS** (§7) |
| Four-perspective panel with scores, critiques, disagreements, resolution, re-score | **HOLD** — all ≥7, but average **7.75** (below 8). Skeptical reviewer remains 7 until F1 integration is green (§8.3) |
| Panel perspectives not presented as customers or as five-second-test participants | **PASS** (§8 provenance warning) |
| `title + accent` audited as screen-reader text and at likely wraps; no layout edited | **PASS** (§9) |
| Every supplied rejected direction recorded with a reason | **PASS** (§10, 14 rows) |
| Exact English frozen for hero, metadata, closing, one-liner and site description | **PASS** (§11.1) — presented, not owner-approved |
| Every frozen phrase maps to a PASS claim row | **PASS** (§11.2) |
| No claim loosened; no `HOLD`/`BLOCKED` row promoted | **PASS** |
| No runtime variant registry, env switch, query switch, cookie, flag or random assignment introduced | **PASS** — documentation only |
| No fabricated participant, statistic, quote, sample or conversion rate | **PASS** |
| Documentation-only diff; no messages, React, analytics, environment or product edits | **PASS** |
| **Panel average ≥8** | **NOT MET** — 7.75 |
| **Owner approval present** | **MISSING** |
| **Category-clarity owner decision** | **MISSING** — concern open (§8.2) |

### Verdict

**MSG1 = HOLD — panel ≥8 gate unmet and English approval required.**

Not every executable gate passed. The panel average is **7.75** because the skeptical reviewer correctly
stays at **7** while F1’s focused integration run is blocked. Owner approval of §11.3 is also missing.
MSG2 must not begin until both are cleared (or the panel gate is explicitly waived/revised by the
owner with a dated record). Category clarity on the visible hero remains an open owner decision.

### Open items carried forward

| # | Item | Owner |
|---|---|---|
| 1 | Owner approval of the §11.1 frozen set | Repository owner — blocks MSG2 |
| 2 | F1 integration run (`operational-inbox.integration.spec`) still blocked on `TEST_DATABASE_URL`; F1 remains PASS-on-source. Until green, skeptical panel score stays **7** and average **7.75** | Run now with a real test DB, or keep HOLD / record an explicit gate waiver |
| 3 | Category clarity on visible `H1 + body`: accept unvalidated outcome-first risk, or change English and re-freeze | Repository owner — record before approval |
| 4 | Five-second comprehension protocol (plan §6.2) not run — no participants, none simulated | Required before qualitative validation can be called PASS |
| 5 | 390 px wrap: “paid.” orphan and bare em-dash line ending, all nine locales | MSG4 |
| 6 | “Unresolved work” is system language rather than chair language in the shared body | Future challenger-body idea; not an MSG1 or MSG2 edit |
| 7 | `siteConfig.title` in `lib/site.ts` still reads “Perelai — Clients, Bookings & Cash Flow for Independent Professionals” — stale ordering, though it contains no banned phrase. Not in the MSG1 freeze set. | MSG2 to decide; flagged, not frozen here |
| 8 | `docs/experiment-backlog.md` entry 2 (“CTA Copy”) proposes a CTA change that already shipped. Stale, and outside the MSG1 hero-entry scope. | MSG5 backlog review |
