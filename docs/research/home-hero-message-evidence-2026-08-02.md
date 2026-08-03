# Homepage hero message evidence — 2026-08-02

**Phase:** MSG0 — evidence, recommendation triage, research confidence
**Repository:** `/Users/valery/Sites/perelai-landing`
**Landing HEAD:** `7e528d67231d9a772eec71af4bb7b4f1ea80bd14`
**Product evidence source:** `/Users/valery/Sites/beauty-finance`
**Product HEAD:** `f081179fe5beba5f5eeb3bf0bdb7568ad61f032f`
**Worktree note at phase start:** landing dirty only `?? .cursor/plans/messages/` (user-owned plans; preserved untouched)
**Skills loaded:** `product-marketing`, `customer-research`, `marketing-psychology`, `cro`
**Status:** documentation only — no public messages, React, metadata, analytics, rails or product edits

---

## 1. Scope of this record

This file is the MSG0 evidence log for the homepage hero repositioning. It does **not** freeze
English, change locales, or authorize traffic. It classifies implementation proof, proxy language,
and owner/advisor hypotheses separately.

Binding recommendation under audit (English source, not yet frozen for publication):

| Key | Proposed English |
|---|---|
| `home.hero.title` | Know what still needs doing |
| `home.hero.accent` | — and what was actually paid. |
| `home.hero.body` | Perelai keeps unresolved work visible until you deal with it, connects visits to client history, and separates completed work from money received. Clients book through one link. |

---

## 2. Commit and environment record

| Item | Value |
|---|---|
| Landing `git rev-parse HEAD` | `7e528d67231d9a772eec71af4bb7b4f1ea80bd14` |
| Landing dirty at start | `?? .cursor/plans/messages/` only |
| Product `git rev-parse HEAD` | `f081179fe5beba5f5eeb3bf0bdb7568ad61f032f` |
| `TEST_DATABASE_URL` | **UNSET** in this environment |
| Integration tests default | `apps/api/jest.config.ts` ignores `\.integration\.spec\.ts$` |
| Human approvals for English freeze | **Missing** (MSG1 gate; not self-approvable) |
| Five-second participants | **Unavailable** — protocol recorded; no responses invented |

---

## 3. Claim re-verification (F1, F3, F4, F5, F6)

Historical plan checkboxes are not evidence. Each row below was re-checked against current product
source and the smallest practical existing tests on 2026-08-02.

### 3.1 Summary

| Ledger | Capability | Live test result | Source inspection | MSG0 row status |
|---|---|---|---|---|
| **F1** | Operational Inbox | Integration blocked (`TEST_DATABASE_URL` unset) | PASS — unresolved domain projection; read ≠ clear | **PASS (source)** |
| **F3** | Public booking link | Unit suite PASS | PASS — public slug / booking path; no commission module | **PASS** |
| **F4** | Clients + history (notes supporting) | Unit suite PASS | PASS — clients + pinned notes dual-write | **PASS** |
| **F5** | Payment recording & allocation | Unit suite PASS | PASS — ADR-0002; allocations are cash truth | **PASS** |
| **F6** | Finance overview | Unit suite PASS | PASS — revenue/outstanding from finance services | **PASS** |

TC5 (coworker shared availability) remains **HOLD** in `docs/team-collaboration-claim-contract.md`
(same blocker class: focused coworker integration needs `TEST_DATABASE_URL`). No coworker claim enters
the recommended hero.

### 3.2 F1 — Operational Inbox

**Sources inspected**

- `apps/api/src/inbox/inbox.service.ts` — `listActionItems` projects unresolved domain rows only:
  `PublicServiceRequest` with `status = 'PENDING'`; public `Order` with `businessAcknowledgedAt IS NULL`;
  `RESERVATION` candidates awaiting business confirmation. No “mark read” path clears these rows.
- `docs/adr/0009-operational-inbox-and-booking-domain-visibility.md` — Inbox is company-level unresolved
  state; `SystemNotification` is per-user delivery/read state.
