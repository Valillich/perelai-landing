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

/**
 * Produces a complete, reciprocal hreflang cluster for a translated page.
 *
 * `availableLocales` narrows the cluster for a page that is not published in every
 * locale — a staged niche page, for example. Only real URLs may be advertised: an
 * hreflang pointing at a locale that 404s is a crawl error, not a hint. `x-default`
 * falls back to the first available locale when the page has no English version.
 */
export function getLocalizedAlternates(
  pathname: string,
  _currentLocale: PublishedLocale,
  availableLocales: readonly PublishedLocale[] = PUBLISHED_LOCALES,
): Record<string, string> {
  const locales = PUBLISHED_LOCALES.filter((locale) => availableLocales.includes(locale))
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, absoluteUrl(localizePath(locale, pathname))]),
  )
  const defaultLocale = locales.includes("en") ? "en" : locales[0]

  return {
    ...languages,
    ...(defaultLocale
      ? { "x-default": absoluteUrl(localizePath(defaultLocale, pathname)) }
      : {}),
  }
}
