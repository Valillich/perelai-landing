# Legal UI copy and surface matrix

**Status:** implementation specification only.  
**Source language:** English; use translation keys, but do not publish a legal translation without
human legal/language approval.  
**Rule:** link destinations, acceptance semantics and token handling are behaviour, not decorative
copy. Tests must enforce them.

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
| `SignupScreen.tsx`, owner/coworker owner | required owner sentence; Terms · DPA · Privacy | landing URL with `from=register`, locale and validated acquisition context; external links must not clear form | required Terms+DPA before email or Google |
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
| landing footer | Terms · Privacy · Cookies · Subprocessors; DPA/Booking Terms in legal centre | current locale canonical | none |

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
| `register` | `← Back to sign up` | hard-coded app `/register` + valid acquisition allowlist |
| `forgot` | `← Back to password recovery` | hard-coded app `/forgot-password` |
| `onboarding` | `Return to onboarding →` | hard-coded app `/onboarding` |
| absent/invalid | `Back to Perelai →` | landing home; no app return button |

For a page intentionally opened in a new tab from a token-bearing/public flow, show:

> Close this tab to return to Perelai.

Do not use browser history as the only return mechanism for same-tab auth flow. Do not render a link
from an untrusted query value.

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

## 10. Tests tied to the current call sites

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
