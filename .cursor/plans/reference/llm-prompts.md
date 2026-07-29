# Copy/Paste Prompts for Executing Agents

Each prompt is self-contained when combined with the universal preamble: paste both as the first
message of a fresh session in `/Users/valery/Sites/perelai-landing`. The prompts deliberately load
only the skills relevant to that phase; loading the entire marketing catalog wastes context and gives
smaller models conflicting workflows.

**Universal preamble — prepend to every prompt below:**

> You are working in `/Users/valery/Sites/perelai-landing` (Next.js 16 App Router, React 19,
> Tailwind v4, pnpm). Before editing, run `git status --short` and preserve any existing user changes.
> Read `.cursor/plans/01_plan_integrity_review_20260729.md`,
> `.cursor/plans/00_architecture_review_20260725.md`,
> `.cursor/plans/niche_landing_i18n_product_relaunch_20260725.plan.md`,
> `.cursor/plans/reference/niche-catalog.md` and
> `.cursor/plans/reference/messaging-and-claims.md` before you start.
> Read every skill named by the phase **in full before editing**. Marketing skill path:
> `/Users/valery/.agents/skills/<skill>/SKILL.md`. Repo-local skill path:
> `.agents/skills/<skill>/SKILL.md`. The plan, generated product data and claim rails outrank generic
> skill advice. Do not load unlisted skills.
> **Hard rules:** (1) never modify anything under `/Users/valery/Sites/beauty-finance`;
> (2) never write a marketing claim that is not in `messaging-and-claims.md` §2;
> (3) never emit a `niche` slug that is not in the generated catalog;
> (4) run `pnpm typecheck && pnpm lint && pnpm build` before reporting done once LP1 has created those
> scripts; P0 uses its own gate;
> (5) do exactly the phase you were given — do not start the next one;
> (6) do not treat development legal stubs, unverified production flags, or unapproved commercial
> facts as launch-ready;
> (7) if a required owner/legal/production gate lacks evidence, stop that release action and report
> the exact missing evidence; continue any safe implementation work that does not depend on it.

---

## P0 — Baseline and claim triage (Phase LP0)

> Load the **`product-marketing`** and **`copy-editing`** skills.
>
> **Task A — safety net.** `git init` the repo, write a `.gitignore` covering `node_modules`,
> `.next`, `.pnpm-store`, `.env*.local`, `.DS_Store`, and commit the untouched baseline as
> `LP0: baseline before landing relaunch`.
>
> **Task B — env.** Create `.env.example` (committed) and `.env.local` (ignored) with
> `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_BOOKING_URL`, `NEXT_PUBLIC_LANDING_URL`,
> `NEXT_PUBLIC_DEFAULT_CAMPAIGN=founding-beta`. Production values `https://perelai.app`,
> `https://book.perelai.app`, `https://perelai.com`; local `http://localhost:4200` for the app.
>
> **Task C — product marketing context.** Create `.agents/product-marketing.md` using the
> `product-marketing` skill's document structure. **Do not re-derive positioning or interview me** —
> transcribe §1–§5 of `messaging-and-claims.md` into that structure. Set `Document version: v1` and
> one changelog entry.
>
> **Task D — claim triage.** Apply exactly the edit table in plan §LP0.4. Replacement copy comes from
> `messaging-and-claims.md` §2 and §6. Do not restructure sections, do not redesign, do not add
> features — this task only removes claims the product cannot keep and fixes dead links.
>
> **Gate:** `pnpm build` clean; both greps in plan §LP0.5 return nothing. Commit
> `LP0: remove unshippable claims and dead links` and list every file you touched.

---

## P1 — Foundations (Phase LP1)

> Load repo-local **`codebase-design`** and **`tdd`**. The test seams are already decided below; do
> not pause to renegotiate them. Read
> `.cursor/plans/product_mock_kit_20260728.md` before editing because it amends LP1.2/LP1.4.
>
> Implement plan §LP1.1–§LP1.5 exactly:
> 1. Remove `typescript.ignoreBuildErrors` from `next.config.mjs` and fix every error it was hiding.
>    Add `"typecheck": "tsc --noEmit"` to scripts. Ensure `"strict": true` in `tsconfig.json`.
> 2. Add a `.dark` token block to `app/globals.css` mirroring every `:root` token; add
>    `--brand-500/600/700`; replace every hardcoded hex in `components/landing/*` with a token.
>    Add a pre-hydration inline script in `<head>` reading `localStorage.perelai-theme` and stamping
>    `class="dark"` on `<html>` before paint. Add an accessible persisted
>    `components/theme-toggle.tsx` with an explicit label and `aria-pressed`. System preference is
>    the initial fallback; a user choice wins. No flash on reload in either theme.
> 3. Remove `"use client"` from components that do not use state, effects or `framer-motion`.
>    Keep it only on `reveal.tsx` and anything genuinely interactive.
> 4. Replace raw `<img>` with `next/image` (explicit `width`/`height`/`sizes`; `priority` on the hero
>    image only). Then remove `images.unoptimized` from `next.config.mjs`.
> 5. Create `lib/env.ts` (validates `NEXT_PUBLIC_*` at module load and throws at build time when a
>    required one is missing), `lib/site.ts`, `lib/cn.ts`.
>
> **Do not** change copy, add pages, or touch routing.
>
> **Gate:** `pnpm typecheck && pnpm lint && pnpm build` clean with `ignoreBuildErrors` removed;
> dark mode toggles with no FOUC. Record a Lighthouse mobile baseline in `docs/baseline-lighthouse.md`.

