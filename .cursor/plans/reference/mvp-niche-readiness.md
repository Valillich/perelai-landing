# Terminology MVP: local niche readiness — 2026-10-12

App definitions and evidence: `/Users/valery/Sites/beauty-finance/.cursor/plans/terminology/mvp/01-launch-definitions.md`, `04-niche-scope-and-copy.md`, `05-implementation-evidence.md`. App export source for this pass: `c052a975c` (generator records the full commit/hash). Landing baseline: `d3cf491507d8373ce5cbeefcc62e7940192ea17c`.

This pass implements bounded copy/catalog preparation. It does not attest production availability, accept native-language copy, or close BILL/TEAM/Drawer/legal release gates.

| Template | Registry status | Locales | Copy/example status |
| --- | --- | --- | --- |
| independent_colorist | existing enabled | all 9 retained | RU/UK/EN appointment/client/payment introduction; existing beauty mock |
| brow_lash_artist | existing enabled | all 9 retained | RU/UK/EN client history/payment introduction; existing beauty mock |
| salon | existing enabled | all 9 retained | RU/UK/EN appointment/client/package introduction; existing beauty mock |
| music_teacher | existing enabled | all 9 retained | False curriculum preset removed in all 9; RU/UK/EN terminology and real CalendarPage screenshot; no beauty finance replica in other locales |
| barber | draft, disabled | en/ru/uk only | Own services, beard add-on, setup, FAQ, labels and signup slug; calendar/inbox variant |
| nail_salon | draft, disabled | en/ru/uk only | Ordinary nail services, gel-polish removal, no podology/treatment positioning; solo working owner supported |
| makeup_artist | draft, disabled | en/ru/uk only | Wedding/evening makeup, makeup trial distinct from SaaS trial; no permanent makeup/medical positioning |

All changed editorial text is a candidate. **RU/UK native review pending**, then EN review. Other existing locales received only the bounded music factual correction; no full stylistic certification. New draft `research.sources/verbatims` are empty: founder examples are not VOC or testimonials.

## Verified locally

- App service/catalog export generated from a clean committed app; no dirty-source override.
- Signup slug and language handoff, content/label coverage and refusal of undeclared locales are tested. New pages remain outside routes, sitemap, hreflang and navigation while disabled.
- Existing 60% distinctness gate retained; the seven scoped pages checked together in EN/RU/UK. The normal published-page check now includes RU and fails on missing declared modules instead of silently skipping them.
- `verify:commercial` passes; existing offer/source policy is unchanged.
- Music screenshot: real CalendarPage, `music_teacher`/`edu`, synthetic client and piano lesson, `CANDIDATE`/`UNPAID`, USD 45; API responses intercepted, no external service calls. RU/UK/EN captures have no browser errors. Images are in `public/images/niches/music-calendar-{locale}.png`; caption explicitly distinguishes the displayed amount from payment received. This is illustrative UI evidence, not a backend/payment acceptance test.
- Runtime for checks: installed Node 24.18; system Node 20.18 fails to start current Vite 7.

## Next actions, individually

1. **Barber:** native copy review, own example review and real signup/onboarding to `barber`; check applicable commercial/legal release evidence, then enable this page only.
2. **Nail:** same checks for `nail_salon`; keep positioning to ordinary manicure/pedicure/coatings, no treatment promise. A staff selector does not require marketing it as STUDIO-only.
3. **Makeup:** same checks for `makeup_artist`; keep trial makeup separate from 21-day STUDIO trial and verify default catalog/example.

Do not enable photography/career coaching, wellness, REQUEST/ORDER/RENTAL or rent/personal from this pass. Do not resurrect historical waves. Home/Pricing owner-frozen strings and offer policy remain authoritative; the future marketing plan can use these definitions and seven-niche boundary without waiting for broad terminology cleanup or profile export v2.
