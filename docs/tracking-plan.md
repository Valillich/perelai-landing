# Landing tracking plan

**Launch v1 status: disabled.** The 2026-07-30 PostHog approval and the earlier event contract are
historical. The current Launch v1 decision defers marketing measurement and consent management.
Production deployment and a clean-browser audit must confirm that the new build has replaced the
2026-09-23 production behaviour documented in the legal audit.

## Active Launch v1 contract

- The root layout does not mount `PostHogBootstrap`. Its retained adapter also has a hard Launch v1
  guard, so a configured `NEXT_PUBLIC_POSTHOG_KEY` cannot initialise PostHog. The dormant configuration
  retains `persistence: "memory"`, with autocapture and session replay off, for a future review. It is
  not a claim that a live SDK is exempt from consent.
- The typed `lib/analytics.ts` interface remains available to UI components, but the adapter is a
  no-op. No landing events, page-leave events, configuration fetches, replay, advertising pixels or
  Cloudflare Web Analytics RUM beacons are authorised by this Launch v1 code change.
- The landing does not create `perelai_attr`. On page load it removes that key if an earlier build
  left it in the tab's sessionStorage. It does not read/store referrer hostnames or UTM parameters.
- Landing signup links carry only a validated product `niche` and the requested language hint `lng`.
  Legal return may also carry a release-gated standard `OfferCode`. UTM source/campaign, landing path,
  click IDs and full referrer are not forwarded. The app remains responsible for its own data duties.
- `NEXT_LOCALE`, requested theme/market preferences and essential network/security technologies
  remain subject to the verified Cookie Policy inventory. No cookie banner is built for this
  no-optional-tracker configuration; the owner/counsel classification and production check are
  recorded separately from this engineering implementation.

## Release verification

Run a fresh browser context on home, pricing, niche, install and legal routes with the intended
production environment, including a populated PostHog key. Assert:

1. No request to PostHog, Cloudflare Web Analytics RUM or any other optional measurement host before
   or after navigation/CTA clicks.
2. No `perelai_attr` is written on fresh visits, UTM/referrer visits or legal return journeys; a
   pre-existing record is removed without touching unrelated session data.
3. Signup and legal-return URLs contain only the approved `niche`, `lng` and release-gated `offer`
   fields. Malformed/retired/provider-shaped offers remain rejected.
4. Cookie/localStorage/sessionStorage, IndexedDB, Cache Storage, service workers and response
   `Set-Cookie` match the draft inventory for the actual deployment. Cloudflare edge injection and
   account retention require an operator check.
5. The approved policy text, version/hash and provider facts are reconciled before publication. A
   code task, passing tests or the former PostHog approval does not authorise production publication.

If optional analytics or marketing is later reintroduced, review the served countries, provider
behaviour, retention, disclosure and actual load controls first. Memory-only persistence is one
technical setting, not a blanket legal exemption. If a choice is required, test that reject and
withdrawal prevent SDK loading and outbound requests.
