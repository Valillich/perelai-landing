# Workspace Data Export — legal/product boundary and implementation matrix

**Prepared:** 2026-08-23

**Updated:** 2026-09-05.

**Status:** legal planning only; Workspace Data Export is implemented in API/server/worker/web
according to the current app inventory. Production availability is unverified; SOLO packaging and
restricted create/download remain PENDING C-10. Do not call it unimplemented or automatically live.

**Authoritative product term:** `Workspace Data Export`.

**Historical implementation sequence:** IM4-C2/IM acceptance → IM5 → EX1 → IM6.
Use current accepted release reports to establish which gates have closed; this is not a rebuild order.

This document translates the Workspace Data Export plan into legal copy, privacy operations and
release evidence. It must not be used to mark IM4/IM5/EX1/IM6 complete. The old IM4 verdict is
historical evidence; §7 requires reconciliation against later implementation/acceptance before
asserting a current defect or publishing verified controls.

## 1. Non-negotiable terminology

| Product/process | Meaning | Allowed copy | Never call it |
|---|---|---|---|
| Workspace Data Export | Company-owner copy of a defined workspace operational history | `Download a copy of your workspace data` | GDPR export; privacy access export; complete backup; reverse import |
| Privacy Access Export | Verified person-scoped disclosure for a privacy-rights request, including context and third-party protections | `Request access to your personal data` | workspace backup; tenant/company export |
| Import | Separate domain that brings supported source data into a Company | `Import data` | restore from Workspace Data Export |

The two export concepts may reuse infrastructure only after a separate privacy/security design. They
must not share one ambiguous button, API contract, request status or support macro.

## 2. Why the distinction is legally material

Workspace Data Export is scoped to a **Company** and requested by an authorised owner. It may contain
many people's data and operational records. Its primary purpose is continuity and customer-controlled
data movement.

A privacy access request is scoped to a **verified individual** and the applicable law/role. Under
GDPR-style analysis, access may require both a copy and supplementary information about processing;
portability has narrower conditions and applies to certain data provided by the individual in a
structured/common/machine-readable format. Both require consideration of other people's rights.
California and other regional laws have separate categories, verification, exceptions and deadlines.

Consequences:

- never close a rights ticket because a full Company archive was generated;
- never send a Company archive to a Client or ordinary User as their rights response;
- never make Company owner RBAC the only identity/authority check for a person-scoped request;
- never claim that JSONL/CSV alone supplies all legally required context;
- record which controller received the request and which data is Perelai-controller versus
  Customer-controller data; and
- give the business a separate DPA assistance path for Customer Personal Data.

## 3. Product contract to reconcile with implemented code — publish only after release evidence

| Dimension | Plan truth | Publication gate |
|---|---|---|
| Routes | `/settings/data-transfer`, `/settings/data-transfer/imports`, `/settings/data-transfer/exports`, `/settings/data-transfer/exports/:jobId`; legacy `/settings/imports` redirects to the Import child | IM5 route/redirect/access tests |
| Onboarding | no export step or shortcut | negative UI test |
| Actor | Company `OWNER` only; staff/supervisor receive no partial archive labelled complete | RBAC integration/tenant tests |
| Scope | `WORKSPACE_COMPLETE_V1` | approved manifest + dataset reconciliation |
| Format | ZIP with README, manifest, canonical JSONL and convenience CSV mirrors | format/integrity tests |
| Create | separate fresh sensitive-action confirmation; backend returns accepted job | confirmation/grant/API tests |
| Processing | asynchronous worker; one bounded export profile | queue/retry/idempotency tests |
| Notification | ready notice has no attachment or bearer URL | template/log tests |
| Download | second fresh confirmation; short-lived delivery | grant/URL tests |
| Artifact retention | 24 hours from `READY` | storage lifecycle + clock/boundary tests |
| Action grant | hashed, one use, actor/Company/action bound; planned 10-minute expiry | security tests |
| Signed object URL | at most 5 minutes; never persisted or logged | storage/log assertions |
| Source data | unchanged by create/download/expiry | mutation and deletion tests |
| Billing restriction | implemented export; new create/download permission and SOLO packaging PENDING C-10; accepted jobs/cleanup continue | BILL3 effect policy + BILL8 + legal approval |
| Release state | inspect actual flags and accepted release evidence; no legal review toggles deployment | production config assertion + C-10 |

