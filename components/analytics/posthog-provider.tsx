"use client"

import posthog from "posthog-js"
import { configureAnalyticsAdapter, type AnalyticsAdapter } from "@/lib/analytics"

// ---------------------------------------------------------------------------
// Privacy-hardened PostHog initialisation
// ---------------------------------------------------------------------------

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? ""
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com"

let initialised = false

/**
 * Lazily boots PostHog with the strictest privacy profile:
 *
 * - `persistence: "memory"` — no cookies, no localStorage → no consent banner
 * - `autocapture: false` — only our typed AnalyticsEvent payloads fire
 * - `disable_session_recording: true` — no replay SDK loaded
 * - `capture_pageview: false` — PageViewTracker handles this
 * - `capture_pageleave: true` — bounce rate, privacy-safe
 * - `advanced_disable_feature_flags: true` — we don't use flags
 * - `disable_surveys: true` — we don't use surveys
 *
 * If `NEXT_PUBLIC_POSTHOG_KEY` is empty (dev, CI, preview) PostHog is never
 * loaded and the adapter stays no-op. Zero runtime cost, zero console noise.
 */
function ensureInitialised(): boolean {
  if (initialised) return true
  if (!POSTHOG_KEY || typeof window === "undefined") return false

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    ui_host: "https://eu.posthog.com",

    // Privacy — matches docs/tracking-plan.md constraints
    persistence: "memory",
    autocapture: false,
    disable_session_recording: true,
    disable_surveys: true,
    advanced_disable_feature_flags: true,

    // Page lifecycle
    capture_pageview: false,
    capture_pageleave: true,

    // Identifiers — none
    ip: false,

    // Do not load any extra JS bundles
    disable_external_dependency_loading: true,
  })

  initialised = true
  return true
}

// ---------------------------------------------------------------------------
// AnalyticsAdapter implementation
// ---------------------------------------------------------------------------

const posthogAdapter: AnalyticsAdapter = {
  track(event) {
    if (!ensureInitialised()) return
    posthog.capture(event.name, event.properties)
  },
}

// ---------------------------------------------------------------------------
// Bootstrap component
// ---------------------------------------------------------------------------

/**
 * Client component that wires PostHog into the existing analytics adapter.
 * Render once in the root layout. Does not wrap children — it's a side-effect
 * component like PageViewTracker.
 *
 * When the key is missing the adapter stays no-op and nothing loads.
 */
export function PostHogBootstrap({ locale }: { locale: string }) {
  // This runs during the first client render. configureAnalyticsAdapter is
  // idempotent in practice (it just sets a module-level variable), so calling
  // it on every render is harmless but we guard with the init flag anyway.
  if (typeof window !== "undefined" && POSTHOG_KEY) {
    configureAnalyticsAdapter(posthogAdapter)

    // Attach the current locale as a super-property so every event carries it
    // without call sites having to pass it explicitly.
    if (ensureInitialised()) {
      posthog.register({ locale })
    }
  }

  return null
}
