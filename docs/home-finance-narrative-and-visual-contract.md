# Home finance narrative and visual contract

**Phase:** FM3 — homepage information architecture and truthful finance visual specification
**Date:** 2026-08-03
**Landing HEAD (start):** `ac046862c761f132b96ab9f3028a29f5b29b868d` (clean)
**Product HEAD (evidence, read-only):** `f081179fe5beba5f5eeb3bf0bdb7568ad61f032f` (clean)
**Prerequisite:** FM2 — `PASS` with owner approval, `APPROVED WITH REPLACEMENTS`, recorded in
[`docs/home-hero-copy-audit.md`](home-hero-copy-audit.md) §II.7.9, 2026-08-03.
**Skills loaded:** `cro`, `copywriting`, `marketing-psychology`, `product-marketing`
**Status:** documentation only. No React, message, style, image, metadata or test file was edited.
This document and one bound annotation in `.cursor/plans/reference/messaging-and-claims.md` §7 are the
only writes.

This document is the **binding specification** for FM4A (copy implementation) and FM4B (React order,
HeroShowcase, and fixture implementation). It designs the information architecture and the finance
visual fixture on paper; it does not implement either.

---

## 0. How the skills shaped this document

- **`product-marketing`** — the component map in §2 and the section order in §3 follow the category
  ladder in `.agents/product-marketing.md` (financial clarity → states → drivers → connected records →
  operations → access/growth), not the retired booking-first shelf.
- **`copywriting`** — §6's fixture is built so every section's approved English (§II.7 of the copy audit)
  has a truthful visual referent; no section is asked to describe a number the fixture cannot produce.
- **`marketing-psychology`** — the Financial-states section stays text-only and early (position 3, not
  buried), because the finance-semantic reviewer's dissent in §II.4 of the copy audit was that ambiguity
  aversion needs the settled-vs-cash boundary stated before the reader forms a wrong mental model from
  the KPI tiles alone.
- **`cro`** — the `#features` anchor decision in §3.2 and the fold order in §3 keep the first product
  proof (Finance overview) directly below the hero, preserving five-second category clarity instead of
  making the visitor scroll through operational mechanics first.

---

## 1. Current homepage component inventory

Rendered order today (`components/homepage/homepage.tsx:18-40`), landing HEAD `ac046862`:

| # | Component file | Section id/anchor | Message namespace | Data source | Visual |
|---|---|---|---|---|---|
| 1 | `hero.tsx` | — | `home.hero.*` | `buildAppScreenDataset("independent_colorist", …)` | `HeroShowcase` (Calendar tab first, Finance tab second) |
| 2 | `problem.tsx` | — | `home.problem.*` | none (text only) | none |
| 3 | `inbox.tsx` | `id="features"` | `home.inbox.*` | `buildMockDataset(…)` | `MockInboxTriage` |
| 4 | `booking.tsx` | — | `home.booking.*` | none (text only) | none |
| 5 | `money.tsx` | — | `home.money.*` | `buildAppScreenDataset(…)` | `MockFinanceKpis` (KPI tiles + trend chart) |
| 6 | `devices.tsx` | `id="devices"` | `home.devices.*` | `buildAppScreenDataset(…)` | `DeviceDensityLadder` |
| 7 | `collaboration.tsx` | — | `home.collaboration.*` | generated UI strings only | `MockCollaborationWorkspace` |
| 8 | `setup.tsx` | `id="how"` | `home.setup.*` | none | none |
| 9 | `not.tsx` | — | `home.not.*` | none | none |
| 10 | `niche-router.tsx` | `id="niches"` | `home.nicheRouter.*` | niche catalog | none |
| 11 | `faq.tsx` | — | `home.faq.*` | none | none |
| 12 | `final-cta.tsx` | — | `home.closing.*` | none | `CtaCard` |

`LandingHeader`/`LandingFooter` wrap the list and are out of scope — no order or content change.

**Confirmed defects (source-verified, not re-asserted from the plan):**

- **R7** — `hero-showcase.tsx:36-39` renders `calendar` before `finance` in the `screens` array; index
  defaults to `0`, so Calendar is first on load. `hero.tsx:90-93` passes `financeTab` after
  `calendarTab`, matching the same order.
- **R8** — `lib/app-screen-mock.ts:188`: `const cost = Math.round(revenue * 0.27)`. Cost is a fixed
  percentage of a revenue figure that is itself the sum of independently pseudo-random calendar-cell
  totals (`seeded()`, `lib/app-screen-mock.ts:70-72`, salted per template/day). `lib/mock-data.ts:198-200`
  independently seeds a **second**, unrelated `revenue`/`cost`/`profit` triple (`MockDataset.kpis`) that
  is not read by any component currently in the tree — dead duplication, not merely arbitrary math.
  `lib/app-screen-mock.ts:180-185`'s `trend` array and `:201-220`'s `feed` array are each seeded a third
  and fourth time, independently of the KPI numbers and of each other. None of these four numbers
  reconciles with any other on the same rendered page.
- No category breakdown, client breakdown, or open-order balance is rendered anywhere in the current
  tree, although the **already owner-approved** `hero.imageAlt` and `finance.summary` strings
  (`docs/home-hero-copy-audit.md` §II.7.1, §II.7.3) describe a visual that shows "a service-category
  breakdown and an open-order balance." This is a real gap between frozen copy and current
  implementation, not a hypothetical one — §6.4 below resolves it.
- `#features` is on `inbox.tsx:22`. `messaging-and-claims.md` §7 requires FM3 to move it onto a finance
  section — resolved in §3.2.

---

## 2. Component disposition map

