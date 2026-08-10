# Landing tracking plan

**Status:** PostHog event collection is enabled. Cloudflare Web Analytics RUM is recorded as a second analytics recipient, but remains disabled until its separate privacy and consent decision is approved and the activation checks below are complete.
**Reviewed:** 2026-08-05
**Owner/legal decision:** PostHog EU Cloud is approved. The owner has requested broader performance analytics through Cloudflare Web Analytics; Cloudflare’s distinct recipient, processing, and disclosure decision is **pending privacy/legal approval**.

## Current configuration

The landing exposes a typed, provider-neutral adapter in `lib/analytics.ts`. Production event capture is handled by the PostHog EU Cloud adapter in `components/analytics/posthog-provider.tsx`. Collection is active when `NEXT_PUBLIC_POSTHOG_KEY` is configured; the adapter gracefully falls back to no-op when the key is absent (local dev, CI, preview).

| Area | Current state |
| --- | --- |
| Analytics storage | Memory persistence only (`persistence: 'memory'`). The adapter does not write cookies, local storage, session storage, or IndexedDB for analytics. |
| Analytics identifiers | None. No visitor ID, device fingerprint, advertising ID, or cross-domain identifier is created. |
| Analytics hosting / recipients | PostHog EU Cloud (Frankfurt, Germany). No sub-processors outside the EU for event ingestion or storage. |
| Analytics retention | 90 days standard retention under legitimate interest. |
| Enabled analytics features | Custom event capture only. |
| Session replay | Off. No replay SDK, recordings, screenshots, DOM capture, or heatmaps. |
| Click IDs | Off. `gclid`, `fbclid`, `msclkid`, and arbitrary query parameters are neither handed off nor tracked. |
| Referrers | Full referrer URLs are off. Landing attribution retains only allowlisted referrer hostnames. |
| Forms | The landing has no forms. No field values are observed or sent. |

## Cloudflare Web Analytics RUM: second recipient

Cloudflare Web Analytics is being added for real-user performance measurement, not for product
funnel events. It is separate from the typed `lib/analytics.ts` contract: Cloudflare RUM does not
support custom events, and its edge injection must not be used to duplicate `landing_viewed`, CTA,
signup, or onboarding measurements that belong in PostHog and the application report.

| Area | Planned Cloudflare RUM configuration |
| --- | --- |
| Recipient / purpose | Cloudflare, as a second analytics recipient, for page views, traffic patterns, page-load timing and Core Web Vitals. |
| Status | **Disabled pending approval.** The current Cloudflare dashboard setting must remain `Disable` until this section’s acceptance criteria are signed off. |
| Activation choice | After approval, select **Enable, excluding visitor data in the EU** for `perelai.com`, not global `Enable`. This prevents the beacon from running for visitors routed through EEA/EU, UK, and Swiss Cloudflare data centres. |
| Delivery / scope | Cloudflare’s automatic setup injects the RUM beacon at the edge. Before activation, confirm that the zone has no unintended public subdomains; without Web Analytics rules, automatic setup can inject it on every page and subdomain in the zone. Scope rules to the landing hostname and public landing paths where the account plan supports rules. |
| Browser storage / identifiers | Cloudflare documents no use of cookies, localStorage, sessionStorage, IndexedDB, IP fingerprinting, or a cross-session visitor ID. It does generate an ephemeral `pageloadId` for each page load. This absence of persistent storage does **not** decide the consent or disclosure requirement. |
| Browser data sent | Performance API data including navigation/resource timings, paint timings, LCP, CLS, INP, TTFB, page URL (`landingPath`), and referrer URL. Cloudflare says it receives source IP as part of request handling and discards it at the nearest data centre rather than storing it. |
| Query-string safeguard | Cloudflare currently says Web Analytics does not log query strings, including UTM parameters, to avoid sensitive-data collection. Treat that as an implementation fact to re-verify before activation and on material Cloudflare changes; it is not permission to place PII in URLs. The landing must continue to avoid PII and arbitrary query passthrough. |
| Processing location | RUM data is generally processed at the nearest Cloudflare data centre and may be processed in a different region from where it originated. It is not an EU-only processing promise. |
| Retention / sampling | Cloudflare documents seven days of unsampled beacon data, aggregated long-term data at about 10% of original volume, and six months of dashboard access. |
| Features deliberately out of scope | No session replay, heatmaps, click IDs, advertising pixels, user profiles, custom event payloads, form capture, or cross-domain identifier. |