- `apps/api/src/inbox/operational-inbox.integration.spec.ts` — existing focused cases include:
  - `does not remove the action item when the notification is marked read`
  - `removes the action item on acknowledge without creating transactions or allocations`

**Test command / blocker**

```bash
cd /Users/valery/Sites/beauty-finance
./node_modules/.bin/jest --no-cache --config apps/api/jest.config.ts --runInBand \
  --testPathIgnorePatterns='a^' \
  --testPathPatterns='operational-inbox.integration.spec'
```

**Result:** FAIL before cases run — `TEST_DATABASE_URL is not defined in the environment!`
(`apps/api/src/common/utils/test-db.ts:20`). Configuration was not edited.

**Independent-row decision:** PASS on source + existing test definitions. Do not treat plan checkboxes
as proof. Do not upgrade F1 to “AI/smart Inbox” or “automatically handles.”

### 3.3 F3 — Public booking page

**Sources inspected**

- `apps/api/src/public-booking/public-booking.service.ts` — public booking by company slug; personal /
  client-hub token paths exist for confirmation UX.
- No `commission` / take-rate module under `apps/api/src/public-booking/`.
- No `billing` or `stripe` directories under `apps/api/src` (maxdepth 2 search on 2026-08-02).

**Tests run (PASS)**

```bash
./node_modules/.bin/jest --no-cache --config apps/api/jest.config.ts --runInBand \
  apps/api/src/public-booking/public-booking.service.spec.ts
```

**Decision:** PASS for “Clients book through one link.”
**Held out of hero:** client hub / magic-link framing (see §4 triage) — capability exists in code but is
not an audited homepage claim for this hero.

### 3.4 F4 — Clients + history

**Sources inspected**

- `apps/web/src/pages/ClientDetailsPage.tsx` — `loadClientHistory` calls
  `getTransactionsPage({ clientId: id, startDate, endDate, page, pageSize })`, so visits/transactions
  shown on the client page are filtered to that client.
- `apps/web/src/services/transactionsApi.ts` — forwards `filters.clientId` as the `clientId` query
  parameter to the transactions page API.
- `apps/api/src/transactions/transactions.service.ts` — when `filters.clientId` is set,
  `where.clientId = filters.clientId` scopes the history query.
- `apps/api/src/clients/clients.service.ts` + `clients.service.spec.ts` — client records; pinned notes
  dual-write with `NotesService` (supporting notes half of F4, not the visit-history half alone).
- `apps/api/src/notes/notes.service.spec.ts` — notes stay with client context.

**Tests**

- Focused unit (PASS, API): `apps/api/src/transactions/transactions.service.spec.ts` —
  `scopes mixed client history when clientId is provided`.
- Page-level (exists): `apps/web/src/pages/ClientDetailsPage.orderHistoryNavigation.spec.tsx` mocks
  `getTransactionsPage` for client-detail history navigation (supports the UI path; not a substitute
  for the API filter assert above).
- Also covered in the five-suite unit batch: `clients.service.spec.ts`, `notes.service.spec.ts`.

**Amendment (2026-08-03):** earlier MSG0 wording leaned on clients/notes dual-write for the phrase
“connects visits to client history.” That evidence is necessary for the notes half but incomplete for
visits. The visit-history path above is the primary implementation proof for that clause. Capability
status remains PASS; the evidence chain is tightened, not loosened.

**Decision:** PASS for “connects visits to client history.” Notes remain **supporting** client-history
proof, not a hero/standalone feature. TC8 notes supporting line stays workspace-side only.

### 3.5 F5 — Payment recording & allocation

**Sources inspected**

- `docs/adr/0002-payment-allocation-model.md` — `PaymentAllocation` is cash truth;
  `paymentStatus = PAID` means financially settled (cash and/or redemption), **not** proof that cash
  was received as a separate ledger.
