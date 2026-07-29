# Architecture Review — Perelai Landing ↔ App ↔ Shared Core

> **2026-07-29 update:** use
> [`01_plan_integrity_review_20260729.md`](01_plan_integrity_review_20260729.md) for current
> execution-safety conclusions. It supersedes stale framework, app-state, legal-claim and prompt
> coverage guidance here; this document remains the original landing ↔ app contract audit.

**Date:** 2026-07-25
**Scope:** `perelai-workspace/CONTEXT.md`, `perelai-landing/CONTEXT.md`, `beauty-finance/CONTEXT.md`,
verified against the actual source of `beauty-finance` (`libs/core`, `apps/api`, `apps/web`) and
`perelai-landing` (`app/`, `components/landing/`).
**Method:** Per AI rule #1 in all three CONTEXT files — *"Inspect current code before treating planning
documents as current state."* Every claim below was checked against code, not against the docs.
**Output:** This document is the input for
[`niche_landing_i18n_product_relaunch_20260725.plan.md`](niche_landing_i18n_product_relaunch_20260725.plan.md).

---

## 1. Verdict in one paragraph

The **contract between landing and app is well designed and — on the app side — already fully
implemented and tested.** Niche → template recommendation, acquisition attribution, OAuth state
survival, onboarding bootstrap precedence, adaptive steps, terminology profiles and 7-language i18n
all exist in code with unit and integration coverage. The **entire gap is on the landing side**: the
landing is an unmodified marketing template that (a) never builds a signup URL, (b) never passes
acquisition context, (c) has no niche pages, no i18n, no analytics, no SEO surface, and (d) makes
several claims that the product cannot honour and that the project's own content rules explicitly
forbid. Additionally the three `CONTEXT.md` files have **drifted from the code** on the single dataset
the landing depends on most — the template/niche catalog. Building niche pages from the CONTEXT tables
would produce dead slugs. **Fix the drift first, then build the landing.**

Architecture: **sound, keep it.** Landing: **rebuild the content and plumbing, keep the visual
language.** Documentation: **regenerate the catalog section from code.**

---

## 2. What the architecture gets right

| Decision | Why it is correct |
|---|---|
| Landing passes *acquisition context*, never product configuration | Landing cannot corrupt tenant state. A compromised or stale landing can at worst produce a `null` resolution. |
| `resolveNicheOnboardingContext()` returns `null` for unknown slugs | Fail-open on marketing, fail-closed on data. Unknown slug ⇒ generic onboarding, never an arbitrary template. Verified: `libs/core/src/templates/business-template-resolver.ts:50-80`. |
| Niche is a *recommendation*, acquisition niche stored separately from the selected template | Attribution stays honest even when the user changes business type. Verified: `Company.acquisitionNiche` vs `Company.templateId` in `apps/api/src/auth/auth.service.ts:61-74`. |
| Bootstrap precedence puts explicit user choice above marketing input | `apps/web/src/utils/onboardingBootstrap.ts:74-122` implements exactly the documented 5-level precedence. Landing can never override persisted state. |
| Single catalog in `libs/core`, landing forbidden from copying it | Prevents the classic two-sources-of-truth failure. (See §4 — this rule is currently violated *by the CONTEXT docs themselves*.) |
| `Company.publicBookingMode` is runtime authority; template mode is only an onboarding default | ADR-0008. Means marketing copy can never silently change a live tenant's behaviour. |
| Price semantics `null ≠ 0`, empty curated price packs rather than invented numbers | `docs/releases/ob13-market-price-provenance.md`. This honesty contract is the single best precedent for how landing pricing should behave (see §7.4). |
| Fulfilment / debt / payment / allocation kept as separate domains | Stops marketing from claiming "every booking becomes revenue" — which the current landing does claim (§6). |

**Confirmed implemented, contrary to what the landing CONTEXT implies is still open:** the user's
requirement *"the system automatically pulls the right template to first place and preselects it, with
the right terminology in onboarding"* is **already shipped in the app.**

