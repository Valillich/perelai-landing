# Terminology MVP: local niche readiness — updated 2026-10-13

App definitions and evidence: `/Users/valery/Sites/beauty-finance/.cursor/plans/terminology/mvp/01-launch-definitions.md`, `04-niche-scope-and-copy.md`, `05-implementation-evidence.md`. Verified screenshot app revision: `c052a975c`; the export source is recorded with its full commit/hash in the generated catalog. Landing baseline: `d3cf491507d8373ce5cbeefcc62e7940192ea17c`.

This pass implements bounded copy/catalog preparation. It does not attest production availability, accept native-language copy, or close BILL/TEAM/Drawer/legal release gates.

| Template | Registry status | Locales | Copy/example status |
| --- | --- | --- | --- |
| independent_colorist | existing enabled | all 9 retained | RU/UK/EN appointment/client/payment introduction; existing beauty mock |
| brow_lash_artist | existing enabled | all 9 retained | RU/UK/EN client history/payment introduction; existing beauty mock |
| salon | existing enabled | all 9 retained | RU/UK/EN appointment/client/package introduction; existing beauty mock |
| photographer | enabled locally | all 9 | Portrait/event services, print add-on, calendar/inbox with pro labels |
| career_coach | enabled locally | all 9 | CV/interview consultations, cover-letter add-on, coaching labels; no therapy/ATS promises |
| music_teacher | existing enabled | all 9 retained | False curriculum preset removed in all 9; localized HTML lesson calendar and inbox with edu labels in all 9; no beauty finance display |
| barber | enabled locally | all 9 | Own services, beard add-on, setup, FAQ, labels and signup slug; calendar/inbox variant |
| nail_salon | enabled locally | all 9 | Ordinary nail services, gel-polish removal, no podology/treatment positioning; solo working owner supported |
| makeup_artist | enabled locally | all 9 | Wedding/evening makeup, makeup trial distinct from SaaS trial; no permanent makeup/medical positioning |

**Owner approval received 2026-10-12:** prepared wording approved; RU/UK reviewed by the native-speaking owner, EN owner-approved without a native-certification claim. English professional examples were refined during activation to meet the unchanged uniqueness gate; approved meanings and feature boundaries remain. Other existing locales received only the bounded music factual correction; no full stylistic certification. New draft `research.sources/verbatims` are empty: founder examples are not VOC or testimonials.

## Verification snapshot — 2026-10-12

- App service/catalog export generated from a clean committed app; no dirty-source override.
- Signup slug and language handoff, content/label coverage and refusal of undeclared locales are tested. The three pages now have routes, sitemap, hreflang and navigation entries only in EN/RU/UK. Missing locales return 404.
- Existing 60% distinctness gate retained; all seven enabled pages checked together. The earlier draft report incorrectly called this gate passed for EN; overlapping generic English scenarios have now been refined. The normal published-page check now includes RU and fails on missing declared modules instead of silently skipping them.
- `verify:commercial` passes; existing offer/source policy is unchanged.
- Music screenshot: real CalendarPage, `music_teacher`/`edu`, synthetic client and piano lesson, `CANDIDATE`/`UNPAID`, USD 45; API responses intercepted, no external service calls. RU/UK/EN captures have no browser errors. Images are in `public/images/niches/music-calendar-{locale}.png`; caption explicitly distinguishes the displayed amount from payment received. This is illustrative UI evidence, not a backend/payment acceptance test.
- Final checks: typecheck PASS; all 34 suites / 510 tests PASS; production build compiled and typechecked, then stopped at legal APPROVAL_HASH_MISMATCH (billing/privacy observed in this run; booking-terms observed and reproduced on baseline previously). The exact mismatch is reproduced on baseline `d3cf49150` with the same environment. Legal approval/validation unchanged.
- Code review: Standards pass; Spec metadata and screenshot-revision omissions corrected.
- Runtime for checks: installed Node 24.18; system Node 20.18 fails to start current Vite 7.

## Activation evidence after owner approval — 2026-10-12

