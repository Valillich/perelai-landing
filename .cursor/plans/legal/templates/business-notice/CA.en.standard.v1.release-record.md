# CA/en standard booking notice — release record

**Recorded:** 2026-09-26. **Status:** ACTIVE_IN_CODE_NOT_DEPLOYED.
**Activation authority:** `owner-ca-en-release-20260926`: the owner explicitly requested
“разблокируй Канаду оставив QC/AB/BC закрытыми”. No repeated approval of the same content is needed.
The completed CA/en candidate is integrated as the actual runtime/default with its original digest.
Canada is PUBLIC only through the existing server subdivision and current operating-scope gates.
Admitted: **MB, NB, NL, NS, NT, NU, ON, PE, SK, YT**. Closed: **QC, AB, BC**.
The activation does not deploy the application or publish any actual Business's legal settings.
UA/US/AU template content and digests remain unchanged.

## Identity and integrity

| Field | Value |
|---|---|
| Country / language | CA / en |
| Version | business-booking-CA-en-v1 |
| Effective date prepared | 2026-09-26 |
| Preparation authority | owner-ca-en-preparation-20260926 |
| Processing profile | ORDINARY_NON_MEDICAL |
| Modes | APPOINTMENT, REQUEST |
| Scope | Ten admitted provinces/territories; QC/AB/BC closed; ordinary non-medical APPOINTMENT/REQUEST |
| Content SHA-256 | `92e09aa9376a72e52d3293db49c9971ad8d5fdb91a7eb54afc4e5004b84ec036` |
| Runtime / market | CA reviewed template/default present; CA PUBLIC with server province/scope admission |

The hash is computed by `businessNoticeTemplateDigest` from the actual app module; it covers
the template's digest contract, not the entire JSON wrapper, eligibility metadata or operating
evidence. The wrapper is ACTIVE_IN_CODE_NOT_DEPLOYED. `approvalRef` continues to identify the
prepared content authority; the separate activation authority is recorded above and in the JSON.
The country-only registry is combined with server-side province and operating-scope enforcement;
neither JSON metadata nor a valid CA template by itself opens a closed province.

Artifacts: [human source](CA.en.standard.v1.draft.md), [prepared JSON](CA.en.standard.v1.prepared.json),
[synthetic preview](CA.en.standard.v1.preview.md), [operator procedure](CA.en.standard.v1.operations.md).
Canonical source is the landing legal package, mirrored in beauty-finance's legal drafts.
Only supported Business fields remain: BUSINESS_NAME, CONTACT_EMAIL, PRIVACY_CONTACT_EMAIL.
The `.draft.md` suffix preserves the package convention; it does not mean the text has blank facts.

## Scope and reused facts

Ordinary private-sector, non-medical services; SOLO/STUDIO; booking without online payment,
prepayment, cancellation/no-show fees or marketing. No public-sector, health-information,
employment-record or sensitive-data compliance is inferred. Service names and free text can
themselves reveal sensitive information; a form warning does not make medical use admissible.
ORDER/RENTAL and Québec operations/targeting require their own applicable assessment.

Identity, registered address, support contact, Hetzner/Resend/Cloudflare, optional Calendar,
external images and real booking automation come from the existing approved common packet.
Ordinary 90-day request, 24-month client-history and 30+30-day closure rules are reused, with
narrow lawful preservation exceptions clearly identified. No blanket Canadian three-year tax
claim is made. 1095-day evidence of Perelai's own terms remains distinct from salon records.

The owner-approved manual MVP controls are not replaced by a demand for a cron scheduler,
new legal mailbox, external representative subscription or separate counsel certificate for each
salon. Existing CLI skips still need resolution. Neither a passing renderer nor this record
proves live retention, backup expiry or restored-data handling.

## Local differences and evidence

