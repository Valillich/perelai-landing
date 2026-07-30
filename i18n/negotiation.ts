import { isPublishedLocale, type PublishedLocale } from "@/i18n/locales"

interface LocaleNegotiationInput {
  cookieLocale?: string | null
  acceptLanguage?: string | null
}

interface AcceptedLanguage {
  locale: string
  quality: number
  position: number
}

function acceptedLanguages(header: string | null | undefined): AcceptedLanguage[] {
  if (!header) return []

  return header
    .split(",")
    .map((entry, position) => {
      const [languageRange, ...parameters] = entry.trim().split(";")
      const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith("q="))
      const quality = qualityParameter ? Number(qualityParameter.trim().slice(2)) : 1

      return {
        locale: languageRange.split("-")[0]?.toLowerCase() ?? "",
        quality: Number.isFinite(quality) ? quality : 0,
        position,
      }
    })
    .filter((entry) => entry.locale && entry.quality > 0)
    .sort((left, right) => right.quality - left.quality || left.position - right.position)
}

/** Mirrors the app's precedence while refusing to negotiate unpublished pages. */
export function negotiatePublishedLocale({
  cookieLocale,
  acceptLanguage,
}: LocaleNegotiationInput): PublishedLocale {
  const cookie = cookieLocale?.trim().toLowerCase()
  if (isPublishedLocale(cookie)) return cookie

  for (const candidate of acceptedLanguages(acceptLanguage)) {
    if (isPublishedLocale(candidate.locale)) return candidate.locale
  }

  return "en"
}
