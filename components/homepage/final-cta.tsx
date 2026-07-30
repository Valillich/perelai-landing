import { useTranslations } from "next-intl"
import { CtaCard } from "@/components/cta-card"
import type { PublishedLocale } from "@/i18n/locales"

export function FinalCta({ locale }: { locale: PublishedLocale }) {
  const t = useTranslations("home.closing")

  return (
    <section className="bg-background px-4 py-20 sm:px-6 sm:py-28">
      <CtaCard
        locale={locale}
        landingPath="/"
        location="closing_signup"
        title={t("title")}
        body={t("body")}
        buttonLabel={t("cta")}
        microcopy={t("micro")}
      />
    </section>
  )
}