| Issue | Choice in this packet | Evidence |
|---|---|---|
| Applicability | No revenue/user-count exemption; account for federal/provincial scope | [OPC overview](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/02_05_d_15/) |
| Consent | Upfront purposes/recipients; contextual implied consent only for reasonable ordinary booking, withdrawal route; no marketing consent bundled | [OPC/AB/BC consent guidance](https://www.priv.gc.ca/en/privacy-topics/privacy-for-businesses/appropriate-handling-of-personal-information/collecting-personal-information-and-consent/consent/gl_omc_201805/) |
| Offshore processing | Disclose locations and foreign-authority access, preserve accountability and safeguards; no mandatory Canada-only hosting claim | [OPC transfers](https://www.priv.gc.ca/en/privacy-topics/airports-and-borders/gl_dab_090127/) |
| Alberta | Written provider policies/countries/purposes and named role/contact route | [Alberta guidance](https://www.alberta.ca/organization-responsibilities-for-protecting-personal-information) |
| British Columbia | Conditional one-year preservation of information used for directly affecting decisions; not all CRM and not automatic applicability to every technical check | [PIPA s.35](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/03063_01#section35) |
| Requests | 30-calendar-day service target; distinguish PIPEDA legal response from AB/BC deadlines; preserve pending-access records | [OPC requests](https://www.priv.gc.ca/en/privacy-topics/accessing-personal-information/obligations-for-organizations/02_05_d_54_ati_02/), [Alberta access](https://www.alberta.ca/accessing-your-personal-information), [BC PIPA](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/03063_01) |
| Accountability | Owner may take the responsible role; monitored contact and actual procedure | [OPC accountability](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/p_principle/principles/p_accountability/) |
| Breaches | Separate harm assessment/reporting workflow and PIPEDA incident record, not 24-month blanket client retention | [OPC breaches](https://www.priv.gc.ca/en/privacy-topics/privacy-for-businesses/privacy-breaches-at-your-business/gd_pb_201810/), [Regulations s.6](https://laws-lois.justice.gc.ca/eng/regulations/SOR-2018-64/FullText.html) |
| Email | Built-in client email allowlist verified: 18 booking/request/reservation/order/receipt/package events; `VisitReminderInternal` is not client email. No built-in marketing content. No new CEM consent/unsubscribe feature is needed because marketing functionality is absent. The transaction label alone does not establish a CASL exception; Company overrides remain subject to Terms §12 and any changed message requires reclassification. | Owner decision 2026-09-26; Terms §12, Public Booking Terms §5; `builtin-client-email-builder.ts` |
| Québec | Deferred release, not a nationwide English-only compliance claim | [Charter s.55, including exceptions](https://www.legisquebec.gouv.qc.ca/fr/version/lc/C-11?code=se%3A55&langCont=en), [CAI overseas processing](https://www.cai.gouv.qc.ca/protection-renseignements-personnels/information-entreprises-privees/utilisation-communication-renseignements-personnels) |

Official sources checked on 2026-09-26. These drafting choices are not a regulator's approval.
Ukrainian law concerns the separate relationship with Perelai, subject to mandatory Canadian
protections; it is not imposed on the salon's relationship with its customer.

## Historical preparation verification (before activation)

- Actual `business-notice-template.ts` loaded through SWC; candidate registry injected only
  in memory. No alternative implementation of the renderer/digest was substituted.
- 12 successful renders: two modes × three reminders × same/separate privacy email.
- 12 rejection checks: US/NZ country mismatch, ORDER/RENTAL, wrong digest, modified content
  under pinned digest, future and invalid dates in current lookup, pinned lookup and rendering.
- The five human-source text blocks match JSON exactly. No `[TBD]` or unresolved token survives
  rendering. Current and pinned candidate lookup match; real CA lookup remains null.
- UA/US/AU digests retain their previously pinned values.
- Strict TypeScript no-emit check of the literal candidate/reference against the actual helper
  types passed. A full API/web/core typecheck and full suite were not rerun for document preparation.
- Source and JSON inspected for US/AU boilerplate leakage; no Australian regulator, CCPA,
  revenue exemption, GDPR consent basis or invented Canadian-only storage promise is present.

These checks do **not** validate province admission, preservation, delivery/unsubscribe or real
operator responses. They are exact text/render checks, not operational release evidence.

## Scoped code activation verification — 2026-09-26

- 461/461 relevant API tests across 13 suites passed in the full API run.
- 28/28 focused web tests and 12/12 core tests passed. The create-workspace UI exposes
  exactly ten enabled CA subdivisions; QC/AB/BC options are disabled and the scope checkbox is required.
- API and core typechecks passed. API needed a 6 GiB Node heap after default-heap exhaustion.
- Full API run: 189 suites passed / 13 failed; 2570 tests passed / 145 failed. Failing suites
  are outside this activation diff: missing test DB, sandbox loopback, module dependencies,
  storage mocks, locale/billing fixtures, reminder and client-lifecycle expectations.
  The full suite is not green. Full web typecheck was not rerun for this catalog/template change.
- No configured TEST_DATABASE_URL: PostgreSQL integration and the existing migration were not
  exercised. Service tests use real methods/policies with synthetic I/O, not a deployed end-to-end drill.
The actual reviewed CA default is used, with exact Markdown → JSON → runtime content/digest.
Tests exercise create, createWorkspace, setup, preview/save/publish, public info/availability and
submit entry points for all ten regions, with synthetic database adapters and fulfilment stubs.
They do not prove PostgreSQL transactions, migrations, delivery or production deployment.
QC/AB/BC are rejected even with a valid scope answer or an old public link; missing/invalid codes
and a missing/stale scope declaration still fail closed. Country policy overrides were removed
from the CA lifecycle/intake tests. UA/US/AU references remain pinned and unchanged.

## Deployment and operating follow-through

Deploy the reviewed application change with the existing `20260926120000_company_subdivision_geography` migration;
verify it is applied and smoke-test CA-ON plus a denied CA-QC path in the deployed environment.
Keep QC/AB/BC closed. An individual owner must confirm actual facts and explicitly publish their
notice; activating the shared default does not migrate or publish existing settings.
Use [the operator procedure](CA.en.standard.v1.operations.md) for monitored support/privacy contact,
request preservation and incident handling. Live inbox coverage and operating performance were not
tested here; do not turn this code release into a claim that those facts were verified.
Keep the booking-only email boundary and Terms §12 restrictions. No marketing feature is added,
and “transactional” alone is not a CASL exception. AB inventory and BC retention are separate
future activation work, not requirements to reopen those provinces as part of this release.
No production deployment, ordinary-DB mutation, real email or Business publication occurred.
