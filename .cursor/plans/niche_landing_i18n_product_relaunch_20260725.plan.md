---
name: Niche Landing Pages, Localization, and Product-Truth Relaunch
overview: Repo-grounded execution plan that turns perelai-landing from a single hardcoded English marketing template into a localized, niche-segmented acquisition surface that hands validated acquisition context to the app. Covers honest-claim triage, foundations, a cross-repo niche-catalog drift guard, the signup URL builder, path-based i18n with language and region detection, a rebuilt homepage on a code-verified feature inventory, the niche page template with a staged rollout, pricing, SEO, analytics and experimentation readiness. Written for smaller LLMs as ordered phases with explicit gates. This document implements nothing by itself.
todos:
  - id: lp-0-baseline
    content: "Phase LP0: git baseline, env config, product-marketing context, and removal of unshippable claims"
    status: pending
  - id: lp-1-foundations
    content: "Phase LP1: strict TypeScript, design tokens, dark mode, image pipeline, lib layer, server components"
    status: pending
  - id: lp-2-catalog
    content: "Phase LP2: generate the niche catalog from libs/core and add the cross-repo drift guard"
    status: pending
  - id: lp-3-signup-url
    content: "Phase LP3: buildAppSignupUrl, attribution capture, and the shared CTA component"
    status: pending
  - id: lp-4-i18n
    content: "Phase LP4: localized routing, Next.js 16 proxy negotiation, dictionaries, hreflang, language switcher"
    status: pending
  - id: lp-5-region
    content: "Phase LP5: region detection for currency and examples only, never for content"
    status: pending
  - id: lp-5b-mock-kit
    content: "Phase LP5b: product mock kit — rendered, localized, per-niche app surfaces instead of screenshots"
    status: pending
  - id: lp-6-homepage
    content: "Phase LP6: rebuild the homepage on the verified feature inventory"
    status: pending
  - id: lp-7-niche-wave1a
    content: "Phase LP7: niche page template and Wave 1a (/for-independent-colorists)"
    status: pending
  - id: lp-8-pricing
    content: "Phase LP8: Founding Beta offer and pricing page"
    status: pending
  - id: lp-8b-legal
    content: "Phase LP8b: /terms and /privacy on the landing plus the app AuthLegalLinks handoff"
    status: pending
  - id: lp-9-seo
    content: "Phase LP9: sitemap, robots, canonical, hreflang, Open Graph, JSON-LD, llms.txt"
    status: pending
  - id: lp-10-analytics
    content: "Phase LP10: cookieless analytics, event contract, consent posture"
    status: pending
  - id: lp-11-wave1b
    content: "Phase LP11: Wave 1a validation gate, then Wave 1b (7 more APPOINTMENT niches)"
    status: pending
  - id: lp-12-experiments
    content: "Phase LP12: experimentation readiness and Wave 2 / Wave 3 gating"
    status: pending
isProject: true
---

# Niche Landing Pages, Localization, and Product-Truth Relaunch

**Repo:** `/Users/valery/Sites/perelai-landing`
**Created:** 2026-07-25
**Status:** planning only — no application code was changed while preparing this document.

**Read before executing anything:**
1. [`01_plan_integrity_review_20260729.md`](01_plan_integrity_review_20260729.md) — current execution-safety review; it supersedes stale framework and app-state conclusions below
2. [`00_architecture_review_20260725.md`](00_architecture_review_20260725.md) — original landing ↔ app contract audit
3. [`reference/niche-catalog.md`](reference/niche-catalog.md) — the only valid niche slugs
4. [`reference/messaging-and-claims.md`](reference/messaging-and-claims.md) — the only claims you may write
5. [`reference/llm-prompts.md`](reference/llm-prompts.md) — the copy/paste prompt for each phase

**Companion documents** (separate scope, referenced from the phases that need them):
- [`product_mock_kit_20260728.md`](product_mock_kit_20260728.md) — **LP5b**, and it amends LP1.2, LP2.1, LP2.3, LP6, LP7.2, LP7.3, LP9.2, LP11.1 plus messaging §5.1/§9. Read it before LP1.
- [`legal_pages_and_cross_domain_handoff_20260725.md`](legal_pages_and_cross_domain_handoff_20260725.md) — LP8b
- [`wave3_request_order_rental_niches_20260725.md`](wave3_request_order_rental_niches_20260725.md) — after LP12.3

---

## 0. Execution rules

1. **One phase at a time.** Read the whole phase before editing. Do not start LP*n+1* until LP*n*'s
   gate passes.
2. **Verify before trusting docs.** All three `CONTEXT.md` files have stale catalog data
   (review §4). `beauty-finance/libs/core` is authoritative. This applies to this plan too — if the
   code has moved, the code wins and you update the plan.
3. **Never modify `beauty-finance`.** This plan touches only `perelai-landing`. Cross-repo items are
   listed in review §9 and must be raised separately.
4. **Run `git status --short` before editing.** The worktree may contain user changes; preserve them.
5. **Never invent a claim.** If it is not in `reference/messaging-and-claims.md` §2, it does not ship.
6. **Never invent a niche slug.** If it is not in the generated catalog, the build must fail.
7. **Per-phase quality bar:** `pnpm typecheck && pnpm lint && pnpm build` clean, plus the phase's own
   gate. Commit at each gate with the phase ID in the message.
8. **Marketing skills are mandatory inputs, not decoration.** Each phase names the skills to load.
   Load them before writing copy or structure, not after.
9. **Skill paths and precedence.** Marketing skills live at
   `/Users/valery/.agents/skills/<skill>/SKILL.md`; repository implementation skills live at
   `.agents/skills/<skill>/SKILL.md`. Read each named file in full. This plan, generated product
   data and the claim rails outrank generic skill advice.
10. **No public launch on legal placeholders.** Structured Terms/Privacy stubs are development-only.
    Public signups require dated owner/legal-approved final text.

### Skill map

| Phase | Load these skills |
|---|---|
| LP0 | `product-marketing`, `copy-editing` |
| LP1 | repo-local `codebase-design`, `tdd` |
| LP2 | repo-local `codebase-design`, `tdd` |
| LP3 | `analytics`; repo-local `codebase-design`, `tdd` |
| LP4 | `site-architecture`, `seo-audit`; repo-local `codebase-design`, `tdd` |
| LP5 | repo-local `tdd` |
| LP5b | `cro`, `copy-editing`; repo-local `design-taste-frontend`, `tdd` |
| LP6 | `customer-research`, `copywriting`, `copy-editing`, `cro`, `marketing-psychology`, `offers`; repo-local `design-taste-frontend`, `tdd` |
| LP7 | `programmatic-seo`, `customer-research`, `copywriting`, `copy-editing`, `cro`, `site-architecture`; repo-local `design-taste-frontend`, `tdd` |
| LP8 | `pricing`, `offers`, `copy-editing`, `cro` |
| LP8b | `signup` (legal-link abandonment as a funnel step), `copy-editing`; repo-local `codebase-design`, `tdd` |
| LP9 | `seo-audit`, `schema`, `ai-seo`; repo-local `codebase-design`, `tdd` |
| LP10 | `analytics`; repo-local `codebase-design`, `tdd` |
| LP11 | `customer-research`, `copywriting`, `copy-editing`, `cro`, `programmatic-seo`, `site-architecture`; repo-local `design-taste-frontend`, `tdd` |
| LP12 | `ab-testing`, `signup`, `onboarding` |

---

## Phase LP0 — Baseline, environment, and honest-claim triage

**Why first:** the live site currently promises a 14-day free trial that does not exist, quotes a
fabricated statistic, and links every CTA to a dead route. That is a trust and legal exposure, and it
is independent of everything else in this plan. Fix it in hours, not weeks.

### LP0.1 Version control and safety net

```bash
cd /Users/valery/Sites/perelai-landing
git init
printf '%s\n' 'node_modules' '.next' '.pnpm-store' '.env*.local' '.DS_Store' > .gitignore
git add -A && git commit -m "LP0: baseline before landing relaunch"
```