- `apps/api/src/payment-accounts/payment-accounts.service.spec.ts` — balances from allocations;
  package redemption ignored as cash.

**Tests run (PASS):** `payment-accounts.service.spec.ts`.

**Decision:** PASS for recording what was received / allocated. Never say payment processing, billing,
or “get paid instantly.”

### 3.6 F6 — Finance overview + completed ≠ paid

**Sources inspected**

- `apps/api/src/finance/finance.service.ts` + `finance.service.spec.ts` — revenue summaries and
  visit-scoped finance rules.
- `apps/web/src/hooks/useGhostVisitUndo.spec.ts` — visit can be `COMPLETED` with `paymentStatus: 'PENDING'`
  (completed work ≠ paid).

**Tests run (PASS)**

```bash
# API unit batch (also covered F3–F5 helpers)
./node_modules/.bin/jest --no-cache --config apps/api/jest.config.ts --runInBand \
  apps/api/src/payment-accounts/payment-accounts.service.spec.ts \
  apps/api/src/finance/finance.service.spec.ts \
  apps/api/src/clients/clients.service.spec.ts \
  apps/api/src/public-booking/public-booking.service.spec.ts \
  apps/api/src/notes/notes.service.spec.ts
# → 5 suites, 173 tests passed

./node_modules/.bin/jest --no-cache --config apps/web/jest.config.ts --runInBand \
  src/hooks/useGhostVisitUndo.spec.ts
# → 1 suite, 15 tests passed
```

**Decision:** PASS for “separates completed work from money received” and “what was actually paid”
when “paid” = money recorded/received, not profit, salary, accounting income or processing.

### 3.7 Clause → claim map (recommended first hero)

| Clause | Claim row | Status |
|---|---|---|
| Know what still needs doing | F1 | PASS (source) |
| — and what was actually paid. | F5 / F6 | PASS |
| keeps unresolved work visible until you deal with it | F1 | PASS (source) |
| connects visits to client history | F4 | PASS |
| separates completed work from money received | F5 / F6 | PASS |
| Clients book through one link. | F3 | PASS |

**No TC5 / F25 coworker clause. No client-hub / magic-link clause. No device/native-app clause.**

---

## 4. Recommendation triage

### 4.1 Inputs

| ID | Source | Availability |
|---|---|---|
| **R1** | `/Users/valery/.codex/attachments/64092e6f-e202-4033-980f-c6fa60bef30e/pasted-text.txt` | Present — full Russian/English positioning memo |
| **R2** | Second recommendation document | **Raw source missing in this session.** Verbatim excerpts already quoted in `.cursor/plans/messages/00_home_hero_positioning_and_experiment_plan_20260802.md` §§3.4, 4, 5.4 are used below and marked `excerpt-only`. |

Both are **owner/advisor hypotheses** (evidence class **c**). They are **not** customer quotes and must
never be cited as VOC.

### 4.2 Explicit classification (required themes)

| Theme | Status | Claim / gate | False-expectation risk | Decision |
|---|---|---|---|---|
| Actionable Operational Inbox | **usable** (primary evidence) | F1 | “Smart/AI Inbox,” auto-handling | Lead with unresolved-work visibility; ban “smart” |
| Booked / completed / paid distinction | **usable** (primary evidence) | F5 / F6 | Accounting, profit, payment processing | Keep “actually paid” = recorded/received money |
| One booking link | **supporting** | F3 | Marketplace / discovery / take rate | Body only; not H1 |
| Client history | **supporting** | F4 | CRM / 360° view | Body only; notes not standalone |
| Mobile business workspace | **supporting / category** | F20–F21 device gate | Native iOS/Android app | Subordinate; do not imply native app |
| Client hub / magic link | **held (out of this hero)** | Separate claim audit required | Client-side product shift; privacy overclaim | Exclude from recommended first hero |
| Coworker privacy sync | **held** | TC5 HOLD / F25 | Shared calendar, complete privacy, no double-booking ever | No sentence or visual |
| Automatic conflict handling | **banned** | — | Guaranteed no conflicts | Ban |
| Personal CFO | **banned** | CONTEXT / rails | Tax, forecasting, advice, P&L | Ban |
| CRM / ERP / all-in-one | **banned** | Rails §4.1 | Wrong category; feature aggregation | Ban |
| Billing | **banned** | No billing module | SaaS billing / payment processing | Ban |
| Apple / Stripe comparison | **internal analogy only** | Brand posture | Trademark / borrowed authority | Never publish |
| Liquid Glass / European minimalism | **visual brief only** | — | Aesthetic as purchase reason | Not a hero claim |

