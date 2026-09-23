# Perelai Cookie and Similar Technologies Policy — English source draft

**Launch v1 source update, 2026-09-23:** the landing removes stored attribution and keeps PostHog
disabled even with a configured project key. No CMP is planned for this no-optional-tracker build.
Document 14 controls staged release; the production deploy and clean-browser audit are still required.

> **DRAFT — NOT FOR PRODUCTION OR RELIANCE.** Complete a clean-browser audit for every production
> origin and reconcile provider dashboards before approval. This policy covers cookies, local storage,
> session storage, SDK memory, service-worker caches and similar device technologies.

**Version:** `[TBD: immutable approved version]`  
**Effective date:** `[TBD: YYYY-MM-DD]`  
**Last updated:** `[TBD: YYYY-MM-DD]`

**Internal evidence update, 2026-09-23:** the baseline audit is recorded in
`17_cookie_storage_runtime_audit_20260923.md`. That production build loaded PostHog configuration
and wrote `perelai_attr`. The new source removes both launch paths; a fresh production audit must
verify the deployed result. The owner has chosen to defer optional marketing/analytics and CMP work.

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
  provider if an SDK is enabled in a future release.
- **Service workers and caches** support PWA/offline/performance behaviour and may store code or
  responses according to configured cache rules.
- **Pixels, APIs and device signals** can transmit request or interaction data without setting a
  cookie.

Blocking cookies alone may not block equivalent storage or outbound requests. Launch v1 disables
optional measurement integrations at the application entry point.

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
but PostHog is disabled even if a project key is present. Any future analytics release requires a
fresh inventory, applicable legal review and working controls before activation.

### Marketing

Launch v1 does not enable marketing/advertising pixels or cross-site profiles. If added, they require
a new inventory, updated notice and consent controls before activation where required.

## 4. Current landing inventory

The table describes the intended Launch v1 build. A 2026-09-23 production audit found the prior
`perelai_attr` record and a pre-choice PostHog request. Deployment, a clean-browser audit and
provider account/retention verification remain before this draft can describe production.

| Name/technology | Type/provider | Purpose | Data | Duration | Category |
|---|---|---|---|---|---|
| `NEXT_LOCALE` | first-party cookie | remember/serve the landing language | locale code | 1 year; SameSite=Lax | requested language/service preference `[verify by launch country]` |
| `cf_clearance` | Cloudflare security/challenge cookie | preserve successful challenge/security clearance | browser/request/security signals represented by the clearance value | observed production expiry about 1 year; `HttpOnly`, `Secure`, `SameSite=None`, `Partitioned`; dashboard setting must be reconciled | necessary/security `[counsel + security/ops verify]` |
| `perelai-theme` | first-party localStorage | remember light/dark theme | theme value | until removed/replaced | functional preference |
| `perelai-market` | first-party localStorage | remember a requested display-market override | market code | until removed/replaced | functional preference |
| browser/server request data | hosting/CDN `[TBD]` | deliver and protect pages | IP, request headers, path, timing/security data | provider/log retention `[TBD]` | necessary/security |

