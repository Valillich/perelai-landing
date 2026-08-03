# Finance-first homepage positioning, narrative migration, and experiment plan

**Repository:** `/Users/valery/Sites/perelai-landing`

**Product evidence source:** `/Users/valery/Sites/beauty-finance`

**Created:** 2026-08-02

**Revised:** 2026-08-03 — finance-first category pivot

**Version:** 2.0

**Status:** FM4A (English freeze) and FM5 (Locale Drafts) owner-approved on 2026-08-03. FM5 draft application to JSON files in progress.

**Companion prompts:** `01_home_hero_positioning_llm_prompts_20260802.md`

---

## 0. Executive decision

Perelai is positioned first as **financial tracking and analytics software for independent service
businesses**. Booking, Calendar, Inbox, clients, notes, devices, and collaboration remain important,
but their homepage role changes: they explain where the financial context comes from and how the
business is run, rather than defining the product category.

This direction is stronger than “everything in one place” and stronger than a booking-first hero:

- it starts with the owner’s business question, not a feature inventory;
- it differentiates Perelai from a generic planner without inventing a novelty claim;
- it allows Calendar, clients, services, and payments to form one evidence chain;
- it preserves the solo-first ICP while remaining credible for small teams.

### Review verdict

The pivot is **directionally approved but not yet release-ready**. The current worktree contains a
useful provisional English hero, a finance claim contract, nine locale edits, and reported green
technical gates. It does not yet contain a coherent finance-first homepage. Several canonical,
visual, localization, and financial-semantics conflicts must be resolved before the copy may be
described as frozen, published, or live.

The former MSG0–MSG7 execution sequence is superseded. Historical research and audit documents stay
in the repository, but the remaining work follows phases **FM0–FM11** below.

---

## 1. What the review found

### 1.1 Good work to preserve

- The generic “finally in one place” message was removed from the provisional homepage hero.
- `docs/finance-claim-contract.md` establishes the essential distinction between operational
  settlement and actual cash movement.
- The current English hero leads with a financial outcome rather than Booking or Inbox.
- Metadata, FAQ, closing copy, footer description, and `lib/site.ts` were considered rather than
  changing only the visible H1.
- Product-source verification covered finance services and focused tests; no blocked export,
  refund, correction, or accounting claim was intentionally promoted.
- The executor correctly refused to imply that “earned,” “received,” “settled,” and “paid” are
  interchangeable.

### 1.2 Blocking inconsistencies

| ID | Severity | Finding | Required resolution |
|---|---|---|---|
| R1 | P1 | `.agents/product-marketing.md` calls uncommitted worktree copy “published” and “live.” | Describe it as provisional until production deployment is independently verified. |
| R2 | P1 | The top of both canonical messaging documents is finance-first, while JTBD, problems, differentiation, switching forces, and homepage order remain Booking/Inbox-first. | Rewrite the full narrative, not only the hero section. |
| R3 | P1 | `docs/finance-claim-contract.md` allows “what you earned” in FC1 and later rejects `earned` as ambiguous recognized revenue. | Choose one rule; the plan requires the conservative rejection. |
| R4 | P1 | FC5 allows “what each client has brought in,” which can be read as cash although the source is settled revenue. | Replace with explicit settled-revenue language or narrow the evidence row. |
| R5 | P1 | The hero says “outstanding balances” generically, while verified evidence covers balances on open orders/instalments. | Scope the phrase in visible copy or prove a broader source before use. |
| R6 | P1 | The current Money section says a completed visit is not revenue until someone pays. Package redemption can settle a visit without cash movement. | Rewrite the section around completed, settled, cash, and outstanding as separate states. |
| R7 | P1 | `HeroShowcase` renders Calendar first and Finance second. | Put Finance first; keep the existing accessible rotation and one-rotating-element rule. |
| R8 | P1 | The homepage finance mock calculates cost as a percentage of revenue and presents Revenue/Cost/Profit without product-semantic fixture rules. | Replace invented arithmetic with deterministic example data mapped to verified product semantics. |
| R9 | P1 | OG feature lines, JSON-LD `featureList`, and `llms.txt` remain Inbox/Booking-first. | Align human and machine-readable message order in one phase. |
| R10 | P1 | Eight translations were applied before named human review; several H1s are literal calques. | Treat them as drafts, run locale review, and block publication per locale until approval. |
| R11 | P2 | `docs/experiment-backlog.md` still names the superseded operational-clarity candidate. | Replace it with the finance-first experiment record only after the English freeze. |
| R12 | P2 | The product-marketing changelog has duplicate/out-of-order v5/v6 entries and a commercial “Founding Beta” tension. | Normalize the changelog and reconcile CTA/commercial policy without inventing a launch state. |
| R13 | P2 | “Financial context without manual entry” is too absolute: payment, expense, correction, and other records can require user action. | Use “connected to the work” language; ban automation absolutes. |