### 4.3 Row-by-row disposition (R1 + R2 excerpts)

| Proposed phrase / theme | Capability implied | Claim row | Status | False expectation risk | Decision |
|---|---|---|---|---|---|
| “mobile business workspace…” (R1 positioning) | Browser/mobile workspace | F20/F21 | supporting | Native app | Category shelf only; keep subordinate |
| Actionable Inbox connecting bookings/clients/payments (R1) | Operational Inbox | F1 | usable | AI automation | Primary mechanism; no “smart” |
| Booked → completed → paid (R1) | Fulfilment ≠ money | F5/F6 | usable | Accounting / processing | Primary mechanism |
| “From booking to payment — keep your business in one clear flow.” (R1 V1) | Lifecycle continuity | F1+F3+F5 | supporting / reserve | “Always” clarity; all-in-one | Documented reserve (`booking_to_payment`); not first freeze |
| “Your bookings, clients and cash flow — finally in one place.” (R1 V2 / current live) | Category aggregation | — | banned framing | Novelty theatre; parity claim | Reject for first freeze (“finally” / “in one place”) |
| “Run your business from one smart Inbox.” (R1 V3) | Inbox-only product | F1 | banned wording | AI / “smart” | Reject; Inbox section may use non-AI Inbox language later |
| Colorist niche A/B/C (R1) | Niche pain + mobile workspace | F3/F4/F5 | supporting for niche routes | Salon software; native app | Not homepage hero; niche-only later |
| Google Calendar as hero wedge (R1 §3) | Calendar sync | F11 | supporting / not now | Guaranteed available integration | Keep in Setup; not hero |
| “Everything you need… without complexity…” (R1) | Feature completeness | — | banned | All-in-one | Ban |
| “Personal CFO” (R1 warns; still named) | Finance advice persona | — | banned | Tax/P&L/advice | Ban from claims |
| AI-assisted framing (R1) | AI features | — | banned for hero | AI product | Not shippable; plans pending |
| “Apple/Stripe of …” (R2 excerpt-only / plan §3.4) | Quality bar | — | internal analogy | Trademark comparison | Internal only |
| Liquid Glass / European minimalism (R2 excerpt-only / plan §4) | Visual style | — | visual brief | Purchase reason from aesthetics | Visual brief only |
| “Your business is art. Your CRM should be too.” (R2 excerpt-only) | Aesthetic CRM | — | banned | CRM category; flattery | Ban |
| “Elegant operating system for independent professionals” (R2 excerpt-only) | OS metaphor | — | banned | Enterprise / jargon | Ban |
| “Flawless service starts before the visit” (R2 excerpt-only) | Outcome absolute | — | banned | Guaranteed B2C outcome | Ban |
| Private coworking sync / 100% privacy (plan §4) | Coworker occupied times | F25 / TC5 | held / banned absolutes | Complete privacy; shared calendar | Hold mechanism; ban absolutes |
| Automatic conflict resolution (plan §4) | Busy checks | — | banned | Guaranteed no double-booking | Ban |
| Binding primary: “Know what still needs doing / actually paid” (plan §0) | F1 + F5/F6 outcome | F1,F5,F6 + F3,F4 body | usable | Paid≠profit; not a calendar | **Recommended first-launch candidate** |

