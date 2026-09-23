# Perelai legal facts inventory and env contract

**Purpose:** the fact sheet that must be completed before the source drafts may become production
documents.  
**Status:** mixed — code-observed facts plus unresolved business/legal facts.  
**Rule:** repository evidence proves implementation, not production deployment or legal sufficiency.

**Plan truth checked:** 2026-09-23 against the current monetization catalog, 2026-09-16 policy,
selected v1 trial-conversion path, ADR-0013, CONTEXT and TEAM/Drawer readiness reports.
Use `14_launch_legal_minimum_20260918.md` for current launch scope; reviews 12/13 are historical.
The clean-browser/source evidence in `17_cookie_storage_runtime_audit_20260923.md` supplements this
inventory. It does not establish provider-account facts, legal classification or release approval.
The later Launch v1 source change removes stored landing attribution and disables PostHog; the
2026-09-23 production observations remain historical until a new build is deployed and audited.

**Apply blockers by stage:** finish facts for current processing and the chosen launch country now;
payment facts before charges; optional-feature facts before enabling/promising that feature.
F-05 applies if the UK is served; F-13/15 specific archive controls apply to enabled export; F-17/18
need an applicability decision for actual operations/markets, not all-country implementation.
A documented manual rights/return/deletion process is acceptable if it meets actual duties.
Mark irrelevant/deferred items with a reason, never fabricate facts or publish TBDs. Reuse one
owner/legal review packet rather than a separate approval meeting for every row.

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
| Cash Drawer | IMPLEMENTED CORE; OPERATIONAL RELEASE TO VERIFY | Cash custody sessions/counts/movements/discrepancies and actor references; also SOLO owner capability. DR0–6 code exists; use current DR7/readiness evidence. No fiscal register, acquiring, statutory Z-report or STUDIO-only promise. |
| Company hard deletion/closure | NOT ESTABLISHED; DELETE STUB IN CURRENT ACTION INVENTORY | Do not promise a self-service erasure button. Approve/test assisted deletion, public link invalidation, storage cleanup and active subscription cancellation before publishing the route. |
| SaaS Billing/subscriptions | IMPLEMENTATION IN PROGRESS; LIVE READINESS NOT ESTABLISHED HERE | Reuse current BILL1/BILL2 evidence; old BILL1A-only verdict is historical. Paddle remains first MoR. Policy approval/fixture examples do not establish provider account approval or live behavior. |
| BillingCustomer/Company relationship | APPROVED DESIGN; PLANNED RUNTIME | One BillingAccount per Company with at most one current paid subscription; one payer may fund any number independently at standard offers. No PRIMARY/ADDITIONAL, sibling discount or commercial paid-count cap. Payer identity grants no workspace permissions. |
| SaaS trial | C-19 APPROVED; RUNTIME RELEASE EVIDENCE REQUIRED | One shared local 21-day STUDIO trial per payer, up to 5 performers/TEAM. No card or provider subscription during trial in v1; choose/pay after expiry. No automatic day-22 charge or permanent free MVP. Drawer subject to operational availability. |
| Pricing/tax | MONTHLY PRICES APPROVED; C-11 DISCLOSURE/PROVIDER SETUP PENDING | SOLO_MONTHLY 1900 USD / STUDIO_MONTHLY 2900 USD, MONTH, quantity 1. Standard prices, no Founding/reference prices or approved annual offers. Paddle may localise currency; `tax_mode=location`; no launch overrides/PPP/custom FX/VAT engine. |
| Performer capacity and administrative access | APPROVED; TEAM CORE IMPLEMENTED, COMMERCIAL ADMISSION/RELEASE PENDING | SOLO 1 / STUDIO 5 active performers including working owner/no-login/reserved new-profile invites. ADMINISTRATOR reception differs from SUPERVISOR management. Reuse TEAM/TR evidence; verify TEAM4/5/BILL admission. |
| STUDIO release | C-17 HARD GATE APPROVED; TEAM-RELEASE NOT PASSED | Regular paid launch plan, not beta. Any live STUDIO sale/upgrade (including internal charges), public paid CTA and general team onboarding require TEAM-RELEASE plus Billing/legal gates. |
| STUDIO+ | C-18 CONTACT_ONLY APPROVED | Small contact block; no price, numeric limit, OfferCode, checkout, trial grant or launch commitment. Verify enquiry data/retention and actual support/mail provider before publication. |
| Workspace Data Export | IMPLEMENTED; PRODUCTION/COMMERCIAL AVAILABILITY UNVERIFIED | Owner-only Company archive under Settings/Data Transfer; C-10 packaging/restricted create/download PENDING. Must not be called GDPR/privacy access export or backup. See `11_workspace_data_export_legal_matrix.md`. |
| Privacy Access Export | AUTOMATED PRODUCT NOT ESTABLISHED; MANUAL PROCESS REQUIRED WHERE RIGHTS APPLY | Verified person-scoped response, distinct from tenant archive; establish working intake, deadlines and protected delivery before processing subject to these rights. |
| Email delivery via Resend | LIVE IN CODE | Candidate subprocessor; legal entity, regions and transfer mechanism require vendor/account verification. |
| Web Push via VAPID | LIVE IN CODE / feature flags | Browser permission is separate; endpoint/subscription data and provider path require audit. |
| BullMQ/Redis | IMPLEMENTED OPTION | Actual managed provider and production use are TBD. |
| Landing PostHog | DISABLED IN LAUNCH V1 SOURCE; 2026-09-23 PRODUCTION CONFIG REQUEST OBSERVED | Root layout no longer mounts the SDK and the retained adapter ignores even a configured key. Dormant settings retain memory persistence and disabled autocapture/replay. Verify zero requests after deployment; previous production events and provider retention remain subject to the historical audit. |
| Landing `NEXT_LOCALE` cookie | LIVE IN CODE AND OBSERVED IN PRODUCTION | One year, SameSite=Lax. The production entry path set it without an explicit language-button click in the audited session; final copy must reflect actual middleware behaviour. |
| Theme and region browser storage; prior attribution | CURRENT SOURCE RETAINS REQUESTED PREFERENCES AND CLEARS LEGACY `perelai_attr` | No new landing UTM/referrer storage or cross-domain marketing handoff in Launch v1. Verify the new build and disclose still-enabled preferences. |
| AI functionality | NOT CONFIRMED AS PRODUCTION | No AI provider/production function confirmed. Assess rules-based billing/eligibility under Privacy §18 too; absence of AI is not an Article 22 conclusion. No shared Customer Data model training by default. |
| File attachments | CURRENT CODE; DEPLOYMENT TO VERIFY | Inventory CORE_WORKSPACE includes files/FileAsset storage. Audit content, metadata, access, retention and sensitive-data handling; do not silently omit deployed attachments from notices. |
| Coworker availability | CURRENT CODE, ADR-0010 | Linked Companies see opaque occupied intervals plus company name/colour. No foreign client/staff/service/amount/note or resolvable transaction ID; assess identifiability of solo-business data. |

