import { useTranslations } from "next-intl"
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react"
import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { Reveal } from "@/components/landing/reveal"
import { CtaCard } from "@/components/cta-card"
import { CtaButton } from "@/components/cta-button"
import { PRICING_CAPABILITY_KEYS, PRICING_PLANS } from "@/content/pricing"
import { Link } from "@/i18n/navigation"
import { isPaidSubscriptionsLive } from "@/lib/pricing-release"
import { getPricingContactEmail } from "@/lib/pricing-contact"
import {
  PageViewTracker,
  PricingPageViewTracker,
  PricingSectionViewTracker,
} from "@/components/analytics/page-view-tracker"
import type { PublishedLocale } from "@/i18n/locales"

export function PricingPage({ locale }: { locale: PublishedLocale }) {
  const t = useTranslations("pricing")
  const showPendingBillingNotice = !isPaidSubscriptionsLive()
  const supportEmail = getPricingContactEmail()

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <PageViewTracker landingPath="/pricing" locale={locale} pageType="pricing" />
      <PricingPageViewTracker />
      <LandingHeader locale={locale} canonicalPath="/pricing" />
      <div className="flex-1">
        <section className="px-4 pb-8 pt-14 sm:px-6 sm:pb-9 sm:pt-16">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-brand-600">
              {t("hero.eyebrow")}
            </p>
            <h1 className="text-balance text-[32px] font-bold leading-tight tracking-tight sm:text-[46px]">
              {t("hero.title")}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-[17px] leading-relaxed text-muted-foreground">
              {t("hero.body")}
            </p>
          </Reveal>
        </section>

        <section className="px-4 pb-10 sm:px-6 sm:pb-12">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-5 md:grid-cols-2">
              {PRICING_PLANS.map((plan, index) => (
                <Reveal key={plan.code} delay={index * 0.08} className="h-full">
                  <article className="flex h-full flex-col rounded-[24px] border border-border bg-card p-7 shadow-[0_12px_36px_rgba(16,24,40,0.05)] sm:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-[22px] font-bold tracking-tight">{plan.name}</h2>
                        <p className="mt-2 text-[15px] text-muted-foreground">
                          {t(`plans.${plan.code}.description`)}
                        </p>
                      </div>
                      <span className="rounded-full bg-brand-600/10 px-3 py-1 text-[12px] font-semibold text-brand-600">
                        {t("plans.monthly")}
                      </span>
                    </div>
                    <p className="mt-8 flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
                      <span className="text-[42px] font-bold leading-none tracking-tight">
                        ${plan.monthlyUsd}
                      </span>
                      <span className="text-[14px] text-muted-foreground">
                        {t("plans.perWorkspace")}
                      </span>
                    </p>
                    <ul className="mt-8 space-y-4 border-t border-border pt-7">
                      {(["capacity", "access"] as const).map((key) => (
                        <li key={key} className="flex items-start gap-3 text-[15px] leading-snug">
                          {plan.code === "solo" && key === "access" ? (
                            <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                          ) : (
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                          )}
                          <div>
                            <span>{t(`plans.${plan.code}.${key}`, { limit: plan.performerLimit })}</span>
                            {plan.code === "studio" && key === "capacity" ? (
                              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                                {t("plans.studio.adminNote")}
                              </p>
                            ) : null}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="mx-auto mt-6 max-w-3xl space-y-2 text-center text-[14px] leading-relaxed text-muted-foreground">
                <p>{t("plans.currency")}</p>
                {showPendingBillingNotice ? <p>{t("plans.availability")}</p> : null}
              </div>
              <div className="mt-6 flex flex-col items-center gap-3 text-center">
                <CtaButton
                  destination="signup"
                  landingPath="/pricing"
                  locale={locale}
                  location="pricing_signup"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  {t("cta.button")}
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </CtaButton>
                <p className="text-[13px] text-muted-foreground">{t("cta.micro")}</p>
              </div>
            </Reveal>
          </div>
        </section>

        <PricingSectionViewTracker sourcePage="/pricing" className="px-4 pb-12 pt-4 sm:px-6 sm:pb-16">
          <Reveal className="mx-auto max-w-5xl">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              {t("capabilities.title")}
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PRICING_CAPABILITY_KEYS.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span className="text-[15px] leading-snug">{t(`capabilities.${key}`)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </PricingSectionViewTracker>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <Reveal className="mx-auto max-w-5xl">
            <aside className="flex flex-col gap-5 rounded-[20px] border border-border bg-card/60 px-7 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-9">
              <div>
                <h2 className="text-[18px] font-semibold tracking-tight">STUDIO+</h2>
                <p className="mt-2 text-[15px] font-medium leading-relaxed">{t("studioPlus.description")}</p>
                <p className="text-[15px] leading-relaxed">{t("studioPlus.body")}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{t("studioPlus.note")}</p>
              </div>
              <a
                href={`mailto:${supportEmail}?subject=STUDIO%2B`}
                className="shrink-0 self-start text-brand-600 hover:underline sm:self-auto"
              >
                <span className="inline-flex items-center gap-1.5 font-medium">
                  {t("studioPlus.contact")}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </span>
                <span className="mt-1 block text-[13px]">{supportEmail}</span>
              </a>
            </aside>
          </Reveal>
        </section>

        <section className="border-y border-border bg-card/50 px-4 py-12 sm:px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight">{t("trial.title")}</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">{t("trial.body")}</p>
          </Reveal>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <Reveal className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-7 sm:p-9">
            <h2 className="text-xl font-semibold tracking-tight">{t("billing.title")}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              {t("billing.body")}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              {t("billing.renewal")}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[14px] font-medium text-brand-600">
              <Link href="/legal/terms" className="hover:underline">{t("billing.terms")}</Link>
              <Link href="/legal/privacy" className="hover:underline">{t("billing.privacy")}</Link>
              <Link href="/legal/billing" className="hover:underline">{t("billing.refund")}</Link>
            </div>
          </Reveal>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{t("faq.title")}</h2>
            <dl className="mt-8 space-y-8">
              {(["q1", "q2", "q3", "q4", "q5", "q6"] as const).map((key) => (
                <div key={key}>
                  <dt className="font-medium">{t(`faq.${key}`)}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {t(`faq.${key.replace("q", "a")}`)}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

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
