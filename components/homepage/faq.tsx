"use client"

import { useTranslations } from "next-intl"
import { Reveal } from "@/components/landing/reveal"
import { HOME_FAQ_ITEMS } from "@/config/home-faq"
import { analytics } from "@/lib/analytics"

export function Faq() {
  const t = useTranslations("home")

  return (
    <section className="py-20 sm:py-28 px-4 border-t border-border bg-background">
      <Reveal className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12 text-foreground">
          {t("faq.title")}
        </h2>

        <div className="space-y-4">
          {HOME_FAQ_ITEMS.map((item, index) => (
            <details
              key={item.id}
              className="group border border-border rounded-lg bg-card overflow-hidden [&_summary::-webkit-details-marker]:hidden"
              open={index === 0}
              onToggle={(event) => {
                if (!event.currentTarget.open) return
                analytics.track({
                  name: "faq_opened",
                  properties: { question_id: `home_faq_${item.id}`, page_type: "home" },
                })
              }}
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-foreground hover:bg-secondary/50 transition-colors">
                {t(item.qKey)}
                <span className="relative ml-4 h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-45">
                  <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-muted-foreground"></span>
                  <span className="absolute left-0 top-1/2 w-full h-[2px] -translate-y-1/2 bg-muted-foreground"></span>
                </span>
              </summary>
              <div className="p-6 pt-0 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>{t(item.aKey)}</p>
              </div>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
