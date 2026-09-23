"use client"

import posthog from "posthog-js"
import { configureAnalyticsAdapter, type AnalyticsAdapter } from "@/lib/analytics"

// ---------------------------------------------------------------------------
// PostHog is retained for future review but disabled for Launch v1.
// ---------------------------------------------------------------------------

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? ""
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com"
const LAUNCH_V1_POSTHOG_DISABLED = true

let initialised = false

/**
 * Lazily boots PostHog with the strictest privacy profile:
 *
 * - `persistence: "memory"` — no PostHog cookies or localStorage if re-enabled
 * - `autocapture: false` — only our typed AnalyticsEvent payloads fire
 * - `disable_session_recording: true` — no replay SDK loaded
 * - `capture_pageview: false` — PageViewTracker handles this
 * - `capture_pageleave: true` — page-leave event if re-enabled
 * - `advanced_disable_feature_flags: true` — we don't use flags
 * - `disable_surveys: true` — we don't use surveys
 *
 * Launch v1 ignores even a populated project key. A later release must remove
 * this guard only after its own classification, disclosure and load-control review.
 */
function ensureInitialised(): boolean {
  if (LAUNCH_V1_POSTHOG_DISABLED) return false
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
 * Retained for a future reviewed analytics release. Launch v1 does not mount
 * this component, and its hard guard prevents a configured key from loading.
 */
export function PostHogBootstrap({ locale }: { locale: string }) {
  // The active Launch v1 path remains the no-op analytics adapter.
  if (!LAUNCH_V1_POSTHOG_DISABLED && typeof window !== "undefined" && POSTHOG_KEY) {
    configureAnalyticsAdapter(posthogAdapter)

    // Attach the current locale as a super-property so every event carries it
    // without call sites having to pass it explicitly.
    if (ensureInitialised()) {
      posthog.register({ locale })
    }
  }

  return null
}