### Public booking legal setup — 2026-09-23 decision

See [document 19](19_simple_booking_legal_setup_20260923.md) for the current product contract.
Observed source has no end-client card collection/acquiring/automatic charge in the booking form.
This does not establish whether the Business separately takes prepayments or sells prepaid packages.

- Current UI: `/settings/booking-card` → settings → `PublicBookingSettingsSheet`, 11 legal fields.
  Current readiness uses custom booking/cancellation disclosures and a privacy URL; refund absence
  alone does not block. The simplified/generated-notice path is **planned, not implemented** here.
- Standard eligibility: the owner confirms no prepayment/deposit/cancellation fee for this flow.
  No required refund text, custom policy URL, manually entered version or cancellation-reminder
  checkbox. Both SOLO and STUDIO use the same setup.
- Confirm actual provider identity and monitored contact; do not treat Company display name or
  account email as verified public legal identity. Collect additional facts only when applicable.
- Platform-supplied template inputs: approved first-market/language wording, actual purposes/legal
  bases, recipient/transfer facts and retention/rights procedures from §§4–7. Review these once for
  the supported template; do not delegate legal drafting or unknown provider facts to each master.
- A generated layered Business notice satisfies the product's notice-presence requirement when
  approved, populated, owner-confirmed and presented. An adequate external notice is an alternative.
  Privacy acknowledgement is not consent; do not derive consent from booking submission.
