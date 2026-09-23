"use client"

import { useEffect } from "react"

const LEGACY_ATTRIBUTION_KEY = "perelai_attr"

/** Removes an attribution record left by an earlier landing build. */
export function clearLegacyAttribution(storage: Pick<Storage, "removeItem">): void {
  try {
    storage.removeItem(LEGACY_ATTRIBUTION_KEY)
  } catch {
    // Disabled storage must not prevent the page from rendering.
  }
}

/** Launch v1 clears the old record on every landing route without capturing a replacement. */
export function LegacyAttributionCleanup() {
  useEffect(() => {
    try {
      clearLegacyAttribution(window.sessionStorage)
    } catch {
      // Access to sessionStorage itself may be blocked.
    }
  }, [])

  return null
}
