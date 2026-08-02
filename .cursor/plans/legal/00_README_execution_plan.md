# Perelai legal pages — execution plan for implementation LLMs

**Prepared:** 2026-08-01  
**Status:** planning and attorney-ready drafting only; no implementation is authorised by this document.  
**Canonical source language:** English.  
**Mandatory approval:** owner + qualified counsel for the launch jurisdictions.

This package supersedes the legal-content and routing decisions in
`../legal_pages_and_cross_domain_handoff_20260725.md` where they conflict. The old plan remains useful
for its acquisition-context and open-redirect analysis. The material change here is that Perelai needs
a connected set of documents, not only `/terms` and `/privacy`.

## 1. Outcome

Implement one canonical legal centre on the landing:

| Canonical URL | Audience | Source draft |
|---|---|---|
| `/legal/terms` | Business owners and authorised staff | `02_terms_of_service_source_en.md` |
| `/legal/privacy` | Landing visitors, account users, staff and end clients | `03_privacy_notice_source_en.md` |
| `/legal/dpa` | Business customers acting as controllers | `04_dpa_source_en.md` |
| `/legal/booking-terms` | End clients using public booking/intake | `05_public_booking_terms_source_en.md` |
| `/legal/cookies` | Visitors and users of all Perelai surfaces | `06_cookie_policy_source_en.md` |
| `/legal/subprocessors` | Business customers and data subjects | `07_subprocessor_list_template_en.md` |

Compatibility aliases:

- landing `/terms` -> permanent redirect to `/legal/terms`;
- landing `/privacy` -> permanent redirect to `/legal/privacy`;
- app `/terms` and `/privacy` remain valid routes but redirect to the canonical landing pages when
  `VITE_LANDING_PUBLIC_URL` is configured;
- old app routes retain a non-placeholder failure state only for local development when that env var
  is missing.

Do not publish `/legal/refund-policy` until billing architecture, cancellation and refunds are
confirmed. Keep Acceptable Use inside Terms for the first release. Add an AI Notice before, not after,
any production AI processing begins.

## 2. Non-negotiable drafting rules

1. Do not replace `{{...}}` or `[TBD: ...]` with guesses.
2. Do not invent an LLC, office, registration number, DPO, representative, certification, SLA,
   retention period, hosting country or transfer mechanism.
3. Do not describe roadmap features as live.
4. Do not state that the product never receives sensitive data: free-text and upload surfaces can
   receive unsupported data even when the Terms prohibit it.
5. Do not call Perelai an accounting system, bank, payment institution, lender, healthcare record
   system or provider of the services booked through customer pages.
6. Do not use Privacy Notice acknowledgement as blanket consent. Marketing, optional analytics, Web
   Push and similar choices need separate controls.
7. Do not machine-translate a document and label it legally approved.
8. Preserve the distinction between service fulfilment, an order/request, a payment record and a
   payment allocation. A public Perelai receipt is not a fiscal receipt or tax invoice.
9. Every published document has an effective date, version and archived prior versions.
10. A production build must fail when required legal identity variables or approved document
    versions are missing.

## 3. Current-state findings that implementation must correct

Verified against code on 2026-08-01:

- `apps/web/src/pages/TermsPage.tsx` and `PrivacyPolicyPage.tsx` still contain placeholder prose and
  always return to `/login`.
- `AuthLegalLinks.tsx` uses app-local `/terms` and `/privacy` links and has no surface context.
- `LoginScreen.tsx` has one `AuthLegalLinks` call.
- `SignupScreen.tsx` has two calls, including the email-verification state, but no affirmative Terms
  acceptance. Email and Google signup can currently proceed without recording a document version.
- `RegisterPage.tsx` and the API `registerSchema` do not send or persist legal acceptance evidence.
- staff invites and owner signup share `SignupScreen`; they need different DPA copy.
- `OnboardingPage.tsx` has no legal acceptance. Do not add the initial contract acceptance at the end
  of onboarding: the contract must be accepted before account/workspace creation. Onboarding may show
  non-blocking legal links and must preserve its draft when legal opens.
- `PublicBookingPage.tsx` incorrectly renders `AuthLegalLinks`, so an end client is sent to the B2B
  Terms. Replace that use with a dedicated public-booking legal component and point it to Public
  Booking Terms plus Privacy Notice.
- the landing uses PostHog with in-memory persistence, autocapture and session replay disabled, and
  `ip: false`; it still sends deliberately emitted events when a key exists and must be disclosed.
- the landing writes `NEXT_LOCALE`, `perelai-theme`, first-touch session storage and region preference
  storage. The Cookie Policy must cover cookies and equivalent browser storage.