- Promotion to position 0: `getVisibleTemplatesForOnboarding()` → `business-template-resolver.ts:95-113`
- Preselection: `resolveOnboardingBootstrap()` source `acquisition_seed` / `query_niche` → `onboardingBootstrap.ts:98-115`
- Seeding at registration: `getCompanyDataFromNicheContext()` → `auth.service.ts:49-74`
- Recommendation card UI: `components/onboarding/RecommendedTemplateCard.tsx` + `OnboardingBusinessStep.tsx:164-202`
- Terminology: `BusinessTemplateDef.terminologyProfile` drives the i18n namespace (`beauty`, `aesthetic`, `edu`, `coaching`, `fitness`, `freelance`, `pro`, `rental`, `personal`)

⇒ **No app-side work is required to satisfy that requirement.** The landing only has to emit a valid
`niche` slug. This is the highest-leverage fact in this review.

---

## 3. What the landing actually is today

`perelai-landing` is 574 lines across 10 files: one route (`/`), six presentational components, no
lib layer, no tests, no env config, and it is **not a git repository**.

```
app/page.tsx            26 lines   single route, hardcoded English
app/layout.tsx          21 lines   <html lang="en">, no i18n, no OG, no canonical
app/globals.css         44 lines   tokens declared; `@custom-variant dark` declared but unused
components/landing/*   483 lines   6 components, all "use client", all hardcoded copy
```

### 3.1 Defects found by direct inspection

| # | Severity | File | Defect |
|---|---|---|---|
| L1 | **Blocker** | `landing-header.tsx:12`, `landing-footer.tsx:28` | Logo links to `/landing` — a route that does not exist. Every logo click 404s. |
| L2 | **Blocker** | `landing-hero.tsx:64`, `landing-header.tsx:35,41`, `landing-cta.tsx:30` | All four conversion CTAs link to `/`. The funnel has no exit into the app. Zero signups are possible today. |
| L3 | **Blocker** | `landing-hero.tsx:67`, `landing-cta.tsx:37` | "Start 14-day free trial" / "No credit card required · 14-day free trial". **There is no billing, no trial and no subscription system in the API** (no Stripe/billing module anywhere in `apps/api/src`). This is a promise the product cannot keep. |
| L4 | **High** | `landing-features.tsx:92` | "+38% repeat bookings on average" — fabricated statistic. No source; violates copywriting rule *"Honest over sensational"* and creates legal exposure. |
| L5 | **High** | `landing-features.tsx:30` | "Every booking automatically becomes revenue." Directly contradicts the financial invariant that fulfilment and payment are separate domains (workspace CONTEXT §10). |
| L6 | **High** | `layout.tsx:6`, `page.tsx:10`, `landing-footer.tsx:35`, `landing-hero.tsx:52` | "personal CFO" appears four times. Explicitly on the **do-not-use-as-main-hero** list in workspace CONTEXT §16 and landing CONTEXT §9. |
| L7 | **High** | `landing-hero.tsx:53` | "Save thousands on marketplace fees" — unverifiable savings claim; also mis-positions against marketplaces the ICP may not use. |
| L8 | **Medium** | `next.config.mjs:3-5` | `typescript.ignoreBuildErrors: true`. Type errors ship silently. Unacceptable once a URL builder with validation exists. |
| L9 | **Medium** | `landing-hero.tsx:96`, `landing-how-it-works.tsx:77` | Raw `<img>` + `images.unoptimized: true`. No responsive sources, no LCP priority, no width/height ⇒ CLS. Directly costs Core Web Vitals on the money page. |
| L10 | **Medium** | `landing-footer.tsx:46` | 11 footer links are all `href="#"`. Dead nav, no internal linking, and it advertises pages (Blog, Careers, Changelog, Help Center) that do not exist. |
| L11 | **Medium** | `landing-cta.tsx:9` | `#pricing` anchor resolves to the closing CTA banner. Header "Pricing" leads to a section with no prices. |
| L12 | **Medium** | `globals.css:4` | `@custom-variant dark` declared, zero dark styles written, `<html>` has no theme class. Workspace CONTEXT §14 requires light **and** dark. |
| L13 | **Medium** | all components | Every component is `"use client"` including purely static ones. Ships Framer Motion to the client for content that never animates conditionally. |
| L14 | **Low** | — | No `sitemap.ts`, `robots.ts`, canonical, OG image, JSON-LD, `manifest`. Site is invisible to search and shares as a bare link. |
| L15 | **Low** | — | No `.env`, no `NEXT_PUBLIC_APP_URL`. App URLs would be hardcoded at first use. |
| L16 | **Low** | — | Not a git repo ⇒ no rollback for the work ahead. |
| L17 | **High** | `public/icon.svg`, `public/apple-icon.png`, `public/icon-*-32x32.png` | The icon assets are **v0 / Vercel template branding**, not Perelai — a black tile with the `v0` wordmark. They also sit in `public/` rather than `app/`, so App Router never picks them up, and `layout.tsx` declares no `icons` — the site currently ships **no favicon at all**. *Partially resolved 2026-07-25, see below.* |
| L18 | **Medium** | `landing-header.tsx:13`, `landing-footer.tsx:29` | The "logo" is a generic `Sparkles` lucide icon in a gradient box — template filler, not the Perelai mark. |
| L19 | **Medium** | `app/` | No `/terms` or `/privacy`. The app links to its own in-app placeholders, so the legal text has two homes and neither is canonical. See [`legal_pages_and_cross_domain_handoff_20260725.md`](legal_pages_and_cross_domain_handoff_20260725.md). |

