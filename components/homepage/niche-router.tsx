import { useLocale, useTranslations } from "next-intl"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { Link } from "@/i18n/navigation"
import { getEnabledNichePagesForLocale } from "@/config/niche-pages"
import type { PublishedLocale } from "@/i18n/locales"
import { labelledNichePages } from "@/lib/niche-labels"

export function NicheRouter() {
  const t = useTranslations("home")
  const locale = useLocale() as PublishedLocale
  // Only pages published in this locale: a card pointing at a locale that has no
  // translation would link straight to a 404.
  const nichePages = labelledNichePages(getEnabledNichePagesForLocale(locale))

  if (nichePages.length === 0) return null

  return (
    <section id="niches" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <h2 className="text-[32px] font-bold tracking-tight text-foreground sm:text-[42px]">
            {t("nicheRouter.title")}
          </h2>
          <p className="text-[17px] leading-relaxed text-muted-foreground">
            {t("nicheRouter.body")}
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4">
          {nichePages.map(({ page, keys }) => (
            <Reveal key={page.path}>
              <Link
                href={page.path as "/for-independent-colorists"}
                className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand-600/40"
              >
                <div>
                  <h3 className="text-[18px] font-semibold text-foreground transition-colors group-hover:text-brand-600">
                    {t(keys.label)}
                  </h3>
                  <p className="mt-1 text-[14px] text-muted-foreground">
                    {t(keys.description)}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand-600" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
