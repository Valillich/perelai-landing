---
document: cookies
version: "[TBD: counsel-approved immutable version]"
effectiveDate: "[TBD: YYYY-MM-DD]"
lastReviewedDate: "[TBD: YYYY-MM-DD]"
status: draft
sourceLocale: en
approvedBy: "[TBD: internal approval reference]"
---

# Perelai Cookie and Similar Technologies Policy

## 1. Scope

This policy explains how {{LEGAL_PROVIDER_FULL_NAME}}, trading as Perelai (**Perelai**, **we**, **us**),
uses cookies and similar technologies on perelai.com, the Perelai app, Perelai-powered public booking
and client pages, and related web surfaces.

Read the [Privacy Notice](/legal/privacy) for who controls personal data, purposes, recipients,
transfers, retention and rights.

## 2. What these technologies are

- **Cookies** are small values a website asks a browser to store and send with later requests.
- **Local storage** remains on a device until code or the user removes it.
- **Session storage** normally remains for the life of a browser tab/session.
- **In-memory SDK state** exists only in the loaded page but may still be used to send events to a
  provider if such an SDK is enabled in a future release.
- **Service workers and caches** support PWA/offline/performance behaviour and may store code or
  responses according to configured cache rules.
- **Pixels, APIs and device signals** can transmit request or interaction data without setting a
  cookie.

Blocking cookies alone may not block equivalent storage or outbound requests. Launch v1 therefore
keeps optional measurement integrations disabled at the application entry point.

## 3. Categories

### Strictly necessary and security

These technologies enable authentication, session continuity, request security, abuse prevention,
tokenised public flows and core network delivery. Disabling them may prevent the Service from working.
They are not used for unrelated advertising.

### Functional preferences

These remember choices you request, such as language, theme, region, dismissed guidance and app
workflow state. Some are set only after your action. You can often remove them in browser settings,
but the preference may be lost.

### Analytics and attribution

Launch v1 does not initialise landing analytics, store campaign/referrer attribution or forward
marketing parameters with signup links. The retained PostHog configuration uses memory persistence,
but PostHog is disabled even if a project key is present. A future analytics release needs a fresh
technology inventory, applicable legal review and working controls before activation.

### Marketing

Launch v1 does not enable marketing/advertising pixels or cross-site profiles. If added, they require
a new inventory, updated notice and consent controls before activation where required.

## 4. Current landing inventory

The table describes the intended Launch v1 build. A 2026-09-23 production audit found the prior
`perelai_attr` record and a pre-choice PostHog configuration request; the new build must be deployed
and audited before this draft can describe production. Provider account settings still need review.

| Name/technology | Type/provider | Purpose | Data | Duration | Category |
|---|---|---|---|---|---|
| `NEXT_LOCALE` | first-party cookie | remember/serve the landing language | locale code | 1 year; SameSite=Lax | requested language/service preference |
| `cf_clearance` | Cloudflare security cookie when a challenge is served | preserve successful security challenge clearance | clearance/security value | observed production expiry about 1 year; `HttpOnly`, `Secure`, `SameSite=None`, `Partitioned`; account setting `[TBD]` | security; provider setting and served-country review |
| `perelai-theme` | first-party localStorage | remember light/dark theme | theme value | until removed/replaced | functional preference |
| `perelai-market` | first-party localStorage | remember a requested display-market override | market code | until removed/replaced | functional preference |
| browser/server request data | hosting/CDN `[TBD]` | deliver and protect pages | IP, request headers, path, timing/security data | provider/log retention `[TBD]` | necessary/security |

The earlier landing build wrote `perelai_attr` to sessionStorage. Launch v1 removes that record on
page load and creates no replacement. The retained PostHog adapter has `persistence: memory`, with
autocapture, session recording and automatic pageviews off. Launch v1 does not initialise the SDK or
send its typed events. Hosting/CDN providers still receive request data independently.

Legal handoff visits containing `from` must not create attribution. Legal return parameters must not
expose app or public-flow tokens to analytics or cross-origin referrers.

Landing may preserve only a generated standard `OfferCode` in the current public release allowlist
with registration context: SOLO_MONTHLY or STUDIO_MONTHLY, with STUDIO subject to TEAM-RELEASE. It
must not load a Paddle SDK, open checkout, or store Paddle product/price/customer/subscription IDs or
checkout URLs. `offer` is untrusted intent and must not be inferred from niche, locale, Company
currency, IP or browser region.

Discard retired FOUNDING_*/ADDITIONAL_*/annual intent codes without aliasing them to new standard
offers or changing stored historical business records. Continue ordinary signup with fresh
selection. STUDIO+ contact is not Offer intent. Audit any enquiry form storage against its actual
purpose and retention; the contact block does not authorise a new tracker or marketing enrolment.

## 5. App and public-page inventory