The earlier landing build wrote `perelai_attr` to sessionStorage. Launch v1 removes that record on
page load and creates no replacement. The retained PostHog adapter has `persistence: memory`, with
autocapture, session recording and automatic pageviews off. Launch v1 does not initialise the SDK or
send typed events. Hosting/CDN providers still receive request data independently. A memory setting
alone would not establish an exemption if PostHog were later enabled.

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
| authentication token storage | `accessToken` in localStorage | keep an authenticated app session | JWT lifetime 1 day; logout/401 removes stored token; an expired value may remain until a clear path; membership ID/access-version validation exists | necessary/security; XSS, CSP, cross-tab logout and residual-state security acceptance required |
| language/theme/privacy preferences | i18n localStorage, `bf-theme`, privacy-mode settings | remember requested app settings | until changed/removed `[verify]` | functional |
| last-login email | first-party localStorage | prefill returning-user email | until replaced/removed | functional; minimise and disclose |
| onboarding draft | `bf_onboarding_draft_${companyId}` sessionStorage | preserve incomplete business, service, staff, Calendar and import state in the tab | completion clear or tab/session end; logout clear not found in reviewed path | necessary/functional; Customer Data/security review |
| billing intent/return state if launched | `billing_checkout_attempt` sessionStorage: attempt/OfferCode/Company/payer/idempotency/deadline; no provider secret/checkout URL | safely continue app-created checkout and wait for webhook projection | terminal clear or tab/session end; polling deadline 120 seconds does not itself prove immediate deletion | necessary/functional/security; current source only, production checkout not established |
| public return/client-hub session state | `bf_public_booking_return_path`, `bf_public_hub_session`, `bf_public_personal_booking_return_path` in sessionStorage; some raw token/path values | navigate authorised public/client flows | booking return has no explicit TTL; hub/personal records use a 2-hour freshness check on read plus failure/stale clear; tab/session clear | necessary/security; never send to legal pages, analytics or cross-origin; backend token/log evidence required |
| UI education/dismissal state | first-time, tip, install, beta notice and count keys | prevent repetitive guidance and preserve UI state | until removed/version change `[verify]` | functional |
| PWA/service-worker/cache | `/notification-sw.js` only after user-initiated Web Push enable; no browser IndexedDB/Cache Storage source use found | receive requested Web Push and handle notification clicks | registration until removed; in-memory locale Map ends with worker lifecycle; no cache entries observed in clean profiles | separate browser permission; necessary/functional classification and post-enable runtime verification |
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

---

## Mandatory audit and implementation notes — do not publish

1. Run Playwright/browser-devtools audits on clean profiles for landing, anonymous app/auth,
   authenticated app, onboarding, booking, confirmation, status, receipt, preferences and client hub.
2. Capture `document.cookie`, local/session storage, IndexedDB, Cache Storage, service workers and all
   outbound hosts after each material action.
3. Verify backend `Set-Cookie`, CDN/bot protection and vendor project retention; source search alone is
   insufficient.
4. Threat-model `accessToken` localStorage and token-like public session records before approval.
5. Launch v1 removes `perelai_attr` and disables PostHog; the owner's no-optional-tracker decision
   should be recorded with the served-country review before policy approval.
6. If optional technology is introduced later, test that reject-before-load and withdrawal actually
   stop it; memory-only analytics is not automatically exempt. Record the applicable decision.
7. Update this inventory and Privacy Notice before deploying any pixel, replay, support widget, error
   SDK or A/B testing tool.

### Audit completion record — 2026-09-23

- Items 1–4 were completed for the available anonymous production and current local-source surfaces;
  see `17_cookie_storage_runtime_audit_20260923.md`. The public confirmation POST and all non-local
  requests in the local pass were blocked to keep the audit read-only.
- Production cookies observed: `NEXT_LOCALE`, Cloudflare `cf_clearance`, and the 10-minute
  `google_oauth_bind` on the API's Google OAuth start. Google was not followed and its own cookies were
  not audited.
- Clean audited profiles contained no IndexedDB, Cache Storage or service-worker registration. Source
  confirms `/notification-sw.js` is conditional on the user-initiated Web Push flow and does not use
  Cache Storage/IndexedDB.
- The production build audited on 2026-09-23 loaded PostHog project configuration before choice and
  wrote `perelai_attr`. The Launch v1 source change removes both paths; production still requires a
  new clean-browser check after deployment.
- Provider dashboard/contract retention remains unresolved for Cloudflare, PostHog, hosting/API/book,
  Google, Paddle and browser push providers. Generic provider notices must not be used to guess the
  Perelai account setting.
- The `accessToken` localStorage and public token-like session records have explicit threat models in
  document 17. Security acceptance, production headers, log redaction and backend token lifecycle
  evidence remain required.

### Launch v1 LGL-5 acceptance — no optional tracker build

The owner's current decision is to defer optional analytics, marketing and CMP integration. Source
tests must cover legacy attribution removal, UTM/referrer exclusion from signup/legal-return handoff
and PostHog no-load even when a project key exists. Production acceptance must repeat the clean-browser
network/storage audit across landing routes and check Cloudflare dashboard injection. If that audit
finds an optional request, LGL-5 is not complete for the deployed build. A banner that only stores a
preference while an optional SDK loads is still a test failure for any future consent-based release.
This engineering outcome does not approve the draft policy or override TEAM-RELEASE/data duties.
