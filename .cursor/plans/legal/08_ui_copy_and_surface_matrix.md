# Legal UI copy and surface matrix

**Status:** implementation specification only.  
**Source language:** English; use translation keys, but do not publish a legal translation without
human legal/language approval.  
**Rule:** link destinations, acceptance semantics and token handling are behaviour, not decorative
copy. Tests must enforce them.

**Commercial baseline:** launch-20260906, C-01–19 and TEAM0–TEAM5; see document 13. Amounts and
performer limits below are approved business inputs. Public legal translations, tax/renewal wording
and release gates remain separate. No STUDIO paid CTA, live sale/upgrade or general team onboarding
before TEAM-RELEASE. STUDIO is a regular paid plan at launch, not a beta.

## 1. Component boundaries

Do not expand the current generic `AuthLegalLinks` to every use case. Create three conceptual
components (names may differ, behaviour may not):

1. **AuthLegalLinks** — login/register/forgot flows, with required `surface` context.
2. **InAppLegalLinks** — authenticated app/onboarding/settings, always new-tab when external.
3. **PublicBookingLegalNotice** — End Client pages, Business policies + Perelai Booking Terms/Privacy.

The landing separately owns **LegalReturnToApp**, which accepts only the allowlist in the master plan.

## 2. Surface-by-surface target

| Surface/current file | Required links/copy | Navigation | Acceptance |
|---|---|---|---|
| `LoginScreen.tsx` | Terms · Privacy | landing URL with `from=login`; same tab in normal browser, new tab in standalone | none for an already-current version |
| `SignupScreen.tsx`, owner/coworker owner | required owner sentence; Terms · DPA · Privacy | landing URL with `from=register`, locale, independently validated niche/released standard OfferCode and clamped attribution; external links must not clear form | required Terms+DPA before email or Google |
| `SignupScreen.tsx`, staff invite | required staff sentence; Terms · Privacy | `from=register`; preserve validated invite return only inside app, never send invite token/path to landing | Terms only; no DPA representation |
| `SignupScreen.tsx`, check-email state | Terms · Privacy | `from=login` or safe close/new-tab; never forward verification token | no second acceptance |
| `ForgotPasswordPage.tsx` | Terms · Privacy | `from=forgot` | none |
| `ResetPasswordPage.tsx` | Terms · Privacy | always new tab, no `from`, path, referrer or token | none |
| app `TermsPage.tsx` / `PrivacyPolicyPage.tsx` | redirect status + safe back link if env missing | replace to canonical landing; do not retain placeholder as production prose | none |
| `OnboardingPage.tsx` / review | non-blocking Terms · Privacy · DPA in help/footer if desired | always new tab; optional `from=onboarding`; onboarding draft unchanged | none; owner accepted before account/workspace creation |
| authenticated Settings/help | Terms · Privacy · DPA · Subprocessors | always new tab | material-change re-acceptance is a separate gate |
| `PublicBookingPage.tsx` | Business terms/cancellation · Business privacy · Perelai Booking Terms · Perelai Privacy | new tab for Perelai; business links new tab with safe `noopener`; no auth Terms | Business policy agreement when required; privacy acknowledgement; marketing separate |
| booking confirmation/proposal/status | same End Client links | new tab; never forward token | no duplicate agreement unless materially new terms/action |
| receipt/status/preferences/client hub | Booking Terms when relevant · Privacy | new tab; never forward token/path/referrer | none unless the user starts a new contractual action |
| landing footer | Terms · Privacy · Cookies · **Refund Policy** (approved before Paddle review) · Subprocessors; DPA/Booking Terms in legal centre | current locale canonical | none |
| landing Pricing/paid CTA | Terms · Privacy · Refund & Cancellation Policy; final local currency/tax at checkout | registration with untrusted released standard `offer`; no Paddle ID or direct checkout | none; Offer intent grants no access |
| landing STUDIO+ small contact block | Contact us · Privacy at enquiry collection; no price/limit/checkout | verified contact route, no Offer intent, provider token or client data | sending an enquiry is not purchase or marketing consent |
| app team/invitation/offboarding surfaces | current permissions, performer capacity and future-work consequences; Terms · Privacy/DPA help as relevant | authenticated Company-scoped routes; token-safe external legal links | invited admin/staff accepts individual-use Terms; no automatic DPA/purchase authority |
| app `/settings/billing` | current Plan/Offer, payer authority, trial/subscription state, Terms · Billing · Privacy · Paddle Buyer Terms | Paddle-hosted checkout/Buyer Portal only after backend creates flow | affirmative Terms/Billing + recurring purchase agreement with immutable evidence; Paddle confirmation audited under README §7.6 |
| app checkout return/pending | pending/confirmed/failed/recovery copy | backend state refresh; browser redirect is never authority | none |
| app restricted mode | billing recovery + approved read/settings/export/closure actions | keep safe app return; no public billing-state leak | payer authority for billing changes; owner authority remains separate |
| app `/settings/data-transfer` | separate Import and Workspace Data Export destinations; privacy-request help | in-app routes; legacy `/settings/imports` redirects to `/settings/data-transfer/imports`; legal/privacy links new tab | none |
| app `/settings/data-transfer/exports` and detail | archive scope/exclusions/expiry/security; Privacy link | authenticated app; no link token in notification | owner-only fresh confirmation separately for create and download |

