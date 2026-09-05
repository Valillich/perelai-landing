# Perelai legal pages — execution plan for implementation LLMs

**Prepared:** 2026-08-01  
**Updated:** 2026-09-05 after app monetization inventory/ADR review and current official-source checks.

**Status:** planning and attorney-ready drafting only; no implementation is authorised by this document.  
**Canonical source language:** English.  
**Mandatory approval:** owner + qualified counsel for the launch jurisdictions.

This package supersedes the legal-content and routing decisions in
`../legal_pages_and_cross_domain_handoff_20260725.md` where they conflict. The old plan remains useful
for its acquisition-context and open-redirect analysis. The material change here is that Perelai needs
a connected set of documents, not only `/terms` and `/privacy`.

## 0. Inputs and precedence for implementation LLMs

Read these before taking a Billing or Data Transfer task:

1. `/Users/valery/Sites/beauty-finance/CONTEXT.md` — canonical domain vocabulary;
2. `/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/README.md` — authoritative Billing
   package index and decision summary;
3. `/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/00_architecture_and_decision_freeze_20260822.plan.md` — BILL0 architecture and approval gates;
4. `/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/README.md` and its
   sibling `commercial-catalog.v1.md` (C-01–16),
   `capability-catalog.v1.md`, `company-action-catalog.v1.md` and `lifecycle-migration.v1.md`;
5. `/Users/valery/Sites/beauty-finance/docs/adr/0013-monetization-architecture.md` and the
   relevant domain ADRs (0001/0002/0003/0006/0007/0008/0010);
6. the Billing task document identified by that README; and
7. `/Users/valery/Sites/beauty-finance/.cursor/plans/import/12_workspace_data_export_mvp_20260823.plan.md` — EX1 Workspace Data Export contract.

The 2026-09-05 inventory supersedes older implementation-status assertions: Workspace Data Export,
imports and files exist in code. Deployment, acceptance closure and commercial availability remain
separate evidence. `11_workspace_data_export_legal_matrix.md` §7 preserves historical IM4 findings
for reconciliation, not as a claim that they remain open today. Read the findings and launch decisions
in [12_review_and_launch_decisions_20260905.md](12_review_and_launch_decisions_20260905.md).
The current Billing GO is disabled BILL1A only; this legal package does not approve BILL1–6 wholesale.

For factual feature descriptions, precedence is: verified current production behaviour and approved
release evidence → accepted ADR/domain vocabulary → authoritative feature plan → this legal plan →
older landing plans. Mandatory law and already accepted contractual promises are separate controlling
constraints: a runtime defect cannot erase an obligation by rewriting the notice. Resolve any mismatch
through a product fix, valid prospective change or required remedy. A planning document never proves
that a feature is live or that legal copy is approved.

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
| `/legal/billing` | Buyers/payers; navigation: **Refund & Cancellation Policy** | `10_billing_cancellation_refund_source_en.md` |

Compatibility aliases:

- landing `/terms` -> permanent redirect to `/legal/terms`;
- landing `/privacy` -> permanent redirect to `/legal/privacy`;
- landing `/refund-policy` and `/legal/refund-policy` -> permanent redirect to `/legal/billing`,
  preserving only approved locale routing; one source/version for all refund URLs;
- app `/terms` and `/privacy` remain valid routes but redirect to the canonical landing pages when
  `VITE_LANDING_PUBLIC_URL` is configured;
- old app routes retain a non-placeholder failure state only for local development when that env var
  is missing.

Use `/legal/billing` as the single SaaS billing/cancellation/refund document; refund aliases redirect
to it. Show an explicit **Refund Policy** or **Refund & Cancellation Policy** link in footer/legal
navigation before Paddle domain review, not only after paid launch. Draft previews are not the
provider-verification package. Publish only approved truthful content with clear applicability and
effective dates; paid acquisition and checkout retain separate gates. Keep Acceptable Use inside
Terms §11, retention/deletion in Privacy §12 + Terms/DPA, and working privacy/security/support
contacts on those pages. A separate AUP or Retention page is optional. Add an AI Notice before any
production AI processing begins. See document 12 for the three parallel legal/commercial/tax tracks.