| Component | Disposition | Target section(s) | Rationale |
|---|---|---|---|
| `hero.tsx` | **Revise** | Hero | Copy swap is FM4A's job (already frozen, §II.7.1). Dataset must switch to the reconciled fixture (§6) and `HeroShowcase` must render Finance first (§5). File and structure otherwise unchanged. |
| `hero-showcase.tsx` | **Revise** | Hero | Reorder the `screens` array only (§5). No new screen invented — Calendar stays the second tab. |
| `problem.tsx` | **Retire** | — | No row in the FM2-approved 13-row order (`messaging-and-claims.md` §7) corresponds to a standalone pain-narrative section, and no `problem.*` key exists in the owner-approved English set (§II.7). The finance-first narrative opens with product proof (Finance overview), not a pain list. Remove the section and its render call; `home.problem.*` keys become orphaned — flagged in §10 for FM4A's key-pruning pass, not deleted here. |
| `inbox.tsx` | **Retire as a standalone section; merge into Daily operations** | Daily operations (6) | Row 6 of the approved order is a single section covering Inbox **and** Booking **and** Calendar as one supporting-mechanism argument (`operations.body`, §II.7.2: "Complete a visit, record a payment, add a cost or redeem a package. Booking, Calendar and Inbox keep these actions connected…"). One h2, one body, not two sections. |
| `booking.tsx` | **Retire as a standalone section; merge into Daily operations** | Daily operations (6) | Same approved paragraph closes with "Clients can also book through your own link" (F3). `booking.tsx` carries no mock today — nothing visual is lost by folding it in. |
| `money.tsx` | **Split** | Finance overview (2), Financial states (3), Drivers (4) | Money's single KPI-tiles-and-copy pattern must become three sections per the approved order and the FM2 finance-semantic reviewer's binding condition (`home-hero-copy-audit.md` §II.4 item 3: Financial states must sit directly below Finance overview, not four sections down). `MockFinanceKpis` is reused (revised) as the Finance-overview visual. |
| *(new)* `financial-states.tsx` | **New (from Money's remit)** | Financial states (3) | Text-only per §6.5 below — the honesty argument does not need its own product mock; it explains what the KPI tiles the visitor just saw do and do not mean. |
| *(new)* `drivers.tsx` + *(new)* `MockDriversBreakdown` | **New** | Drivers (4) | No current component shows category or client breakdown. Built from the same fixture ledger as Finance overview (§6). |
| *(new)* `connected-records.tsx` + *(new)* `MockConnectedRecordsFeed` | **New (extracted)** | Connected records (5) | `MockConnectedRecordsFeed` is the existing feed-list markup currently inlined in `MockFinanceScreen.tsx:46-86`, split into its own component so Hero and this section can each render it without duplicating markup. Same fixture rows, annotated for traceability (§6.6). |
| *(new)* `operations.tsx` | **New (merge of Inbox + Booking)** | Daily operations (6) | Reuses `MockInboxTriage` unchanged as the section's visual — it already depicts "complete a visit / clear the inbox," which is exactly the approved `operations.body` argument. |
| `devices.tsx` | **Reuse, revise dataset only** | Devices (7) | Position unchanged (the `Money → Devices` adjacency in `00_device_distribution_marketing_plan_20260731.md` §6.3 is preserved because Daily operations is the renamed continuation of that adjacency's left side — see §4). Must read the same reconciled dataset as every other section instead of the independently seeded one, so the numbers a visitor sees in the phone/desktop mock match the numbers already seen in Hero and Finance overview. |
| `collaboration.tsx` | **Reuse unchanged** | Collaboration (8) | No finance-narrative dependency. TC5 remains `HOLD`; nothing here changes that. |
| `setup.tsx` | **Reuse unchanged** | Setup (9) | — |
| `not.tsx` | **Reuse component; FM4A revises copy** | Not-for (10) | Component structure unchanged. Whether the current `not.*` strings already match the finance framing (e.g. "not accounting, not bookkeeping") is a copy question for FM4A/the FAQ `q_category` row, not a structural one — flagged in §11. |
| `niche-router.tsx` | **Reuse unchanged** | Niches (11) | — |
| `faq.tsx` | **Reuse component; FM4A reconciles bank of questions** | FAQ (12) | The approved set (§II.7.4) supplies exactly two new rows (`q_category`, `q_bank`). The component renders eight. Which of the existing six survive, get rewritten, or are dropped to the six named in `messaging-and-claims.md` §8 is a copy decision outside FM3's remit — flagged in §11. |
| `final-cta.tsx` | **Reuse unchanged** | Final CTA (13) | Copy already frozen (§II.7.5 `closing.title`). |
| `LandingHeader` / `LandingFooter` | **Reuse unchanged** | chrome | `footer.description` already frozen (§II.7.5). |

Net effect: 12 rendered sections today → 13 in the target order (Hero + 12 body sections), because
Money's single section becomes four (Finance overview, Financial states, Drivers, Connected records)
while Problem is retired and Inbox+Booking merge into one (Daily operations). 4 body sections retired
as standalone (`problem`, `inbox`, `booking`, `money`), 4 new files created, 6 reused unchanged, 1 reused
with a dataset-only revision.

---

## 3. Binding section order

```text
Hero → Finance overview → Financial states → Drivers → Connected records → Daily operations →
Devices → Collaboration → Setup → Not-for → Niches → FAQ → Final CTA
```

| # | Section | Component (target) | Anchor | Visual |
|---|---|---|---|---|
| 1 | Hero | `hero.tsx` | — | `HeroShowcase` (Finance tab first) |
| 2 | Finance overview | `finance-overview.tsx` *(renamed from `money.tsx`)* | `id="features"` | `MockFinanceKpis`, revised (§6.4) |
| 3 | Financial states | `financial-states.tsx` *(new)* | — | none (text) |
| 4 | Drivers | `drivers.tsx` *(new)* | — | `MockDriversBreakdown` *(new)* |
| 5 | Connected records | `connected-records.tsx` *(new)* | — | `MockConnectedRecordsFeed` *(extracted)* |
| 6 | Daily operations | `operations.tsx` *(new, merges Inbox+Booking)* | — | `MockInboxTriage` (reused) |
| 7 | Devices | `devices.tsx` | `id="devices"` | `DeviceDensityLadder` (reused) |
| 8 | Collaboration | `collaboration.tsx` | — | `MockCollaborationWorkspace` (reused) |
| 9 | Setup | `setup.tsx` | `id="how"` | none |
| 10 | Not-for | `not.tsx` | — | none |
| 11 | Niches | `niche-router.tsx` | `id="niches"` | none |
| 12 | FAQ | `faq.tsx` | — | none |
| 13 | Final CTA | `final-cta.tsx` | — | `CtaCard` (reused) |

This is exactly the order already stated in `messaging-and-claims.md` §7; FM3 does not change it, it
binds it against the actual component tree and resolves the two items that section explicitly deferred
to FM3: the `#features` anchor (§3.2) and the DVC/TEAM placement re-confirmation (§4).

### 3.1 Rendered order in `homepage.tsx` (target)

```tsx
<Hero locale={locale} />
<FinanceOverview locale={locale} />
<FinancialStates />
<Drivers locale={locale} />
<ConnectedRecords locale={locale} />
<Operations locale={locale} />
<Devices locale={locale} />
<Collaboration locale={locale} />
<Setup />
<Not />
<NicheRouter />
<Faq />
<FinalCta locale={locale} />
```

### 3.2 `#features` anchor — bound decision

`messaging-and-claims.md` §7 explicitly left this open ("FM3 owns that decision"). **Bound: `#features`
moves from `inbox.tsx` to `finance-overview.tsx`** (position 2). Hero's secondary CTA
(`hero.how` = "See how it works", `hero.tsx:57-62`) already scrolls to `#features`; Finance overview is
the first product-proof section below the hero in the new order, so "see how it works" lands on the
section that states the category outcome first — the same job `#features` did for Inbox under the
retired order. No other anchor (`#devices`, `#how`, `#niches`) changes.

---

## 4. Placement conflict check against DVC and TEAM

Read in full for this phase: `docs/device-claim-contract.md`, `.cursor/plans/devices/00_device_distribution_marketing_plan_20260731.md` §6, `docs/team-collaboration-claim-contract.md`, `.cursor/plans/features/00_team_collaboration_features_marketing_plan_20260802.md` §6.

**DVC binding constraint (`00_device_distribution_marketing_plan_20260731.md` §6.3, amended
2026-08-02):** the `Money → Devices` adjacency is binding — Devices must immediately follow the
product-outcome section, ahead of Setup/migration anxiety. **Preserved.** Money's narrative role (last
product-argument section before Devices) is now played by Daily operations (position 6), and Devices
(position 7) still immediately follows it. No section is inserted between Daily operations and Devices.

**TEAM binding constraint (`00_team_collaboration_features_marketing_plan_20260802.md` §6.1;
`messaging-and-claims.md` §7 amendment):** Collaboration sits between Devices and Setup, adds no CTA, no
route, no header/footer item, no anchor target, no FAQ row, and no niche-page block. **Preserved
unchanged** — Collaboration's position (8), content, and non-surface list are untouched by this phase.

**Single rotating-element rule (`device-density-ladder.tsx:49-51`, code comment: "no second rotating
element" — the homepage hero already owns the one auto-advancing component):** **Preserved.** §5 reorders
`HeroShowcase`'s two screens; it does not add a second auto-advancing component. `DeviceDensityLadder`
stays a static composite (§8 below re-confirms its reduced-motion and theme behavior are unaffected).

**TC5 (coworker) HOLD:** **Preserved.** `collaboration.tsx` is reused unchanged; nothing in this phase
touches `MockCollaborationWorkspace` or introduces a coworker zone.

No conflict found. No DVC or TEAM claim, visual, or placement rule was loosened, moved, or reinterpreted
to make the finance story easier to tell.

---

## 5. HeroShowcase specification

**Binding requirement (plan §6.2, defect R7):** Finance renders first on initial load; Calendar may
follow as operational context. Only currently-existing live-DOM screens may be used — do not invent a
third screen to hit the "ideal" Finance → client → payment → Inbox → Calendar sequence in plan §6.2. Only
`MockCalendarScreen` and `MockFinanceScreen` exist today, so the shipped sequence is **Finance →
Calendar**, exactly as the plan's fallback clause anticipates.

### 5.1 Change to `hero-showcase.tsx`

```diff
  const screens = [
-   { key: "calendar", tab: labels.calendarTab },
-   { key: "finance", tab: labels.financeTab },
+   { key: "finance", tab: labels.financeTab },
+   { key: "calendar", tab: labels.calendarTab },
  ] as const
```

And the render branch (`hero-showcase.tsx:94-102`) swaps which `screen.key` maps to which mock
component — no, it does not: the branch already dispatches on `screen.key === "calendar"`, so simply
reordering the array is sufficient; the branch logic needs no change. `index` still defaults to `0`
(`hero-showcase.tsx:30`), so the first array element renders first: **Finance is index 0 after this
change, with no other line touched.**

### 5.2 Labels

`hero.tsx:88-96` passes `calendarTab` before `financeTab` into the `labels` prop only for readability of
the prop literal — the *rendering* order is controlled by the `screens` array in §5.1, not by prop
order. No key rename is required; `hero.showcase.calendarTab` and `hero.showcase.financeTab` keep their
current strings. The `sr-only` summary at `hero-showcase.tsx:69-71` joins `screens.map(tab)`, so it will
automatically read "Finance, Calendar" once §5.1 ships — no separate edit needed there.

### 5.3 Rotation, pause, and accessibility — unchanged

Every existing behavior in `hero-showcase.tsx` is preserved verbatim:

- `ROTATE_MS = 7000` — unchanged interval.
- Hover, focus, and blur pause/resume (`:58-61`) — unchanged.
- First manual pick permanently stops rotation (`userPicked`, `:33`, `:114-117`) — unchanged.
- `useReducedMotion()` disables the interval entirely (`:34`, `:48`) — unchanged; reduced-motion visitors
  see the static Finance screen and never auto-advance to Calendar.
- `role="group"` / `aria-roledescription="carousel"` / `aria-label` (`:55-57`) — unchanged.
- Both screens stay mounted in one grid cell so the frame never jumps mid-rotation (`:78-106`) —
  unchanged; this remains correct regardless of which screen is first.

**FM4B must not regress any of the above while reordering the array.** No new test is required to prove
this beyond confirming index `0` renders `MockFinanceScreen` (§10 test matrix).

---

## 6. Deterministic example fixture

### 6.1 Why a new fixture module is required

Four independent number generators currently exist and none of them agree with any other
(§1 "Confirmed defects"): `MockDataset.kpis` (dead, unused), `AppScreenDataset.kpis`
(`revenue * 0.27` cost), `AppScreenDataset.trend` (independently seeded), `AppScreenDataset.feed`
(independently seeded). **FM4B must introduce one new fixture module — recommended path
`lib/finance-fixture.ts` — that is the single source of truth for every number rendered on the
homepage.** `buildAppScreenDataset` and `buildMockDataset` must derive `kpis`, `trend`, and `feed` from
this module's ledger instead of from `seededAmount`/`hashSeed` percentage math. `MockDataset.kpis`
(confirmed unused by any current render path) should be removed rather than reconciled twice.

The fixture below is the **worked example** for the `independent_colorist` template, used on the generic
homepage. It is illustrative example data, not real customer data, and every figure in it is captioned
"Example data" wherever it renders (§8.1). Per-niche fixtures for other templates are **out of scope**
for FM3 — that is FM8's migration work — but any niche fixture must follow the identical reconciliation
method specified here (§6.7 states the reusable rule).

### 6.2 Source ledger — July 2026, template `independent_colorist`

Reference instant stays `2026-07-15T12:00:00.000Z` (`APP_SCREEN_REFERENCE`, unchanged) — "today" is
2026-07-15. Every service/expense name below is the real, generated English string for this template
(`data/app-ui-strings.generated.json`, verified 2026-08-03); client names reuse the existing
`CLIENT_NAMES.en` pool (`lib/mock-data.ts:78`) unchanged.

| # | Client | Item | Date (Jul 2026) | Record type | Payment status | Cash allocation | Amount |
|---|---|---|---|---|---|---|---:|
| 1 | Mia | Dimensional Color / Balayage | 2 | Visit, Completed | Paid (card) | Yes | $220 |
| 2 | Mia | Bond Treatment (add-on) | 2 | Visit, Completed | Paid (card) | Yes | $35 |
| 3 | Leo | Root Color | 6 | Visit, Completed | Paid (card) | Yes | $140 |
| 4 | Leo | Styling Finish (add-on) | 6 | Visit, Completed | Paid (cash) | Yes | $25 |
| 5 | Ana | Haircut & Finish | 9 | Visit, Completed | Paid (cash) | Yes | $65 |
| 6 | Noah | Gloss & Toner | 12 | Visit, Completed | Paid (**package redemption**) | **No — $0** | $90 |
| 7 | Eva | Corrective Color | 14 | Visit, Completed | **Pending — not settled** | No | $260 |
| 8 | Ana | Root Color (no-show fee) | 15 | Visit, **No-show** | Paid (card) | Yes | $50 |

Expenses (`TransactionItem`, amount < 0 in product terms — shown here as positive cost):

| # | Item | Date | Linked services (real `linkedServices`, `business-templates-catalog.ts`) | Amount |
|---|---|---|---|---:|
| E1 | Color Product | 3 | `ic2, ic3, ic4, ic5` (Root Color, Balayage, Corrective, Gloss & Toner) | $180 |
| E2 | Disposable Supplies | 8 | `ic2, ic3` (Root Color, Balayage) | $60 |

Open order, independent of the visit ledger above (row 6's package redemption is a **different**
mechanism from this order — see §6.3 note):

| Order | Client | Total | Instalment 1 | Instalment 2 | Instalment 3 |
|---|---|---:|---|---|---|
| 3-session color-correction package | Noah | $450 | $150 paid, 2026-07-03 | **$100 due 2026-07-10, unpaid → overdue** (before reference "today" 2026-07-15) | $200 due 2026-07-25, unpaid, not yet due |

### 6.3 Category grouping — **OWNER-APPROVED 2026-08-03**

The landing's generated catalog has no `categoryId`/category-name field (verified 2026-08-03: neither
`data/niche-catalog.generated.json` nor the product's static onboarding template
`business-templates-catalog.ts` carries one — real product `Category` records are configured per company
after onboarding, per `apps/api/src/categories/` in the product repo, and are not part of the static
template). Per plan §6.3's own rule ("if the landing cannot model a state truthfully, omit that state"),
a category label cannot be sourced from a generated string the way service names, period labels, and
chart labels are.

**Binding resolution:** group the six colorist services the same way the real product data already
groups them — by shared linked expenses, exactly as the two expense rows above are linked to
`ic2, ic3, ic4, ic5` in the actual template. This is not an arbitrary landing invention; it reuses a
real relationship already present in `business-templates-catalog.ts`.

| Category (approved label) | Services | Rationale |
|---|---|---|
| **Color services** | Root Color, Dimensional Color / Balayage, Corrective Color, Gloss & Toner (`ic2–ic5`) | Exactly the services carrying `linkedServices` on both expense rows |
| **Styling & finishing** | Consultation & Strand Test, Haircut & Finish (`ic1`, `ic6`), plus add-ons | No linked expenses in the template |

This is the same evidentiary class as the existing `CLIENT_NAMES` pool (`lib/mock-data.ts:78-87`) —
fictional labels for an inherently company-specific concept, never claimed as the app's default or only
categories.

| Field | Value |
|---|---|
| **Status** | **APPROVED** |
| Reviewer | Repository owner |
| Decision date | **2026-08-03** |
| Exact approved labels | `Color services`, `Styling & finishing` |
| Scope | Illustrative fixture chrome for the `independent_colorist` homepage example only — not a claim about default product categories |
| FM4A keys | `finance.fixture.category.color` → `Color services`; `finance.fixture.category.styling` → `Styling & finishing` (English `messages/en/home.json`; FM5 translates) |

These two strings are now frozen for FM4A/FM4B the same way every other public English string is. They
appear only as visible mock chrome (Finance-overview category line §6.7 item 3; Drivers breakdown
§6.4). They do **not** amend the already-approved `hero.imageAlt` / `finance.summary` freeze
(`docs/home-hero-copy-audit.md` §II.7.1, §II.7.3) — those strings already describe "a service-category
breakdown and an open-order balance" at the correct summary level without hardcoding illustrative
category names or amounts into every alt string.

### 6.4 Reconciled totals

All figures below sum exactly from §6.2; no percentage, random seed, or independent estimate is used
anywhere in this table.

| Metric | Formula | Value |
|---|---|---:|
| Completed work (rows 1–8) | sum of all 8 rows | **$885** |
| Settled revenue | completed work − row 7 (pending) | **$625** |
| Cash recorded | settled revenue − row 6 (package redemption, $0 allocation) | **$535** |
| Expenses | E1 + E2 | **$240** |
| Calculated profit | settled revenue − expenses (label only — no public equation, §6.4.1) | **$385** |
| Open-order balance | $450 order total − $150 paid | **$300** |
| Overdue instalments | Instalment 2 only | **$100** |

**By category:**

| Category | Completed work | Settled revenue | Cash recorded | Expenses | Calculated profit |
|---|---:|---:|---:|---:|---:|
| Color services (rows 1,2,3,6,7,8) | $795 | $535 | $445 | $240 | $295 |
| Styling & finishing (rows 4,5) | $90 | $90 | $90 | $0 | $90 |
| **Total** | **$885** | **$625** | **$535** | **$240** | **$385** |

**By client (settled revenue):**

| Client | Completed | Settled | Cash | Note |
|---|---:|---:|---:|---|
| Mia | $255 | $255 | $255 | fully cash-settled |
| Leo | $165 | $165 | $165 | fully cash-settled |
| Ana | $115 | $115 | $115 | includes the no-show fee |
| Noah | $90 | $90 | $0 | settled entirely by package redemption; separately holds the $300 open order above — two independent facts about one client, intentionally, because that is exactly what the Financial-states argument claims |
| Eva | $260 | $0 | $0 | completed, not yet settled |
| **Total** | **$885** | **$625** | **$535** | matches the top-line table |

#### 6.4.1 Profit terminology

Per the owner's binding decision (`home-hero-copy-audit.md` §II.7.6), the public UI label is
**"calculated profit"** with **no equation shown**. The `settled revenue − expenses` arithmetic in this
document is internal reconciliation evidence for FM3/FM4B, not text or a tooltip that may appear on the
page.

### 6.5 Trend (intra-month, cumulative)

`AppScreenDataset.trend` samples 7 checkpoint days within the shown month (`1, 6, 11, 16, 21, 26, 31`,
`lib/app-screen-mock.ts:180-185`) — this is an **intra-month** cumulative line, not a month-over-month
comparison. Applying the §6.2 dates:

| Checkpoint day | Cumulative settled revenue | Cumulative expenses | Cumulative profit |
|---:|---:|---:|---:|
| 1 | $0 | $0 | $0 |
| 6 | $420 (rows 1–4) | $180 (E1) | $240 |
| 11 | $485 (+row 5) | $240 (+E2) | $245 |
| 16 | $625 (+rows 6, 8; row 7 excluded — pending) | $240 | $385 |
| 21 | $625 | $240 | $385 |
| 26 | $625 | $240 | $385 |
| 31 | $625 | $240 | $385 |

The line's final value ($385) matches the Profit KPI tile exactly — this is the reconciliation the
current independently-seeded `trend` array does not provide. **Rule for FM4B:** any additional period
(a second month, a quarter, a year) shown anywhere on the homepage must be built by applying this same
cumulative-ledger method to that period's own dated records, never by an independent seed. FM3
deliberately does not build a second full month — see §9.

### 6.6 Connected records — traceable rows

The "Every figure has work behind it" section (position 5) needs the highest-traceability subset of the
ledger, one row per mechanism so the section proves FC7 rather than merely restating it:

| Row | Client | Item | Mechanism | Cash |
|---|---|---|---|---|
| 1 | Mia | Dimensional Color / Balayage — $220 | Payment recorded against a visit | Yes |
| 2 | Noah | Gloss & Toner — $90 | Payment recorded against a visit **via package redemption** | **No — $0**, badge "package redemption, no cash movement" |
| 3 | Noah | 3-session order, instalment 1 — $150 | Payment recorded against an order/instalment | Yes |
| 4 | Ana | Root Color no-show fee — $50 | Payment recorded against a visit marked no-show | Yes |

This four-row set is deliberately different from the three-row Hero/Finance-overview feed (§6.7) — its
job is to span all three mechanisms named in `records.body` (visit, order, instalment), including the
one case (row 2) that makes FC2/FC7's settled-vs-cash boundary concrete rather than abstract.

### 6.7 Finance overview (Hero) — compact visual, resolving the alt-text gap

`hero.imageAlt` and `finance.summary` (already owner-approved, §II.7.1/§II.7.3) describe a visual
showing revenue, cost, calculated profit, **a service-category breakdown, and an open-order balance**.
The current `MockFinanceKpis`/`MockFinanceScreen` render only the KPI tiles, the trend chart, and an
unrelated 3-row feed — the category and open-order elements do not exist yet. **FM4B must extend the
Finance-overview/Hero visual, not merely re-skin it**, to add:

1. KPI tiles — Revenue $625, Cost $240, Profit $385 (§6.4), replacing the `revenue * 0.27` computation.
2. The cumulative trend line from §6.5, replacing the independently seeded one.
3. One compact category line: "Color services $535 · Styling & finishing $90" (§6.4; labels frozen
   §6.3). Amounts still route through `RegionCurrency` — the `$` forms here are documentation only.
4. One compact open-orders line: "$300 on open orders" (§6.4).
5. The existing 3-row feed, now sourced from §6.2 rows 1, 3 (Color Product expense, $180, dated 3
   before the trend so the chart and feed agree on order of events), and 3 — i.e. Mia/Balayage ($220,
   income), Color Product (E1, $180, expense), Leo/Root Color ($140, income) — replacing the current
   independently seeded feed.

Items 3–4 are new sub-elements, not new sections; they keep the Hero/Finance-overview visual a single
composite, matching the "one workspace, one dataset" principle already established by
`DeviceDensityLadder`'s own doc comment.

### 6.8 Fixture ownership note

Every section in the target order (Finance overview, Drivers, Connected records, Devices, and the Hero
showcase) must read from the **same** `finance-fixture.ts` ledger. This is the same rule
`device-density-ladder.tsx:8` already states for its own dataset ("different data would read as separate
products") — FM3 extends that rule across the whole homepage rather than just within one component.

---

## 7. Fixture construction rules (bans)

Binding on FM4B. A pull request that reintroduces any of the following fails the FM3 gate retroactively:

1. **No percentage-derived cost.** `cost = revenue * <constant>` (or any ratio of another shown figure)
   is banned. Every cost figure must trace to a named expense row (§6.2).
2. **No independent random/seeded values for any number that appears more than once on the page.**
   `hashSeed`/`seededAmount`/`seeded` may continue to exist for cosmetic, single-use decoration that
   never reconciles against anything else (e.g., calendar-cell "busy" booleans purely for visual density
   on days that carry no total) — they may **not** back KPI tiles, trend points, feed amounts, category
   totals, client totals, or the open-order balance. All of those come from the fixture ledger.
3. **No date-dependent values.** Continue passing an explicit `referenceInstant` (`APP_SCREEN_REFERENCE`)
   to every fixture builder; never call `Date.now()`/`new Date()` without an argument in a path that
   affects rendered output, so static generation stays byte-identical between builds.
4. **No hand-typed labels where a generated string exists.** Service names, add-on names, expense names,
   period labels (week/month/quarter/year), and `chart_labels.revenue/cost/profit` must continue to
   resolve through `data/app-ui-strings.generated.json` (`resolveName`, `lib/mock-data.ts:117-124`) or
   the niche catalog — never a hard-coded English string inside a `.tsx` file. This does not extend to
   §6.3's category labels or client names, which have no generated-string source to bypass (§6.3
   explains the distinction) — those go through ordinary marketing-copy review (message files, FM4A/FM5)
   instead of being inlined in components.
5. **No invented product states.** Every row in §6.2 maps to a real `VisitStatus`/`paymentStatus`/
   `PaymentAllocation source`/`Order.status` combination verified in `docs/finance-claim-contract.md`
   §3–§4. Do not add a fixture row for a state that has no `PASS` claim row (e.g., no refund, no
   correction, no export row — FC8/FC10 stay unrepresented, §9).

---

## 8. Accessibility, responsive, theme, localization, and lifecycle contract

### 8.1 Visible and screen-reader "Example data" disclosure

Every mock figure keeps the existing dual pattern, unchanged in mechanism:

- **Visible caption:** the localized `exampleCaption`/`hero.imageCaption`/`devices.caption`/
  `finance.caption` string ("Example data" in English, `lib/mock-data.ts:89-99`), rendered inside a
  `<figcaption>` inside the mock's frame — never floating near it (existing rule,
  `device-density-ladder.tsx:92`).