**Brand assets copied in (2026-07-25):** the real Perelai mark — violet rounded tile with the white
`P` monogram — from `beauty-finance/apps/web/public/`:
`app/favicon.ico` (32), `app/icon.png` (192), `app/apple-icon.png` (180), plus
`public/brand/perelai-icon-{1024,512,192}.png` and `perelai-mark-64.png`. Both products now ship the
same icon. Remaining work sits in **LP1.2**: delete the v0 placeholders (after `git init` makes it
reversible), swap the `Sparkles` logo for `perelai-mark-64.png`, run the PNGs through an optimizer,
and request an SVG master from design — none exists in either repo.

### 3.2 What is worth keeping

The visual system is good and on-brand: violet `#6a4cff` gradient CTAs, soft radial glows, `rounded-[24px]`
cards, `backdrop-blur-xl` glass header, restrained shadows, `Reveal` scroll animation. It matches the
"landing is more expressive than app" direction in workspace CONTEXT §14. **Keep the design language;
replace the copy, the routing and the plumbing.**

---

## 4. Documentation drift — the catalog is wrong in all three CONTEXT files

This is the most consequential finding, because niche landing pages are generated *from* this table.
The CONTEXT tables list template IDs, groups, booking modes and visibility that **do not match
`libs/core/src/templates/business-templates-catalog.ts`.**

### 4.1 Template IDs that do not exist in code

| CONTEXT.md says | Code actually has | Note |
|---|---|---|
| `massage_therapist` | `massage` | |
| `esthetician` | `advanced_skincare` | CONTEXT confused a **niche slug** with a **template ID** — `esthetician` is a slug of `advanced_skincare`. |
| `private_tutor` | `tutor` | |
| `business_coach` | `coach` | |
| `yoga_studio` | `yoga_instructor` | |
| `consultant` | `consulting` | |
| `accountant` | `accounting` | Again slug↔ID confusion — `accountant` is a slug. |
| `trades_handyman` | `handyman` | |
| `coworking_studio` | `coworking` | |
| `storage_facility` | `storage_unit` | |

### 4.2 Booking modes that are wrong

| Template | CONTEXT says | Code says | Consequence if trusted |
|---|---|---|---|
| `consulting` | REQUEST | **APPOINTMENT** | Landing would promise the wrong intake flow. |
| `accounting` | REQUEST | **APPOINTMENT** | idem |
| `photographer` | REQUEST | **APPOINTMENT** | idem |
| `content_creator` | REQUEST | **ORDER** | idem |

