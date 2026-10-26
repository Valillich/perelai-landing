"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, ArrowUp, List, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { FEATURE_TOPICS, currentFeatureIndex } from "@/lib/feature-navigation"
import { cn } from "@/lib/cn"

/** Follows ordinary page scroll; never captures wheel, touch or arrow keys. */
export function FeatureNavigator() {
  const t = useTranslations("home.featureNav")
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const elements = FEATURE_TOPICS.map(topic => document.getElementById(topic.id))
    let frame = 0
    const measure = () => {
      frame = 0
      const bounds = elements.map(element => element?.getBoundingClientRect())
      const first = bounds[0]
      const last = bounds[bounds.length - 1]
      const inRange = Boolean(first && last && first.top < window.innerHeight * 0.65 && last.bottom > 100)
      setVisible(inRange)
      if (!inRange) setExpanded(false)
      setActive(currentFeatureIndex(bounds.map(rect => rect?.top ?? Infinity), Math.max(120, window.innerHeight * 0.3)))
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(measure) }
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) setExpanded(false)
    }
    measure()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    document.addEventListener("pointerdown", closeOutside)
    // Product previews and fonts can change section heights after the first render.
    const observer = new ResizeObserver(schedule)
    elements.forEach(element => { if (element) observer.observe(element) })
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      document.removeEventListener("pointerdown", closeOutside)
    }
  }, [])

  if (!visible) return null

  const topicLink = (index: number, current = false) => {
    const topic = FEATURE_TOPICS[index]
    return (
      <a key={topic.id} href={`#${topic.id}`} aria-current={current ? "location" : undefined}
        onClick={() => setExpanded(false)}
        className={cn("flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 text-sm leading-snug focus-visible:outline-2 focus-visible:outline-brand-600",
          current ? "bg-brand-600/10 font-semibold text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground")}
      >
        <span aria-hidden="true" className={cn("h-1.5 w-1.5 shrink-0 rounded-full", current ? "bg-brand-600" : "bg-muted-foreground/40")} />
        {t(`topics.${topic.key}`)}
      </a>
    )
  }

  return (
    <nav ref={ref} aria-label={t("label")} className="feature-navigator fixed inset-x-4 z-40 mx-auto w-auto max-w-sm rounded-2xl border border-border bg-card p-2 lg:inset-x-auto lg:right-6 lg:w-72"
      onKeyDown={event => {
        if (event.key === "Escape" && expanded) {
          setExpanded(false)
          toggleRef.current?.focus()
        }
      }}>
      {expanded && (
        <div id="feature-contents" className="absolute inset-x-0 bottom-[calc(100%+0.5rem)] max-h-[min(28rem,calc(100dvh-8rem))] overflow-y-auto overscroll-contain rounded-2xl border border-border bg-card p-2 lg:max-h-[min(28rem,max(3rem,calc(100dvh-20rem)))]">
          {FEATURE_TOPICS.map((_, index) => topicLink(index, index === active))}
        </div>
      )}
      <div className="flex items-center gap-1">
        <button ref={toggleRef} type="button" aria-expanded={expanded} aria-controls={expanded ? "feature-contents" : undefined}
          onClick={() => setExpanded(value => !value)}
          className="flex min-h-11 min-w-0 flex-1 items-center gap-2 rounded-lg px-2 text-left text-sm font-medium hover:bg-secondary focus-visible:outline-2 focus-visible:outline-brand-600">
          {expanded ? <X aria-hidden="true" className="h-4 w-4 shrink-0" /> : <List aria-hidden="true" className="h-4 w-4 shrink-0" />}
          <span className="min-w-0 flex-1 lg:hidden">{t(`topics.${FEATURE_TOPICS[active].key}`)}<span className="sr-only"> · {t("contents")}</span></span>
          <span className="hidden lg:inline">{t("contents")}</span>
          <span className="shrink-0 text-xs tabular-nums text-muted-foreground">{active + 1}/{FEATURE_TOPICS.length}</span>
        </button>
        {[{ index: active - 1, label: t("previous"), Icon: ArrowUp }, { index: active + 1, label: t("next"), Icon: ArrowDown }].map(({ index, label, Icon }) => (
          index >= 0 && index < FEATURE_TOPICS.length ? (
            <a key={label} href={`#${FEATURE_TOPICS[index].id}`} aria-label={`${label}: ${t(`topics.${FEATURE_TOPICS[index].key}`)}`}
              onClick={() => setExpanded(false)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg hover:bg-secondary focus-visible:outline-2 focus-visible:outline-brand-600">
              <Icon aria-hidden="true" className="h-4 w-4" />
            </a>
          ) : <span key={label} aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center text-muted-foreground/30"><Icon className="h-4 w-4" /></span>
        ))}
      </div>
      <div className="hidden border-t border-border pt-1 lg:block">
        {active > 0 && topicLink(active - 1)}
        {topicLink(active, true)}
        {active < FEATURE_TOPICS.length - 1 && topicLink(active + 1)}
      </div>
    </nav>
  )
}