- Google Calendar requests `calendar.events.readonly`; the code reads event objects and stores OAuth
  tokens. Do not narrow the Privacy Notice to calendar titles/dates only.
- Resend is the implemented email delivery provider. Deployment/hosting/database/object storage/Redis
  vendors and production regions are not established by repository code and remain release-blocking
  facts.

## 4. Canonical content architecture

Implementation should create a content layer, not copy prose into React components:

```text
content/legal/
  en/
    terms.md
    privacy.md
    dpa.md
    booking-terms.md
    cookies.md
    subprocessors.md
  versions.json
```

Each file must have validated front matter equivalent to:

```yaml
document: terms
version: "[TBD: counsel-approved immutable version]"
effectiveDate: "[TBD: YYYY-MM-DD]"
lastReviewedDate: "[TBD: YYYY-MM-DD]"
status: draft # draft | approved
sourceLocale: en
approvedBy: "[TBD: internal approval reference]"
```

Production rendering must reject `status: draft`, unresolved `[TBD` markers and unresolved
`{{LEGAL_...}}` tokens. Preview/staging may render them only with a prominent `DRAFT — NOT FOR
PRODUCTION` banner and `noindex`.

## 5. Environment contract

Use the exact variable contract in `01_legal_facts_env_contract.md`. Public legal identity is build-time
public configuration, not a secret. The landing validates it once in a server-only config module and
passes a typed `legalIdentity` object into the renderer. Never access scattered `process.env` values
from individual page components.

The app needs only origins and immutable current-version identifiers:

```env
VITE_LANDING_PUBLIC_URL=https://perelai.com
VITE_LEGAL_TERMS_VERSION=[TBD]
VITE_LEGAL_DPA_VERSION=[TBD]
VITE_LEGAL_PRIVACY_VERSION=[TBD]
VITE_LEGAL_BOOKING_TERMS_VERSION=[TBD]
```

The API needs authoritative versions independent of a potentially stale web bundle:

```env
LEGAL_TERMS_VERSION=[TBD]
LEGAL_DPA_VERSION=[TBD]
LEGAL_PRIVACY_VERSION=[TBD]
LEGAL_BOOKING_TERMS_VERSION=[TBD]
```

The API must reject an unknown/stale acceptance version and must not trust a version merely because
the browser sent it.

## 6. Routing and safe return contract

### 6.1 Auth flows

Legal URLs may accept only these allowlisted parameters:

| Parameter | Allowed values | Behaviour |
|---|---|---|
| `from` | `login`, `register`, `forgot`, `onboarding` | Selects a hard-coded app destination |
| `locale` | published locale code | Optional display hint; route prefix remains authoritative |
| `niche` | valid generated catalog slug | Re-emitted only for `register` |
| `utm_source`, `utm_campaign`, `landing_path` | existing clamped acquisition values | Re-emitted only for `register` |

Destination mapping is code-owned:

```text
login      -> {APP_PUBLIC_URL}/login
register   -> {APP_PUBLIC_URL}/register + validated acquisition query
forgot     -> {APP_PUBLIC_URL}/forgot-password
onboarding -> {APP_PUBLIC_URL}/onboarding
```

Never accept `return_to`, `redirect`, `callback`, an origin or a full URL from query parameters. An
unknown `from` renders no contextual return button. Canonical metadata strips all query parameters.

### 6.2 Routes that may contain secrets

Reset-password, email-confirmation, booking-confirmation, proposal, status, receipt, preferences and
client-hub URLs can contain bearer-like tokens. Legal links on those surfaces must:

- open in a new tab with `target="_blank" rel="noopener noreferrer"`;
- pass no source URL, path, token or `document.referrer`-derived value to landing analytics;
- show landing copy such as `Close this tab to return to Perelai`;
- leave the original app tab and its state untouched.

Do not add a `from=reset` return route: reconstructing a reset path without its token is useless, and
copying the token to another origin is unsafe.

### 6.3 PWA and onboarding

All legal links from an installed/standalone app and from onboarding open in a new tab. The onboarding
draft is already persisted by product code; no legal navigation is allowed to mutate or complete it.
The landing may additionally show a hard-coded `Return to onboarding` button when `from=onboarding`,
but closing the legal tab remains the primary instruction.

### 6.4 Public booking

`PublicBookingPage` must not reuse `AuthLegalLinks`. Introduce a semantically separate
`PublicBookingLegalNotice` with:

- the business's own terms/cancellation link;
- the business's privacy link or generated short notice;
- Perelai Public Booking Terms;
- Perelai Privacy Notice.

Open Perelai documents in a new tab. A public business slug may be used to reconstruct
`{PUBLIC_BOOKING_BASE_URL}/book/{validatedSlug}` only if a return button is required; never propagate
confirmation/status/preference tokens.

