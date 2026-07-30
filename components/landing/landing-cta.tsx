import { Reveal } from "./reveal"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { CtaButton } from "@/components/cta-button"
import type { PublishedLocale } from "@/i18n/locales"

export function LandingCta({ locale }: { locale: PublishedLocale }) {
  const t = useTranslations("home.closing")

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[32px] border border-border bg-card px-6 py-16 text-center shadow-[0_20px_60px_-20px_rgba(106,76,255,0.3)] sm:px-12 sm:py-20">
          {/* Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[360px] w-[600px] -translate-x-1/2 rounded-full opacity-60 blur-[100px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(106,76,255,0.25) 0%, rgba(236,72,153,0.12) 50%, transparent 75%)",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-[32px] font-bold leading-tight tracking-tight text-foreground sm:text-[46px]">
              {t("title")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-[17px] leading-relaxed text-muted-foreground">
              {t("body")}
            </p>
            <div className="mt-9 flex justify-center">
              <CtaButton
                destination="signup"
                landingPath="/"
                locale={locale}
                location="closing_signup"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 px-7 py-4 text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(106,76,255,0.36)] transition-transform hover:scale-[1.03] active:scale-95"
              >
                {t("cta")}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </CtaButton>
            </div>
            <p className="mt-5 text-[13px] text-subtle-text">
              {t("note")}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
