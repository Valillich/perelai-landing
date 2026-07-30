import type { MetadataRoute } from "next"
import { NICHE_PAGES } from "@/config/niche-pages"
import { PUBLISHED_LOCALES } from "@/i18n/locales"
import { localizePath } from "@/i18n/paths"
import { env } from "@/lib/env"

const legalPaths = ["/terms", "/privacy"] as const

function url(pathname: string): string {
  return new URL(pathname, env.NEXT_PUBLIC_LANDING_URL).toString()
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localized = (pathname: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]) =>
    PUBLISHED_LOCALES.map((locale) => ({
      url: url(localizePath(locale, pathname)),
      priority,
      changeFrequency,
    }))

  return [
    ...localized("/", 1, "monthly"),
    ...localized("/pricing", 0.6, "monthly"),
    ...NICHE_PAGES.filter((page) => page.enabled).flatMap((page) => localized(page.path, 0.8, "monthly")),
    ...legalPaths.flatMap((path) => localized(path, 0.3, "yearly")),
  ]
}
