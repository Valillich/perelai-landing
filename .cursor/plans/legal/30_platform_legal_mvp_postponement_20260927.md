# Platform legal release: postponement and MVP wording

**Date:** 2026-09-27. **Owner instruction:** postpone the platform release by two weeks or one month,
apply review recommendations, update all seven documents, code/ENV references and hashes.
**Selected effective date:** 2026-11-01 (one month of preparation beyond the original 1 October).
**All seven document versions:** `2026-11-01.1`.
**Approval reference:** `owner-platform-legal-mvp-postponement-20260927`.
**State:** owner-approved texts; no deployment, automatic activation or operational certification.

## Scope and history

Current sources: `content/legal/en/{terms,privacy,dpa,booking-terms,cookies,subprocessors,billing}.md`.
All have the new effective date/version; Terms, Privacy, DPA and Billing also receive substantive
changes. Zoho Mail EU (`zoho.eu`) stays in Privacy/Subprocessors. The preceding seven-document
packet and its exact manifest are retained in [archive](archive/platform-before-20261101/README.md).
[Review 29](29_platform_legal_review_and_zoho_eu_correction_20260927.md) remains a historical review;
its unimplemented wording recommendations are superseded by this release to the extent listed here.

Changing a future release date does not defer obligations for data already processed. Earlier
acceptance evidence and immutable salon templates are not overwritten or relabelled. Existing shorter
retention commitments continue until lawfully changed; the new public texts say this explicitly.

## Applied decisions

| Area | New wording / decision |
|---|---|
| Liability | Both contractual indemnities, including Perelai IP claims, defence costs, settlements and awards, are inside the same aggregate cap: greater of preceding 12 months' fees and USD 100. Mandatory exceptions and DPA/SCC precedence remain. No promise to cap regulator powers or third-party statutory rights |
| Support | Initial response target 3–5 business days, Monday–Friday excluding Ukrainian public holidays; not a resolution SLA. Billing/refund acknowledgement uses the same target; mandatory deadlines prevail |
| Incidents | Removed voluntary 48-hour target; kept notification without undue delay after awareness and staged follow-up. Ordinary support target is not an incident-notification grace period |
| Workspace erasure | Full erasure through a verified support request and operator action. Archive UI does not erase data. Eligible individual-record controls still exist, so the text does not falsely say that no in-app deletion exists |
| Closure deadline | Controlled operator cleanup without undue delay, no later than 30 calendar days from confirmed instruction; residual backups within another 30. No instant self-service promise; earlier legal deadlines prevail |
| Ordinary cleanup | Thresholds remain 90 days / 24 calendar months; up to 30 calendar days for the cleanup cycle. Requests/contacts maximum 120 days from their defined clock; ordinary visit history maximum 24 calendar months + 30 days. Not a global “25 months” or new 120-day eligibility threshold |
| Retention clocks | Unconverted uncompleted request: creation, declined: latest status update; no-completed-visit contact: creation; ordinary client history: last completed visit. These reflect CLI selectors rather than invented “closure” timestamps |
| Exceptions | Outstanding booking/order/prepaid entitlement or another documented lawful purpose may need a separate period. Keep only necessary data; review during cleanup; after that purpose ends, remove overdue data within 30 days, subject to specific law/justified hold. Technical skips alone do not justify longer storage |
| Inactivity | May close after six consecutive months restricted without a paid subscription or other valid access and at least 30 days' notice. No automatic anniversary deletion; ordinary retention continues |
| Trial | One 21-day STUDIO trial per eligible payer relationship; later eligible workspaces share the original expiry. Summary matches detailed Terms/Billing |
| Backups | Explicit database-only scope. Uploaded files/attachments have no backup and can be lost on storage failure; keep originals. Restore efforts and mandatory security/remedy duties remain; no guaranteed recovery time |
| Operations wording | Removed assertions that all written procedures are already implemented/tested. DPA describes operator responsibilities and manual processes; backup settings and successful operation are not certified by a document test |
| Retained evidence | 1095 calendar days with category-specific triggers; no equation with three calendar years. Separate tax/accounting periods by category and legal starting point; removed “generally 1095 days” for all tax records |
| Transfers | Added official links to EU SCC 2021/914 and ICO UK Addendum B1.0; existing applicable modules and mandatory precedence remain. No EU/UK market admission change |

The original 30-day notices, audit framework, cure period and free copy within 30 days remain.
Logs normally ≤90 days and support mail ≤24 months remain; their actual settings still need checking.

## Code and ENV

- Canonical dates/versions are parsed from Markdown and checked against `content/legal/versions.json`.
  There is no effective-date ENV override; none was invented. The legacy preview constant in
  `content/legal.ts` now derives its date from the manifest to avoid a second hardcoded date.
