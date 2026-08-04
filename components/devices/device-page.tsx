import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { CtaButton } from "@/components/cta-button"
import { DeviceFrame } from "@/components/devices/device-frame"
import { DeviceShowcase } from "@/components/devices/device-showcase"
import { PlatformGuide } from "@/components/devices/platform-guide"
import { Reveal } from "@/components/landing/reveal"
import { MockDesktopShell } from "@/components/mock/MockDesktopShell"
import type { PublishedLocale } from "@/i18n/locales"
import { buildAppScreenDataset } from "@/lib/app-screen-mock"
import { localePrimaryMarket } from "@/lib/market"
import { siteConfig } from "@/lib/site"

/** Fixed reference instant — SSG output must stay byte-identical across builds. */
const REFERENCE_INSTANT = "2026-07-15T12:00:00.000Z"
const TEMPLATE = "independent_colorist"
const LANDING_PATH = "/install"

interface DevicePageProps {
  locale: PublishedLocale
}

/**
 * Long-form `/install` composition (plan §7.1). Consumed by DVC4's route —
 * this module does not register navigation, metadata, or analytics page views.
 */
export function DevicePage({ locale }: DevicePageProps) {
  const t = useTranslations("devices")
  const tShowcase = useTranslations("home.hero.showcase")
  const dataset = buildAppScreenDataset(
    TEMPLATE,
    locale,
    localePrimaryMarket(locale),
    REFERENCE_INSTANT,
  )
  const paidLabel = tShowcase("paid")
  const pendingLabel = tShowcase("pending")

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
  ] as const

  return (
    <div className="bg-background text-foreground">
      {/* 1. Hero — answer the category question; desktop shell is the least-assumed layout */}
      <section className="px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-semibold text-brand-600">
              {t("hero.eyebrow")}
            </p>
            <h1 className="mt-4 text-balance text-[36px] font-bold leading-[1.05] tracking-tight text-foreground sm:text-[48px]">
              {t("hero.title")}
            </h1>
            <p className="mt-5 text-pretty text-[17px] leading-relaxed text-muted-foreground sm:text-[18px]">
              {t.rich("hero.body", {
                url: (chunks) => (
                  <a
                    href={siteConfig.links.app}
                    className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaButton
                destination="signup"
                landingPath={LANDING_PATH}
                locale={locale}
                location="install_hero_signup"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-[15px] font-semibold text-primary-foreground mock-cta-brand-shadow transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
              >
                {t("hero.signup")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </CtaButton>
              <CtaButton
                destination="login"
                landingPath={LANDING_PATH}
                locale={locale}
                location="install_login"
                className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card/70 px-6 py-3.5 text-[15px] font-semibold text-foreground mock-device-frame-shadow backdrop-blur-xl transition-colors hover:bg-card sm:w-auto"
              >
                {t("hero.login")}
              </CtaButton>
            </div>
            <p className="mt-4 text-[13px] text-subtle-text">{t("hero.micro")}</p>
          </div>

          <Reveal className="mt-12" delay={0.08}>
            <figure>
              <p className="sr-only">{t("hero.summary")}</p>
              <div className="overflow-x-auto rounded-[24px] border border-border bg-card/40 p-3 sm:p-4">
                <DeviceFrame size="desktop" className="min-w-[64rem]">
                  <MockDesktopShell
                    dataset={dataset}
                    paidLabel={paidLabel}
                    pendingLabel={pendingLabel}
                  />
                </DeviceFrame>
                <figcaption className="mt-3 text-center text-[12px] font-medium text-subtle-text">
                  {t("hero.caption")}
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 2. Responsive product proof */}
      <section className="border-t border-border bg-card-subtle px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <DeviceShowcase
            locale={locale}
            dataset={dataset}
            paidLabel={paidLabel}
            pendingLabel={pendingLabel}
          />
        </div>
      </section>

      {/* 3. What changes when you install (optionality only — strong install benefits stay BLOCKED) */}
      <section className="border-t border-border px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-[28px] font-bold leading-tight tracking-tight text-foreground sm:text-[36px]">
            {t("installBenefits.title")}
          </h2>
          <p className="mt-4 text-pretty text-[17px] leading-relaxed text-muted-foreground">
            {t("installBenefits.body")}
          </p>
          <div className="mt-8 rounded-[20px] border border-border bg-background p-6">
            <h3 className="text-[18px] font-semibold tracking-tight text-foreground">
              {t("installBenefits.fallbackTitle")}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              {t("installBenefits.fallbackBody")}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Installation guidance */}
      <section className="border-t border-border bg-card-subtle px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <PlatformGuide />
        </div>
      </section>

      {/* 5. Honest limitations — visible, not buried */}
      <section className="border-t border-border px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-[28px] font-bold leading-tight tracking-tight text-foreground sm:text-[36px]">
            {t("limitations.title")}
          </h2>
          <ul className="mt-8 space-y-4 text-[16px] leading-relaxed text-muted-foreground">
            <li>{t("limitations.installVaries")}</li>
            <li>{t("limitations.noStore")}</li>
            <li>{t("limitations.online")}</li>
            <li>{t("limitations.browserDecides")}</li>
          </ul>
        </div>
      </section>

      {/* 6. FAQ — answers stay in the DOM (details content is always present) */}
      <section className="border-t border-border bg-card-subtle px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-[28px] font-bold leading-tight tracking-tight text-foreground sm:text-[36px]">
            {t("faq.title")}
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.q}
                className="group overflow-hidden rounded-lg border border-border bg-card [&_summary::-webkit-details-marker]:hidden"
                open={index === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-foreground transition-colors hover:bg-secondary/50">
                  {faq.q}
                  <span className="relative ml-4 h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-45">
                    <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-muted-foreground" />
                    <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-muted-foreground" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA — create/login only; no install/download */}
      <section className="border-t border-border px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[28px] font-bold leading-tight tracking-tight text-foreground sm:text-[38px]">
            {t("cta.title")}
          </h2>
          <p className="mt-4 text-pretty text-[17px] leading-relaxed text-muted-foreground">
            {t("cta.body")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton
              destination="signup"
              landingPath={LANDING_PATH}
              locale={locale}
              location="install_final_signup"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-4 text-[16px] font-semibold text-primary-foreground mock-cta-brand-shadow transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              {t("cta.signup")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </CtaButton>
            <CtaButton
              destination="login"
              landingPath={LANDING_PATH}
              locale={locale}
              location="install_login"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card/70 px-7 py-4 text-[16px] font-semibold text-foreground transition-colors hover:bg-card sm:w-auto"
            >
              {t("cta.login")}
            </CtaButton>
          </div>
          <p className="mt-4 text-[13px] text-subtle-text">{t("cta.micro")}</p>
        </div>
      </section>
    </div>
  )
}
