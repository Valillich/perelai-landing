import { LandingCta } from "./landing-cta"
import { LandingFeatures } from "./landing-features"
import { LandingFooter } from "./landing-footer"
import { LandingHeader } from "./landing-header"
import { LandingHero } from "./landing-hero"
import { LandingHowItWorks } from "./landing-how-it-works"
import type { PublishedLocale } from "@/i18n/locales"

export function LandingPage({ locale }: { locale: PublishedLocale }) {
  return (
    <main className="min-h-screen bg-[#FBFCFE] text-[#0F1724]">
      <LandingHeader locale={locale} />
      <LandingHero locale={locale} />
      <LandingFeatures locale={locale} />
      <LandingHowItWorks />
      <LandingCta locale={locale} />
      <LandingFooter locale={locale} />
    </main>
  )
}