### 4.3 Groups that are wrong

CONTEXT files put `consultant`, `accountant`, `photographer`, `trades_handyman`, `marketing_agency`,
`it_services` in a **"Freelance group"**. In code these are group `pro` (*Professional Services*).
Group `freelance` contains only `freelance_designer` and `content_creator`. There are **six** groups in
code (`beauty`, `freelance`, `pro`, `edu`, `rent`, `personal`), not the four the CONTEXT tables imply.

### 4.4 Visibility that is wrong

CONTEXT marks the whole `edu`/`freelance`/`rental` blocks as `BETA` and most beauty templates as
`ACTIVE`. In code: **9** templates are `FEATURED` (incl. `tutor` and `coach`), **17** are `ACTIVE`,
only the 6 rental templates are `BETA`, and 2 are `HIDDEN`. Visibility drives ordering in the
onboarding picker, so the marketing "which niches are ready" decision was being made from wrong data.

### 4.5 Count

CONTEXT tables list 32 templates. Code has **34** (32 non-`HIDDEN` + `personal_budget`, `family_budget`
which are `HIDDEN` and carry **no niche slugs** — they can never be reached from a landing page).

### 4.6 The specific slug that would have broken the first niche page

`perelai-landing/CONTEXT.md` §11 states:

> Current valid slugs for the first niche: `premium-colorist`, `independent-colorist`, `hair-colorist`, `colorist`

`colorist` **is not in the catalog.** `independent_colorist.nicheSlugs = ['premium-colorist',
'independent-colorist', 'hair-colorist']`. A CTA built with `?niche=colorist` resolves to `null` ⇒ no
recommendation, no preselected template, no attribution row — a silent, invisible conversion leak on
the flagship page. This is exactly the failure mode the plan's drift guard (§Phase LP2) exists to prevent.

### 4.7 Ruling

**Authoritative source = `libs/core/src/templates/business-templates-catalog.ts`. Nothing else.**
The verified catalog is transcribed in [`reference/niche-catalog.md`](reference/niche-catalog.md) and
must be regenerated from code, never hand-edited. The three `CONTEXT.md` catalog sections should be
corrected in a separate, app-repo task (listed in §9).

---

## 5. Contract details the CONTEXT files omit and the landing must honour

Verified in `apps/web/src/utils/nicheOnboardingContext.ts` and `libs/core/src/zod/schemas.ts:726-729`.

### 5.1 Exact validation limits

```ts
niche:       z.string().trim().min(1).max(80)    // REQUIRED — no niche ⇒ whole context dropped
source:      z.string().trim().max(80).optional()
campaign:    z.string().trim().max(120).optional()
landingPath: z.string().trim().max(240).optional()
```

`NicheOnboardingContextSchema.safeParse` is **all-or-nothing**: one over-length field ⇒ the entire
context is discarded, including the niche. A 250-character `landing_path` (easy with long UTM-laden
paths) silently kills template preselection. The landing's URL builder must clamp before emitting.

### 5.2 Parameter aliases

The app accepts **both** forms and prefers the short one:

| App reads first | Then falls back to |
|---|---|
| `source` | `utm_source` |
| `campaign` | `utm_campaign` |
| `landingPath` | `landing_path` |

Emitting the `utm_*` form (as workspace CONTEXT §4 documents) is correct and additionally feeds GA4
on the app domain.

### 5.3 Parameters the app silently drops

`utm_medium`, `utm_content`, `utm_term`, `gclid`, `fbclid`, `msclkid`, `ttclid` are **not read** by
`parseNicheOnboardingQuery` and are **not persisted** on `Company`. Any paid-channel analysis that
depends on them must be done on the landing side or in the analytics tool — never assume they reach
the app database. This is a real gap for paid acquisition and is called out as a cross-repo follow-up.

### 5.4 The niche slug is user-visible copy