The app contains many first-party browser-storage entries. The implementation LLM must generate the
final inventory mechanically from source/runtime audit and group minor UI-only entries where that
remains clear. At minimum, disclose these verified high-impact groups:

| Technology/group | Observed examples | Purpose | Duration | Category/review |
|---|---|---|---|---|
| authentication token storage | `accessToken` in localStorage | keep an authenticated app session | `[TBD expiry, rotation, logout and membership/session revocation under TEAM2]` | necessary/security; security architecture review required |
| language/theme/privacy preferences | i18n localStorage, `bf-theme`, privacy-mode settings | remember requested app settings | until changed/removed `[verify]` | functional |
| last-login email | first-party localStorage | prefill returning-user email | until replaced/removed | functional; minimise and disclose |
| onboarding draft | company-scoped sessionStorage | preserve incomplete onboarding in the tab | tab/session or explicit clear `[verify]` | necessary/functional |
| billing intent/return state if launched | provider-free OfferCode and pending/recovery status `[TBD audit]` | safely continue app-created checkout and wait for webhook projection | `[TBD explicit TTL/clear]` | necessary/functional/security; never store provider secrets or bearer checkout URL |
| public return/client-hub session state | sessionStorage records, some token-like | navigate authorised public/client flows | `[TBD explicit expiry/clear]` | necessary/security; never send cross-origin |
| UI education/dismissal state | first-time, tip, install, beta notice and count keys | prevent repetitive guidance and preserve UI state | until removed/version change `[verify]` | functional |
| PWA/service-worker/cache | `[TBD runtime names]` | installability, code/assets, performance/offline behaviour | cache policy `[TBD]` | necessary/functional |
| Company-scoped cached data/access state | `[TBD runtime inventory]` | render authorised workspace data | `[TBD invalidate on permission/session change, Company switch and logout]` | TEAM2/3 isolation evidence; do not cache protected responses as public assets |
| Web Push subscription | browser Push API + backend/provider path `[TBD]` | send requested notifications | until revoked/expired; revoked records env says 30 days `[verify]` | separate browser permission; controller/processor purpose review |

Do not publish a 50-row list of obscure UI keys if a clear category gives users equivalent information,
but never hide authentication, identifiers, content, tokens, analytics or cross-origin provider use in
an `other` category.

## 6. Your choices

You can:

- change language, theme and other functional preferences in the product;
- withdraw Web Push permission in browser/device settings;
- clear cookies, local storage, session storage and site data in browser settings; and
- use browser controls that limit storage or tracking.

Clearing necessary/security storage may sign you out, remove an onboarding draft or break an
authorised public flow. Clearing a preference means the Service may ask or detect it again.

Launch v1 has no optional landing analytics or marketing technology to choose in a cookie banner.
Before any such technology is enabled later, Perelai will assess the served countries and provide
effective choices where required. A preference display without load control is insufficient.

## 7. Legal basis and regional differences

Access to or storage on a device may be governed by ePrivacy/communications rules in addition to data
protection law. Technologies strictly necessary to deliver a service requested by the user may be
exempt from prior consent in some jurisdictions; analytics, attribution and marketing often are not.
National rules differ.

For subsequent personal-data processing, see the purposes and legal bases in the Privacy Notice. A
cookie exemption does not by itself establish a GDPR legal basis, and in-memory analytics is not
automatically outside privacy law.

## 8. Third parties and transfers

The verified provider/entity, location and transfer information appears in the
[provider list](/legal/subprocessors), which distinguishes Customer Data subprocessors,
Perelai-controller processors and independent services. Google or other
independent services may set/use their own technologies when you intentionally use their flow; consult
their notices.

`[TBD: vendor/account-level audit and transfer map required.]`

### Paddle Checkout and Buyer Portal

Paid SaaS Billing is planned to use Paddle-hosted Checkout and Buyer Portal rather than a Paddle SDK
on the landing. When a buyer intentionally follows that handoff, Paddle may use its own necessary,
fraud-prevention, preference or other technologies under its Privacy Notice and Buyer Terms. Those
Paddle-hosted technologies are not Perelai first-party cookies and must not be silently copied into
this table. Before launch, audit the exact app-to-Paddle and Paddle-to-app paths, referrer policy,
return state and whether any Paddle resource loads on a Perelai origin. An app-side Paddle.js
overlay/iframe is also a third-party resource load even when the payment form is provider-hosted.
Do not claim that a Perelai banner controls Paddle's independent site; verify the actual pre-load
choices, necessary payment resources and third-party notices for the implemented integration.

## 9. Changes

We update this policy when technologies or providers materially change and show the version/effective
date. We do not use a policy update as retroactive consent. New optional analytics/marketing technology
must remain off until required notice/choice is available.

Prior versions: `[TBD: archive URL]`.

## 10. Contact

Privacy questions and requests: {{PRIVACY_EMAIL}}  
Support: {{SUPPORT_EMAIL}}  
Address: {{BUSINESS_ADDRESS}}
