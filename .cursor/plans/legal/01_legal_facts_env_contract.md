# Perelai legal facts inventory and env contract

**Purpose:** the fact sheet that must be completed before the source drafts may become production
documents.  
**Status:** mixed — code-observed facts plus unresolved business/legal facts.  
**Rule:** repository evidence proves implementation, not production deployment or legal sufficiency.

**Plan truth checked:** 2026-09-06 against launch-20260906, monetization catalogs/README,
ADR-0013 and TEAM0–TEAM5, using the previous app CONTEXT/data inventory review.
See `13_review_monetization_team_20260906.md` for the current commercial/team crosswalk and
`12_review_and_launch_decisions_20260905.md` for the earlier legal-source review.
Older code observations below require release verification; no production/vendor audit was performed.

## 1. Legal identity env contract

Legal identity is public information. Store it in the landing deployment environment as requested,
validate it in one server-side module and interpolate it into all documents. Never put private keys,
personal identity documents or non-public correspondence in `NEXT_PUBLIC_*` variables.

```env
# Required in production
NEXT_PUBLIC_LEGAL_PROVIDER_FULL_NAME=[TBD: full registered name of the FOP]
NEXT_PUBLIC_LEGAL_PROVIDER_FORM=Individual Entrepreneur (FOP)
NEXT_PUBLIC_LEGAL_TRADING_NAME=Perelai
NEXT_PUBLIC_LEGAL_COUNTRY_OF_REGISTRATION=Ukraine
NEXT_PUBLIC_LEGAL_REGISTRATION_NUMBER=[TBD]
NEXT_PUBLIC_LEGAL_TAX_NUMBER=[TBD: confirm whether/how it must be displayed]
NEXT_PUBLIC_LEGAL_BUSINESS_ADDRESS=[TBD: valid address for legal correspondence]
NEXT_PUBLIC_LEGAL_SUPPORT_EMAIL=[TBD]
NEXT_PUBLIC_LEGAL_PRIVACY_EMAIL=[TBD: monitored privacy mailbox]
NEXT_PUBLIC_LEGAL_NOTICES_EMAIL=[TBD: monitored legal mailbox]
NEXT_PUBLIC_LEGAL_SECURITY_EMAIL=[TBD: monitored vulnerability/incident route]

# Optional; render only when the complete block is present and the role actually exists
NEXT_PUBLIC_LEGAL_EU_REP_NAME=
NEXT_PUBLIC_LEGAL_EU_REP_ADDRESS=
NEXT_PUBLIC_LEGAL_EU_REP_EMAIL=
NEXT_PUBLIC_LEGAL_UK_REP_NAME=
NEXT_PUBLIC_LEGAL_UK_REP_ADDRESS=
NEXT_PUBLIC_LEGAL_UK_REP_EMAIL=
NEXT_PUBLIC_LEGAL_DPO_NAME=
NEXT_PUBLIC_LEGAL_DPO_EMAIL=
```

Template mapping:

| Draft token | Environment variable |
|---|---|
| `{{LEGAL_PROVIDER_FULL_NAME}}` | `NEXT_PUBLIC_LEGAL_PROVIDER_FULL_NAME` |
| `{{LEGAL_PROVIDER_FORM}}` | `NEXT_PUBLIC_LEGAL_PROVIDER_FORM` |
| `{{TRADING_NAME}}` | `NEXT_PUBLIC_LEGAL_TRADING_NAME` |
| `{{COUNTRY_OF_REGISTRATION}}` | `NEXT_PUBLIC_LEGAL_COUNTRY_OF_REGISTRATION` |
| `{{REGISTRATION_NUMBER}}` | `NEXT_PUBLIC_LEGAL_REGISTRATION_NUMBER` |
| `{{TAX_NUMBER}}` | `NEXT_PUBLIC_LEGAL_TAX_NUMBER` |
| `{{BUSINESS_ADDRESS}}` | `NEXT_PUBLIC_LEGAL_BUSINESS_ADDRESS` |
| `{{SUPPORT_EMAIL}}` | `NEXT_PUBLIC_LEGAL_SUPPORT_EMAIL` |
| `{{PRIVACY_EMAIL}}` | `NEXT_PUBLIC_LEGAL_PRIVACY_EMAIL` |
| `{{LEGAL_NOTICES_EMAIL}}` | `NEXT_PUBLIC_LEGAL_NOTICES_EMAIL` |
| `{{SECURITY_EMAIL}}` | `NEXT_PUBLIC_LEGAL_SECURITY_EMAIL` |
| `{{EU_REP_NAME}}` | `NEXT_PUBLIC_LEGAL_EU_REP_NAME` |
| `{{EU_REP_ADDRESS}}` | `NEXT_PUBLIC_LEGAL_EU_REP_ADDRESS` |
| `{{EU_REP_EMAIL}}` | `NEXT_PUBLIC_LEGAL_EU_REP_EMAIL` |
| `{{UK_REP_NAME}}` | `NEXT_PUBLIC_LEGAL_UK_REP_NAME` |
| `{{UK_REP_ADDRESS}}` | `NEXT_PUBLIC_LEGAL_UK_REP_ADDRESS` |
| `{{UK_REP_EMAIL}}` | `NEXT_PUBLIC_LEGAL_UK_REP_EMAIL` |
| `{{DPO_NAME}}` | `NEXT_PUBLIC_LEGAL_DPO_NAME` |
| `{{DPO_EMAIL}}` | `NEXT_PUBLIC_LEGAL_DPO_EMAIL` |