`OnboardingBusinessStep.tsx:167` uses the raw slug as the label:

```ts
const nicheLabel = recommendation?.nicheSlug ?? nicheSlugForPicker ?? t('onboarding.recommended_your_niche');
```

rendered through `en/common.json:595` → `"recommended_reason": "Based on your interest in {{niche}}"`.

A user arriving from `/for-independent-colorists` literally reads **"Based on your interest in
premium-colorist"** in the app. Slug choice is therefore a *copy* decision, not just a routing one.
Two consequences: (a) prefer slugs that read acceptably in English when interpolated, (b) the proper
fix — `templates.niche.<slug>.label` i18n keys — belongs to the app repo (§9).

### 5.5 Registration seeds booking mode from the template

`getCompanyDataFromNicheContext()` (`auth.service.ts:49-74`) does **not** only store attribution — it
also writes `publicBookingMode`, `publicBookingEnabled`, `publicBookingRequiresStaff`,
`publicBookingAllowAddons` from the resolved template's `bookingConfig`. A niche page therefore
determines the new tenant's public intake mode. See §7.1 for why this gates the rollout.

### 5.6 Registration requires email verification

`AuthRegisterResult = { verificationRequired: true, message }`. The user does **not** land in the app
after submitting the form; they land in a "check your inbox" state. The landing's CTA copy and the
post-click expectation must reflect this, or the drop-off between `signup_started` and
`onboarding_started` will look like a landing problem when it is an inbox problem.

---

## 6. Message-vs-product conflicts (what must be deleted from the landing)

Cross-checked against workspace CONTEXT §10, §16, §17 and against what exists in `apps/api/src`.

| Current landing claim | Status | Why |
|---|---|---|
| "personal CFO" ×4 | **Delete** | Explicitly forbidden as main positioning. |
| "14-day free trial", "No credit card required" | **Delete** | No billing/trial system exists in the API. |
| "+38% repeat bookings on average" | **Delete** | Fabricated. No such measurement exists. |
| "Every booking automatically becomes revenue" | **Delete** | Violates payment/fulfilment separation. |
| "Save thousands on marketplace fees" | **Delete** | Unverifiable; no comparative data. |
| "Zero-commission bookings" | **Rewrite** | True in substance (no take rate) but must be stated as a fact about Perelai, not as savings vs a named competitor. |
| "One-Swipe Finances" | **Rewrite** | The real mechanic is Inbox triage → record payment. Renaming it hides the actual differentiator. |
| "+$1,240 today", "Balayage — Mia" mock rows | **Keep, label** | Fine as an illustrative UI mock; must be visually marked as an example, not a customer result. |

Additionally **not shippable** because the underlying work is planned but not implemented (all
`todos: pending` in `beauty-finance/.cursor/plans/`): AI/NLP magic input, smart insights, broadcasts,
cohorts/RFM/churn prediction (`intelligence_core_analytics_marketing_nlp_20260717.plan.md`), and file
attachments (`file_storage_media_attachments_20260620.plan.md`). The honest, code-backed feature
inventory is in [`reference/messaging-and-claims.md`](reference/messaging-and-claims.md).

---

## 7. Risks that shape the plan

### 7.1 Booking-mode rollout flags sequence the niche rollout

`apps/web/src/utils/publicBookingFeatureFlags.ts` + `apps/api/.env.example:28-42`.

All four modes are *implemented* (`IMPLEMENTED_PUBLIC_MODES` is all-`true`). `APPOINTMENT` is always
on; REQUEST / ORDER / RENTAL are behind paired flags — an API-side gate protecting direct `POST`s and a
`VITE_` gate controlling whether the public page renders the flow.

**Update (2026-07-25):** all three have been flipped to `true` in `.env.example` and the local `.env`.
`PUBLIC_RENTAL_INVENTORY_ENABLED` is a separate, stricter gate whose `VITE_` mirror remains `false`.

