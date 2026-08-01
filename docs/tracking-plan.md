# Landing tracking plan

**Status:** Implementation complete; provider adapter approved and enabled.
**Reviewed:** 2026-07-30
**Owner/legal decision: approved.** A privacy owner and legal counsel have approved the PostHog EU Cloud provider, lawful basis, disclosures, retention, and consent experience.

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
`section` event. `device_message_viewed` includes its surface (`home` or `niche`) in that key and fires once when 50% visible.
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
