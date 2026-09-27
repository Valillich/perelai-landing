# Review: simplified booking legal setup and first-market templates

**Reviewed:** 2026-09-23. **Scope:** document 19 and the uncommitted implementation in
`beauty-finance`, on top of `facdee1f1`. This is a source review, not a production inspection.
The findings below remain open; this review does not modify the application or approve a release.

**Later policy, 2026-09-24:** [decision 21](21_gdpr_baseline_and_retention_mvp_20260924.md) simplifies
shared market review and decides Company-deletion/backup limits. It supersedes older policy
unknowns, not the dated implementation findings below; use current acceptance evidence for those.

## Outcome

The implementation now separates a structured draft from active settings, validates publication
server-side, preserves legacy custom documents and fails closed for corrupt selected settings.
The standard path does not require a Refund Policy or a Business-policy acceptance checkbox.
Generated notices have a token-free public view and are included in booking disclosure evidence.
Keeping `REVIEWED_TEMPLATES` empty until actual content/facts are approved is appropriate.

Before activating the generated path, fix R-01 and R-02, apply the template eligibility rules below,
and complete the shared facts for one market. Preparing G0/G0b and existing custom notices can
continue; a second market is not a prerequisite for the first one.

## Findings

### R-01 · P1 · Publication is not bound to the draft the caller reviewed

Evidence:
- `beauty-finance/apps/api/src/companies/companies.service.ts:999–1036`;
- `beauty-finance/apps/api/src/companies/dto/publish-booking-legal-setup.dto.ts:4–10`;
- `beauty-finance/apps/web/src/components/settings/PublicBookingSettingsSheet.tsx:193–205`.

The UI saves a draft and then sends a separate publish request containing only booking-mode/options.
Publication locks the Company and validates **whichever draft is currently stored**. It receives no
expected draft identifier. If A saves reviewed draft A, then another authorised manager/tab saves
valid draft B before A's publish request, A's action publishes B. The row lock prevents partial
writes, but cannot identify the draft A intended to publish. This also applies to custom terms;
the generated privacy `previewHash` does not cover the entire draft or identify the caller's save.

**Fix:** return a server-issued revision/digest of the complete saved draft, including its legal
fields and setup; require it in publication and compare under the same lock before writing.
Return a conflict and show the current draft when it differs. An alternative is a single atomic
save-and-publish command containing the reviewed payload and expected base revision. Keep ordinary
draft saving separate. Use optimistic concurrency for saves as well to prevent silent lost edits.

**Regression check:** interleave two valid custom drafts A/B; publication with A's revision must
not publish B, enable intake or clear B. Publication with the matching revision succeeds atomically.
Also test two concurrent publications and a save arriving during publication against PostgreSQL;
the existing mocked transaction tests do not establish lock behaviour.

### R-02 · P2 · A template release can invalidate all Companies using the previous version

Evidence:
- `beauty-finance/apps/api/src/public-booking/business-notice-template.ts:20–23`;
- `beauty-finance/apps/api/src/public-booking/public-booking-legal.ts:144–174`.

Lookup selects the first template matching `country`. Active settings then require its version to
equal `confirmedTemplateVersion`. Appending v2 after v1 makes v2 unreachable; replacing v1 or placing
v2 first makes every v1 Company lose its generated notice and standard reminder. New intake blocks
and the current generated-notice endpoint becomes unavailable until owners reconfirm. The same
country-only selector cannot distinguish approved language variants.

**Fix:** retain immutable versions indexed by country, notice language and version. Store that
reference in the active setup. Use an explicit current/default reference for **new previews** and
resolve the exact confirmed reference for active pages. Include language, effective date, scope
and rendered content in the preview/publication binding. A normal new version must not mutate v1
or withdraw it implicitly. A fact change making v1 inaccurate needs an explicit retirement/review
decision and owner action; archival is not permission to keep inaccurate information live.

**Regression check:** a v1 Company remains usable when v2 becomes the default; new previews use v2;
PL/pl and PL/en never depend on array order; a retired/missing reference fails closed with a precise
reason. A same-version content change is rejected, not silently accepted.

## Existing compatibility boundary to make explicit

Legacy Companies without `bookingLegalSetup` still use direct active-field updates when only raw
contact/URL/policy fields are edited. See `companies.service.ts:981–992` and
`PublicBookingSettingsSheet.tsx:189–196`. The existing web test intentionally preserves this route.
Thus “saving never changes the live legal page” currently applies to **structured drafts**, not to
all legacy edits. Do not claim universal draft isolation in UI/help or release notes.

For a consistent owner experience, move edits made in the new “Information for clients” UI into a
draft while retaining the old live custom state until publication; do not silently convert it to
the no-fee path. If direct legacy editing is intentionally retained, identify its Save action as
updating the public information immediately and test that behaviour explicitly. This is a bounded
migration/UX choice, not a requirement to rewrite every existing business policy.