This changes the sequencing but not the constraint. `.env.example` is not production, and the `VITE_`
flags only take effect after the web bundle is rebuilt. Combined with §5.5 — registration seeds
`publicBookingMode` and `publicBookingEnabled` from the resolved template — **a niche page for a mode
that is off in the deployed environment creates tenants whose public intake is dark.**

⇒ Waves 1 and 2 stay APPOINTMENT-only, because APPOINTMENT is the regression baseline and needs no
verification. Non-appointment niches move from *blocked* to *sequenced*: they ship after the
APPOINTMENT waves, against a production-verified flag recorded in `config/niche-pages.ts` and enforced
by the LP2 drift guard. Full treatment in
[`wave3_request_order_rental_niches_20260725.md`](wave3_request_order_rental_niches_20260725.md).

One further constraint surfaced while writing that document:
`public-booking.service.ts:1881-1883` rejects any public ORDER submission where a service or add-on
price is `null` (`ORDER_PRICE_REQUIRED`), and the curated price catalog is deliberately empty — so
every fresh ORDER tenant starts broken until they set prices. That is an activation blocker specific
to the two ORDER niches, not a landing bug, and is filed as cross-repo item A10.

### 7.2 Regulated verticals

`aesthetic_clinic` and `advanced_skincare` carry `bookingConfig.regulated: true`, and workspace
CONTEXT §17 forbids HIPAA/clinical/diagnosis claims without a compliance strategy. `aesthetic_clinic`
is `FEATURED` and marketing-priority 2 — it looks like an obvious Wave 1 page and must be **held for
legal review** instead.

### 7.3 Two repos, one dataset, no shared dependency

The landing cannot import `@beauty-finance/core` (separate repo, separate deploy). Any niche registry
in the landing is a copy — and §4 proves copies drift within weeks. A mechanical drift guard is not
optional; it is the load-bearing control of this whole design.

### 7.4 Pricing has no implementation behind it

No Stripe, no plan entitlement, no billing tables. The $19/$29/$49 figures in the CONTEXT files are a
*hypothesis*. Publishing them as a live price list repeats the L3 mistake at a larger scale. The
project already has the right precedent for this exact situation: OB13 kept `TEMPLATE_PRICE_PACKS`
**empty** rather than fabricate market prices. The landing pricing page must follow the same rule —
state the Founding Beta offer and what actually happens on signup, and label future pricing as
indicative.

### 7.5 Language ≠ market

The app supports 7 UI languages (`en, uk, pl, ru, es, fr, de` — `apps/web/src/config/localization.ts`)
and 10 markets (`US, UA, PL, GB, CA, AU, DE, FR, ES, EU` — `supported-markets.ts`). These are different
axes: `en` serves US/GB/CA/AU; `ru` is a language with **no** corresponding market. A naive
"detect country → set language" implementation will mis-serve every English-speaking market outside the
US and will offer `ru` users a currency that does not exist. Language must drive **URL and content**;
region must drive **only presentational currency/example hints**, client-side, never the URL.

### 7.6 The app's i18n approach does not transfer to a marketing site

`PublicBookingPage.tsx` uses `i18next-browser-languagedetector` with order
`['querystring', 'localStorage', 'navigator']` and a `?lng=` override. That is correct for an
authenticated SPA behind a token. For `perelai.com` it would be a **serious SEO defect**: one URL
serving N languages means Google indexes one variant, `hreflang` is impossible, and social previews are
non-deterministic. The *precedence logic* should be reused; the *delivery mechanism* must be
path-based localized routes. This is a deliberate divergence from the referenced example and is
justified below.

---

## 8. Recommended target architecture for the landing

Full implementation detail lives in the plan; this is the decision record.

