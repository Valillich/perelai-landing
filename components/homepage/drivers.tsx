import { useTranslations } from "next-intl"
import { Reveal } from "@/components/landing/reveal"
import { MockDriversBreakdown } from "@/components/mock/MockDriversBreakdown"
import { getFinanceTotals } from "@/lib/finance-fixture"
import { clientDisplayName } from "@/lib/mock-data"
import type { PublishedLocale } from "@/i18n/locales"

export function Drivers({ locale }: { locale: PublishedLocale }) {
  const t = useTranslations("home")
  const totals = getFinanceTotals()

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("drivers.title")}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-lg text-muted-foreground">{t("drivers.body")}</p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <MockDriversBreakdown
              locale={locale}
              caption={t("finance.caption")}
              categories={totals.byCategory.map((category) => ({
                categoryId: category.categoryId,
                label:
                  category.categoryId === "color"
                    ? t("finance.fixture.category.color")
                    : t("finance.fixture.category.styling"),
                settledRevenue: category.settledRevenue,
                expenses: category.expenses,
                calculatedProfit: category.calculatedProfit,
              }))}
              clients={totals.byClient.map((client) => ({
                ...client,
                label: clientDisplayName(locale, client.clientKey),
              }))}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