## 3. Exact auth copy

### 3.1 Owner or coworker-owner registration

Unchecked required checkbox:

> I agree to the **Terms of Service**, including the **Data Processing Addendum**, and acknowledge the
> **Privacy Notice**.

Accessibility/behaviour:

- the three bold phrases are separate links with sufficiently large targets;
- clicking a link does not toggle the checkbox;
- input has an explicit label and `aria-describedby` for any error;
- on submit without acceptance, focus the checkbox/error;
- acceptance is required for Google and email buttons;
- do not pre-check based on browsing a legal page;
- record the exact acceptance-copy version separately from legal document versions.

### 3.2 Staff invite registration

> I agree to the **Terms of Service** and acknowledge the **Privacy Notice**.

Do not show `including the DPA`. A coworker invitee who creates an independent workspace is an owner
for that new workspace and uses the owner copy; this follows the current `RegisterPage.tsx` distinction
between staff invite and coworker-owner invite.

### 3.3 Privacy semantics

Allowed:

> acknowledge the Privacy Notice

Prohibited:

> consent to the Privacy Policy  
> consent to all processing  
> agree to receive updates and accept the Terms

Marketing, Web Push and optional analytics do not share the Terms checkbox.

## 4. Exact landing return copy

| `from` | Primary return copy | Destination |
|---|---|---|
| `login` | `← Back to log in` | hard-coded app `/login` |
| `register` | `← Back to sign up` | hard-coded app `/register` + valid niche/released standard OfferCode/acquisition allowlist |
| `forgot` | `← Back to password recovery` | hard-coded app `/forgot-password` |
| `onboarding` | `Return to onboarding →` | hard-coded app `/onboarding` |
| `settings` | `Return to settings →` | hard-coded app `/settings` |
| `billing` | `Return to billing →` | hard-coded app `/settings/billing` |
| `data-transfer` | `Return to data transfer →` | hard-coded app `/settings/data-transfer` |
| absent/invalid | `Back to Perelai →` | landing home; no app return button |

For a page intentionally opened in a new tab from a token-bearing/public flow, show:

> Close this tab to return to Perelai.

Do not use browser history as the only return mechanism for same-tab auth flow. Do not render a link
from an untrusted query value.

`offer` is validated independently from `niche`, ignored for staff signup and never converted into a
Paddle/provider ID on the landing/legal origin. Do not preserve price, currency, country, tax, checkout
URL, payer/customer/subscription/transaction IDs or a return/callback URL.

## 5. Public booking collection copy

Dynamic terms in square brackets are escaped text from validated public Business configuration.

### 5.1 Layered privacy notice

> **Privacy**  
> `[Business Name]` uses Perelai to manage this `[booking/request/order/reservation]`.
> `[Business Name]` is responsible for how it uses your service information. Perelai processes it to
> provide the booking service and uses limited technical data to operate and protect the platform.
> **Business privacy notice** · **Perelai Privacy Notice**

If the Business has no approved external privacy URL, show only a counsel-approved generated short
notice populated from structured business identity/contact/purpose/retention fields. Do not invent a
generic policy and do not claim Perelai is sole controller.

### 5.2 Required Business agreement

> [ ] I agree to the booking and cancellation terms of `[Business Name]`.

If Business terms and cancellation policy are separate, both must be linked from the sentence or
presented immediately next to it. Snapshot the rendered versions/hash.

Perelai Booking Terms need their own linked contractual statement and affirmative evidence when
the approved formation model requires it. Business-policy acceptance does not silently incorporate
Perelai Terms. Do not add a fresh agreement merely to view existing status/privacy information.

