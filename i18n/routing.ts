import { defineRouting } from "next-intl/routing"
import { PUBLISHED_LOCALES } from "@/i18n/locales"

export const routing = defineRouting({
  locales: PUBLISHED_LOCALES,
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: false,
  // Page metadata owns the locale cluster; some niches have only EN/RU/UK.
  alternateLinks: false,
  localeCookie: {
    name: "NEXT_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  },
})