- Three pages enabled locally for EN/RU/UK; four existing pages keep all nine languages: 45 page/locale combinations.
- 24 desktop/mobile variants checked across the three new pages and music teacher. H1, CTA slug/language, metadata, overflow and page errors checked; missing German routes return 404.
- Live HTTP regression: `node scripts/verify-mvp-niche-routes.mjs http://localhost:3000` against a running dev/start server. Checks all nine new URLs, all 18 untranslated combinations, /en canonical redirects, HTML and HTTP hreflang.
- Automatically generated next-intl HTTP alternate links are disabled: they advertised all nine locales even for partial pages. Page metadata remains the source for actual language clusters.
- App onboarding UI to the catalog checked for all seven templates × RU/UK/EN, using intercepted synthetic APIs and a SOLO summary without team capability. This is not server completion/trial acceptance. Proof: app `mvp/evidence/niche-onboarding-smoke.json`.
- Turbopack dev showed an English self-redirect; webpack dev rendered canonical URLs correctly without changing proxy. No temporary debug instrumentation retained. Production route acceptance still needs an unblocked build.

No deployment performed. BILL/TEAM/Drawer/server onboarding and legal release evidence remain with their existing plans. Owner terminology approval does not approve the platform legal packet. At the 12 October snapshot, photography/career coaching were deferred; the owner’s 13 October instruction below supersedes that deferral. Wellness, REQUEST/ORDER/RENTAL and rent/personal remain excluded.

## Final activation review

Standards: no findings. Spec: corrected two activation issues — English nail/makeup setup names now match the exported starter expense categories (Polish & Tools / Makeup Consumables), and Open Graph alternate locales use the same page-specific EN/RU/UK set as hreflang. Four metadata regression cases cover partial and fully localized pages. Final typecheck, 34 suites / 510 tests, and verify:niches pass. Earlier app evidence records the pre-review 506-test snapshot; this section records the final landing checks. Production/legal release blockers remain unchanged.

## All-language activation — 2026-10-13

Owner requested all available translations and activation of barbers, nail artists and makeup artists. Added independent DE/ES/FR/PL/PT/TR modules for each page (18 modules); existing EN/RU/UK copy remains unchanged. All seven enabled niches now cover all nine published locales: **63 page/locale combinations**, including 27 URLs for these three pages. Removed their locale restriction; homepage/header labels, sitemap, hreflang, Open Graph and signup handoff use the full set. Disabled niches and booking-mode gates remain unchanged. These translations have not received a separate native-speaker certification.

Terminology retains package-versus-software-subscription, makeup-rehearsal-versus-software-trial, completion-versus-payment and service-professional-versus-team-access distinctions. New glossary service/package labels match exported app navigation; translated setup prose describes supplies without inventing exact seeded category names. No medical/podology/permanent-makeup, acquiring, payroll, portfolio or event-management claims were added.

The existing uniqueness CLI continues its EN/UK/PL/RU coverage. A new integration check additionally evaluates the three new niches in **all nine locales**, against each locale homepage and each other, using the unchanged 40% maximum overlap. A diagnostic full-nine sweep exposed pre-existing colorist/lash overlap in FR (44.2%) and PT (42.2%); those unchanged pages are outside this translation task. New professional examples were refined to pass the same threshold.

Validation: TypeScript PASS, 34 suites / 511 tests PASS. Real HTTP checks: all 27 URLs return 200, all-nine hreflang and eight Open Graph alternatives, locale handoff, and three /en canonical redirects. Production deployment remains separate; previous legal approval hash blockers are not overridden by this localization request.

Desktop/mobile checks: 36 variants (three pages × six new locales × two viewports), all PASS for H1, CTA niche/language, reciprocal metadata, horizontal overflow and page errors. Evidence: [mvp-niche-all-locales-layout.json](evidence/mvp-niche-all-locales-layout.json). The current screenshot previews use synthetic app datasets; these checks do not complete server onboarding or validate payments/trial issuance.

Final all-language review: Standards — 0 actionable findings; Spec — 0 actionable findings. `verify:niches` and `verify:commercial` PASS after commit. Implementation commit: `22814f7`. Existing generated `next-env.d.ts` dev-route reference was already dirty at task start and is excluded from the commit.

