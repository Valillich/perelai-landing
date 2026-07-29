# Product Mock Kit — Rendered App Surfaces Instead of Screenshots

**Repo:** `/Users/valery/Sites/perelai-landing`
**Created:** 2026-07-28
**Status:** planning only — no application code changed while preparing this document.
**Inserts:** Phase **LP5b** into
[`niche_landing_i18n_product_relaunch_20260725.plan.md`](niche_landing_i18n_product_relaunch_20260725.plan.md),
between LP5 and LP6.
**Amends:** LP1.2, LP2.1, LP2.3, LP6, LP7.2, LP7.3, LP9.2, LP11.1, and
`reference/messaging-and-claims.md` §5.1 / §9.

**Sibling work:** the app repo made the same call for its pre-auth tour —
`beauty-finance/.cursor/plans/tour/05_tour_live_stage_components_20260727.md`. The reasoning
transfers; **the mechanism does not** (see §6), because the landing cannot import app code.

---

## 1. Verdict

**Yes — and the case is stronger here than in the app.** Rendered, localized, per-niche
product mocks should be the **primary** product visual on `perelai.com`. One real screenshot
stays, on the homepage only, for the reason §5 gives.

This is not currently in the plan. The plan says the opposite (§2), while simultaneously
depending on rendered mocks in two places (§2.1) — an unresolved contradiction that this
document closes.

---

## 2. What the plan says today

| Where | What it says |
|---|---|
| `reference/messaging-and-claims.md` §5.1 | *"Real screenshots of the real app, not stylised mockups."* Trust substitute #1, for a product with no testimonials. |
| `reference/messaging-and-claims.md` §9 | Niche page block table: **Screenshots — must be niche-specific — "app screens with that template's data"** |
| Plan LP6, Hero bullet | *"Hero image must be a real app screenshot, not the current stylised mockup, and must carry an `Example data` caption."* |
| Plan LP7.2 | Content model: `hero: { eyebrow, h1, subhead, screenshot }`, inside `content/niches/{niche-slug}/{locale}.ts` — i.e. **per niche, per locale** |
| Plan LP1.4 | Replace raw `<img>` with `next/image`; hero LCP < 2.5 s |

So the plan's direction is: **code mock → screenshot.** The proposal is the reverse.

### 2.1 The contradiction already inside the plan

Two phases assume the visuals are **code**, not images:

- **LP5.3**, the region-detection allow-list, permits *"Example amounts in illustrative UI
  mocks"* to change per market. **A PNG cannot be region-sensitive.** LP5 is written against a
  rendered mock that does not exist yet.
- **LP0.4** instructs: *"Add a visible `Example data` caption to the mock Inbox card"* —
  preserving `components/landing/landing-features.tsx:36-60`, which is already hand-written
  JSX rendering three fake rows, not an image. That is a stylised mockup, kept and captioned
  by the very plan whose messaging reference bans stylised mockups.

The plan therefore already ships one rendered mock, already requires rendered mocks to be
region-aware, and still tells LP6 to replace rendered mocks with screenshots. LP5b resolves
this in one direction, deliberately.

---

## 3. What is actually on the site today — verified 2026-07-28

```
public/landing/hero-dashboard.png    1,276,306 B   1024×1024 RGB   ← hero, raw <img>, LCP
public/landing/clear-profit.png      1,181,250 B   1024×1024 RGB   ← how-it-works step 2
public/landing/messy-calendar.png    1,274,323 B   1024×1024 RGB   ← how-it-works step 1
public/images/analytics-mockup.png     122,635 B    870×944 RGBA   ← UNREFERENCED
public/images/calendar-mockup.png       85,010 B    864×928 RGBA   ← UNREFERENCED
public/images/inbox-mockup.png         129,968 B    660×648 RGBA   ← UNREFERENCED
```

**Four findings:**

1. **3.7 MB of images in three raw `<img>` tags**, with `images.unoptimized: true` still set
   in `next.config.mjs` (review defect L9). `hero-dashboard.png` alone is **1.28 MB** and is
   the LCP element. LP1.4 targets hero LCP < 2.5 s and LP11.1 gates Lighthouse mobile
   Performance ≥ 90 — these three files are the single largest threat to both gates.