## 7. Acceptance model

### 7.1 Owner and coworker-owner signup

Before either email submission or Google OAuth starts, require one unchecked control:

> I agree to the Terms of Service, including the Data Processing Addendum, and acknowledge the
> Privacy Notice.

Terms, DPA and Privacy are separate links. Only Terms/DPA acceptance is contractual; Privacy is an
acknowledgement. Disabling the submit button is not sufficient by itself: use an accessible required
checkbox, clear error text, and server-side validation.

For Google signup, bind the accepted document versions to the short-lived OAuth state or require an
acceptance gate after the callback and before creating a user/workspace. Do not create the workspace
first and attempt to backfill evidence.

### 7.2 Staff invite signup

Copy:

> I agree to the Terms of Service and acknowledge the Privacy Notice.

Do not say the staff member accepts the DPA on behalf of the business unless they have explicit
authority. The business owner's existing DPA acceptance governs processor services for that
workspace.

### 7.3 Login and onboarding

Login shows legal links but no checkbox for already accepted versions. Material Terms/DPA changes use
an authenticated re-acceptance gate after login, with a defer option only if counsel and product
policy permit it. Onboarding is not a substitute for signup acceptance.

### 7.4 Evidence record

Create an append-only record, not mutable fields on `User`:

```text
LegalAcceptance
  id
  userId
  companyId nullable        # null for staff with no selected workspace
  documentType              # TERMS | DPA | BOOKING_TERMS | BUSINESS_TERMS
  documentVersion
  acceptedAt
  sourceSurface             # EMAIL_SIGNUP | GOOGLE_SIGNUP | INVITE | REACCEPTANCE
  locale
  signupMethod
  acceptanceTextVersion
  userAgentHash nullable     # only after privacy/security review
  ipHash nullable            # do not collect until necessity + retention are approved
```

The server supplies `acceptedAt` and validates versions. Never overwrite prior evidence. Privacy
acknowledgement may be recorded separately, but do not label it consent.

### 7.5 End-client booking evidence

When a business requires agreement, snapshot:

```text
booking entity id
business policy version/hash
business cancellation version/hash
Perelai booking terms version
acceptedAt (server time)
locale
```

Do not use Perelai Public Booking Terms as a replacement for the business's own consumer disclosures.
Marketing opt-in is separate, optional, unchecked and never required to submit a booking/request.

## 8. Business legal settings required before booking rollout

Add validated workspace settings for:

```text
Legal business name
Trader/business address or legally sufficient contact details
Business contact email
Privacy contact email
Privacy notice URL
Booking terms URL
Cancellation policy text or URL
Refund policy text or URL
Policy version / last updated timestamp
```

Requirements vary by service and jurisdiction. The product must offer the fields and block or warn on
missing launch-critical disclosures; Perelai must not invent policies for the business.

## 9. Implementation phases

Each phase is a separate, reviewable task for a simpler LLM.

### LGL-0 — fact lock and counsel decisions (human-owned, blocking)

- complete every red item in `01_legal_facts_env_contract.md`;
- confirm contracting entity, establishment, target jurisdictions, governing law/courts, EU/UK
  representative position and liability model;
- confirm production subprocessors, countries, transfers, retention, backup deletion and security
  claims;
- decide current beta commercial terms and post-cancellation export window;
- have counsel approve edited drafts and assign immutable versions.

**Exit gate:** no unresolved blocker token in approved source documents.

### LGL-1 — landing content system

- add typed env validation and legal-identity interpolation;
- add validated legal document loader/front matter;
- render the six canonical pages under every published locale path;
- add a document navigation rail, print styles, last-updated/version display and archived-version link;
- implement `/terms` and `/privacy` redirects;
- add clean canonical URLs, `WebPage` metadata and sitemap entries;
- replace footer `#` links; do not add FAQ/Article schema;
- ensure draft documents are `noindex` and impossible to publish in production.

### LGL-2 — cross-domain link builder

- implement one landing legal URL builder in app code;
- add required surface context to auth links;
- implement hard-coded return mappings and parameter allowlists;
- suppress landing attribution capture for legal handoff visits;
- exclude all legal query parameters and referrers from analytics payloads;
- apply new-tab rules for standalone, onboarding and token-bearing public routes.

### LGL-3 — signup acceptance and evidence

- add owner/staff-specific accessible acceptance UI;
- gate email and Google signup;
- extend DTOs and OAuth state safely;
- add append-only API persistence and server-side version validation;
- add material-change re-acceptance architecture (feature may remain disabled until policy exists).

### LGL-4 — public booking legal layer

