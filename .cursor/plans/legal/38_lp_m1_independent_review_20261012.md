# LP-M1 — independent review and local visual acceptance

**Date:** 2026-10-12. **Status:** ORIGINAL REVIEW COMPLETE / CORRECTIVE PASS IMPLEMENTED + TESTED / NOT DEPLOYED.
R1/R2 app fix: `59a270485`; R3 landing output and generated provenance updated.
Original findings below refer to the reviewed baseline, not the corrected revision.
Reviewed app `8735a2397..a91628447` and landing `f6637c0..149aa88` independently, without subagents.
Spec: [plan 37](37_mvp_legal_polish_and_business_scope_20261012.md), especially LP-M1 and LP-M4.
The landing commit also includes earlier U70 documentation/evidence: its inclusion does not mean
this review re-executed U70 visual acceptance. Both worktrees were clean before this report.

## Standards

No separate actionable standards finding. Shared pure admission, preserved historical resolution,
persisted booking mode, server-side checks and immutable Terms are consistent with the intended
design. Do not introduce a country × profession matrix or another declaration subsystem to fix
the findings below. Existing ADR-0008 mode/feature authority stays intact; the new admission hold
is a separate owner-selected boundary with an explicit existing-workspace transition requirement.

## Spec / correctness findings

### R1 — P1: direct Company creation bypasses the new selection policy

`CreateCompanySchema` still accepts optional `templateId` and `profile`. `POST /companies` calls
`CompaniesService.create`, which checks geography but spreads the template/profile payload directly
into `tx.company.create` without the new admission function. Setup is protected, direct creation is
not. An authorized owner can therefore create a Company with a held clinical template or a disabled
rent/personal template. The six-template public intake guard still rejects their later booking;
this finding does not claim every new booking bypasses that guard.

- Source: [create write](/Users/valery/Sites/beauty-finance/apps/api/src/companies/companies.service.ts:607),
  [DTO](/Users/valery/Sites/beauty-finance/apps/api/src/companies/dto/company.dto.ts:28),
  [input schema](/Users/valery/Sites/beauty-finance/libs/core/src/zod/schemas.ts:56).
- Reproduction: actual DTO parsing and actual service method with mocked persistence accepted and
  reached Company creation for all six held IDs plus `coworking`, `personal_budget`, `rent_other`,
  `personal_other`. No database was connected.
- Fix: enforce canonical template/group selection at direct creation before any write. Validate
  explicit legacy profile-only identity/group and conflicting identity fields too; do not break
  legitimate provisional creation with no chosen template. Reuse the same policy, not a second list.
- Acceptance: request/service regression for six IDs, disabled groups/synthetic IDs, legacy profile
  inputs, unknown explicit IDs and a permitted/provisional control; rejection produces no Company,
  membership, billing or acceptance writes. Include an isolated request/PG case before rollout.

### R2 — P1 for affected existing Companies: personal booking links lose cancellation UI

The new hold throws inside `getInfo` before personal-token verification. `PublicBookingPage` needs
that response's `personalClient` to load existing visits; on the error it returns only an unavailable
screen. Keeping `listPersonalVisits` and `cancelPersonalVisit` APIs unguarded does not preserve their
UI: a holder of a valid personal link cannot reach the previous bookings or Cancel button there.
This is relevant if inventory finds affected Companies with existing bookings; do not assume that
population exists or alter a real Company's template to test it.

- Source: [new admission call](/Users/valery/Sites/beauty-finance/apps/api/src/companies/market-access.ts:196),
  [getInfo](/Users/valery/Sites/beauty-finance/apps/api/src/public-booking/public-booking.service.ts:1015),
  [dependent visit load](/Users/valery/Sites/beauty-finance/apps/web/src/pages/PublicBookingPage.tsx:1189),
  [early unavailable return](/Users/valery/Sites/beauty-finance/apps/web/src/pages/PublicBookingPage.tsx:1886).
- Reproduction: a held Company plus a supplied personal token rejects before the token verifier is
  called. UI consequences were traced in source, not claimed as a performed browser cancellation.
- Fix: preserve an authenticated, minimal existing-booking management surface for a valid personal
  token, while new intake/publication and their transactional effect checks stay blocked. Use a
  separate management response or explicit safe management-only state; merely having a token string
  must not bypass verification, tenant isolation, geography or other existing controls.
- Acceptance: synthetic held Company with future booking + valid personal token can read/cancel;
  invalid/other-company token reveals no client data; new booking and held publication remain rejected.

### R3 — P2: llms.txt still advertises the entire historical catalog as selectable

The regenerated artifact correctly marks holds, but `buildLlmsTxt()` uses unfiltered catalog/group
counts. Executing the real generator currently prints “34 selectable business types across 6 groups”,
including Rentals & Spaces and Personal Finance. There are **20 selectable catalog templates in 4
groups** after the policy; synthetic Other choices are separate and should not distort that count.
Published niche URLs are filtered correctly. The residual claim contradicts LP-M1's machine-readable
scope requirement and can cause incorrect external product recommendations.

- Source: [group list](/Users/valery/Sites/perelai-landing/lib/machine-readable.ts:20),
  [selectable claim](/Users/valery/Sites/perelai-landing/lib/machine-readable.ts:79).
- Fix: derive counts and group names from admitted generated entries, or remove the unnecessary
  numerical claim. Do not delete historical catalog entries to repair promotional output.
- Acceptance: generated llms.txt contains no selectable rent/personal promise and accurately
  describes current selection; test the output, not only enabled niche route flags.

