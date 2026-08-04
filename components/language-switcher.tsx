"use client"

import { useEffect, useState } from "react"
import { Globe2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { analytics } from "@/lib/analytics"
import { PUBLISHED_LOCALES, type PublishedLocale } from "@/i18n/locales"
import { localizePath } from "@/i18n/paths"
import { cn } from "@/lib/cn"
import { getNichePageByPath, isNichePagePublishedIn } from "@/config/niche-pages"

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

function unprefixedPath(pathname: string): string {
  const parts = pathname.split("/")
  return PUBLISHED_LOCALES.includes(parts[1] as PublishedLocale)
    ? `/${parts.slice(2).join("/")}`.replace(/\/$/, "") || "/"
    : pathname || "/"
}

/**
 * `dropdown` is the header pill; `inline` is a flat row for places that are
 * already inside an open disclosure, where a nested one would be awkward.
 */
export function LanguageSwitcher({
  locale,
  canonicalPath,
  variant = "dropdown",
}: {
  locale: PublishedLocale
  canonicalPath: string
  variant?: "dropdown" | "inline"
}) {
  const t = useTranslations("common")
  const [current, setCurrent] = useState({ pathname: canonicalPath, search: "" })

  useEffect(() => {
    setCurrent({ pathname: unprefixedPath(window.location.pathname), search: window.location.search })
  }, [])

  const nichePage = getNichePageByPath(current.pathname)

  const hrefFor = (target: PublishedLocale) => {
    if (nichePage && !isNichePagePublishedIn(nichePage, target)) {
      return `${localizePath(locale, current.pathname)}${current.search}`
    }
    return `${localizePath(target, current.pathname)}${current.search}`
  }

  const selectLocale = (target: PublishedLocale) => {
    document.cookie = `NEXT_LOCALE=${target}; Path=/; Max-Age=${ONE_YEAR_SECONDS}; SameSite=Lax`
    if (target !== locale) {
      analytics.track({
        name: "language_switched",
        properties: { from_locale: locale, to_locale: target },
      })
    }
  }

  if (variant === "inline") {
    return (
      <div className="flex items-center gap-1" role="group" aria-label={t("languageLabel")}>
        {PUBLISHED_LOCALES.map((target) => (
          <a
            key={target}
            href={hrefFor(target)}
            hrefLang={target}
            lang={target}
            aria-current={target === locale ? "true" : undefined}
            onClick={() => selectLocale(target)}
            className={cn(
              "rounded-lg px-2 py-1 text-[12px] font-bold tracking-wider transition-colors",
              target === locale
                ? "bg-brand-600/10 text-brand-600"
                : "text-subtle-text hover:bg-card-subtle hover:text-foreground",
            )}
          >
            {target.toUpperCase()}
            <span className="sr-only"> {t(`languages.${target}`)}</span>
          </a>
        ))}
      </div>
    )
  }

  return (
    <details className="group relative">
      <summary
        aria-label={t("languageLabel")}
        className="flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-border bg-card/70 px-3 py-1.5 text-foreground shadow-[0_4px_12px_rgba(16,24,40,0.04)] backdrop-blur-xl transition-colors hover:bg-card [&::-webkit-details-marker]:hidden"
      >
        <Globe2 className="h-3.5 w-3.5 opacity-90" strokeWidth={2.5} />
        <span className="mt-[1px] text-[12px] font-bold tracking-wider">{locale.toUpperCase()}</span>
      </summary>
      <div
        className={cn(
          "absolute right-0 mt-2 rounded-2xl border border-border bg-card p-1.5 shadow-[0_12px_30px_rgba(16,24,40,0.14)]",
          PUBLISHED_LOCALES.length > 5
            ? "grid min-w-72 grid-cols-2 gap-0.5"
            : "min-w-36",
        )}
      >
        {PUBLISHED_LOCALES.map((target) => (
          <a
            key={target}
            href={hrefFor(target)}
            hrefLang={target}
            lang={target}
            onClick={() => selectLocale(target)}
            className="flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-card-subtle hover:text-foreground"
          >
            <span>{t(`languages.${target}`)}</span>
            <span className="text-[11px] font-bold tracking-wider text-subtle-text">{target.toUpperCase()}</span>
          </a>
        ))}
      </div>
    </details>
  )
}