- Preserve legacy/custom agreements and capture selected template/path/version plus rendered text
  in server-validated revision/evidence. Optional/non-applicable fields stay out of blocking errors.

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
| Cash Drawer cash recording/reconciliation | [TBD operational availability, no repeat DR0–6] | Terms/Privacy/DPA and data retention; omit promise if disabled |
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

## 5. Legal facts and applicability register — staged launch checks

| ID | Decision owner | Required answer |
|---|---|---|
| F-01 | Founder + UA counsel | Exact FOP name, registration/tax identifiers and publishable legal address. |
| F-02 | UA/EU counsel | Is the Ukrainian FOP the only contracting entity? Is there an EU establishment from operations in Poland? |
| F-03 | Counsel | Governing law, exclusive/non-exclusive courts, pre-action process, and enforceability for B2B users in target markets. |
| F-04 | Counsel | GDPR territorial basis and whether an EU representative is required. |
| F-05 | Counsel | UK launch status, UK representative and review under current UK data law. |
| F-06 | Owner + counsel | Launch countries and whether any purported B2B user may legally be a consumer. |
| F-07 | Counsel | Liability cap, excluded losses, mandatory exceptions, indemnity and confidentiality carve-outs. |
| F-08 | Owner + legal | C-05/C-19 and basic C-11 now decided: monthly renewal, period-end cancellation, no voluntary prorated refund; trial STUDIO, v1 post-expiry purchase. Verify enabled flows/copy, settle actual grace/restriction and served-market wording. No R-01 guarantee approval task. |
| F-09 | Engineering/ops | Post-termination export window, deletion timing, backup rotation and legal holds. |
| F-10 | Security | Evidence-backed TOMs, incident procedure and customer notification channel. |
| F-11 | Finance/tax + counsel | Contracting disclosure between Perelai supplier terms and the applicable Paddle buyer entity; vendor payout accounting/tax for the FOP; launch jurisdictions/currencies. |
| F-12 | Product + legal | Verify the selected v1 path: no early payment setup/provider trial; 21-day STUDIO expires without charge, then affirmative purchase. C-07 early setup deferred; do not reopen first-charge alternatives or let its absence block ordinary checkout. |
| F-13 | Engineering/security/privacy | Prove Workspace Data Export owner RBAC, fresh confirmations, grant/URL TTLs, archive isolation, audit events, object purge and Company-deletion interaction. |
| F-14 | Privacy/counsel/ops | Approve the Privacy Access Export/manual request procedure, identity verification, Art. 15 supplemental information, Art. 20 scope, exceptions and third-party-rights review. |
| F-15 | Privacy/ops | Approve retention for export job/audit metadata (planned default 12 months), failed/staging cleanup, legal holds and incident evidence. |
| F-16 | Product/counsel | Define permitted read/export/delete/closure actions in Billing restriction and the neutral public-intake response; reconcile Terms, UI and policy. |
| F-17 | Launch-country legal + billing/product | Review buyer status, renewal/withdrawal/remedies for the first served market; verify purchase assent and confirmation plus Paddle/support responsibility. Use a provider withdrawal route if applicable and sufficient. Other-country annexes/custom automation only when required. Document 14 controls scope. |
| F-18 | EU counsel + product/data operations | Data Act Chapter VI applicability/exceptions and, if applicable, switching terms, exportable data, retrieval window, charges and deletion. A short archive TTL or SOLO packaging does not override a legal duty. |
| F-19 | Privacy + engineering | Customer Data licence, staff legal bases, Google Limited Use, coworker sharing, sensitive notes/files, processor-support roles and complete DPA authorisation/audit safeguards. |
| F-20 | Security + product + privacy | Reuse current TEAM/TR/Drawer acceptance reports for actual deployment, current sessions/permissions, offboarding and data isolation; TEAM-RELEASE still required for public STUDIO trial/sales. Verify actual ADMINISTRATOR/SUPERVISOR scope and Drawer enabled status; no repeated implementation or invented security claims. |
| F-21 | Product + privacy + support | STUDIO+ contact channel, minimum fields, lawful basis by purpose, recipient/vendor map and enquiry retention. No automatic marketing enrolment, client-data intake or promise of future paid access. |