No reported green `typecheck`, `lint`, test, build, or uniqueness result resolves R1–R13: these are
claim, narrative, semantic, localization, and presentation defects.

---

## 2. Scope and non-goals

### 2.1 In scope

- repair the finance evidence and claim contracts;
- make canonical marketing context finance-first end to end;
- freeze one English homepage narrative after human approval;
- reorder and revise the homepage so its proof follows the new narrative;
- make the finance visual truthful, deterministic, localized, responsive, and theme-aware;
- align metadata, OG, JSON-LD, FAQ, `llms.txt`, and experiment documentation;
- re-review all eight non-English locales with named humans;
- define an evidence-based, privacy-safe rollout and future experiment path;
- migrate niche pages only after the generic homepage is stable.

### 2.2 Out of scope

- building product finance features, export, accounting, tax, bank sync, forecasting, refunds, or
  corrections;
- claiming App Store or Play Store distribution;
- changing pricing, beta status, signup mechanics, or commercial policy;
- weakening the DVC device, TEAM collaboration, or existing privacy claim contracts;
- turning the homepage into an accounting-software comparison page;
- running a live A/B test before traffic, assignment, metric, and privacy gates pass;
- using environment values as a substitute for randomized experiment assignment;
- fabricating VOC, competitor findings, participant feedback, or translation approval.

---

## 3. Binding positioning contract

### 3.1 Category

Use:

> Financial tracking and analytics software for independent service businesses.

Permitted shorter form where space is constrained:

> Simple finance software for service businesses.

“Finance software” must not be expanded into accounting, bookkeeping, tax, banking, payroll, cash
forecasting, or financial advice.

### 3.2 Primary audience

Independent service professionals and small owner-led service businesses. The hero must work for a
solo operator without presupposing staff. Collaboration, coworkers, and multi-person workflows stay
below the core financial story and retain their own evidence gates.

### 3.3 Positioning ladder

| Layer | Binding answer |
|---|---|
| Business question | What work was completed, what value was recorded as settled, what cash was recorded, what was spent, and what remains open? |
| Product outcome | A clearer view of the money connected to the business activity behind it. |
| Evidence mechanism | Visits, clients, service categories, orders, payments, expenses, and periods remain connected in one operational model. |
| Supporting workflow | Booking, Inbox, Calendar, client history, devices, notes, and team roles help run and capture the work. |
| Category boundary | Operational finance tracking and analytics, not accounting or banking. |

### 3.4 Message hierarchy

Every homepage surface must preserve this order:

1. **Financial clarity** — the category and user outcome.
2. **Financial states** — completed, settled, cash-recorded, spent, and open are not collapsed.
3. **Business drivers** — period, client, and service category provide context.
4. **Connected records** — the number remains connected to the work behind it.
5. **Operations** — Booking, Inbox, Calendar, and automation support the financial picture.
6. **Access and growth confidence** — devices and collaboration.

Do not lead with an implementation detail such as RBAC, magic links, routing, ledger architecture, or
“enterprise-grade.” Those mechanisms may support later proof only where a verified claim exists.

---

## 4. Financial language and evidence rules

### 4.1 Required state model

The executor must create one evidence table that distinguishes:

| User-facing concept | Product source to verify | Must not be presented as |
|---|---|---|
| Completed work | Completed/no-show operational records | Cash received |
| Settled revenue | The exact server-side revenue filter and included components | Bank cash, recognized accounting revenue, or “earned” |
| Cash recorded | Payment/allocation ledger entries | All settled revenue |
| Expenses/costs | Verified expense sources and grouping | Tax-ready books |
| Open balance | Verified open order/instalment debt scope | Every kind of company receivable |
| Client contribution | The verified client revenue calculation | Cash “brought in” unless cash is the source |
| Service driver | Category-level aggregation where verified | Individual-service analytics |
| Profit | Existing in-product calculated label, with its exact inputs | Accounting profit or tax profit |

### 4.2 Required corrections to the claim contract

Before new copy is frozen:

- FC1 must reject `earned` in marketing copy unless a future accounting definition is approved;
- FC3 must state the open-order/instalment scope wherever “outstanding” is used;
- FC5 must stop using “brought in” for a settled-revenue source;
- FC7 must document what counts as recorded cash and what it excludes;
- FC9 must limit `profit` to the product’s calculation and forbid accounting implications;
- FC10 must keep refunds/corrections blocked until separately audited;
- every allowed sentence must identify its source method/test and freshness date;
- a missing database may HOLD only its dependent claim row, not the rest of the phase.

### 4.3 Never-says list

- “Accounting,” “bookkeeping,” “tax-ready,” “bank-connected,” or “cash forecast” without new proof.
- “Automatic” or “without manual entry” as a blanket description.
- “Completed work is revenue only when paid.”
- “Revenue is cash received.”
- “Profit” without the product-defined calculation context.
- “Outstanding balances” without the verified order scope.
- “Service analytics” if the verified aggregation is only service category.
- Export, refund, or correction claims while their rows are blocked.
- Growth percentages, ROI guarantees, “real-time,” “100%,” “zero effort,” or privacy absolutes.
- “Another business connected” or coworker claims while their independent gates are held.

---

## 5. English message decision

### 5.1 Recommended first-launch angle

The first launch should use the **financial visibility** angle, not the old operational-clarity angle
and not a pain quote unsupported by first-party VOC.

Provisional lead candidate:

| Key | Provisional English direction |
|---|---|
| Eyebrow | Simple finance software for independent service businesses |
| H1 | A Clear View of Your Business Finances |
| H1 Accent | Without Complicated Spreadsheets |
| Body | Manage your schedule and finances in one place. Track revenue from every client, break down profit by service category, and make informed decisions with clear insights that are always at your fingertips. |
| Primary CTA | Preserve the currently approved signup label and handoff. |
| Secondary CTA | Preserve the currently approved login/demo/help action; do not invent one. |
| Microcopy | Preserve approved domain and verification-email expectations. |

The existing body is a candidate, not a freeze, because “income,” “payments,” and generic
“outstanding balances” currently outrun the repaired contract.

### 5.2 Required candidate set

FM2 must produce exactly three English candidates:

- **A — Financial visibility:** outcome first; recommended default.
- **B — Connected financial context:** numbers tied to clients, categories, and visits.
- **C — State separation:** completed, settled, cash, and open do not blur together.

Each candidate must use the same approved CTA and describe the same product. Variants may change one
message angle, not category, audience, offer, visual, CTA, or signup flow at the same time.

Pain-led wording such as “stop piecing the week together from DMs, notes and memory” stays research
input until first-party VOC reaches the confidence threshold in the research protocol.

### 5.3 Human freeze gate

Before any translation or public implementation, a named repository owner must approve:

- eyebrow, H1, body, CTA labels, helper text, finance-section titles, visual accessible summary,
  example-data caption, FAQ answer, metadata title, and metadata description;
- the exact meanings of settled revenue, cash recorded, expenses, open balance, and profit;
- whether “simple finance software” is acceptable in title surfaces;
- the launch/beta CTA from the commercial policy owner.

Approval must include date and exact strings. “Looks good,” a green test, or an executor summary is not
a copy freeze.

---

## 6. Homepage narrative and visual contract

### 6.1 Binding section order

The target generic homepage order is:

