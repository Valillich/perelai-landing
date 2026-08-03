import catalog from "@/data/niche-catalog.generated.json"
import uiStrings from "@/data/app-ui-strings.generated.json"
import type { AppLocale } from "@/i18n/locales"
import { getFinanceKpis } from "@/lib/finance-fixture"
import {
  formatCurrency,
  localePrimaryMarket,
  type SupportedMarket,
} from "@/lib/market"

/** Keys the mock kit reads from app-ui-strings.generated.json (verify:niches scans this). */
export const MOCK_UI_KEYS = [
  "inbox.trust_confirming",
  "inbox.trust_next",
  "inbox.trust_visits_count",
  "inbox.trust_will_generate",
  "inbox.trust_amount",
  "inbox.trust_in_reports",
  "inbox.trust_confirm_secure",
  "inbox.title",
  "inbox.ready_to_confirm",
  "chart_labels.revenue",
  "chart_labels.cost",
  "chart_labels.profit",
  "week",
  "month",
  "quarter",
  "year",
  "coworker.busy_block_title",
] as const

export interface MockService {
  id: string
  nameKey: string
  name: string
}

export interface MockVisit {
  serviceName: string
  clientName: string
  timeLabel: string
  amount: number
}

export interface MockDayCell {
  day: number
  inMonth: boolean
  total: number | null
  busy: boolean
}

export interface MockDataset {
  templateId: string
  locale: AppLocale
  market: SupportedMarket
  services: MockService[]
  addons: MockService[]
  expenses: MockService[]
  clients: string[]
  visits: MockVisit[]
  calendarDays: MockDayCell[]
  calendarMonthLabel: string
  inboxCount: number
  trustTotal: number
  kpis: { revenue: number; cost: number; profit: number }
  sparkline: number[]
  labels: Record<(typeof MOCK_UI_KEYS)[number], string>
  exampleCaption: string
}

interface CatalogTemplate {
  id: string
  services: Array<{ id: string; nameKey: string }>
  addons: Array<{ id: string; nameKey: string }>
  expenses: Array<{ id: string; nameKey: string }>
}

const CLIENT_NAMES: Record<AppLocale, string[]> = {
  en: ["Mia", "Leo", "Ana", "Noah", "Eva"],
  uk: ["Оля", "Тарас", "Марія", "Іван", "Софія"],
  pl: ["Ania", "Piotr", "Zofia", "Marek", "Ewa"],
  ru: ["Аня", "Игорь", "Мария", "Павел", "Елена"],
  es: ["Lucía", "Diego", "Carmen", "Mateo", "Sofía"],
  fr: ["Léa", "Hugo", "Chloé", "Louis", "Inès"],
  de: ["Lena", "Jonas", "Greta", "Felix", "Nora"],
  pt: ["Maria", "João", "Ana", "Lucas", "Inês"],
  tr: ["Ayşe", "Mehmet", "Fatma", "Ali", "Zeynep"],
}

/** English pool keys used by the finance fixture, mapped to the locale's display names. */
export const CLIENT_NAME_KEYS = ["Mia", "Leo", "Ana", "Noah", "Eva"] as const

export function clientDisplayName(
  locale: AppLocale,
  englishKey: (typeof CLIENT_NAME_KEYS)[number],
): string {
  const index = CLIENT_NAME_KEYS.indexOf(englishKey)
  return CLIENT_NAMES[locale][index] ?? englishKey
}

const EXAMPLE_CAPTIONS: Record<AppLocale, string> = {
  en: "Example data",
  uk: "Приклад даних",
  pl: "Przykładowe dane",
  ru: "Пример данных",
  es: "Datos de ejemplo",
  fr: "Données d’exemple",
  de: "Beispieldaten",
  pt: "Dados de exemplo",
  tr: "Örnek veriler",
}

const DEFAULT_REFERENCE = "2026-07-15T12:00:00.000Z"

function hashSeed(input: string): number {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function seededAmount(templateId: string, salt: string, base: number, spread: number): number {
  const h = hashSeed(`${templateId}:${salt}`)
  return base + (h % (spread + 1))
}

function resolveName(locale: AppLocale, nameKey: string): string {
  const localeBag = uiStrings.locales[locale] as Record<string, string> | undefined
  const value = localeBag?.[nameKey]
  if (!value) {
    throw new Error(`Missing UI string for locale=${locale} key=${nameKey}`)
  }
  return value
}

function mapItems(
  locale: AppLocale,
  items: Array<{ id: string; nameKey: string }>,
): MockService[] {
  return items.map((item) => ({
    id: item.id,
    nameKey: item.nameKey,
    name: resolveName(locale, item.nameKey),
  }))
}

function interpolate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => String(vars[key] ?? ""))
}

