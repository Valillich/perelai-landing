import { localizePath } from "@/i18n/paths"
import type { PublishedLocale } from "@/i18n/locales"

/** Page order is also the reading order in both navigation surfaces. */
export const FEATURE_TOPICS = [
  { id: "features", key: "booking" },
  { id: "google-calendar", key: "google" },
  { id: "payments-packages", key: "payments" },
  { id: "cash-reconciliation", key: "cash" },
  { id: "team-access", key: "team" },
  { id: "finance-overview", key: "finance" },
  { id: "finance-breakdown", key: "breakdown" },
  { id: "devices", key: "devices" },
] as const

export function featureHref(locale: PublishedLocale, canonicalPath: string, id: string) {
  return canonicalPath === "/" ? `#${id}` : `${localizePath(locale, "/")}#${id}`
}

/** The last topic crossing the reading line stays active, including gaps. */
export function currentFeatureIndex(tops: number[], readingLine: number) {
  let index = 0
  for (let i = 0; i < tops.length; i++) {
    if (tops[i] <= readingLine) index = i
  }
  return index
}

/** Use successive anchors: Google Calendar is nested inside #features. */
export function featureSegmentProgress(top: number, nextTop: number, readingLine: number) {
  if (nextTop <= top) return readingLine >= nextTop ? 1 : 0
  return Math.min(1, Math.max(0, (readingLine - top) / (nextTop - top)))
}
