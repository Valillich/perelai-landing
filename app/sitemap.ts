import type { MetadataRoute } from "next"
import { NICHE_PAGES, getNichePageLocales } from "@/config/niche-pages"
import { PUBLISHED_LOCALES, type PublishedLocale } from "@/i18n/locales"
import { getLocalizedAlternates, localizePath } from "@/i18n/paths"
import { toAbsoluteLandingUrl } from "@/lib/seo"

const legalPaths = ["/terms", "/privacy"] as const
const machineReadablePaths = ["/llms.txt", "/pricing.md"] as const

function localizedEntries(
  pathname: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  availableLocales: readonly PublishedLocale[] = PUBLISHED_LOCALES,
): MetadataRoute.Sitemap {
  return PUBLISHED_LOCALES.filter((locale) => availableLocales.includes(locale)).map((locale) => ({
    url: toAbsoluteLandingUrl(localizePath(locale, pathname)),
    priority,
    changeFrequency,
    alternates: {
      languages: getLocalizedAlternates(pathname, locale, availableLocales),
    },
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...localizedEntries("/", 1, "monthly"),
    ...localizedEntries("/install", 0.7, "monthly"),
    ...localizedEntries("/pricing", 0.6, "monthly"),
    ...NICHE_PAGES.filter((page) => page.enabled).flatMap((page) =>
      localizedEntries(page.path, 0.8, "monthly", getNichePageLocales(page)),
    ),
    ...legalPaths.flatMap((path) => localizedEntries(path, 0.3, "yearly")),
    ...machineReadablePaths.map((path) => ({
      url: toAbsoluteLandingUrl(path),
      priority: 0.4,
      changeFrequency: "weekly" as const,
    })),
  ]
}
