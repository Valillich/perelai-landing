"use client"

import { useEffect, useRef, type ReactNode } from "react"
import {
  trackAnalyticsEventOnce,
  type LandingPageType,
} from "@/lib/analytics"

interface PageViewTrackerProps {
  landingPath: string
  locale: string
  pageType: LandingPageType
  niche?: string
  templateId?: string
  wave?: string
}

/** Emits one canonical page view per rendered route, even under React strict mode. */
export function PageViewTracker({
  landingPath,
  locale,
  pageType,
  niche,
  templateId,
  wave,
}: PageViewTrackerProps) {
  useEffect(() => {
    const routeKey = [landingPath, locale, pageType, niche ?? ""].join(":")

    trackAnalyticsEventOnce(`landing_viewed:${routeKey}`, {
      name: "landing_viewed",
      properties: {
        landing_path: landingPath,
        locale,
        page_type: pageType,
        ...(niche ? { niche } : {}),
      },
    })

    if (pageType === "niche" && niche && templateId && wave) {
      trackAnalyticsEventOnce(`niche_page_viewed:${routeKey}`, {
        name: "niche_page_viewed",
        properties: { niche, template_id: templateId, wave },
      })
    }
  }, [landingPath, locale, niche, pageType, templateId, wave])

  return null
}

/** The `/pricing` route is a separate pricing surface from its visible capabilities block. */
export function PricingPageViewTracker({ sourcePage = "/pricing" }: { sourcePage?: string }) {
  useEffect(() => {
    trackAnalyticsEventOnce(`pricing_viewed:${sourcePage}:page`, {
      name: "pricing_viewed",
      properties: { source_page: sourcePage, surface: "page" },
    })
  }, [sourcePage])

  return null
}

/** Emits only when a rendered pricing block is at least half visible. */
export function PricingSectionViewTracker({
  children,
  className,
  sourcePage,
}: {
  children: ReactNode
  className?: string
  sourcePage: string
}) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || !("IntersectionObserver" in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting || entry.intersectionRatio < 0.5) return

        trackAnalyticsEventOnce(`pricing_viewed:${sourcePage}:section`, {
          name: "pricing_viewed",
          properties: { source_page: sourcePage, surface: "section" },
        })
        observer.disconnect()
      },
      { threshold: 0.5 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [sourcePage])

  return <section ref={sectionRef} className={className}>{children}</section>
}