---

## P2 — Niche catalog and drift guard (Phase LP2)

> Load repo-local **`codebase-design`** and **`tdd`**. The test seams are fixed by LP2.4; proceed
> without pausing for a separate seam-approval round. Read plan §LP2 twice.
>
> The landing must never emit a niche slug that does not exist in the app's shared core. The three
> `CONTEXT.md` files already drifted from the code (review §4) and one of them lists an invalid slug
> (`colorist`). A hand-maintained copy will drift again, so build a mechanical guard.
>
> 1. `scripts/generate-niche-catalog.mjs` — resolve the app repo from `process.env.PERELAI_APP_REPO`
>    (default `../beauty-finance`) and read `libs/core/src/templates/business-templates-catalog.ts`,
>    `business-groups.ts`, `supported-markets.ts`, and `apps/web/src/config/localization.ts`.
>    **Import and execute the TypeScript** (via `tsx` or `esbuild-register`) and read the real exports.
>    Only fall back to the TypeScript compiler API if execution is impossible. **Never regex-parse.**
>    Emit `data/niche-catalog.generated.json` with the fields listed in plan §LP2.1. Derive
>    `generatedAt` from the source commit timestamp, use stable key order and do not rewrite unchanged
>    output. Commit the JSON — the landing must build with no sibling repo present.
> 2. `config/niche-pages.ts` — the `NichePage` registry and `PRODUCTION_BOOKING_FLAGS` from plan
>    §LP2.2. Populate from `niche-catalog.md` §4–§8. **Only Wave 1a is enabled**; later waves present
>    but disabled.
> 3. `scripts/verify-niches.mjs` wired as `pnpm verify:niches` and run from `prebuild`. Always validate
>    registry ↔ committed generated JSON. A missing app repo skips only live freshness comparison;
>    it must not skip local checks. Reject an enabled page whose generated
>    `bookingConfig.enabled` is false without an approved activation path.
> 4. Add Vitest and every test in plan §LP2.4, including absent-sibling corruption and disabled
>    template fixtures.
>
> **Gate:** `pnpm verify:niches` exits 0 with the app repo present and with it absent. Temporarily
> setting the colorist entry's niche to `colorist` makes `pnpm build` fail in both modes. A second
> generator run from the same app commit produces no diff.
> Revert and commit.

---

## P3 — Signup URL builder (Phase LP3)

> Load marketing **`analytics`** and repo-local **`codebase-design`**, **`tdd`**. The seams and
> behaviours in LP3 are pre-approved.
>
> Implement `lib/urls.ts`, `lib/attribution.ts`, typed provider-neutral `lib/analytics.ts` (no-op
> implementation), and `components/cta-button.tsx` exactly as specified in plan §LP3.
>
> The behaviour that matters most, and why: the app validates the whole acquisition context with a
> single `safeParse`, so **one over-length field silently discards the niche as well**
> (`libs/core/src/zod/schemas.ts:726-729`). Therefore clamp before emitting — `niche` ≤ 80,
> `utm_source` ≤ 80, `utm_campaign` ≤ 120, `landing_path` ≤ 240 — and validate the slug against
> `data/niche-catalog.generated.json`, omitting `niche` entirely rather than sending an unresolvable
> value. Missing required env is an LP1 build/config error. With valid config,
> `buildAppSignupUrl` must not throw on runtime input or URL-construction failure and returns the bare
> app `/register` URL.
>
> `landing_path` is the **English canonical path with no locale prefix**
> (`/for-independent-colorists`, never `/uk/...`). Accept a validated landing locale and emit it as
> `lng=<locale>` so the cross-origin app opens in the same language. It is a UX hint, not acquisition
> authority. Handoff allowlist is only `niche`, `utm_source`, `utm_campaign`, `landing_path`, `lng`;
> no click IDs or arbitrary query passthrough.
>
> Attribution storage is minimized: allowlisted UTMs plus referrer hostname only. Do not call
> `sessionStorage` categorically “functional” or infer that it eliminates consent obligations.
>
> Add a lint rule or test forbidding `NEXT_PUBLIC_APP_URL` interpolation anywhere outside `lib/urls.ts`.
>
> **Gate:** all LP3.4 tests, including config failure vs runtime fallback and valid/invalid `lng`.
> Paste a generated URL into the app and confirm language continuity and template preselection.

---

## P4 — Localization (Phase LP4)

