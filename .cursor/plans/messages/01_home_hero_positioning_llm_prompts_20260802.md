# Finance-first homepage migration — phase prompts for smaller LLMs

**Binding plan:** `00_home_hero_positioning_and_experiment_plan_20260802.md`

**Repository:** `/Users/valery/Sites/perelai-landing`

**Product evidence repository:** `/Users/valery/Sites/beauty-finance`

**Revised:** 2026-08-03

**Status:** prompt library only; each phase requires a separate execution context

Use one phase prompt at a time. Prepend the universal preamble verbatim. A phase PASS authorizes only
the next phase’s review; it does not authorize a commit, deployment, translation, experiment, or any
later phase.

---

## 1. Universal preamble — prepend to every phase

```text
You are executing exactly one phase of the Perelai finance-first homepage migration in:
/Users/valery/Sites/perelai-landing

The product evidence repository is read-only unless the phase explicitly says otherwise:
/Users/valery/Sites/beauty-finance

Read these documents completely before acting:
- .cursor/plans/messages/00_home_hero_positioning_and_experiment_plan_20260802.md
- docs/finance-claim-contract.md
- .cursor/plans/reference/messaging-and-claims.md
- .agents/product-marketing.md
- docs/commercial-policy.md or the repository’s actual commercial-policy source, if present

Also read, when the phase touches its surface:
- docs/tracking-plan.md for analytics or experiments
- docs/device-claim-contract.md and the DVC plans for device/install wording or homepage order
- docs/team-collaboration-claim-contract.md and TEAM plans for team/coworker wording or order
- docs/research/home-hero-message-evidence-2026-08-02.md for research provenance
- docs/home-hero-copy-audit.md for historical MSG decisions

Repository discipline:
1. Record the exact landing HEAD, product HEAD, `git status --short`, and changed-file ownership first.
2. The worktree may be dirty. Preserve all unrelated user changes. Do not stage, commit, push, reset,
   revert, delete, deploy, publish, or edit environment/secrets.
3. Use `rg`/`rg --files` for discovery and `apply_patch` for hand edits.
4. Do not execute a later phase “while here.” If a dependency belongs to another phase, record it and
   stop the dependent work.
5. Read the actual package scripts before running commands. Do not invent commands or report a command
   as PASS unless you ran it and captured its result in this phase.
6. A dirty worktree, local render, test, or build is not a deployment. Use “provisional,” “worktree,”
   or “candidate”; never “live,” “published,” or “shipped” without production verification.
7. Do not change app/product code. Product code is evidence for this landing plan unless the user gives
   separate authorization.

Binding positioning:
- Category: financial tracking and analytics software for independent service businesses.
- Short category where required: simple finance software for service businesses.
- Primary ICP: solo and small owner-led service businesses; do not presuppose a team.
- Booking, Calendar, Inbox, clients, devices, and collaboration are supporting operational mechanisms,
  not the primary category.
- Perelai is operational finance software, not accounting, bookkeeping, tax, bank sync, payroll,
  cash forecasting, or financial advice.

Binding financial semantics:
- Completed work, settled revenue, recorded cash, expenses, open-order balance, and product-defined
  profit are different concepts.
- Never equate completed work, settled revenue, and cash.
- Package redemption may settle work without a cash movement.
- “Outstanding” is limited to the verified open-order/instalment scope unless broader evidence passes.
- Verified service aggregation is category-level; do not promise individual-service analytics.
- Do not use `earned`, “brought in,” “received money,” or `income` until the repaired claim row gives an
  unambiguous marketing-safe meaning.
- Do not claim export, refunds, corrections, accounting, banking, tax, forecasts, blanket automation,
  “without manual entry,” or guarantees.
- “Profit” may describe only the exact product calculation and must not imply accounting profit.

Copy and research discipline:
- Recommendations, founder opinion, competitor copy, proxy forums, and first-party VOC are different
  evidence classes. Label each one.
- Never invent quotes, participant feedback, traffic, conversion rates, or approvals.
- A smaller LLM may draft copy and translations; it may not approve them.
- English requires exact owner approval before translation. Every non-English locale requires named
  human review before publication.
- Preserve approved signup labels, domain handoff, verification-email helper, privacy constraints,
  DVC claims, and TEAM claims unless their owner phase explicitly changes them.

Skill discipline:
- Read each skill’s full SKILL.md before phase actions. Read any reference that SKILL.md requires for
  this task. State which skills are used and how they affected the work.
- Do not load unrelated marketing skills to inflate the report.

End-of-phase report, in this exact order:
1. `PHASE = PASS | HOLD | FAIL` and one-sentence reason.
2. Landing/product HEADs and repository status at start and end.
3. Files read; files changed; unrelated dirty files preserved.
4. Claim rows used, repaired, held, or rejected.
5. Human approvals present or missing, with exact scope.
6. Commands run and exact outcomes; distinguish not run from failed.
7. Findings by P1/P2/P3 severity.
8. The single next authorized phase and its prerequisites.

PASS only if every blocking gate for this phase passed. A HOLD in one optional claim row must not
falsely fail unrelated work, but the held claim must stay out of public copy.
```