| Decision | Choice | Rationale |
|---|---|---|
| **Routing** | Next.js App Router with `app/[locale]/…`, `localePrefix: as-needed` — English at root (`/for-independent-colorists`), others prefixed (`/uk/for-independent-colorists`) | Initial GTM is US/English; the highest-value URL should be served with no redirect hop. Non-English gets clean, indexable, shareable URLs. |
| **Language detection** | Next.js 16 root `proxy.ts` negotiates `Accept-Language` **only on un-prefixed entry**, sets `NEXT_LOCALE` cookie, 307. Explicit published-locale paths are never redirected. Bots get exactly the URL they requested. | Avoids cloaking and redirect loops; keeps every localized URL independently crawlable. |
| **Language set** | App contract exactly `en, uk, pl, ru, es, fr, de`; published launch set only complete `en, uk, pl` | A language on the landing that the app cannot render is a broken promise; a partial locale is also a broken promise. |
| **Region detection** | Client-side only, after hydration: `Intl.DateTimeFormat().resolvedOptions().timeZone` → country, then `navigator.language` region subtag, then `US`. Mirrors the app's documented market precedence. Affects currency label and example numbers only. | Keeps pages static and cacheable; region never forks indexable content. |
| **Niche pages** | Flat, documented URLs `/for-<niche>` from a frozen registry, rendered by one catch-all route with `generateStaticParams` + `dynamicParams = false` and a reserved-slug guard | Honours the already-documented `landing_path=/for-independent-colorists` contract and rule #3 (stable public route segments) while still being data-driven. |
| **Uniqueness** | ≥60% of each niche page's body text must be niche-specific: pains, workflow in the niche's own vocabulary, **terminology mapping table**, 5 niche FAQs, mode-specific CTA | pSEO rule: unique value per page. The terminology table is *product-derived proprietary data* — the strongest defensible content type available here. |
| **Catalog source** | `niche-catalog.generated.json`, produced from `libs/core`, committed and locally verified in every CI run. A missing sibling skips only live freshness comparison. | Two repos, one truth. Turns §4-style drift from a silent conversion leak into a failing build. |
| **Signup URL** | `lib/urls.ts::buildAppSignupUrl()` — allowlist, per-field clamping, registry-validated slug, validated `lng` UX hint, runtime fallback after config validation | §5.1: one over-length field discards the entire context; cross-origin locale otherwise gets lost. |
| **Analytics** | Data-minimized provider behind a typed adapter + minimized session attribution; exact consent/privacy posture documented before launch | “Cookieless” alone does not decide consent obligations; replay and click IDs remain off until approved. |
| **Experimentation** | No A/B test until sample size derived from baseline, MDE, alpha and power is reachable. Until then: approved qualitative evidence, directional comparisons and decision-log copy iteration. | Avoids presenting an underpowered observation as a statistical result. |
| **Pricing page** | Founding Beta offer stated honestly; indicative future pricing clearly labelled; USD only until a curated multi-market table exists | Mirrors the OB13 no-fabrication precedent (§7.4). |

---

## 9. Cross-repo follow-ups (NOT part of the landing plan — for the app repo)

These are outside the landing's scope but block or degrade landing outcomes. Recommend filing them as
separate tasks in `beauty-finance`.

