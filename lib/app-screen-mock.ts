import type { AppLocale } from "@/i18n/locales"
import { buildMockDataset, type MockDataset } from "@/lib/mock-data"
import { localePrimaryMarket, type SupportedMarket } from "@/lib/market"

/**
 * Mock data for the app-screen replicas (hero showcase, niche calendar).
 * Kept out of lib/mock-data.ts because verify-niches scans that file for
 * MOCK_UI_KEYS — nothing here needs generated app strings.
 *
 * Everything is derived from a fixed reference instant, never Date.now(), so
 * the statically generated HTML stays byte-identical between builds.
 */

/** Same instant the niche mocks pin to. */
export const APP_SCREEN_REFERENCE = "2026-07-15T12:00:00.000Z"

export interface AppScreenCalendarCell {
  /** ISO date key — also the React key. */
  key: string
  day: number
  inCurrentMonth: boolean
  isToday: boolean
  isSelected: boolean
  /** Day total in minor-unit-free major units, or null when the day is empty. */
  total: number | null
  /** Unconfirmed records awaiting a decision — renders as the primary count pill. */
  attentionCount: number | null
  /** Amber dot on the count pill. */
  hasUnread: boolean
}

export interface AppScreenTrendPoint {
  label: string
  profit: number
}

export interface AppScreenFeedItem {
  title: string
  dateLabel: string
  amount: number
  direction: "income" | "expense"
}

export interface AppScreenDataset {
  locale: AppLocale
  market: SupportedMarket
  base: MockDataset
  /** Mon-first grid covering the visible month, 7 columns. */
  calendarCells: AppScreenCalendarCell[]
  monthLabel: string
  yearLabel: string
  weekdayLabels: string[]
  selectedDayLabel: string
  selectedDayCount: number
  trend: AppScreenTrendPoint[]
  kpis: { revenue: number; cost: number; profit: number }
  /** Finance feed rows shown under the dashboard. */
  feed: AppScreenFeedItem[]
}

