import { useTranslations } from "next-intl"
import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { Reveal } from "@/components/landing/reveal"
import { CtaButton } from "@/components/cta-button"
import { RegionCurrencyHint } from "./region-currency-hint"
import { ArrowRight, Check } from "lucide-react"
import type { PublishedLocale } from "@/i18n/locales"

const CAPABILITY_KEYS = [
  "inbox",
  "calendar",
  "booking",
  "clients",
  "payments",
  "finance",
  "orders",
  "packages",
  "onboarding",
  "googleCalendar",
  "contactImport",
  "languages",
  "mobile",
  "themes",
] as const

export function PricingPage({ locale }: { locale: PublishedLocale }) {
  const t = useTranslations("pricing")

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <LandingHeader locale={locale} canonicalPath="/pricing" showNavigation={false} />
      <div className="flex-1">
        {/* Hero */}
        <section className="px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h1 className="text-balance text-[32px] font-bold leading-tight tracking-tight text-foreground sm:text-[46px]">
                {t("hero.title")}
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-muted-foreground">
                {t("hero.body")}
              </p>
              <div className="mt-4 flex justify-center">
                <RegionCurrencyHint locale={locale} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Capabilities */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
                {t("capabilities.title")}
              </h2>
              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {CAPABILITY_KEYS.map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600/10">
                      <Check className="h-3 w-3 text-brand-600" aria-hidden />
                    </span>
                    <span className="text-[15px] leading-snug text-foreground">
                      {t(`capabilities.${key}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* What is never charged */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
                <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {t("noCharge.title")}
                </h2>
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-medium text-foreground">{t("noCharge.commission")}</h3>
                    <p className="mt-1 text-[15px] text-muted-foreground">
                      {t("noCharge.commissionDetail")}
                    </p>
                  </div>
                  <div className="border-t border-border pt-6">
                    <h3 className="font-medium text-foreground">{t("noCharge.card")}</h3>
                    <p className="mt-1 text-[15px] text-muted-foreground">
                      {t("noCharge.cardDetail")}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* When billing arrives */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="border-l-4 border-muted pl-6 py-2">
                <h2 className="font-medium text-foreground">{t("future.title")}</h2>
                <p className="mt-2 text-[15px] text-muted-foreground">{t("future.body")}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {t("faq.title")}
              </h2>
              <dl className="mt-8 space-y-8">
                {(["q1", "q2", "q3"] as const).map((key) => (
                  <div key={key}>
                    <dt className="font-medium text-foreground">{t(`faq.${key}`)}</dt>
                    <dd className="mt-2 text-[15px] text-muted-foreground">
                      {t(`faq.${key.replace("q", "a")}`)}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20 sm:px-6 sm:py-28">
          <Reveal className="mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl border border-brand-600/10 bg-brand-600/5 p-8 text-center sm:p-12">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-600/5 to-transparent pointer-events-none" />
              <div className="relative space-y-8 max-w-2xl mx-auto">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {t("cta.title")}
                  </h2>
                  <p className="text-muted-foreground">{t("cta.body")}</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <CtaButton
                    destination="signup"
                    landingPath="/pricing"
                    locale={locale}
                    location="pricing_signup"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 px-7 py-4 text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(106,76,255,0.36)] transition-transform hover:scale-[1.03] active:scale-95"
                  >
                    {t("cta.button")}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </CtaButton>
                  <p className="text-xs text-muted-foreground">{t("cta.micro")}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
      <LandingFooter locale={locale} canonicalPath="/pricing" />
    </main>
  )
}
