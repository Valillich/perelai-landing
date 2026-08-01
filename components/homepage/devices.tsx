import { useTranslations } from "next-intl"
import { DeviceDensityLadder } from "@/components/devices/device-density-ladder"
import { InstallHelpLink } from "@/components/devices/install-help-link"
import { Reveal } from "@/components/landing/reveal"
import { buildAppScreenDataset } from "@/lib/app-screen-mock"
import { localePrimaryMarket } from "@/lib/market"
import { DeviceSectionTracker } from "@/components/analytics/device-section-tracker"
import type { PublishedLocale } from "@/i18n/locales"

export function Devices({ locale }: { locale: PublishedLocale }) {
  const t = useTranslations("home")
  const dataset = buildAppScreenDataset(
    "independent_colorist",
    locale,
    localePrimaryMarket(locale),
  )

  return (
    <section id="devices" className="relative border-t border-border bg-background py-20 sm:py-28">
      <DeviceSectionTracker surface="home" locale={locale} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-balance text-[32px] font-bold leading-tight tracking-tight text-foreground sm:text-[42px]">
              {t("devices.title")}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-4 text-pretty text-[17px] leading-relaxed text-muted-foreground sm:text-[19px]">
              {t("devices.body")}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="mt-12">
          <DeviceDensityLadder
            dataset={dataset}
            labels={{
              summary: t("devices.summary"),
              paid: t("hero.showcase.paid"),
              pending: t("hero.showcase.pending"),
              caption: t("devices.caption"),
            }}
          />
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 text-center">
            <InstallHelpLink
              href="/install"
              sourceSurface="home_section"
              className="inline-flex items-center text-[15px] font-medium text-brand-600 underline decoration-brand-600/30 underline-offset-4 transition-colors hover:decoration-brand-600"
            >
              {t("devices.link")} →
            </InstallHelpLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