## Footer wording and music HTML mock — 2026-10-13

Owner requested the same For/Для framing for the new Product links and an HTML music-teacher mock instead of the app screenshot. The EN/RU/UK shared navigation labels now use For/Для; other six languages already used their natural equivalents. Footer, header and homepage keep one label source.

Music pages now render the existing HTML calendar + inbox composition in all nine languages, using localized piano/guitar services and synthetic client names from the music_teacher template. The bounded generated export now includes edu-owned inbox/chart/busy labels, sourced from clean app commit ea26c0455; the mock selects them through the template terminologyProfile. Verification rejects missing edu labels. This is not a full profile export or a change to the application.

The screenshot-only component is removed. Historical PNGs and the original screenshot evidence remain as provenance, but are no longer rendered on the page. The new music composition does not display the colorist finance KPI/feed fixture. TypeScript, verify:niches, and all 34 suites / 522 tests PASS, including music HTML rendering in every locale and missing-profile-label rejection. Production deployment and separate release acceptance remain unchanged.

Music HTML browser checks: 18 variants (nine locales × desktop/mobile) PASS for two HTML figures, localized piano/guitar services, no screenshot image, no beauty-service leakage, no horizontal overflow and no page errors. Evidence: [music-html-mock.json](evidence/music-html-mock.json). Final review: Standards — 0 actionable findings; Spec — 0 actionable findings. Implementation commit: `38e683e`.

## Photography and career coaching — 2026-10-13

Owner explicitly requested these two niches to broaden the mix beyond beauty and music. Both existing catalog templates are selectable APPOINTMENT templates. Routes: `/for-photographers` → `photography` → `photographer`; `/for-career-coaches` → `career-coach` → `career_coach`. Added 18 independent language modules and For/Для labels across all nine languages; activated both pages. **Nine enabled niches × nine locales = 81 combinations.** Homepage and Product use the shared registry. Header behavior is unchanged; no new primary menu was introduced.

Photography covers portraits, event coverage and a print add-on. No photo storage, client galleries, retouching, file delivery, lab ordering or shipment integration. Career coaching covers CV review, interview rehearsal and cover-letter assistance. No ATS/job board, document storage/generation/scoring, employer communications, therapy or employment guarantees. Source research arrays are empty; examples are illustrative, not customer evidence. Translations have not received separate native-speaker certification.

Both pages use HTML calendar/inbox with their own localized services. Bounded mock-label export includes pro and coaching in addition to edu; coaching follows the app’s existing edu namespace mapping. Only generic inbox booking labels are displayed; no lesson-count sentence is rendered on career pages. No colorist finance display is added. Missing profile labels fail verification in every locale.

App starter scope extended in [06](/Users/valery/Sites/beauty-finance/.cursor/plans/terminology/mvp/06-photography-career-extension.md). Seventeen existing keys changed: 14 RU/UK names polished, PT/TR print wording and TR interview wording corrected. Keys, placeholders, service IDs, prices, units and stored user catalogs remain intact. Source export is generated from clean app commit `319a577c1`. Other already committed app currency work belongs to its separate task and is not claimed as part of this change.

Checks: TypeScript PASS; 34 suites / 546 tests PASS; all-nine uniqueness check for the five recently added niches PASS at the unchanged threshold; verify:commercial PASS. HTTP regression now checks 45 URLs for all five recent niches, canonical redirects, hreflang and Open Graph. Browser: 36 variants for the two pages (nine locales × desktop/mobile), correct template services, nine Product links, CTA niche/language, no overflow or page errors. These checks do not complete server onboarding or validate real trial/payment issuance.

No deployment performed. Legal/BILL/TEAM/Drawer release evidence and existing legal approval hash blockers remain separate. No wellness, REQUEST/ORDER/RENTAL or other deferred niche is enabled.

Evidence: [36 UI variants](evidence/photography-career-layout.json), [17 starter changes](evidence/photography-career-starter-copy.json).
