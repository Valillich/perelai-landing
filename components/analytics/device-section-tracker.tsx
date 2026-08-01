"use client"

import { useEffect, useRef } from "react"
import { trackAnalyticsEventOnce } from "@/lib/analytics"
import type { PublishedLocale } from "@/i18n/locales"

interface DeviceSectionTrackerProps {
  surface: "home" | "niche"
  locale: PublishedLocale
}

export function DeviceSectionTracker({ surface, locale }: DeviceSectionTrackerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            trackAnalyticsEventOnce(`device_message_viewed:${surface}`, {
              name: "device_message_viewed",
              properties: { surface, locale },
            })
          }
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [surface, locale])

  return <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 -z-10" />
}