The data-movement boundary is specified separately in
`11_workspace_data_export_legal_matrix.md`: Workspace Data Export is an owner-facing operational
archive, while Privacy Access Export is a verified person-scoped rights workflow. The former must
never be marketed as the latter.

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
11. Keep SaaS Billing separate from a Customer's End Client payments, Payment Accounts, Payment
    Allocations, Orders, Instalments, Packages and Public Receipts. Paddle's role in selling the
    Perelai subscription does not make Paddle or Perelai the seller of a Customer's services.
12. Do not call Workspace Data Export a `GDPR export`, `privacy access export`, `backup` or proof that
    all access/portability duties are satisfied.

## 3. Current-state findings that implementation must correct

Historical code observations from 2026-08-01 below must be rechecked at implementation.
Billing/export status was reconciled with the 2026-09-05 inventory; this is not a production audit:

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
- provider-neutral SaaS Billing is now architecture-frozen in the monetization plan and Paddle is the
  first intended production adapter/Merchant of Record, but no billing implementation or approved
  production catalog exists yet. The `$19/$190` Founding and `$29/$290` Public figures remain
  approval-gated hypotheses and must not enter approved legal or landing copy.
- Workspace Data Export/import/files are implemented according to the current inventory. Export is
  owner-only and Company-scoped; production readiness, SOLO packaging and restricted create/download
  remain unverified/PENDING C-10. Retrieve later acceptance evidence before asserting whether old
  IM4 findings are open or closed. Do not rebuild existing Export from an obsolete plan.
- `content/legal.ts` says Founding Beta has no service fee while `docs/commercial-policy.md` CF-04
  and app C-16 are PENDING. Reconcile the effective website Terms and all locales before release;
  missing billing code does not approve a free-service promise. The commercial-policy export-code
  absence statement is stale too; correcting that fact does not approve export packaging.

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
    billing.md
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

Approved publication files are separately reviewed clean prose. Never copy internal approval notes,
source-review instructions, scenario matrices or the DRAFT banner into an approved document.
The approved hash covers the final rendered wording, including linked policy versions and identity.

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
VITE_LEGAL_BILLING_VERSION=[TBD]
```

The API needs authoritative versions independent of a potentially stale web bundle:

```env
LEGAL_TERMS_VERSION=[TBD]
LEGAL_DPA_VERSION=[TBD]
LEGAL_PRIVACY_VERSION=[TBD]
LEGAL_BOOKING_TERMS_VERSION=[TBD]
LEGAL_BILLING_VERSION=[TBD]
```

The API must reject an unknown/stale acceptance version and must not trust a version merely because
the browser sent it.

## 6. Routing and safe return contract

### 6.1 Auth flows

Legal URLs may accept only these allowlisted parameters:

| Parameter | Allowed values | Behaviour |
|---|---|---|
| `from` | `login`, `register`, `forgot`, `onboarding`, `settings`, `billing`, `data-transfer` | Selects a hard-coded app destination |
| `locale` | published locale code | Optional display hint; route prefix remains authoritative |
| `niche` | valid generated catalog slug | Re-emitted only for `register` |
| `offer` | generated, currently public PRIMARY `OfferCode` | Re-emitted only for `register`; treated as untrusted intent, never as entitlement |
| `utm_source`, `utm_campaign`, `landing_path` | existing clamped acquisition values | Re-emitted only for `register` |

Destination mapping is code-owned:

```text
login      -> {APP_PUBLIC_URL}/login
register   -> {APP_PUBLIC_URL}/register + validated niche, offer and acquisition query
forgot     -> {APP_PUBLIC_URL}/forgot-password
onboarding -> {APP_PUBLIC_URL}/onboarding
settings   -> {APP_PUBLIC_URL}/settings
billing    -> {APP_PUBLIC_URL}/settings/billing
data-transfer -> {APP_PUBLIC_URL}/settings/data-transfer
```

Never accept `return_to`, `redirect`, `callback`, an origin or a full URL from query parameters. An
unknown `from` renders no contextual return button. Canonical metadata strips all query parameters.
`offer` is parsed independently of `niche`; neither value may validate the other. Never forward a
Paddle product/price/customer/subscription/transaction ID, checkout URL, price, currency, country or
tax value through the legal return contract. Staff signup ignores `offer`.

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

### 6.3.1 Authenticated Settings, Billing and Data Transfer

Legal documents from authenticated Settings open in a new tab and may use only the hard-coded
`from=settings`, `from=billing` or `from=data-transfer` mappings above. The landing may show the
corresponding return button, but `Close this tab to return to Perelai` remains available. Never forward
Company ID, current app path, auth state, export job ID, billing/provider ID, signed URL or any other
token. A user who is no longer authenticated follows the app's normal login/resume behaviour; legal
navigation must not encode a session return target.

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
  companyId nullable        # may be null before provisioning; later bind business acceptance atomically
  representedCustomerRef nullable # verified contracting business, distinct from tenant display name
  authorityBasis nullable   # personal use versus authorised business representative
  documentType              # TERMS | DPA | BILLING | BOOKING_TERMS | BUSINESS_TERMS
  documentVersion
  acceptedAt
  sourceSurface             # EMAIL_SIGNUP | GOOGLE_SIGNUP | INVITE | REACCEPTANCE | PURCHASE
  locale
  signupMethod
  acceptanceTextVersion
  userAgentHash nullable     # only after privacy/security review
  ipHash nullable            # do not collect until necessity + retention are approved
```