1. Hero — finance category and outcome.
2. Finance overview — the owner’s core financial questions.
3. Financial states — completed, settled, cash, expenses, and open balance.
4. Drivers — period, client, and service category.
5. Connected records — numbers linked to visits and operational history.
6. Daily operations — Inbox, Booking, and Calendar as supporting mechanisms.
7. Devices — same workspace across phone, tablet, and desktop.
8. Collaboration — solo-first, team access when useful.
9. Setup/onboarding.
10. “Not for” qualification.
11. Niche entry points.
12. FAQ.
13. Final CTA.

Existing device and collaboration placement constraints remain binding. The exact component split may
reuse current sections, but the rendered story must follow this hierarchy at all supported widths.

### 6.2 Hero visual

- Keep the live-DOM, localized, theme-aware Product Mock Kit approach.
- Keep one rotating homepage showcase and its pause/accessibility behavior.
- Render Finance first on initial load; Calendar may follow as operational context.
- Recommended sequence: Finance → client context → payment/transaction context → Inbox → Calendar.
- If only current Finance and Calendar screens exist, use Finance → Calendar; do not invent missing
  product views merely to satisfy the ideal sequence.
- Do not use stock dashboards, generated UI screenshots, tilted renders, fake browser chrome, or
  decorative financial charts.

### 6.3 Finance example-data fixture

The mock must be deterministic and share one explicit fixture across KPIs, charts, client/category
breakdown, and accessible text. It must not derive cost as an arbitrary percentage of revenue.

Required fixture documentation:

- completed-work total;
- settled-revenue total and included components;
- recorded-cash total;
- expense total;
- open-order balance;
- product-defined profit calculation if shown;
- period, client, and category breakdowns that reconcile to their totals;
- locale-safe labels from generated app UI strings where available;
- visible and screen-reader-accessible “Example data” disclosure.

If the landing cannot model a state truthfully, omit that state from the visual; copy must not claim
that the omitted proof is shown.

---

## 7. Localization contract

English is the only source language. The eight other locale files are drafts until named human review.

Per locale, reviewers must verify:

- natural finance terminology for independent service businesses, not literal English calques;
- internal financial states are not translated as standalone participles/adjectives, but rather their meaning is translated using a full sentence;
- local distinction between revenue/income, payment/cash, expense/cost, balance/debt, and profit;
- the intended dialect (`pt-BR` or another repository-defined target) and consistent register;
- H1 brevity at 320 px, no forced awkward line breaks, and no clipping at 200% zoom;
- metadata pixel/length sanity without changing the claim;
- CTA, domain, and verification-email helper consistency;
- no new accounting, tax, banking, automation, or guarantee implications.

An LLM may draft and back-translate, but may not approve a locale. Each locale needs reviewer name,
date, decision, and any intentional divergence from English. An unapproved locale remains on the last
approved copy; it must not silently ship a machine draft.

---

## 8. Search, AI-answer, and structured-data consistency

After the English and locales are approved, align these surfaces in one owned phase:

- page `<title>` and description;
- OG and Twitter title, description, alt, and feature lines;
- canonical/hreflang behavior for all published locales;
- WebApplication/WebSite JSON-LD names, descriptions, application category, and `featureList`;
- `llms.txt` homepage summary and ordered feature bullets;
- FAQ answers that explain what Perelai is and is not;
- footer/site descriptions and other shared defaults.

Rules:

- human-visible and machine-readable category must match;
- Finance must appear before Booking/Inbox in ordered feature lists;
- `applicationCategory` must use a valid value and must not imply accounting if not supported;
- FAQ schema may include only visible FAQ content;
- no sameAs, ratings, offers, prices, native-app distribution, or organization facts may be invented;
- each localized page must describe the same entity and capability boundaries;
- existing duplicate-locale and reserved-route policies remain unchanged.

---

## 9. Measurement and experiment policy

### 9.1 First launch is a rollout, not an A/B test

Do not implement a public environment-variable variant switch for comparing performance. A build-time
value sends one message to an entire deployment and produces a confounded before/after comparison.

For the first finance-first launch:

- deploy one approved message;
- annotate the release time and version;
- preserve the current privacy boundary;
- observe acquisition mix, signup CTA clicks, registration starts, and verified registrations;
- compare diagnostics by source/locale only where sample and consent allow;
- do not call the change causal uplift.

An optional environment value may exist **later** for deterministic preview/QA only. It must default to
the approved control, be unavailable as a public query parameter, and emit no exposure event.

### 9.2 Future randomized experiment gate

FM10 may specify or implement experiment plumbing only when all are true:

- baseline traffic can reach the precomputed sample within 56 days;
- one primary metric and no more than three guardrails are approved;
- baseline rate, minimum detectable effect, alpha, power, sample size, and stopping rule are recorded;
- assignment is sticky, flicker-free, mutually exclusive, and privacy/legal-approved;
- exposure fires once only after the assigned hero is rendered;
- conversion uses fixed variant IDs and no PII, free text, raw UA, or fingerprint fields;
- A/A, sample-ratio-mismatch, bot/internal-traffic, and cross-domain attribution checks pass;
- locale eligibility is explicit and results are not generalized to untested locales;
- decision rules include winner, loser, and inconclusive outcomes.

If the gate does not pass, keep the candidate backlog and use qualitative five-second tests or
interviews as research, not as statistically causal evidence.

---

## 10. Execution phases and gates

| Phase | Outcome | Depends on | Blocking gate |
|---|---|---|---|
| FM0 | Worktree/state audit and supersession record | none | Exact changed-file inventory; provisional work is not called published |
| FM1 | Repaired finance evidence and claim contract | FM0 | No contradictory allowed/rejected term; focused source/tests cited |
| FM2 | Canonical positioning, three candidates, owner-approved English freeze | FM1 | Named/date-stamped exact English approval |
| FM3 | Homepage information architecture and truthful visual fixture contract | FM2 | Section order and reconciled fixture approved |
| FM4A | Approved English copy applied to all visible shared/default surfaces | FM3 | Copy/schema key coverage and uniqueness gates |
| FM4B | React order, Finance-first showcase, and deterministic mock applied | FM4A | Unit/a11y/responsive/theme checks; no invented arithmetic |
| FM5 | Eight locales reviewed and applied | FM4A, FM4B | Named human approval per locale; no calques/claim drift |
| FM6 | Metadata, OG, JSON-LD, `llms.txt`, FAQ, experiment backlog aligned | FM5 | Human/machine consistency tests and SEO/schema audit |
| FM7 | Full visual, accessibility, performance, and regression QA | FM6 | Five widths × two themes × approved locales; build gates green |
| FM8 | Niche-page finance-first migration plan and rollout | FM7 | Niche evidence/intent review; generic fallback safe |
| FM9 | Controlled production rollout and baseline observation | FM7 | Deployment verified; release annotation; no causal claim |
| FM10 | Optional randomized experiment readiness/implementation | FM9 | Traffic/sample/privacy/assignment gate passes |
| FM11 | Final cross-surface claim and state audit | FM8 and FM9; FM10 only if run | No P1/P2 drift; docs reflect actual deployed state |

### FM0 — Audit and quarantine partial work

- Record landing/product HEADs, status, dirty files, and ownership.
- Preserve all unrelated user changes.
- Mark previous MSG execution as superseded, not deleted.
- Correct only documentation state labels that falsely say published/live.
- Inventory every surface already changed by the partial pivot.
- Do not rewrite public copy.

### FM1 — Finance truth contract

- Trace each finance statement to product code and focused tests.
- Repair FC1/FC3/FC5/FC7/FC9/FC10 and add freshness/test evidence.
- Audit package redemption, tips, additional income, order debt, category aggregation, and expense
  inputs.
- HOLD refund/correction/export claims independently if evidence is unavailable.
- Produce a compact marketing terminology table.

### FM2 — Positioning and English freeze

- Rewrite full canonical positioning/JTBD/problems/differentiation/switching narrative.
- Keep ICP and commercial policy explicit; do not infer a paid/founding-beta state.
- Draft exactly A/B/C candidates and evaluate them with claim mapping, five-second clarity, Seven
  Sweeps, and a four-perspective panel.