/**
 * Builds a deterministic mock dataset. Never reads the current clock — pass a fixed
 * referenceInstant so SSG output stays byte-identical.
 */
export function buildMockDataset(
  templateId: string,
  locale: AppLocale,
  market: SupportedMarket = localePrimaryMarket(locale),
  referenceInstant: string | Date = DEFAULT_REFERENCE,
): MockDataset {
  const template = (catalog.templates as CatalogTemplate[]).find((t) => t.id === templateId)
  if (!template) {
    throw new Error(`Unknown templateId for mock dataset: ${templateId}`)
  }
  if (template.services.length === 0) {
    throw new Error(`Template ${templateId} has zero services — cannot build mock`)
  }

  const instant = new Date(referenceInstant)
  if (Number.isNaN(instant.getTime())) {
    throw new Error(`Invalid referenceInstant: ${String(referenceInstant)}`)
  }

  const services = mapItems(locale, template.services)
  const addons = mapItems(locale, template.addons)
  const expenses = mapItems(locale, template.expenses)
  const clients = CLIENT_NAMES[locale]

  const visits: MockVisit[] = [0, 1, 2].map((index) => {
    const service = services[index % services.length]
    return {
      serviceName: service.name,
      clientName: clients[index % clients.length],
      timeLabel: `${10 + index}:00`,
      amount: seededAmount(templateId, `visit:${index}`, 45, 120),
    }
  })

  const year = instant.getUTCFullYear()
  const month = instant.getUTCMonth()
  const firstWeekday = new Date(Date.UTC(year, month, 1)).getUTCDay()
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate()
  const calendarDays: MockDayCell[] = []

  for (let i = 0; i < 14; i++) {
    const dayNumber = i - firstWeekday + 1
    const inMonth = dayNumber >= 1 && dayNumber <= daysInMonth
    if (!inMonth) {
      calendarDays.push({ day: 0, inMonth: false, total: null, busy: false })
      continue
    }
    const busy = hashSeed(`${templateId}:day:${dayNumber}`) % 3 !== 0
    const total = busy ? seededAmount(templateId, `day:${dayNumber}`, 40, 160) : null
    calendarDays.push({ day: dayNumber, inMonth: true, total, busy })
  }

  const trustTotal = visits.reduce((sum, visit) => sum + visit.amount, 0)

  // KPI figures come from the finance fixture (FM3 §6 / FM4B) — never seeded.
  const kpis = getFinanceKpis()

  const sparkline = Array.from({ length: 8 }, (_, index) =>
    seededAmount(templateId, `spark:${index}`, 20, 80),
  )

  const labels = Object.fromEntries(
    MOCK_UI_KEYS.map((key) => [key, resolveName(locale, key)]),
  ) as Record<(typeof MOCK_UI_KEYS)[number], string>

  const monthFormatter = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })

  return {
    templateId,
    locale,
    market,
    services,
    addons,
    expenses,
    clients,
    visits,
    calendarDays,
    calendarMonthLabel: monthFormatter.format(instant),
    inboxCount: visits.length,
    trustTotal,
    kpis,
    sparkline,
    labels,
    exampleCaption: EXAMPLE_CAPTIONS[locale],
  }
}

/** Formats trust amount with market currency — never reuse inbox.trust_amount's `$`. */
export function formatTrustAmount(amount: number, market: SupportedMarket): string {
  return `~${formatCurrency(amount, market)}`
}

export function buildTrustSentence(
  dataset: MockDataset,
  market: SupportedMarket = dataset.market,
): string {
  const amount = formatTrustAmount(dataset.trustTotal, market)
  const countLabel = interpolate(dataset.labels["inbox.trust_visits_count"], {
    count: dataset.inboxCount,
  })

  return [
    dataset.labels["inbox.trust_confirming"],
    countLabel,
    dataset.labels["inbox.trust_will_generate"],
    amount,
    dataset.labels["inbox.trust_in_reports"],
  ].join(" ")
}

export function formatReadyToConfirm(dataset: MockDataset): string {
  return interpolate(dataset.labels["inbox.ready_to_confirm"], {
    count: dataset.inboxCount,
  })
}