The server supplies `acceptedAt` and validates versions. Never overwrite prior evidence. Privacy
acknowledgement may be recorded separately, but do not label it consent.

For owner signup before the Company exists, retain the represented-business/authority declaration
and add an append-only scope link from that evidence to the provisioned Company. Do not mutate the
original acceptance row to attach a Company later; create the row with its scope atomically if
provisioning occurs in the same transaction.
Do not infer a business contract merely from an email address or payer relationship.

### 7.5 End-client booking evidence

Present and record the appropriate affirmative Perelai Booking Terms agreement separately from
Business terms where the approved formation model requires it. For a contractual submission, snapshot:

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

### 7.6 Purchase-time agreement and confirmation

Signup assent is not recurring-payment authorisation. Before each new paid subscription, present
current Terms + Refund & Cancellation Policy, the selected Company/Offer, full annual amount where
relevant, due-now and recurring terms, charge dates and cancellation route. Capture affirmative
purchase assent tied to the authorised payer and immutable document/copy/catalog versions. Store
only necessary provider transaction/confirmation references server-side under approved retention.
Paddle-hosted acceptance may satisfy part of this only with evidence of the exact text and versions;
a link or unexamined provider callback is insufficient. Staff signup is not purchase authority.

Record billing-policy acceptance and recurring consent separately from marketing/privacy choices.
Add distinct early-performance/withdrawal declarations only where legally appropriate to this SaaS;
never pre-check a waiver or reuse the general Terms checkbox as one. Send durable purchase and
cancellation confirmations through the verified Perelai/Paddle channel. Reacceptance must not block
cancellation, privacy requests or legally required data retrieval.

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
- resolve applicable F-17/18/19 decisions, actual closure/deletion capability and C-16 fee conflict;
- resolve every approval gate in `10_billing_cancellation_refund_source_en.md`, including payer
  authority, trial conversion, renewal, cancellation, refunds, failed payment, restricted access and
  post-cancellation data handling;
- approve the difference between Workspace Data Export and the manual/future Privacy Access Export,
  including request verification, third-party rights and response procedure;
- have counsel approve edited drafts and assign immutable versions.

