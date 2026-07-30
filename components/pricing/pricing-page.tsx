import { useTranslations } from "next-intl"
import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { Reveal } from "@/components/landing/reveal"
import { CtaCard } from "@/components/cta-card"
import { PRICING_CAPABILITY_KEYS } from "@/content/pricing"
import { RegionCurrencyHint } from "./region-currency-hint"
import {
  PageViewTracker,
  PricingPageViewTracker,
  PricingSectionViewTracker,
} from "@/components/analytics/page-view-tracker"
import { Check } from "lucide-react"
import { ProductStageBadge } from "@/components/product-stage-badge"
import { isProductStageEnabled } from "@/lib/product-stage"
import type { PublishedLocale } from "@/i18n/locales"

export function PricingPage({ locale }: { locale: PublishedLocale }) {
  const t = useTranslations("pricing")
  const showProductStage = isProductStageEnabled()

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <PageViewTracker landingPath="/pricing" locale={locale} pageType="pricing" />
      <PricingPageViewTracker />
      <LandingHeader locale={locale} canonicalPath="/pricing" />
      <div className="flex-1">
        {/* Hero */}
        <section className="px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              {showProductStage ? (
                <div className="mb-5 flex justify-center">
                  <ProductStageBadge label={t("beta.badge")} />
                </div>
              ) : null}
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

            {/* Why there are no prices on a pricing page. The stage claim mirrors
                the in-app beta notice; the billing sentence is the approved
                `future.body` copy. commercial-policy.md keeps beta duration,
                price locks and "free today" unapproved — none appear here. */}
            {showProductStage ? (
              <Reveal delay={0.1}>
                <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-violet-200 bg-violet-50 px-5 py-4 text-left dark:border-violet-400/20 dark:bg-violet-500/10">
                  <p className="text-[15px] font-semibold text-violet-900 dark:text-violet-100">
                    {t("beta.title")}
                  </p>
                  <p className="mt-1 text-[14px] leading-relaxed text-violet-800 dark:text-violet-200">
                    {t("beta.body")}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-violet-800 dark:text-violet-200">
                    {t("future.body")}
                  </p>
                </div>
              </Reveal>
            ) : null}
          </div>
        </section>

        {/* Capabilities */}
        <PricingSectionViewTracker sourcePage="/pricing" className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
                {t("capabilities.title")}
              </h2>
              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {PRICING_CAPABILITY_KEYS.map((key) => (
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
        </PricingSectionViewTracker>

        {/* Booking and workspace facts. No commission or card claim ships here:
            commercial-policy.md keeps CF-01..CF-03 unapproved. */}
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
          <CtaCard
            locale={locale}
            landingPath="/pricing"
            location="pricing_signup"
            title={t("cta.title")}
            body={t("cta.body")}
            buttonLabel={t("cta.button")}
            microcopy={t("cta.micro")}
          />
        </section>
      </div>
      <LandingFooter locale={locale} canonicalPath="/pricing" />
    </main>
  )
}
