# Plan Integrity Review — Landing Relaunch

**Date:** 2026-07-29  
**Scope:** every Markdown file under `.cursor/plans/`, with special attention to
`niche_landing_i18n_product_relaunch_20260725.plan.md` and
`reference/llm-prompts.md`.  
**Context checked:** current `beauty-finance` code, `beauty-finance/CONTEXT.md`,
`onboarding_niche_templates_contacts_booking_modes_20260711.plan.md`,
`v2_migration_architecture_c4f4fcb9.plan.md`, and the three Perelai `CONTEXT.md` files.

This review supersedes the execution-safety conclusions in
[`00_architecture_review_20260725.md`](00_architecture_review_20260725.md) where the installed
framework or current app code has moved since 2026-07-25. The earlier document remains the source for
the original landing ↔ app contract audit.

---

## 1. Verdict

The plan has a strong architectural spine:

- the landing passes acquisition context, never tenant configuration;
- `libs/core` remains the product-data authority;
- niche rollout is staged instead of mass-generated;
- language, market and booking mode are kept as separate axes;
- claims are tied to code-backed product facts;
- public intake modes preserve the app's domain distinctions;
- copy, SEO, analytics and experimentation have explicit gates.

It was **not yet safe to hand unchanged to a smaller LLM**. Several instructions were mutually
exclusive, some framework guidance was stale for the installed Next.js version, three later rollout
deliverables had no centralized prompt, and a few commercial/privacy statements were stronger than
the available product or policy evidence.

The companion edits made with this review keep the architecture and remove those execution traps.

---

## 2. Findings and resolutions

