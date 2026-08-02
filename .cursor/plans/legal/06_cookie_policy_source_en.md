# Perelai Cookie and Similar Technologies Policy — English source draft

> **DRAFT — NOT FOR PRODUCTION OR RELIANCE.** Complete a clean-browser audit for every production
> origin and reconcile provider dashboards before approval. This policy covers cookies, local storage,
> session storage, SDK memory, service-worker caches and similar device technologies.

**Version:** `[TBD: immutable approved version]`  
**Effective date:** `[TBD: YYYY-MM-DD]`  
**Last updated:** `[TBD: YYYY-MM-DD]`

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
  provider.
- **Service workers and caches** support PWA/offline/performance behaviour and may store code or
  responses according to configured cache rules.
- **Pixels, APIs and device signals** can transmit request or interaction data without setting a
  cookie.

Blocking cookies alone may not block equivalent storage or outbound requests. Browser controls and
Perelai preferences should be used together where available.

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

These help us understand deliberate page/product interactions, campaign attribution and reliability.
Where applicable law requires consent for storage/access or related processing, we do not enable the
optional technology before that choice. Analytics is not described as necessary merely because it is
useful.

### Marketing

Marketing/advertising pixels or cross-site profiles are not confirmed as part of the reviewed
production code. If added, they require a new inventory, updated notice and consent controls before
activation where required.

## 4. Current landing inventory

The table reflects code reviewed on 2026-08-01. Production network/provider settings still need
verification.

| Name/technology | Type/provider | Purpose | Data | Duration | Category |
|---|---|---|---|---|---|
| `NEXT_LOCALE` | first-party cookie | remember the language explicitly selected | locale code | 1 year; SameSite=Lax | functional preference |
| `perelai-theme` | first-party localStorage | remember light/dark theme | theme value | until removed/replaced | functional preference |
| `perelai-market` | first-party localStorage | remember a requested display-market override | market code | until removed/replaced | functional preference |
| `perelai_attr` | first-party sessionStorage | preserve first-touch source/campaign/referrer host during a landing session | clamped UTM source/campaign and referrer hostname | browser tab/session | attribution; legal basis/consent review by launch country |
| PostHog SDK memory | PostHog `[TBD entity/project]` | send deliberately defined page/product events when a project key is configured | event/property allowlist and locale; SDK IP capture disabled | page memory; vendor event retention `[TBD]` | analytics |
| browser/server request data | hosting/CDN `[TBD]` | deliver and protect pages | IP, request headers, path, timing/security data | provider/log retention `[TBD]` | necessary/security |

The landing PostHog configuration reviewed for this draft uses `persistence: memory`, disables
autocapture and session recording, does not automatically capture pageviews, disables external bundle
loading and sets SDK `ip: false`. Typed events are still transmitted. Hosting/CDN providers can still
receive IP/request data independently. A code comment saying no banner is needed is not a legal
determination for every launch country.

Legal handoff visits containing `from` must not overwrite first-touch attribution. Legal return
parameters must be removed from analytics properties, and full/referrer URLs must not expose app or
public-flow tokens.

## 5. App and public-page inventory

The app contains many first-party browser-storage entries. The implementation LLM must generate the
final inventory mechanically from source/runtime audit and group minor UI-only entries where that
remains clear. At minimum, disclose these verified high-impact groups:

| Technology/group | Observed examples | Purpose | Duration | Category/review |
|---|---|---|---|---|
| authentication token storage | `accessToken` in localStorage | keep an authenticated app session | `[TBD token expiry, rotation and logout clearing]` | necessary/security; security architecture review required |
| language/theme/privacy preferences | i18n localStorage, `bf-theme`, privacy-mode settings | remember requested app settings | until changed/removed `[verify]` | functional |
| last-login email | first-party localStorage | prefill returning-user email | until replaced/removed | functional; minimise and disclose |
| onboarding draft | company-scoped sessionStorage | preserve incomplete onboarding in the tab | tab/session or explicit clear `[verify]` | necessary/functional |
| public return/client-hub session state | sessionStorage records, some token-like | navigate authorised public/client flows | `[TBD explicit expiry/clear]` | necessary/security; never send cross-origin |
| UI education/dismissal state | first-time, tip, install, beta notice and count keys | prevent repetitive guidance and preserve UI state | until removed/version change `[verify]` | functional |
| PWA/service-worker/cache | `[TBD runtime names]` | installability, code/assets, performance/offline behaviour | cache policy `[TBD]` | necessary/functional |
| Web Push subscription | browser Push API + backend/provider path `[TBD]` | send requested notifications | until revoked/expired; revoked records env says 30 days `[verify]` | separate browser permission; controller/processor purpose review |

Do not publish a 50-row list of obscure UI keys if a clear category gives users equivalent information,
but never hide authentication, identifiers, content, tokens, analytics or cross-origin provider use in
an `other` category.

## 6. Your choices

You can:

- use Perelai's cookie/privacy preferences when optional technologies are available;
- decline or later disable optional analytics/marketing where the applicable control is offered;
- change language, theme and other functional preferences in the product;
- withdraw Web Push permission in browser/device settings;
- clear cookies, local storage, session storage and site data in browser settings; and
- use browser controls that limit storage or tracking.

Clearing necessary/security storage may sign you out, remove an onboarding draft or break an
authorised public flow. Clearing a preference means the Service may ask or detect it again.

Where optional consent is required, controls must be as easy to withdraw as to give. Rejecting
optional technology must not block the core Service. We do not use pre-ticked boxes or a banner that
pretends to control SDKs while they load regardless.

`[TBD: add exact preference-panel path and per-category behaviour only after implemented/tested.]`

## 7. Legal basis and regional differences

Access to or storage on a device may be governed by ePrivacy/communications rules in addition to data
protection law. Technologies strictly necessary to deliver a service requested by the user may be
exempt from prior consent in some jurisdictions; analytics, attribution and marketing often are not.
National rules differ.

For subsequent personal-data processing, see the purposes and legal bases in the Privacy Notice. A
cookie exemption does not by itself establish a GDPR legal basis, and in-memory analytics is not
automatically outside privacy law.

## 8. Third parties and transfers

The verified provider/entity, processing location and transfer mechanism for hosting, analytics,
notifications and other technologies appear in [Subprocessors](/legal/subprocessors). Google or other
independent services may set/use their own technologies when you intentionally use their flow; consult
their notices.

`[TBD: vendor/account-level audit and transfer map required.]`

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
5. Decide legal basis/consent by launch country for `perelai_attr` and PostHog events.
6. If optional technology is introduced, test that reject-before-load and withdrawal actually stop it.
7. Update this inventory and Privacy Notice before deploying any pixel, replay, support widget, error
   SDK or A/B testing tool.