> Load marketing **`site-architecture`**, **`seo-audit`** and repo-local **`codebase-design`**,
> **`tdd`**.
>
> Implement plan §LP4 with `next-intl`, `localePrefix: 'as-needed'`.
> `APP_LOCALES=['en','uk','pl','ru','es','fr','de']` is the verified app contract;
> `PUBLISHED_LOCALES=['en','uk','pl']` is the only set routed/indexed in this phase.
>
> **Check the installed `next-intl` version's documentation before writing config. Do not assume the
> API.**
>
> Key constraints, and the reasoning you must not undo:
> - The app detects language client-side and serves one URL in N languages. That is correct for an
>   authenticated SPA and **wrong for a marketing site** — it makes `hreflang` impossible and lets
>   Google index only one variant. Reuse the app's *precedence logic*, not its *delivery mechanism*.
> - Next.js 16 uses root **`proxy.ts`** with a `proxy` export. It negotiates only on un-prefixed entry
>   and `/`. A path that already has an explicit
>   locale prefix is **never** redirected. Never branch on user-agent.
> - Precedence: `NEXT_LOCALE` cookie → `Accept-Language` (language subtag only) → `en`. 307, and set
>   the cookie for a year.
> - `generateStaticParams` for every **published** locale × page; the whole site stays static.
> - Every page emits reciprocal, self-referencing `hreflang` alternates plus `x-default` → the English
>   canonical.
> - The language switcher renders real `<a href>` links, preserves path + query, and mirrors the visual
>   style of `beauty-finance/apps/web/src/pages/PublicBookingPage.tsx:225-272` (globe icon, uppercase
>   code, native names).
> - Translate `en`, `uk`, `pl` in this phase. Reuse the app's existing translations of Visit / Order /
>   Package / Instalment from `beauty-finance/apps/web/public/locales/{lng}/common.json` so both
>   products use the same word. Never ship a partially translated locale.
>
> **Gate:** `APP_LOCALES` matches the generated app contract; only complete `en`/`uk`/`pl` variants
> publish; `/uk/for-independent-colorists` returns 200 with no redirect; `Accept-Language: pl` on `/`
> redirects once to `/pl` and on `/uk` does not redirect; `/de/...` never serves English fallback;
> `hreflang` sets are reciprocal across published variants.

---

## P5 — Region detection (Phase LP5)

> Load repo-local **`tdd`**. LP5.4 defines the test seam.
>
> Implement `lib/region.ts` per plan §LP5. **Language decides content and URL; region decides currency
> label and example numbers and nothing else.** Region must never fork indexable content — that would
> fragment ranking signals and risk cloaking.
>
> Precedence, mirroring the app's documented market order: an explicit
> `localStorage['perelai-market']` written by a real accessible selector (if one ships) → timezone
> → country → `navigator.language` region subtag → locale's primary market → `US`. Read the market and
> currency list from `data/niche-catalog.generated.json`, never hand-copied. Keep the timezone map to
> the ~40 zones covering the 10 supported markets — do not add a large IANA dataset.
>
> Server renders the locale's primary market; region-sensitive elements are client components that
> update in `useEffect`. No hydration warnings.
>
> **Gate:** built HTML is byte-identical across simulated regions; changing device timezone changes
> only the currency label; zero console warnings.

---

## P5b — Product mock kit (Phase LP5b)

> Load marketing **`cro`**, **`copy-editing`** and repo-local **`design-taste-frontend`**, **`tdd`**.
> Full spec: [`../product_mock_kit_20260728.md`](../product_mock_kit_20260728.md) §7 — read it in full,
> including the ready-made executor prompt in §7.8, which is more detailed than this summary.
>
> Build four rendered product mocks that replace per-niche, per-locale screenshots:
> `components/mock/{MockVisitCard,MockCalendarMonth,MockInboxTriage,MockFinanceKpis}.tsx`, plus
> `lib/mock-data.ts` and an allowlisted `data/app-ui-strings.generated.json` extraction from the app's
> locale files (extend the LP2 generator; never bulk-copy a locale file).
>
> **Why:** messaging §9 requires niche-specific product visuals and LP7.2 stores them per locale —
> 8 niches × 7 locales × ~3 visuals = **168 screenshots**. Rendered mocks make that zero, and their
> service/add-on/expense names count toward LP7.3's ≥60% niche-specific text budget, which a `<img>`
> cannot.
>
> **Absolute rules.** No new dependency — the finance chart is a hand-authored inline SVG, never
> `recharts`. No hardcoded service name, label, or hex: names from `niche-catalog.generated.json`,
> labels from `app-ui-strings.generated.json`, colours from LP1.2 tokens. Since the landing cannot
> import app code, those generated files **are** the drift guard. Every mock element must trace to a
> capability row in `messaging-and-claims.md` §2, and every mock carries a visible `Example data`
> caption inside its frame. Do not reuse `inbox.trust_amount`'s currency — it hardcodes `$` in all
> seven app locales; format the number yourself with the market currency.
>
> Server components by default; only the region-aware currency label is `"use client"`, rendering the
> server value first and updating in `useEffect`.
> Use a fixed/injected reference instant for dates; never `Date.now()` during build. Hide decorative
> chrome with `aria-hidden`, and render the Inbox trust sentence as a semantic sibling outside that
> hidden subtree. The one real homepage screenshot is captured from a synthetic PII-free app
> workspace; do not generate it.
>
> **Gate:** that document §7.7 — all four mocks in 7 locales × light/dark × 360 px with no clipping;
> `verify:niches` fails when an allowlisted key is removed; SSG output still region-identical; no
> hydration warnings; `rg "recharts|chart\.js|d3" components lib` returns nothing.

