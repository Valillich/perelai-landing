import { useTranslations } from "next-intl"
import { Reveal } from "@/components/landing/reveal"
import { MockInboxTriage } from "@/components/mock/MockInboxTriage"
import { APP_SCREEN_REFERENCE } from "@/lib/app-screen-mock"
import { buildMockDataset } from "@/lib/mock-data"
import { localePrimaryMarket } from "@/lib/market"
import type { PublishedLocale } from "@/i18n/locales"

/** Merged Inbox + Booking argument — one section, one visual (FM3 §2). */
export function Operations({ locale }: { locale: PublishedLocale }) {
  const t = useTranslations("home")
  const dataset = buildMockDataset(
    "independent_colorist",
    locale,
    localePrimaryMarket(locale),
    APP_SCREEN_REFERENCE,
  )

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {t("operations.title")}
              </h2>
              <p className="text-lg text-muted-foreground">{t("operations.body")}</p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-sm sm:p-4">
              <MockInboxTriage dataset={dataset} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
