import { useLocale, useTranslations } from "next-intl"
import { Reveal } from "@/components/landing/reveal"
import { MockCashDrawerSummary } from "@/components/mock/MockCashDrawerSummary"
import type { AppLocale } from "@/i18n/locales"

/**
 * Cash reconciliation homepage section (POS2 §3C).
 * G4 implementation READY. Public release verified separately in POS4.
 */
export function CashReconciliation() {
  const t = useTranslations("home")
  const locale = useLocale() as AppLocale

  return (
    <section className="border-t border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("drawer.title")}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-lg text-muted-foreground">{t("drawer.body")}</p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <MockCashDrawerSummary
              locale={locale}
              labels={{
                title: t("drawer.title"),
                body: t("drawer.body"),
                summary: t("drawer.summary"),
                caption: t("drawer.caption"),
              }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