| # | Item | Impact | Priority | Status |
|---|---|---|---|---|
| A1 | Regenerate the catalog tables in all three `CONTEXT.md` files from `business-templates-catalog.ts` (§4) | Docs misled every agent that read them | **High** | ✅ **done 2026-07-25** — all three rewritten from code, with group / terminology / mode / visibility / `requiresStaff` / `regulated` columns |
| A2 | Fix `perelai-landing/CONTEXT.md` §11: remove the invalid slug `colorist` (§4.6) | Would have broken the flagship page | **High** | ✅ **done 2026-07-25** — removed, with an explicit warning left in place |
| A3 | Add `templates.niche.<slug>.label` i18n keys so onboarding stops rendering raw slugs (§5.4) | "Based on your interest in premium-colorist" is visible to every niche visitor | **High** | open |
| A4 | Decide and document production values for `PUBLIC_BOOKING_{REQUEST,ORDER,RENTAL}_ENABLED` (§7.1) | Sequences the non-appointment niche pages | **High** | ⚠️ **flipped to `true` in `.env.example` + local `.env` 2026-07-25** — still needs verification against the deployed environment and a rebuilt web bundle; record the result in `config/niche-pages.ts` |
| A5 | Persist `utm_medium` / `utm_content` / `utm_term` / click IDs on `Company`, or document that they are intentionally landing-only (§5.3) | Paid-channel ROI is unattributable end-to-end without this | Medium | open |
| A6 | Legal/compliance review of copy for `regulated: true` templates before any aesthetics niche page (§7.2) | Blocks `aesthetic_clinic` and `advanced_skincare` pages | Medium | open |
| A7 | Confirm whether `short_term_rental`'s `airbnb` slug may appear in a public URL (trademark) | Blocks that Wave 3 page | Low | open |
| A8 | Add a `libs/core` export or generated JSON artifact intended for external consumers, so the landing's drift guard reads a stable contract rather than parsing a TS file | Makes the guard robust to refactors | Low | open |
| A9 | Point `AuthLegalLinks.tsx` at the landing's `/terms` and `/privacy`, with `from` + language + acquisition context, and convert the app's legal routes to redirects | Legal text has two homes today; neither is canonical | **High** | open — spec in [`legal_pages_and_cross_domain_handoff_20260725.md`](legal_pages_and_cross_domain_handoff_20260725.md) §4 |
| A10 | Warn or block when an ORDER-mode company completes the catalog step with `null` prices | `public-booking.service.ts:1881` rejects every public ORDER submission with `ORDER_PRICE_REQUIRED`; the price catalog is deliberately empty, so **every fresh ORDER tenant ships a broken public page** | **High** | open — blocks Wave 3b |
| A11 | Decide whether `airbnb` should remain a niche slug in `libs/core` at all, given it can never be used publicly | Dead slug that invites misuse | Low | open |
| A12 | Expose the production booking-flag values somewhere machine-readable the landing can verify against | Removes the last hand-copied gate from the drift guard | Medium | open |

---

## 10. What the plan does with all this

[`niche_landing_i18n_product_relaunch_20260725.plan.md`](niche_landing_i18n_product_relaunch_20260725.plan.md)
executes in 13 phases (LP0–LP12), each with an explicit gate, written for smaller LLMs:

```
LP0  Baseline, git init, env, honest-copy triage of L1–L16
LP1  Foundations: TS strict, tokens, dark mode, next/image, lib layer
LP2  Niche catalog generation + drift guard  ← load-bearing
LP3  buildAppSignupUrl + attribution carry
LP4  i18n architecture (routing, middleware, dictionaries, hreflang)
LP5  Region detection (currency/examples only)
LP6  Homepage rebuild on the honest feature inventory
LP7  Niche page template + Wave 1a (colorist only)
LP8  Pricing / offer page
LP9  SEO surface: sitemap, robots, canonical, OG, JSON-LD, llms.txt
LP10 Analytics + consent posture
LP11 Validation gate → Wave 1b (7 more APPOINTMENT niches)
LP12 Experimentation readiness + Wave 2 gating
```

Companion documents:

| Document | Purpose | When |
|---|---|---|
| [`legal_pages_and_cross_domain_handoff_20260725.md`](legal_pages_and_cross_domain_handoff_20260725.md) | `/terms` + `/privacy` on the landing, and the app's `AuthLegalLinks` round trip without stranding the user | between LP8 and LP9 |
| [`wave3_request_order_rental_niches_20260725.md`](wave3_request_order_rental_niches_20260725.md) | The 12 REQUEST / ORDER / RENTAL niche pages, sequenced 3a→3b→3c | after LP12.3 |

Supporting references:
- [`reference/niche-catalog.md`](reference/niche-catalog.md) — code-verified catalog, slug↔template↔mode↔wave matrix
- [`reference/messaging-and-claims.md`](reference/messaging-and-claims.md) — shippable feature inventory, banned claims, copy rails
- [`reference/llm-prompts.md`](reference/llm-prompts.md) — copy/paste prompts per phase, mapped to the marketing skills