The repo is currently untracked (review §3.1 L16). Nothing else in this plan may start until there is
a rollback point.

### LP0.2 Environment configuration

Create `.env.example` (committed) and `.env.local` (ignored):

```env
NEXT_PUBLIC_APP_URL=https://perelai.app
NEXT_PUBLIC_BOOKING_URL=https://book.perelai.app
NEXT_PUBLIC_LANDING_URL=https://perelai.com
NEXT_PUBLIC_DEFAULT_CAMPAIGN=founding-beta
# LP10:
# NEXT_PUBLIC_ANALYTICS_DOMAIN=perelai.com
# NEXT_PUBLIC_ANALYTICS_HOST=
# LP2 drift guard (path to the app repo; optional):
# PERELAI_APP_REPO=../beauty-finance
```

Local development values point at `http://localhost:4200` (the app's Vite dev port).

### LP0.3 Product marketing context

Load the **`product-marketing`** skill and create `.agents/product-marketing.md` using
`reference/messaging-and-claims.md` §1–§5 as the source. Every later marketing skill reads this file
automatically; creating it once removes the need to re-explain the product in every subsequent prompt.

Do **not** re-derive positioning. §1 of the messaging reference is the decided position; transcribe it
into the skill's document structure and set `Document version: v1`.

### LP0.4 Claim triage — delete now

Load the **`copy-editing`** skill. Apply these edits with no other changes:

| File | Change |
|---|---|
| `app/layout.tsx:6-8` | Title → `Perelai — Clients, Bookings & Cash Flow for Independent Professionals`. Description → rewrite without "personal CFO". |
| `app/page.tsx:9-13` | Same, and remove the duplicate metadata block (keep metadata in one place). |
| `components/landing/landing-hero.tsx:52-53` | Remove "personal CFO" and "Save thousands on marketplace fees". |
| `components/landing/landing-hero.tsx:67` | "Start 14-day free trial" → **"Create your free workspace"**. |
| `components/landing/landing-cta.tsx:37` | Remove "No credit card required · 14-day free trial" → **"No card. You'll get a verification email to finish setting up."** |
| `components/landing/landing-features.tsx:30` | Remove "Every booking automatically becomes revenue". |
| `components/landing/landing-features.tsx:92-93` | Delete the "+38% repeat bookings on average" block entirely. |
| `components/landing/landing-footer.tsx:35` | Remove "personal CFO". |
| `components/landing/landing-header.tsx:12`, `landing-footer.tsx:28` | `href="/landing"` → `href="/"`. |
| `components/landing/landing-features.tsx:36-60` | Add a visible `Example data` caption to the mock Inbox card. |

Replacement copy comes from `reference/messaging-and-claims.md` §2 and §6. Do not restructure sections
yet — LP6 does that.

### LP0.5 Gate

```bash
pnpm build
# must return no matches:
grep -rniE "personal CFO|free trial|no credit card|marketplace fee|38%|HIPAA|all-in-one" app components
# must return no matches:
grep -rn 'href="/landing"' app components
```

`pnpm build` clean **and** both greps empty. Commit `LP0: remove unshippable claims and dead links`.

---

## Phase LP1 — Foundations

**Objective:** make the codebase safe to build on before adding 13 languages × N pages.

### LP1.1 Build integrity

- `next.config.mjs`: delete `typescript.ignoreBuildErrors` (review L8). Fix whatever it was hiding.
- `next.config.mjs`: remove `images.unoptimized: true` once LP1.4 lands.
- `tsconfig.json`: ensure `"strict": true`.
- Add `"typecheck": "tsc --noEmit"` to `package.json` scripts.

### LP1.2 Design tokens and dark mode

`app/globals.css` declares `@custom-variant dark` and never uses it (review L12). Workspace CONTEXT §14
requires both themes.

- Add a `.dark { … }` token block mirroring every `:root` token.
- Add the brand ramp as tokens instead of repeating hex literals in 6 components:
  `--brand-500: #7d5bff; --brand-600: #6a4cff; --brand-700: #5a3bff;`
- Replace every hardcoded `#0F1724` / `#4B5563` / `#F1F3F5` / `#FBFCFE` in components with the token.
- Theme resolution: `prefers-color-scheme` by default, with an inline pre-hydration script in
  `<head>` that reads `localStorage.perelai-theme` and stamps `class="dark"` on `<html>` before paint
  (no FOUC). Mirror the approach in `beauty-finance/.cursor/plans/dark_mode_integration_9058a729.plan.md`.
- Add `components/theme-toggle.tsx`: an accessible binary light/dark control that persists
  `perelai-theme`, exposes an explicit accessible name and updates `aria-pressed`. System preference
  is the initial fallback; after the visitor chooses, the stored choice wins.
- Keep the landing's higher visual intensity (CONTEXT §14): stronger glows and gradients than the app.

**Brand mark and icons** (review defects L17, L18):

The real Perelai icons were copied in on 2026-07-25 from `beauty-finance/apps/web/public/` so both
products ship the same mark — a violet rounded tile with a white `P` monogram:

| File | Size | Role |
|---|---|---|
| `app/favicon.ico` | 32 | App Router auto-detected favicon |
| `app/icon.png` | 192 | App Router auto-detected icon |
| `app/apple-icon.png` | 180 | App Router auto-detected Apple touch icon |
| `public/brand/perelai-icon-1024.png` | 1024 | master — OG images, future exports |
| `public/brand/perelai-icon-512.png`, `-192.png` | 512/192 | manifest / PWA sizes |
| `public/brand/perelai-mark-64.png` | 64 | header and footer logo mark |

Remaining work in this phase:

1. **Delete the v0 template branding.** `public/icon.svg`, `public/apple-icon.png`,
   `public/icon-light-32x32.png`, `public/icon-dark-32x32.png`, `public/placeholder-logo.{png,svg}`,
   `public/placeholder.{jpg,svg}`, `public/placeholder-user.jpg` are Vercel/v0 assets, unreferenced,
   and shipping a third party's wordmark as Perelai's icon. Delete only **after** LP0.1 `git init`.

1b. **Delete the stale donor mockups.** `public/images/{analytics,calendar,inbox}-mockup.png` —
   338 kB, **unreferenced** by any component, and **md5-identical** to
   `beauty-finance/v2-donor/public/images/`. Dated 2026-03-29; they predate the pricing-basis,
   coworker and inventory work and no longer show the product. Verified 2026-07-28.
2. **Replace the `Sparkles` logo** in `landing-header.tsx:13` and `landing-footer.tsx:29` with
   `perelai-mark-64.png` via `next/image` (28–32 px, `alt="Perelai"`). Keep the wordmark text.
3. **Optimize** the copied PNGs (they are unoptimized exports — the 512 is ~347 kB for a flat logo).
4. **Request an SVG master** from design. Neither repo has one; an SVG is needed for crisp header
   rendering and for the LP9 OG image generator.
5. Add `app/manifest.ts` referencing `perelai-icon-{192,512}.png`, `name: 'Perelai'`,
   `theme_color: '#6a4cff'` — matching `beauty-finance/apps/web/public/manifest.json` where sensible.

### LP1.3 Component layer boundaries

Every component is currently `"use client"` (review L13). Convert to server components by default;
keep `"use client"` only for: `reveal.tsx`, the language switcher, the theme toggle, the region-aware
currency label, and any component using `useState`/`motion`.

### LP1.4 Image pipeline

Replace raw `<img>` with `next/image` in `landing-hero.tsx:96` and `landing-how-it-works.tsx:77`.
Set explicit `width`/`height`, `sizes`, and `priority` on the hero only. Target: no CLS from images,
hero LCP under 2.5 s on a throttled mobile profile.

**Audit the three referenced PNGs first** — verified 2026-07-28:

| File | Size | Dimensions | Used by |
|---|---|---|---|
| `public/landing/hero-dashboard.png` | **1,276,306 B** | 1024×1024 RGB | `landing-hero.tsx:96` — the **LCP element** |
| `public/landing/clear-profit.png` | 1,181,250 B | 1024×1024 RGB | `landing-how-it-works.tsx` step 2 |
| `public/landing/messy-calendar.png` | 1,274,323 B | 1024×1024 RGB | `landing-how-it-works.tsx` step 1 |

**3.7 MB across three raw `<img>` tags**, with `images.unoptimized: true` still set. This is the
single largest threat to the LCP target above and to LP11.1's Lighthouse ≥ 90 gate.

Square 1024×1024 RGB with no alpha channel at >1 MB is the signature of **generated illustration, not
a captured app screen**. If that is what they are, the site violates `messaging-and-claims.md` §5.1
today and LP0.4's triage missed it, because LP0.4 audits text only. Determine which they are and
record the finding.

Most of these are replaced by LP5b's rendered mocks. Whatever survives — see the one-real-screenshot
rule in [`product_mock_kit_20260728.md`](product_mock_kit_20260728.md) §5 — goes through `next/image`
at a sane resolution and weight.

### LP1.5 lib layer

```
lib/
├── env.ts        # parse + validate NEXT_PUBLIC_* at module load; throw at build time on missing
├── site.ts       # site name, domains, social handles, default OG image
└── cn.ts         # class merge helper
```

`env.ts` must fail the **build**, not the request, when a required variable is absent.

### LP1.6 Gate

`pnpm typecheck && pnpm lint && pnpm build` clean with `ignoreBuildErrors` removed. Dark mode toggles
with no flash. Record a Lighthouse mobile baseline (Performance / Accessibility / Best Practices / SEO)
in `docs/baseline-lighthouse.md` — LP11 compares against it.

---

## Phase LP2 — Niche catalog and cross-repo drift guard

**This is the load-bearing phase.** Review §4 documents that the hand-maintained catalog tables in
three `CONTEXT.md` files already drifted from code — including one slug (`colorist`) that would have
silently broken the flagship page. Two repos with no shared dependency will drift again. The guard is
what makes everything downstream safe.

### LP2.1 Generator

Create `scripts/generate-niche-catalog.mjs`:

- Resolve the app repo: `process.env.PERELAI_APP_REPO ?? '../beauty-finance'`.
- Read `libs/core/src/templates/business-templates-catalog.ts`, `business-groups.ts`,
  `supported-markets.ts`, and `apps/web/src/config/localization.ts`.
- Extract per template: `id`, `groupId`, `terminologyProfile`, `marketingPriority`, `visibility`,
  `nicheSlugs[]`, `bookingConfig.{mode,enabled,requiresStaff,allowAddons,regulated}`, and the
  `services[]` / `addons[]` / `expenses[]` id + `nameKey` lists.
- Extract the market list and the supported language codes.
- Write `data/niche-catalog.generated.json` with `sourceCommit` and `generatedAt` derived from that
  commit's timestamp. Serialize in stable key order and do not rewrite a file whose semantic content
  is unchanged; running the generator twice from the same source commit must produce byte-identical
  output.
- **Also emit `data/app-ui-strings.generated.json`** — an **allowlisted** extraction of app UI labels
  per locale from `apps/web/public/locales/{lng}/*.json`, so LP5b's product mocks render the app's own
  words in all seven languages instead of hand-typed English. Key list and rules:
  [`product_mock_kit_20260728.md`](product_mock_kit_20260728.md) §7.3. **Allowlist only — never
  bulk-copy a locale file.** This is also what LP4.4's "reuse the app's existing translations of
  Visit / Order / Package / Instalment" asks for, mechanized.

**Extraction method:** prefer executing the TypeScript through `tsx`/`esbuild-register` and importing
the real exports. Only fall back to AST parsing (`typescript` compiler API) if execution is not
possible. Never regex-parse the catalog — it will break on the first formatting change.

Commit the generated JSON. The landing must build with no sibling repo present.

### LP2.2 Page registry

Create `config/niche-pages.ts` — the hand-curated marketing layer on top of the generated data:

```ts
export interface NichePage {
  path: string;            // EN canonical, e.g. '/for-independent-colorists'
  niche: string;           // slug emitted to the app — MUST exist in the generated catalog
  templateId: string;      // expected template — verified against the catalog
  enabled: boolean;        // later waves stay present but unrouteable until their gate passes
  wave: '1a' | '1b' | '2' | '3' | 'hold-legal';
  aliases?: string[];      // paths that 301 → path
  personaSplit?: boolean;  // set when two pages intentionally share a templateId
  locales: string[];       // which languages this page ships in
}
```

Populate from `reference/niche-catalog.md` §4–§8. **Only Wave 1a is enabled at this point**; later
waves are present but flagged `enabled: false` until their gate passes.

Do not duplicate `groupId`, booking mode, terminology, visibility or `bookingConfig.enabled` in this
registry. Resolve those code-owned facts from the generated catalog during verification.

Also record the production booking-mode flags as data so the guard can check them:

```ts
export const PRODUCTION_BOOKING_FLAGS = {
  APPOINTMENT: true,
  REQUEST: false,   // review §A4 — update only when production is confirmed
  ORDER: false,
  RENTAL: false,
} as const;
```

### LP2.3 Verifier

Create `scripts/verify-niches.mjs`, wired as `pnpm verify:niches` and run in `prebuild`.

Always validate the registry against the committed generated JSON, including when the sibling app
repo is absent. If the sibling is available, also regenerate in memory and compare source
commit/content freshness. If it is absent, warn and skip **only that live cross-repo comparison**.
Never skip the landing-local invariants.

Two further conditions once LP5b lands (spec:
[`product_mock_kit_20260728.md`](product_mock_kit_20260728.md) §7.4):

6. A key referenced by `components/mock/` or `lib/mock-data.ts` is missing from
   `app-ui-strings.generated.json` in any shipped locale.
7. A `templateId` in `config/niche-pages.ts` has zero `services` in the generated catalog — its mock
   would render empty.
8. An enabled page resolves to a template whose generated `bookingConfig.enabled` is false, unless a
   dated, approved app-side activation path is recorded for that template.

Since the landing cannot import app code, these two checks **are** the mock kit's drift guard. They
are not optional polish.

### LP2.4 Tests

Add Vitest and cover:
- every `NichePage.niche` resolves in the generated catalog
- every `NichePage.templateId` matches the catalog's template for that slug
- no duplicate `path`; no duplicate `niche`
- no `templateId` used twice without `personaSplit: true`
- every `path` ≤ 240 chars and every `niche` ≤ 80 chars
- a deliberately corrupted fixture (`niche: 'colorist'`) makes the verifier exit non-zero
- an absent sibling repo still detects an invalid registry entry from committed generated JSON
- an enabled page for a template with `bookingConfig.enabled: false` fails

### LP2.5 Gate

`pnpm verify:niches` exits 0 with the app repo present and with it absent. The absent-repo run warns
only about freshness, not local validation. Temporarily changing `premium-colorist` → `colorist` in
the registry makes `pnpm build` fail in both modes. Revert, commit.

---

## Phase LP3 — Signup URL builder and attribution

Load the **`analytics`** skill for UTM naming conventions.

### LP3.1 `lib/urls.ts`

```ts
export interface SignupUrlParams {
  niche?: string;
  source?: string;
  campaign?: string;
  landingPath?: string;
  locale?: string;         // validated app locale; emitted as the app's `lng` UX hint
}

export function buildAppSignupUrl(params: SignupUrlParams): string;
export function buildAppLoginUrl(): string;
```

Non-negotiable behaviour — these mirror `libs/core/src/zod/schemas.ts:726-729` and
`apps/web/src/utils/nicheOnboardingContext.ts`:

1. Base = `new URL('/register', env.NEXT_PUBLIC_APP_URL)`.
2. **Allowlist only** — `niche`, `utm_source`, `utm_campaign`, `landing_path`, and `lng`. Do not
   forward click IDs or arbitrary incoming query parameters to the app in v1. `utm_medium`,
   `utm_content` and `utm_term` may remain landing analytics fields, but are not part of the
   onboarding handoff unless the cross-repo contract is deliberately expanded.
3. **Clamp before emitting**: `niche` ≤ 80, `utm_source` ≤ 80, `utm_campaign` ≤ 120,
   `landing_path` ≤ 240. Trim first. Truncate rather than drop, except `niche` — an over-length niche
   is invalid by definition, so drop the whole context and log a build-time error instead.
   *Rationale: `safeParse` is all-or-nothing; one long field silently discards the niche too.*
4. **Validate the slug** against `data/niche-catalog.generated.json`. Unknown slug ⇒ omit `niche`
   entirely rather than send a value that resolves to `null`.
5. `landing_path` = the **English canonical path without locale prefix**
   (`/for-independent-colorists`, never `/uk/for-independent-colorists`) — catalog §1 rule 4.
6. `locale` must be in the app-supported locale set and is emitted as `lng=<locale>`. This preserves
   language across origins; it is a UX hint for the app's i18next detector, not acquisition
   authority.
7. **Never throws for runtime input or URL construction.** Any such failure returns the validated
   app origin's `/register` URL with no parameters. A missing required environment variable remains
   the LP1 configuration/build error and is not a runtime fallback case.
8. Encode with `URLSearchParams`; never hand-concatenate.

### LP3.2 `lib/attribution.ts`

First-touch attribution that survives a multi-page visit:

- On first page view, read only allowlisted `utm_source`, `utm_campaign`, `utm_medium`,
  `utm_content`, `utm_term` and the referrer **hostname**. Do not store full referrer URLs or click
  IDs until the LP10 privacy/consent decision explicitly approves them.
- Store the minimized record in **`sessionStorage`** under `perelai_attr`. Do not label this
  categorically “functional” or infer that no consent UI is required; LP10 records that decision for
  the chosen analytics configuration and markets.
- **First touch wins**: never overwrite an existing `perelai_attr` within the session.
- Fallbacks when no UTMs are present: `utm_source` = referrer host, else `direct`;
  `utm_campaign` = `NEXT_PUBLIC_DEFAULT_CAMPAIGN`.
- Expose `useAttribution()` returning the stored context merged with the current page's niche.

Create `lib/analytics.ts` in this phase: a typed, provider-neutral event contract whose default
implementation is a no-op. CTA and legal-link call sites use only this adapter. LP10 attaches the
chosen provider; earlier phases must not import a vendor SDK.

### LP3.3 Shared CTA component

`components/cta-button.tsx` — the only place in the codebase allowed to link to the app.

```tsx
<CtaButton variant="primary" niche={page.niche} landingPath={page.canonicalPath} />
```

It resolves attribution, calls `buildAppSignupUrl`, fires the typed `landing_cta_clicked` event, and
renders the stage-appropriate copy from `reference/messaging-and-claims.md` §6.

Add an ESLint rule (or a test) forbidding `NEXT_PUBLIC_APP_URL` string interpolation anywhere except
`lib/urls.ts`.

### LP3.4 Gate

Unit tests covering: valid slug → correct URL; unknown slug → niche omitted; 300-char landingPath →
truncated to 240 and the niche still present; missing required env → clear config/build failure;
runtime URL-construction failure with valid config → bare `/register`, no throw; `uk` → `lng=uk`;
unsupported locale → no `lng`. Manual check: the built URL pasted into the app dev server preserves
language and preselects the recommended template in onboarding.

---

## Phase LP4 — Localization architecture

Load **`site-architecture`** and **`seo-audit`**.

### LP4.1 The decision, and why it diverges from `PublicBookingPage.tsx`

The app detects language at runtime (`i18next-browser-languagedetector`, order
`querystring → localStorage → navigator`, `?lng=` override) and serves one URL in N languages. That is
correct for an authenticated SPA. On `perelai.com` it would be a serious SEO defect: one URL per
language means Google indexes a single variant, `hreflang` becomes impossible, and social previews are
non-deterministic (review §7.6).

**Reuse the precedence logic. Replace the delivery mechanism with localized paths.**

| Concern | App (`PublicBookingPage`) | Landing (this plan) |
|---|---|---|
| Where language lives | `localStorage` + `?lng=` | **URL path** |
| Detection | client-side i18next | root `proxy.ts` on un-prefixed entry only |
| Persistence | `localStorage.i18nextLng` | `NEXT_LOCALE` cookie |
| Override | `?lng=uk` | explicit path `/uk/...` |
| Indexable per language | ✗ | ✓ `hreflang` + `x-default` |

### LP4.2 Routing

Use **`next-intl`** with `localePrefix: 'as-needed'`:

```
/                              → English homepage (no redirect hop)
/for-independent-colorists     → English niche page
/uk/                           → Ukrainian homepage
/uk/for-independent-colorists  → Ukrainian niche page
```

Separate the cross-repo contract from the public rollout:

```ts
export const APP_LOCALES = ['en', 'uk', 'pl', 'ru', 'es', 'fr', 'de'] as const;
export const PUBLISHED_LOCALES = ['en', 'uk', 'pl'] as const; // LP4 launch
```

`APP_LOCALES` must exactly match `apps/web/src/config/localization.ts`. Only
`PUBLISHED_LOCALES` may be generated, linked, negotiated or indexed. An explicit unpublished locale
path must never render an English fallback under that prefix. Expand the published set only after R1
completes the locale and human review passes.

> **Rationale for `as-needed`:** initial GTM is US/English (workspace CONTEXT §13). The highest-value
> URL — the one in ads, DMs and the OG card — should resolve with zero redirects. The alternative
> (`/en/…` for everything) is more uniform but adds a redirect hop to the money page. If GTM later
> becomes multi-market-first, revisit; it is a one-time migration with 301s.

Move routes to `app/[locale]/`. Add `generateStaticParams` for every **published** locale × page so
the whole site is statically generated. Verify the exact `next-intl` API against the installed
version's docs before writing config — do not assume.

### LP4.3 Proxy

Next.js 16 renamed the convention: create **root `proxy.ts`** and export `proxy`. Configure
`next-intl` from its installed-version documentation; do not copy a pre-v16 `middleware.ts` example.

- Runs **only** on un-prefixed paths that are not already English-canonical routes, plus `/`.
- Never redirects a path that already carries an explicit locale prefix (avoids loops and cloaking).
- Negotiation order, mirroring the app's precedence:
  1. `NEXT_LOCALE` cookie (an explicit past choice)
  2. `Accept-Language` header, matched against the 7 supported codes with
     `Intl.LocaleMatcher`-style best-fit; **language subtag only** (`load: 'languageOnly'` in the app)
  3. `en`
- On redirect: 307 (temporary — the negotiated result may change), and set `NEXT_LOCALE` for one year.
- Excludes: `/_next`, `/api`, static assets, `sitemap.xml`, `robots.txt`, `llms.txt`, `/og/*`.
- **Do not redirect on user-agent.** Bots get the URL they asked for.

### LP4.4 Dictionaries

```
messages/
├── en/{common,home,niche,pricing,legal}.json
├── uk/…  pl/…  ru/…  es/…  fr/…  de/…
```

Namespaces intentionally mirror the app's (`common` + feature namespaces) so translators can work
across both repos with one glossary. Key naming: `home.hero.headline`, `niche.faq.q1.answer`.

**Translation quality rules:**
- English is the source. Never machine-translate marketing headlines and ship them unreviewed —
  a bad `de` hero costs more than not having one.
- The domain glossary in `reference/messaging-and-claims.md` §4.2 must be respected in every language.
  Reuse the app's existing translations of Visit / Order / Package / Instalment from
  `beauty-finance/apps/web/public/locales/{lng}/common.json` so landing and app say the same word.
- Ship a language only when its homepage **and** every live niche page are fully translated. A
  half-translated locale is worse than an absent one; gate it with `PUBLISHED_LOCALES` and the page's
  `locales` field.

**Recommended launch order:** complete `en`, `uk`, `pl` together in LP4 →
`es`, `fr`, `de` (LP11) → `ru` (LP11; note it has no corresponding market — catalog §10).

### LP4.5 Language switcher

Mirror `PublicBookingPage.tsx:225-272` visually (globe icon, uppercase code, native language names in
the menu), but switch **paths**, not client state:

- Preserve the current path and query string across the switch.
- Set `NEXT_LOCALE` on selection.
- Render real `<a href>` elements so crawlers see the alternates.
- Place it in the header next to "Log in", and in the footer.

### LP4.6 `hreflang`

Every page emits, for every locale it ships in:

```html
<link rel="alternate" hreflang="en" href="https://perelai.com/for-independent-colorists" />
<link rel="alternate" hreflang="uk" href="https://perelai.com/uk/for-independent-colorists" />
…
<link rel="alternate" hreflang="x-default" href="https://perelai.com/for-independent-colorists" />
```

Rules: absolute URLs; self-referencing alternate included; only locales the page actually ships in;
`x-default` → the English canonical.

### LP4.7 Gate

The seven `APP_LOCALES` match the generated app contract, while only complete `en`/`uk`/`pl`
variants build and publish. `/uk/for-independent-colorists` returns 200 with no redirect.
`Accept-Language: pl` on `/` redirects once to `/pl`; `/uk` is not redirected; `/de/...` never
renders English content. `hreflang` sets are reciprocal and self-referencing across every published
variant.

---

## Phase LP5 — Region detection (currency and examples only)

**The rule:** language decides *content and URL*. Region decides *currency label and example numbers*
and nothing else. Region must never fork indexable content, or you fragment every page's ranking
signals and create a cloaking risk (review §7.5).

### LP5.1 `lib/region.ts`

Client-side, after hydration, mirroring the app's documented market precedence (catalog §10):

```ts
export function detectMarket(): SupportedMarket {
  // 1. localStorage 'perelai-market' only if an actual market selector writes it
  // 2. timezone → country   Intl.DateTimeFormat().resolvedOptions().timeZone
  // 3. navigator.language region subtag ('en-GB' → 'GB')
  // 4. locale → primary market  (uk→UA, pl→PL, de→DE, fr→FR, es→ES, ru→US, en→US)
  // 5. 'US'
}
```

Do not create dead preference state. If this phase does not ship an accessible market selector,
omit the `localStorage` branch and begin with timezone.

Market list and currency codes come from `data/niche-catalog.generated.json` (generated from
`supported-markets.ts`) — do not hand-copy them.

Keep the timezone→country map small and explicit (the ~40 zones covering the 10 supported markets);
do not pull a 400 kB IANA dataset onto the marketing site.

### LP5.2 Rendering rules

- SSG output is **identical for every region**. The server renders the locale's primary market.
- Region-sensitive elements are client components that hydrate to the detected market. Guard against
  hydration mismatch by rendering the server value first and updating in `useEffect`.
- If deployed on a platform exposing a geo header (e.g. `x-vercel-ip-country`), middleware may set a
  `perelai-market-hint` cookie for a better first paint. It is a hint only — never a content gate, and
  the page must be correct without it.

### LP5.3 What region may change

| Allowed | Not allowed |
|---|---|
| Currency symbol/code on the pricing page | Different prices per region (see LP8 / review §7.4) |
| Example amounts in illustrative UI mocks | Different features per region |
| "Works in your market" market list highlight | Different H1, different sections, different CTA target |
| Date/number formatting via `Intl` | Redirecting based on region |

### LP5.4 Gate

`curl` the built HTML from two different simulated regions → byte-identical. No hydration warnings in
the console. Switching device timezone changes only the currency label.

---

## Phase LP5b — Product mock kit

**Full specification:** [`product_mock_kit_20260728.md`](product_mock_kit_20260728.md) §7.

**Why it exists.** LP6 and LP7 both need product visuals, and the plan as originally written asked for
real screenshots — per niche, per locale (LP7.2's content model). That is **8 niches × 7 locales × ~3
visuals = 168 screenshots**, each needing a workspace seeded in that template *and* that UI language,
re-captured on every UI change. Nobody maintains that, so in practice either the site ships English
screenshots after LP4 localized every word of text, or niche pages quietly share one generic image and
the messaging §9 contract breaks.

LP5b replaces them with four rendered, localized, theme-aware components built from
`data/niche-catalog.generated.json` and a new allowlisted extraction of the app's own UI strings.

**It also closes a contradiction already in this plan:** LP5.3 permits *"example amounts in
illustrative UI mocks"* to follow the detected market — a PNG cannot do that — and LP0.4 preserves the
hand-coded Inbox card at `landing-features.tsx:36-60`, while `messaging-and-claims.md` §5.1 bans
stylised mockups. LP5b resolves this deliberately, in one direction, and narrows §5.1 rather than
deleting it: **one real screenshot stays on the homepage**; everything repeated, per-niche, or
localized is rendered.

**Deliverables:** `components/mock/{MockVisitCard,MockCalendarMonth,MockInboxTriage,MockFinanceKpis}.tsx`,
`lib/mock-data.ts`, `data/app-ui-strings.generated.json`, plus two new failure conditions in
`verify-niches.mjs`.

**Three constraints worth repeating here** (full list in that document §7.5–§7.7):

- **Zero new dependencies.** The finance chart is a hand-authored inline SVG. Never `recharts` — the
  app carries it as its single heaviest bundle item, and this is a site with a Lighthouse gate.
- **No hardcoded service name, label, or hex.** Names from the generated catalog, labels from the
  generated string file, colours from LP1.2 tokens. That is the entire drift guard, since the landing
  cannot import app code (review §7.3).
- **Every mock element traces to a capability row in `messaging-and-claims.md` §2**, exactly as copy
  does, and carries a visible `Example data` caption.

**Gate:** that document §7.7.

---

## Phase LP6 — Homepage rebuild

Load **`customer-research`**, **`copywriting`**, **`copy-editing`**, **`cro`**,
**`marketing-psychology`**, **`offers`**, plus repo-local **`design-taste-frontend`** and **`tdd`**.
Run a homepage ICP research pass and record source URL, capture date, source kind, short excerpt and
theme before drafting. LP7 performs a separate niche-specific pass; LP6 does not depend on future LP7
work.

Build the 10-section hierarchy in `reference/messaging-and-claims.md` §7. Notes per section:

- **Hero (§7.1):** headline = the decided one-liner. Subhead names the Inbox, the booking link and the
  money view in one sentence. Primary CTA + micro-copy from §6. The hero visual is **the one real app
  screenshot on the site** — `next/image`, sane weight (not the current 1.28 MB), `Example data`
  caption. Every *other* visual on this page is an LP5b mock. Rationale for the split:
  [`product_mock_kit_20260728.md`](product_mock_kit_20260728.md) §5.
- **Problem (§7.2):** use language from this phase's sourced homepage research pass, not product
  language.
- **Inbox (§7.3):** the differentiator. Use the notification-vs-Inbox contrast explicitly —
  it is the one sentence competitors cannot copy without rebuilding their data model. Render
  `MockInboxTriage` here: the app's real trust line (*"Confirming the next 3 visits will generate
  ~$45 in your finance reports"*) already exists as shipped, translated copy in all seven locales,
  so the differentiator section can show the differentiator **in the visitor's own language**.
- **Money (§7.5):** this is where the fulfilment/payment separation becomes a *benefit*
- **What Perelai is not (§7.7):** keep it. Disqualification is the most credible block on a page with
  no testimonials (§5 of the messaging reference).
- **Niche router (§7.8):** links to every live niche page. This is also the internal-linking hub that
  keeps niche pages out of orphan status — do not skip it, even with one live page.
- **FAQ (§7.9):** the six questions from §8, rendered as real accordions with the text in the DOM at
  load (not injected on click) so it is useful and indexable. LP9 does not add `FAQPage` markup.
- **Navigation/footer:** render only routes that exist at LP6. Keep Blog, Careers, Help and Changelog
  absent until their pages exist; never substitute `href="#"`.

**Trust block replacement:** no logos, no counts, no testimonials (there are no customers). Use the
five substitutes in §5 of the messaging reference.

**Gate:** every claim traceable to §2 of the messaging reference; `copy-editing` pass applied;
banned-word grep from LP0.5 still empty; Lighthouse SEO ≥ 95.

---

## Phase LP7 — Niche page template and Wave 1a

Load **`programmatic-seo`**, **`customer-research`**, **`copywriting`**, **`copy-editing`**,
**`cro`**, **`site-architecture`**, plus repo-local **`design-taste-frontend`** and **`tdd`**.

### LP7.1 Routing

Flat, already-documented URLs (`landing_path=/for-independent-colorists` appears in workspace
CONTEXT §4 and stable public route segments are AI rule #3):

```
app/[locale]/[nichePage]/page.tsx
export const dynamicParams = false;
export function generateStaticParams()  // locale × enabled NichePage
```

Guard against collisions with real routes: a `RESERVED_SLUGS` list (`pricing`, `legal`, `privacy`,
`terms`, `about`, `blog`, `sitemap.xml`, `robots.txt`, `llms.txt`, every locale code) that the LP2
verifier also checks. Static segments resolve before the dynamic one in Next.js, but the explicit list
prevents someone adding `/for-pricing` and silently shadowing a page.

Aliases (catalog §4) get permanent redirects via `next.config.mjs` `redirects()`. Generate and test
the equivalent alias for every published locale, preserving that locale in the canonical target.

### LP7.2 Content model

One file per niche per locale — content as data, not as JSX:

```
content/niches/{niche-slug}/{locale}.ts
```

```ts
export const content: NichePageContent = {
  meta: { title, description, ogImageAlt },
  hero: { eyebrow, h1, subhead, mock },   // MockKind, not a screenshot path — see LP5b
  pains: [{ title, body }, …],           // 3–5, from research
  dayInLife: { steps: [...] },           // the niche's real workflow
  terminology: [{ theirWord, perelaiWord, why }, …],   // 5–7 rows — the unique-value block
  setup: { steps: [...] },               // 3 steps, or 4 when requiresStaff
  faq: [{ q, a }, …],                    // 5, niche-specific
  research: {
    sources: [{ sourceUrl, capturedAt, sourceKind, excerpt, theme }],
    verbatims: [...]
  },                                     // 10–15 captured phrases, not rendered — provenance
};
```

`research.verbatims` is not rendered; it exists so the next agent can see where the copy came from and
so a reviewer can check that the page reflects real language.

**`hero.mock` names an LP5b component, not an image path.** This is the change that deletes the
168-screenshot obligation (8 niches × 7 locales × ~3 visuals). The mock derives its services, add-ons
and expenses from that template's own catalog entries, so the visual is niche-specific for free —
in every locale, in both themes, at zero asset weight.

### LP7.3 Uniqueness contract

Per the `programmatic-seo` skill: unique value per page, no thin doorway pages.

- **≥60% of body text niche-specific.** Add `scripts/check-uniqueness.mjs`: tokenize each niche page's
  rendered text, compute overlap against the homepage and every other niche page in the same locale,
  fail above 40% shared. Run it in CI from LP11 onward (when there are ≥2 pages to compare).
- Shared blocks that are allowed to repeat verbatim: header, footer, "What Perelai is not", the final
  CTA, and legal micro-copy.
- The **terminology table** is the primary differentiator and must be built from that template's actual
  `services` / `addons` / `expenses` in the generated catalog. See `messaging-and-claims.md` §9 for a
  worked example.
- **LP5b mocks feed this gate.** `check-uniqueness.mjs` tokenizes *rendered text*, so a screenshot
  contributes zero. A mock contributes that template's own service, add-on and expense names — the
  same product-derived proprietary data §9 calls the strongest defensible category, shown instead of
  tabulated. Two niche pages become structurally different, not differently-captioned.

### LP7.4 Research pass (do this before writing)

Load **`customer-research`**. For `independent_colorist`, gather 10–15 verbatim phrases from the
sources in `messaging-and-claims.md` §10. Record them in `research.verbatims`. Headlines must use those
words. This step is what separates a niche page from a find-and-replace of the homepage — do not skip
it to save time.

### LP7.5 Ship Wave 1a only

**One page:** `/for-independent-colorists` → `niche=premium-colorist` → `independent_colorist`.
Locales: `en`, `uk`, `pl` (per LP4.4 launch order).

Workspace CONTEXT §18: *"Do not create many similar SEO pages before validating the first niche."*
This is a documented product rule, not a preference. Do not batch-generate the other niches now,
however tempting the template makes it.

### LP7.6 Gate

- Page renders in all shipped locales; CTA emits `?niche=premium-colorist&…`
- `pnpm verify:niches` passes
- Uniqueness ≥60% vs the homepage
- Every block from `messaging-and-claims.md` §9 present
- Manual end-to-end: click CTA → app `/register` → onboarding shows the colorist template
  preselected and first in the list

---

## Phase LP8 — Pricing and the Founding Beta offer

Load **`pricing`** and **`offers`**, then **`cro`**.

### LP8.1 The honesty constraint

No billing exists (review §7.4). The project's own precedent for this exact situation is OB13: the app
kept the market price catalog **empty** rather than fabricate numbers. The pricing page must do the
same — describe the real offer, label anything forward-looking as indicative.

### LP8.2 Page structure

First create `docs/commercial-policy.md`, recording each publishable commercial fact, its approver and
approval date. The LLM may format approved facts; it may not invent or approve them. Until the file
contains approval, omit beta duration, price-lock, scarcity and future tier numbers.

1. **What you get today:** the currently available capabilities, stated by name; do not say “full
   product”. “Free while in beta” and “no card” ship only if they are current, approved facts.
2. **What happens when billing arrives:** only approved commitments. If the following tiers are
   approved, label them **indicative**, USD only:

   | Plan | Indicative | For |
   |---|---|---|
   | Founding Solo | $19/mo | solo pros who join during the beta — locked |
   | Solo | $29/mo | solo pros after launch |
   | Team | $49/mo | businesses with staff |

3. **What is never charged:** no commission on bookings, no per-booking fee, only if this remains the
   approved commercial policy.
4. **Risk reversal:** use only product-backed, approved facts. Do not claim data export, and do not
   say closing a browser tab cancels an account or obligation.
5. **FAQ:** "when does billing start", "what if I don't want to pay then", "do you take a cut".

### LP8.3 Currency

USD only until a curated per-market price table exists, exactly as `TEMPLATE_PRICE_PACKS` is empty
until reviewed packs exist. LP5's region detection may show *"≈ shown in USD; your market: PL (PLN)"*
as a hint — it must not invent a PLN price.

### LP8.4 Scarcity

Only if true. If founding seats are genuinely capped, state the real number and the real deadline. If
not, no countdown, no "limited spots". Invented scarcity is the fastest way to lose a founder-led
audience that can see the product is pre-launch.

### LP8.5 Gate

Header "Pricing" links to `/pricing`, not to a `#pricing` anchor on a CTA banner (review L11).
No number on the page lacks a source, “indicative” label and dated owner approval. No price-lock,
duration or scarcity statement lacks the same approval.

---

## Phase LP8b — Legal pages and the app handoff

Runs between LP8 and LP9: the pages must exist before LP9 puts them in the sitemap, and they need
LP3 (`buildAppSignupUrl`) and LP4 (localized routing) to already be in place.

**Full specification:**
[`legal_pages_and_cross_domain_handoff_20260725.md`](legal_pages_and_cross_domain_handoff_20260725.md).

Summary of what this phase delivers on the landing side:

- `/terms` and `/privacy` (localized). Structured stubs with a visible draft banner and a real
  contact address are permitted in local development/staging only. Public signup traffic requires
  dated owner/legal-approved final text.
- A `← Back to sign up` / `← Back to log in` button rendered when the incoming URL carries a valid
  `from` parameter, so a user who leaves the app's signup screen to read the terms returns to it in
  one click, with their niche and UTMs intact.
- The return destination is **always reconstructed** from `NEXT_PUBLIC_APP_URL` plus a fixed
  `from` → path map. A URL taken from the query string must never become an `href` — that is an
  open-redirect on a page linked from a signup form.
- Attribution capture suppressed on `?from=` visits, so a diligent reader is not re-attributed to
  "self-referral" from `perelai.app`.
- Footer links repointed from `href="#"` to the real pages (review defect L10).

The app-side half — repointing `AuthLegalLinks.tsx` and converting the app's `/terms` and `/privacy`
routes to redirects — is cross-repo item **A9** and is explicitly **not** in this plan's scope.

**Gate:** the 10-step round-trip table in that document's §5, including the two tamper assertions
(`?from=https://evil.example` renders no button; `?from=register&niche=colorist` returns a URL with no
`niche`). Both must be automated tests.

**Blocking rule:** structured stubs are development-only. They are not acceptable for a public
signup form collecting email, whether traffic is organic or paid. No LLM is authorized to mark legal
text approved.

---

## Phase LP9 — SEO surface

Load **`seo-audit`**, **`schema`**, **`ai-seo`**.

### LP9.1 Technical

- `app/sitemap.ts` — every locale × page, with `alternates.languages` per entry.
- `app/robots.ts` — allow all; reference the sitemap; do not block AI crawlers (GPTBot,
  ClaudeBot, PerplexityBot) — the `ai-seo` skill's presence pillar depends on them.
- Canonical on every page = its own localized URL (self-referencing).
- Trailing-slash policy: pick one, enforce with a redirect.
- Per-page unique `title` (≤60 chars) and `description` (≤155), from the content model.

### LP9.2 Open Graph

- Use App Router metadata conventions: colocated `opengraph-image.tsx` and `twitter-image.tsx`, with
  `generateImageMetadata` where variants are required. Inputs are generated/deterministic so Next
  can build and cache static variants: brand background + page H1 + niche label.
- Per-locale OG text. `og:locale` + `og:locale:alternate`.
- Twitter `summary_large_image`.
- **Reuse the LP5b mocks.** `next/og` renders JSX, so a simplified `MockVisitCard` or
  `MockFinanceKpis` can sit inside the OG card — giving per-locale, per-niche social previews that
  show the product with that template's own data. Same combinatorics saving as LP5b itself, applied
  to social. Keep the subset small: `next/og` supports a limited CSS surface, so build an
  `og`-variant of the mock rather than forcing the full component through it.

### LP9.3 JSON-LD

| Page | Types |
|---|---|
| All | `Organization`, `WebSite` |
| Homepage | + `SoftwareApplication` (`applicationCategory: BusinessApplication`) |
| Niche pages | + semantic `SoftwareApplication`, `BreadcrumbList`; **no `FAQPage`** |
| Pricing | + `Offer` — **only** once real prices are live; omit while indicative |

Google removed FAQ rich results in June 2026, so visible FAQs remain for users without `FAQPage`
markup. A Software App rich result requires a real offer plus a review/rating; while Perelai lacks
those, treat `SoftwareApplication` as semantic Schema.org markup rather than promising eligibility.
Validate JSON syntax and Schema.org semantics. Use Google's Rich Results Test only for types that
actually meet Google's required properties. Do not mark up content that is not visible.

### LP9.4 Machine-readable files (`ai-seo`)

- `/llms.txt` — optional discovery aid: what Perelai is, who it is for, the supported business types, the honest capability
  list from `messaging-and-claims.md` §2, and the "what it is not" list.
- `/pricing.md` — the Founding Beta offer in the structured form the `ai-seo` skill specifies, so
  agents comparing tools read the real terms instead of guessing.

Both must be regenerated from the same sources as the pages — never hand-maintained in parallel.
Do not claim that `llms.txt` improves Google rankings.

### LP9.5 Gate

Sitemap validates and contains every live URL × published locale. Schema validation passes for every
JSON-LD block; Rich Results Test is required only for an eligible Google feature. OG image renders
for a niche page in every published locale. Lighthouse SEO = 100 on homepage and niche page.

---

## Phase LP10 — Analytics

Load **`analytics`**.

### LP10.1 Tool choice

Prefer a data-minimized configuration such as Plausible or PostHog EU cookieless mode. Five of the
ten supported markets are EU/GDPR. “Cookieless” alone does **not** settle whether consent or disclosure
is required: document the exact storage, identifiers, hosting, retention and enabled features, then
record the owner/legal privacy decision in `docs/tracking-plan.md`. The attribution that matters
already travels in the URL to the app (LP3), so cookie-based cross-domain tracking buys little.

If GA4 is chosen instead: Consent Mode v2 plus a compliant banner become mandatory, and cross-domain
measurement to `perelai.app` must be configured. Document the choice either way.

Attach the selected provider behind LP3's typed `lib/analytics.ts` adapter. Session replay, click IDs
and full referrer capture are off until explicitly covered by the recorded privacy decision.

### LP10.2 Event contract

Object-action naming, lowercase, underscores (per the `analytics` skill). The first four are already
specified in workspace CONTEXT §12 — keep those names exactly.

| Event | Fires when | Properties |
|---|---|---|
| `landing_viewed` | any page view | `landing_path`, `locale`, `page_type`, `niche?` |
| `landing_cta_clicked` | any CTA click | `+ cta_position`, `cta_text`, `destination` |
| `pricing_viewed` | pricing page view or pricing section ≥50% visible | `+ source_page`, `surface: 'page' \| 'section'` |
| `signup_started` | navigation to the app register URL | `+ niche`, `utm_source`, `utm_campaign` |
| `niche_page_viewed` | niche page view | `+ niche`, `template_id`, `wave` |
| `language_switched` | switcher used | `from_locale`, `to_locale` |
| `faq_opened` | FAQ item expanded | `question_id`, `page_type` |

**Never send** (workspace CONTEXT §12, landing CONTEXT §8): names, emails, phone numbers, free text,
full referrer URLs with query strings, or anything from a form field. The landing has no forms — keep
it that way.

### LP10.3 Funnel

```
landing_viewed → landing_cta_clicked → signup_started
   │ (cross-domain handoff — attribution carried in the URL)
   ▼
app: onboarding_started → onboarding_template_recommended → onboarding_completed
```

The join key across the boundary is `acquisitionNiche` + `acquisitionCampaign` +
`acquisitionLandingPath`, all persisted on `Company` (review §5). `apps/api/src/scripts/onboarding-report.ts`
already groups by `acquisitionNiche` — that script is the end-to-end report for this funnel, and no
landing-side work is needed to enable it beyond emitting correct URLs.

Document the tracking plan in `docs/tracking-plan.md`.

### LP10.4 Gate

Every event fires once per trigger/surface (no doubles from React strict mode). No PII in any payload.
`signup_started` properties match the parameters actually present in the destination URL.
A test signup appears in the app's onboarding report under the right niche. The tracking plan records
the chosen configuration and consent/privacy decision; unapproved replay/click-ID features are off.

---

## Phase LP11 — Validation gate, then Wave 1b

### LP11.1 Wave 1a gate

Do not build more niche pages until **all** of these hold:

| Check | Threshold |
|---|---|
| `/for-independent-colorists` indexed in Search Console | yes |
| Signups attributed to `niche=premium-colorist` in the app's onboarding report | ≥ 1 (proves the whole chain works end to end) |
| Niche page CTA click-through vs homepage | directionally higher over ≥ 200 sessions, reported with uncertainty; not called statistically significant |
| Lighthouse mobile Performance | ≥ 90, and ≥ LP1.6 baseline — measured **without** a multi-MB hero image, so the number reflects the page and not the asset (LP1.4) |
| Console errors / hydration warnings | zero |
| Copy audit against `messaging-and-claims.md` §2 | passes |
| Mock audit: every rendered mock element traces to a §2 capability row | passes |

If the directional evidence is flat or worse, fix the page before scaling. Passing this rollout gate
is a product decision, not a claim of statistical significance.

### LP11.2 Wave 1b

Add the seven pages in `reference/niche-catalog.md` §5. Per page:

1. `customer-research` pass — 10–15 verbatims, per niche, no reuse
2. Terminology table built from that template's own catalog entries
3. `requiresStaff: true` niches (`salon`, `nail_salon`, `barber`) speak to **owners with a team**, and
   their setup section shows **4** steps
4. Uniqueness check ≥60% against the homepage **and** every sibling niche page
5. Add to the homepage niche router and the footer (no orphans)
6. Add to sitemap + `hreflang` sets

Enable the CI uniqueness check now that there are siblings to compare.

### LP11.3 Locale expansion

Add `es`, `fr`, `de`, then `ru` — each only when the homepage and every live niche page are fully
translated and reviewed by a speaker.

### LP11.4 Gate

Eight live niche pages, all indexed, none flagged thin, all in the sitemap, all reachable from the
homepage router, uniqueness check green.

---

## Phase LP12 — Experimentation readiness and later waves

Load **`ab-testing`**, **`signup`**, **`onboarding`**.

### LP12.1 Do not A/B test yet

With founder-led traffic, do not choose a universal traffic threshold by intuition. Before every
experiment calculate sample size from the observed baseline conversion, chosen minimum detectable
effect, alpha and power. Until a page can reach that sample in a reasonable fixed window:

- Consented/approved session recordings and scroll maps — qualitative, not statistical evidence
- Cross-page comparison: niche page vs homepage, niche vs niche
- Sequential copy iteration with a fixed 2-week observation window, documented as a decision log rather
  than as a statistical result — and labelled as such

### LP12.2 When volume arrives

Maintain an ICE-scored backlog (`ab-testing` skill). Highest-value hypotheses for this site, in order:

1. Hero headline: outcome-led vs pain-led
2. CTA copy: "Create your free workspace" vs "Join the Founding Beta"
3. Whether the Inbox differentiator sits above or below the booking-link section
4. Terminology table placement: above vs below the FAQ
5. Showing indicative pricing on the niche page vs linking out to `/pricing`

One variable per test. Primary metric `signup_started`; guardrail = the app's `onboarding_completed`
rate for that niche — a landing change that lifts clicks but sends worse-fit users is a loss, and only
the cross-domain join in LP10.3 can reveal it.

**Precondition on public traffic:** the LP8b legal pages must carry dated owner/legal-approved final
text before the public signup form is launched. This includes organic and paid traffic.

### LP12.3 Wave 2

Gate: Wave 1b stable ≥ 4 weeks **and** ≥ 2 niches beating the homepage baseline. Then add the ten
pages in `reference/niche-catalog.md` §6.
`/for-lawyers` is **not** in scope — the `legal` slug maps to a template labelled *Consulting*
(catalog §6). Request a dedicated template in the app repo first.

### LP12.4 Wave 3 — hand off to its own document

The twelve REQUEST / ORDER / RENTAL pages are **out of scope for this plan** and have their own
sequenced document:
[`wave3_request_order_rental_niches_20260725.md`](wave3_request_order_rental_niches_20260725.md).

The rollout flags were flipped to `true` in `.env.example` and the local `.env` on 2026-07-25, so
these pages moved from *blocked* to *sequenced*. Two things still gate them, and both are enforced
mechanically rather than by memory:

1. `.env.example` is not production, and a `VITE_` flag has no effect until the web bundle is rebuilt.
   The verified production value goes into `PRODUCTION_BOOKING_FLAGS` in `config/niche-pages.ts` with
   the date and the person who verified it; the LP2 verifier fails the build for any page whose mode
   is `false` there.
2. ORDER mode has two activation blockers —
   `public-booking.service.ts:1881` rejects every public ORDER submission when a service or add-on
   price is `null`, and the curated price catalog is deliberately empty, so a fresh ORDER tenant ships
   a public page that 400s until they set prices. In addition, current `course_creator` and
   `content_creator` templates have `bookingConfig.enabled: false`, and onboarding copies that into
   `Company.publicBookingEnabled`; their order pages therefore default off. Cross-repo items
   **A10** and **A13** block Wave 3b.

Sequence: 3a REQUEST (4 pages) → 3b ORDER (2) → 3c RENTAL (6), each with its own entry gate.
Rental templates are `BETA` in the app's own picker and their pages must say so. Never emit `airbnb`
as a slug (catalog §8).

### LP12.5 HOLD-LEGAL

`aesthetic_clinic` and `advanced_skincare` (`regulated: true`) stay unbuilt until written compliance
sign-off (review item A6). `aesthetic_clinic` is `FEATURED` with marketing-priority 2 and will keep
looking like an obvious next page. It is not.

---

## 13. Definition of done

- [ ] No claim on the site that is not in `reference/messaging-and-claims.md` §2
- [ ] Every CTA reaches `perelai.app/register` with a slug that resolves in `libs/core`
- [ ] `pnpm verify:niches` runs in `prebuild` and fails on drift
- [ ] `APP_LOCALES` matches all seven app locales; each published locale is complete, path-based,
      reciprocal in `hreflang`, and never redirected when explicit
- [ ] Region affects currency and examples only; SSG output is region-identical
- [ ] Product visuals are rendered mocks in all 7 locales and both themes, built from generated
      catalog + generated app strings; exactly one real screenshot (homepage hero); no per-niche
      screenshot assets exist
- [ ] Eight live niche pages, each ≥60% unique, none orphaned
- [ ] Pricing page states only dated, owner-approved commercial facts; nothing forward-looking is
      unlabelled
- [ ] `/terms` and `/privacy` live with dated owner/legal-approved final text, localized, with a
      working one-click return to app signup and no open-redirect path
- [ ] The real Perelai mark ships as favicon, app icon and header logo; no v0 template assets remain
- [ ] Sitemap, robots, canonical, OG, JSON-LD, `llms.txt`, `pricing.md` all live and valid
- [ ] Landing → app funnel joinable on `acquisitionNiche` in the app's onboarding report
- [ ] `pnpm typecheck && pnpm lint && pnpm build` clean with `ignoreBuildErrors` removed
- [ ] Lighthouse mobile ≥ 90 Performance, 100 SEO on homepage and every niche page

## 14. Out of scope

**Any change to `beauty-finance`.** The cross-repo items in review §9 must be raised as separate tasks
in the app repo. Current state:

- **A1, A2 done** (2026-07-25) — the catalog tables in all three `CONTEXT.md` files were regenerated
  from `business-templates-catalog.ts`, and the invalid `colorist` slug was removed.
- **A3** (raw niche slug rendered as onboarding copy) and **A9** (`AuthLegalLinks` → landing) are
  worth doing **before** LP7 and LP8b respectively.
- **A4** — the booking-mode flags were flipped to `true` in `.env.example`; the production value still
  needs verifying before any Wave 3 page.
- **A10** — the ORDER `null`-price activation blocker; blocks Wave 3b.
- **A13** — `course_creator` and `content_creator` default public booking off; add an approved
  app-side activation path before Wave 3b.

**The 12 non-appointment niche pages** are also out of scope here and live in
[`wave3_request_order_rental_niches_20260725.md`](wave3_request_order_rental_niches_20260725.md).