### Cloudflare activation gates

Do not change the dashboard setting until all of the following are recorded by the owner and privacy/legal reviewer:

1. Cloudflare is added to the public privacy disclosure as an analytics recipient, including the
   RUM purpose, processing geography, browser data categories, retention/sampling, and the
   EU/EEA/UK/Swiss exclusion.
2. The lawful basis and consent experience are expressly approved for this collection. “Cookieless”
   or “no browser storage” is not treated as a blanket exemption.
3. The owner accepts the automatic-injection scope after checking the Cloudflare zone’s hostnames
   and any Web Analytics rules. If that scope cannot be limited to the intended landing surfaces,
   keep RUM disabled.
4. A pre-production network check confirms that the beacon is absent for excluded EU traffic,
   only the intended hostname/path receives the beacon, and no PII-bearing query string is present
   in the data available to the account.
5. This plan, the privacy page, and the Cloudflare dashboard setting are updated together with the
   activation date and reviewer names. Re-review if Cloudflare enables query-string or custom-event
   support.

The site does use limited non-analytics browser state:

| Storage | Contents and lifetime | Purpose / decision status |
| --- | --- | --- |
| `sessionStorage` `perelai_attr` | First-touch allowlisted `utm_source`, `utm_campaign`, and referrer hostname; current browser session only. | Supports the narrow signup URL handoff. |
| `NEXT_LOCALE` cookie | Chosen published locale; one year. | Language preference. |
| `localStorage` `perelai-theme` | Chosen colour theme until changed or cleared. | Appearance preference. |

## Event contract

All event names use lowercase object-action naming. Properties are fixed identifiers or values parsed
from the registration URL’s allowlist; no event accepts a name, email, phone number, free text, form
value, full referrer URL, or arbitrary query parameter. `cta_text` is a fixed analytics key
(`create_workspace` or `log_in`), not rendered or visitor-entered copy.

| Event | Trigger | Properties |
| --- | --- | --- |
| `landing_viewed` | A public landing page mounts. | `landing_path`, `locale`, `page_type: 'home' | 'pricing' | 'niche' | 'terms' | 'privacy' | 'install'`, optional `niche` |
| `landing_cta_clicked` | A CTA link is clicked and its handler has not prevented navigation. | `cta_position: fixed enum (header_login, header_signup, hero_signup, closing_signup, niche_hero, niche_final_cta, pricing_signup, install_hero_signup, install_login, install_final_signup)`, `cta_text`, `destination`, plus optional safe `niche`, `utm_source`, `utm_campaign`, `landing_path` parsed from the actual destination URL |
| `pricing_viewed` | The `/pricing` page mounts (`page`) or its capabilities section becomes at least 50% visible (`section`). | `source_page`, `surface: 'page' | 'section'` |
| `signup_started` | A CTA is about to navigate to an actual app `/register` URL. | Optional `niche`, `utm_source`, `utm_campaign`, parsed from that exact URL |
| `niche_page_viewed` | An enabled niche route mounts. | `niche`, `template_id`, `wave` |
| `language_switched` | The language switcher selects a different published locale. | `from_locale`, `to_locale` |
| `faq_opened` | A homepage or niche FAQ item is expanded. | Fixed `question_id`, `page_type` |
| `device_message_viewed` | Homepage or niche device section reaches 50% visibility once. | `surface: 'home' | 'niche'`, `locale` |
| `collaboration_message_viewed` | Homepage collaboration section reaches 50% visibility once. | `surface: 'home'`, `locale` |
| `install_guide_opened` | Visitor explicitly selects a platform guide tab on `/install`. | `platform: 'iphone' | 'ipad' | 'android' | 'desktop' | 'browser'`, `source_page: '/install'` |
| `install_help_clicked` | Visitor follows an internal link leading to `/install`. | `source_surface: 'hero' | 'home_section' | 'niche' | 'header' | 'footer' | 'faq'` |