Do not use `Perelai LLC`, a US address, a Polish entity, a DPO or a representative unless documentary
evidence confirms it. If privacy minimisation requires not publishing the founder's residential
address, counsel must identify a lawful service/registration address; an LLM must not solve that by
omission or invention.

### Validation requirements

- trim all values and reject control characters/HTML;
- validate emails and prohibit `localhost`/example domains in production; verify delivery and a
  responsible person for support/privacy/legal/security routes (one monitored mailbox may serve
  multiple roles); assess a public phone/support alternative for launch/Paddle requirements;
- validate exact document dates as `YYYY-MM-DD` and immutable versions as a conservative slug;
- optional representative/DPO blocks are all-or-nothing;
- never provide production fallbacks for name, address, registration or jurisdiction;
- interpolate as text nodes, never `dangerouslySetInnerHTML`;
- snapshot the resolved identity with every approved document build so later env changes do not
  silently alter an already versioned contract.

The last point is essential: an immutable Terms version cannot change because a deployment env value
changed. Build output or an approval manifest must preserve the exact rendered document hash.

## 2. Code-observed product facts

| Fact | State | Evidence / drafting consequence |
|---|---|---|
| B2B SaaS/PWA for service professionals and small businesses | CONFIRMED PRODUCT CONTEXT | Terms are B2B, subject to mandatory-law exceptions. |
| Email/password and Google authentication | LIVE IN CODE | Privacy covers credentials, Google identifiers and OAuth state. |
| Google Calendar integration | LIVE IN CODE | Requested scope is `calendar.events.readonly`; event objects, identifiers, sync data and OAuth tokens must be disclosed accurately. |
| Clients, visits, public requests/orders/rentals, notes, operational and financial records | LIVE IN CODE / deployment flags vary | Drafts use neutral categories; release owner must mark deployed modes. |
| CSV/vCard imports | CURRENT CODE; DEPLOYMENT/ACCEPTANCE TO VERIFY | Current inventory includes API/server/worker imports. Reconcile later IM acceptance with historical findings; verify preview/purge/recovery guarantees before publication. |
| Public booking/intake and tokenised status/receipt/preferences pages | LIVE IN CODE | Requires end-client terms, layered notice and token-safe legal links. |
| Payment records/allocations | LIVE IN CODE | Perelai records operational information; no evidence of client-money processing or card vaulting. Do not call records payment processing. |
| Company hard deletion/closure | NOT ESTABLISHED; DELETE STUB IN CURRENT ACTION INVENTORY | Do not promise a self-service erasure button. Approve/test assisted deletion, public link invalidation, storage cleanup and active subscription cancellation before publishing the route. |
| SaaS Billing/subscriptions | ARCHITECTURE + MONTHLY COMMERCIAL DECISIONS APPROVED; RUNTIME NOT RELEASED | Provider-neutral Billing; Paddle is first adapter/MoR. launch-20260906 approves business catalog inputs, not generated provider mapping, legal copy, checkout or deployment. |
| BillingCustomer/Company relationship | APPROVED DESIGN; PLANNED RUNTIME | One BillingAccount per Company with at most one current paid subscription; one payer may fund any number independently at standard offers. No PRIMARY/ADDITIONAL, sibling discount or commercial paid-count cap. Payer identity grants no workspace permissions. |
| SaaS trial | PLANNED | One 21-day no-card trial per BillingCustomer, shared by eligible Companies in the original window. Trigger/checkout conversion and exact commercial consequences remain implementation/approval gates. |
| Pricing/tax | MONTHLY PRICES APPROVED; C-11 DISCLOSURE/PROVIDER SETUP PENDING | SOLO_MONTHLY 1900 USD / STUDIO_MONTHLY 2900 USD, MONTH, quantity 1. Standard prices, no Founding/reference prices or approved annual offers. Paddle may localise currency; `tax_mode=location`; no launch overrides/PPP/custom FX/VAT engine. |
| Performer capacity and administrative access | APPROVED 1/5 LIMITS; TEAM RUNTIME/EVIDENCE PENDING | ACTIVE_SERVICE_PERFORMERS replaces TEAM_MEMBERS: SOLO 1 / STUDIO 5, including working owner, no-login profiles and invitations reserving new performer capacity. Admin-only access does not count or grant owner/team rights. |
| STUDIO release | C-17 HARD GATE APPROVED; TEAM-RELEASE NOT PASSED | Regular paid launch plan, not beta. Any live STUDIO sale/upgrade (including internal charges), public paid CTA and general team onboarding require TEAM-RELEASE plus Billing/legal gates. |
| STUDIO+ | C-18 CONTACT_ONLY APPROVED | Small contact block; no price, numeric limit, OfferCode, checkout, trial grant or launch commitment. Verify enquiry data/retention and actual support/mail provider before publication. |
| Workspace Data Export | IMPLEMENTED; PRODUCTION/COMMERCIAL AVAILABILITY UNVERIFIED | Owner-only Company archive under Settings/Data Transfer; C-10 packaging/restricted create/download PENDING. Must not be called GDPR/privacy access export or backup. See `11_workspace_data_export_legal_matrix.md`. |
| Privacy Access Export | AUTOMATED PRODUCT NOT ESTABLISHED; MANUAL PROCESS REQUIRED WHERE RIGHTS APPLY | Verified person-scoped response, distinct from tenant archive; establish working intake, deadlines and protected delivery before processing subject to these rights. |
| Email delivery via Resend | LIVE IN CODE | Candidate subprocessor; legal entity, regions and transfer mechanism require vendor/account verification. |
| Web Push via VAPID | LIVE IN CODE / feature flags | Browser permission is separate; endpoint/subscription data and provider path require audit. |
| BullMQ/Redis | IMPLEMENTED OPTION | Actual managed provider and production use are TBD. |
| Landing PostHog | LIVE IN CODE when key configured | In-memory persistence; autocapture/session replay disabled; `ip: false`; intentional typed events still leave the browser. |
| Landing `NEXT_LOCALE` cookie | LIVE IN CODE | One year, SameSite=Lax, set when language is selected. |
| Theme, attribution and region browser storage | LIVE IN CODE | Must appear in Cookie Policy after names/durations are verified. |
| AI functionality | NOT CONFIRMED AS PRODUCTION | No AI provider/production function confirmed. Assess rules-based billing/eligibility under Privacy §18 too; absence of AI is not an Article 22 conclusion. No shared Customer Data model training by default. |
| File attachments | CURRENT CODE; DEPLOYMENT TO VERIFY | Inventory CORE_WORKSPACE includes files/FileAsset storage. Audit content, metadata, access, retention and sensitive-data handling; do not silently omit deployed attachments from notices. |
| Coworker availability | CURRENT CODE, ADR-0010 | Linked Companies see opaque occupied intervals plus company name/colour. No foreign client/staff/service/amount/note or resolvable transaction ID; assess identifiability of solo-business data. |

