import type { Metadata } from "next"
import { PUBLISHED_LOCALES, type PublishedLocale } from "@/i18n/locales"
import { getLocalizedAlternates, localizePath } from "@/i18n/paths"
import { env } from "@/lib/env"

export const SEO_TITLE_MAX = 60
export const SEO_DESCRIPTION_MAX = 155

const OG_LOCALE_BY_LOCALE: Record<PublishedLocale, string> = {
  en: "en_US",
  uk: "uk_UA",
  pl: "pl_PL",
  ru: "ru_RU",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
  pt: "pt_PT",
  tr: "tr_TR",
}

function assertMetadataLength(
  value: string,
  maxLength: number,
  field: "title" | "description",
  locale: PublishedLocale,
  pathname: string,
) {
  if (value.length > maxLength) {
    throw new Error(
      `SEO ${field} exceeds ${maxLength} characters for ${localizePath(locale, pathname)} (${value.length})`,
    )
  }
}

export function toAbsoluteLandingUrl(pathname: string): string {
  return new URL(pathname, env.NEXT_PUBLIC_LANDING_URL).toString()
}

export function getOpenGraphLocale(locale: PublishedLocale): string {
  return OG_LOCALE_BY_LOCALE[locale]
}

export function getOpenGraphAlternateLocales(locale: PublishedLocale): string[] {
  return PUBLISHED_LOCALES.filter((value) => value !== locale).map(
    (value) => OG_LOCALE_BY_LOCALE[value],
  )
}

export function buildLocalizedPageMetadata({
  locale,
  pathname,
  title,
  description,
  availableLocales,
}: {
  locale: PublishedLocale
  pathname: string
  title: string
  description: string
  /** Narrows the hreflang cluster for a page not published in every locale. */
  availableLocales?: readonly PublishedLocale[]
}): Metadata {
  assertMetadataLength(title, SEO_TITLE_MAX, "title", locale, pathname)
  assertMetadataLength(description, SEO_DESCRIPTION_MAX, "description", locale, pathname)

  const canonical = toAbsoluteLandingUrl(localizePath(locale, pathname))

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_LANDING_URL),
    title,
    description,
    alternates: {
      canonical,
      languages: getLocalizedAlternates(pathname, locale, availableLocales),
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: "Perelai",
      locale: getOpenGraphLocale(locale),
      alternateLocale: getOpenGraphAlternateLocales(locale),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}
