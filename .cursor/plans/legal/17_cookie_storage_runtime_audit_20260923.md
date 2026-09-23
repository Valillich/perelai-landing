# Cookie, browser-storage and network runtime audit — 2026-09-23

**Later Launch v1 source update on 2026-09-23:** the owner deferred optional marketing/analytics
and CMP integration. Landing source now clears the legacy `perelai_attr` record, omits
UTM/referrer/landing-path signup handoff, and disables PostHog even with a configured key. The
read-only production observations below remain the baseline for the prior deployed build. A fresh
post-deployment audit is required before LGL-5 can be marked complete in production; document 06
holds the current source inventory and acceptance criteria.

> **INTERNAL EVIDENCE — NOT LEGAL ADVICE, NOT AN APPROVAL, NOT FOR PUBLICATION.**
> This document records source and clean-browser observations. It does not classify a technology under
> any country's law, approve a notice, or authorise a release. Document 14 remains the current launch
> authority. Do not publish the legal drafts while placeholders or draft status remain.

## 1. Decision and release conclusion

- Do **not** implement or release a consent banner from this audit alone. Launch countries and the
  classification of each technology still require an owner/counsel decision.
- Production `perelai.com` loaded a PostHog project-configuration resource before any user choice. The
  SDK uses memory persistence, but an outbound request is still device/network processing. If counsel
  classifies this as optional for a served country, the current production behaviour fails LGL-5.
- The production Cookie Policy route did not load PostHog in the observed clean session. This does not
  cure the home-page pre-choice request.
- No IndexedDB database, Cache Storage entry, or service-worker registration was present on any clean
  audited production surface. The app can register `/notification-sw.js` only from the user-initiated
  Web Push enable flow; that path was not activated during the read-only audit.
- Production billing did not match the current source tree: `/billing/checkout?_ptxn=fake` redirected
  to login and did not load Paddle, while the current local source attempted to load Paddle.js after
  entering the checkout route. Production release evidence therefore cannot be inferred from the
  current dirty worktree.
- No application behaviour was changed during the read-only audit. The later Launch v1 source
  change is described above; its deployed LGL-5 acceptance still requires a fresh runtime check.

## 2. Authority, build identity and method

Current authority read before this audit:

- `14_launch_legal_minimum_20260918.md`;
- `inventory/launch-decisions-20260916.md` and the current commercial catalog;
- the selected provider-free 21-day trial-conversion evidence;
- current TEAM, billing, data-export and legal-acceptance plans/evidence.

Reviews 12/13 were treated as historical. The old BILL1A-only conclusion and formerly open C-05/C-19
questions were not used as current gates.

Production app release marker observed during the audit:

- web version: `2.4.4`;
- build/commit: `6f2f000b761fb1d8d96501ae045a7a9ec698b2ce`;
- commit date: 2026-09-18;
- current repository HEAD during the source audit: `72fa0f3a104bdf5da1dbda58b532f6697836be8c`.

The working tree also contained unrelated user changes. They were not modified. This report never
equates a locally present feature, passing test, or newer source file with a production release.

### Audit method

Two clean-browser passes were performed with Playwright/Chromium:

1. **Production, anonymous and passive.** Fresh context per surface; no production account; no
   purchase, OAuth completion, Web Push permission, or public-token verification. Cookies, storage,
   registrations, requests and response `Set-Cookie` headers were inspected.
2. **Current local source.** Fresh context per surface against local landing/app servers. Non-local
   requests and state-changing public confirmation requests were intercepted and blocked. A synthetic
   local auth token was used only to expose source-level route/storage behaviour; it was not a valid
   session and proves no authenticated production response.

The production pass ran at 2026-09-22 22:10 UTC (2026-09-23 in Europe/Warsaw); the local pass ran at
2026-09-22 22:00 UTC. Provider dashboards, contracts, server logs, an authenticated production
workspace and a real Paddle buyer session were outside the available read-only evidence.

## 3. Read-only runtime report by surface

`None` below means none was observed in a fresh audited context; it is not a statement that the
technology can never appear after an unaudited action.