## 3. Feature truth table to complete at release

Owner must mark one value for every row: `LIVE`, `BETA`, `FEATURE_FLAGGED`, `PLANNED`, or
`NOT_SUPPORTED`.

| Capability | Production state | Document impact |
|---|---|---|
| Email/password authentication | [TBD] | Terms, Privacy |
| Google sign-in | [TBD] | Terms, Privacy, subprocessors |
| Google Calendar | [TBD] | Terms, Privacy, DPA, subprocessors |
| Calendar and Inbox | [TBD] | Terms, Privacy |
| client CRM, notes | [TBD] | Terms, Privacy, DPA |
| files/attachments | [TBD] | Terms, Privacy, DPA, security |
| CSV/vCard imports | [TBD] | Terms, Privacy, DPA, retention |
| public appointments | [TBD] | all end-client documents |
| public requests | [TBD] | all end-client documents |
| public orders | [TBD] | all end-client documents |
| rental reservations/inventory | [TBD] | all end-client documents |
| transactional emails | [TBD] | Privacy, DPA, subprocessors |
| marketing emails | [TBD] | Privacy, consent UX |
| public receipts/status/preferences/client hub | [TBD] | Privacy, booking terms, link safety |
| prepaid Packages/instalment tracking | [TBD] | Terms, Privacy |
| staff/RBAC, administrative membership and performer profile separation | [TBD: TEAM-RELEASE evidence] | Terms, Privacy, DPA; current permissions, revocation, isolation and explicit migration |
| STUDIO regular paid team plan | [TBD: TEAM-RELEASE + BILL/legal gates] | Terms, Billing, UI; approved $29/month and 5 performers do not prove release |
| STUDIO+ contact-only enquiry | [TBD: implemented contact route] | Privacy, retention, UI; not a released subscription |
| PWA install and Web Push | [TBD] | Privacy, Cookie Policy |
| billing/subscription/trials | [TBD] | Terms, Privacy, Billing policy |
| Paddle-hosted checkout/Buyer Portal | [TBD] | Terms, Privacy, Cookies, Billing policy, third-party roles |
| Workspace Data Export | [TBD] | Terms, Privacy, DPA, retention, security, subprocessors |
| Privacy Access Export/request workflow | [TBD] | Privacy, DPA, rights operations |
| AI functionality | [TBD] | Terms, Privacy, subprocessors, AI Notice |

