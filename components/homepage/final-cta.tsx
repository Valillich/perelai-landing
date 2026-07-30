import { useTranslations } from "next-intl"
import { Reveal } from "@/components/landing/reveal"
import { CtaButton } from "@/components/cta-button"
import { ArrowRight } from "lucide-react"
import type { PublishedLocale } from "@/i18n/locales"

export function FinalCta({ locale }: { locale: PublishedLocale }) {
  const t = useTranslations("home.closing")

  return (
    <section className="py-20 sm:py-28 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* CTA Card */}
        <Reveal>
          <div className="relative rounded-2xl bg-brand-600/5 border border-brand-600/10 p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-600/5 to-transparent pointer-events-none" />
            
            <div className="relative space-y-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                  {t("title")}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t("body")}
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <CtaButton
                  destination="signup"
                  landingPath="/"
                  locale={locale}
                  location="closing_signup"
                  className="px-8 py-6 text-lg w-full sm:w-auto bg-brand-600 hover:bg-brand-600/90 text-white"
                >
                  {t("cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </CtaButton>
                <p className="text-xs text-muted-foreground">
                  {t("micro")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