---

## 2. FM0 — Worktree audit and supersession record

### Skills

Load `product-marketing`, `copy-editing`, and `cro`.

### Prompt

```text
Execute FM0 only: audit the partial finance-first worktree and establish truthful project state.

Allowed writes:
- docs/finance-first-migration-audit.md (create or update)
- .agents/product-marketing.md only to replace false state labels such as live/published with
  provisional/worktree language
- .cursor/plans/reference/messaging-and-claims.md only for the same state-label correction and an
  explicit note that the old MSG sequence is superseded

Do not change public messages, components, metadata, tests, claim meanings, translations, experiment
code, or product code.

Tasks:
1. Record landing/product HEADs and both repository statuses.
2. Attribute every dirty/untracked file to pre-existing work, this finance pivot, or unknown owner.
3. Inventory every surface touched by the partial pivot: hero, metadata, FAQ, closing/footer, site
   defaults, finance claim contract, canonical docs, translations, tests, and experiment docs.
4. Compare each “current/live/published/shipped” statement with actual deployment evidence.
5. Mark the former MSG sequence and copy audit as historical/superseded without deleting history.
6. Record the reported technical gates separately from gates rerun now.
7. Produce a P1/P2/P3 defect register matching R1–R13 in the binding plan, adding evidence paths and
   line numbers.
8. End with the exact prerequisite list for FM1.

Gate:
- PASS only when state wording is truthful, the changed-file inventory is complete, and no public
  implementation was modified.
- HOLD if file ownership cannot be determined safely; do not absorb unknown changes.
```

---

## 3. FM1 — Repair the finance evidence and claim contract

### Skills

Load `product-marketing` and `copy-editing`.

### Prompt

```text
Execute FM1 only: make the finance claim contract internally consistent and source-backed.

Prerequisite: FM0 PASS.

Allowed writes:
- docs/finance-claim-contract.md
- a focused evidence appendix under docs/research/ if the contract would become unreadable
- focused landing contract tests only if an existing test owns documentation/public-term invariants

Product repository is read-only. Do not change public copy or canonical positioning.

Evidence procedure for every row:
1. State the user-facing concept and exact permitted wording.
2. Cite product source file, symbol/method, relevant branch/filter, and current product HEAD.
3. Cite the most focused unit/integration test and run it if its environment is available.
4. Separate source inspection PASS from integration-test HOLD.
5. Record important exclusions, freshness date, and revalidation trigger.

Required audits:
- summary revenue filter, statuses, tips, additional income, and package redemption;
- recorded cash/payment allocation semantics;
- expenses/cost grouping and product-defined profit inputs;
- open order and overdue instalment debt scope;
- client contribution calculation;
- service-category aggregation boundary;
- export, refund, and correction availability.

Required repairs:
- FC1 cannot both allow and reject `earned`; reject it for marketing unless separately defined.
- FC3 must make open-order/instalment scope explicit.
- FC5 must not say “brought in” when the source is settled revenue.
- FC7 must state what recorded cash includes/excludes.
- FC9 must distinguish the product label from accounting profit.
- FC10 remains blocked unless its own evidence passes.

Add a terminology table with columns:
`concept | allowed phrase | careful phrase | banned phrase | source row | reason`.

Run the focused product tests with the repository’s real commands. If TEST_DATABASE_URL is missing,
report the affected row HOLD; do not convert it to PASS and do not block unrelated rows.

Gate:
- PASS only if no term appears in both allowed and banned lists, every allowed claim has a source, and
  all HOLD claims are excluded from later candidate copy.
```