---

## P6 — Homepage rebuild (Phase LP6)

> Load marketing **`customer-research`**, **`copywriting`**, **`copy-editing`**, **`cro`**,
> **`marketing-psychology`**, **`offers`**, and repo-local **`design-taste-frontend`**, **`tdd`**.
> Read `.agents/product-marketing.md` first — it is the positioning source.
>
> Before copy, run a homepage ICP research pass and record source URL, capture date, source kind,
> short excerpt and theme. This is independent of the later LP7 colorist research; do not wait for a
> future phase.
>
> Rebuild the homepage as the 10 sections in `messaging-and-claims.md` §7, one argument per section.
>
> Constraints:
> - Every claim traceable to `messaging-and-claims.md` §2. Nothing from §3 (not built) or §4 (banned).
> - **There are no customers.** No testimonials, no logos, no "join N pros". Use the five substitutes
>   in §5 — one real synthetic-workspace screenshot labelled `Example data`, rendered LP5b mocks,
>   specificity, a signed founder note, real risk
>   reversal, and the "what Perelai is not" block.
> - CTA copy and micro-copy come from §6 verbatim. Registration ends in an email-verification screen,
>   so the micro-copy must say so.
> - Lead the differentiator with the notification-vs-Inbox contrast: a notification tells you something
>   happened; the Inbox keeps it until you deal with it.
> - The "money that adds up" section must frame the fulfilment/payment separation as a **benefit**
>   (the number is real), not as a caveat.
> - Include the niche router section even though only one niche page is live — it is the internal
>   linking hub.
> - FAQ text must be in the DOM at load, not injected on click.
> - Render only existing navigation/footer routes. Blog, Careers, Help and Changelog stay absent until
>   their pages exist; no `href="#"`.
>
> The canonical H1 and primary CTA in `messaging-and-claims.md` ship. You may record alternatives with
> rationale in `docs/experiment-backlog.md`; do not replace decided copy during this phase.
>
> **Gate:** banned-word grep from plan §LP0.5 still empty; `copy-editing` pass applied; Lighthouse SEO
> ≥ 95.

---

## P7 — Niche page template + Wave 1a (Phase LP7)

> Load marketing **`programmatic-seo`**, **`customer-research`**, **`copywriting`**,
> **`copy-editing`**, **`cro`**, **`site-architecture`**, and repo-local
> **`design-taste-frontend`**, **`tdd`**.
>
> **Step 1 — research first, writing second.** Run the `customer-research` skill for independent
> hair colorists using the sources in `messaging-and-claims.md` §10. For every source record URL,
> capture date, source kind, short excerpt and theme. Produce **10–15 verbatim phrases**
> in the ICP's own words about: losing track of the day, chasing payment, no-shows, DM bookings, and
> not knowing what they earned. Save the research artifact before writing copy. Headlines must use those
> words, not product words. **Do not skip this step** — skipping it is what turns a niche page into a
> find-and-replace of the homepage, which is a thin doorway page under the `programmatic-seo` rules.
>
> **Step 2 — routing.** `app/[locale]/[nichePage]/page.tsx` with `dynamicParams = false` and
> `generateStaticParams` over locale × enabled `NichePage`. Add the `RESERVED_SLUGS` guard from plan
> §LP7.1 and permanent aliases in `niche-catalog.md` §4 for every published locale, preserving the
> locale in the canonical target.
>
> **Step 3 — content model.** `content/niches/{slug}/{locale}.ts` with the `NichePageContent` shape in
> plan §LP7.2. Content is data, not JSX.
>
> **Step 4 — write the page.** All blocks in `messaging-and-claims.md` §9.
> The **terminology table** is the most important block: build it from `independent_colorist`'s actual
> `services` / `addons` / `expenses` in `data/niche-catalog.generated.json`, mapping the colorist's own
> words to Perelai's domain terms. Cross-check every Perelai term against
> `messaging-and-claims.md` §4.2 — never invent a term the app does not use. §9 has a worked example;
> match its shape, not its wording.
>
> **Step 5 — uniqueness.** Write `scripts/check-uniqueness.mjs` (tokenize rendered text, fail above 40%
> overlap with the homepage). Wire it but expect it to be most useful from Wave 1b.
>
> **Ship exactly one page** — `/for-independent-colorists` → `niche=premium-colorist`, in `en`, `uk`,
> `pl`. Workspace CONTEXT §18 forbids building many similar SEO pages before the first is validated.
> Do not batch-generate the other niches, however easy the template makes it.
>
> **Gate:** page renders in all three locales; CTA emits `?niche=premium-colorist&…`;
> `pnpm verify:niches` passes; ≥60% unique vs the homepage; end-to-end click through to the app shows
> the colorist template preselected and first in the onboarding list.