Security-sensitive storage observed during the follow-up audit:

- app authentication currently stores `accessToken` in `localStorage`;
- public client-hub/return flows store token-like session records in `sessionStorage`;
- onboarding drafts, last-login email and multiple UI/user preference records also use browser
  storage.

This is not a legal-text-only fact. Security must threat-model XSS/token exposure and decide whether
the production session architecture should change before the notice is approved. Legal pages must
never receive, log or analyse these values.

## 4. Controller/processor facts to approve

### Perelai generally acts as controller for

- landing visits and deliberate analytics events;
- registration, authentication, account/workspace administration;
- account identities, authentication roles and necessary security logs; operational performer
  records/schedules handled for the business remain processor data where that is their purpose;
- STUDIO+ business enquiries and replies, with separate marketing choices where required;
- subscriptions/billing records if billing is launched;
- BillingCustomer payer identity, trial eligibility, Offer intent/attribution, Company subscription
  projections and access-enforcement records if billing is launched;
- support, security, fraud prevention, product feedback and legal claims;
- Perelai's own marketing and referral attribution.

### Perelai generally acts as processor for

- end-client contact and service history entered/collected by a business;
- bookings, requests, orders, reservations, notes and business-uploaded content;
- reminders and operational messages sent on the business's instructions;
- imported contacts/events and operational/financial records stored for the business;
- operational performer profiles (including people without an account), assignments, schedules
  and business-directed team administration, according to the actual processing purpose;
- creation and delivery of a Workspace Data Export on an authorised owner instruction, to the extent
  the archive contains Customer Personal Data. Perelai separately controls limited security, audit
  and legal-compliance metadata for the export flow.

### Business customer generally acts as controller for

- why and how it uses end-client data;
- fields collected, legal basis, retention, staff access and marketing choices;
- its privacy/booking/cancellation/refund notices and data-subject responses.

These are functional conclusions, not labels that override facts. Escalate any Perelai reuse of
Customer Data for its own analytics, advertising or model training: it may change the role analysis.

## 5. Unresolved legal decisions — red release blockers