Do not turn planned values into public guarantees before the indicated gates. Once approved, the
Terms, Privacy Notice, DPA, UI help, support runbook and operational alerts must use the same values.

**2026-09-06 TEAM alignment:** paying for STUDIO or being an administrative member does not grant
owner-only Workspace Data Export. Exclusion from performer capacity is unrelated to data permissions.
The same person may belong to several Companies; authorisation and archive scope stay Company-local.
Revalidate current membership/owner authority at create, grant consumption and download, and final
protected effects where applicable. TEAM2/3 evidence must cover revoked sessions/refresh, stale UI,
outstanding grants and queued ready-notification recipients. Already-issued provider URLs may remain
usable only for their verified bounded lifetime; never promise recall of downloaded copies. C-10
retrieval/restricted-export decisions remain open despite the approved monthly prices/performer limits.

## 4. Archive contents and exclusions

### Planned included domains

- Company identity/settings and supported configuration;
- workspace membership/staff records appropriate for the owner archive;
- Clients, service history and notes;
- catalog/services/categories;
- Visits/Transactions and defined operational finance records;
- Requests, Orders, Instalments and Rental Reservations;
- Packages;
- Payment Accounts and Payment Allocations;
- safe Import summaries and communication status; and
- manifest metadata needed to understand schema/version/scope.

### Mandatory exclusions or transformations

- password/authentication hashes, OAuth/access/refresh tokens, verification/reset tokens and secrets;
- raw Import files, preview/staging rows, reports and worker internals;
- security/risk/fraud signals and details that would weaken controls;
- data from another Company;
- private coworker information beyond data this Company may lawfully access;
- material restricted to protect third-party rights or applicable exceptions;
- bearer download URLs or grant material;
- internal payout/provider secrets; and
- executable spreadsheet formula payloads: CSV convenience files must neutralise formula injection,
  while canonical JSONL preserves the intended exact value.

The archive README and manifest must state that CSV is a convenience representation, JSONL is the
canonical structured record, some values may be excluded/redacted for security or third-party rights,
and the archive is not designed for direct re-import.

## 5. Personal-data roles and notices

| Data/activity | Likely role | Required treatment |
|---|---|---|
| Customer Personal Data copied into archive | Perelai processor; business controller | DPA instruction, owner authority, subprocessor/storage safeguards |
| account/BillingCustomer identifiers used to authorise action | Perelai controller | Privacy Notice, minimisation, security basis/retention |
| actor/Company/job/timestamps and closed reason codes | mixed; limited controller security/claims purpose possible | approved schema, PII-minimised logs, retention/legal holds |
| object storage/worker processing | subprocessor chain if third party | verified entity/location/transfer/retention in Subprocessor List |
| support access to failed export | role follows underlying data plus Perelai security obligations | least privilege, audit, no archive emailed/attached |

Do not use `PII-free` as a legal conclusion merely because names/emails are absent. Actor IDs, Company
IDs, timestamps and linkable job records can remain personal data. Public text may say
`data-minimised operational and security metadata` only after schema/log review.

## 6. Retention and lifecycle matrix

| Record/object | Planned period/event | Required implementation evidence | Legal decision |
|---|---|---|---|
| ready archive | 24h from READY | lifecycle job, object HEAD/delete, boundary tests, no version recovery | approve public promise |
| signed download URL | <=5m | provider config and log redaction test | security sign-off |
| create/download grant | 10m, single use | stored hash only; atomic use/replay tests | approve description |
| staging/failed object | immediate cleanup | failure-injection, retry and orphan sweep | define operational target |
| export job record | planned default 12m | deletion job and query/admin evidence | privacy/counsel approval |
| export audit events | planned default 12m | PII-minimised schema and immutable/security controls | privacy/counsel approval |
| underlying workspace data | unaffected by export expiry | no mutation assertions | governed by normal retention/deletion |
| backups/storage versions | `[TBD]` | provider configuration and restore audit | must not contradict 24h claim |
| legal/security hold | event-based `[TBD]` | scoped hold/release runbook | counsel approval |

