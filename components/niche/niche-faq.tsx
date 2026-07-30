"use client"

import { analytics } from "@/lib/analytics"

export function NicheFaq({
  title,
  items,
}: {
  title: string
  items: Array<{ q: string; a: string }>
}) {
  return (
    <>
      <h2 className="text-balance text-[32px] font-bold leading-tight tracking-tight text-foreground sm:text-[42px]">
        {title}
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((item, index) => (
          <details
            key={item.q}
            className="rounded-[16px] border border-border bg-card px-5 py-4"
            onToggle={(event) => {
              if (!event.currentTarget.open) return
              analytics.track({
                name: "faq_opened",
                properties: { question_id: `niche_faq_${index + 1}`, page_type: "niche" },
              })
            }}
          >
            <summary className="cursor-pointer list-none pr-8 text-[17px] font-semibold text-foreground marker:content-none">
              {item.q}
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </>
  )
}
