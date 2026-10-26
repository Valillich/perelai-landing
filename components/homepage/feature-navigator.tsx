"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { FEATURE_TOPICS, currentFeatureIndex, featureSegmentProgress } from "@/lib/feature-navigation"
import { cn } from "@/lib/cn"

/** Local reading guide: a sticky side column on roomy screens, a pill elsewhere. */
export function FeatureNavigator() {
  const t = useTranslations("home.featureNav")
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(false)
  const railRef = useRef<HTMLElement>(null)
  const segmentsRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const elements = FEATURE_TOPICS.map(topic => document.getElementById(topic.id))
    const header = document.querySelector<HTMLElement>("[data-landing-header]")
    const rail = railRef.current
    let frame = 0
    const measure = () => {
      frame = 0
      const headerHeight = header?.getBoundingClientRect().height ?? 80
      rail?.style.setProperty("--feature-header-height", `${headerHeight}px`)
      const readingLine = Math.max(headerHeight + 32, window.innerHeight * 0.3)
      const bounds = elements.map(element => element?.getBoundingClientRect())
      const first = bounds[0]
      const last = bounds[bounds.length - 1]
      setVisible(Boolean(first && last && first.top < window.innerHeight * 0.65 && last.bottom > headerHeight + 24))
      setActive(currentFeatureIndex(bounds.map(rect => rect?.top ?? Infinity), readingLine))
      // Continuous connector fill bypasses React; only topic/visibility are state.
      segmentsRef.current.forEach((segment, index) => {
        const current = bounds[index]
        const next = bounds[index + 1]
        const progress = current && next ? featureSegmentProgress(current.top, next.top, readingLine) : 0
        segment?.style.setProperty("--progress", String(progress))
      })
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(measure) }
    measure()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    const observer = new ResizeObserver(schedule)
    elements.forEach(element => { if (element) observer.observe(element) })
    if (header) observer.observe(header)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
    }
  }, [])

  const dotClass = (index: number) => cn(
    "relative block shrink-0 rounded-full border-2 transition-[background-color,border-color,transform,box-shadow] duration-200 motion-reduce:transition-none",
    index === active ? "scale-125 border-brand-600 bg-brand-600 ring-4 ring-brand-600/15"
      : index < active ? "border-brand-600 bg-brand-600"
        : "border-muted-foreground/70 bg-background group-hover/topic:border-brand-600",
  )

  return (
    <div className="pointer-events-none feature-side:col-start-3 feature-side:row-start-1 feature-side:self-stretch feature-side:px-4">
      <nav ref={railRef} aria-label={t("label")} aria-hidden={!visible} inert={!visible}
        data-feature-rail data-visible={visible}
        className={cn(
          "pointer-events-auto fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 mx-auto max-w-sm rounded-full border border-border bg-background/95 p-1 backdrop-blur-md transition-[opacity,transform] duration-200 motion-reduce:transition-none",
          "feature-side:sticky feature-side:inset-x-auto feature-side:bottom-auto feature-side:top-[calc(var(--feature-header-height,5rem)+1.5rem)] feature-side:mx-0 feature-side:max-w-40 feature-side:rounded-none feature-side:border-0 feature-side:bg-transparent feature-side:p-0 feature-side:backdrop-blur-none",
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}>
        <ol className="hidden feature-side:block">
          {FEATURE_TOPICS.map((topic, index) => (
            <li key={topic.id} className="relative h-11">
              {index < FEATURE_TOPICS.length - 1 && (
                <span aria-hidden="true" className="pointer-events-none absolute left-[11px] top-1/2 h-full w-0.5 bg-muted-foreground/20">
                  <span ref={element => { segmentsRef.current[index] = element }}
                    style={{ "--progress": 0 } as CSSProperties}
                    className="block h-full origin-top scale-y-[var(--progress)] bg-brand-600 transition-transform duration-100 ease-linear motion-reduce:transition-none" />
                </span>
              )}
              <a href={`#${topic.id}`} aria-label={t(`topics.${topic.key}`)} aria-current={index === active ? "location" : undefined}
                className="group/topic relative flex h-full items-center gap-2 rounded-sm text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600">
                <span aria-hidden="true" className="flex w-6 shrink-0 justify-center"><span className={cn(dotClass(index), "h-2 w-2")} /></span>
                <span aria-hidden="true" className={cn("min-w-0 leading-snug", index === active ? "font-semibold text-foreground" : "text-muted-foreground group-hover/topic:text-foreground")}>
                  {t(`shortTopics.${topic.key}`)}
                </span>
              </a>
            </li>
          ))}
        </ol>

        <div className="flex items-center feature-side:hidden">
          {active > 0 ? (
            <a href={`#${FEATURE_TOPICS[active - 1].id}`} aria-label={`${t("previous")}: ${t(`topics.${FEATURE_TOPICS[active - 1].key}`)}`}
              className="flex h-11 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-brand-600">
              <ChevronLeft aria-hidden="true" className="h-4 w-4" />
            </a>
          ) : <span aria-hidden="true" className="flex h-11 w-8 shrink-0 items-center justify-center text-muted-foreground/30"><ChevronLeft className="h-4 w-4" /></span>}
          <div className="min-w-0 flex-1">
            <p aria-hidden="true" className="truncate text-center text-[13px] font-medium leading-5 text-foreground">
              <span key={active} className="inline-block max-w-full truncate align-top motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200">
                {t(`topics.${FEATURE_TOPICS[active].key}`)}
              </span>
            </p>
            <ol className="grid h-6 grid-cols-8">
              {FEATURE_TOPICS.map((topic, index) => (
                <li key={topic.id} className="min-w-0">
                  <a href={`#${topic.id}`} aria-label={t(`topics.${topic.key}`)} aria-current={index === active ? "location" : undefined}
                    className="group/topic flex h-full items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-brand-600">
                    <span aria-hidden="true" className={cn(dotClass(index), "h-1.5 w-1.5")} />
                  </a>
                </li>
              ))}
            </ol>
          </div>
          {active < FEATURE_TOPICS.length - 1 ? (
            <a href={`#${FEATURE_TOPICS[active + 1].id}`} aria-label={`${t("next")}: ${t(`topics.${FEATURE_TOPICS[active + 1].key}`)}`}
              className="flex h-11 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-brand-600">
              <ChevronRight aria-hidden="true" className="h-4 w-4" />
            </a>
          ) : <span aria-hidden="true" className="flex h-11 w-8 shrink-0 items-center justify-center text-muted-foreground/30"><ChevronRight className="h-4 w-4" /></span>}
        </div>
      </nav>
    </div>
  )
}
