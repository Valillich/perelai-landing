# Market gate review and minimal release-unblocking sequence

**Date:** 2026-09-25. **Scope:** current uncommitted `beauty-finance` work against
HEAD `facdee1f154be735cb2aa346eca9575a07469f85`, plus legal plans and owner facts.
Source review and local tests do not establish deployment. No ordinary database was accessed,
Company deleted, message sent to a customer, or reviewed template activated in this review.

**Owner decision:** PL pilot ended; zero active EU users, according to the owner. New admission
is UA/US `PUBLIC`, other catalog countries `CLOSED`. Preserve UI languages and historical Company
countries. This supersedes the earlier proposal to make US `INVITE_ONLY`; invitation grants are
not needed for the selected scope and are not implemented by the new enum value alone.

## 1. Findings to fix before relying on the market restriction

### R-23-01 — P1: provisional Company can bypass admission through operational APIs

[Email signup](/Users/valery/Sites/beauty-finance/apps/api/src/auth/auth.service.ts:269)
and Google signup create a countryless Company with public booking off, but its schema status
defaults to `ACTIVE` and the owner can obtain a Company-scoped JWT. The
[Company guard chain](/Users/valery/Sites/beauty-finance/apps/api/src/common/guards/company-auth.guards.ts:15)
does not check market admission or setup. `POST /clients` reaches `ClientsService.create` through
that chain. `CompanyLifecycleGuard` reads only operational status; it permits this Company.
[Billing policy](/Users/valery/Sites/beauty-finance/libs/server/billing/src/lib/billing-access-catalog.policy.ts:56)
permits calls in `off` and returns would-deny decisions as allowed in `observe`.

Consequently, in these supported Billing modes an authenticated owner can skip country setup and
submit real CRM data directly. Blocking public booking and redirecting the web UI to onboarding
do not close this path. This is a source-traced authorization gap, not a live-database exploit test.

**Small fix:** enforce provisional-workspace admission independently of Billing on operational
write entry points, using a shared policy. Keep the narrowly required setup/account/rights routes
available. Cover direct client creation and relevant import/integration/job paths, with tests for
email/Google provisional workspaces in `off`, `observe` and `enforce`. Preserve intentional handling
of existing Companies; do not apply today's public-country list blindly to all historical records.
Do not build a country-compliance engine or rely on switching Billing to `enforce` as the fix.

### R-23-02 — P2: legal publication skips the setup prerequisite for enabling intake

[publishBookingLegalSetup](/Users/valery/Sites/beauty-finance/apps/api/src/companies/companies.service.ts:1068)
checks only that `country` is populated before setting `publicBookingEnabled: true`.
`createWorkspace` already sets a permitted country while leaving `onboardingSetupAt` empty.
A complete custom legal draft can therefore take this publication route before setup, although
`updatePublicBookingConfig` rejects the corresponding enable action until setup is complete.
The empty standard-template registry does not protect the custom path.

**Small fix:** share the same setup/admission prerequisite between publication and configuration,
and preserve publication atomicity. Add a regression with country `UA`, no setup timestamp and a
valid custom draft; publication must leave active legal settings/intake unchanged on rejection.
This finding concerns premature enablement; a fully functioning public booking was not exercised.

### Documentation consistency

`beauty-finance/CONTEXT.md:695` still documents a default US fallback which the new code removes.
Update it with the source change. Missing country can be rejected by DTO validation with 400
before the 403 policy branch; describe rejection consistently instead of promising 403 for every
malformed request. Existing-country preservation in `requireSetupMarket` is deliberate: `CLOSED`
does not suspend an existing PL Company. Verify the former pilot's actual disposition separately.

## 2. Improvements verified and evidence limits

- UA and US are the only `PUBLIC` catalog entries; creation/setup validate new country admission,
  the public picker is filtered and implicit US fallback is removed. Country changes of an
  existing Company are refused through the reviewed setup route. Deployment is unverified.
- The deletion CLI now binds its dry-run hash to exact record IDs, queue IDs and object
  provider/bucket/key, and persists this manifest in `DELETE_STARTED`. The old count-only criticism
  in register 01 is closed by source/tests; the historical scratch hash is not evidence for this
  newer manifest format.