| Surface | Cookies | localStorage | sessionStorage | IndexedDB / Cache Storage / service worker | Outbound hosts / notes |
|---|---|---|---|---|---|
| Production landing `/` | `NEXT_LOCALE`, `cf_clearance` | None | `perelai_attr` | None / none / none | `perelai.com`, `eu-assets.i.posthog.com`; PostHog config requested before choice |
| Production Cookie Policy `/pl/legal/cookies` | `cf_clearance` | None | None | None / none / none | `perelai.com`; no PostHog request observed |
| Current local landing `/pl` | None | None | `perelai_attr` | None / none / none | local landing only because external traffic was blocked |
| Current local Cookie Policy | None | None | `perelai_attr` | None / none / none | local landing only |
| Production app login/register | None | `i18nextLng` | None | None / none / none | `app.perelai.app` only in the observed flows |
| Current local app login/register | None | `i18nextLng` | None | None / none / none | local app only |
| Current local authenticated-route probe | None | `accessToken`, `i18nextLng` | None | None / none / none | API requests for current Company, onboarding, imports, categories, notifications and self profile; blocked |
| Current local onboarding | None | `accessToken`, `i18nextLng` | company-scoped onboarding state may be created by interaction | None / none / none | current Company, onboarding and import API paths; blocked |
| Production public booking, fake slug | None | `i18nextLng` | `bf_public_booking_return_path` | None / none / none | `book.perelai.app`, `api.perelai.app` |
| Current local public booking, fake slug | None | `i18nextLng` | `bf_public_booking_return_path` | None / none / none | public info API; blocked |
| Production public status/receipt/preferences/hub, fake token | None | `i18nextLng` | no verified token session created | None / none / none | `book.perelai.app`, `api.perelai.app` |
| Current local public status/receipt/preferences/hub, fake token | None | `i18nextLng` | no verified token session created | None / none / none | public API GETs; blocked |
| Current local confirmation route | None | `i18nextLng` | return-path state as applicable | None / none / none | confirmation POST was intercepted before transmission |
| Production billing checkout probe | None | `i18nextLng` after redirect | None | None / none / none | redirected to login; no Paddle resource observed |
| Current local billing checkout probe | None | `i18nextLng` | checkout state is interaction-dependent | None / none / none | attempted `cdn.paddle.com/paddle/v2/paddle.js`; blocked |

The production public response inspected for `book.perelai.app` did not contain
`Content-Security-Policy`, `Referrer-Policy` or `Permissions-Policy`. The app HTML also had no
equivalent CSP/referrer meta policy. This is security evidence to resolve, not permission to invent a
header value without compatibility tests.

## 4. Response cookies and cookie-setting paths

| Cookie / source | Observed attributes and duration | Evidence limit | Classification owner |
|---|---|---|---|
| `NEXT_LOCALE` on production landing | first-party; `Path=/`; `SameSite=Lax`; `Max-Age=31536000`; JavaScript-readable; observed on an entry visit | Production sets it without an explicit language-button click in the audited path; exact middleware trigger must be reflected in final copy | owner/counsel by served country |
| `cf_clearance` on production landing | Cloudflare; `HttpOnly`; `Secure`; `SameSite=None`; `Partitioned`; domain/path scoped; observed expiry about one year | Runtime proves the cookie and attributes, not why the account has this duration. Cloudflare documents configurable challenge passage and a shorter default; dashboard/account settings must be reconciled | security/ops plus counsel |
| `google_oauth_bind` from production API OAuth start | `Max-Age=600`; `Path=/api/auth`; `HttpOnly`; `Secure`; `SameSite=Lax`; API returned a 302 to Google | The redirect was not followed and no Google cookie was audited. Nonce/state/client identifiers were not retained in this report | auth/security |

No auth session cookie was observed for the app. Current source stores the bearer access token in
localStorage. Cloudflare also advertised NEL/Report-To configuration with a seven-day `max_age` and a
Cloudflare reporting endpoint; no diagnostic report request was observed in this pass.

## 5. Source-confirmed browser-storage inventory

### Landing

| Key/technology | Store | Source behaviour | Retention evidence |
|---|---|---|---|
| `NEXT_LOCALE` | cookie | language middleware/preference | one year in production response |
| `perelai-theme` | localStorage | explicit theme preference | until replaced or site data is cleared |
| `perelai-market` | localStorage | explicit `?market` display override | until replaced or site data is cleared; absent in clean audit |
| `perelai_attr` | sessionStorage | first-touch source, campaign, referrer host and niche; direct/founding-beta was observed on the production home | tab/browser session by storage type; exact browser restore behaviour varies |
| PostHog SDK state | page memory plus network | immediate init when key exists; memory persistence; autocapture and replay off; manual pageviews off; page-leave capture on; flags/surveys and external dependency loading off; SDK IP option off | page memory ends on unload; provider event/config retention `[TBD vendor setting]` |

`persistence: memory` prevents PostHog cookie/localStorage persistence but does not make its network
request necessary, anonymous, or consent-exempt. Typed events and SDK configuration requests must be
classified on their actual purposes and launch countries.

