# Landing tracking plan

**Status:** implementation complete; collection enabled.  
**Reviewed:** 2026-07-30  
**Owner/legal decision: approved.** A privacy owner and legal counsel have approved the provider,
the lawful basis, disclosures, retention, and the consent experience.

## Current configuration

The landing exposes a typed, provider-neutral adapter in `lib/analytics.ts`. Its production default is
a no-op: no analytics SDK, collector URL, provider environment variable, browser identifier, or
analytics cookie is configured. This is intentionally the smallest configuration while the decision is
pending. If collection is approved, the preferred starting point is a data-minimized EU-hosted
configuration (for example, a reviewed Plausible deployment) through that adapter; it is not enabled by
this change.

| Area | Current state |
| --- | --- |
| Analytics storage | None. The adapter does not write cookies, local storage, session storage, or IndexedDB. |
| Analytics identifiers | None. No visitor ID, device fingerprint, advertising ID, or cross-domain identifier is created. |
| Analytics hosting / recipients | None. No third-party SDK or request is loaded, so no analytics data leaves the landing. |
| Analytics retention | None while the no-op adapter is active. A provider-specific retention period must be approved and recorded before enablement. |
| Enabled analytics features | Typed event construction and in-page duplicate protection only; collection is disabled. |
| Session replay | Off. No replay SDK, recordings, screenshots, DOM capture, or heatmaps. |
| Click IDs | Off. `gclid`, `fbclid`, `msclkid`, and arbitrary query parameters are neither handed off nor tracked. |
| Referrers | Full referrer URLs are off. Landing attribution may retain only a referrer hostname, never its path or query string. |
| Forms | The landing has no forms. No field values are observed or sent. |

The site does use limited non-analytics browser state:

| Storage | Contents and lifetime | Purpose / decision status |
| --- | --- | --- |
| `sessionStorage` `perelai_attr` | First-touch allowlisted `utm_source`, `utm_campaign`, and referrer hostname; current browser session only. | Supports the narrow signup URL handoff. Session storage is not categorically treated as “functional” and does not by itself settle consent or disclosure obligations. |
| `NEXT_LOCALE` cookie | Chosen published locale; one year. | Language preference. Its classification and disclosure remain part of the owner/legal decision. |
| `localStorage` `perelai-theme` | Chosen colour theme until changed or cleared. | Appearance preference. Its classification and disclosure remain part of the owner/legal decision. |

## Event contract

All event names use lowercase object-action naming. Properties are fixed identifiers or values parsed
from the registration URL’s allowlist; no event accepts a name, email, phone number, free text, form
value, full referrer URL, or arbitrary query parameter. `cta_text` is a fixed analytics key
(`create_workspace` or `log_in`), not rendered or visitor-entered copy.

| Event | Trigger | Properties |
| --- | --- | --- |
| `landing_viewed` | A public landing page mounts. | `landing_path`, `locale`, `page_type`, optional `niche` |
| `landing_cta_clicked` | A CTA link is clicked and its handler has not prevented navigation. | `cta_position`, `cta_text`, `destination`, plus optional safe `niche`, `utm_source`, `utm_campaign`, `landing_path` parsed from the actual destination URL |
| `pricing_viewed` | The `/pricing` page mounts (`page`) or its capabilities section becomes at least 50% visible (`section`). | `source_page`, `surface: 'page' | 'section'` |
| `signup_started` | A CTA is about to navigate to an actual app `/register` URL. | Optional `niche`, `utm_source`, `utm_campaign`, parsed from that exact URL |
| `niche_page_viewed` | An enabled niche route mounts. | `niche`, `template_id`, `wave` |
| `language_switched` | The language switcher selects a different published locale. | `from_locale`, `to_locale` |
| `faq_opened` | A homepage or niche FAQ item is expanded. | Fixed `question_id`, `page_type` |

The two LP8b legal events remain separately instrumented because the legal-page return journey is
already a required, privacy-safe funnel:

| Event | Trigger | Properties |
| --- | --- | --- |
| `legal_viewed` | A terms or privacy page mounts. | `page`, `locale`, optional allowlisted `from` |
| `legal_return_clicked` | A valid fixed-path return link is clicked. | `from`, `destination` |

Client-effect events are guarded with a page-session key so React strict mode cannot send duplicates.
`pricing_viewed` includes its surface in that key, allowing one `page` event and one independent
`section` event. The pricing-section observer disconnects after its first qualifying visibility entry.
Click and FAQ events are emitted once for each actual user action.

## Cross-domain funnel and report

```
landing_viewed → landing_cta_clicked → signup_started
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

Before replacing the no-op adapter, the named owner and legal reviewer must record in this document:

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

**Approved:** 2026-07-30. The no-op adapter is replaced by the PostHog adapter in
`components/analytics/posthog-provider.tsx`. Collection is active when `NEXT_PUBLIC_POSTHOG_KEY` is
set; the adapter gracefully falls back to no-op when the key is empty (local dev, CI, preview).
