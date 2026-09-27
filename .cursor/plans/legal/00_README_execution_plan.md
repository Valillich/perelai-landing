# Perelai legal pages — execution plan for implementation LLMs

**Platform documents v1 approved — 2026-09-26:** Terms, Privacy, DPA, Booking Terms, Cookies,
Subprocessors and Refund & Cancellation Policy are final and `approved` (`2026-10-01.1`, effective
2026-10-01, `owner-platform-legal-v1-20260926`) with populated `content/legal/versions.json`. The
owner decisions and deployment prerequisites are recorded at the top of
[register 01](01_legal_facts_env_contract.md). Source drafts 02–07 and 10 are historical; edit
`content/legal/en/*.md` and run `pnpm legal:manifest --write` for any new version. Older statements
below that the manifest must stay empty or that counsel must draft each section are superseded.

**CA/en scoped code activation — 2026-09-26:** the owner explicitly requested
“разблокируй Канаду оставив QC/AB/BC закрытыми” (`owner-ca-en-release-20260926`).
`business-booking-CA-en-v1` is now the reviewed CA default; Canada is PUBLIC in code
only with server-enforced subdivision admission: **MB, NB, NL, NS, NT, NU, ON, PE, SK, YT**.
**QC, AB and BC remain closed.** A valid full province code and current owner declaration
`ca-operating-scope-v1` / `OUTSIDE_QUEBEC` are required; country-only selection is insufficient.
Status: **ACTIVE_IN_CODE_NOT_DEPLOYED**. See the [release record](templates/business-notice/CA.en.standard.v1.release-record.md)
and [handoff 27](27_ca_notice_preparation_and_activation_20260926.md) for evidence and deployment work.
This supersedes older CA CLOSED/preparation-only status statements; it does not prove live inbox,
incident, retention or backup operations and does not publish any salon's settings.

**AU/en status reconciled — 2026-09-26:** app code and the [AU release record](templates/business-notice/AU.en.standard.v1.release-record.md)
now show AU registry/default integrated and AU PUBLIC. The earlier preparation-only note is
superseded by that separate integration. UA/US/AU text and digests are unchanged by CA preparation;
no deployment is inferred. [Handoff 26](26_au_notice_preparation_and_nz_next_market_20260925.md)
remains the historical AU instruction and NZ recommendation; NZ has not been opened here.

**US/en update — 2026-09-25:** the owner requested final `business-booking-US-en-v1` and
its integration alongside UA/uk. The [US release record](templates/business-notice/US.en.standard.v1.release-record.md) contains the final
baseline, applicability distinctions, digest and verification status. Older statements that
US factual slots remain unfilled are superseded by this packet. Other profiles remain separate.
See [handoff 25](25_us_notice_release_and_next_markets_20260925.md) for the release steps and the AU/en recommendation; no
additional country is opened by this update. Registry code and production deployment are distinct.

**Prepared:** 2026-08-01  
**Updated:** 2026-09-18 for the launch brief, decided STUDIO trial/C-05/C-11 and selected v1 post-trial checkout.
**Launch v1 privacy update, 2026-09-23:** landing attribution storage/handoff and PostHog loading
are disabled in current source. See documents 06 and 17 plus `docs/tracking-plan.md`; the baseline
production audit predates deployment of this change.

**Status:** planning and attorney-ready drafting only; no implementation is authorised by this document.  
**Canonical source language:** English.  
**Review:** owner confirms facts and commercial policy; qualified advice resolves the legal questions
applicable to the actual launch country/operations. Not every future country or feature is a gate.