- **Screen-reader summary:** one `sr-only` paragraph per figure, placed **outside** the `aria-hidden`
  decorative subtree, stating the real reconciled numbers in prose — not a transcription of every pixel.
  `hero.imageAlt` and `finance.summary` already exist and are approved (§II.7.1, §II.7.3). They already
  name the category breakdown and open-order balance at summary level; **no freeze amendment is
  required** now that §6.3 labels are signed off — the approved labels ship as fixture chrome keys
  (`finance.fixture.category.*`), not as rewrites of the alt strings. **The Drivers section visual is
  the one exception to the aria-hidden-plus-summary pattern:** because its entire job is to show a
  category/client breakdown, it should render as a real semantic list (or table), not a decorative
  replica, so the numbers are natively accessible and no separate `sr-only` summary string is
  required. No new `drivers.summary` key is needed.

### 8.2 Focus, pause, and reduced motion

- `HeroShowcase` — unchanged from §5.3: hover/focus pause, first pick stops rotation permanently,
  `useReducedMotion()` disables the interval outright.
- `DeviceDensityLadder` — already static (no rotation, no interval); unaffected by this phase.
- The four new/revised sections (Financial states, Drivers, Connected records, Daily operations) use the
  existing `Reveal` fade-in-on-scroll wrapper only (`components/landing/reveal.tsx`, already used by
  every current section) — no new animation primitive, no new auto-advancing element, preserving the
  single-rotating-element rule (§4).

