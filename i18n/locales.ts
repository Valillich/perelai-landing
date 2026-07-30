import catalog from "@/data/niche-catalog.generated.json"

export const APP_LOCALES = ["en", "uk", "pl", "ru", "es", "fr", "de"] as const
export const PUBLISHED_LOCALES = ["en", "uk", "pl"] as const

export type AppLocale = (typeof APP_LOCALES)[number]
export type PublishedLocale = (typeof PUBLISHED_LOCALES)[number]

const generatedLocales = catalog.supportedLocales ?? []

if (
  generatedLocales.length !== APP_LOCALES.length ||
  generatedLocales.some((locale, index) => locale !== APP_LOCALES[index])
) {
  throw new Error("The generated app locale contract does not match APP_LOCALES")
}

export function isAppLocale(locale: string | undefined): locale is AppLocale {
  return APP_LOCALES.some((supportedLocale) => supportedLocale === locale)
}

export function isPublishedLocale(locale: string | undefined): locale is PublishedLocale {
  return PUBLISHED_LOCALES.some((publishedLocale) => publishedLocale === locale)
}