### App authentication, onboarding and billing

| Key/group | Store | Data/purpose | Clear/expiry evidence |
|---|---|---|---|
| `accessToken` | localStorage | signed bearer JWT used for API authorisation | JWT lifetime is one day; removed on explicit logout or API 401; may remain stored after token expiry until a later clear path |
| `i18nextLng` | localStorage | UI language, including query-string detection/caching | until replaced or site data is cleared |
| `lastLoginEmail` | localStorage | login-form prefill | until replaced/removed/site-data clear |
| `bf-theme` | localStorage | app theme | until changed/removed |
| `bf-privacy-modes` | localStorage | UI amount/statistics masking, not tracking consent | until changed/removed |
| `bf-privacy-dock-intro-seen` | localStorage | UI education state | until removed/version change |
| `bf_onboarding_draft_${companyId}` | sessionStorage | business identity/location/timezone/template, services/prices/expenses, staff, Calendar/import state and job/run identifiers | completion clear or tab/session end; explicit logout does not clear it in the reviewed path |
| `billing_checkout_attempt` | sessionStorage | attempt ID, OfferCode, Company/payer IDs, idempotency key and polling deadline; no provider secret or checkout URL | terminal clear/tab end; 120-second polling deadline does not itself guarantee immediate record deletion |

Current source also stores Company/user-scoped operational UI state: first-use sheets, install prompt
deferral, viewed-entity IDs, calendar/client counters and selected cash-drawer account. These are not
consent preferences and some contain stable entity identifiers; the final inventory may group them
only if their purposes and retention remain clear.

### Public pages, integration and PWA state

| Key/technology | Store | Data/purpose | Clear/expiry evidence |
|---|---|---|---|
| `bf_public_booking_return_path` | sessionStorage | same-origin booking pathname and search | tab/session or overwrite; no explicit TTL found |
| `bf_public_hub_session` | sessionStorage | raw public hub token plus verification timestamp, written only after a successful hub load | logical two-hour freshness checked on access; removed on stale/error/mismatch; record may physically remain until read or tab/session end |
| `bf_public_personal_booking_return_path` | sessionStorage | return path that can contain a raw `/p/<token>` or token query, Company slug and verification time | same logical two-hour read-time check/removal |
| `bf_gcal_sync_session_${companyId}` | sessionStorage | Calendar run/client-request identifiers | tab/session plus source-specific clear paths |
| `perelai:frontend-update-dismissed` | sessionStorage | update prompt dismissal | tab/session |
| `bf-welcome-company` | sessionStorage | welcome/onboarding Company state | tab/session/source clear path |
| `/notification-sw.js` | service worker | handles push and notification click; holds locale content in an in-memory JavaScript Map | registered only by user-initiated enable flow; no Cache Storage or IndexedDB use found in the worker |
| Web Push subscription | Push API plus backend | endpoint, keys and user agent after permission | active until revoked/expired; current env evidence says revoked records 30 days, backups `[TBD]` |

No browser IndexedDB or Cache Storage use was found in the reviewed app/landing source or clean
runtime profiles.

## 6. Outbound-host matrix

| Host/service | Surface and trigger | Pre-choice/current observation | Retention/account evidence |
|---|---|---|---|
| `perelai.com` | landing delivery | necessary page requests; Cloudflare edge visible | origin host, contracted entity and request/security-log retention `[TBD]` |
| `eu-assets.i.posthog.com` / configured EU PostHog hosts | landing when project key is present | production home fetched project config before any choice | project entity, region confirmation and event/config/log retention `[TBD vendor setting]` |
| `app.perelai.app` | app UI | page/assets | hosting/entity/log retention `[TBD]` |
| `api.perelai.app` | auth, workspace and public APIs | production public probes called API; authenticated local calls were blocked | application/security/log retention `[TBD]` |
| `book.perelai.app` | public booking/status/receipt/preferences/hub | page/assets | hosting/entity/log retention `[TBD]` |
| `cdn.paddle.com` | current-source app checkout route | attempted only in local current-source checkout probe; not observed on production probe | Paddle account/integration release evidence `[TBD]` |
| Paddle checkout/Buyer Portal domains | intentional paid-flow handoff | not exercised and not proven live | Paddle relationship-specific retention; exact project/account facts `[TBD]` |
| Google OAuth endpoints | intentional Google sign-in | API OAuth start redirected to Google; redirect not followed | Google and Perelai token/log retention `[TBD]` except the 10-minute binding cookie |
| push service endpoint selected by browser | after explicit Web Push permission/subscription | not activated | browser/vendor-dependent; revoked backend record evidence as above |
| `images.unsplash.com` | default Company cover images in current source | conditional; not materialised in audited fake/public paths | third-party request/log policy `[TBD if enabled at launch]` |

