import { useTranslations } from "next-intl"
import { Reveal } from "@/components/landing/reveal"

/** Text-only honesty section — states what the KPI tiles do and do not mean. */
export function FinancialStates() {
  const t = useTranslations("home")

  return (
    <section className="border-t border-border bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("states.title")}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t("states.body")}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