- Update research confidence honestly; do not turn recommendations into VOC.
- Obtain exact owner approval for the entire English source set.

### FM3 — Narrative and proof specification

- Map current components to the target order.
- Decide reuse, split, move, or retire for every section without implementation.
- Specify the finance fixture and reconciliation equations.
- Specify hero rotation order, motion, pause, accessible summary, and mobile fallback.
- Review collision with DVC/TEAM plans and preserve their binding constraints.

### FM4A — English message implementation

- Apply only approved strings to `messages/en/home.json` and shared defaults.
- Update visible sections in the target narrative without translations.
- Keep CTA and signup handoff unchanged unless separately approved.
- Extend message-key and uniqueness tests before later locale generation.

### FM4B — Layout and live-DOM proof implementation

- Reorder rendered sections.
- Put Finance first in the existing showcase.
- Replace arbitrary finance-mock arithmetic with the FM3 fixture.
- Use product tokens/generated strings; no hardcoded rail labels or colors.
- Add reconciliation, determinism, accessibility, theme, and reduced-motion tests.

### FM5 — Localization

- Generate drafts from the frozen English and terminology sheet.
- Back-translate and run automated key/placeholder/claim scans.
- Obtain named native-review approval for all eight locales.
- Apply only approved locale strings and record intentional adaptations.

### FM6 — Machine-readable alignment

- Update metadata, OG/Twitter, JSON-LD, `llms.txt`, FAQ, footer/site defaults, and experiment backlog.
- Put finance proof first without keyword stuffing.
- Verify canonical/hreflang, structured-data shape, entity consistency, and social-card rendering.

### FM7 — Release-candidate QA

- Run the repository’s type, lint, test, niche verification, build, and whitespace gates.
- Visually review 320/390/768/1024/1440 px, light/dark, reduced motion, 200% zoom, keyboard and screen
  reader behavior.
- Check LCP/CLS budgets and that Finance is meaningful before delayed animation.
- Re-run the reject-on-sight checklist below.

### FM8 — Niche migration

- Audit each niche’s search intent and evidence before applying finance-first copy.
- Preserve useful niche specificity; do not mechanically copy the generic H1.
- Update generator/verification rules and obtain locale review where niche strings change.
- Niche failure must not corrupt the generic homepage release.

### FM9 — Rollout and observation

- Verify production content rather than inferring deployment from a worktree or build.
- Annotate version/time and capture a baseline window with acquisition context.
- Monitor functional guardrails and data quality; roll back only through the normal release process.
- Report observations, not causal uplift.

### FM10 — Optional experiment

- Recalculate feasibility using observed traffic.
- Preregister hypothesis, audience, allocation, metrics, MDE, sample, duration, exclusions, and decision
  rule.
- Prefer two arms; do not test all three candidates at low traffic.
- Implement sticky server-side assignment only after approval.
- Run A/A and QA before exposure; document inconclusive results honestly.

### FM11 — Final audit

- Compare deployed public pages, machine surfaces, canonical docs, tracking docs, and experiment record.
- Re-run the finance never-says scan and cross-locale entity consistency check.
- Remove stale “current/live/published” statements or update them with verified evidence.
- Close only when no unresolved P1/P2 finding remains.

---

## 11. File ownership by phase

| Surface | Owner phase |
|---|---|
| `docs/finance-claim-contract.md` | FM1 |
| `.agents/product-marketing.md` | FM2, final state correction FM11 |
| `.cursor/plans/reference/messaging-and-claims.md` | FM2 |
| `docs/home-hero-copy-audit.md`, research memo | FM2; historical results preserved |
| `messages/en/home.json` and shared English defaults | FM4A |
| Homepage composition, showcase, finance mock/fixture | FM4B |
| `messages/{de,es,fr,pl,pt,ru,tr,uk}/home.json` | FM5 only |
| metadata/OG/JSON-LD/`llms.txt`/FAQ machine surfaces | FM6 |
| `docs/experiment-backlog.md`, tracking amendments | FM6/FM10 |
| niche generator/messages/pages | FM8 |