---

## P8 — Pricing page (Phase LP8)

> Load marketing **`pricing`**, **`offers`**, **`copy-editing`**, then **`cro`**.
>
> **The constraint that shapes everything:** there is no billing system in the app — no Stripe, no
> subscriptions, no trials. The $19/$29/$49 figures are a hypothesis, not a live price list. The
> project's own precedent is `docs/releases/ob13-market-price-provenance.md`, where the app kept the
> market price catalog **empty** rather than publish invented numbers. Do the same here.
>
> First create `docs/commercial-policy.md`: each publishable commercial fact needs an owner, approval
> date and source. Then build `/pricing` per LP8.2 using **only** facts recorded there. Do not say
> “full product”; name current capabilities. Do not publish an unapproved beta duration, price lock,
> scarcity claim or future tier. “Indicative” is not a substitute for owner approval. Do not claim
> data export or say closing a tab cancels anything.
>
> USD only. Region detection may show *"shown in USD; your market: PL (PLN)"* as a hint but must never
> invent a local price.
>
> **Scarcity only if true.** If founding seats are genuinely capped, state the real number and date.
> If not, no countdown and no "limited spots" — this audience can see the product is pre-launch.
>
> Repoint the header "Pricing" link from the `#pricing` anchor to `/pricing`.
>
> **Gate:** no number, duration, lock or scarcity statement lacks a source, correct status and dated
> owner approval. Unapproved facts are omitted, not softened.

---

## P8b — Legal pages and the app handoff (Phase LP8b)

> Load marketing **`signup`**, **`copy-editing`** and repo-local **`codebase-design`**, **`tdd`**.
>
> Read `.cursor/plans/legal_pages_and_cross_domain_handoff_20260725.md` in full first. Build **only
> the landing half** — §3. The app-side changes in §4 are cross-repo item A9 and are out of scope;
> do not touch `/Users/valery/Sites/beauty-finance`.
>
> Deliver:
> 1. `app/[locale]/terms/page.tsx` and `app/[locale]/privacy/page.tsx`, static across all locales,
>    with the site header and footer so the user can see they are still on `perelai.com`.
> 2. Structured stub content per §3.4 for development/staging — real section headings, a visible draft banner, a working
>    contact address, a `Last updated` date. **Do not write a page whose body is the word
>    "placeholder"** — these pages are linked directly from a form that collects an email address.
>    Public deployment/signups are blocked until dated owner/legal-approved final text replaces the
>    stubs in every published locale. You are not authorized to approve legal prose.
> 3. `components/legal/return-to-app.tsx`. The `from` parameter is validated against the literal set
>    `{login, register, forgot}`; the destination is **always** built from `NEXT_PUBLIC_APP_URL` plus a
>    fixed path map, reusing `buildAppSignupUrl` from `lib/urls.ts` for `register`.
>    **No URL from the query string may ever become an `href`** — that would be an open redirect on a
>    page linked from a signup form. An unknown `from` renders no button; it does not guess.
> 4. Suppress attribution capture in `lib/attribution.ts` when `from` is present, so a reader arriving
>    from the app is not re-attributed as a self-referral.
> 5. Add `terms` and `privacy` to `RESERVED_SLUGS`.
> 6. Repoint the two footer `href="#"` links at the real pages in the current locale.
> 7. Canonical URLs with **no** query string; sitemap priority `0.3`; `WebPage` schema only.
> 8. Fire `legal_viewed` and `legal_return_clicked`.
>    Use LP3's typed analytics adapter; do not import a vendor SDK.
>
> **Gate:** automated tests for the two tamper cases — `?from=https://evil.example` renders no button
> and triggers no redirect; `?from=register&niche=colorist` produces a register URL with **no** `niche`
> parameter. Then walk the 10-step round-trip table in §5 and report pass/fail per row.

---

## P9 — SEO surface (Phase LP9)

