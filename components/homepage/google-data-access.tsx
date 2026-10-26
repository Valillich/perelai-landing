import { ArrowUpRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { isGoogleCalendarReleased } from "@/lib/google-calendar-release"
import { localizePath } from "@/i18n/paths"
import type { PublishedLocale } from "@/i18n/locales"

/** Public, server-rendered disclosure: readable without login, JavaScript or expansion. */
export function GoogleDataAccess({ locale }: { locale: PublishedLocale }) {
  const t = useTranslations("home.googleAccess")

  return (
    <aside
      aria-labelledby="google-access-title"
      className="mt-12 rounded-2xl border border-border bg-muted/30 p-6 sm:mt-16 sm:p-8"
    >
      <div className="max-w-3xl space-y-3">
        <h3 id="google-access-title" className="text-xl font-semibold tracking-tight text-foreground">
          {t("title")}
        </h3>
        <p className="leading-relaxed text-muted-foreground">{t("signIn")}</p>
        <p className="leading-relaxed text-muted-foreground">{t("calendar")}</p>
        {!isGoogleCalendarReleased() && (
          <p className="text-sm leading-relaxed text-muted-foreground">{t("availability")}</p>
        )}
        <p className="text-sm leading-relaxed text-muted-foreground">{t("optional")}</p>
        <a
          href={localizePath(locale, "/legal/privacy")}
          className="inline-flex min-h-11 items-center gap-1.5 font-medium text-brand-600 underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
        >
          {t("privacyLink")}
          <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
        </a>
      </div>
    </aside>
  )
}
