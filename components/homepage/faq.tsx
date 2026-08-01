"use client"

import { useTranslations } from "next-intl"
import { Reveal } from "@/components/landing/reveal"
import { analytics } from "@/lib/analytics"

export function Faq() {
  const t = useTranslations("home.faq")

  const faqs = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
    { q: t("q5"), a: t("a5") },
    { q: t("q6"), a: t("a6") },
    { q: t("q7"), a: t("a7") },
    { q: t("q8"), a: t("a8") },
  ]

  return (
    <section className="py-20 sm:py-28 px-4 border-t border-border bg-background">
      <Reveal className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12 text-foreground">
          {t("title")}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-border rounded-lg bg-card overflow-hidden [&_summary::-webkit-details-marker]:hidden"
              open={index === 0}
              onToggle={(event) => {
                if (!event.currentTarget.open) return
                analytics.track({
                  name: "faq_opened",
                  properties: { question_id: `home_faq_${index + 1}`, page_type: "home" },
                })
              }}
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-foreground hover:bg-secondary/50 transition-colors">
                {faq.q}
                <span className="relative ml-4 h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-45">
                  <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-muted-foreground"></span>
                  <span className="absolute left-0 top-1/2 w-full h-[2px] -translate-y-1/2 bg-muted-foreground"></span>
                </span>
              </summary>
              <div className="p-6 pt-0 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