### 5.3 Privacy acknowledgement

> By submitting, you acknowledge the Perelai Privacy Notice and `[Business Name]` Privacy Notice.

This is not a checkbox unless counsel identifies a distinct consent-reliant processing purpose. Do not
bundle special-category or marketing consent here.

### 5.4 Marketing

> [ ] Send me occasional offers and news from `[Business Name]`.

It is optional, unchecked and purpose/sender specific. Store evidence separately from booking terms.
Unchecking it must not suppress confirmation, change or reminder messages necessary for the requested
interaction.

### 5.5 Status meanings

Use mode-specific text and do not overstate contract formation:

```text
APPOINTMENT immediate: Booked — check the confirmation details.
APPOINTMENT pending: Request sent — the business still needs to confirm.
REQUEST: Request sent — this is not a confirmed appointment.
ORDER: Order request sent — this does not confirm acceptance or payment.
RENTAL: Reservation request sent — availability is not confirmed yet.
```

Exact formation/copy remains counsel-owned and must match backend status transitions.

## 6. Business legal settings copy

Settings intro:

> Add the legal and policy information your clients should see before they submit. Perelai provides the
> page technology but does not create or approve your legal terms. Requirements depend on your
> business and location; obtain professional advice where needed.

Field help:

```text
Legal business name
  The person or organisation that provides the service and contracts with the client.

Business contact email
  Where clients can ask about the service, booking, cancellation or refund.

Privacy contact email
  Where clients can ask how you use their personal data.

Privacy notice URL
  Link to your current client-facing privacy notice.

Booking terms URL
  Link to the terms that govern the underlying service or booking.

Cancellation policy
  Explain deadlines, no-shows, fees and how to cancel or reschedule.

Refund policy
  Explain eligibility and process when payment/refunds apply.
```

Validation must block `javascript:`, `data:`, credential-bearing URLs and non-HTTPS production links
except approved local development. Render external business content as links, not unsanitised HTML.

## 7. Document update/re-acceptance copy

Material update gate:

> **Our Terms have changed**  
> Review the updated Terms of Service `[and DPA when applicable]`. The changes take effect on
> `[date]`. To continue using Perelai after that date, an authorised workspace owner must accept the
> current version.  
> **Review changes** · **Download/export my data** · `[Ask a question]`

Do not say `By continuing, you agree` when product/counsel policy requires affirmative re-acceptance.
Do not force a staff user to accept a DPA for the company; route to an authorised owner and define
temporary access behaviour.

Subprocessor notice:

> **Subprocessor update**  
> We plan to add or replace `[provider]` for `[purpose]` on `[date]`. Review locations and safeguards
> in the Subprocessor List. Data-protection objections under the DPA must be sent by `[deadline]` to
> `[privacy email]`.

## 8. Error and fallback copy

Missing landing env in local development:

> Legal pages are not configured in this environment. Return to Perelai or contact
> `[support address]`.

Production must fail the build instead of showing that fallback.

Blocked external navigation:

> We could not open the legal page. **Try again** or copy this verified Perelai address:
> `https://perelai.com/legal/...`

Never fall back to placeholder legal prose.

Missing Business policy on public booking:

> `[TBD: counsel-approved launch-block or transparent warning]`

Do not write `By booking, you agree to the business's policies` when no policy was presented.

## 9. Analytics allowlist

Allowed landing events:

```text
legal_viewed { document, version, locale, from_enum_or_null }
legal_return_clicked { document, from_enum, destination_enum }
legal_document_downloaded { document, version, locale }
```

Never include:

- email, user/company ID, raw business name or free text;
- full URL, search string, fragment or `document.referrer`;
- invite/reset/booking/status/receipt/preference/client-hub tokens;
- checkbox state tied to a person (acceptance belongs in the server evidence record, not marketing
  analytics); or
- raw acquisition values beyond the existing separately approved attribution plan.

## 10. SaaS Billing copy and states

### Landing Pricing disclaimer

Approved launch design inputs (apply only with BILL7/C-11 and TEAM release gates):

| Card | Price | Capacity label | Offer intent after public release |
|---|---|---|---|
| SOLO | US$19/month | 1 active service performer | SOLO_MONTHLY |
| STUDIO | US$29/month | Up to 5 active service performers | STUDIO_MONTHLY |