### 8.3 Theme

All new visual elements (category line, open-orders line, `MockDriversBreakdown`,
`MockConnectedRecordsFeed`) must use the existing CSS custom-property tokens already used throughout
`components/mock/*` (`var(--success)`, `var(--border)`, `var(--muted-foreground)`, the `brand-*` scale,
etc.) — no hard-coded hex or RGB literal. This is the existing convention (every current mock component
already follows it); FM3 adds no new token.

### 8.4 Localization

- Currency: continue routing every amount through `RegionCurrency`/`formatCurrency(amount, market)`
  (`components/mock/region-currency.tsx`) — never a hard-coded `$`.
- Client names: continue using the per-locale `CLIENT_NAMES` table (already covers all 9 published
  locales).
- Category labels (§6.3): frozen English (`Color services`, `Styling & finishing`) must go through the
  same 9-locale message-file + named human-review pipeline as every other marketing string
  (`finance-claim-contract.md` §7 rule: "English is the only source language... An LLM may draft and
  back-translate, but may not approve a locale") — not hand-typed per-locale by an executor. Keys:
  `finance.fixture.category.color` / `finance.fixture.category.styling`.
- Date/month labels: continue using `Intl.DateTimeFormat(locale, …)` against the fixed reference instant
  — no new date-formatting path introduced.

### 8.5 Mobile fallback

`MockDriversBreakdown` and `MockConnectedRecordsFeed` must degrade to a single-column stacked list below
the existing `64rem` container-query threshold — the same threshold `DeviceDensityLadder` already uses
(`device-density-ladder.tsx:65-66`, `@[64rem]:block`). No new breakpoint is introduced. Neither
component may require horizontal scrolling to read a total.

### 8.6 Empty and loading states

**None exist and none are needed.** Every number on the homepage is statically generated at build time
from the fixed `APP_SCREEN_REFERENCE` fixture (existing rule, `lib/app-screen-mock.ts:10-12`: "never
reads the current clock... so the statically generated HTML stays byte-identical between builds"). FM4B
must not introduce client-side fetching, a loading skeleton, or an empty state for any homepage finance
visual — doing so would break the build-time determinism this whole contract depends on.

---

## 9. What this visual deliberately does not prove

- It does not prove accounting, tax, or bookkeeping compliance — Perelai is not that category (§0,
  positioning contract).
- It does not prove this is real customer data. Every figure is fictional and captioned as such,
  everywhere, in every locale.
- It does not prove per-service profitability. Aggregation stops at the category level (FC4); the
  fixture's category grouping (§6.3) is illustrative, not a claim about what every workspace's
  categories look like.
- It does not prove that settled revenue always, or even usually, matches a bank balance — the fixture
  is deliberately built to prove the **opposite**: row 6 (Noah, package redemption) is settled revenue
  with zero cash movement, by design, to make FC2/FC7's boundary concrete rather than asserted.
- It does not prove export, refund, or correction capability (FC8 `BLOCKED`, FC10 not audited) — no row
  in §6.2 represents any of those states, and none may be added without a new claim-contract entry.
- It does not prove TC5 (coworker) capability — `collaboration.tsx` is untouched and still one-zone only.
- It does not prove real-time or live data — the whole fixture is frozen at one static reference instant
  with no loading state (§8.6).
- It does not prove multi-period trend accuracy beyond the one intra-month line in §6.5. A second month,
  quarter, or year of reconciled data is explicitly **not** built here — if FM4B wants a month-over-month
  comparison visual, it must extend `finance-fixture.ts` with additional dated records using the same
  method (§6.5's rule), not add a second seeded number.
- It does not prove the "$300 open orders" / "$100 overdue" figures against every possible order state —
  only the one three-instalment example in §6.2 is modeled.

---

## 10. File ownership and test matrix for FM4A/FM4B

### 10.1 File ownership

| File | Owner phase | Action |
|---|---|---|
| `messages/en/home.json` | FM4A | Add `finance.*`, `states.*`, `drivers.*`, `records.*`, `operations.*` per §II.7.1–§II.7.5; add frozen fixture labels `finance.fixture.category.color` / `finance.fixture.category.styling` per §6.3; retire `problem.*`, `inbox.*`, `booking.*`, `money.*` keys (after confirming no other surface reads them) |
| `messages/{de,es,fr,pl,pt,ru,tr,uk}/home.json` | FM5 only | Not touched before FM5 |
| `components/homepage/homepage.tsx` | FM4B | Reorder per §3.1 |
| `components/homepage/hero.tsx`, `hero-showcase.tsx` | FM4B | Dataset swap to `finance-fixture.ts`; array reorder per §5.1 |
| `components/homepage/finance-overview.tsx` *(renamed from `money.tsx`)* | FM4B | Rename, extend visual per §6.7, add `id="features"` |
| `components/homepage/financial-states.tsx` *(new)* | FM4B | New, text-only |
| `components/homepage/drivers.tsx` *(new)* | FM4B | New |
| `components/homepage/connected-records.tsx` *(new)* | FM4B | New |
| `components/homepage/operations.tsx` *(new)* | FM4B | New, merges Inbox+Booking; reuses `MockInboxTriage` |
| `components/homepage/problem.tsx`, `inbox.tsx`, `booking.tsx`, `money.tsx` | FM4B | Delete after the four replacement files render correctly |
| `components/mock/MockFinanceKpis.tsx`, `MockFinanceScreen.tsx` | FM4B | Revise to read `finance-fixture.ts`; extract feed markup into `MockConnectedRecordsFeed.tsx` |
| `components/mock/MockDriversBreakdown.tsx` *(new)* | FM4B | New |
| `components/mock/MockConnectedRecordsFeed.tsx` *(new, extracted)* | FM4B | New |
| `lib/finance-fixture.ts` *(new)* | FM4B | New — single source of truth, §6 |
| `lib/app-screen-mock.ts` | FM4B | Remove `cost = revenue * 0.27` and independent `trend`/`feed` seeding; derive from `finance-fixture.ts` |
| `lib/mock-data.ts` | FM4B | Remove unused `MockDataset.kpis` seeding (`:198-200`) |
| `components/homepage/devices.tsx` | FM4B | Dataset source only — no structural change |
| `.cursor/plans/reference/messaging-and-claims.md` §7 | FM3 (this phase) | Bind the `#features` decision — done, §12 |

### 10.2 Test matrix (repository scripts: `pnpm test` → `vitest run`; see `package.json`)

| Test | Type | Asserts |
|---|---|---|
| `finance-fixture.test.ts` *(new)* | Unit | §6.4's totals reconcile: completed = settled + pending; settled = cash + non-cash; category totals sum to page totals; client totals sum to page totals; trend's final point equals the profit KPI |
| `hero-showcase.test.ts` *(new, or extend `mock-data.test.ts`)* | Unit/render | Index `0` renders `MockFinanceScreen`, not `MockCalendarScreen`; `sr-only` summary lists Finance before Calendar |
| `mock-data.test.ts` (extend) | Unit | `buildAppScreenDataset` and any successor no longer contain `revenue * 0.27` or independent `seededAmount` calls feeding `kpis`/`trend`/`feed` |
| `homepage-order.test.ts` *(new)* | Render | `Homepage` renders sections in the exact §3 order; `#features` resolves inside Finance overview, not Inbox/Operations |
| `device-shell.test.ts` (extend) | Render | `Devices` reads the same fixture totals as `finance-overview.tsx` on the same page render |
| `collaboration-mock.test.ts`, `collaboration-feature.test.ts` | Unchanged | Re-run only to confirm no regression — no edit expected |
| `verify-niches.test.ts`, `check-uniqueness.test.ts` | Unchanged | Re-run to confirm the retired `problem`/`inbox`/`booking`/`money` keys are not referenced by any niche generator path before deletion |
| Manual: five widths × two themes × reduced motion | Human (FM7) | Out of FM3's scope; recorded here so FM7 inherits the correct checklist for the new sections |

---

## 11. Open items carried forward

### 11.0 Closed by owner during FM3 (2026-08-03)

| # | Item | Resolution |
|---|---|---|
| 1 | Category labels "Color services" / "Styling & finishing" (§6.3) | **APPROVED** by repository owner 2026-08-03 — frozen in §6.3 with FM4A keys `finance.fixture.category.color` / `finance.fixture.category.styling` |
| 2 | Whether `hero.imageAlt` / `finance.summary` need an additional clause after §6.3 sign-off | **Closed — no amendment.** Approved §II.7 strings already describe the category breakdown and open-order balance at summary level; specific labels ship as fixture chrome only (§6.3, §8.1) |

### 11.1 Still open — FM4A / later (do not block FM3 → FM4A)

| # | Item | Blocks | Owner |
|---|---|---|---|
| 3 | FAQ bank reconciliation: `faq.tsx` renders 8 items; the approved set (§II.7.4) supplies exactly 2 new rows; `messaging-and-claims.md` §8 names 6 for the homepage. Which existing rows survive/change is undecided | FM4A gate (copy completeness), not FM3 | FM4A |
| 4 | `not.*` copy has not been checked against the finance-first framing (still holds the retired category's wording, unverified in this phase) | FM4A | FM4A |
| 5 | `home.problem.*`, `home.inbox.*`, `home.booking.*`, `home.money.*` keys become orphaned once §3.1 ships — confirm no niche generator or shared default reads them before deleting (`verify:niches`/`check-uniqueness` per §10.2) | FM4A/FM4B | FM4A |
| 6 | Month-over-month trend/comparison visual (if ever wanted) needs a second dated ledger period built by the same method as §6.5 — not built here | Future, not FM4B-blocking | Deferred |

---

## 12. Gate verdict

| Gate | Result |
|---|---|
| Approved section order bound against the real component tree, with every component's disposition recorded | **PASS** — §1–§3 |
| Fixture arithmetically reconciled (completed/settled/cash/expenses/open-order/category/client/trend all sum consistently) | **PASS** — §6.4–§6.5 |
| Accessible proof contract specified (visible + sr-only disclosure, focus/pause, reduced motion, theme, localization, mobile fallback, no invented loading/empty state) | **PASS** — §8 |
| No conflict with DVC or TEAM placement/visual constraints | **PASS** — §4 |
| Percentage-derived cost, unreconciled random values, date-dependent values, and generated-string bypasses explicitly banned for FM4B | **PASS** — §7 |
| What the visual does not prove stated explicitly | **PASS** — §9 |
| Component/file ownership and FM4A/FM4B test matrix provided | **PASS** — §10 |
| No React, message, style, image, metadata, or test file edited in this phase | **PASS** — documentation-only diff, verified below |
| Category labels owner-approved; dependent alt-text amendment correctly declined (existing freeze already sufficient) | **PASS** — §6.3, §11.0 |

**FM3 = PASS.** No remaining owner gate blocks the start of FM4A. FM4A inherits open copy work
items §11.1 (3–5) as its own remit; none of them re-open FM3.