## 7. Provider-retention evidence

| Provider/path | What is established | What remains unresolved before policy approval |
|---|---|---|
| Cloudflare | edge/challenge behaviour and `cf_clearance` were observed; response cookie duration was about one year | account challenge-passage setting, exact Cloudflare entity/service plan, request/WAF/diagnostic-log retention, locations and transfer terms |
| PostHog | EU asset/config endpoint and memory-only SDK configuration observed; no browser persistence from the SDK | contracted entity/project region, exact event/config/log retention, deletion controls, access roles and whether production events are currently collected |
| Paddle | current source can load Paddle.js on app checkout; production probe did not | account approval, live domains, exact Checkout/Portal cookie inventory, buyer entity, integration setting, provider record retention and production evidence |
| Google | Perelai OAuth binding cookie lasts ten minutes; current Calendar scope/evidence exists elsewhere | Google cookies on the intentional redirect, actual account/project, token retention until disconnect, revocation/deletion and log retention |
| hosting/API/book providers | Cloudflare edge is visible at runtime | origin provider/contracted entity, regions, access/security-log retention and deletion/backups |
| browser push provider | browser-selected endpoint only after opt-in | provider per browser/platform, active subscription lifecycle, provider logs and backups |

Useful provider documentation for the verification owner:

- Cloudflare challenge passage: <https://developers.cloudflare.com/cloudflare-challenges/challenge-types/challenge-pages/challenge-passage/>
- Cloudflare cookie reference: <https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/>
- Paddle Privacy Notice: <https://www.paddle.com/legal/privacy>

Provider public policies do not replace Perelai account/dashboard and contract evidence. No `[TBD]`
above may be replaced by inference from a generic provider page.

## 8. Threat model: app `accessToken` in localStorage

### Asset and trust boundary

The value is a bearer credential readable by any JavaScript executing on the app origin. Current JWT
claims include stable user, Company, membership, role/staff and access-version identifiers. Possession
can authorise API actions until expiry or server-side invalidation.

### Material threats

- an app-origin XSS, compromised first-party bundle or future third-party script can read and exfiltrate
  the token; `HttpOnly`, `Secure` and cookie `SameSite` controls do not protect localStorage;
- the token survives browser restart and can remain physically present after its one-day expiry until
  logout, a 401 path or site-data clearing;
- no cross-tab logout/storage-event synchronisation was found, so another open tab may retain an
  in-memory or readable stored credential until it encounters an invalidation path;
- explicit logout clears the token and in-memory self/workspace state but does not clear all
  Company/user-scoped local/session state, including an onboarding draft or billing attempt;
- the lack of an observed production CSP increases the impact of a script injection; this audit does
  not claim that CSP alone would make localStorage bearer tokens safe.

### Existing controls found

- TLS production origins;
- signed JWT with a one-day expiry;
- API verification of current membership ID and `accessVersion` for Company-scoped tokens;
- fail-closed API behaviour plus client logout on 401;
- in-memory role/profile/workspace reset on explicit logout.

### Required security decision/evidence

Security must decide whether the launch architecture accepts this residual risk or migrates to a more
isolated session design. At minimum, test injection controls/CSP compatibility, logout across tabs,
revocation latency, removal of stale Company/session state, logging redaction and the absence of
optional third-party scripts on the app origin. This report does not authorise an auth rewrite.

## 9. Threat model: public token-like session data

### Asset and trust boundary

The hub token and personal-booking return path can be bearer-like secrets. They are stored on the
separate `book.perelai.app` origin, not the authenticated app origin, but remain readable by any script
running on the public origin and by browser extensions with sufficient permission.

### Material threats

- public-origin XSS or compromised bundles can read raw sessionStorage values;
- restored/cloned tabs and screenshots/history can preserve token-bearing paths beyond the user's
  mental model of a short visit;
- token URLs may reach same-origin CDN/server/application logs; the production public response did not
  expose an explicit `Referrer-Policy` for verification;
- the two-hour freshness rule is evaluated when source code reads the record; it is not a guaranteed
  physical deletion timer;
- `bf_public_booking_return_path` has no explicit TTL;
- backend token rotation/revocation, log redaction and retention were not established by browser audit.

### Existing controls found

- a separate public origin limits direct sharing with the authenticated app origin;
- hub session state is stored only after a successful server verification;
- hub/personal-return records have a two-hour logical freshness check and clear on stale/error/mismatch;
- source validation restricts return navigation to same-origin paths.