The two LP8b legal events remain separately instrumented because the legal-page return journey is
already a required, privacy-safe funnel:

| Event | Trigger | Properties |
| --- | --- | --- |
| `legal_viewed` | A terms or privacy page mounts. | `page`, `locale`, optional allowlisted `from` |
| `legal_return_clicked` | A valid fixed-path return link is clicked. | `from`, `destination` |

Client-effect events are guarded with a page-session key so React strict mode cannot send duplicates.
`pricing_viewed` includes its surface in that key, allowing one `page` event and one independent
`section` event. `device_message_viewed` includes its surface (`home` or `niche`) in that key and fires once when 50% visible. `collaboration_message_viewed` includes its surface (`home`) in that key and fires once when 50% visible.
Click, guide-open, help-click, and FAQ events are emitted once for each actual user action.

## Cross-domain funnel and report

```
landing_viewed(page_type=install)
  → install_guide_opened / install_help_clicked
  → landing_cta_clicked
  → signup_started
     │
     └─ app /register URL: niche + utm_source + utm_campaign + landing_path + lng
         → onboarding_started → onboarding_template_recommended → onboarding_completed
```

The join is not a cross-domain cookie. The landing’s allowlisted registration URL reaches the app,
which persists `acquisitionNiche`, `acquisitionCampaign`, and `acquisitionLandingPath` on `Company`.
`apps/api/src/scripts/onboarding-report.ts` already produces the privacy-safe acquisition-niche
breakdown used to validate the first end-to-end funnel. The other two persisted fields remain available
on `Company` for a scoped follow-up report; this landing change does not modify the app repository.

For `signup_started`, the event’s optional `niche`, `utm_source`, and `utm_campaign` are read from the
final generated `/register` URL rather than from raw page state. This keeps the measurement payload in
step with the actual handoff and cannot include discarded niche values, click IDs, `landing_path`, or
the language UX hint.

## Enablement checklist

Before replacing the no-op adapter, the named owner and legal reviewer recorded:

1. **Provider and hosting region:** PostHog EU Cloud (Frankfurt, Germany). Standard GDPR DPA
   accepted via PostHog's data processing agreement. No sub-processors outside the EU for event
   ingestion and storage.
2. **Browser storage and identifiers:** `persistence: 'memory'` — no cookies, no localStorage, no
   sessionStorage, no IndexedDB for analytics. No visitor ID, device fingerprint, or advertising
   identifier is created. **No consent banner required** (no persistent identifiers or cross-session
   tracking). The three pre-existing non-analytics storage items (`perelai_attr` sessionStorage,
   `NEXT_LOCALE` cookie, `perelai-theme` localStorage) are unchanged.
3. **Purpose, lawful basis, disclosures, retention:** Product analytics under legitimate interest.
   Only the typed events defined in the "Event contract" section above are collected. PostHog default
   retention: 90 days. Disclosure via the privacy page.
4. **Enabled features:** Custom event capture only. Autocapture: OFF. Session replay: OFF.
   Click IDs: OFF. Heatmaps: OFF. Surveys: OFF. Feature flags: OFF. Full referrer: OFF.
   Web vitals: OFF.
5. **Test evidence:** `tests/analytics.test.ts` validates event shape, allowlisted properties,
   PII rejection, and per-surface deduplication. The PostHog adapter delegates to
   `posthog.capture(event.name, event.properties)` with no transformation — the same typed payload
   reaches PostHog.

**Approved:** 2026-07-30. The PostHog adapter is active in `components/analytics/posthog-provider.tsx`.
Collection is active when `NEXT_PUBLIC_POSTHOG_KEY` is set; the adapter gracefully falls back to no-op
when the key is empty (local dev, CI, preview).