---

## 4. FM2 — Canonical positioning and owner-approved English freeze

### Skills

Load `product-marketing`, `customer-research`, `copywriting`, `copy-editing`,
`marketing-psychology`, and `cro`. Read the copy-editing checklist required by that skill.

### Prompt

```text
Execute FM2 only: rewrite the complete canonical narrative and produce an English source set for
human approval.

Prerequisite: FM1 PASS for every claim used; held rows must stay out.

Allowed writes:
- .agents/product-marketing.md
- .cursor/plans/reference/messaging-and-claims.md
- docs/home-hero-copy-audit.md
- docs/research/home-hero-message-evidence-2026-08-02.md only for provenance/status corrections
- docs/experiment-backlog.md only to mark the old operational candidate superseded; do not register a
  live experiment yet

Do not edit messages, components, routes, metadata, translations, or tracking code.

Canonical-context tasks:
1. Rewrite one-liner, category, primary use case, JTBD, personas, problems, differentiation,
   alternatives, Four Forces, switching dynamics, objection handling, homepage hierarchy, and
   non-goals so they all lead with financial clarity.
2. Keep Booking/Inbox/Calendar as supporting mechanisms and preserve device/team/notes claims.
3. Reconcile Founding Beta and CTA wording with the actual commercial-policy owner; otherwise mark
   CTA status HOLD without inventing a state.
4. Normalize version/changelog order: increment once, newest entry first, no duplicate version.
5. Replace blanket “without manual entry” language with verified connected-context wording.

Candidate tasks:
1. Draft exactly three English candidates:
   A financial visibility; B connected context; C state separation.
2. Keep audience, offer, CTA, and proof constant. Change only the message angle.
3. For each candidate provide eyebrow, H1, body, CTA context, five-second takeaway, claim mapping,
   ambiguity risk, localization risk, and why it might lose.
4. Use “See the money behind your business” as the lead candidate, not an automatic winner.
5. Treat pain-led recommendations as founder/proxy input, not first-party VOC.
6. Run Seven Sweeps and a four-perspective review: solo ICP, finance-semantic reviewer, conversion
   writer, and localization lead.
7. Reject novelty theatre, generic “all in one,” accounting implications, enterprise jargon, and
   unverified automation.

Source-set tasks:
- Draft the exact eyebrow, H1, body, section titles/bodies, accessible visual summary, example-data
  caption, FAQ answer, metadata title/description, closing/footer copy, CTA labels, and helper text.
- Ask the repository owner to approve the exact set. Record name, date, decision, and exact strings.

Gate:
- If approval is absent, end `PHASE = HOLD`; do not translate or implement.
- PASS requires one approved candidate, internally finance-first canonical docs, a clean changelog,
  and no held claim in the approved text.
```

### Reusable human-approval prompt R-FM2

```text
Review this English source set as the repository owner. For each string answer APPROVE or REVISE and,
if revising, supply exact replacement text. Also confirm:
- category wording;
- settled revenue versus recorded cash meaning;
- order-scoped outstanding-balance wording;
- product-defined profit boundary;
- CTA/commercial-stage wording.

Do not approve translations, implementation, deployment, or an experiment in this decision.
Record reviewer name and date with the exact approved set.
```

---

## 5. FM3 — Homepage narrative and truthful visual specification

### Skills

Load `cro`, `copywriting`, `marketing-psychology`, and `product-marketing`.

### Prompt

```text
Execute FM3 only: design the binding information architecture and finance visual fixture on paper.

Prerequisite: FM2 PASS with exact English freeze.

Allowed writes:
- docs/home-finance-narrative-and-visual-contract.md
- .cursor/plans/reference/messaging-and-claims.md only for the approved homepage order

Do not edit React, messages, styles, images, metadata, or tests.

Tasks:
1. Inventory every current homepage component and rendered order.
2. Map each component to: reuse unchanged, revise, split, move, merge, or retire.
3. Specify the binding order:
   Hero → Finance overview → Financial states → Drivers → Connected records → Daily operations →
   Devices → Collaboration → Setup → Not-for → Niches → FAQ → Final CTA.
4. Preserve DVC’s device placement constraints, TEAM’s collaboration placement, and the single
   rotating-element rule.
5. Specify HeroShowcase initial state and rotation. Finance must render first; only real live-DOM
   screens that exist may be included.
6. Define one deterministic example fixture. List all source records and reconcile completed work,
   settled revenue, recorded cash, expenses, open-order balance, category/client/period totals, and
   product-defined profit if shown.
7. Ban percentage-derived cost, random values, date-dependent values, and hand-typed app labels where
   generated strings exist.
8. Specify visible “Example data,” sr-only summary, focus/pause behavior, reduced motion, theme,
   localization, mobile fallback, and empty/loading behavior.
9. State what the visual deliberately does not prove.
10. Provide component/file ownership and a test matrix for FM4A/FM4B.

Gate:
- PASS requires approved section order, arithmetically reconciled fixture, accessible proof contract,
  and no conflict with DVC/TEAM.
```