An executor must not edit a later owner’s surface “while here.” If a prerequisite defect is found,
record it and stop the dependent claim/locale rather than silently expanding scope.

---

## 12. Automated and manual gates

### 12.1 Required automated checks

Use the actual scripts in `package.json`; do not invent command names. At minimum the release candidate
must pass the repository equivalents of:

- typecheck;
- lint;
- full tests plus focused finance/mock/metadata/analytics tests;
- niche/message verification;
- production build;
- `git diff --check`;
- no forbidden finance terms in public message/config/metadata surfaces;
- no booking-first ordered list in homepage OG/JSON-LD/`llms.txt`;
- fixture reconciliation and deterministic-render tests;
- no unapproved locale key or placeholder drift;
- no public env/query variant switch.

### 12.2 Required human checks

- English source freeze by repository owner.
- Finance terminology review against product evidence.
- Native review for every changed non-English locale.
- Five-second comprehension test with documented participants/responses when available.
- Visual review at five widths, two themes, reduced motion, keyboard, screen reader, and zoom.
- Commercial-owner confirmation of CTA/beta wording.
- Production verification before any document says live/published.

---

## 13. Reject-on-sight checklist

Reject the deliverable if any item is true:

- the hero still makes Booking, Calendar, CRM, or Inbox the primary category;
- a green build is cited as proof that copy is approved;
- “published/live” is inferred from a dirty worktree;
- settled revenue and cash are collapsed;
- package redemption is described as cash payment;
- generic outstanding balances are claimed from order-only evidence;
- category data is called individual-service analytics;
- the finance mock uses arbitrary percentage-derived costs;
- Calendar is the initial hero proof while the H1 is finance-first;
- machine-readable surfaces remain booking-first;
- an LLM translation is shipped without named human review;
- literal “money behind your business” calques are kept merely for English parity;
- “accounting,” “tax,” “bank,” export, refund, or correction capability is implied;
- an environment rollout is reported as an A/B test;
- the test changes copy, CTA, visual, and audience simultaneously;
- DVC or TEAM claim contracts are loosened to make the finance story sound stronger.

---

## 14. Definition of done

The finance-first migration is complete only when:

- canonical context is finance-first throughout, not only at the top;
- every public finance sentence maps to a non-contradictory evidence row;
- the owner has approved an exact English source set;
- the rendered homepage order and initial proof match the financial narrative;
- example numbers are deterministic, reconciled, and explicitly illustrative;
- all changed locales have named human approval;
- visible, social, structured, and AI-readable surfaces describe the same entity in the same order;
- technical, visual, accessibility, performance, and localization gates pass;
- production state is verified before documentation says live;
- the first rollout is not misreported as causal experimentation;
- any later A/B test meets the full feasibility, privacy, assignment, and preregistration gate.

---

## 15. Marketing skills and how they shape execution

| Skill | Material use |
|---|---|
| `product-marketing` | Category, ICP, positioning ladder, canonical-context rewrite, changelog discipline |
| `copywriting` | One-outcome hero, candidate angles, information hierarchy, CTA continuity |
| `copy-editing` | Claim/specificity/voice sweeps, terminology consistency, locale review checklist |
| `marketing-psychology` | Financial ambiguity aversion and trust without fear or “enterprise” theatre |
| `customer-research` | Separates first-party VOC, proxy evidence, recommendations, and unverified assumptions |
| `cro` | Five-second category clarity, proof adjacency, CTA continuity, page-order rationale |
| `analytics` | Decision-oriented rollout measurement and privacy-safe events |
| `ab-testing` | Feasibility, sample, assignment, guardrails, and rejection of sequential env comparisons |
| `seo-audit` | Metadata, hreflang, crawl/index, and search-intent consistency |
| `ai-seo` | Standalone factual category answer and entity consistency across answer surfaces |
| `schema` | Conservative WebApplication/FAQ markup using only visible verified content |
| `marketing-plan` | Phase dependencies, owner gates, rollout sequencing; not its full campaign workflow |

Deliberately excluded: ASO, competitors, offers, pricing, ads, social, launch, PR, and image generation.
They do not resolve the current homepage truth/migration problem and must not be added speculatively.