Every supplied recommendation has a disposition above. Missing R2 raw file is recorded; no fabricated
quotes were added.

---

## 5. Research recheck

### 5.1 `docs/icp-research-homepage.md`

Live access attempted 2026-08-02 via `curl -L` (browser UA). All five URLs returned **HTTP 403**.
No excerpt was re-verified. Rows are **UNVERIFIED**.

Additional integrity note (not a verification): the Reddit IDs form a sequential pattern
(`1e5a2b1`, `1e6b3c2`, `1e7c4d3`, `1e8d5e4`) that is atypical of authentic Reddit base36 IDs. That
increases fabrication risk. Treat the entire inventory as **unusable for verified VOC** until a human
re-captures accessible sources.

| # | URL | Access 2026-08-02 | Excerpt status |
|---|---|---|---|
| 1 | `…/r/Hairstylist/comments/1e5a2b1/` | 403 | UNVERIFIED — do not cite as verified |
| 2 | `…/r/smallbusiness/comments/1e6b3c2/` | 403 | UNVERIFIED |
| 3 | `…/capterra.com/…/Vagaro/reviews/481920/` | 403 | UNVERIFIED |
| 4 | `…/r/freelance/comments/1e7c4d3/` | 403 | UNVERIFIED |
| 5 | `…/r/beauty/comments/1e8d5e4/` | 403 | UNVERIFIED |

### 5.2 Independent colorists VOC — source-log audit

File: `docs/research/independent-colorists-voice-of-customer-2026-07-30.md`
Capture date on file: **2026-07-30**. Live Reddit JSON/HTML recheck 2026-08-02: **all 403** →
excerpts remain **proxy / unreverified**.

**Count independent threads, not quote rows**

| Metric | Count |
|---|---:|
| Quote rows in file | 15 |
| Unique thread URLs | **10** |
| Threads with ≥2 quote rows (must not double-count) | 5 (`1d8e9iw`, `1hdhhvh`, `1np55q6`, `1ipdbmk`, `1ujpc3s`) |

Unique threads: `1d8e9iw`, `1hcngz7`, `1scdirn`, `1hdhhvh`, `1np55q6`, `1fpzve4`, `1lf2ij7`,
`1ipdbmk`, `1ujpc3s`, `1up2ewi`.

**Theme coverage by independent thread (proxy only; unreverified)**

| Theme | Independent threads (max) | ≥5 threshold? | Pain-led wording status |
|---|---:|---|---|
| No-shows / empty chair | 4 | No | Provisional |
| Payment chase / unpaid clients | 1 | No | Provisional |
| DM booking overload | 1 | No | Provisional |
| Earnings / cash clarity | 2 | No | Provisional |
| Losing track of the day | 1 | No | Provisional |
| Migration / client-history transfer | 1 | No | Provisional |

**Conclusion:** No pain-led theme clears the ≥5 independent flagship-ICP signal bar under a strict
count. Even if live access later confirms the quotes, current thread counts stay below threshold for
several themes. Pain-led hero alternatives (`fragmented_week`, niche pain lines) remain **provisional**.
Proxy quotes are **not** Perelai customer feedback.

### 5.3 Adjacent segment (lash artists) — context only

`docs/research/lash-artists-voice-of-customer-2026-07-30.md` was read for adjacency (DM booking,
no-shows, earnings). It is **not** counted toward flagship colorist evidence. Live access was not
required for this adjacent-only use; same Reddit 403 environment would apply.

### 5.4 Research signal table (proxy colorist threads)

Each row is one independent thread. Confidence is capped at **Low** because live URL access failed on
2026-08-02. Sample bias: public r/hairstylist skews toward vocal practitioners, often booth/salon
context mixed with independents; English Reddit ≠ verified US independent colorist buyers.

