import uiStrings from "@/data/app-ui-strings.generated.json"
import { useTranslations } from "next-intl"
import { Reveal } from "@/components/landing/reveal"
import { MockConnectedRecordsFeed } from "@/components/mock/MockConnectedRecordsFeed"
import { FINANCE_CONNECTED_RECORDS } from "@/lib/finance-fixture"
import { APP_SCREEN_REFERENCE } from "@/lib/app-screen-mock"
import { clientDisplayName } from "@/lib/mock-data"
import type { PublishedLocale } from "@/i18n/locales"

function resolveProductName(locale: PublishedLocale, nameKey: string): string {
  const table = uiStrings.locales[locale] as Record<string, string> | undefined
  const value = table?.[nameKey]
  if (!value) {
    throw new Error(`Missing connected-record name locale=${locale} key=${nameKey}`)
  }
  return value
}

export function ConnectedRecords({ locale }: { locale: PublishedLocale }) {
  const t = useTranslations("home")
  const instant = new Date(APP_SCREEN_REFERENCE)
  const year = instant.getUTCFullYear()
  const month = instant.getUTCMonth()
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  })

  const kindBadge = {
    visit_payment: t("finance.fixture.records.visitPayment"),
    package_redemption: t("finance.fixture.records.packageRedemption"),
    order_instalment: t("finance.fixture.records.orderInstalment"),
    no_show_fee: t("finance.fixture.records.noShowFee"),
  } as const

  const items = FINANCE_CONNECTED_RECORDS.map((row) => {
    const title =
      row.kind === "order_instalment"
        ? t("finance.fixture.orderInstalment")
        : resolveProductName(locale, row.nameKey)
    const client = clientDisplayName(locale, row.clientKey)
    const dateLabel = dateFormatter.format(new Date(Date.UTC(year, month, row.day)))

    return {
      id: row.sourceId,
      title: `${client} · ${title}`,
      subtitle: dateLabel,
      amount: row.amount,
      direction: "income" as const,
      badge: kindBadge[row.kind],
    }
  })

  return (
    <section className="border-t border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("records.title")}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-lg text-muted-foreground">{t("records.body")}</p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <figure className="mock-surface-elevated-shadow overflow-hidden rounded-[24px] border border-border bg-card p-4 sm:p-5">
              <MockConnectedRecordsFeed items={items} locale={locale} />
              <figcaption className="mt-4 text-center text-[12px] font-medium text-subtle-text">
                {t("finance.caption")}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
