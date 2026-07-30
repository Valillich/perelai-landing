import { Reveal } from "./reveal"
import { Wallet, Link2, HeartHandshake } from "lucide-react"
import { useTranslations } from "next-intl"
import { MockInboxTriage } from "@/components/mock/MockInboxTriage"
import { buildMockDataset } from "@/lib/mock-data"
import { localePrimaryMarket } from "@/lib/region"
import type { PublishedLocale } from "@/i18n/locales"

export function LandingFeatures({ locale }: { locale: PublishedLocale }) {
  const t = useTranslations("home.features")
  const dataset = buildMockDataset(
    "independent_colorist",
    locale,
    localePrimaryMarket(locale),
    "2026-07-15T12:00:00.000Z",
  )

  return (
    <section id="features" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-semibold uppercase tracking-wide text-brand-600">{t("eyebrow")}</p>
          <h2 className="mt-3 text-balance text-[32px] font-bold leading-tight tracking-tight text-foreground sm:text-[42px]">
            {t("title")}
          </h2>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed text-muted-foreground">
            {t("body")}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal className="md:row-span-2">
            <article className="flex h-full flex-col justify-between rounded-[24px] border border-border bg-card p-7 shadow-[0_6px_20px_rgba(16,24,40,0.06)]">
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-[0_6px_16px_rgba(106,76,255,0.32)]">
                  <Wallet className="h-6 w-6 text-white" />
                </span>
                <h3 className="mt-6 text-[24px] font-semibold tracking-tight text-foreground">{t("financeTitle")}</h3>
                <p className="mt-3 max-w-md text-[16px] leading-relaxed text-muted-foreground">
                  {t("financeBody")}
                </p>
              </div>

              <div className="mt-8">
                <MockInboxTriage dataset={dataset} className="shadow-none" />
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="h-full rounded-[24px] border border-border bg-card p-7 shadow-[0_6px_20px_rgba(16,24,40,0.06)]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-purple-bg">
                <Link2 className="h-6 w-6 text-accent-purple-text" />
              </span>
              <h3 className="mt-6 text-[22px] font-semibold tracking-tight text-foreground">{t("directTitle")}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">
                {t("directBody")}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.16}>
            <article className="h-full rounded-[24px] border border-border bg-card p-7 shadow-[0_6px_20px_rgba(16,24,40,0.06)]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-blue-bg">
                <HeartHandshake className="h-6 w-6 text-accent-blue-text" />
              </span>
              <h3 className="mt-6 text-[22px] font-semibold tracking-tight text-foreground">{t("retentionTitle")}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">
                {t("retentionBody")}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