2. **They are almost certainly not screenshots.** 1024×1024, square, RGB with no alpha
   channel, >1 MB each — that is the signature of generated illustration, not a captured app
   screen. If so the site already violates messaging §5.1 today, and LP0.4's triage did not
   catch it because it only audits *text*.
3. **`public/images/*.png` are byte-identical to the app's stale donor assets.** Verified by
   md5 against `beauty-finance/v2-donor/public/images/` — same three files, dated
   **2026-03-29**, predating the pricing-basis, coworker, and inventory work. They are
   unreferenced dead weight in both repos. LP1.2's delete list covers the v0 placeholders but
   **misses these three**.
4. The one honest product visual on the site is the hand-coded Inbox card in
   `landing-features.tsx:36-60` — hardcoded English, invented rows, hardcoded hex literals,
   sitting under the banned claim *"Every booking automatically becomes revenue."*

---

## 4. Why rendered mocks, specifically here

Four arguments. The first two do not apply to the app's tour at all — they are landing-only.

### 4.1 The screenshot combinatorics are unpayable

Messaging §9 requires niche-specific screenshots — *"app screens with that template's data"*.
LP7.2 puts `screenshot` inside the **per-locale** content file. Wave 1a + 1b is 8 niche pages,
LP4.4 ships 7 locales, and a niche page carries roughly 3 visuals.

**8 × 7 × 3 = 168 screenshots**, each requiring a seeded workspace in that template *and* that
UI language, re-captured on every UI change.

Nobody maintains that. In practice one of two things happens: the site ships English
screenshots to Ukrainian and German visitors — after the plan spent all of LP4 making the
*text* localized — or niche pages silently share one generic image and the §9 contract is
quietly broken. Both are worse than the third option.

The app's tour faced the same problem at 4 × 7 = 28 and rejected it. Here it is six times
larger.

### 4.2 A screenshot contributes zero indexable text

LP7.3 is the pSEO uniqueness contract: **≥60% of a niche page's body text must be
niche-specific**, enforced by `scripts/check-uniqueness.mjs`, which *tokenizes rendered text*.

A `<img>` contributes nothing to that count. A rendered mock contributes real, per-niche,
indexable text — service names, add-on names, expense names — drawn from that template's own
`services[]` / `addons[]` / `expenses[]` arrays.

That is the same asset class messaging §9 already identifies as the strongest available:

> *"The terminology table is the highest-value block. It is product-derived proprietary data —
> the strongest category in the pSEO defensibility hierarchy — and no competitor can copy it."*

A rendered mock is the **visual sibling of the terminology table**: the same proprietary data,
shown instead of tabulated. It does not merely avoid hurting the uniqueness gate — it feeds
it, and it makes two niche pages structurally different rather than differently-captioned.

### 4.3 Performance

LP1.4's hero-LCP target and LP11.1's Lighthouse ≥ 90 gate are both currently threatened by a
1.28 MB hero image. A rendered mock is HTML and CSS in the statically generated document: it
paints with the page, costs no image request, has no CLS, and is sharp at every DPR. On a
Next.js SSG site this is close to free.

### 4.4 Theme and region, which the plan already requires

- **LP1.2** requires light *and* dark. A light-mode screenshot on a dark page is the classic
  mismatch, and doubles the asset count again if solved properly (**336 files**).
- **LP5.3** requires example amounts in mocks to follow the detected market. Only code can.

---

## 5. The honest counter-argument, and the split

A screenshot proves the product exists and looks like that. A rendered mock proves nothing
about the real UI, and — left unguarded — will drift toward flattering the product: cleaner
than the real screen, with the awkward parts quietly omitted. That is a real risk on a page
whose entire trust strategy (§5) is *"product transparency as proof"* because there are no
customers to point at.

**The split:**

| Surface | What ships | Why |
|---|---|---|
| Homepage, one primary visual | **One real screenshot**, `next/image`, `Example data` caption | Preserves messaging §5.1's actual intent: at least one place where a visitor sees the unedited product |
| Homepage supporting visuals | Rendered mocks | Repeated, localized, themed |
| Every niche page visual | Rendered mocks, per-template data | 168 → 0 assets; feeds LP7.3 |
| Pricing, legal | No product visual | — |