**Identity update, 2026-09-24:** the Ukrainian FOP's name, EDR entry, RNOKPP, registered address and
shared `support@perelai.app` contact are completed in [fact register 01](01_legal_facts_env_contract.md#operator-identity-completed-on-2026-09-24).
The four Business notice drafts now identify that operator. Recipient/transfer, retention and other
processing facts remain separate; this update does not activate the reviewed-template registry.

**Market-scope review, 2026-09-25:** the owner reports the Polish pilot ended and zero active
EU users; the former account remains a closure/retention case. [Decision 22](22_market_access_and_existing_pl_pilot_20260925.md)
records UA/US PUBLIC and other catalog countries CLOSED in admission code.
[Review 23](23_market_gate_review_and_release_unblocking_20260925.md) identifies provisional-Company
API and legal-publication setup gaps, verifies the deletion manifest/DR wording fixes, and gives
the minimum ordinary-Company deletion and template-release sequence. Production is not verified;
At that review stage UA/uk and US/en were inactive; their later code releases are recorded above. Earlier PL-first and US invitation-only proposals are historical.

**UA/uk preparation completed, 2026-09-25:** [release packet](templates/business-notice/UA.uk.standard.v1.release-record.md)
contains completed text, a renderer-compatible JSON candidate, synthetic preview, version/date,
content-authority reference and digest. Agent prose preparation is unblocked. Registry activation
still follows the packet's operational/deployment checks; no production entry was added.

**Current sprint / date update, 2026-09-25:** [handoff 24](24_mvp_deletion_retention_and_ua_activation_sprint_20260925.md)
replaces the proposed shortcut of removing deletion blockers. It covers ordinary-Company deletion,
manual retention CLI, restore evidence and UA activation after concrete checks. The unreleased UA
effective date is now 2026-09-25; the digest was recomputed and the generic date guard retained.

**Start here:** [14_launch_legal_minimum_20260918.md](14_launch_legal_minimum_20260918.md).
Apply [owner-accepted decision 21](21_gdpr_baseline_and_retention_mvp_20260924.md) for the common
GDPR-based foundation, regional additions and 30-day active / subsequent 30-day backup deletion
limits. Policy is decided; production execution is not verified. Reuse one review record for
covered profiles, with focused legal/accounting input where needed. Older blanket counsel-per-
document/country requirements do not create extra approval stages.
It defines the small launch package and when each requirement applies. This README retains technical
contracts for implementation; a later phase or optional feature must not hold current legal repair.
Prepare legal, landing, BILL and provider applications in parallel. Use one set of standard Terms
with the 21-day STUDIO trial, not a second agreement for a permanent free MVP.

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
   sibling `commercial-catalog.v1.md` (C-01–19),
   `capability-catalog.v1.md`, `company-action-catalog.v1.md` and `lifecycle-migration.v1.md`;
5. `/Users/valery/Sites/beauty-finance/docs/adr/0013-monetization-architecture.md` and the
   relevant domain ADRs (0001/0002/0003/0006/0007/0008/0010);
6. `/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/launch-decisions-20260906.md`
   — approved commercial decisions (`launch-20260906`), separate from implementation/release approval;
7. `/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/10_team_access_and_studio_release_20260906.plan.md`
   — TEAM0–TEAM5 and mandatory TEAM-RELEASE;
8. the Billing task document identified by that README, especially
   `/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/07_landing_handoff_commercial_legal_20260822.plan.md`; and
9. `/Users/valery/Sites/beauty-finance/.cursor/plans/import/12_workspace_data_export_mvp_20260823.plan.md` — EX1 Workspace Data Export contract.

The 2026-09-05 inventory supersedes older implementation-status assertions: Workspace Data Export,
imports and files exist in code. Deployment, acceptance closure and commercial availability remain
separate evidence. `11_workspace_data_export_legal_matrix.md` §7 preserves historical IM4 findings
for reconciliation, not as a claim that they remain open today. Read the findings and launch decisions
in [12_review_and_launch_decisions_20260905.md](12_review_and_launch_decisions_20260905.md).
Current commercial policy and launch scope are in document 14. Reviews 12/13 are historical;
C-05/C-19 and the basic C-11 policy are now decided. Read the current app policy and provider path:
- `/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/launch-decisions-20260916.md`;
- `/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/paddle-trial-conversion-evidence.v1.md`;
- `/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/studio-readiness-20260913.md`.
BILL1/2 and substantial TEAM/Drawer work have progressed beyond the old BILL1A-only review. Reuse
accepted current reports and verify the deployed revision; legal editing neither reruns their tests
nor authorises live charges. Do not infer production readiness from sanitised fixture examples.

The approved launch catalog is SOLO $19/month (1 active service performer) and STUDIO $29/month
(up to 5), with one independent subscription per Company and no payer-level paid-subscription cap
or sibling discount. Administrative access alone does not consume performer capacity or grant
permission. STUDIO is intended as a regular paid launch plan, but any live sale/upgrade (including
an operator/internal charge), public paid CTA or general team onboarding requires TEAM-RELEASE plus
the applicable Billing/legal gates. STUDIO+ has only a small contact block; no price, limit or Offer.
Annual offers and Founding/reference-price promotions are outside the launch catalog. Do not turn
this approved pricing decision into a claim that checkout, team security or legal text is approved.

The public trial is 21 days of STUDIO without a card; C-19 is settled. Launch v1 has no early card
setup: after expiry the payer explicitly buys SOLO/STUDIO, with no automatic day-22 charge. Monthly
renewal/period-end cancellation and no voluntary prorated refund are decided; R-01's proposed
money-back guarantee is excluded from v1. C-05 fixes prepared renewal-date downgrade and immediate
provider-prorated upgrade; its runtime evidence gates changes, not unrelated legal work.

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
production AI processing begins; no standalone AI notice is needed when none is deployed. Document
14 controls the parallel legal/provider work. The seven routes are the target set, not seven new
agreements that must all delay correcting Terms/Privacy. Publish only applicable completed pages;
DPA/vendor disclosure is needed for real Customer Data, Booking Terms when intake is enabled, and
Refund Policy before Paddle review/checkout.

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
- the 2026-09-23 production landing fetched PostHog config and wrote first-touch session storage.
  Launch v1 source now disables PostHog even with a key, removes that legacy storage and sends no
  UTM/referrer or landing-path context to app signup. Production must be re-audited after deployment.
- the landing still uses `NEXT_LOCALE`, requested theme and region preferences, and security/network
  technologies. The Cookie Policy must cover cookies and equivalent browser storage.
- Google Calendar requests `calendar.events.readonly`; the code reads event objects and stores OAuth
  tokens. Do not narrow the Privacy Notice to calendar titles/dates only.
- Resend is the implemented email delivery provider. Deployment/hosting/database/object storage/Redis
  vendors and production regions are not established by repository code and remain release-blocking
  facts.
- provider-neutral SaaS Billing is architecture-frozen and Paddle is the first intended production
  adapter/Merchant of Record. Monthly SOLO $19 / STUDIO $29 are approved under launch-20260906;
  generated catalog/provider setup, implementation, TEAM-RELEASE and C-11 legal/tax wording are
  separate gates. Retired Founding/additional-workspace/annual offers must not enter launch copy.
- Workspace Data Export/import/files are implemented according to the current inventory. Export is
  owner-only and Company-scoped; production readiness, SOLO packaging and restricted create/download
  remain unverified/PENDING C-10. Retrieve later acceptance evidence before asserting whether old
  IM4 findings are open or closed. Do not rebuild existing Export from an obsolete plan.
- `content/legal.ts` says Founding Beta has no service fee while `docs/commercial-policy.md` CF-04
  and app C-16 are PENDING. Reconcile the effective website Terms and every publicly served locale before release;
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
version: "[TBD: internally approved immutable version for the completed reviewed text]"
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
| `offer` | generated standard `OfferCode` in the current public release allowlist | Re-emitted only for `register`; eligible launch codes are SOLO_MONTHLY/STUDIO_MONTHLY, with STUDIO gated by TEAM-RELEASE; intent never grants access |
| `utm_source`, `utm_campaign`, `landing_path` | legacy marketing context | Ignored for Launch v1; not re-emitted |

Destination mapping is code-owned:

```text
login      -> {APP_PUBLIC_URL}/login
register   -> {APP_PUBLIC_URL}/register + validated niche and released offer only
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
Business terms where the approved formation model requires it. In the standard no-prepayment/no-fee
flow in document 19, the cancellation reminder and Business privacy notice are presented information,
not an additional required Business-policy checkbox. Do not fabricate Business contractual acceptance.
For a contractual submission, snapshot:

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
current Terms + Refund & Cancellation Policy, the selected Company/Offer, monthly billing period,
due-now and recurring terms, charge dates and cancellation route. Capture affirmative
purchase assent tied to the authorised payer and immutable document/copy/catalog versions. Store
only necessary provider transaction/confirmation references server-side under approved retention.
Paddle-hosted acceptance may satisfy part of this only with evidence of the exact text and versions;
a link or unexamined provider callback is insufficient. Staff signup is not purchase authority.

Record billing-policy acceptance and recurring consent separately from marketing/privacy choices.
Add distinct early-performance/withdrawal declarations only where legally appropriate to this SaaS;
never pre-check a waiver or reuse the general Terms checkbox as one. Send durable purchase and
cancellation confirmations through the verified Perelai/Paddle channel. Reacceptance must not block
cancellation, privacy requests or legally required data retrieval.

## 8. Simple Business information setup before public booking

Implement [19_simple_booking_legal_setup_20260923.md](19_simple_booking_legal_setup_20260923.md).
The implementation review and remaining release corrections are in
[20_booking_setup_review_and_market_templates_20260923.md](20_booking_setup_review_and_market_templates_20260923.md).
Proposed EU/en, PL/pl, UA/uk and US/en client texts are in
[the Business notice package](templates/business-notice/README.md). The 2026-09-24 EU English source
is the proposed default for eligible EU countries without a more specific approved country default;
PL/pl retains priority for Poland. Check the intended audience's language and any applicable country
variation centrally. Preserve existing owner selections and exact country/version references.
They remain drafts until shared facts and the selected market's review are complete; do not insert
them into the reviewed registry unchanged. Verify resolution of review 20's draft-publication and
template-version findings before activation. Additional markets need not delay the chosen first market.
At `/settings/booking-card` → settings, replace the raw legal-field form with “Информация для клиентов”:
confirm provider identity/contact, select standard no-prepayment/no-cancellation-fee terms and an
optional cancellation reminder, then preview/confirm the generated Business Privacy Notice.

SOLO and STUDIO share the same simple path. Use existing profile facts only as suggestions for
confirmation; legal name/address/contact requirements depend on the served market. A single monitored
contact can initially handle both service and privacy enquiries. Do not require a separate website,
policy URL, manual version identifier, refund document or checkbox for a polite reminder.

The generated notice uses a centrally reviewed template and real privacy/retention facts. The owner
does not write legal prose. Keep custom text/URLs under “У меня другие условия”; retain existing
custom policies, without inventing business facts or silently replacing them. Refund disclosures are
conditional on actual money/prepayment/fee arrangements, including arrangements outside Perelai.
Their absence never blocks the standard no-money booking flow. SaaS Refund Policy is separate.

API and UI must recognise both a valid generated Business notice and an adequate external notice.
Missing required identity/contact, an unusable notice or unapproved platform terms blocks new public
intake with a concrete setup action; it does not block the internal calendar. Missing optional URLs
or non-applicable refund fields do not. Generate versions server-side and retain the presented text.

## 9. Implementation phases

Phases are bounded work units, not a serial approval queue. Group LGL-0/1/2/3/5 for current legal
repair; prepare LGL-0A/0B and LGL-6 alongside BILL. Apply LGL-4/7 only to enabled/publicly promised
features, while preserving required privacy/data-return duties. Reuse accepted app evidence for 6A.

### LGL-0 — launch facts and focused legal review

Complete document 14 §2 as one fact/review packet. Apply F/B items to the enabled service and first
launch market, not to every future feature/country:

- actual provider/contact facts, served market/language, governing law/liability, establishment
  and any applicable representative/consumer obligations;
- actual vendors, Google use, storage, permissions, retention/backups and security/incident process;
- standard trial Terms/Privacy/DPA, existing beta transition and any enabled booking/cookie notices;
- monitored manual rights, data-return/closure/deletion and support procedure with real owners/timing;
- prepare decided monthly trial/subscription/cancel/refund wording in parallel with BILL; final
  payment, failure/grace and post-restriction details are verified before that flow is enabled.

**Exit gate:** published documents contain verified facts and no draft placeholders; retain exact
versions and approval evidence. Deferred/disabled features remain in the internal register, not
as TBD in public prose. A missing annual/UK/AI/early-card feature does not block this packet.

### LGL-0A — early Paddle preparation and domain review

Run now alongside BILL2B and subsequent BILL work, following document 14 §§2/4. Prepare the operator/accounting facts,
minimum approved Terms/Privacy/Refund pages, discoverable legal navigation and HTTPS product site.
The current Paddle domain-review guidance accepts a pricing screenshot if pricing is not yet
available; submit approved review values privately without exposing unapproved public pricing.
If public pricing is required, its existing approval gate still applies. Record domain/account
verification separately from legal, accountant, commercial and live-checkout approval.

**Exit gate:** truthful submitted evidence and a recorded provider result/pending requests; no
checkout or enforcement flag is enabled by this phase. Sensitive KYC evidence stays outside Git.
Do not defer required DPA/privacy protection for real trial or existing-user Customer Data because
Paddle's minimum document list is smaller. Confirm real checkout domains (`perelai.app` versus
illustrative `app.perelai.com`), and reuse one approved legal package for the site/provider review.

### LGL-0B — Google verification, in parallel

Prepare matching brand/home/Privacy/support/domain-ownership facts now, then the exact Calendar
scope justification and demonstration. Basic Google sign-in and `calendar.events.readonly` approval
are separate. Privacy must describe actual access/use/storage/sharing, retention, disconnect/deletion
and Limited Use. Do not claim two-way sync with a read-only scope. A pending optional integration
blocks its use/claim, not BILL or subscriptions with working email login and the internal calendar.
Provider submissions remain separately authorised operator actions; no guaranteed review deadlines.

### LGL-1 — landing content system

- add typed env validation and legal-identity interpolation;
- add validated legal document loader/front matter;
- render the applicable canonical pages for the first served language; add other locales only when their reviewed text is ready;
- add simple footer/legal navigation, version/date, readable print styles and access to prior versions; no separate legal CMS is required;
- implement `/terms`, `/privacy`, `/refund-policy` and `/legal/refund-policy` redirects;
- add clean canonical URLs, `WebPage` metadata and sitemap entries;
- replace footer `#` links; do not add FAQ/Article schema;
- ensure draft documents are `noindex` and impossible to publish in production.

### LGL-2 — cross-domain link builder

- implement one landing legal URL builder in app code;
- add required surface context to auth links;
- implement hard-coded return mappings and parameter allowlists;
- remove legacy landing attribution storage across all landing routes;
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
- implement document 19's simple SOLO/STUDIO setup and generated Business notice;
- require Business agreement only for applicable contractual terms, not a standard no-fee reminder;
- keep any supported marketing opt-in separate and optional;
- snapshot versions with the booking/request/order/reservation record;
- repeat on confirmation, proposal, status, receipt, preference and client-hub surfaces as relevant.

### LGL-5 — cookies and preferences

- complete a storage/network audit across landing, app and booking origins;
- render the verified inventory in Cookie Policy;
- keep PostHog and optional marketing/analytics disabled for Launch v1 even when keys exist;
- remove `perelai_attr` and UTM/referrer/landing-path registration handoff while preserving validated
  niche, language and release-gated OfferCode;
- verify zero optional network/storage activity on the deployed build and Cloudflare edge settings;
- keep a CMP out of this no-optional-tracker release. If optional technology is introduced later,
  classify it and test real load control. A fake banner with no effect is prohibited.

### LGL-6 — SaaS Billing and Paddle legal integration

Prepare copy and links now using the decided policy; integrate with each implemented app flow as
it becomes available. Final verification must finish before any live checkout (including an internal
charge), active BILL7 purchase/trial CTAs and BILL8 enforcement. Clearly labelled upcoming prices
may be prepared/published with their own approved truthful wording before sales are available;
they must not imply immediate purchase or functioning trial admission. LGL-0A starts in parallel. Use the approved parts of
C-01–19 without reopening prices; do not treat them as approval of the remaining legal/runtime gates.

- finalise Terms §13 and the `/legal/billing` draft against the generated public catalog and Paddle
  account configuration;
- snapshot approved commercial values with each immutable legal version; a later catalog edit must
  not silently change an accepted Terms/Billing document or its rendered hash;
- disclose the two linked contracts accurately: Perelai supplies/licenses the Product under its
  Terms, while the applicable Paddle entity is the authorised reseller/Merchant of Record for the
  buyer Transaction under Paddle's Buyer Terms;
- keep `Plan` (capabilities) separate from `Offer` (commercial terms), and keep each Company's
  subscription/access projection separate from the single BillingCustomer payer identity;
- use only standard monthly SOLO/STUDIO launch offers; remove Founding, reference prices, annual
  toggles, sibling discounts and payer-level paid-subscription count limits from acquisition copy;
- apply decided C-05 timing/readiness/proration/consent from the 2026-09-16 policy and document 10;
  a change reuses the same subscription, never reprices siblings or silently removes staff/data;
  if changes are not released, keep the feature disabled and state its actual availability instead
  of publishing unresolved change promises. C-05 gates changes, not a licence to invent sale terms;
- state one 21-day no-card trial per BillingCustomer only if the implemented trigger and checkout
  behaviour exactly match the approved plan; do not imply a new trial for each Company or choose a
  trial Plan from Offer intent. C-19 is STUDIO; v1 accepts no early card setup and offers ordinary
  purchase after expiry. Existing beta cohorts still need C-09/C-16 transition handling;
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

### LGL-6A — performer capacity, team permissions and STUDIO release

Dependency: approved TEAM0 role/capacity contract and TEAM1–TEAM5 release evidence. This is a legal
integration/evidence task, not a substitute for the app security work.

- align Terms, Billing and UI on active service performers (SOLO 1 / STUDIO 5), including working
  owners, no-login profiles and capacity-reserving pending invites; management-only access is
  excluded but never implies unlimited accounts, owner powers or free team invitations on SOLO;
- separate removing login, changing permissions, deactivating a performer and deleting records;
  confirm handling of future bookings, recurring assignments and existing client preferences;
- evidence current Company membership/permissions at protected reads and final write effects,
  revoked sessions/refresh, cached UI invalidation, data/files/export/notification isolation and
  bounded already-issued download URLs. Never promise that downloaded copies can be recalled;
- keep other Companies' membership, data and payer relationship unaffected by a local role change;
- translate actual safeguards into Privacy/DPA/TOMs using current accepted reports; ADMINISTRATOR
  is reception/controlled checkout, SUPERVISOR is broader business/finance management. Neither
  role label supplies payer authority, authority to bind a DPA or owner-only archive access;
- place STUDIO+ in a small contact-only block, with Privacy notice at enquiry collection, verified
  mailbox/tool, purpose/retention and separate marketing choice. No sellable Offer, trial grant,
  price, performer count, launch date or per-seat overage promise.

**Exit gate:** TEAM-RELEASE evidence identifies the shipped commit/schema/role matrix, migration
dry-run and unskipped security tests, with critical/high findings closed. Any STUDIO live sale or
upgrade (including operator/internal charges), public paid CTA and general team onboarding also
require the applicable LGL-6/BILL gates. Public STUDIO trial/team admission also requires
TEAM-RELEASE; it cannot rely on internal MVP admission. Modes off/observe and grants do not bypass
TEAM security. Do not repeat completed TEAM implementation as a new legal requirement.
The intended joint SOLO/STUDIO launch must not be silently changed to an earlier partial release.

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

**Exit gate for self-service export claims:** document 11's applicable controls are evidenced and
Privacy/DPA/Terms match runtime. Do not market the archive as a GDPR export. If not offered at launch,
a verified manual data-return/rights route may meet launch needs; applicable duties and protection
of any already-enabled export remain mandatory. Do not rebuild an export/privacy portal for legal launch.

### LGL-8 — combined release and lifecycle

- run §10 checks for published surfaces/enabled flows; reuse current release evidence and record disabled/deferred items with reasons;
- publish the completed internally approved source with the required client-readable translations;
  reuse focused legal review for common clauses and record actual regional differences under decision 21;
- publish additional Ukrainian/Polish or other locales only when actually served and legally/linguistically reviewed; do not hold the first market for unused translations;
- archive previous versions and schedule annual/event-driven review;
- subscribe customers to subprocessor-change notices under the approved DPA procedure;
- keep paid acquisition/checkout off until LGL-6 passes;
- require LGL-6A/TEAM-RELEASE for the STUDIO launch and document its separate security sign-off;
- gate new Workspace Data Export release/published claims on LGL-7 and accepted current release
  evidence; do not toggle an existing deployment based on this documentation review; and
- record separate go/no-go decisions for public booking, Billing enforcement and Workspace Data
  Export rather than treating one successful legal deploy as approval of every feature.

## 10. Required test matrix

### Landing

- all published canonical URLs render final applicable content and correct metadata; no draft route is publicly linked;
- locale-prefixed routes preserve the document and never machine-translate missing content;
- `/terms`, `/privacy`, `/refund-policy` and `/legal/refund-policy` redirect to the correct locale
  canonical page; refund aliases resolve to one document/version and footer discovery works before
  paid launch;
- production build fails on missing env, `status: draft`, `[TBD` or unresolved interpolation;
- legal query variants canonicalise to the clean URL and cannot create attribution storage;
- malicious `from=https://evil.example`, encoded URLs and unknown values yield no return link.

### Auth and PWA

- login -> legal -> login round trip;
- register -> legal -> register preserves only validated niche and released standard OfferCode;
  marketing attribution is not re-emitted, and offer grants no trial/access;
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
- standard setup works with confirmed facts and a reviewed generated Business notice, without
  external policy URLs, refund text or manual policy versions (document 19);
- optional/non-applicable missing fields never trigger a blanket publication gate; actual missing
  identity/notice/platform approval produces a specific setup error, never invented prose;
- any applicable Business-policy checkbox is unchecked; the standard no-fee reminder needs none;
- marketing opt-in is separate, unchecked and optional;
- stored evidence references exact business and Perelai policy versions;
- no token-bearing public URL is copied to landing.

### SaaS Billing

- landing Pricing uses only generated standard monthly offers from the public release allowlist;
  retired FOUNDING_*/ADDITIONAL_*/annual intent codes are rejected without mapping to a new Offer
  or rewriting historical acquisition records; continue ordinary signup with fresh selection;
- no STUDIO live purchase/upgrade or public trial/team admission is possible before TEAM-RELEASE;
- capacity labels/tests cover working owner, admin-only, no-login performer, new-profile vs existing-
  profile invite, expiry/revoke, deactivate/reactivate and SOLO 1→2 / STUDIO 5→6 boundaries;
- two SOLO, two STUDIO and mixed Companies preserve independent prices/access on purchase,
  cancellation, full/partial refund and plan change; no payer-level paid count quota or duplicate
  subscription from a plan change; STUDIO+ contact never enters signup Offer/checkout/trial;
- no Paddle/provider IDs or checkout URLs are embedded in landing or legal handoff query parameters;
- Company currency, IP, locale and niche never select an Offer or entitlement;
- checkout shows the final currency, subtotal, discount, tax and total before purchase;
- redirect/browser success leaves access pending until a verified webhook projection activates it;
- trial is shared across eligible Companies of one BillingCustomer and cannot be replayed by creating
  another Company; staff signup receives no BillingCustomer or trial; all eligible trial Companies
  resolve to STUDIO irrespective of future paid Offer, without a provider subscription or early card
  setup. Trial expiry alone charges zero; first post-expiry purchase is affirmative;
- monthly renewal/period-end cancellation/no voluntary prorated refund copy matches Paddle and
  document 10; no R-01 money-back promise. Cancellation works without SOLO readiness remediation;
- if plan changes are enabled, test SOLO readiness, immediate admission restrictions on scheduled
  downgrade, STUDIO through period end, no downgrade credit, prorated upgrade/consent/failure and
  independent sibling subscriptions; otherwise record disabled status and honest UI;
- purchase assent/durable confirmation references the exact Terms/Billing/catalog versions, separately
  from signup, privacy acknowledgement and optional marketing;
- refund/withdrawal intake works after loss of login; approved full/partial/tax-only refunds,
  cancellation and access are reconciled independently; no direct Perelai buyer reimbursement;
- required regional withdrawal/switching paths and monthly-renewal notices are tested under F-17/F-18;
  annual sales/renewal/refund copy requires a future approved catalog and separate review;
- restricted mode preserves the approved safe read, billing recovery, closure/deletion and export
  actions, while new public intake fails neutrally without exposing billing state.

### Workspace Data Export and privacy requests

- TEAM revocation/isolation tests cover stale JWT/refresh, in-flight effects, caches, file/export
  grants and queued notification recipients; existing signed URLs have a verified finite lifetime;

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

## 11. Stage-specific launch gate

Use document 14 §§2–4 as the current concise checklist and attach existing evidence once.

1. **Current legal repair / real-data registration:** correct identity and Terms/Privacy; applicable
   DPA/vendor/storage/booking notices; working acceptance and data/incident/support procedures;
   chosen-market review, exact versions and honest feature claims. Do this before active acquisition,
   without waiting for full BILL or optional Calendar/Drawer/export features.
2. **Public standard STUDIO trial:** actual 21-day/no-card/shared-end behaviour, TEAM-RELEASE and
   real permission/limit admission. Resolve existing-user transition before enforcement. Promote
   registration only when the advertised post-trial paid path is ready; no permanent free fallback.
3. **Paddle review / live payment:** public Terms/Privacy/Refund Policy and approved product/pricing
   evidence for review; provider/account/origin approval, seller/market/payout facts and B-01–14
   evidence applicable to enabled flows before live charges. Monthly purchase assent, confirmation,
   cancel/refund recovery and decided restriction/data handling must work. B-15 applies to STUDIO.
4. **Conditional features:** C-05 implementation evidence before plan changes; verified Google scope
   before Calendar; Drawer operational evidence before cash-reconciliation promises; LGL-7 before
   self-service archive claims. Disable unavailable optional functionality and describe it honestly.

A manual rights/return/deletion process may be enough if it actually fulfils applicable duties.
No new refund engine, legal CMS, privacy portal, certification, all-country annex set or early-card
integration is required by this legal plan. Do not remove mandatory duties for active processing,
weaken TEAM security, or treat a paid plan as permission to deny lawful data access.

## 12. Source authorities checked for this plan

Primary/official sources checked in the original 2026-08 drafts; the dated refresh and additional
2026-09-05 authorities are in document 12; the 2026-09-06 commercial/team review and source refresh
are in document 13; current provider checks and launch scope are in document 14. Recheck relevant sources when releasing the affected flow:

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