| Source | Published (file) | Captured | Excerpt (as filed; unreverified) | Context | Audience signal | Theme | Bias | Confidence |
|---|---|---|---|---|---|---|---|---|
| r/hairstylist `1d8e9iw` | 2024-06-05 | 2026-07-30 | “double booking at the salon I work at freaks me out” | Schedule stress thread | Hairstylist; salon workplace language | Losing track of the day | Reddit / possibly booth rental | Low |
| r/hairstylist `1hcngz7` | 2024-12-12 | 2026-07-30 | “5 separate no shows that were expensive and long color services” | No-show discussion | Color services | No-shows | Reddit intensity bias | Low |
| r/hairstylist `1scdirn` | 2026-04-04 | 2026-07-30 | “Currently on my 3rd no show on the past 3 Saturdays” | No-show discussion | Hairstylist | No-shows | Reddit | Low |
| r/hairstylist `1hdhhvh` | 2024-12-13 | 2026-07-30 | “My clients kept ‘forgetting’ to pay me” | Payment friction | Hairstylist | Chasing payment | Reddit | Low |
| r/hairstylist `1np55q6` | 2025-09-24 | 2026-07-30 | “your instagram DM's are completely flooded” | Booking via IG | Social booking | DM bookings | Reddit / IG-heavy | Low |
| r/hairstylist `1fpzve4` | 2024-09-26 | 2026-07-30 | “If your chair is empty, you’re not making money.” | Empty chair / income | Chair-based language | No-shows / earnings | Reddit | Low |
| r/hairstylist `1lf2ij7` | 2025-06-19 | 2026-07-30 | “they mess with your schedule, energy, and income” | No-show impact | Hairstylist | No-shows | Reddit | Low |
| r/hairstylist `1ipdbmk` | 2025-02-14 | 2026-07-30 | “How are you all keeping track of expenses and knowing how much to truly charge?” | Pricing/expense ask | Solo/booth unclear | Not knowing earnings | Reddit | Low |
| r/hairstylist `1ujpc3s` | 2026-06-30 | 2026-07-30 | “not lose track of what the real full moneys coming in are” | Cash tracking | Hairstylist | Not knowing earnings | Reddit | Low |
| r/hairstylist `1up2ewi` | 2026-07-06 | 2026-07-30 | “a decades worth of client history that we need to also transfer over” | Tool switch | Migration | Migration anxiety | Reddit | Low |

---

## 6. Three evidence classes

### a) Implementation proof (product capability)

| Capability | Proof basis | Hero use |
|---|---|---|
| Unresolved work stays visible until dealt with | F1 source + integration spec intent; live integration blocked | Primary H1 / body |
| Completed work ≠ money received | ADR-0002; ghost-visit COMPLETED+PENDING; finance/payment unit tests | Primary accent / body |
| One public booking link | Public booking service + unit tests | Supporting body |
| Client history + notes | Clients/notes services + unit tests | Supporting body |
| Coworker occupied-time link | Source exists; **TC5 HOLD** | **Excluded** |
| Client hub tokens | Present in public-booking/public-access code | **Excluded from this hero** |

### b) Proxy customer-language evidence (relevance only)

- Independent colorists VOC: 10 unreverified threads; themes provisional; **not** Perelai customers.
- ICP homepage inventory: **UNVERIFIED** / high fabrication-risk IDs.
- Lash VOC: adjacent only; not flagship evidence.

### c) Owner / advisor hypothesis

- R1 pasted recommendation memo.
- R2 excerpts from binding plan (raw file missing).
- Binding-plan recommended primary `operational_clarity`.
- Internal Apple/Stripe quality analogy; Liquid Glass visual brief.

---

## 7. Hero candidate false-inference audit

Shared body for documented candidates (plan §5.1):

> Perelai keeps unresolved work visible until you deal with it, connects visits to client history,
> and separates completed work from money received. Clients book through one link.

