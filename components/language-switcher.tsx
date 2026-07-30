"use client"

import { useEffect, useState } from "react"
import { Globe2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { PUBLISHED_LOCALES, type PublishedLocale } from "@/i18n/locales"
import { localizePath } from "@/i18n/paths"

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

function unprefixedPath(pathname: string): string {
  const parts = pathname.split("/")
  return PUBLISHED_LOCALES.includes(parts[1] as PublishedLocale)
    ? `/${parts.slice(2).join("/")}`.replace(/\/$/, "") || "/"
    : pathname || "/"
}

export function LanguageSwitcher({
  locale,
  canonicalPath,
}: {
  locale: PublishedLocale
  canonicalPath: string
}) {
  const t = useTranslations("common")
  const [current, setCurrent] = useState({ pathname: canonicalPath, search: "" })

  useEffect(() => {
    setCurrent({ pathname: unprefixedPath(window.location.pathname), search: window.location.search })
  }, [])

  return (
    <details className="group relative">
      <summary
        aria-label={t("languageLabel")}
        className="flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-border bg-card/70 px-3 py-1.5 text-foreground shadow-[0_4px_12px_rgba(16,24,40,0.04)] backdrop-blur-xl transition-colors hover:bg-card [&::-webkit-details-marker]:hidden"
      >
        <Globe2 className="h-3.5 w-3.5 opacity-90" strokeWidth={2.5} />
        <span className="mt-[1px] text-[12px] font-bold tracking-wider">{locale.toUpperCase()}</span>
      </summary>
      <div className="absolute right-0 mt-2 min-w-36 rounded-2xl border border-border bg-card p-1.5 shadow-[0_12px_30px_rgba(16,24,40,0.14)]">
        {PUBLISHED_LOCALES.map((target) => (
          <a
            key={target}
            href={`${localizePath(target, current.pathname)}${current.search}`}
            hrefLang={target}
            lang={target}
            onClick={() => {
              document.cookie = `NEXT_LOCALE=${target}; Path=/; Max-Age=${ONE_YEAR_SECONDS}; SameSite=Lax`
            }}
            className="flex items-center justify-between rounded-xl px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-card-subtle hover:text-foreground"
          >
            <span>{t(`languages.${target}`)}</span>
            <span className="text-[11px] font-bold tracking-wider text-subtle-text">{target.toUpperCase()}</span>
          </a>
        ))}
      </div>
    </details>
  )
}