- replace `AuthLegalLinks` in `PublicBookingPage`;
- add workspace legal settings and public API fields;
- render layered notice at the point of collection using copy in
  `08_ui_copy_and_surface_matrix.md`;
- add business policy agreement and separate marketing opt-in;
- snapshot versions with the booking/request/order/reservation record;
- repeat on confirmation, proposal, status, receipt, preference and client-hub surfaces as relevant.

### LGL-5 — cookies and preferences

- complete a storage/network audit across landing, app and booking origins;
- render the verified inventory in Cookie Policy;
- keep non-essential SDKs disabled before consent where applicable;
- if the privacy-hardened current PostHog mode is retained, document it accurately; do not infer that
  memory persistence automatically resolves all national ePrivacy questions;
- add cookie preferences only when there is something optional to control. A fake banner with no
  effect is prohibited.

### LGL-6 — release and lifecycle

- run the tests in §10;
- publish counsel-approved English source first;
- publish Ukrainian and Polish only after legal and linguistic review;
- archive previous versions and schedule annual/event-driven review;
- subscribe customers to subprocessor-change notices under the approved DPA procedure.

## 10. Required test matrix

### Landing

- all six clean canonical URLs render approved content and correct metadata;
- locale-prefixed routes preserve the document and never machine-translate missing content;
- `/terms` and `/privacy` redirect to the correct locale canonical page;
- production build fails on missing env, `status: draft`, `[TBD` or unresolved interpolation;
- legal query variants canonicalise to the clean URL and are excluded from attribution capture;
- malicious `from=https://evil.example`, encoded URLs and unknown values yield no return link.

### Auth and PWA

- login -> legal -> login round trip;
- register -> legal -> register preserves only clamped niche/UTM allowlist;
- email and Google owner signup cannot proceed without current Terms/DPA versions;
- staff invite copy omits DPA acceptance;
- stale/forged versions are rejected by API;
- standalone/onboarding legal opens a new tab and leaves state untouched;
- reset-password and confirmation tokens never appear in a landing URL, referrer, analytics event or
  log assertion.

### Public booking

- footer shows Public Booking Terms, not B2B Terms;
- layered notice identifies the business as controller and Perelai as processor for Customer Data;
- missing business policies use approved fallback/warning behaviour, never invented prose;
- required business-policy checkbox is unchecked and blocks submission where enabled;
- marketing opt-in is separate, unchecked and optional;
- stored evidence references exact business and Perelai policy versions;
- no token-bearing public URL is copied to landing.

### Accessibility/security

- link purpose is clear out of context; keyboard and screen-reader use works;
- external/new-tab behaviour is announced;
- legal pages work without JavaScript except the contextual return enhancement;
- CSP, `noopener`, URL parsing and allowlist tests cover hostile inputs;
- no legal content or env value is inserted with unsafe raw HTML.

## 11. Production release gate

Do not enable public acquisition or public booking until all are true:

- [ ] real FOP/contracting identity and legally valid notice address are present;
- [ ] governing law, courts, liability cap and indemnity are counsel-approved;
- [ ] GDPR establishment/targeting and EU representative decision is documented;
- [ ] UK targeting/representative and post-2026 UK law review is documented if UK is launched;
- [ ] complete subprocessor/hosting/transfer inventory is published;
- [ ] retention, deletion, backup and export operations match published text;
- [ ] Google scopes and disconnect/deletion behaviour match the notice;
- [ ] cookie/storage audit is signed off for each origin;
- [ ] billing, renewal, cancellation and refund statements match production, or paid billing is off;
- [ ] sensitive/medical data restrictions are enforced and communicated;
- [ ] Terms/DPA acceptance is persisted for email and Google signup;
- [ ] end-client booking uses the correct legal layer;
- [ ] English is approved and every published translation has human legal/language approval;
- [ ] archived versions and material-change notification workflow exist.

## 12. Source authorities checked for this plan

Primary/official sources, checked 2026-08-01:

- [GDPR, including Articles 13, 14, 27 and 28](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)
- [ePrivacy Directive](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32002L0058)
- [European Commission — Standard Contractual Clauses](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en)
- [EDPB Guidelines 07/2020 on controllers and processors](https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en)
- [European Commission — Consumer Rights Directive overview](https://commission.europa.eu/law/law-topic/consumer-protection-law/consumer-contract-law/consumer-rights-directive_en)
- [Verkhovna Rada — Law of Ukraine On Electronic Commerce](https://zakon.rada.gov.ua/laws/show/675-19?lang=en)
- [ICO — controller/processor contracts](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/contracts-and-liabilities-between-controllers-and-processors-multi/)

These sources support the design but do not resolve Perelai's entity, establishment, consumer-law,
transfer, tax or contract-law choices. Those decisions remain counsel-owned.