---

## 6. FM4A — Apply the approved English message

### Skills

Load `copywriting`, `copy-editing`, and `cro`.

### Prompt

```text
Execute FM4A only: implement the exact approved English source set and its message-contract tests.

Prerequisites: FM2 PASS and FM3 PASS.

Allowed writes:
- messages/en/home.json
- English shared defaults such as lib/site.ts only when explicitly listed in the FM2 freeze
- message schemas/types/generator configuration and focused tests needed for the approved keys
- docs/home-hero-copy-audit.md implementation-status appendix

Do not edit non-English locale files, React layout/components, metadata route renderers, JSON-LD,
OG images, llms.txt, tracking, or product code.

Tasks:
1. Compare current English worktree strings with the approved freeze key by key.
2. Apply exact approved text; do not “improve” it during implementation.
3. Remove/replace superseded public English strings only where FM2/FM3 assigns ownership.
4. Preserve CTA destination, registration query parameters, login behavior, domain helper, and
   verification-email expectation.
5. Extend schemas/tests so required finance keys, placeholders, and source-locale coverage fail on
   drift.
6. Add a public-copy forbidden-term test using the repaired terminology table. Avoid naive substrings
   that create false positives; document exceptions explicitly.
7. Run focused tests plus repository typecheck/lint/message verification as appropriate.

Gate:
- PASS only when the English implementation exactly matches the approval record, no non-English file
  changed, and required key/claim tests pass.
```

---

## 7. FM4B — Implement finance-first order and live-DOM proof

### Skills

Load `cro` and `copy-editing`. Do not use image generation: the binding visual is live DOM.

### Prompt

```text
Execute FM4B only: implement the approved page order, Finance-first showcase, and deterministic
example-data proof.

Prerequisites: FM3 PASS and FM4A PASS.

Allowed writes:
- homepage composition/components and Product Mock Kit files named by the FM3 ownership map
- deterministic fixture modules
- focused unit/component/accessibility tests
- generated app-string key configuration only when FM3 requires verified product labels

Do not edit translations, metadata/OG/JSON-LD/llms.txt, tracking events, signup flow, product code, or
unrelated design systems.

Tasks:
1. Reorder sections exactly as FM3 specifies.
2. Keep HeroShowcase’s existing accessible rotation/pause model but render Finance first.
3. Build the finance proof from one deterministic fixture; remove arbitrary revenue-percentage cost.
4. Reconcile every visible and accessible total in tests.
5. Use theme tokens and generated app strings; reject hardcoded colors, fake browser chrome, stock UI,
   screenshots, 3D tilt, gradient blobs, and invented product views.
6. Ensure meaningful finance content exists without JS-delayed rotation and under reduced motion.
7. Verify keyboard, pause, focus, screen-reader summary, mobile fallback, 200% zoom, and no horizontal
   overflow.
8. Test determinism across time zone/date and verify no randomness or current-date dependency.
9. Run focused tests, typecheck, lint, message/niche verification, and build.

Gate:
- PASS only when Finance is the initial proof, fixture math reconciles, accessibility works, and no
  visual or label is fabricated.
```

---

## 8. FM5 — Human-reviewed localization

### Skills

Load `copy-editing` and `product-marketing`.

### Prompt