> Load marketing **`seo-audit`**, **`schema`**, **`ai-seo`** and repo-local
> **`codebase-design`**, **`tdd`**.
>
> Implement plan §LP9 in full: `app/sitemap.ts` (every published locale × page with
> `alternates.languages`),
> `app/robots.ts` (allow all including GPTBot / ClaudeBot / PerplexityBot; reference the sitemap),
> self-referencing canonicals, one trailing-slash policy enforced by redirect, unique per-page
> `title` ≤60 and `description` ≤155 sourced from the content model.
>
> Use colocated App Router `opengraph-image.tsx` / `twitter-image.tsx` and
> `generateImageMetadata`; inputs are deterministic so variants can be generated/cached statically.
> Include per-locale `og:locale` and `og:locale:alternate`.
>
> JSON-LD per the corrected table in §LP9.3. Do not emit `FAQPage`. Keep visible FAQs for users.
> Treat `SoftwareApplication` as semantic markup only while there is no real offer and customer
> review/rating; do not promise Google eligibility. **Omit `Offer` while prices are indicative** —
> marking up a price that is not chargeable is exactly the kind of claim this project has ruled out.
> Do not mark up content that is not visible on the page.
>
> Add `/llms.txt` and `/pricing.md` per the `ai-seo` skill, generated from the same sources as the
> pages — never hand-maintained in parallel. `llms.txt` is optional discovery metadata; do not claim
> it improves Google rankings.
>
> **Gate:** sitemap validates and lists every live URL × published locale; Schema.org validation
> passes for every block; Google's Rich Results Test is required only for a type that meets its
> required properties; OG image renders per published locale; Lighthouse SEO = 100.

---

## P10 — Analytics (Phase LP10)

> Load marketing **`analytics`** and repo-local **`codebase-design`**, **`tdd`**.
>
> Implement plan §LP10 behind LP3's typed `lib/analytics.ts` adapter. Prefer a minimized
> configuration, but do not infer “cookieless = no consent”. In `docs/tracking-plan.md`, document
> storage, identifiers, hosting, retention and enabled features plus the owner/legal consent/privacy
> decision. Session replay, click IDs and full referrers stay off until that decision approves them.
>
> Implement the seven events in §LP10.2 with exactly those names. The first four are already specified
> in the workspace CONTEXT — do not rename them.
>
> **Never send** names, emails, phone numbers, free text, or full referrer URLs with query strings.
> The landing has no forms; keep it that way.
>
> Write `docs/tracking-plan.md` documenting every event, its trigger, its properties, and the
> cross-domain join described in §LP10.3 (`acquisitionNiche` + `acquisitionCampaign` +
> `acquisitionLandingPath` on `Company`, readable via the app's existing
> `apps/api/src/scripts/onboarding-report.ts`).
>
> Distinguish the two `pricing_viewed` triggers with
> `surface: 'page'|'section'` and deduplicate per surface.
>
> **Gate:** each event fires once per trigger/surface; zero PII; `signup_started` properties match the
> destination URL; the tracking plan records the decision; unapproved replay/click-ID features are
> off.

---

## P11 — Wave 1b (Phase LP11) — one prompt per niche

> Load marketing **`customer-research`**, **`copywriting`**, **`copy-editing`**,
> **`programmatic-seo`**, **`cro`**, **`site-architecture`**, and repo-local
> **`design-taste-frontend`**, **`tdd`**.
>
> Before starting, confirm the Wave 1a gate in plan §LP11.1 has passed. If the colorist page is not
> directionally outperforming the homepage with uncertainty shown, **stop and fix that page
> instead**. Do not call a ≥200-session observational comparison statistically significant.
>
> Build the niche page for **`{{TEMPLATE_ID}}`** at **`{{PATH}}`** emitting `niche={{SLUG}}`.
> Take these three values from `niche-catalog.md` §5 — do not infer them.
>
> 1. Fresh `customer-research` pass: source URL/date/kind/excerpt/theme plus 10–15 verbatims **for
>    this niche specifically**. Do not reuse colorist research.
> 2. Terminology table built from **this template's** `services` / `addons` / `expenses` in
>    `data/niche-catalog.generated.json`.
> 3. If the catalog shows `requiresStaff: true` for this template, the page speaks to **owners with a
>    team**, not solo pros, and the setup section shows **4** steps, not 3.
> 4. Run `scripts/check-uniqueness.mjs` against the homepage **and every existing niche page**. Fail
>    above 40% overlap. If you fail, rewrite the body — do not paraphrase to game the checker.
> 5. Add the page to the homepage niche router, the footer, the sitemap and the `hreflang` sets. No
>    orphan pages.
>
> **Gate:** uniqueness green; `pnpm verify:niches` green; page indexed-ready (canonical, OG, JSON-LD);
> CTA emits the correct slug.

---

## P12 — Experimentation readiness (Phase LP12)

> Load **`ab-testing`**, **`signup`**, **`onboarding`**.
>
> **Do not set up A/B tests yet.** Do not use a universal “1,000 sessions” threshold. Calculate each
> experiment from baseline conversion, MDE, alpha and power. Until a page can reach that sample:
>
> 1. Specify session recordings and scroll maps only if the LP10 privacy decision and any required
>    consent cover them; otherwise leave them off and record the blocker. Treat them as qualitative.
> 2. Write `docs/experiment-backlog.md` with ICE-scored hypotheses — start from the five in plan
>    §LP12.2 and add your own from the recordings. For each: hypothesis in the `ab-testing` skill's
>    structure, primary metric `signup_started`, guardrail = the app's `onboarding_completed` rate for
>    that niche, and the sample size required at the current conversion rate.
> 3. Write `docs/decision-log.md` for pre-volume copy iterations: a fixed 2-week observation window per
>    change, explicitly labelled as a decision log and **not** as a statistical result.
> 4. State the calculated sample/traffic threshold for each proposed test and which page can reach it.
>
> Tell me plainly which of the five hypotheses you would run first once volume exists, and why.