Company deletion must finish, cancel or purge every active/staging/ready export and prevent a later
worker retry from recreating an object. Artifact expiry must retain enough ownership mapping to delete
the object after any database pointer/state transition; never clear the only object identifier before
successful purge or a recoverable cleanup record exists.

## 7. Historical import acceptance findings — current status to verify

The combined release shares only the Settings/Data Transfer shell. Import and Export remain separate
domains, models and sources of truth. The 2026-08-23 verdict recorded these P1 findings. The newer
2026-09-05 inventory identifies implemented pipelines but is not a closure report for each finding.
Retrieve later acceptance evidence; record resolved/current/unverified per item instead of declaring
IM4/IM5 blocked or complete from this old list:

- preview scope must not widen simply by opening it;
- destructive locking must cover non-FK writers, not only rows reached by foreign keys;
- visit-note ownership must not permit two parents;
- journal-write failure must not be swallowed;
- purge must retain/recover object ownership until deletion succeeds;
- V2 GET must not leak a raw persistence row; and
- `canDownloadIssues` must truthfully represent a downloadable issue artifact.

Legal consequence: retain these as evidence checks, not timeless implementation blockers. Keep
current Import disclosures consistent with verified runtime. Do not promise a safe preview,
complete issue download, fixed cleanup period, atomic destructive replacement or recoverability based
on the planned design alone.

## 8. Required UI copy

### Data Transfer hub

> **Data transfer**
>
> Import supported data into this workspace or download a copy of its defined operational history.
> Import and export are separate operations. An export does not change or delete workspace data.

### Export page

> **Workspace Data Export**
>
> Download a copy of your workspace data. The archive includes the supported datasets listed below
> and remains available for 24 hours after it is ready. It is not designed as a backup or re-import
> file.

Render the 24-hour sentence only after the retention gate passes; otherwise use approved dynamic
configuration copy.

### Privacy boundary near help/contact

> Looking for personal data about you? A Workspace Data Export contains Company-wide records and is
> not a privacy access request. Contact the relevant business or {{PRIVACY_EMAIL}} to exercise a
> privacy right.

### Create confirmation

> Create an archive of the supported data in `[Company Name]`? Only Company owners may request it.
> We will notify you when it is ready. The notification will not contain the archive or a download
> link.

### Ready/download confirmation

> This archive may contain confidential business and client information. Download it only to a
> trusted device, keep it secure and delete copies you no longer need. The link created for this
> download is short-lived. Anyone who obtains it may be able to use it until it expires; do not share it.

The create/download action grant is consumed once. That does not make an object-storage signed
URL single-use; publish that claim only if delivery infrastructure actually enforces it.

### Expired/failed

> This archive is no longer available. Create a new export if you still need a copy.

> We could not create the archive. No source workspace data was changed. Try again or contact support
> with the export reference—do not send client data or screenshots of archive contents.

### Prohibited copy

```text
GDPR export
Fully compliant export
Complete backup of everything
Download all personal data
Restore this archive later
One click fulfils access/portability requests
```

## 9. Privacy Access Export/request workflow — separate workstream

Before claiming a self-service privacy export, create a separate plan covering:

1. requester intake and controller routing;
2. identity/authority verification proportionate to risk;
3. Perelai-controller data search and Customer-controller assistance;
4. person-scoped matching across user/client/contact identities without unsafe over-disclosure;
5. access supplemental information and portability eligibility/scope;
6. legal exemptions, manifestly unfounded/excessive requests and extension notices;
7. third-party rights, redaction and secure disclosure;
8. applicable deadlines by jurisdiction;
9. request/evidence retention and appeal/complaint handling; and
10. secure delivery/revocation without using the Company archive as the response artifact by default.

Until this workstream exists, Privacy Notice must provide a contact-based rights process and DPA
assistance route. Product analytics must count Workspace Data Export jobs separately from privacy
requests.

## 10. Billing restriction and Company lifecycle

- Trial expiry or subscription cancellation does not delete/archive Company data.
- Restricted mode may allow an approved export action, but that is a product/counsel decision—not an
  entitlement inferred from EX1.