| ID | Sev. | Finding | Resolution in the plan/prompts |
|---|---|---|---|
| I1 | **Blocker** | The repo uses Next.js `16.2.0`, but LP4 requires `middleware.ts`. Next.js 16 renamed the convention to `proxy.ts`; `next-intl` documents the same convention. | LP4 and P4 now require root `proxy.ts`, the `proxy` export, and installed-version docs. |
| I2 | **Blocker** | LP4 says to translate only `en/uk/pl`, says never to ship a partial locale, and then gates on all seven locales being live. Those cannot all be true. | Separate `APP_LOCALES` (all seven, contract/drift check) from `PUBLISHED_LOCALES` (`en/uk/pl` in LP4). Later locales enter only after complete translation review. |
| I3 | **Blocker** | LP1 makes missing public env fail the build, while LP3 tests “missing env → fallback URL, no throw”. Import-time failure prevents that fallback from running. | Missing required env is now a configuration/build error. `buildAppSignupUrl` remains non-throwing for runtime input and URL-construction failures after validated config exists. |
| I4 | **High** | LP6 requires ICP language “from the LP7 research pass”, but LP7 runs after LP6. | `customer-research` moves into LP6 for the homepage. LP7 performs a second, page-specific pass with source provenance. |
| I5 | **Blocker** | `verify:niches` was allowed to warn and exit `0` immediately when the sibling app repo was absent. That also skipped validation against the committed generated JSON, allowing a broken landing-only CI build. | Local registry/generated-data checks always run. Only the live cross-repo freshness comparison is skipped when the sibling repo is absent. |
| I6 | **High** | `NichePage` had no `enabled` field although later waves were described as `enabled: false`. The drift contract also asked the verifier to compare registry fields that the interface did not contain. | Add `enabled: boolean`. Keep code-derived mode/group/terminology/visibility in generated data and derive policy checks from it instead of duplicating them in the registry. |
| I7 | **High** | `generatedAt: now` makes generated artifacts dirty on every run and undermines reproducible checks. | Derive metadata from the source commit (commit SHA + commit timestamp), serialize in stable key order, and do not rewrite unchanged output. |
| I8 | **High** | P3 and P8b fire analytics events before LP10 installs an analytics provider. | LP3 creates a typed, provider-neutral `lib/analytics.ts` no-op adapter. LP10 attaches the chosen provider; earlier call sites never import a vendor SDK. |
| I9 | **High** | The plan called first-touch `sessionStorage` “functional, not tracking” and inferred “cookieless = no consent banner”. That is a legal conclusion the architecture cannot make. | Attribution is minimized to allowlisted marketing fields and referrer hostname. LP10 must record the consent/privacy decision; replay and optional click IDs remain off until approved. |
| I10 | **High** | A localized landing did not preserve language at the handoff to the app. Cross-origin locale cookies cannot do this. The app's installed i18next detector accepts `?lng=`. | `buildAppSignupUrl` accepts a validated landing locale and emits `lng=<locale>` as a UX hint. It is explicitly not acquisition authority. R3 verifies language continuity. |
| I11 | **Blocker (Wave 3b)** | Both current ORDER templates (`course_creator`, `content_creator`) have `bookingConfig.enabled: false`. Registration copies that value to `Company.publicBookingEnabled`. Production mode flags and known prices alone do not make their public order pages live. | Wave 3b now has an additional hard blocker and cross-repo item A13. The verifier rejects enabling a page whose template default is disabled unless an approved app-side activation path exists. |
| I12 | **High** | Commercial risk reversal promised data export, “cancel by closing the tab”, and a locked founding price. No product export was found; closing a tab cancels nothing; the price lock is a policy obligation with no recorded approval. | Remove the first two. Treat free-beta duration, price lock and indicative tiers as commercial facts that require dated owner approval before publication. |
| I13 | **High** | The global template copy said every business type includes services, add-ons, linked costs and realistic durations. Several templates intentionally have empty add-on/expense lists, and non-time-based templates have no duration. | Claims now say every selectable type has an editable service/item list; add-ons, linked costs and durations are included where relevant. |
| I14 | **High** | LP9 expected `FAQPage` Rich Results and a Rich Results pass for `SoftwareApplication` without a real offer or customer review. Google removed FAQ rich results in June 2026, and its Software App result requires an offer plus a review/rating. | Keep FAQ text visible for users, but omit `FAQPage`. Treat `SoftwareApplication` as semantic Schema.org markup only while no eligible offer/review exists; validate it with a schema validator, not as a promised Google rich result. |
| I15 | **Medium** | `app/og/route.tsx` ignored the App Router metadata convention and made the “static surface” less clear. | Use colocated `opengraph-image.tsx` / `twitter-image.tsx` and `generateImageMetadata`; keep inputs deterministic so Next can generate/cache them statically. |
| I16 | **High** | The product-mock dataset was required to be deterministic but its dates were relative to build time. Its accessibility rule also suggested putting an exception inside an `aria-hidden` subtree, which cannot work. | Use a fixed/injected reference instant. Hide decorative mock chrome and render the one semantic summary outside the hidden subtree. |
| I17 | **Medium** | P6 could preserve or create dead footer/header links; the original defect list had eleven `href="#"` links but only Terms/Privacy/Pricing were explicitly repaired. | P6 now renders only routes that exist at that phase. Planned Blog/Careers/Help/Changelog links stay absent until their routes exist. |
| I18 | **Medium** | Alias redirects were specified only as English paths, leaving localized aliases ambiguous. | Generate/test aliases for every published locale, preserving the locale and redirecting permanently to that locale's canonical path. |
| I19 | **Medium** | The Wave 1a decision gate treated “higher conversion over 200 sessions” like a statistical result, while LP12 correctly rejects underpowered A/B tests. The fixed “1,000 sessions per variant” threshold was also not derived from baseline or MDE. | Mark 200-session comparison as directional and show uncertainty. Real experiment sample size is calculated from baseline, MDE, alpha and power. |
| I20 | **High** | Structured legal stubs were called acceptable for public beta even though registration collects email. | Stubs are development-only. Public launch/signups require owner/legal-approved final privacy and terms text; no LLM is authorized to approve legal prose. |
| I21 | **High** | `llm-prompts.md` had no dedicated Wave 2 executor, no centralized Wave 3 executor, and no final Definition-of-Done audit. | Add W2, W3 and R4 prompts. HOLD-LEGAL deliberately has no executor until written compliance approval exists. |

Authoritative framework references:

- [Next.js 16 Proxy convention](https://nextjs.org/docs/app/api-reference/file-conventions/proxy)
- [next-intl Proxy / middleware setup](https://next-intl.dev/docs/routing/middleware)
- [next-intl `localePrefix: 'as-needed'`](https://next-intl.dev/docs/routing/configuration)
- [Next.js generated Open Graph images](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)
- [Google SoftwareApplication requirements](https://developers.google.com/search/docs/appearance/structured-data/software-app)
- [Google's removal of FAQ rich results](https://developers.google.com/search/updates#removing-faq-rich-result)

---

## 3. Prompt coverage after the edits

| Plan scope | Executor prompt | Coverage |
|---|---|---|
| LP0–LP5 | P0–P5 | full |
| LP5b mock kit | P5b | full; detailed spec remains in `product_mock_kit_20260728.md` |
| LP6–LP10 | P6–P10 | full |
| LP11 Wave 1b | P11, one execution per niche | full |
| LP11 locale expansion | R1, one execution per page/locale | full |
| LP12 experimentation readiness | P12 | full |
| LP12.3 Wave 2 | W2, one execution per niche | added |
| LP12.4 Wave 3 | W3, one execution per mode family | added |
| LP12.5 HOLD-LEGAL | no prompt by design | blocked until written compliance approval |
| Cross-domain E2E | R3 | signup + optional legal round trip |
| Final Definition of Done | R4 | added |
| App-repo A-items | no landing prompt | intentionally out of scope |

---

## 4. Skill policy for smaller LLMs

Marketing skills are useful here, but **only phase by phase**. Loading the whole marketing catalog
would spend context on unrelated tactics and make a smaller model more likely to mix incompatible
workflows.

Two skill roots are now explicit in every executor prompt:

```text
Marketing: /Users/valery/.agents/skills/<skill>/SKILL.md
Repo-local: .agents/skills/<skill>/SKILL.md
```

The executor reads each named `SKILL.md` in full before editing. The plan, generated product data and
claim rails outrank generic skill advice.

### Marketing skills that earn their place

| Concern | Skills |
|---|---|
| Stable positioning context | `product-marketing` once in LP0 |
| Homepage/niche persuasion | `customer-research`, `copywriting`, `copy-editing`, `cro` |
| Offer and pricing | `offers`, `pricing`, `cro`, with owner-approved commercial facts |
| Information architecture/localized SEO | `site-architecture`, `seo-audit`, `programmatic-seo`, `schema`, `ai-seo` |
| Measurement and rollout | `analytics`, `ab-testing`, `signup`, `onboarding` |
| Supporting persuasion | `marketing-psychology` in LP6 only |

### Repo-local skills that earn their place

| Concern | Skills |
|---|---|
| Deep seams for catalog, URLs, routing and analytics | `codebase-design` |
| Behaviour-first verification at named seams | `tdd` |
| Visual phases only | `design-taste-frontend` |

### Skills deliberately not made default

- `high-end-visual-design` conflicts with the repo's stronger identity-preservation and anti-slop
  rules (for example it mandates nested double-bezel cards, 2rem radii and eyebrow tags).
- `implement` auto-commits and invokes a review workflow; phase prompts already own commits and gates.
- `code-review` requires a fixed Git comparison point and parallel sub-agents; it is unsuitable as a
  universal requirement for smaller executors.
- `image` must not synthesize the one screenshot that serves as proof the product exists. Capture it
  from a synthetic app workspace; crop/compress only.
- `grill-with-docs`, `to-spec` and `to-tickets` are planning workflows. The executor already has a
  reviewed phase spec.

---

## 5. External decisions that still block release

The documents can make these gates explicit; they cannot decide them:

1. Production values and smoke evidence for REQUEST / ORDER / RENTAL / strict inventory.
2. App item A3: human-readable localized niche labels instead of raw slugs.
3. App item A9: the Auth legal-link round trip.
4. App items A10 and A13: ORDER price readiness and disabled template defaults.
5. Owner/legal-approved final Terms and Privacy text before public signup traffic.
6. Dated owner approval for any Founding Beta duration, price lock, scarcity or indicative tier.
7. A real app screenshot captured from a synthetic, PII-free workspace.
8. Human translation review for every locale added after `en/uk/pl`.
9. Search Console, traffic and conversion evidence for later waves.

