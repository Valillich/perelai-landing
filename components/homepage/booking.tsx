import { useTranslations } from "next-intl"
import { Reveal } from "@/components/landing/reveal"

export function Booking() {
  const t = useTranslations("home")

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-6">
            {t("booking.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            {t("booking.body")}
          </p>
          <p className="text-base text-subtle-text">
            {t("booking.detail")}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