- New Import is value-creating and is denied in restricted mode under the current billing plan.
- Export, read, closure and deletion are distinct actions and need independent authorization/state
  tests.
- A public visitor must receive neutral temporary-unavailable copy; no billing state is disclosed.
- Payer authority is not a substitute for Company-owner authorization to export Customer Data.
- Mandatory privacy/DPA assistance and any applicable switching/retrieval duties remain available
  independently of a paid feature entitlement; provide an authenticated or verified assisted route.
- Resolve F-18/Data Act applicability in document 12. A 24-hour downloadable object can expire
  while an approved longer retrieval period remains available through regeneration or assisted
  delivery. Do not delete the source or end the retrieval process merely because an artifact expired.

The final access matrix must be identical in Billing Policy, Terms, UI guards, API policy and worker
authorization. Never allow a stale grant created before restriction/ownership change to bypass current
authorization at download.

## 11. Release tests and evidence packet

### Authorization and isolation

- owner allowed; administrative-only member/staff/supervisor/non-member/payer-without-owner-role denied;
- actor remains active owner at both create and download;
- Company switch, membership removal and role downgrade invalidate/reject stale actions;
- TEAM revocation tests cover old JWT/refresh, in-flight final effects, outstanding grants, cached
  workspace data and ready-notification recipients; same user's other Company permissions persist;
- every dataset query and archive entry is tenant-scoped;
- concurrency cannot mix Companies or overwrite another object's key.

### Sensitive-action and delivery security

- create and download use distinct action-bound grants and fresh confirmation;
- only hashes are stored; atomic one-time consumption blocks replay/races;
- no grant, signed URL, archive content or token appears in logs, analytics, notifications or support
  events;
- signed URL is short-lived and object key is unpredictable/private;
- ready notification requires the user to return to authenticated Settings.

### Content and format

- manifest enumerates actual files, schema version, counts, timestamps and exclusions;
- JSONL round-trip preserves types/precision/timezones according to format contract;
- CSV mirrors are convenience-only and formula-injection-safe;
- secrets/raw imports/worker/risk/other-tenant/private-coworker fields are absent;
- large datasets stream within resource limits and partial archives are never marked READY.

### Lifecycle and recovery

- 24-hour boundary and clock behaviour are deterministic;
- failed/staging objects and DB state reconcile after every injected failure;
- purge retains a retryable ownership record until object deletion succeeds;
- Company deletion cancels/purges and prevents later recreation;
- storage versions/backups/lifecycle rules support the published deletion claim;
- job/audit metadata retention and legal holds execute as approved.

### Legal/copy

- no code, translation, email, analytics event or support macro uses prohibited terminology;
- archive page states scope/exclusions/expiry and that source data is unchanged;
- privacy-request route remains visible and distinct;
- Privacy/DPA/Subprocessor/Terms/Billing text matches runtime and production vendors;
- every language is human legally/linguistically reviewed before publication.

## 12. Handoff for simpler LLMs

Split remaining work into independently reviewable tasks:

1. current code/configuration and data/role audit using the 2026-09-05 inventory;
2. reconcile later acceptance reports against historical IM/EX gaps;
3. fix only evidenced outstanding implementation issues in their owning product plan;
4. complete C-10 and F-18 export/retrieval decisions;
5. verify Privacy Access Export/manual request operations separately;
6. reconcile legal text and obtain counsel approval; and
7. verify the evidence packet before any new release or commercial promise.

Implemented Export is not rebuilt from this legal plan. Existing deployment is not disabled by
this documentation review; any actual runtime change follows the product release procedure.

Every task must report current versus target behaviour, tests, unresolved `[TBD]`, plan drift and the
statement: `Code completion is not legal approval.`

## 13. Official reference anchors

- [GDPR Article 15 (access)](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)
- [GDPR Article 20 (portability)](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)
- [EDPB Guidelines 01/2022 on right of access](https://www.edpb.europa.eu/documents/guideline/guidelines-012022-on-data-subject-rights-right-of-access_en)
- [ICO guidance on data portability](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-data-portability/)

These sources inform the boundary. Counsel must determine exact applicability, roles, regional
requirements and response procedure for Perelai's launch footprint.