```text
Execute FM5 only: prepare, review, and apply finance-first copy for de, es, fr, pl, pt, ru, tr, uk.

Prerequisites: FM4A PASS and FM4B PASS. The English freeze may not change in this phase.

Allowed writes:
- messages/{de,es,fr,pl,pt,ru,tr,uk}/home.json
- locale audit/approval document
- translation generator/validation tests required for changed keys

Do not edit English, React, metadata renderers, tracking, or product code.

For each locale:
1. Record target region/dialect and register; confirm the repository convention, especially `pt`.
2. Produce a draft using the approved terminology table.
3. Back-translate semantic terms: completed, settled revenue, recorded cash, expense/cost, open-order
   balance, client contribution, service category, and product-defined profit.
4. Flag literal English calques, especially the H1 metaphor. Natural local meaning outranks word order.
5. Run key, placeholder, punctuation, length, forbidden-claim, and CTA-helper consistency scans.
6. Render at 320/390/768/1440 px and both themes; check 200% zoom.
7. Obtain named native or professionally qualified human approval with date and exact strings.

If one locale lacks approval:
- mark that locale HOLD;
- keep its last approved public strings;
- do not silently ship the LLM draft;
- do not block already approved locales if routing/build policy supports independent publication.

Gate:
- PASS requires named approval for every locale changed in the release and no claim/dialect drift.
```

### Reusable locale-review prompt R-FM5

```text
You are the named human reviewer for locale <locale/region>. Compare the localized strings with the
approved English source and finance terminology table. Review naturalness, professional register,
financial meaning, claim scope, CTA/domain helper, H1 line length, and local dialect. Do not rewrite
the product claim to sound stronger. Return APPROVE or exact revisions per key, plus reviewer name,
qualification/locale, and date.
```

---

## 9. FM6 — Align search, AI-answer, schema, social, and experiment records

### Skills

Load `seo-audit`, `ai-seo`, `schema`, and `copy-editing`. Read the SEO skill’s international-SEO
reference.

### Prompt

```text
Execute FM6 only: align machine-readable and shared discovery surfaces with the approved finance-first
homepage.

Prerequisite: FM5 PASS for every published locale.

Allowed writes:
- localized metadata builders/configuration
- homepage OG/Twitter renderers and their tests
- homepage JSON-LD and its tests
- lib/machine-readable.ts or the actual llms.txt source
- visible FAQ source only when the exact answer was approved in FM2/FM5
- shared footer/site description defaults
- docs/experiment-backlog.md and docs/tracking-plan.md documentation only; no experiment runtime

Do not change hero/section copy, layout, translations outside approved strings, or product code.

Tasks:
1. Inventory title, description, canonical, hreflang, OG, Twitter, JSON-LD, FAQ, llms.txt, footer, and
   shared defaults for every published locale.
2. Put Finance before Booking/Inbox in ordered feature lists.
3. Keep category/entity wording consistent while respecting local naturalness.
4. Use a valid conservative application category; do not imply accounting, native app stores,
   pricing, ratings, or offers.
5. Include only visible FAQs in FAQ structured data.
6. Write one standalone, quotable factual answer to “What is Perelai?” using verified wording.
7. Verify canonical/hreflang symmetry, duplicate-locale policy, noindex rules, reserved routes, and
   social-card locale/alt behavior.
8. Update the experiment backlog: mark operational-clarity variants superseded, register the approved
   finance control and dormant candidates, and state that no A/B test is running.
9. Add tests that fail if homepage OG/JSON-LD/llms.txt revert to booking-first order.
10. Run metadata/schema tests, relevant SEO checks, typecheck, lint, message verification, and build.

Gate:
- PASS requires human/machine entity consistency, valid conservative schema, correct international
  signals, and no false “experiment running” state.
```

---

## 10. FM7 — Release-candidate QA

### Skills

Load `cro` and `copy-editing`.

### Prompt

```text
Execute FM7 only: audit the assembled finance-first release candidate. This is primarily read-only.

Prerequisite: FM6 PASS.

Do not fix cross-phase defects silently. Record the owning phase and mark FM7 HOLD. Tiny test-harness
or documentation corrections may be patched only when they do not change copy, claim, layout, or
behavior.

Automated checks:
1. Read package.json and run actual typecheck, lint, full tests, message/niche verification, production
   build, and git diff --check commands.
2. Run focused finance-fixture reconciliation/determinism, metadata/schema, accessibility, and
   analytics tests.
3. Scan public surfaces for finance never-says terms, booking-first ordered machine lists, unapproved
   locale drafts, arbitrary percentage arithmetic, hardcoded colors, and public variant switches.

Manual matrix:
- widths: 320, 390, 768, 1024, 1440 px;
- light and dark themes;
- English plus every changed approved locale;
- default and reduced motion;
- keyboard-only, visible focus, pause control, and screen-reader landmarks/summary;
- 200% zoom and large-text wrapping;
- JS delayed/disabled where relevant to initial meaningful proof.

Inspect LCP/CLS risk, hydration warnings, horizontal overflow, CTA visibility, Finance-first initial
state, example-data disclosure, and total reconciliation.

Gate:
- PASS only if all automated gates pass and the complete manual matrix is evidenced with no P1/P2.
- HOLD if a browser/device/locale review was not actually performed; do not invent screenshots or
  observations.
```