- The DR runbook now covers **all authorised cases**, including unfinished/failed ones. The old
  verified-only wording defect is closed. Executable replay and the restore drill remain open.
- The CLI is correctly still test-only. It rejects ordinary Companies with protected legal or
  Billing relations; external deletion precedes DB commit and has no durable resume protocol.
  A production override, renaming a DB to `_test`, or disabling append-only/FK protection is not
  a valid release solution. Use ADR-0016 for evidence dependencies and expiry design.
- Independently rerun: **327 API tests** (seven focused suites, including seven CLI tests),
  **23 web tests** (four suites), **1 core test**, **10 Billing-policy tests**. API application
  typecheck passed using 8 GiB Node heap and an external temporary tsbuildinfo path. That tsconfig
  excludes scripts; this is not a standalone CLI typecheck. The entire test suite, DB integration,
  browser admission flow and web typecheck were not rerun; the reported nine web type errors are
  not independently recounted here.
- All four Business-notice draft copies are byte-identical between repositories; both template
  registries remain empty. Draft copy equality is not legal approval.

API suites: `market-access`, `delete-company`, `auth.service`, `companies.service`,
`companies.controller`, `public-booking-legal`, `public-booking.service`. Web suites:
`onboardingMarketDefaults`, `onboardingTimezone`, `CreateCompanySheet.legal`, `MyCompaniesList.archive`.
Core: `supported-markets`; Billing: `billing-access-policy`. Jest caches/build metadata were kept
in `/private/tmp`; no DB deletion or production environment was used.

## 3. Safest small launch scope and former Polish account