## 6. Data and retention inventory — complete enabled processing before publication

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
| cash custody/count/movement/discrepancy records, notes and operator references | processor for business operations; limited security purpose by flow | [TBD cash record vs person-link periods] | [TBD privacy/anonymisation vs business history/holds] | Drawer DR6 + privacy; no new export promise |
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
| historical PostHog events/config requests | controller | [TBD vendor setting] | [TBD] | 2026-09-23 production config request; Launch v1 source disables SDK; prior provider records/dashboard still require review |
| historical landing attribution/session storage | controller | browser tab/session in prior production build | new source removes legacy key on page load and creates no replacement; prior server/app acquisition records are separate | production audit 2026-09-23; post-deploy verification pending |
| language cookie | controller | `NEXT_LOCALE`: 1 year | cookie clear/expiry | production `Set-Cookie` audit 2026-09-23 |
| theme/region preferences | controller | localStorage until changed/removed | browser/site-data clear | source audit; absent in clean runtime profile |
| app bearer access token | controller/security | localStorage record; JWT lifetime 1 day | logout or 401 removes record; expired value may remain until a clear path | auth source audit; security acceptance required |
| onboarding draft | mixed business data/functionality | sessionStorage; completion clear or tab/session end | browser session clear; explicit logout did not clear in reviewed path | app source audit 2026-09-23 |
| billing checkout attempt | controller/security/functionality | sessionStorage; 120-second polling deadline, terminal clear or tab/session end | timeout does not itself prove immediate record deletion | current source only; production checkout not established |
| public hub/personal-return session records | processor/security | sessionStorage; logical 2-hour freshness checked on read | stale/error/mismatch clear or tab/session end; physical timer not established | public-routing source/tests; raw token-like data threat model in document 17 |
| public booking return path | processor/functionality | sessionStorage with no explicit TTL found | overwrite or tab/session end | public-routing source/runtime audit |
| Cloudflare challenge cookie/request logs | controller/security by purpose `[confirm role]` | `cf_clearance` observed with about 1-year expiry | account/log deletion and backups `[TBD]` | production runtime proves cookie, not dashboard configuration |
| Google OAuth binding cookie | controller/security | 10 minutes | browser expiry; server binding deletion `[TBD]` | production API `Set-Cookie` plus auth source/tests |

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

## 8. Cookie/storage/network inventory — runtime/source evidence completed 2026-09-23

Full method, per-surface results, outbound hosts, provider-retention gaps and threat models are in
`17_cookie_storage_runtime_audit_20260923.md`. `None in clean profile` means none was observed before
the audited interaction; it is not a claim about every later user action.