### Reusable premium/clarity audit R-FM7

```text
At each required width/theme/locale, answer PASS/FAIL with evidence:
1. Can a new visitor name the finance category in five seconds?
2. Is Finance the first visible product proof?
3. Are completed, settled, cash, expense, and open states not visually/copy collapsed?
4. Does “Example data” remain visible and associated with the mock?
5. Do all totals reconcile with the deterministic fixture?
6. Is the H1 natural, unclipped, and free of orphaned punctuation?
7. Is the primary CTA visible and unchanged?
8. Is motion pausable and removed/reduced when requested?
9. Are focus order, accessible names, and sr-only summary correct?
10. Is there no fake chrome, screenshot mismatch, hardcoded app label, or decorative finance theatre?
11. Do Devices and Collaboration retain their approved claims and order?
12. Is the page stable at 200% zoom with no horizontal scroll?
13. Do metadata/social preview and visible category agree?
14. Does the locale use the intended dialect and finance terminology?
15. Would any sentence plausibly be read as accounting, banking, tax, or guaranteed automation?
```

---

## 11. FM8 — Finance-first niche-page migration

### Skills

Load `customer-research`, `copywriting`, `copy-editing`, `cro`, and `seo-audit`.

### Prompt

```text
Execute FM8 only: migrate niche-page narrative after the generic homepage is stable.

Prerequisite: FM7 PASS.

First produce a niche decision matrix; do not mechanically replace every niche H1.

For each published niche:
1. Verify query/user intent and available niche evidence.
2. Decide whether financial clarity, connected context, or a niche operational pain should lead.
3. Preserve finance-first entity/category consistency while retaining useful niche specificity.
4. Map every niche financial clause to the repaired claim contract; do not infer service-level
   analytics from category data.
5. Review uniqueness budgets and avoid near-duplicate doorway pages.
6. Specify generator/key changes and locale-review scope before implementation.
7. Keep generic homepage fallback and route behavior safe if one niche/locale is held.

Apply only approved niche strings, extend verify:niches and metadata tests, obtain required native
review, then run full message/niche/build gates.

Gate:
- PASS requires intent/evidence per niche, unique useful copy, human-approved changed locales, and no
  weakening of the generic finance contract.
```

---

## 12. FM9 — Controlled rollout and baseline observation

### Skills

Load `analytics` and `cro`.

### Prompt

```text
Execute FM9 only: prepare and verify a single-message production rollout and baseline. Do not deploy
unless the user separately gives explicit deployment authorization and the normal release process is
known.

Prerequisite: FM7 PASS. FM8 is not required for the generic homepage rollout unless the release
bundles niche changes.

Tasks:
1. Define release version, exact approved message ID, time window, locale set, and rollback owner.
2. Verify existing events for page view, hero CTA click, registration start/handoff, and verified
   signup attribution. Do not add raw UA, screen resolution, device model, free text, installed state,
   or fingerprint fields.
3. Confirm cross-domain attribution and internal/bot filtering documentation.
4. Capture a pre-rollout baseline with traffic-source and locale context if data exists; otherwise
   state unavailable.
5. After an authorized deployment, verify the actual production HTML, visible page, metadata, OG,
   JSON-LD, llms.txt, locales, and event delivery. A CI/build result is not production verification.
6. Annotate the release and monitor functional/data-quality guardrails.
7. Report descriptive change only. Do not call before/after differences causal uplift.

Allowed writes without deployment authority are documentation/tracking tests only. External analytics
or production mutations require their own explicit authorization.

Gate:
- PASS requires verified production state and a trustworthy observation record. If no deployment was
  authorized, end HOLD with a deployment-ready checklist, not a false PASS.
```

---

## 13. FM10 — Optional randomized experiment