**Exit gate:** no unresolved blocker token in approved source documents.

### LGL-0A — early Paddle preparation and domain review

Run alongside BILL1–BILL2, following document 12 §3. Prepare the operator/accounting facts,
minimum approved Terms/Privacy/Refund pages, discoverable legal navigation and HTTPS product site.
The current Paddle domain-review guidance accepts a pricing screenshot if pricing is not yet
available; submit approved review values privately without exposing unapproved public pricing.
If public pricing is required, its existing approval gate still applies. Record domain/account
verification separately from legal, accountant, commercial and live-checkout approval.

**Exit gate:** truthful submitted evidence and a recorded provider result/pending requests; no
checkout or enforcement flag is enabled by this phase. Sensitive KYC evidence stays outside Git.
Do not defer required DPA/privacy protection for real beta Customer Data to BILL3–5 merely because
Paddle's minimum document list is smaller.

### LGL-1 — landing content system

- add typed env validation and legal-identity interpolation;
- add validated legal document loader/front matter;
- render the seven canonical pages under every published locale path;
- add a document navigation rail, print styles, last-updated/version display and archived-version link;
- implement `/terms`, `/privacy`, `/refund-policy` and `/legal/refund-policy` redirects;
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

### LGL-6 — SaaS Billing and Paddle legal integration

Dependency: BILL0 business decisions and the provider-neutral billing contract are approved. This
phase must finish before any live checkout (including an internal charge), BILL7 public commercial
copy/CTAs and BILL8 enforcement. LGL-0A preparation begins earlier; C-01–16 remain independently gated.

- finalise Terms §13 and the `/legal/billing` draft against the generated public catalog and Paddle
  account configuration;
- disclose the two linked contracts accurately: Perelai supplies/licenses the Product under its
  Terms, while the applicable Paddle entity is the authorised reseller/Merchant of Record for the
  buyer Transaction under Paddle's Buyer Terms;
- keep `Plan` (capabilities) separate from `Offer` (commercial terms), and keep each Company's
  subscription/access projection separate from the single BillingCustomer payer identity;
- state one 21-day no-card trial per BillingCustomer only if the implemented trigger and checkout
  behaviour exactly match the approved plan; do not imply a new trial for each Company;
- disclose automatic local-currency presentment and location-dependent tax treatment without
  promising a particular display currency or tax inclusion before Paddle Checkout confirms it;
- link cancellation/refund routes and Paddle Buyer Terms from pricing, checkout review, Billing
  settings, receipts/confirmation and restricted-access surfaces;
- update Privacy, Cookies and third-party role tables for billing identities, offer attribution,
  Paddle-hosted checkout/portal, webhook projections and transaction/tax records;
- implement purchase-time Terms/Billing assent and durable confirmation under §7.6; test refund and
  cancellation routes when app login is unavailable, and full/partial/tax-only provider operations;
- verify that only an authoritative provider projection activates paid access and that an unverified
  redirect never says payment was received; add activation incident recovery and non-delivery remedies;
- keep regional/PPP pricing and country-specific price overrides off. Any future regional catalog is
  a separate product, abuse, tax and EU/EEA legal review.

**Exit gate:** approved legal copy, catalog, Paddle configuration and tested product states agree on
seller roles, exact charges, taxes, renewal, trial, cancellation, refunds and access consequences.

### LGL-7 — Workspace Data Export and privacy-rights boundary

Dependency: reconcile current code and later accepted release reports with the historical
IM4-C2/IM2/IM4, IM5, EX1 and IM6 criteria. Those are evidence checks, not instructions to rebuild
implemented Export or an assertion that every old finding is still open. C-10 stays PENDING.

- use the product term `Workspace Data Export` and the CTA `Download a copy of your workspace data`;
- keep the feature under `/settings/data-transfer/exports`, owner-only, and out of onboarding;
- describe the shipped manifest/JSONL/CSV archive scope and exclusions only after release evidence;
- disclose the planned 24-hour artifact life, 10-minute single-use action grant, private object
  storage, audit metadata and download security only after their tests pass;
