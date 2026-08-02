# Perelai legal facts inventory and env contract

**Purpose:** the fact sheet that must be completed before the source drafts may become production
documents.  
**Status:** mixed — code-observed facts plus unresolved business/legal facts.  
**Rule:** repository evidence proves implementation, not production deployment or legal sufficiency.

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
NEXT_PUBLIC_LEGAL_PRIVACY_EMAIL=privacy@perelai.com
NEXT_PUBLIC_LEGAL_NOTICES_EMAIL=legal@perelai.com

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
- validate emails and prohibit `localhost`/example domains in production;
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
| CSV/vCard imports | LIVE IN CODE | Rights to import and retention/deletion need explicit operational verification. |
| Public booking/intake and tokenised status/receipt/preferences pages | LIVE IN CODE | Requires end-client terms, layered notice and token-safe legal links. |
| Payment records/allocations | LIVE IN CODE | Perelai records operational information; no evidence of client-money processing or card vaulting. Do not call records payment processing. |
| Billing/subscriptions | NOT IMPLEMENTED per reviewed architecture | No auto-renewal/refund prose may be activated. Founding Beta language must remain conditional. |
| Email delivery via Resend | LIVE IN CODE | Candidate subprocessor; legal entity, regions and transfer mechanism require vendor/account verification. |
| Web Push via VAPID | LIVE IN CODE / feature flags | Browser permission is separate; endpoint/subscription data and provider path require audit. |
| BullMQ/Redis | IMPLEMENTED OPTION | Actual managed provider and production use are TBD. |
| Landing PostHog | LIVE IN CODE when key configured | In-memory persistence; autocapture/session replay disabled; `ip: false`; intentional typed events still leave the browser. |
| Landing `NEXT_LOCALE` cookie | LIVE IN CODE | One year, SameSite=Lax, set when language is selected. |
| Theme, attribution and region browser storage | LIVE IN CODE | Must appear in Cookie Policy after names/durations are verified. |
| AI functionality | NOT CONFIRMED AS PRODUCTION | Current drafts say no solely automated significant decisions and no Customer Data model training unless explicitly agreed. Re-review before AI launch. |
| File attachments | repository plans previously describe planned state | Do not describe as live until code/deployment audit confirms. Keep sensitive-data prohibition regardless. |

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
| packages/memberships/instalment tracking | [TBD] | Terms, Privacy |
| staff/RBAC | [TBD] | Terms, Privacy, DPA |
| PWA install and Web Push | [TBD] | Privacy, Cookie Policy |
| billing/subscription/trials | [TBD] | Terms, refund policy |
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
- owner and staff profiles, roles and security logs;
- subscriptions/billing records if billing is launched;
- support, security, fraud prevention, product feedback and legal claims;
- Perelai's own marketing and referral attribution.

### Perelai generally acts as processor for

- end-client contact and service history entered/collected by a business;
- bookings, requests, orders, reservations, notes and business-uploaded content;
- reminders and operational messages sent on the business's instructions;
- imported contacts/events and operational/financial records stored for the business.

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
| F-08 | Owner | Founding Beta price/term, trial, future billing provider/Merchant of Record, renewal, taxes, cancellation and refunds. |
| F-09 | Engineering/ops | Post-termination export window, deletion timing, backup rotation and legal holds. |
| F-10 | Security | Evidence-backed TOMs, incident procedure and customer notification channel. |

## 6. Data and retention inventory — red until completed

| Category | Purpose/role | Active retention | Deleted/backups | Owner/evidence |
|---|---|---|---|---|
| account/profile | controller | [TBD] | [TBD] | auth + DB audit |
| legal acceptance evidence | controller/legal claims | [TBD] | [TBD legal limitation period] | counsel |
| workspace and Customer Data | processor | customer term/instruction [TBD] | [TBD] | deletion jobs |
| deleted/archived clients | processor | [TBD] | [TBD] | schema/jobs |
| import source and preview files | processor | [TBD hours/days] | [TBD] | import pipeline |
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
| billing/tax records | controller | [TBD applicable law] | archive [TBD] | billing/counsel |
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
| object storage | [TBD] | [TBD] | imports/files if live | [TBD] | subprocessor | [TBD] | BLOCKED |
| Redis/queues | [TBD] | [TBD] | task/notification data | [TBD] | subprocessor | [TBD] | BLOCKED |
| email delivery | Resend observed | [TBD legal entity] | recipients/message metadata/content | [TBD] | subprocessor | [TBD] | VERIFY |
| authentication/calendar | Google observed | [TBD entities/services] | identifiers, events, tokens | [TBD] | independent controller and/or subprocessor by flow | [TBD] | VERIFY |
| landing analytics | PostHog observed | [TBD legal entity/project region] | typed events, locale, marketing context | EU endpoint in code; contract verify | processor | [TBD] | VERIFY |
| error monitoring | [TBD/not observed] | [TBD] | errors/technical data | [TBD] | subprocessor | [TBD] | BLOCKED |
| support | [TBD] | [TBD] | support content | [TBD] | subprocessor | [TBD] | BLOCKED |
| billing/MoR | not selected | [TBD] | billing/identity/tax | [TBD] | independent controller/processor | [TBD] | NOT LIVE |
| AI | not selected | [TBD] | [TBD] | [TBD] | [TBD] | [TBD] | NOT LIVE |

For each restricted transfer, counsel/privacy owner must select and execute the correct mechanism
(adequacy, SCC module, UK Addendum/IDTA, or another lawful basis) and complete any required transfer
risk assessment. Never publish `provider is GDPR compliant` as a substitute.

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
| booking | confirmation/preferences/client-hub session state, including token-like records | observed; exact keys/expiry/clearing audit [TBD] | necessary/security [TBD] |
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
  "subprocessors": {"version": "", "effectiveDate": "", "sha256": "", "approvalRef": ""}
}
```

The implementation LLM may build schema and validation, but it may not populate approval values or
change `status` from `draft` to `approved`.