| Origin/surface | Technology | Runtime/source evidence | Retention/clearing evidence | Classification/remaining evidence |
|---|---|---|---|---|
| production landing home | `NEXT_LOCALE` cookie | present on entry; `Path=/`, `SameSite=Lax`, JavaScript-readable | `Max-Age=31536000` (1 year) | owner/counsel classification by launch country; copy must not say only explicit selection |
| production landing | `cf_clearance` cookie | Cloudflare challenge cookie; `HttpOnly`, `Secure`, `SameSite=None`, `Partitioned` | observed expiry about 1 year | security/ops must reconcile dashboard setting, purpose and Cloudflare account/log retention |
| landing | `perelai-theme` localStorage | source-confirmed explicit theme preference; absent in clean audited profiles | until replaced/removed/site-data clear | functional classification by launch country |
| landing | `perelai-market` localStorage | source-confirmed explicit `?market` display override; absent in clean audited profiles | until replaced/removed/site-data clear | functional classification by launch country |
| production landing home, 2026-09-23 baseline | `perelai_attr` sessionStorage | stored first-touch source/campaign/referrer-host/niche; production clean home stored direct/founding-beta | tab/browser session; browser restore behaviour varies | new source removes legacy key and creates no replacement; verify deployed result |
| production landing home, 2026-09-23 baseline | PostHog SDK memory/network | no SDK cookie/localStorage; production fetched `eu-assets.i.posthog.com` project config before choice | memory ends on unload; provider event/config retention `[TBD vendor setting]` | new source removes bootstrap and adds hard disable; verify deployed network result and old provider retention |
| production Cookie Policy | landing cookie/storage/network | only `cf_clearance` observed; no PostHog host, localStorage, sessionStorage, IndexedDB, Cache Storage or service worker | cookie as above | route result does not cure home-page behaviour |
| app login/register | `i18nextLng` localStorage | observed in production and current local source | until replaced/removed/site-data clear | functional classification |
| app auth | `accessToken` localStorage | bearer JWT; current source lifetime 1 day; API checks membership ID/access version; logout/401 removes token | may persist across restart and remain after expiry until a clear path | necessary/security; explicit XSS, CSP, cross-tab logout and residual-state security acceptance required |
| app login | `lastLoginEmail` localStorage | source-confirmed login prefill | until replaced/removed/site-data clear | functional/minimisation review |
| app preferences/UI | `bf-theme`, `bf-privacy-modes`, education/install/counter/entity-ID groups | source-confirmed; privacy modes mask UI amounts/statistics and are not tracking consent | until changed/removed/version/site-data clear depending key | group only where purpose/retention remain clear; stable identifiers are not generic preferences |
| onboarding | `bf_onboarding_draft_${companyId}` sessionStorage | business/location/timezone/template, services/prices/expenses, staff and Calendar/import run/job state | completion clear or tab/session end; explicit logout clear not found | necessary/functional plus Customer Data/security review |
| app billing | `billing_checkout_attempt` sessionStorage | attempt/OfferCode/Company/payer/idempotency/deadline; no provider secret/checkout URL | terminal clear or tab/session end; polling deadline 120 seconds | current source only; production route redirected to login; necessary/security classification |
| public booking | `bf_public_booking_return_path` sessionStorage | pathname/search observed for fake-slug booking in production/current source | overwrite or tab/session end; no explicit TTL found | necessary/functional; query/token and log-redaction review |
| public hub | `bf_public_hub_session` sessionStorage | raw token + verified time only after successful load; no record created by fake-token runtime probe | 2-hour logical freshness on read; stale/error/mismatch clear; physical timer not established | necessary/security; threat model and backend token/log evidence required |
| personal booking | `bf_public_personal_booking_return_path` sessionStorage | return path may contain raw path/query token, Company slug and verified time | same 2-hour read-time check/removal | necessary/security; do not send to legal pages, analytics or cross-origin referrers |
| Google OAuth start | `google_oauth_bind` cookie | production API set `HttpOnly`, `Secure`, `SameSite=Lax`, `Path=/api/auth`, then redirected to Google | `Max-Age=600` (10 minutes) | Google redirect cookies were not audited; server deletion/log retention `[TBD]` |
| Web Push | `/notification-sw.js`, Push API subscription | source registers worker only from user-initiated enable flow; worker uses an in-memory Map, not Cache Storage/IndexedDB | subscription until revoked/expired; revoked backend records 30 days from env evidence; backups `[TBD]` | separate browser permission and purpose/role/provider review |
| all clean audited surfaces | IndexedDB / Cache Storage / service-worker registration | none observed; no app/landing browser IndexedDB or Cache Storage source use found | not applicable to clean state | rerun after material actions and production changes; Web Push worker remains conditional |
| production app/public | outbound app/API hosts | app assets on `app.perelai.app`; public pages on `book.perelai.app`; public data from `api.perelai.app` | provider/request/security-log retention `[TBD]` | contracted entities, regions, headers and logs still require account evidence |
| current-source checkout | Paddle.js | local route attempted `cdn.paddle.com`; production checkout probe redirected to login and made no Paddle request | Paddle/provider retention `[TBD]` | exact live Checkout/Portal inventory and production release evidence absent |
| current source | conditional third parties | Google redirect, browser-selected push endpoint and `images.unsplash.com` cover images occur only on their trigger paths | provider-specific `[TBD]` | verify enabled production actions and provider settings before publication |

The owner has selected a Launch v1 build with no optional landing analytics or marketing integration.
The source removes attribution storage and disables PostHog even with a key; it carries no CMP.
LGL-5 is complete for the deployed build only after a clean-browser check proves no optional SDK,
config/event request, pixel or attribution write across routes, plus a Cloudflare dashboard injection
check. The remaining service/security and requested-preference technologies still need the recorded
served-country classification and verified provider facts before this draft can be approved. A banner
that records a choice while an optional SDK still loads is a test failure for any future release.

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