- make clear that creating/downloading an archive does not delete source data and does not by itself
  close an account or satisfy an individual's privacy request;
- maintain a distinct Privacy Access Export/request workflow that verifies the individual, applies
  legal scope/exemptions, supplies required contextual information and protects other people;
- ensure Billing restriction does not silently remove any post-restriction read/export/delete action
  that product/counsel approved, while new imports and other value-creating writes remain blocked;
- reconcile export-job/audit retention, object deletion, company deletion and legal holds before
  publishing fixed periods.

**Exit gate:** `11_workspace_data_export_legal_matrix.md` is fully evidenced, Privacy/DPA/Terms match
runtime behaviour, and no UI or marketing surface calls the archive a GDPR/privacy access export.

### LGL-8 — combined release and lifecycle

- run the complete tests in §10, including the Billing and Export/privacy-request matrices;
- publish counsel-approved English source first;
- publish Ukrainian and Polish only after legal and linguistic review;
- archive previous versions and schedule annual/event-driven review;
- subscribe customers to subprocessor-change notices under the approved DPA procedure;
- keep paid acquisition/checkout off until LGL-6 passes;
- gate new Workspace Data Export release/published claims on LGL-7 and accepted current release
  evidence; do not toggle an existing deployment based on this documentation review; and
- record separate go/no-go decisions for public booking, Billing enforcement and Workspace Data
  Export rather than treating one successful legal deploy as approval of every feature.

## 10. Required test matrix

### Landing

- all seven clean canonical URLs render approved content and correct metadata;
- locale-prefixed routes preserve the document and never machine-translate missing content;
- `/terms`, `/privacy`, `/refund-policy` and `/legal/refund-policy` redirect to the correct locale
  canonical page; refund aliases resolve to one document/version and footer discovery works before
  paid launch;
- production build fails on missing env, `status: draft`, `[TBD` or unresolved interpolation;
- legal query variants canonicalise to the clean URL and are excluded from attribution capture;
- malicious `from=https://evil.example`, encoded URLs and unknown values yield no return link.

### Auth and PWA

- login -> legal -> login round trip;
- register -> legal -> register preserves only validated niche, public PRIMARY OfferCode and clamped
  attribution; offer is independent of niche and grants no trial/access;
- email and Google owner signup cannot proceed without current Terms/DPA versions;
- staff invite copy omits DPA acceptance;
- stale/forged versions are rejected by API;
- standalone/onboarding legal opens a new tab and leaves state untouched;
- Settings/Billing/Data Transfer legal opens a new tab and returns only through its hard-coded clean
  app route; no Company/job/provider/session value is forwarded;
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

### SaaS Billing

- landing Pricing uses only generated public PRIMARY offers; app-only ADDITIONAL offers never leak;
- no Paddle/provider IDs or checkout URLs are embedded in landing or legal handoff query parameters;
- Company currency, IP, locale and niche never select an Offer or entitlement;
- checkout shows the final currency, subtotal, discount, tax and total before purchase;
- redirect/browser success leaves access pending until a verified webhook projection activates it;
- trial is shared across eligible Companies of one BillingCustomer and cannot be replayed by creating
  another Company; staff signup receives no BillingCustomer or trial;
- cancellation, refund and failed-payment copy matches the Paddle portal and approved product policy;
- purchase assent/durable confirmation references the exact Terms/Billing/catalog versions, separately
  from signup, privacy acknowledgement and optional marketing;
- refund/withdrawal intake works after loss of login; approved full/partial/tax-only refunds,
  cancellation and access are reconciled independently; no direct Perelai buyer reimbursement;
- required regional withdrawal/switching paths and annual-renewal notices are tested under F-17/F-18;
- restricted mode preserves the approved safe read, billing recovery, closure/deletion and export
  actions, while new public intake fails neutrally without exposing billing state.

### Workspace Data Export and privacy requests

