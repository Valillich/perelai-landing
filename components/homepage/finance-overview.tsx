import { useTranslations } from "next-intl"
import { Reveal } from "@/components/landing/reveal"
import { MockFinanceKpis } from "@/components/mock/MockFinanceKpis"
import { buildAppScreenDataset } from "@/lib/app-screen-mock"
import { localePrimaryMarket } from "@/lib/market"
import type { PublishedLocale } from "@/i18n/locales"

export function FinanceOverview({ locale }: { locale: PublishedLocale }) {
  const t = useTranslations("home")
  const dataset = buildAppScreenDataset(
    "independent_colorist",
    locale,
    localePrimaryMarket(locale),
  )

  return (
    <section id="features" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <MockFinanceKpis
              dataset={dataset}
              categoryLabels={{
                color: t("finance.fixture.category.color"),
                styling: t("finance.fixture.category.styling"),
              }}
              openOrdersLabel={t("finance.fixture.openOrders")}
              summary={t("finance.summary")}
            />
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("finance.title")}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground">{t("finance.body")}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
