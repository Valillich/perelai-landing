import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { CtaButton } from "@/components/cta-button"
import { HeroShowcase } from "@/components/homepage/hero-showcase"
import { Reveal } from "@/components/landing/reveal"
import { buildAppScreenDataset } from "@/lib/app-screen-mock"
import { localePrimaryMarket } from "@/lib/market"
import type { PublishedLocale } from "@/i18n/locales"

export function Hero({ locale }: { locale: PublishedLocale }) {
  const t = useTranslations("home")
  const dataset = buildAppScreenDataset(
    "independent_colorist",
    locale,
    localePrimaryMarket(locale),
  )

  return (
    <section className="overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Text */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.08em] text-muted-foreground sm:text-[14px]">
                {t("hero.eyebrow")}
              </p>
            </Reveal>

            <Reveal delay={0.04}>
              <h1 className="text-balance text-[40px] font-bold leading-[1.05] tracking-tight text-foreground sm:text-[56px]">
                {t("hero.title")}{" "}
                <span className="bg-gradient-to-br from-brand-500 to-brand-700 bg-clip-text text-transparent">
                  {t("hero.accent")}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-muted-foreground sm:text-[19px]">
                {t("hero.body")}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <CtaButton
                  destination="signup"
                  landingPath="/"
                  locale={locale}
                  location="hero_signup"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(106,76,255,0.32)] transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
                >
                  {t("hero.signup")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </CtaButton>
                <a
                  href="#features"
                  className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card/70 px-6 py-3.5 text-[15px] font-semibold text-foreground shadow-[0_4px_12px_rgba(16,24,40,0.04)] backdrop-blur-xl transition-colors hover:bg-card sm:w-auto"
                >
                  {t("hero.how")}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-4 text-[13px] text-subtle-text">
                {t("hero.micro")}
              </p>
              <p className="mt-1.5 text-[13px] text-subtle-text">
                {t("hero.deviceMicro")}
              </p>
            </Reveal>
          </div>

          {/* Product preview */}
          <div className="relative lg:col-span-5">
            <Reveal delay={0.2}>
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-4 -z-10 rounded-[40px] opacity-60 blur-[80px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(var(--brand-600-rgb),0.3), rgba(var(--brand-500-rgb),0.15))",
                }}
              />
              <HeroShowcase
                dataset={dataset}
                labels={{
                  ariaLabel: t("hero.showcase.ariaLabel"),
                  calendarTab: t("hero.showcase.calendarTab"),
                  financeTab: t("hero.showcase.financeTab"),
                  paid: t("hero.showcase.paid"),
                  pending: t("hero.showcase.pending"),
                  caption: t("hero.imageCaption"),
                }}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