function hashSeed(input: string): number {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function seeded(salt: string, base: number, spread: number): number {
  return base + (hashSeed(salt) % (spread + 1))
}

/** Monday-first weekday index, matching the app's `startOfWeek({weekStartsOn: 1})`. */
function mondayFirstIndex(date: Date): number {
  return (date.getUTCDay() + 6) % 7
}

export function buildAppScreenDataset(
  templateId: string,
  locale: AppLocale,
  market: SupportedMarket = localePrimaryMarket(locale),
  referenceInstant: string | Date = APP_SCREEN_REFERENCE,
): AppScreenDataset {
  const instant = new Date(referenceInstant)
  if (Number.isNaN(instant.getTime())) {
    throw new Error(`Invalid referenceInstant: ${String(referenceInstant)}`)
  }

  const base = buildMockDataset(templateId, locale, market, instant)

  const year = instant.getUTCFullYear()
  const month = instant.getUTCMonth()
  const todayDay = instant.getUTCDate()
  const firstOfMonth = new Date(Date.UTC(year, month, 1))
  const leading = mondayFirstIndex(firstOfMonth)
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate()
  const rows = Math.ceil((leading + daysInMonth) / 7)

  const calendarCells: AppScreenCalendarCell[] = []
  for (let index = 0; index < rows * 7; index++) {
    const cellDate = new Date(Date.UTC(year, month, index - leading + 1))
    const day = cellDate.getUTCDate()
    const inCurrentMonth = cellDate.getUTCMonth() === month
    const key = cellDate.toISOString().slice(0, 10)

    if (!inCurrentMonth) {
      calendarCells.push({
        key,
        day,
        inCurrentMonth: false,
        isToday: false,
        isSelected: false,
        total: null,
        attentionCount: null,
        hasUnread: false,
      })
      continue
    }

    // Salted with the template so two niche pages never show the same month.
    const roll = hashSeed(`${templateId}:day:${key}`) % 10
    const isWeekend = mondayFirstIndex(cellDate) >= 5
    // Days ahead of "today" are booked but not yet earned — they carry the
    // unconfirmed-count pill instead of a total, exactly as the app renders them.
    const isFuture = day > todayDay
    const isBusy = isWeekend ? roll > 6 : roll > 2

    calendarCells.push({
      key,
      day,
      inCurrentMonth: true,
      isToday: day === todayDay,
      isSelected: day === todayDay,
      total: isBusy && !isFuture ? seeded(`${templateId}:total:${key}`, 60, 340) : null,
      attentionCount: isBusy && isFuture ? 1 + (roll % 3) : null,
      hasUnread: isFuture && roll === 9,
    })
  }

  const monthLabel = new Intl.DateTimeFormat(locale, {
    month: "long",
    timeZone: "UTC",
  }).format(instant)

  // Monday..Sunday short names, sourced from a known Monday.
  const weekdayFormatter = new Intl.DateTimeFormat(locale, {
    weekday: "short",
    timeZone: "UTC",
  })
  const weekdayLabels = Array.from({ length: 7 }, (_, index) =>
    weekdayFormatter.format(new Date(Date.UTC(2026, 5, 29 + index))),
  )

  const selectedDayLabel = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(instant)

  const trendFormatter = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    timeZone: "UTC",
  })
  const trend: AppScreenTrendPoint[] = [1, 6, 11, 16, 21, 26, 31]
    .filter((day) => day <= daysInMonth)
    .map((day) => ({
      label: trendFormatter.format(new Date(Date.UTC(year, month, day))),
      profit: seeded(`${templateId}:trend:${month}:${day}`, 420, 900),
    }))

  const revenue = calendarCells.reduce((sum, cell) => sum + (cell.total ?? 0), 0)
  const cost = Math.round(revenue * 0.27)

  const feedDateFormatter = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  })
  const feedDateLabel = (day: number, time: string) =>
    `${feedDateFormatter.format(new Date(Date.UTC(year, month, day)))} · ${time}`

  // Modulo indexing: a handful of templates ship a single service.
  const serviceAt = (index: number) => base.services[index % base.services.length].name

  const feed: AppScreenFeedItem[] = [
    {
      title: serviceAt(0),
      dateLabel: feedDateLabel(todayDay, "14:30"),
      amount: seeded(`${templateId}:feed:0`, 90, 120),
      direction: "income",
    },
    {
      title: base.expenses[0]?.name ?? serviceAt(1),
      dateLabel: feedDateLabel(todayDay, "11:05"),
      amount: seeded(`${templateId}:feed:1`, 30, 60),
      direction: "expense",
    },
    {
      title: serviceAt(1),
      dateLabel: feedDateLabel(todayDay - 1, "17:45"),
      amount: seeded(`${templateId}:feed:2`, 70, 140),
      direction: "income",
    },
  ]

  return {
    locale,
    market,
    base,
    calendarCells,
    monthLabel,
    yearLabel: String(year),
    weekdayLabels,
    selectedDayLabel,
    selectedDayCount: base.visits.length,
    trend,
    kpis: { revenue, cost, profit: revenue - cost },
    feed,
  }
}

/**
 * Mirrors the app's `formatCalendarDayTotal` — day cells are ~44px wide, so
 * anything over 1000 collapses to a compact suffix rather than wrapping.
 */
export function formatDayTotal(value: number): string {
  const abs = Math.abs(value)
  const prefix = value < 0 ? "−" : ""

  if (abs < 1000) {
    return Number.isInteger(value) ? `${prefix}${abs}` : `${prefix}${abs.toFixed(2)}`
  }

  const compact = (scaled: number, suffix: string) =>
    `${prefix}${scaled.toFixed(2).replace(/\.?0+$/, "")}${suffix}`

  if (abs < 1_000_000) return compact(abs / 1_000, "k")
  if (abs < 1_000_000_000) return compact(abs / 1_000_000, "m")
  return compact(abs / 1_000_000_000, "b")
}