---

## R1 — Reusable: translate a page into a new locale

> Load marketing **`copy-editing`**.
>
> You are translating existing landing copy, not writing new copy.
>
> Source of truth is the **English** version. Translate `messages/en/{{NAMESPACE}}.json` and
> `content/niches/{{SLUG}}/en.ts` into `{{LOCALE}}`.
>
> Rules:
> - Marketing headlines are **transcreated**, not translated. A literal translation of an English
>   headline is usually worse than a native line making the same argument. Give me two options for the
>   H1 with a back-translation of each.
> - Domain terms must match the app's existing translations. Read
>   `/Users/valery/Sites/beauty-finance/apps/web/public/locales/{{LOCALE}}/common.json` and reuse its
>   wording for Visit, Order, Package, Instalment, Client, Staff. The landing and the app must not use
>   two different words for the same object.
> - Respect `messaging-and-claims.md` §4.2 (terms to avoid) in the target language.
> - Never translate a banned claim into existence — if a line was cut in English, it stays cut.
> - Keep every interpolation placeholder and every Markdown/JSX structure intact.
> - Flag anything you could not translate confidently rather than guessing.
>
> **Do not ship a partially translated locale.** If any string is missing, report it and stop.
> Only after all live pages, metadata, OG alt text, legal final text and navigation strings pass human
> review may you add `{{LOCALE}}` to `PUBLISHED_LOCALES`.

---

## R2 — Reusable: pre-ship copy audit

> Load **`copy-editing`**.
>
> Audit `{{FILE_OR_PAGE}}` against `messaging-and-claims.md`. Report as a table:
>
> | Line | Claim | Verdict | Source or fix |
> |---|---|---|---|
>
> Verdicts: **OK** (traceable to §2 with the source path), **UNSOURCED** (plausible but no code
> backing — needs a source or removal), **BANNED** (in §4.1 or §4.3 — must go), **DRIFT** (uses a term
> from the avoid column in §4.2).
>
> Then apply the fixes for BANNED and DRIFT, list UNSOURCED for me to decide, and re-run the grep from
> plan §LP0.5.
>
> Also check: no exclamation points; no "streamline / optimize / innovative / seamless / leverage /
> empower / effortlessly"; every statistic has a source; every mock data screenshot carries an
> `Example data` caption.

---

## R3 — Reusable: verify the end-to-end handoff

> No additional skills. This is a manual verification you run after any change to `lib/urls.ts`,
> `config/niche-pages.ts`, or a niche page's CTA.
>
> 1. Start the app: in `/Users/valery/Sites/beauty-finance`, `npx nx serve web` and `npx nx serve api`.
> 2. Set `NEXT_PUBLIC_APP_URL=http://localhost:4200` in the landing's `.env.local` and `pnpm dev`.
> 3. For each live niche page: open it, click the primary CTA, and record the resulting URL.
> 4. Assert the URL has `niche`, `utm_source`, `utm_campaign`, `landing_path`, and the expected `lng`;
>    that `landing_path` has no locale prefix; and that no acquisition value exceeds its limit
>    (80 / 80 / 120 / 240).
> 5. Complete registration and confirm onboarding shows: the recommended card ("Recommended for you"),
>    the correct template preselected, and that template first in the list.
> 6. In the API, run `apps/api/src/scripts/onboarding-report.ts` and confirm the signup is grouped
>    under the expected `acquisitionNiche`.
> 7. If app item A9 is implemented, walk the Terms/Privacy round trip from both register and login:
>    locale and allowlisted acquisition parameters survive, unknown `from` and injected URL/niche
>    values do not.
>
> Report a pass/fail table per niche page. Any failure blocks the release.

---

## W2 — Wave 2 niche page — one prompt per niche

> Load marketing **`customer-research`**, **`copywriting`**, **`copy-editing`**,
> **`programmatic-seo`**, **`cro`**, **`site-architecture`**, and repo-local
> **`design-taste-frontend`**, **`tdd`**.
>
> First verify with dated evidence that LP12.3's entry gate passed: Wave 1b has been stable for at
> least four weeks and at least two niches directionally beat the homepage baseline with uncertainty
> reported. If evidence is absent, do not enable or route this page; report the missing evidence.
>
> Build exactly one Wave 2 page for **`{{TEMPLATE_ID}}`** at **`{{PATH}}`**, emitting
> **`niche={{SLUG}}`**. Take all three values from `niche-catalog.md` §6. Do not infer, add or alter a
> slug. `/for-lawyers` is forbidden until the app has a dedicated legal template; the existing
> `legal` slug resolves to Consulting.
>
> Follow the full P11 workflow: sourced niche-specific research; content-as-data in every currently
> published locale; terminology and mocks from this template's generated services/items, add-ons and
> expenses; `requiresStaff` and booking-mode semantics from generated data; ≤40% text overlap against
> homepage and every sibling; localized aliases; router/footer/sitemap/hreflang links; correct CTA
> locale and acquisition handoff. Do not enable another Wave 2 entry.
>
> **Gate:** recorded LP12.3 evidence; human-reviewed complete translations; uniqueness and
> `verify:niches` green; canonical/OG/schema valid; R2 and R3 pass; no orphan route.