No annual toggle/equivalent, Founding badge, crossed-out price, lifetime lock, sibling discount or
payer-level paid-subscription count limit. Do not describe the 1/5 limits as users/logins or seats.
Do not add the proposed 14-day refund offer until R-01/B-07 is explicitly approved.

Adjacent capacity help:

> A service performer is someone who provides services in this workspace, with or without a login.
> A working owner counts. Administrative access alone does not use a performer place. Invitations
> reserving a new performer place count until accepted, expired or revoked; linking an invitation to
> an existing active profile does not add another place. User access depends on the plan and permissions.

Extended Terms/Billing help must explain that hiding a profile, an empty schedule or removing login
does not free capacity; deactivation stops new assignment and requires explicit future-work handling.
SOLO supports its owner's performer setup/schedule and independent coworker links; do not infer free
additional-member invitations from the administrator exclusion. No per-seat add-on or automatic overage
charge is approved. Final feature claims must come from approved capability entries, not job titles.

Adjacent subscription help:

> Each workspace has its own subscription. You can pay for multiple workspaces at the same standard
> offers. Changing or cancelling one subscription does not change the price or paid access of another.

Small block below the two cards:

> **STUDIO+**
>
> Need a larger team? **Contact us**.

Contact destination helper:

> Tell us about your business needs. An enquiry does not start a subscription or reserve a price or
> capacity. Read our **Privacy Notice**. Please do not include client records or sensitive information.

No third purchase card, $49/10 candidate, other price/limit, launch date, guaranteed feature,
checkout/upgrade CTA or trial grant. Verify F-21 fields, mailbox/tool and retention; any marketing
opt-in is separate, unchecked and optional. Do not invent a CRM or a vendor from this layout.

> Prices shown here are in USD. Paddle Checkout confirms the final
> currency, applicable tax and total before purchase.

Do not say `tax included` globally. With location-dependent tax treatment, inclusion depends on the
transaction country. Do not choose the Offer from Company currency, IP, locale, niche or region.

### Trial

> Start a 21-day trial — no card required.

Adjacent expandable/help copy:

> One trial is available per eligible payer, not per workspace. If that payer creates another eligible
> workspace during the same trial window, it shares the original end date.

This copy is allowed only after C-11/C-19 commercial/legal approval and the durable onboarding trigger,
BillingCustomer relationship and eligibility/replay tests pass. Do not add `then automatically charged` unless an explicit checkout has
authorised the exact first charge and all `[TBD]` gates in the Billing Policy are approved.
Do not label a trial as STUDIO or promise five-performer team access before C-19 and TEAM-RELEASE.
The 21-day shared trial is unchanged by independent paid subscriptions or removal of a paid-count cap.

### Billing settings seller disclosure

> Perelai provides the Product under the Perelai Terms. Paddle is the authorised reseller and
> Merchant of Record for your purchase and handles payment, applicable indirect tax and buyer
> transaction documents under the Paddle Buyer Terms.

The link target is Paddle's current Buyer Terms. The UI must not hard-code one Paddle entity when the
applicable buyer entity depends on purchase location.

### Pending checkout return

> **Confirming your subscription**
>
> We are checking the subscription status with Paddle. You can return to Billing settings or contact
> support if confirmation is delayed. Check the existing purchase before trying to pay again.

On verified webhook projection:

> **Subscription active**
>
> Access is active for `[Company Name]`.

Never render `active` or `Payment received` from a query string, local storage or browser redirect
alone. A payment-received label needs authoritative backend transaction evidence. Pending activation
needs a tested incident/support path; it is not an indefinite fulfilment disclaimer.

### Purchase, cancellation and refund controls

Before checkout, present the exact amounts/dates and approved linked Terms + Refund & Cancellation
Policy with an affirmative purchase control under README §7.6. Privacy acknowledgement and marketing
permission remain separate. Do not display proposal R-01 as approved copy until B-07 is signed off.

Provide **Cancel renewal**, **Request a refund**, and any legally required **Withdraw from contract**
as distinct actions. Show cancellation effective date, paid-through access and confirmation. Test
Paddle/Perelai support routes when login is unavailable. Do not require a retention survey or a new
Terms acceptance to reach cancellation. For full/partial/tax-only refunds, show the provider-confirmed
amount and the separately confirmed subscription/access consequence. Never equate a request with an
approved refund or a refund adjustment with cancellation of future billing.

### Billing authority