### Skills

Load `ab-testing` and `analytics`; read the sample-size and test-template references required by the
skills.

### Prompt

```text
Execute FM10 only if the experiment gate can be proven. Otherwise produce a documented NO-GO and stop.

Prerequisite: FM9 PASS with observed baseline traffic and conversion quality.

Feasibility first:
1. Define one business hypothesis and one primary metric close to qualified signup.
2. Record baseline rate, MDE, alpha, power, allocation, sample per arm, expected duration, and maximum
   56-day rule using an accepted calculator/method.
3. Define at most three guardrails, eligibility, locale/device/source segments, bot/internal exclusions,
   and novelty/seasonality risks.
4. If sample is infeasible, return NO-GO. Recommend qualitative research or a larger message change;
   do not lower rigor after seeing data.

If and only if approved GO:
5. Select control plus one treatment; do not run three low-traffic arms.
6. Preregister exact strings, proof held constant, assignment unit, sticky duration, stopping rule,
   SRM check, and winner/loser/inconclusive decisions.
7. Obtain privacy/legal approval for assignment/storage.
8. Implement server-side, flicker-free, mutually exclusive assignment. Do not expose public query or
   env selection as the experiment mechanism.
9. Emit exposure once after render and carry fixed variant ID through conversion without PII.
10. Run unit/integration/E2E, A/A, cross-domain attribution, SRM alert, and rollback tests before traffic.
11. Do not enable traffic without separate explicit authorization.

Gate:
- PASS means experiment-ready, not experiment-won. Report results only after the preregistered sample
  and stopping rule; preserve inconclusive as a valid outcome.
```

---

## 14. FM11 — Final cross-surface audit

### Skills

Load `product-marketing`, `copy-editing`, `seo-audit`, and `analytics`.

### Prompt

```text
Execute FM11 only: reconcile actual deployed state with evidence, canonical docs, public surfaces, and
measurement records.

Prerequisites: FM8 PASS and FM9 PASS. FM10 is optional; audit it only if run.

Mostly read-only tasks:
1. Fetch/inspect production homepage and each published locale/niche route.
2. Compare visible copy, initial visual, metadata, OG/Twitter, JSON-LD, FAQ, llms.txt, footer/site
   defaults, signup handoff, and events with approved source records.
3. Re-run every finance never-says and state-separation check.
4. Verify DVC and TEAM claims/order were not weakened.
5. Verify locale approvals match deployed strings and dialects.
6. Verify experiment/backlog/tracking docs say exactly whether no test, ready test, running test, or
   completed test exists.
7. Update only documentation state/changelog labels that can be proven from production evidence.
8. Record P1/P2/P3 findings with owner phase. Do not silently fix product/copy in this audit.

Gate:
- PASS only when no P1/P2 remains and every current/live/published statement is production-verifiable.
- A residual P1/P2 returns the work to its owner phase; it is not waived by technical gates.
```

---

## 15. Phase dependency and handoff rules

```text
FM0 → FM1 → FM2 → FM3 → FM4A → FM4B → FM5 → FM6 → FM7
                                                     ├→ FM8
                                                     └→ FM9 → FM10 (optional)
FM8 + FM9 → FM11
```

- FM2 cannot PASS without human English approval.
- FM5 cannot begin from provisional English and cannot approve its own translations.
- FM6 cannot precede locale approval because metadata/schema/OG must use final strings.
- FM7 is a gate, not a catch-all implementation phase.
- FM8 may proceed separately after FM7 and must not block the generic rollout unless bundled.
- FM10 may end NO-GO without blocking the finance-first release.
- A missing optional device/database/browser resource blocks only the dependent row or review, not an
  unrelated phase.

---

## 16. Final response template for every executor

```text
## <PHASE> = PASS | HOLD | FAIL
<one-sentence outcome>

### Repository state
- Landing start/end HEAD:
- Product start/end HEAD:
- Dirty files present before:
- Files changed in this phase:
- Unrelated changes preserved:

### Claims and approvals
- Claim rows used/repaired/held/rejected:
- English approval:
- Locale approvals:
- Commercial/privacy/deployment approvals:

### Verification
- <exact command>: PASS | FAIL | NOT RUN — <reason/result>

### Findings
- P1:
- P2:
- P3:

### Next authorized phase
- Phase:
- Prerequisites still missing:
```
