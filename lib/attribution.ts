"use client"

import { useEffect, useState } from "react"
import { env } from "@/lib/env"

const STORAGE_KEY = "perelai_attr"

export interface AttributionContext {
  source: string
  campaign: string
  referrerHost?: string
  niche?: string
}

interface AttributionStorage {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
  removeItem(key: string): void
}

export interface AttributionCaptureOptions {
  search?: string
  referrer?: string
  storage?: AttributionStorage
  /** Legal app-return routes preserve first touch instead of capturing a self-referral. */
  skipCapture?: boolean
}

function nonEmptyString(value: string | null, maximumLength: number): string | undefined {
  const normalized = value?.trim()
  return normalized ? normalized.slice(0, maximumLength) : undefined
}

function referrerHostname(referrer: string | undefined): string | undefined {
  if (!referrer) return undefined

  try {
    return new URL(referrer).hostname.toLowerCase() || undefined
  } catch {
    return undefined
  }
}

function isAttributionContext(value: unknown): value is AttributionContext {
  if (!value || typeof value !== "object") return false

  const candidate = value as Partial<AttributionContext>
  return typeof candidate.source === "string" && typeof candidate.campaign === "string"
}

function storedAttribution(storage: AttributionStorage): AttributionContext | undefined {
  try {
    const serialized = storage.getItem(STORAGE_KEY)
    if (!serialized) return undefined

    const parsed: unknown = JSON.parse(serialized)
    if (isAttributionContext(parsed)) return parsed

    storage.removeItem(STORAGE_KEY)
  } catch {
    // Storage can be disabled or contain corrupt data. Either case fails open.
  }

  return undefined
}

/**
 * Captures the first session touch in a deliberately small record. This does
 * not decide whether consent is required; that policy belongs to LP10.
 */
export function captureFirstTouchAttribution(
  options: AttributionCaptureOptions = {},
): AttributionContext {
  const storage = options.storage
  const query = new URLSearchParams(options.search ?? "")
  const skipCapture = options.skipCapture || query.has("from")

  if (skipCapture) {
    const existing = storage ? storedAttribution(storage) : undefined
    return existing ?? {
      source: "direct",
      campaign: env.NEXT_PUBLIC_DEFAULT_CAMPAIGN,
    }
  }

  if (storage) {
    const existing = storedAttribution(storage)
    if (existing) return existing
  }

  const referrerHost = referrerHostname(options.referrer)
  const context: AttributionContext = {
    source: nonEmptyString(query.get("utm_source"), 80) ?? referrerHost ?? "direct",
    campaign:
      nonEmptyString(query.get("utm_campaign"), 120) ?? env.NEXT_PUBLIC_DEFAULT_CAMPAIGN,
  }

  if (referrerHost) context.referrerHost = referrerHost

  if (storage) {
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(context))
    } catch {
      // Private browsing and storage quotas must not block signup.
    }
  }

  return context
}

/** Returns first-touch attribution plus the niche for the currently rendered page. */
export function useAttribution(niche?: string): AttributionContext {
  const [attribution, setAttribution] = useState<AttributionContext | undefined>()

  useEffect(() => {
    const search = window.location.search
    setAttribution(
      captureFirstTouchAttribution({
        search,
        referrer: document.referrer,
        storage: window.sessionStorage,
        skipCapture: new URLSearchParams(search).has("from"),
      }),
    )
  }, [])

  return {
    source: attribution?.source ?? "direct",
    campaign: attribution?.campaign ?? env.NEXT_PUBLIC_DEFAULT_CAMPAIGN,
    ...(attribution?.referrerHost ? { referrerHost: attribution.referrerHost } : {}),
    ...(niche ? { niche } : {}),
  }
}
