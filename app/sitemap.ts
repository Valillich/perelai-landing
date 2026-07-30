import type { MetadataRoute } from "next"
import { NICHE_PAGES } from "@/config/niche-pages"
import { PUBLISHED_LOCALES } from "@/i18n/locales"
import { getLocalizedAlternates, localizePath } from "@/i18n/paths"
import { toAbsoluteLandingUrl } from "@/lib/seo"

const legalPaths = ["/terms", "/privacy"] as const
const machineReadablePaths = ["/llms.txt", "/pricing.md"] as const

function localizedEntries(
  pathname: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
): MetadataRoute.Sitemap {
  return PUBLISHED_LOCALES.map((locale) => ({
    url: toAbsoluteLandingUrl(localizePath(locale, pathname)),
    priority,
    changeFrequency,
    alternates: {
      languages: getLocalizedAlternates(pathname, locale),
    },
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...localizedEntries("/", 1, "monthly"),
    ...localizedEntries("/pricing", 0.6, "monthly"),
    ...NICHE_PAGES.filter((page) => page.enabled).flatMap((page) =>
      localizedEntries(page.path, 0.8, "monthly"),
    ),
    ...legalPaths.flatMap((path) => localizedEntries(path, 0.3, "yearly")),
    ...machineReadablePaths.map((path) => ({
      url: toAbsoluteLandingUrl(path),
      priority: 0.4,
      changeFrequency: "weekly" as const,
    })),
  ]
}