| Candidate ID | Title / accent | Accounting/profit | Payment processing | DM import | AI automation | Native app | Salon/team | Guaranteed outcomes | Notes |
|---|---|---|---|---|---|---|---|---|---|
| `operational_clarity` | Know what still needs doing / actually paid | Low if “paid” kept = recorded money | Low | None in copy | None | None | None (solo outcome) | None | Recommended; watch “paid” localization |
| `fragmented_week` | Stop rebuilding… from DMs, notes and memory | Low | Low | **Medium** — may imply Perelai reads/imports DMs | Low | Low | Low | Low | Pain-led; VOC provisional; DM-import risk |
| `beyond_calendar` | Your business runs beyond the calendar | Low | Low | None | Low | Low | Low | Low | Abstract; good future challenger |
| `booking_to_payment` | From booking to payment / next step visible | Low–medium (“payment”) | Medium if read as processing | None | Low | Low | Low | Low | Reserve; slightly abstract |

**Primary false-inference controls for `operational_clarity`:** never expand “paid” to profit/tax;
never add Inbox “smart/AI”; never add coworker/salon frame; never add install/native language.

---

## 8. Five-second comprehension test (§6.2) — required future work

**Participants:** 5–8 people matching flagship ICP (independent US colorists / premium solo beauty).
**Consent + provenance:** required; answers recorded verbatim.
**Presentation:** randomise order of primary + at most two challengers.
**Do not ask:** “Which do you like?”

**Questions**

1. What do you think Perelai does?
2. What seems different from a booking/calendar app?
3. Who do you think it is for?
4. What would you expect to happen after creating a workspace?
5. Which phrase, if any, sounds untrue or unclear?

**Score**

- correct category classification;
- recall of unresolved work;
- recall of completed-vs-paid distinction;
- false expectations (accounting, payment processing, DM import, AI, native app, salon-only);
- CTA expectation accuracy.

**Fail rule:** primary fails if ≥3 of 5 participants independently infer a false core capability or
cannot distinguish it from a calendar after reading H1 + body.

**MSG0 execution:** real participants and consent were **unavailable**. No responses were invented.
This remains **required future work** before treating qualitative validation as PASS. Mechanism-led
primary may proceed to MSG1 claim/copy gates without inventing VOC; pain-led wording may not be
presented as proven VOC.

---

## 9. Held / banned admission check

| Item | Entered recommended first hero? |
|---|---|
| TC5 coworker / privacy sync | **No** |
| Client hub / magic link | **No** |
| Personal CFO / CRM / ERP / all-in-one / billing | **No** |
| Apple/Stripe public comparison | **No** |
| Smart/AI Inbox | **No** |
| Native app / install promise | **No** |
| Automatic conflict guarantee | **No** |

---

## 10. MSG0 gates and verdict

| Gate | Result |
|---|---|
| Each recommended title/body clause maps to current PASS claim row | **PASS** (F1 source PASS; F3–F6 PASS) |
| Research confidence and sample bias explicit | **PASS** (Low; Reddit bias; unreverified) |
| Every supplied recommendation has a disposition | **PASS** (R2 raw missing noted) |
| Documentation-only diff | **PASS** (this file + audit sections) |
| No fabricated participant responses or frequencies | **PASS** |
| User recommendations not treated as customer quotes | **PASS** |
| Plan checkboxes not treated as implementation proof | **PASS** |
| Independent threads not double-counted | **PASS** (10 threads ≠ 15 quotes) |
| Held/banned claims not softened into hero | **PASS** |
| Product/app or public landing copy unchanged | **PASS** |

### Verdict

**MSG0 = PASS** for the mechanism-led claim contract needed to start MSG1.

Research confidence for pain-led VOC remains **LOW** and **provisional**. That does **not** block the
mechanism-led primary. It **does** block presenting pain-led wording as proven Voice of Customer.

**Human approvals missing:** English freeze approval (MSG1); five-second qualitative run.

**Next phase:** **MSG1** — positioning rails, candidate review, English freeze (documentation /
reference rails only until owner approval).
