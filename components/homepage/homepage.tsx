import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { Hero } from "./hero"
import { Operations } from "./operations"
import { ConnectedRecords } from "./connected-records"
import { CashReconciliation } from "./cash-reconciliation"
import { Collaboration } from "./collaboration"
import { FinanceOverview } from "./finance-overview"
import { FinancialStates } from "./financial-states"
import { Drivers } from "./drivers"
import { Devices } from "./devices"
import { Setup } from "./setup"
import { Not } from "./not"
import { NicheRouter } from "./niche-router"
import { Faq } from "./faq"
import { FinalCta } from "./final-cta"
import { FeatureNavigator } from "./feature-navigator"
import { PageViewTracker } from "@/components/analytics/page-view-tracker"
import type { PublishedLocale } from "@/i18n/locales"

export function Homepage({ locale }: { locale: PublishedLocale }) {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <PageViewTracker landingPath="/" locale={locale} pageType="home" />
      <LandingHeader locale={locale} sectionAnchors />
      <div className="flex-1">
        <Hero locale={locale} />
        <div data-feature-zone className="relative feature-side:grid feature-side:grid-cols-[minmax(0,1fr)_minmax(0,72rem)_minmax(0,1fr)]">
          <FeatureNavigator />
          <div data-feature-content className="min-w-0 feature-side:col-start-2 feature-side:row-start-1">
            <Operations locale={locale} />
            <ConnectedRecords locale={locale} />
            <CashReconciliation />
            <Collaboration locale={locale} />
            <FinanceOverview locale={locale} />
            <FinancialStates />
            <Drivers locale={locale} />
            <Devices locale={locale} />
          </div>
        </div>
        <Setup />
        <Not />
        <NicheRouter />
        <Faq />
        <FinalCta locale={locale} />
      </div>
      <LandingFooter locale={locale} />
    </main>
  )
}