Messaging §5.1 is **narrowed, not overridden**: "at least one real screenshot per page family,
and every rendered mock captioned as illustrative." The mock's honesty comes from a different
place than a photograph's — §6.

---

## 6. Why the app's approach does not port, and what replaces it

The app's tour solved drift with two mechanisms
(`beauty-finance/.cursor/plans/tour/05_…md` §3, §5):

- **Tier A** — import the real component (`CoworkerBusyCard`, `RecordCardSurface`)
- **Tier B** — re-implement, but bind every string to *the same i18n key the real component
  uses*, enforced by a key-parity grep over one module graph

**Neither is available here.** Review §7.3: the landing cannot import `@beauty-finance/core` —
separate repo, separate deploy, different framework (Next.js App Router vs Vite SPA), no
shared module graph to grep. Everything on the landing is necessarily Tier B, which makes the
guard *more* important, not less.

The replacement is the mechanism **LP2 already built**: generate, do not hand-type.

| Risk | Guard |
|---|---|
| Mock shows a service the product does not have | Service / add-on / expense names come from `data/niche-catalog.generated.json`, which LP2.1 **already extracts** (`services[] / addons[] / expenses[]` with `id` + `nameKey`) |
| Mock uses a label the app does not use | UI strings come from `data/app-ui-strings.generated.json` — a new, curated, allowlisted extraction from `apps/web/public/locales/{lng}/*.json` (§7.3). LP4.4 **already mandates** reusing the app's translations for exactly this reason |
| A string or service disappears in the app | `pnpm verify:niches` (LP2.3) gains two checks and fails the build |
| Mock drifts into showing unbuilt capability | Every mock element traces to a row in `messaging-and-claims.md` §2, same rule as copy. Enforced in the LP5b gate and in `cro` review |
| Mock reads as a real screenshot | Every mock carries a visible illustrative caption (§7.5) |

**The consequence worth stating plainly:** because service names and UI labels come from the
app's own catalog and the app's own translation files, a rendered mock is arguably *more*
truthful than a screenshot of a hand-seeded demo workspace — the data is provably the
product's, in seven languages, and it breaks the build when it stops being true.

---

## 7. Phase LP5b — Product mock kit

**Position:** after LP5, before LP6.
**Depends on:** LP1 (tokens, dark mode), LP2 (generated catalog), LP4 (i18n), LP5 (region → currency).
**Consumed by:** LP6 (homepage), LP7 (niche template), LP9.2 (OG images), LP11 (Wave 1b).
**Skills:** marketing `cro`, `copy-editing`; repo-local `design-taste-frontend`, `tdd`.
The one screenshot in §5 must be captured from a synthetic, PII-free app workspace; do not generate
or cosmetically reconstruct it with the `image` skill.

### 7.1 Component inventory

`components/mock/` — four components, mirroring the four app surfaces named in the request.