| ID | Decision owner | Required answer |
|---|---|---|
| F-01 | Founder + UA counsel | Exact FOP name, registration/tax identifiers and publishable legal address. |
| F-02 | UA/EU counsel | Is the Ukrainian FOP the only contracting entity? Is there an EU establishment from operations in Poland? |
| F-03 | Counsel | Governing law, exclusive/non-exclusive courts, pre-action process, and enforceability for B2B users in target markets. |
| F-04 | Counsel | GDPR territorial basis and whether an EU representative is required. |
| F-05 | Counsel | UK launch status, UK representative and review under current UK data law. |
| F-06 | Owner + counsel | Launch countries and whether any purported B2B user may legally be a consumer. |
| F-07 | Counsel | Liability cap, excluded losses, mandatory exceptions, indemnity and confidentiality carve-outs. |
| F-08 | Owner + counsel | Apply approved SOLO $19 / STUDIO $29 monthly and 1/5 performers; no Founding, annual or sibling terms. Approve remaining C-05 plan-change timing/consent/proration/over-limit behaviour, trial conversion, renewal/cancellation/refunds/grace/restriction and C-11 disclosures. Provider identity/configuration still require evidence; Paddle selection is settled. |
| F-09 | Engineering/ops | Post-termination export window, deletion timing, backup rotation and legal holds. |
| F-10 | Security | Evidence-backed TOMs, incident procedure and customer notification channel. |
| F-11 | Finance/tax + counsel | Contracting disclosure between Perelai supplier terms and the applicable Paddle buyer entity; vendor payout accounting/tax for the FOP; launch jurisdictions/currencies. |
| F-12 | Owner + counsel | C-07 first-charge timing/notices/cancellation; C-19 trial Plan/capabilities and existing-team accommodation. No assumed STUDIO trial from Offer intent and no TEAM-RELEASE bypass. |
| F-13 | Engineering/security/privacy | Prove Workspace Data Export owner RBAC, fresh confirmations, grant/URL TTLs, archive isolation, audit events, object purge and Company-deletion interaction. |
| F-14 | Privacy/counsel/ops | Approve the Privacy Access Export/manual request procedure, identity verification, Art. 15 supplemental information, Art. 20 scope, exceptions and third-party-rights review. |
| F-15 | Privacy/ops | Approve retention for export job/audit metadata (planned default 12 months), failed/staging cleanup, legal holds and incident evidence. |
| F-16 | Product/counsel | Define permitted read/export/delete/closure actions in Billing restriction and the neutral public-intake response; reconcile Terms, UI and policy. |
| F-17 | Launch-country counsel + billing/product | Buyer-status and renewal/withdrawal/remedies matrix, including EU online withdrawal function, US state rules and actual UK commencement; purchase assent/durable confirmation and provider/support responsibility. See document 12 §4. |
| F-18 | EU counsel + product/data operations | Data Act Chapter VI applicability/exceptions and, if applicable, switching terms, exportable data, retrieval window, charges and deletion. A short archive TTL or SOLO packaging does not override a legal duty. |
| F-19 | Privacy + engineering | Customer Data licence, staff legal bases, Google Limited Use, coworker sharing, sensitive notes/files, processor-support roles and complete DPA authorisation/audit safeguards. |
| F-20 | Security + product + privacy | TEAM0–TEAM5 evidence for actual deployment: current membership/permission enforcement, revocation/refresh/in-flight effects, cache/file/export/notification isolation, migration/history/future-work disposition. Reflect verified safeguards in DPA/TOMs; admin label is not owner/export/DPA authority. |
| F-21 | Product + privacy + support | STUDIO+ contact channel, minimum fields, lawful basis by purpose, recipient/vendor map and enquiry retention. No automatic marketing enrolment, client-data intake or promise of future paid access. |

## 6. Data and retention inventory — red until completed