### Required security decision/evidence

Add release evidence for response header policy, token entropy/scope/expiry/revocation, log/query
redaction, page analytics exclusion, explicit physical clearing and incident invalidation. Legal pages
must never receive or analyse these values. Do not treat a token-bearing URL as ordinary attribution.

## 10. C-05, C-11, trial and catalog verification

This section prevents the cookie task from reopening settled product policy or overstating release.

- Current catalog/tests retain SOLO `$19` / one performer and STUDIO `$29` / five performers.
- Current trial tests retain exactly 21 days of STUDIO access, no card/provider subscription, full
  access before the boundary and restriction at expiry. Launch v1 requires an affirmative purchase
  after expiry; there is no automatic trial-end billing.
- C-05 source implements renewal-time downgrade with a readiness/capacity fence and immediate
  prorated upgrade intent. Paddle upgrade failure policy is fail-closed. However, authoritative Paddle
  change preview is deliberately unsupported, no web subscription-change UI was found, and release
  flags default off/are absent. Plan-change production availability is therefore not established.
- C-11 is decided as policy, but a live paid flow, purchase assent, confirmation and
  cancellation/refund operation were not established. The production checkout probe redirected to
  login and did not load Paddle.
- TEAM-RELEASE remains a hard gate. Passing source tests or completing this audit does not authorise a
  public STUDIO sale, trial or upgrade.

Focused verification run during this audit:

- subscription-change, Paddle configuration and provider-gateway contract tests: 48/48 passed;
- public-routing and billing-hook web tests: 37/37 passed;
- JWT and Google OAuth binding tests: 12/12 passed.

One deliberately simulated persistence failure logged by a test was expected; the suite passed. No
new behaviour was introduced, so this evidence-only change adds no new runtime test surface.

## 11. Classification gate and LGL-5 implementation contract

Before implementation, owner/counsel must record the actual launch countries and classify at least:

- `perelai_attr` first-touch attribution;
- PostHog initialisation/config fetch, typed events and page-leave behaviour;
- Cloudflare challenge/security cookies and diagnostic reporting;
- requested functional choices such as locale/theme/market;
- app/public necessary session state; and
- intentionally initiated Paddle, Google and Web Push flows.

The same decision packet must identify the provider dashboard/contract evidence owners for unresolved
retention rows. Until this record exists, engineering may keep optional SDKs disabled and may prepare
schema/tests, but must not guess classifications or ship a cosmetic banner.

After classification, LGL-5 is complete only when automated clean-context tests prove all of the
following for every applicable origin/country:

| Scenario | Required assertion |
|---|---|
| Before required choice | zero optional SDK initialisation, script/config/event request, cookie, localStorage/sessionStorage write, worker or pixel; only classified necessary technology may run |
| Reject all optional | same zero-optional assertion across navigation/reload; core service remains usable |
| Necessary-only fallback | missing/corrupt preference state fails closed to necessary-only and does not loop or block the core service |
| Accept selected categories | only the selected categories load; inventory names, hosts and durations match runtime |
| Withdraw | optional SDKs stop sending immediately; optional cookies/storage are cleared where technically controlled; reload stays rejected |
| Version/policy change | a new required choice does not silently inherit broader permission |
| Legal/public token safety | legal navigation never receives token/query secrets and no analytics/referrer payload contains them |
| Cookie Policy verification | generated/published inventory equals the clean-browser evidence for production hosts and provider settings |

A banner that merely records a preference while PostHog or another optional technology loads is a
test failure. If PostHog is classified optional, the existing production pre-choice configuration
request must be eliminated before that country is served with analytics enabled.

## 12. Exact remaining production blockers

1. **Owner/counsel classification:** commit launch-country technology classifications and the legal
   basis/consent result. This is the direct blocker for LGL-5 implementation.
2. **Provider/account verification:** fill the Cloudflare, PostHog, hosting, Google, Paddle and Web Push
   account/contract/retention evidence without replacing unresolved values with assumptions.
3. **Security acceptance:** close or explicitly accept the two token-storage threat models with tested
   controls; verify CSP/referrer/log-redaction behaviour in the intended production build.
4. **Implementation after classification:** add the load-controlling preference mechanism and the
   LGL-5 tests above, then rerun the complete production audit. A preference UI alone is insufficient.
5. **Legal approval/release:** reconcile the verified inventory into the Cookie Policy/Privacy Notice,
   keep them draft until the normal immutable approval manifest is completed, and obtain independent
   release authority. Completion of code or tests is not release approval.
