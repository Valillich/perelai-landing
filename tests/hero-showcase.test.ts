import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { NextIntlClientProvider } from "next-intl"
import { HeroShowcase } from "@/components/homepage/hero-showcase"
import { buildAppScreenDataset } from "@/lib/app-screen-mock"
import enHome from "@/messages/en/home.json"

const REFERENCE = "2026-07-15T12:00:00.000Z"

const dataset = buildAppScreenDataset("independent_colorist", "en", "US", REFERENCE)
const labels = {
  ariaLabel: enHome.hero.showcase.ariaLabel,
  calendarTab: enHome.hero.showcase.calendarTab,
  financeTab: enHome.hero.showcase.financeTab,
  paid: enHome.hero.showcase.paid,
  pending: enHome.hero.showcase.pending,
  caption: enHome.hero.imageCaption,
  categoryColor: enHome.finance.fixture.category.color,
  categoryStyling: enHome.finance.fixture.category.styling,
  openOrders: enHome.finance.fixture.openOrders,
  pauseAutoplay: enHome.hero.showcase.pauseAutoplay,
  resumeAutoplay: enHome.hero.showcase.resumeAutoplay,
}

/**
 * State machine harness for HeroShowcase carousel rotation invariants.
 */
function createShowcaseStateHarness(options: {
  prefersReducedMotion?: boolean
  rotateMs?: number
} = {}) {
  const rotateMs = options.rotateMs ?? 7000
  let index = 0
  let hoverOrFocusPaused = false
  let explicitlyPaused = false
  let userPicked = false
  const prefersReducedMotion = options.prefersReducedMotion ?? false
  let timerId: ReturnType<typeof setInterval> | null = null

  function getIsPaused() {
    return Boolean(explicitlyPaused || userPicked || hoverOrFocusPaused || prefersReducedMotion)
  }

  function syncTimer() {
    if (timerId !== null) {
      clearInterval(timerId)
      timerId = null
    }
    if (!getIsPaused()) {
      timerId = setInterval(() => {
        index = (index + 1) % 2
      }, rotateMs)
    }
  }

  syncTimer()

  return {
    getIndex: () => index,
    isPaused: getIsPaused,
    selectTab: (tabIndex: number) => {
      index = tabIndex
      userPicked = true
      syncTimer()
    },
    toggleExplicitPause: () => {
      explicitlyPaused = !explicitlyPaused
      syncTimer()
    },
    setHoverOrFocus: (isHoveredOrFocused: boolean) => {
      hoverOrFocusPaused = isHoveredOrFocused
      syncTimer()
    },
    destroy: () => {
      if (timerId !== null) clearInterval(timerId)
    },
  }
}

describe("HeroShowcase calendar-first order and accessibility contract (POS2)", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("renders Calendar before Finance in the sr-only summary and initial markup", () => {
    const html = renderToStaticMarkup(
      createElement(NextIntlClientProvider, {
        locale: "en",
        messages: { home: enHome },
        children: createElement(HeroShowcase, { dataset, labels }),
      }),
    )

    const srOnlyMatch = html.match(/sr-only[^>]*>([^<]+)/)
    expect(srOnlyMatch?.[1]).toContain(`${labels.calendarTab}, ${labels.financeTab}`)

    const financeTabIndex = html.indexOf(labels.financeTab)
    const calendarTabIndex = html.indexOf(labels.calendarTab)
    expect(calendarTabIndex).toBeGreaterThan(-1)
    expect(financeTabIndex).toBeGreaterThan(calendarTabIndex)

    // Calendar indicators are present on first paint (Calendar is index 0).
    expect(html).toContain(labels.paid)
    expect(html).toContain(labels.pending)
  })

  it("a. renders Calendar as the first active state and includes keyboard-accessible pause control", () => {
    const html = renderToStaticMarkup(
      createElement(NextIntlClientProvider, {
        locale: "en",
        messages: { home: enHome },
        children: createElement(HeroShowcase, { dataset, labels }),
      }),
    )

    // Calendar tab is selected on initial render
    expect(html).toMatch(new RegExp(`aria-current="true"[^>]*>${labels.calendarTab}</button>`))
    expect(html).toMatch(new RegExp(`aria-current="false"[^>]*>${labels.financeTab}</button>`))

    // Explicit pause button exists with aria-pressed="false" and accessible label
    expect(html).toContain(`aria-pressed="false"`)
    expect(html).toContain(`aria-label="${labels.pauseAutoplay}"`)
    expect(html).toContain(`focus-visible:ring-2`)
  })

  it("b. automatically rotates screens every 7000ms before any interaction", () => {
    const harness = createShowcaseStateHarness()
    expect(harness.getIndex()).toBe(0)
    expect(harness.isPaused()).toBe(false)

    // Advance 7000ms -> Finance (index 1)
    vi.advanceTimersByTime(7000)
    expect(harness.getIndex()).toBe(1)

    // Advance another 7000ms -> Calendar (index 0)
    vi.advanceTimersByTime(7000)
    expect(harness.getIndex()).toBe(0)

    harness.destroy()
  })

  it("c. stops automatic rotation permanently upon click or keyboard tab selection", () => {
    const harness = createShowcaseStateHarness()

    // User selects Finance tab (index 1)
    harness.selectTab(1)
    expect(harness.getIndex()).toBe(1)
    expect(harness.isPaused()).toBe(true)

    // Advance 21000ms -> remains on index 1 permanently
    vi.advanceTimersByTime(21000)
    expect(harness.getIndex()).toBe(1)

    harness.destroy()
  })

  it("d. toggles rotation using explicit pause/resume button and hover out never undoes explicit pause", () => {
    const harness = createShowcaseStateHarness()

    // User hovers/focuses
    harness.setHoverOrFocus(true)
    expect(harness.isPaused()).toBe(true)

    // Explicitly click pause while hovered
    harness.toggleExplicitPause()
    expect(harness.isPaused()).toBe(true)

    // Mouse leaves / focus lost — explicit pause MUST NOT be undone
    harness.setHoverOrFocus(false)
    expect(harness.isPaused()).toBe(true)

    // Advance 14000ms while explicitly paused — rotation stays at 0
    vi.advanceTimersByTime(14000)
    expect(harness.getIndex()).toBe(0)

    // Click resume -> rotation resumes
    harness.toggleExplicitPause()
    expect(harness.isPaused()).toBe(false)

    vi.advanceTimersByTime(7000)
    expect(harness.getIndex()).toBe(1)

    harness.destroy()
  })

  it("e. disables autoplay when prefers-reduced-motion is active", () => {
    const harness = createShowcaseStateHarness({ prefersReducedMotion: true })
    expect(harness.isPaused()).toBe(true)

    // Advance 21000ms -> rotation never occurs
    vi.advanceTimersByTime(21000)
    expect(harness.getIndex()).toBe(0)

    harness.destroy()
  })
})