---

## W3 — Wave 3 mode family — one prompt per family

> Load marketing **`customer-research`**, **`copywriting`**, **`copy-editing`**,
> **`programmatic-seo`**, **`cro`**, **`site-architecture`**, and repo-local
> **`design-taste-frontend`**, **`tdd`**.
>
> Read `.cursor/plans/wave3_request_order_rental_niches_20260725.md` in full. Execute exactly one
> family: **`{{FAMILY}}`** where allowed values are `3a-request`, `3b-order`, `3c-rental`. Do not
> treat these as APPOINTMENT copy variants: REQUEST creates an enquiry/brief, ORDER records an item
> and quantity with no intake payment, and RENTAL reserves a period.
>
> Before enabling anything, create a dated gate-evidence table:
>
> - prior-wave stability and end-to-end attributed signup evidence;
> - deployed API flag **and rebuilt Vite bundle flag** for the family;
> - a synthetic tenant completes the exact public intake flow end to end;
> - for ORDER: A10 price-readiness and A13 default-disabled template activation are both shipped and
>   verified; without either, stop 3b;
> - for RENTAL: strict inventory production status and the honest consequence for overlap claims;
> - `airbnb` is absent from every emitted URL.
>
> If any gate is missing, do not set `enabled: true`, do not add public routes, and report the exact
> blocker. Safe research/content drafting may continue only behind disabled registry entries.
>
> For an unblocked family, build only the fixed inventory in wave3 §2. Perform separate sourced
> research per niche, derive terminology/mocks from generated catalog data, enforce the family copy
> bans, produce complete human-reviewed published locales, test localized aliases, run uniqueness
> against all live pages, and add non-orphan router/footer/sitemap/hreflang links. Measure ORDER
> against onboarding completion and first successful public order; do not optimize only CTA clicks.
>
> **Gate:** every entry item for the family has dated evidence; production modes and template
> activation are truthful; `verify:niches`, uniqueness, R2 and R3 pass; at least one attributed real
> family signup completes the promised intake flow.

---

## R4 — Final release / Definition-of-Done audit

> Load marketing **`copy-editing`**, **`seo-audit`**, **`schema`**, **`analytics`** and repo-local
> **`codebase-design`**, **`tdd`**. This is an audit-and-fix prompt, not permission to expand scope or
> modify `/Users/valery/Sites/beauty-finance`.
>
> Audit every checkbox in plan §13 and every blocker in
> `01_plan_integrity_review_20260729.md` §5. Produce `docs/release-evidence.md` with one row per
> requirement: `requirement | evidence/command | result | owner | date | blocker`.
>
> Required checks:
>
> 1. Clean `pnpm typecheck`, `pnpm lint`, tests, `pnpm verify:niches`, uniqueness checks and
>    `pnpm build`, including an absent-sibling verifier run that still catches a corrupted fixture.
> 2. All published locales complete and human-reviewed; unpublished locale paths never render an
>    English fallback; reciprocal canonicals/hreflang, sitemap and localized aliases pass.
> 3. R2 claim audit on every live page; commercial claims match dated approvals; one real screenshot
>    is synthetic/PII-free and every illustrative mock is labelled and traceable.
> 4. Dated owner/legal approval for final Terms/Privacy in every published locale. A draft/stub is an
>    automatic **BLOCKED**, including for organic public signup traffic.
> 5. Schema.org validation, eligible-only Google rich-result checks, OG/Twitter variants and
>    Lighthouse gates. No `FAQPage`; no unqualified `Offer`; no ranking promise for `llms.txt`.
> 6. Analytics event deduplication, zero PII, recorded privacy/consent decision, replay/click IDs off
>    unless approved, and the landing → app onboarding-report join.
> 7. R3 end-to-end table for every live niche/locale, including `lng`; verify production flag and
>    app-side activation evidence for every live non-APPOINTMENT page.
> 8. No orphan/dead links, `href="#"`, stale v0 assets, per-niche screenshot explosion or unexpected
>    region-dependent SSG HTML.
>
> Fix only landing defects supported by the reviewed plan, then rerun affected gates. Do not mark a
> row PASS from intention or documentation alone. End with a single verdict: **READY** only if every
> required row passes; otherwise **BLOCKED** followed by the smallest exact blocker list.

---

## Intentionally no HOLD-LEGAL executor

`aesthetic_clinic` and `advanced_skincare` remain disabled until written compliance approval exists.
There is deliberately no copy/paste implementation prompt: a smaller LLM must not turn a missing
human/legal decision into persuasive medical-services copy.