## Template package and integration boundary

Prepared substantive drafts:

- [European Union / common English source](templates/business-notice/EU.en.standard.v1.draft.md)
  — added on 2026-09-24; proposed default for eligible EU countries, with national-default priority
  and intended-audience language checks;
- [Poland / Polish](templates/business-notice/PL.pl.standard.v1.draft.md);
- [Ukraine / Ukrainian](templates/business-notice/UA.uk.standard.v1.draft.md);
- [United States / US English](templates/business-notice/US.en.standard.v1.draft.md)
  — added on 2026-09-24 at the owner's request; state/profile completion remains required;
- [Shared facts, rendering contract and release checklist](templates/business-notice/README.md).

PL and UA are a working first-market proposal based on project context, **not an approved market
list**. An English UI or USD pricing does not establish a US/UK launch. Polish-law text can be
translated for Ukrainian/English-speaking clients in Poland; that is a PL language variant, not a
switch to Ukrainian/UK law. Additional markets are not launch gates for these two.
The requested US draft is a separate US baseline, not an English translation of the PL notice.
Its addition does not change the date/scope of the implementation review or its test results.
The later EU English source also leaves this implementation review historical. Its selection rules
and the narrowly observed 2026-09-24 template interface are recorded in the package README;
neither addition declares the original findings resolved or approves registry activation.

The drafts are for ordinary non-medical APPOINTMENT/REQUEST flows without prepayment, deposits,
paid-package redemption, cancellation or no-show charges. SOLO and STUDIO share the same notice;
the controller is the actual service business. A studio with genuinely independent controllers
needs its actual role arrangement reflected, not an invented single-controller assertion.

Before importing these drafts:
1. Add server-enforced eligibility for country, approved language, mode and processing profile.
   Current `renderBusinessNoticeTemplate` checks only country and accepts all four mode enums.
   Do not expose appointment wording automatically to ORDER/RENTAL. Reuse document 05 for contract
   formation; these privacy/reminder texts do not settle service-contract formation or withdrawal.
2. Resolve shared platform slots into reviewed literal text **before** adding the template to the
   registry. The current renderer supports only `BUSINESS_NAME`, `CONTACT_EMAIL`, `COUNTRY` and
   `BOOKING_MODE`; unrecognised slots correctly fail rendering. Do not add draft placeholders as
   reviewed content or work around this by weakening placeholder validation.
3. Add a resolved privacy contact (`privacyContactEmail` or the confirmed common contact), and any
   applicable controller-address/DPO/representative block, to preview, confirmation, hashing and
   evidence together. Current rendering only receives `businessContactEmail`, even though the UI
   permits a separate privacy contact. Keep additional facts conditional; do not ask every SOLO
   owner for a DPO or a lawyer's certificate.
4. Keep all notices/reminders as plain text for the current viewer; render document/regulator links
   as accessible links rather than expecting Markdown parsing. Set the notice's `lang` explicitly.
   A client changing interface language must not silently select an unapproved legal variant.
5. Confirm the no-money assumption covers no-show fees and package redemption, including outside
   Perelai. Otherwise direct the owner to applicable custom terms. No separate Refund Policy URL
   is required when the necessary information is already in those terms.

Do not make missing platform vendor/retention facts into new merchant form fields. Perelai supplies
these centrally. A documented manual deletion/rights process can support a small launch if it is
actually operable; no promise of automated erasure should precede implementation.

## Verification performed

Re-ran existing focused suites against the working tree:
- API: `public-booking-legal`, `public-booking.service`, `companies.service`,
  `companies.controller` — **4 suites, 257 tests passed**.
- Web: `PublicBookingSettingsSheet`, `PublicBookingLegalSection`, `PublicBusinessPrivacyPage`,
  `publicBookingApi`, `PublicBookingPage.ob9` — **5 suites, 42 tests passed**.

These tests use reviewed-text fixtures/mocks, not an approved production template. R-01/R-02 follow
from the source paths above and are not covered by the existing happy-path checks. No database
migration or production rollout was performed. The full suites/typechecks were not rerun here;
the implementer's report of unrelated failures remains an unresolved full-project validation limit.
No claim that all tests pass is made. The OB9 suite passes with React motion-prop mock warnings.

## Minimal next handoff

1. Fix publication binding and immutable version selection; record the legacy editing choice.
2. Select one launch market and close the shared factual slots in the template package, reusing
   documents 01/03/04/07 rather than opening another global legal project.
3. Review that completed market/language/profile once, assign its real effective date/version,
   then add the reviewed artifact to the registry and deploy the migration with the matching code.
4. Verify preview → confirmed save → matching publication → anonymous full notice → booking
   evidence, plus the concurrency/version tests above and current release checks. Keep refunds,
   marketing consent and additional mandatory client checkboxes out of the standard no-fee path.
