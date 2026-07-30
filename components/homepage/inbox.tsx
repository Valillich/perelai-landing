import { useTranslations } from "next-intl"
import { Reveal } from "@/components/landing/reveal"
import { MockInboxTriage } from "@/components/mock/MockInboxTriage"
import { buildMockDataset } from "@/lib/mock-data"
import { localePrimaryMarket } from "@/lib/market"
import type { PublishedLocale } from "@/i18n/locales"

interface InboxProps {
  locale: PublishedLocale
}

export function Inbox({ locale }: InboxProps) {
  const t = useTranslations("home")
  const dataset = buildMockDataset(
    "independent_colorist", 
    locale, 
    localePrimaryMarket(locale), 
    "2026-07-15T12:00:00.000Z"
  )

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-6">
                {t("inbox.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("inbox.body")}
              </p>
              <p className="text-base text-subtle-text">
                {t("inbox.detail")}
              </p>
            </Reveal>
          </div>

          <div className="order-2 lg:order-2">
            <Reveal delay={0.1}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm p-2 sm:p-4">
                <MockInboxTriage dataset={dataset} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
