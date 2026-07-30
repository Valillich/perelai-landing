import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { Hero } from "./hero"
import { Problem } from "./problem"
import { Inbox } from "./inbox"
import { Booking } from "./booking"
import { Money } from "./money"
import { Setup } from "./setup"
import { Not } from "./not"
import { NicheRouter } from "./niche-router"
import { Faq } from "./faq"
import { FinalCta } from "./final-cta"
import type { PublishedLocale } from "@/i18n/locales"

export function Homepage({ locale }: { locale: PublishedLocale }) {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <LandingHeader locale={locale} />
      <div className="flex-1">
        <Hero locale={locale} />
        <Problem />
        <Inbox locale={locale} />
        <Booking />
        <Money locale={locale} />
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