## Verification performed independently

| Check | Result |
| --- | --- |
| Core admission/template suites | 168/168 PASS |
| API market access / Company / public booking unit suites | 299/299 PASS |
| Web onboarding bootstrap/picker suites | 27/27 PASS |
| Landing niche routes / signup URLs / SEO surfaces | 43/43 PASS |
| Additional mocked reproductions | 11/11 confirmed current undesired behavior; these are **not** acceptance tests proving the fixes |
| Actual llms generator + generated catalog comparison | 34/6 claim reproduced versus 20/4 admitted catalog entries |
| `verify-niches` and seven-document manifest | PASS; all platform versions still `2026-11-01.1` / `2026-11-01` |
| App diff/status at review | Clean; no app code or data changed |

Temporary mock reproductions: `/private/tmp/lpm1-independent-review-20261012/reproduction.spec.ts`.
The first attempt needed the app's node_modules added to Jest modulePaths because the test lives
outside the repo; the corrected run passed. No provider calls or DB writes are in these reproductions.
Real PG, full project gates, production build, actual mailbox/inventory/backups were not rerun here.
The earlier reported broad tests remain the implementer's evidence, not this review's results.

Browser attempt at `http://book.localhost:4200/testacc-s-workspace` returned
`net::ERR_CONNECTION_REFUSED`. Local visual acceptance is **NOT PERFORMED**, not PASS.

## Owner's local visual checklist

Use disposable local fixtures, not the protected real workspace. Check at 390 px and desktop;
repeat the longest notices at 320 px / 200% zoom, in light/dark and at least EN/UK/RU.

| Surface | Action | Expected |
| --- | --- | --- |
| New-workspace onboarding | Open business selection, all groups and search; try names/aliases for medical aesthetics, skincare, massage, spa, trainer and yoga | Six choices and recommendations are absent; rent/personal groups and their Other options are absent. Available beauty and supported Other choices still work. No extra acceptance checkbox. |
| Old acquisition link / draft | Open a held `?niche=massage-therapist` signup link and, on a disposable incomplete onboarding, restore an old held-template draft | No held recommendation or newly selectable held choice; select an available template without a blank/dead-end form. Do not use an already operational workspace for this test. |
| Business selection hint | Inspect beneath the onboarding introduction | One small translated informational hint; readable wrapping/contrast, no cropped text, no raw `business_scope.*` key, no dominant warning card. |
| Client note / visit note | Open both note sheets, focus textarea and open the mobile keyboard | Short health-data hint visible, Save/Cancel reachable, no duplicate hint or extra checkbox. Saving an ordinary synthetic note remains normal. |
| Public booking | Select service/date/time to reveal the comment field | Short hint near comment, footer does not cover it, Terms/Privacy links and existing consent interaction remain unchanged. Test a permitted Company. |
| Google import in onboarding | Open import step without authorizing a new account | Business-only import hint visible and translated; connect action/helper/error fit on narrow screen. No real calendar import needed for visual acceptance. |
| Existing booking under a held template — after R2 fix | Use a synthetic future booking and valid personal link | Existing booking and Cancel remain accessible; new booking is unavailable. Anonymous/invalid-token visitors see no personal data. Currently expected to fail. |
| Landing navigation and direct routes | Inspect home/menu; open `/for-massage-therapists`, `/for-personal-trainers` and the other four held routes in served locales | No held acquisition cards/links; direct held routes return the standard unavailable/404 surface. Colorist/lash/salon pages and their signup links still work. |
| Landing `/llms.txt` — after R3 fix | Search for selectable count, Rentals and Personal Finance | Accurate admitted scope; no old 34/6 availability claim. Currently expected to fail. |
| Legal pages | Open Terms/Privacy and follow app legal links | Approved provider identity is rendered, no raw interpolation tokens, version/date unchanged. If local identity validation fails, align local configuration with the approved snapshot; do not change hashes or disable validation. |

No need to visually exhaust every country × template pair. Backend rejection of crafted create
requests (R1), data isolation and immutable evidence require automated tests, not visual inspection.
CA QC/AB/BC wording remains the separate LP-M2 task; LP-M1 does not claim that correction is done.

## Next action

Fix R1/R2 in app and R3 in landing, run their focused regressions, commit app and refresh landing
artifact provenance to that clean revision. Then complete this local visual checklist and the existing
protected-ID inventory/transition plus published-notice checks before rollout. No new Terms version,
database reset, automatic customer disablement or new compliance subsystem is required by these fixes.

### Corrective implementation checkpoint

The implementation part of the action above is complete in app `59a270485` and
the landing corrective commit. This checkpoint is implementer evidence, not a
new independent review of the fixes. API 854/854, real PG 55/55, Web booking/parser
63/63, browser synthetic production bundle 2/2 and landing 500/500 PASS.
Actual create/getInfo/llms regressions went red before the fixes. Personal read
and cancellation were also exercised through real token storage and PostgreSQL;
new intake/publication and lifecycle/tenant rejection remain tested.
Browser used 390/1440 widths and synthetic HTTP only; it proves cancel reachability,
not the entire multilingual/320px/dark/200% operator checklist above. Screenshot
frames overlap entrance animation; functional interaction assertions passed.

Remaining next action: owner visual acceptance and protected-ID inventory/
transition/published-notice checks. No production disablement or inspection was
performed. Terms and all seven hashes still unchanged; LP-M2 stays separate.