- Landing `.env.example` documents the release and keeps the same operator identity values.
- Beauty-finance `.env.example` and the local root/API/Web `.env` document-version keys have been
  changed to `2026-11-01.1`. Only selected legal version lines and related example comments were
  changed; credentials and acceptance-copy versions were untouched. Existing unused local
  `LEGAL_BILLING_VERSION` is also aligned for consistency; the API does not consume it.
- API uses `LEGAL_TERMS_VERSION`, `LEGAL_DPA_VERSION`, `LEGAL_PRIVACY_VERSION`,
  `LEGAL_BOOKING_TERMS_VERSION`. Web uses their `VITE_` counterparts and `VITE_LEGAL_BILLING_VERSION`.
- Production Coolify ENV and running services were not accessed, changed or restarted. Deploy/rebuild
  matching landing, Web and API configurations together for the postponed release. The version
  variables do not implement a time-based activation guard. A future-dated page can be previewed,
  but do not use this change as permission to collect acceptances to an unreleased configuration.
- No historical DB acceptance records, market modes, salon-template digests or current references changed.
  Signup/booking copy versions remain independently approved.

## Remaining practical work before relying on the promises

This is the existing MVP scope, not a demand for new product features or a new compliance system:

1. Check delivery to `support@perelai.app`, assign the operator, and use a short checklist for privacy,
   erasure and incident requests. Escalate time-sensitive incidents independently of the 3–5-day target.
2. Use the existing cleanup CLI and operator process. Its 90-day/24-month selectors need no change
   for the extra execution window. The current runbook's daily cadence is stricter and remains valid;
   if replacing it, use a cadence **no more than 30 calendar days**, not an uncontrolled calendar-month
   gap of 31 days. Cover all workspaces, batches and skips before the promised maximum.
3. The CLI skips notification, file, order/package and other dependencies. Resolve or classify each
   case; one successful limited-scope run does not prove erasure of all data. A new sentence cannot
   create a missing erasure capability. Validate the needed operator path before processing affected
   data under that promise.
4. Verify the owner-selected R2 EU bucket and ≤7-day rotation, local ≤10-day copies, log rotation,
   independent deletion journal and restored-data reconciliation. The existing DR runbook still marks
   production cutover validation as pending; this release does not change that status. Lack of file
   backups is disclosed, not secretly marked fixed.
5. Complete applicable provider processing terms (including Zoho), confirm contracting identities,
   and obtain the accountant's category/start-date/extension table. No claim that these were accepted
   or confirmed during editing.
6. Coordinate new immutable salon-notice versions if adopting R2 disclosure or the revised ordinary
   retention windows there. Do not mutate approved `*-v1` or their hashes. Current UA/US/AU/CA notices
   continue to govern their own published promises; this platform edit does not silently relax them.
   **Update 2026-09-27:** R2 v2 notices (effective 2026-11-01) are registered in the app registry as
   future versions, synced to `beauty-finance` and covered by `business-notice-v2.spec.ts`; the
   default stays v1. Switching each country default to v2 remains a release step, see the
   [business-notice README](templates/business-notice/README.md).
7. Before launch, check actual deployed analytics absence and STUDIO TEAM-RELEASE. If launch is still
   postponed, defer activation rather than treating the date alone as operational clearance.

## Sources checked for this revision

Official sources were accessible in this turn; the previous review's access error is historical.

- [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng), Articles 5(1)(e), 12, 28 and 33:
  data minimisation/retention, rights, processing duties and prompt processor breach notice remain;
  contractual support targets do not override them where applicable.
- [EU SCC 2021/914](https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj/eng): mandatory safeguards
  and precedence are preserved; general contractual caps do not rewrite the SCCs.
- [ICO UK Addendum B1.0](https://ico.org.uk/media2/migrated/4019539/international-data-transfer-addendum.pdf):
  direct official reference added, no claim of a completed transfer assessment.

This was not a fresh audit of every jurisdiction, provider account or production configuration.

## Verification

- `node --import tsx scripts/legal-manifest.ts --write`, then the same command without `--write`:
  successful; all seven entries are `2026-11-01.1` / `2026-11-01` with verified SHA-256 hashes.
- Seven legal test files plus `seo-surface.test.ts`: **87/87 tests, 8/8 files passed**. Includes
  production artifact checks for all seven documents and the legacy preview's related SEO surface.
- `eslint content/legal.ts`: passed.
- `tsc --noEmit --incremental false`: two errors in unchanged
  `tests/locale-raw-coverage.test.ts:244` and `:252` (missing `caption`, then `title`/`body`).
  No legal-file errors were reported. Global typecheck is not claimed green.
- All selected legal document-version values in the app example and three local ENV files match
  the new manifest; independent copy-version settings were preserved.
- `git diff --check`: passed in both repositories.
- Full test suite and build were not run. No deployment, process restart, database operation,
  provider-account change, real deletion or backup/restore drill was performed.
