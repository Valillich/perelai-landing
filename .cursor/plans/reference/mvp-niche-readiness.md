# Terminology MVP: local niche readiness — 2026-10-12

App definitions and evidence: `/Users/valery/Sites/beauty-finance/.cursor/plans/terminology/mvp/01-launch-definitions.md`, `04-niche-scope-and-copy.md`, `05-implementation-evidence.md`. Verified screenshot app revision: `c052a975c`; the export source is recorded with its full commit/hash in the generated catalog. Landing baseline: `d3cf491507d8373ce5cbeefcc62e7940192ea17c`.

This pass implements bounded copy/catalog preparation. It does not attest production availability, accept native-language copy, or close BILL/TEAM/Drawer/legal release gates.

| Template | Registry status | Locales | Copy/example status |
| --- | --- | --- | --- |
| independent_colorist | existing enabled | all 9 retained | RU/UK/EN appointment/client/payment introduction; existing beauty mock |
| brow_lash_artist | existing enabled | all 9 retained | RU/UK/EN client history/payment introduction; existing beauty mock |
| salon | existing enabled | all 9 retained | RU/UK/EN appointment/client/package introduction; existing beauty mock |
| music_teacher | existing enabled | all 9 retained | False curriculum preset removed in all 9; RU/UK/EN terminology and real CalendarPage screenshot; no beauty finance replica in other locales |
| barber | enabled locally | en/ru/uk only | Own services, beard add-on, setup, FAQ, labels and signup slug; calendar/inbox variant |
| nail_salon | enabled locally | en/ru/uk only | Ordinary nail services, gel-polish removal, no podology/treatment positioning; solo working owner supported |
| makeup_artist | enabled locally | en/ru/uk only | Wedding/evening makeup, makeup trial distinct from SaaS trial; no permanent makeup/medical positioning |

**Owner approval received 2026-10-12:** prepared wording approved; RU/UK reviewed by the native-speaking owner, EN owner-approved without a native-certification claim. English professional examples were refined during activation to meet the unchanged uniqueness gate; approved meanings and feature boundaries remain. Other existing locales received only the bounded music factual correction; no full stylistic certification. New draft `research.sources/verbatims` are empty: founder examples are not VOC or testimonials.

## Verified locally

- App service/catalog export generated from a clean committed app; no dirty-source override.
- Signup slug and language handoff, content/label coverage and refusal of undeclared locales are tested. The three pages now have routes, sitemap, hreflang and navigation entries only in EN/RU/UK. Missing locales return 404.
- Existing 60% distinctness gate retained; all seven enabled pages checked together. The earlier draft report incorrectly called this gate passed for EN; overlapping generic English scenarios have now been refined. The normal published-page check now includes RU and fails on missing declared modules instead of silently skipping them.
- `verify:commercial` passes; existing offer/source policy is unchanged.
- Music screenshot: real CalendarPage, `music_teacher`/`edu`, synthetic client and piano lesson, `CANDIDATE`/`UNPAID`, USD 45; API responses intercepted, no external service calls. RU/UK/EN captures have no browser errors. Images are in `public/images/niches/music-calendar-{locale}.png`; caption explicitly distinguishes the displayed amount from payment received. This is illustrative UI evidence, not a backend/payment acceptance test.
- Final checks: typecheck PASS; all 34 suites / 506 tests PASS; production build compiled and typechecked, then stopped at legal APPROVAL_HASH_MISMATCH (billing/privacy observed in this run; booking-terms observed and reproduced on baseline previously). The exact mismatch is reproduced on baseline `d3cf49150` with the same environment. Legal approval/validation unchanged.
- Code review: Standards pass; Spec metadata and screenshot-revision omissions corrected.
- Runtime for checks: installed Node 24.18; system Node 20.18 fails to start current Vite 7.

## Activation evidence after owner approval

- Three pages enabled locally for EN/RU/UK; four existing pages keep all nine languages: 45 page/locale combinations.
- 24 desktop/mobile variants checked across the three new pages and music teacher. H1, CTA slug/language, metadata, overflow and page errors checked; missing German routes return 404.
- Live HTTP regression: `node scripts/verify-mvp-niche-routes.mjs http://localhost:3000` against a running dev/start server. Checks all nine new URLs, all 18 untranslated combinations, /en canonical redirects, HTML and HTTP hreflang.
- Automatically generated next-intl HTTP alternate links are disabled: they advertised all nine locales even for partial pages. Page metadata remains the source for actual language clusters.
- App onboarding UI to the catalog checked for all seven templates × RU/UK/EN, using intercepted synthetic APIs and a SOLO summary without team capability. This is not server completion/trial acceptance. Proof: app `mvp/evidence/niche-onboarding-smoke.json`.
- Turbopack dev showed an English self-redirect; webpack dev rendered canonical URLs correctly without changing proxy. No temporary debug instrumentation retained. Production route acceptance still needs an unblocked build.

No deployment performed. BILL/TEAM/Drawer/server onboarding and legal release evidence remain with their existing plans. Owner terminology approval does not approve the platform legal packet. Do not enable photography/career coaching, wellness, REQUEST/ORDER/RENTAL or rent/personal from this pass.