| Category | Purpose/role | Active retention | Deleted/backups | Owner/evidence |
|---|---|---|---|---|
| account/profile | controller | [TBD] | [TBD] | auth + DB audit |
| performer profiles, schedules and membership/invite relationships | processor for business operations; controller for own account/security purposes | [TBD by purpose; include no-login profiles and expired/revoked invitations] | [TBD history/migration/deletion] | TEAM0/1/3 + privacy |
| session/refresh revocation, access versions and cache invalidation records | security role determined by purpose | [TBD actual TTLs] | [TBD; membership revocation != data erasure] | TEAM2 + storage audit |
| STUDIO+ enquiries and replies | controller; business enquiry/support | [TBD defined enquiry lifecycle] | [TBD mailbox/tool deletion/backups] | support/privacy; separate marketing records |
| legal acceptance and purchase/recurring authorisation evidence | controller/legal claims | [TBD by evidence type] | [TBD legal limitation period] | counsel + billing |
| refund/cancellation/withdrawal requests and confirmations | controller/contract/claims | [TBD] | [TBD] | support + Paddle reconciliation |
| coworker link/invite and occupied-time disclosure | mixed by purpose; business instruction | [TBD] | [TBD membership exit/history] | ADR-0010 + privacy |
| attachments/FileAsset objects, metadata and staging | processor where Customer Data | [TBD] | [TBD object/DB/backups] | files/storage audit |
| workspace and Customer Data | processor | customer term/instruction [TBD] | [TBD] | deletion jobs |
| deleted/archived clients | processor | [TBD] | [TBD] | schema/jobs |
| import source and preview files | processor | [TBD hours/days] | [TBD] | import pipeline |
| Workspace Data Export artifact | processor | planned: 24 hours from READY | automatic object purge; verify backups/versioning | EX1 tests + storage config |
| export create/download grants | mixed security/processor | planned: 10 minutes, single use | hash/revocation deletion `[verify]` | EX1 security tests |
| export job/audit metadata | mixed; data-minimised, not necessarily anonymous | planned default 12 months, legal approval required | `[TBD deletion/legal hold]` | privacy + operations |
| failed/staging export objects | processor | planned immediate cleanup | prove retries/orphan sweeps | worker/storage runbook |
| Calendar sync state/runs/tombstones | processor with limited security purpose by flow | [TBD] | [TBD disconnect/erasure/backups] | ADR-0005 + Calendar runtime |
| Google OAuth tokens | controller/processor depending use | until disconnect [verify] | revoke/delete [verify] | integration code/runbook |
| OAuth state and verification tokens | controller/security | [TBD actual TTL] | deletion [TBD] | constants/jobs |
| public booking/status/access tokens | processor/security | [TBD] | [TBD] | public token services |
| security/access logs | controller | [TBD] | [TBD] | platform/logging vendor |
| notification logs | mixed | env currently specifies 180 days | [TBD backups] | env + tasks |
| read system notifications | processor | env currently specifies 90 days | [TBD backups] | env + tasks |
| archived system notifications | processor | env currently specifies 30 days | [TBD backups] | env + tasks |
| revoked Web Push data | controller/processor | env currently specifies 30 days | [TBD backups] | env + tasks |
| system task runs | controller/operations | env currently specifies 30 days | [TBD backups] | env + tasks |
| support messages | controller | [TBD] | [TBD] | support tooling |
| BillingCustomer/trial/access projection | controller | [TBD contract/claims period] | `[TBD]` | Billing + counsel |
| Paddle customer/subscription/transaction/webhook records | controller/shared by flow | [TBD applicable law/contract] | restricted archive `[TBD]` | Paddle config + billing/counsel |
| vendor payout/accounting/tax records | controller/legal obligation | [TBD applicable FOP law] | restricted archive `[TBD]` | finance/tax counsel |
| PostHog events | controller | [TBD vendor setting] | [TBD] | PostHog project config |
| landing attribution/session storage | controller | browser session in code | ends with session [verify] | landing audit |
| language/theme/region preferences | controller | [TBD per key] | browser clear/expiry | landing audit |

Published prose must use verified periods. Where a fixed period is not possible, publish precise
criteria plus examples; do not substitute `as long as necessary` for an operational schedule.

## 7. Subprocessor and transfer inventory — red until completed

Code proves integration candidates, not the contracted legal entity or processing location.

| Function | Candidate observed | Contracted entity | Data | Locations | Role | Transfer mechanism | Status |
|---|---|---|---|---|---|---|---|
| landing hosting/CDN | [TBD] | [TBD] | request/technical data | [TBD] | processor | [TBD] | BLOCKED |
| app/API hosting | [TBD] | [TBD] | account + Customer Data | [TBD] | subprocessor | [TBD] | BLOCKED |
| PostgreSQL | [TBD] | [TBD] | application database | [TBD] | subprocessor | [TBD] | BLOCKED |
| object storage | private R2-compatible storage planned; vendor TBD | [TBD] | imports/files and short-lived export archives if live | [TBD] | subprocessor | [TBD] | BLOCKED |
| Redis/queues | [TBD] | [TBD] | task/notification data | [TBD] | subprocessor | [TBD] | BLOCKED |
| email delivery | Resend observed | [TBD legal entity] | recipients/message metadata/content | [TBD] | subprocessor | [TBD] | VERIFY |
| authentication/calendar | Google observed | [TBD entities/services] | identifiers, events, tokens | [TBD] | independent controller and/or subprocessor by flow | [TBD] | VERIFY |
| landing analytics | PostHog observed | [TBD legal entity/project region] | typed events, locale, marketing context | EU endpoint in code; contract verify | processor | [TBD] | VERIFY |
| error monitoring | [TBD/not observed] | [TBD] | errors/technical data | [TBD] | subprocessor | [TBD] | BLOCKED |
| support | [TBD] | [TBD] | support content | [TBD] | subprocessor | [TBD] | BLOCKED |
| billing/MoR | Paddle selected as first production adapter | applicable Paddle buyer entity `[verify by buyer location]` | identity, billing, tax, transaction/subscription data | [TBD] | authorised reseller/Merchant of Record and independent controller for buyer Transaction; assess any processor flows separately | Paddle terms/privacy + transfer assessment `[TBD]` | PLANNED, NOT LIVE |
| AI | not selected | [TBD] | [TBD] | [TBD] | [TBD] | [TBD] | NOT LIVE |

