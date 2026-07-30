import { env } from "@/lib/env"
import { PUBLISHED_LOCALES, type PublishedLocale } from "@/i18n/locales"

function canonicalPath(pathname: string): string {
  if (!pathname.startsWith("/")) return `/${pathname}`
  return pathname === "/" ? pathname : pathname.replace(/\/$/, "")
}

export function localizePath(locale: PublishedLocale, pathname: string): string {
  const path = canonicalPath(pathname)
  return locale === "en" ? path : `/${locale}${path === "/" ? "" : path}`
}

function absoluteUrl(pathname: string): string {
  return new URL(pathname, env.NEXT_PUBLIC_LANDING_URL).toString()
}

/** Produces a complete, reciprocal hreflang cluster for a translated page. */
export function getLocalizedAlternates(
  pathname: string,
  _currentLocale: PublishedLocale,
): Record<string, string> {
  const languages = Object.fromEntries(
    PUBLISHED_LOCALES.map((locale) => [locale, absoluteUrl(localizePath(locale, pathname))]),
  )

  return {
    ...languages,
    "x-default": absoluteUrl(localizePath("en", pathname)),
  }
}