| Component | Mirrors (app) | Renders | Used by |
|---|---|---|---|
| `MockCalendarMonth` | `apps/web/src/pages/CalendarPage.tsx:2419,2465` (`grid grid-cols-7 gap-1`) + `components/calendar/CustomDay.tsx` | Month grid, per-day money totals, two day rows | Home §7.5 "money" · every niche hero |
| `MockInboxTriage` | `apps/web/src/components/ui/InboxSheet.tsx:1655-1675` + `SwipeableGhostCard.tsx` | The trust line over 2–3 pending rows | Home §7.3 "Inbox" — the differentiator |
| `MockVisitCard` | `apps/web/src/components/ui/RecordCardSurface.tsx` (the app's own *"presentational record-card surface extracted from the stable VisitCard grammar"*) | One visit row: service, client, time, amount | Composed into the two above |
| `MockFinanceKpis` | `apps/web/src/components/finance/FinanceDashboard.tsx:674-733` | Three KPI tiles + an **inline SVG** sparkline | Home §7.5 · niche pages |

**Hard constraint on `MockFinanceKpis`:** the chart is a hand-authored inline SVG, ~30 lines.
Do **not** add `recharts` or any charting library. The app carries recharts for this and it is
the single heaviest dependency in its bundle; importing an equivalent onto a marketing site
whose Lighthouse score is a gate would be a self-inflicted wound.

`MockInboxTriage` is the most valuable of the four. The Inbox is the documented differentiator
(workspace CONTEXT §"Main differentiator", plan LP6 §7.3), and the app's trust line —
*"Confirming the next 3 visits will generate ~$45 in your finance reports"* — already exists
as shipped, translated product copy in all seven locales
(`apps/web/public/locales/{lng}/beauty.json` → `inbox.trust_*`). Rendering it means the
landing's differentiator section says the product's own words, in the visitor's language.

### 7.2 Data contract

Every mock is a **pure presentational component**. Props in, DOM out. No fetch, no client
state beyond the region hook, no invented content.

```ts
// components/mock/types.ts
export interface MockDataset {
  templateId: string;          // from the page's NichePage entry
  locale: Locale;
  market: SupportedMarket;     // from LP5 detectMarket()
  services: MockService[];     // generated catalog, localized via nameKey
  addons:   MockService[];
  expenses: MockService[];
  clients:  string[];          // fictional given names, from a per-locale list
}
```

Built by `lib/mock-data.ts::buildMockDataset(templateId, locale, market, referenceInstant)`:

- Service, add-on and expense names resolve from `niche-catalog.generated.json` `nameKey`s
  against `app-ui-strings.generated.json` for that locale.
- Money is **derived, not authored**: a small deterministic function seeded by `templateId`
  so a colorist page shows colorist-plausible amounts and a tutor page shows tutor-plausible
  amounts, stably across builds. Formatted through `Intl.NumberFormat` with the market's
  currency (LP5).
- Client names come from a per-locale fictional-name list — a `de` page must not show
  `Mia, Leo, Ana`. No real names, no phone numbers, no emails, no avatars.
- Dates are relative to a fixed/injected reference instant stored with the fixture. Never call
  `Date.now()` during build; the same inputs must generate byte-identical output.

### 7.3 Generator extension (amends LP2.1)

`scripts/generate-niche-catalog.mjs` already reads the app repo. Extend it to also emit:

```
data/app-ui-strings.generated.json
```

- Source: `apps/web/public/locales/{en,uk,pl,ru,es,fr,de}/{common,beauty,edu,pro,freelance,rent}.json`
- **Allowlist only** — a curated key list, not a bulk copy. Starting set:
  ```
  inbox.trust_confirming, inbox.trust_next, inbox.trust_visits_count,
  inbox.trust_will_generate, inbox.trust_amount, inbox.trust_in_reports,
  inbox.trust_confirm_secure, inbox.title, inbox.ready_to_confirm,
  chart_labels.revenue, chart_labels.cost, chart_labels.profit,
  week, month, quarter, year,
  coworker.busy_block_title,
  templates.<templateId>.services.*, .addons.*, .expenses.*   (per shipped template)
  ```
- Keyed by locale, then by key. Committed, like the catalog. The landing must build with no
  sibling repo present.
- **`inbox.trust_amount` carries a caveat.** It is `"~${{amount}}"` in all seven app locales —
  a hardcoded dollar sign (filed in the app repo as its own bug). The landing must **not**
  reuse that string's currency; format the number itself with `Intl.NumberFormat` and the
  market currency, and interpolate. Otherwise a Polish visitor reads a `$`.

### 7.4 Guard (amends LP2.3)

`scripts/verify-niches.mjs` gains two failure conditions:

6. Any key referenced by `components/mock/` or `lib/mock-data.ts` is absent from
   `app-ui-strings.generated.json` for any shipped locale.
7. Any `templateId` in `config/niche-pages.ts` has zero `services` in the generated catalog —
   its mock would render empty.

Both skip with a warning when the app repo is absent, matching LP2.3's existing behaviour.

Add to the LP2.4 Vitest suite: corrupting one allowlisted key in a fixture makes the verifier
exit non-zero.

### 7.5 Honesty rules

1. Every mock carries a visible caption — `Example data` (LP0.4's wording, reused) — inside
   the mock frame, not floating near it.
2. Every mock element traces to a capability row in `reference/messaging-and-claims.md` §2.
   A mock may not show a screen the product does not have. This is the same rule as copy, and
   it is a gate.
3. No number in a mock is a performance claim. `+$1,240 today` is an illustration of a total,
   not a result — the surrounding copy must never present it as an outcome.
4. Decorative mock chrome is `aria-hidden="true"`. The one sentence that carries the message is
   rendered as a separate semantic summary **outside** that hidden subtree
   (the Inbox trust line), which stays in the accessibility tree. A screen-reader user should
   get the point, not a table of fake rows.

### 7.6 Rendering rules

- **Server components by default** (LP1.3). Only the region-aware currency label is
  `"use client"`, and it must render the server value first and update in `useEffect` to
  avoid a hydration mismatch (LP5.2).
- SSG output stays **region-identical** (LP5.4 gate). The mock's *markup* is the same for
  every region; only the hydrated currency label differs.
- Tokens only. No hardcoded hex — LP1.2 moves the brand ramp into tokens precisely so the
  mocks can follow the theme.
- Text expansion: `de` runs +25–35% and now lands **inside** simulated UI chrome. Every mock
  must survive `de` and `uk` at 360 px without clipping or overflow.

### 7.7 Gate

- All four mocks render in all 7 locales × light/dark × 360 px, no overflow, no clipping
- `pnpm verify:niches` fails when an allowlisted key is removed from the fixture
- SSG output byte-identical across two simulated regions (LP5.4 still holds)
- No hydration warnings
- Zero new npm dependencies; `rg "recharts|chart\.js|d3" components lib` returns nothing
- Every mock element traceable to `messaging-and-claims.md` §2
- Lighthouse mobile Performance on a page using three mocks ≥ the LP1.6 baseline

### 7.8 Executor prompt

```
=== EXECUTOR PROMPT — LP5b ===

Skills: marketing `cro`, `copy-editing`; repo-local `design-taste-frontend`, `tdd`. Read all four
named `SKILL.md` files in full; the plan, generated product data and claim rails outrank generic skill
advice.

Read first, in full:
  - .cursor/plans/product_mock_kit_20260728.md        (this document)
  - .cursor/plans/reference/messaging-and-claims.md   §2 (allowed claims), §5, §9
  - .cursor/plans/niche_landing_i18n_product_relaunch_20260725.plan.md  LP2, LP5
  - data/niche-catalog.generated.json                 (LP2 output — the data source)

Reference only — DO NOT COPY CODE, the frameworks differ (Vite SPA vs Next App Router).
Read them to match the visual grammar and to collect i18n KEY NAMES:
  - beauty-finance/apps/web/src/components/ui/RecordCardSurface.tsx     (the card grammar)
  - beauty-finance/apps/web/src/components/ui/InboxSheet.tsx :1655-1675 (the trust line)
  - beauty-finance/apps/web/src/components/finance/FinanceDashboard.tsx :674-733 (KPI tiles)
  - beauty-finance/apps/web/src/pages/CalendarPage.tsx :2419,2465       (grid-cols-7)
  - beauty-finance/apps/web/src/components/calendar/CustomDay.tsx       (day cell)

Build:
 1. Extend scripts/generate-niche-catalog.mjs to emit data/app-ui-strings.generated.json
    per §7.3. ALLOWLIST ONLY — never bulk-copy a locale file.
 2. lib/mock-data.ts::buildMockDataset(templateId, locale, market, referenceInstant) per §7.2.
    Deterministic amounts seeded by templateId, fixed/injected dates, per-locale fictional client
    names, Intl.NumberFormat for money. Never use Date.now() during build.
 3. components/mock/{MockVisitCard,MockCalendarMonth,MockInboxTriage,MockFinanceKpis}.tsx
    per §7.1. Server components except the region-aware currency label.
 4. Extend scripts/verify-niches.mjs with failure conditions 6 and 7 per §7.4.

Absolute rules:
  - NO new dependency. The finance chart is a hand-authored inline SVG, ~30 lines.
    Never recharts, chart.js, or d3 — this is a marketing site with a Lighthouse gate.
  - NO hardcoded service name, label, or hex colour. Names come from the generated
    catalog; labels from the generated string file; colours from LP1.2 tokens.
  - NO mock element that is not backed by a capability row in messaging §2.
  - Do NOT reuse inbox.trust_amount's currency — it hardcodes "$" in all seven app
    locales. Format the number yourself with the market currency (§7.3).
  - Every mock carries a visible `Example data` caption inside its frame.
  - `aria-hidden="true"` on decorative chrome; render the Inbox trust sentence as a sibling semantic
    summary outside the hidden subtree.

Tests (Vitest, per LP2.4):
  - buildMockDataset is deterministic for a fixed (templateId, locale, market, referenceInstant)
  - a de dataset contains no English service name and no English client name
  - money renders with the market currency and never a bare "$" for a non-USD market
  - removing an allowlisted key from a fixture makes verify:niches exit non-zero
  - each mock renders in all 7 locales with no thrown error

Gate: §7.7, every line.
=== END PROMPT ===
```

---

## 8. Edits to the existing plan

| Phase | Edit |
|---|---|
| **LP1.2** delete list | Add `public/images/{analytics,calendar,inbox}-mockup.png` — 338 KB, unreferenced, md5-identical to the app's stale 2026-03-29 donor assets. The current list stops at the v0 placeholders. |
| **LP1.4** | Add: audit `public/landing/*.png` (3.7 MB across three raw `<img>`). Determine whether they are screenshots or generated illustrations — if illustrations, they violate messaging §5.1 and LP0.4's text-only triage missed them. Most are replaced by LP5b mocks; whatever survives goes through `next/image` at a sane resolution. |
| **LP2.1** | Add `data/app-ui-strings.generated.json` to the generator's outputs (§7.3). |
| **LP2.3** | Add failure conditions 6 and 7 (§7.4). |
| **LP2.4** | Add the corrupted-allowlisted-key test. |
| **new LP5b** | This document, §7. |
| **LP6** hero bullet | Replace *"Hero image must be a real app screenshot, not the current stylised mockup"* with the §5 split: **one** real screenshot on the homepage, `next/image`, `Example data` caption; all supporting and repeated visuals are LP5b mocks. |
| **LP6** §7.3 Inbox section | Render `MockInboxTriage`. The differentiator section should show the differentiator in the visitor's language. |
| **LP7.2** content model | `hero: { eyebrow, h1, subhead, screenshot }` → `hero: { eyebrow, h1, subhead, mock: MockKind }`. This is the change that deletes the 168-screenshot obligation. |
| **LP7.3** uniqueness | Note that mock-rendered service/add-on/expense names count toward the ≥60% niche-specific text budget, and are exactly the product-derived proprietary data §9 calls the strongest defensible category. `check-uniqueness.mjs` tokenizes rendered text, so this is automatic. |
| **LP9.2** OG images | `next/og` can render the mock components' simplified markup directly. Per-locale, per-niche OG cards become generated rather than designed — the same combinatorics saving, applied to social previews. |
| **LP11.1** Wave 1a gate | Add: Lighthouse mobile Performance measured *without* a multi-MB hero image, so the number reflects the page rather than the asset. |
| **messaging §5.1** | Narrow, do not delete: *"At least one real screenshot per page family. Every rendered mock is built from the app's own catalog and the app's own translated strings, and is captioned `Example data`."* |
| **messaging §9** | Row "Screenshots — app screens with that template's data" → **"Product mocks — rendered from that template's own services / add-ons / expenses"**. The requirement is unchanged; the mechanism is. |
| **`reference/llm-prompts.md`** | Add an LP5b prompt (§7.8) and extend the LP6/LP7 prompts' checklists with *"every mock element traces to messaging §2."* |

---

## 9. What this does not change

- The uniqueness contract, the claims allowlist, the banned-word list, and the CTA policy —
  all unchanged.
- Region still affects currency and examples only, never content or URL (LP5.3), and SSG
  output stays region-identical (LP5.4).
- The niche catalog remains the single source of truth, generated from `libs/core`,
  never hand-edited (LP2, review §4.7).
- **Nothing in `beauty-finance` changes.** LP5b reads the app repo through the generator that
  LP2 already built. Execution rule #3 holds.