For each restricted transfer, counsel/privacy owner must select and execute the correct mechanism
(adequacy, SCC module, UK Addendum/IDTA, or another lawful basis) and complete any required transfer
risk assessment. Never publish `provider is GDPR compliant` as a substitute. Landing analytics providers process
Perelai-controller data; they are not Customer Data subprocessors merely because they are vendors.
Review remote access from Ukraine/Poland, not only server location.

## 8. Cookie/storage/network inventory to complete

| Origin | Technology | Observed behaviour | Classification pending |
|---|---|---|---|
| landing | `NEXT_LOCALE` cookie | set on language selection; one year; SameSite=Lax | preference/requested by user |
| landing | `perelai-theme` localStorage | stores theme selection | preference |
| landing | attribution sessionStorage | first-touch marketing context | analytics/attribution — jurisdiction review |
| landing | region localStorage | presentation region hint | preference — verify key/duration |
| landing | PostHog memory state | no cookie/localStorage persistence; typed events only; IP disabled in SDK config | analytics processing still disclosed |
| app | `accessToken` localStorage and auth/session state | observed; exact expiry/rotation/logout audit [TBD] | necessary/security, plus security architecture review |
| app | onboarding draft/settings | [TBD audit] | functionality [TBD] |
| app | billing checkout/return state | provider-free pending state only `[TBD audit]`; never persist bearer checkout URL/provider secret | necessary/functional/security |
| booking | confirmation/preferences/client-hub session state, including token-like records | observed; exact keys/expiry/clearing audit [TBD] | necessary/security [TBD] |
| Paddle-hosted domains | checkout and Buyer Portal technologies | governed by Paddle's notices/choices for its buyer flow; inventory exact handoff/return behaviour | independent third-party flow `[TBD]` |
| all | PWA/service worker/cache | [TBD audit] | functionality/security [TBD] |

Audit browser storage, response cookies, service-worker caches and outbound network requests in a
clean browser for each origin. A library comment is evidence, not the completed audit.

## 9. Security statements allowed only after evidence

Potentially publishable, once verified in production:

- encryption in transit;
- password hashing;
- role-based access controls;
- access logging/monitoring;
- backups and recovery tests;
- staff/contractor confidentiality;
- incident response;
- tenant isolation controls.

Never publish `bank-level`, `military-grade`, `fully GDPR compliant/certified`, `zero knowledge`,
`completely secure`, `encrypted at rest` or a certification unless scope-specific evidence exists.
The reviewed schema shows Google access/refresh-token fields but does not prove application-level token
encryption; security review must resolve this before drafting a claim.

## 10. Document approval manifest

Counsel/owner must fill and commit an immutable approval record separate from env:

```json
{
  "terms": {"version": "", "effectiveDate": "", "sha256": "", "approvalRef": ""},
  "privacy": {"version": "", "effectiveDate": "", "sha256": "", "approvalRef": ""},
  "dpa": {"version": "", "effectiveDate": "", "sha256": "", "approvalRef": ""},
  "bookingTerms": {"version": "", "effectiveDate": "", "sha256": "", "approvalRef": ""},
  "cookies": {"version": "", "effectiveDate": "", "sha256": "", "approvalRef": ""},
  "subprocessors": {"version": "", "effectiveDate": "", "sha256": "", "approvalRef": ""},
  "billing": {"version": "", "effectiveDate": "", "sha256": "", "approvalRef": ""}
}
```

Archive the submitted Paddle domain list, policy URLs/versions and approved private pricing revision
separately from production permission. Record B-13 purchase assent and B-14 refund-operation evidence;
C-13 accountant approval is not implied by a provider-verification result.

The implementation LLM may build schema and validation, but it may not populate approval values or
change `status` from `draft` to `approved`.
