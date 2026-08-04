"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Pause, Play } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { MockCalendarScreen } from "@/components/mock/MockCalendarScreen"
import { MockFinanceScreen } from "@/components/mock/MockFinanceScreen"
import { cn } from "@/lib/cn"
import type { AppScreenDataset } from "@/lib/app-screen-mock"

interface HeroShowcaseProps {
  dataset: AppScreenDataset
  labels: {
    ariaLabel: string
    calendarTab: string
    financeTab: string
    paid: string
    pending: string
    caption: string
    categoryColor: string
    categoryStyling: string
    openOrders: string
    pauseAutoplay?: string
    resumeAutoplay?: string
  }
}

const ROTATE_MS = 7000

/**
 * Hero product preview: two app-screen replicas that auto-advance and can be
 * switched by hand. Finance renders first on load (FM3 §5 / defect R7).
 */
export function HeroShowcase({ dataset, labels }: HeroShowcaseProps) {
  const [index, setIndex] = useState(0)
  const [hoverOrFocusPaused, setHoverOrFocusPaused] = useState(false)
  const [explicitlyPaused, setExplicitlyPaused] = useState(false)
  /** Once the visitor picks a screen, stop yanking it away from them. */
  const [userPicked, setUserPicked] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const pauseLabel = labels.pauseAutoplay ?? "Pause automatic rotation"
  const resumeLabel = labels.resumeAutoplay ?? "Resume automatic rotation"

  const screens = [
    { key: "finance", tab: labels.financeTab },
    { key: "calendar", tab: labels.calendarTab },
  ] as const

  const advance = useCallback(() => {
    setIndex((current) => (current + 1) % screens.length)
  }, [screens.length])

  const isPaused = Boolean(
    explicitlyPaused || userPicked || hoverOrFocusPaused || prefersReducedMotion,
  )

  // WCAG 2.2.2: auto-updating content needs a way to stop it. Hover/focus
  // temporarily pauses, explicit button or picking a tab stops it, and reduced motion never starts it.
  useEffect(() => {
    if (isPaused) return
    const timer = window.setInterval(advance, ROTATE_MS)
    return () => window.clearInterval(timer)
  }, [advance, isPaused])

  const togglePause = useCallback(() => {
    setExplicitlyPaused((current) => !current)
  }, [])

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={labels.ariaLabel}
      onMouseEnter={() => setHoverOrFocusPaused(true)}
      onMouseLeave={() => setHoverOrFocusPaused(false)}
      onFocus={() => setHoverOrFocusPaused(true)}
      onBlur={() => setHoverOrFocusPaused(false)}
    >
      <figure className="overflow-hidden rounded-[24px] border border-border bg-card/40 p-3 shadow-[0_24px_60px_-20px_rgba(var(--brand-600-rgb),0.3)] backdrop-blur-xl sm:p-4">
        <p className="sr-only">
          {labels.ariaLabel}: {screens.map((screen) => screen.tab).join(", ")} — {labels.caption}
        </p>
        <div className="grid">
          {screens.map((screen, screenIndex) => {
            const isActive = screenIndex === index

            return (
              <motion.div
                key={screen.key}
                className="col-start-1 row-start-1"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: prefersReducedMotion || isActive ? 0 : screenIndex < index ? -28 : 28,
                }}
                transition={{ duration: 0.42, ease: [0.32, 0.72, 0, 1] }}
                style={{ pointerEvents: isActive ? "auto" : "none" }}
              >
                {screen.key === "calendar" ? (
                  <MockCalendarScreen
                    dataset={dataset}
                    paidLabel={labels.paid}
                    pendingLabel={labels.pending}
                  />
                ) : (
                  <MockFinanceScreen
                    dataset={dataset}
                    categoryLabels={{
                      color: labels.categoryColor,
                      styling: labels.categoryStyling,
                    }}
                    openOrdersLabel={labels.openOrders}
                  />
                )}
              </motion.div>
            )
          })}
        </div>

        <figcaption className="mt-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-secondary p-1">
              {screens.map((screen, screenIndex) => (
                <button
                  key={screen.key}
                  type="button"
                  onClick={() => {
                    setIndex(screenIndex)
                    setUserPicked(true)
                  }}
                  aria-current={screenIndex === index}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[12px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600",
                    screenIndex === index
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {screen.tab}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={togglePause}
              aria-label={isPaused ? resumeLabel : pauseLabel}
              aria-pressed={isPaused}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              {isPaused ? (
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </button>
          </div>

          <span className="text-[12px] font-medium text-subtle-text">{labels.caption}</span>
        </figcaption>
      </figure>
    </div>
  )
}