For a SOLO↔STUDIO change, show the selected Company, existing subscription, new Plan/limit,
effective date, due-now charge/credit, next recurring total, retained/limited capabilities and any
required consent before confirmation. C-05 must decide over-limit active performers/pending invites,
existing team access and provider failure/recovery; do not invent immediate effect or automatic staff
deactivation. Gate every live STUDIO upgrade on TEAM-RELEASE. STUDIO+ contact cannot apply a change.

> Billing is managed by `[Payer]`. Company ownership and billing authority are separate. Contact the
> payer or support to change this subscription.

Do not reveal payer personal details to users who are not authorised to see them. `[TBD: approved
redaction/contact behaviour.]`

### Restricted mode

> **Workspace access is limited**
>
> You can review existing data and update billing. Creating new clients, bookings, requests, orders or
> imports is temporarily unavailable. Your data has not been deleted.

Show only actions the backend policy actually permits. Public intake uses neutral copy:

> This business is temporarily unable to accept new requests. Please try again later or contact the
> business directly.

Never mention subscription, trial, failed payment or restriction on a public page.

Billing legal links open a new tab with `from=billing`; only the landing-owned hard-coded return
button may navigate back to `/settings/billing`. Do not include Company, payer or provider identifiers.

## 11. Workspace Data Export copy

Use the exact content and prohibited-language contract in
`11_workspace_data_export_legal_matrix.md` §8. Required labels:

```text
Data transfer
Import data
Workspace Data Export
Download a copy of your workspace data
Request access to your personal data
```

The last label is a privacy/support route, not the Workspace export CTA. Export is absent from
onboarding. The UI must display the actual archive scope, exclusions, readiness/expiry timestamp and
that create/download/expiry do not change source data.

The ready notification contains only a job/reference and route back to authenticated Settings—never
an attachment, signed URL or bearer token. Create and download confirmations are separate; both check
current owner authorization.

Data Transfer legal/privacy links open a new tab with `from=data-transfer`; the clean hard-coded return
route is `/settings/data-transfer`. Never forward an export job ID, Company ID or source app path.

## 12. Tests tied to the current call sites

- `LoginScreen` emits `from=login`.
- both `SignupScreen` render branches use the correct owner/staff context and return semantics.
- Google signup cannot start before owner/staff-required acceptance.
- `ForgotPasswordPage` emits `from=forgot`.
- `ResetPasswordPage` opens a clean legal URL in a new tab.
- app placeholder pages redirect and never show placeholder text in production.
- `OnboardingPage` legal link does not call completion or mutate `stepId`/draft.
- `PublicBookingPage` contains no B2B Terms link and no `AuthLegalLinks` usage.
- all token-bearing public pages open clean legal URLs with `noreferrer` behaviour where needed.
- standalone PWA retains the original app view.
- screen-reader tests distinguish Business terms from Perelai Booking Terms.
- legal return preserves only a generated standard OfferCode from the public release allowlist,
  independently of niche;
- the allowlist contains only released SOLO_MONTHLY/STUDIO_MONTHLY; retired FOUNDING_*/ADDITIONAL_*
  and annual codes resume ordinary signup with fresh selection, without aliasing or rewriting history;
- STUDIO CTA/live upgrade/team onboarding remain unavailable until TEAM-RELEASE; STUDIO+ contact
  creates no Offer intent, trial entitlement, automatic marketing consent or payment;
- performer capacity copy and tests include no-login/working-owner/admin-only/new-vs-existing invite,
  expiry/revoke/deactivate/reactivate and 1→2/5→6 boundaries; no implied unlimited admin access;
- revocation/offboarding copy matches TEAM2/3: later protected access is denied using current
  permissions, future-work handling is explicit and unrelated Company membership persists;
- Settings/Billing/Data Transfer legal return uses only hard-coded clean routes and never forwards a
  Company, export job, payer/provider or session identifier;
- pricing/checkout/settings use the approved Billing disclosure and never expose provider IDs;
- checkout return stays pending until the provider projection is authoritative; no unverified
  payment-received claim;
- pre-purchase Terms/Billing assent and recurring agreement retain exact versions and durable
  confirmation; cancel/refund/withdrawal and lost-login routes satisfy B-13/B-14;
- restricted public intake is neutral and does not reveal billing state;
- Data Transfer routes separate Import, Workspace Data Export and privacy-request help;
- Export is absent from onboarding, owner-only, and ready notifications contain no attachment/token;
- no UI or translation uses `GDPR export`, `privacy access export` for the Company archive or `backup`.