Keep new EU/EEA admission closed and avoid promoting operational service there while the relevant
requirements are unresolved. No blanket EU IP block, new jurisdiction engine or invitation feature
is needed for this MVP. Country declaration supports the genuine scope; do not knowingly admit an
EU business as UA/US. Mere access to an information page does not establish EU targeting by itself;
other actual offering/monitoring and processing facts still matter. See
[EDPB territorial-scope guidance](https://www.edpb.europa.eu/documents/guideline/guidelines-32018-on-the-territorial-scope-of-the-gdpr-article-3-version-adopted_en).

Zero active EU users is an owner fact, not proof that former client data, access, jobs or backups
are gone. Record whether service actually terminated, its date, remaining Company status/intake/
integrations and the agreed return/deletion choice. If processing services ended, initiate closure
under the contract and controller's instructions instead of waiting indefinitely for a separate
erasure request. Do not erase without authority or invent D0. Necessary restricted records follow
their own schedule. The controller-processor contract must provide return or deletion at the
controller's choice after services end:
[EDPB processor guidance](https://www.edpb.europa.eu/sme/learn-the-basics/data-controller-or-data-processor_en).
Assess any continuing Article 3/27 processing separately; closed new admission does not retrospectively
cure prior processing or itself prove no representative duty remains.

## 4. Next engineering step: inspect, then make the operator path usable

1. **Scoped read-only inventory on the local ordinary database**, once the owner supplies the
   exact Company ID and confirms this scope. Verify environment identity without exposing secrets;
   use a read-only DB role/transaction and inspect Company status/country/setup, memberships,
   intake, dependency counts, legal evidence kinds, billing/FK dependencies, files/export metadata,
   jobs/integrations and expiry fields. Report counts/schema facts, not client names or contents.
   Inspect external stores read-only as separately scoped; SQL alone cannot prove file/queue state.
   Do not run the current destructive CLI or point its test variables at this database.
2. Close one retention table from register 01 §6.2: exact retained category/fields, role/basis,
   start event, period/hold, restricted access and expiry. Reuse necessary compact evidence rows;
   no automatic full CRM/User retention for FK convenience. FOP tax records and salon transactions
   are different categories. The target 1095 days is not a universal statutory conclusion.
3. Extend the existing operator path for ordinary Companies: persist an authorised case and exact
   manifest independently of restored backups; stop/fence writers; support retries after object,
   queue or DB failures; preserve narrowly justified evidence and finish purge verification.
   A maintenance-window procedure is sufficient at MVP volume; no deletion UI or background
   garbage-collection platform is required. Use the existing 30/30 plan rather than a new subsystem.
4. Rehearse on an isolated, access-controlled copy or representative fixture with separate storage,
   Redis and disabled outbound integrations: ordinary Company, unrelated sentinel, failure/resume,
   public/download links, and quarantined backup restore with unfinished-case reconciliation.
   A copy must not retain working production webhooks/tokens. Authorization to inspect is not
   authorization to copy all data or delete the original; settle that exact scope before effects.
5. Record production storage/backup coverage, journal location/access, actual rotation and the
   tested build. Only then consider a separately authorised real deletion and operational 30/30 claim.

Local non-test data is useful for discovering real dependencies; its location does not make
destructive experimentation safe. No Company ID or approval to access that database was supplied
with this review request, so this inventory remains the next scoped operation.

## 5. How to unblock UA/uk and US/en notices

**Later UA completion, 2026-09-25:** [UA release packet](templates/business-notice/UA.uk.standard.v1.release-record.md)
now resolves the UA drafting slots below and assigns its version, prepared effective date, owner
content-authority reference and digest. Use its JSON candidate and release conditions. The lists
below remain the original shared workflow and US preparation work; do not report UA prose as
unfilled. No registry activation or completed deletion drill is inferred from this update.

Complete the common facts once in register 01: actual providers/access and transfer instruments,
active-retention triggers, retained evidence, workable deletion/rights, technical collection and
automated-decision behaviour. Resolve these **drafting** slots centrally:
`PERELAI_SERVICE_PROVIDERS_PARAGRAPH`, `INTERNATIONAL_TRANSFERS_PARAGRAPH`,
`RETENTION_PARAGRAPHS`, `AUTOMATED_DECISIONS_PARAGRAPH`, `PLATFORM_PRIVACY_URL`, and applicable
business/contact blocks. US additionally needs `US_ONLINE_COLLECTION_PARAGRAPH`,
`US_SALE_SHARING_PARAGRAPH`, `US_TRACKING_SIGNALS_PARAGRAPH`, `US_STATE_PRIVACY_PARAGRAPH` and
the supported state/business profile. Do not assume US `PUBLIC` means that profile is complete.

The renderer currently accepts only `BUSINESS_NAME`, `CONTACT_EMAIL`, `PRIVACY_CONTACT_EMAIL`,
`COUNTRY` and `BOOKING_MODE` as runtime slots. Resolve other draft tokens into reviewed prose or
make a narrowly justified renderer change; do not ask every SOLO owner to write platform clauses.
Keep the simple no-prepayment/no-cancellation-fee flow without a mandatory salon Refund Policy.

After the factual text and operational evidence are complete, prepare the rendered UA/uk and
US/en artifacts with immutable versions, final effective date, content hashes and the existing
shared review/approval reference. Add exact-country `REVIEWED_TEMPLATES` and explicit
`CURRENT_TEMPLATES` mappings; verify draft rejection, pinned versions, preservation of existing
custom notices and atomic publication. Date 2026-10-01 remains proposed until assigned to a final
approved artifact. UA can be released first if US-specific work remains; no new EU template or
EU market opening is needed for that release. Actual GDPR scope remains a separate case assessment.

**Recommended route:** fix R-23-01/02 and finish a small tested operator deletion protocol,
then publish the completed selected notices. “MVP with little code” is compatible with this route;
removing test protections or promising unverified deletion is not the shortcut.


## Current sprint and date correction — 2026-09-25

[Handoff 24](24_mvp_deletion_retention_and_ua_activation_sprint_20260925.md) is the current
implementation sequence. Under the owner's date-unblocking instruction, the unreleased UA/uk
packet now uses 2026-09-25; its actual-helper digest and mirrored release record were updated.
Earlier 2026-10-01 references above remain historical/proposed for other drafts. No code or ENV
bypass of generic effective-date validation is needed. This closes the UA calendar delay, not
the operational deletion/retention/restore checks. Conditional registry activation belongs to
this sprint; repeat content approval of the same completed UA packet is not required.