- export is owner-only, absent from onboarding and not available until its feature flag/release gate;
- create and download require separate fresh confirmations; grants are actor/company/action-bound,
  hashed, single-use and expire as configured;
- notification contains no attachment or bearer URL; download uses a short-lived URL that is neither
  stored nor logged;
- manifest/scope/exclusions, CSV formula neutralisation and tenant isolation match the approved plan;
- artifact expiry purges the object and company deletion handles active/staged/ready jobs safely;
- archive copy never says `GDPR export`, and privacy requests still have a verified person-scoped
  workflow with third-party protections and required supplemental information.

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
- [ ] Paddle entity/role, Buyer Terms, catalog, tax mode, currency presentment and webhook authority
  match the production account; no approval-gated prices are published early;
- [ ] Export implementation and current acceptance/deployment evidence are reconciled, C-10 remains
  separately gated, and no obsolete “not implemented” assertion controls a release;
- [ ] Workspace Data Export and Privacy Access Export are labelled, routed and fulfilled as distinct
  processes; Article 15/20 or regional requests are not closed by a tenant archive alone;
- [ ] sensitive/medical data restrictions are enforced and communicated;
- [ ] Terms/DPA acceptance is persisted for email and Google signup;
- [ ] end-client booking uses the correct legal layer;
- [ ] English is approved and every published translation has human legal/language approval;
- [ ] archived versions and material-change notification workflow exist;
- [ ] F-17/F-18 applicability decisions, buyer-status review and necessary withdrawal/switching
  operations are evidenced for the actual launch countries;
- [ ] purchase-time assent, durable confirmation and refund/cancellation recovery pass B-13/B-14;
- [ ] C-16/CF-04 fee-claim conflict is resolved without self-approving any business fact.

This is the combined product-release checklist. LGL-0A may publish a narrower approved legal
package describing only current enabled processing and clearly scoped future paid terms. It does
not require enabling Billing/Export/Booking to publish legal documents. Applicable privacy and
contract duties for already enabled real-user services remain necessary even in beta.

## 12. Source authorities checked for this plan

Primary/official sources checked in the original 2026-08 drafts; the dated refresh and additional
2026-09-05 authorities are in document 12. Recheck applicable law/provider terms at release:

- [GDPR, including Articles 13, 14, 27 and 28](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)
- [ePrivacy Directive](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32002L0058)
- [European Commission — Standard Contractual Clauses](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en)
- [EDPB Guidelines 07/2020 on controllers and processors](https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en)
- [European Commission — Consumer Rights Directive overview](https://commission.europa.eu/law/law-topic/consumer-protection-law/consumer-contract-law/consumer-rights-directive_en)
- [Verkhovna Rada — Law of Ukraine On Electronic Commerce](https://zakon.rada.gov.ua/laws/show/675-19?lang=en)
- [ICO — controller/processor contracts](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/contracts-and-liabilities-between-controllers-and-processors-multi/)
- [GDPR Articles 15 and 20 — access and portability are distinct rights](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)
- [EDPB Guidelines 01/2022 on the right of access](https://www.edpb.europa.eu/documents/guideline/guidelines-012022-on-data-subject-rights-right-of-access_en)
- [Paddle — automatic localized pricing](https://developer.paddle.com/build/products/offer-localized-pricing/)
- [Paddle — price `tax_mode`](https://developer.paddle.com/api-reference/prices/create-price/)
- [Paddle Buyer Terms](https://www.paddle.com/legal/buyer-terms)
- [Paddle — Merchant of Record and indirect tax](https://www.paddle.com/help/sell/tax/how-paddle-handles-vat-on-your-behalf)
- [Your Europe — pricing and price discrimination](https://europa.eu/youreurope/citizens/consumers/shopping/pricing-payments/index_en.htm)

These sources support the design but do not resolve Perelai's entity, establishment, consumer-law,
transfer, tax or contract-law choices. Those decisions remain counsel-owned.
