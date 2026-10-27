"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"
import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-react"
import { useTranslations } from "next-intl"
import { FEATURE_TOPICS, currentFeatureIndex, featureSegmentProgress } from "@/lib/feature-navigation"
import { cn } from "@/lib/cn"

/** Local reading guide: labeled, compact, and bottom-pill presentations. */
export function FeatureNavigator() {
  const t = useTranslations("home.featureNav")
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(false)
  const [topicsOpen, setTopicsOpen] = useState(false)
  const railRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const topicsRef = useRef<HTMLDivElement>(null)
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

  useEffect(() => {
    if (!visible) setTopicsOpen(false)
  }, [visible])

  useEffect(() => {
    if (!topicsOpen) return
    topicsRef.current?.querySelector<HTMLAnchorElement>('[aria-current="location"]')?.focus()
    const onPointerDown = (event: PointerEvent) => {
      if (!railRef.current?.contains(event.target as Node)) setTopicsOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      event.preventDefault()
      setTopicsOpen(false)
      triggerRef.current?.focus()
    }
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [topicsOpen])

  const dotClass = (index: number) => cn(
    "relative block shrink-0 rounded-full border transition-[background-color,border-color] duration-200 motion-reduce:transition-none",
    index === active ? "border-brand-600 bg-brand-600"
      : index < active ? "border-brand-600/50 bg-brand-600/50"
        : "border-muted-foreground/45 bg-background group-hover/topic:border-brand-600",
  )

  const arrowClass = "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-600"

  return (
    <div className="pointer-events-none feature-compact:col-start-3 feature-compact:row-start-1 feature-compact:self-stretch feature-compact:px-4">
      <nav ref={railRef} aria-label={t("label")} aria-hidden={!visible} inert={!visible}
        data-feature-rail data-visible={visible}
        className={cn(
          "pointer-events-auto fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 mx-auto max-w-sm rounded-full bg-background/90 p-1 shadow-[0_12px_32px_-16px_rgba(15,23,36,0.4)] backdrop-blur-xl transition-[opacity,transform] duration-200 motion-reduce:transition-none dark:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.65)]",
          "feature-compact:sticky feature-compact:inset-x-auto feature-compact:bottom-auto feature-compact:top-[calc(var(--feature-header-height,5rem)+1.5rem)] feature-compact:mx-0 feature-compact:max-w-40 feature-compact:rounded-none feature-compact:bg-transparent feature-compact:p-0 feature-compact:shadow-none feature-compact:backdrop-blur-none",
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}>
        <ol className="hidden feature-compact:block">
          {FEATURE_TOPICS.map((topic, index) => (
            <li key={topic.id} className="relative h-10">
              {index < FEATURE_TOPICS.length - 1 && (
                <span aria-hidden="true" className="pointer-events-none absolute left-[11px] top-1/2 h-full w-px bg-muted-foreground/20">
                  <span ref={element => { segmentsRef.current[index] = element }}
                    style={{ "--progress": 0 } as CSSProperties}
                    className="block h-full origin-top scale-y-[var(--progress)] bg-brand-600 transition-transform duration-100 ease-linear motion-reduce:transition-none" />
                </span>
              )}
              <a href={`#${topic.id}`} aria-label={t(`topics.${topic.key}`)} aria-current={index === active ? "location" : undefined}
                className="group/topic relative flex h-full min-w-0 items-center gap-2 rounded-sm text-[13px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600">
                <span aria-hidden="true" className="flex w-6 shrink-0 justify-center"><span className={cn(dotClass(index), "h-2 w-2")} /></span>
                <span aria-hidden="true" className={cn(
                  "min-w-0 truncate leading-snug transition-[color,opacity] duration-200 motion-reduce:transition-none",
                  "feature-compact:opacity-0 group-hover/topic:opacity-100 group-focus-visible/topic:opacity-100 feature-side:opacity-100",
                  index === active ? "font-medium text-foreground feature-compact:opacity-100" : "text-muted-foreground group-hover/topic:text-foreground",
                )}>
                  {t(`shortTopics.${topic.key}`)}
                </span>
              </a>
            </li>
          ))}
        </ol>

        <div className="flex items-center feature-compact:hidden">
          {active > 0 ? (
            <a href={`#${FEATURE_TOPICS[active - 1].id}`} aria-label={`${t("previous")}: ${t(`topics.${FEATURE_TOPICS[active - 1].key}`)}`}
              className={arrowClass} onClick={() => setTopicsOpen(false)}>
              <ChevronLeft aria-hidden="true" className="h-4 w-4" />
            </a>
          ) : <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center text-muted-foreground/30"><ChevronLeft className="h-4 w-4" /></span>}
          <div className="min-w-0 flex-1">
            <button ref={triggerRef} type="button" aria-expanded={topicsOpen} aria-controls="feature-topic-list"
              aria-label={`${t(`topics.${FEATURE_TOPICS[active].key}`)} — ${t("contents")}`}
              className="flex h-11 w-full flex-col items-center justify-center rounded-full px-2 text-[13px] font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-brand-600"
              onClick={() => setTopicsOpen(open => !open)}>
              <span className="flex h-6 max-w-full items-center justify-center gap-1">
                <span key={active} aria-hidden="true" className="min-w-0 truncate motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200">
                  {t(`topics.${FEATURE_TOPICS[active].key}`)}
                </span>
                <ChevronUp aria-hidden="true" className={cn("h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform duration-200 motion-reduce:transition-none", topicsOpen && "rotate-180")} />
              </span>
              <span aria-hidden="true" className="grid h-5 w-full grid-cols-8">
                {FEATURE_TOPICS.map((topic, index) => (
                  <span key={topic.id} className="flex min-w-0 items-center justify-center">
                    <span className={cn(dotClass(index), "h-1.5 w-1.5")} />
                  </span>
                ))}
              </span>
            </button>
          </div>
          {active < FEATURE_TOPICS.length - 1 ? (
            <a href={`#${FEATURE_TOPICS[active + 1].id}`} aria-label={`${t("next")}: ${t(`topics.${FEATURE_TOPICS[active + 1].key}`)}`}
              className={arrowClass} onClick={() => setTopicsOpen(false)}>
              <ChevronRight aria-hidden="true" className="h-4 w-4" />
            </a>
          ) : <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center text-muted-foreground/30"><ChevronRight className="h-4 w-4" /></span>}
        </div>

        <div ref={topicsRef} id="feature-topic-list" hidden={!topicsOpen}
          className="absolute inset-x-0 bottom-[calc(100%+0.75rem)] rounded-2xl bg-background p-2 shadow-[0_16px_40px_-16px_rgba(15,23,36,0.4)] feature-compact:hidden dark:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.7)]">
          <ol aria-label={t("contents")} className="max-h-[min(60vh,22rem)] overflow-y-auto overscroll-contain">
            {FEATURE_TOPICS.map((topic, index) => (
              <li key={topic.id}>
                <a href={`#${topic.id}`} aria-label={t(`topics.${topic.key}`)} aria-current={index === active ? "location" : undefined}
                  className={cn(
                    "flex min-h-11 items-center rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-brand-600",
                    index === active ? "bg-secondary font-medium text-foreground" : "text-muted-foreground",
                  )}
                  onClick={() => setTopicsOpen(false)}>
                  {t(`topics.${topic.key}`)}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </div>
  )
}
