"use client"

import { useRef } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/cn"

export interface NicheMenuItem {
  href: string
  label: string
  description: string
  current?: boolean
}

/**
 * Header "find your trade" dropdown. Niche pages are the highest-intent entry
 * points on the site, so every page links to all of them — a visitor can
 * self-identify from anywhere, and each niche page gets a site-wide internal
 * link.
 *
 * `<details>` so it works with no JavaScript; the client boundary exists only
 * to close the panel on Escape and after a choice.
 */
export function NicheMenu({
  triggerLabel,
  items,
}: {
  triggerLabel: string
  items: NicheMenuItem[]
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  const close = () => {
    if (detailsRef.current) detailsRef.current.open = false
  }

  return (
    <details
      ref={detailsRef}
      className="group relative"
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !detailsRef.current?.open) return

        event.preventDefault()
        close()
        detailsRef.current.querySelector("summary")?.focus()
      }}
    >
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center gap-1 text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "group-open:text-foreground [&::-webkit-details-marker]:hidden",
        )}
      >
        {triggerLabel}
        <ChevronDown
          className="h-3.5 w-3.5 transition-transform group-open:rotate-180"
          strokeWidth={2.5}
          aria-hidden="true"
        />
      </summary>

      <div className="absolute left-1/2 z-50 mt-3 w-[min(22rem,calc(100vw-3rem))] -translate-x-1/2 rounded-2xl border border-border bg-card p-1.5 shadow-[0_12px_30px_rgba(16,24,40,0.14)]">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            onClick={close}
            className={cn(
              "block rounded-xl px-3 py-2.5 transition-colors",
              item.current ? "bg-brand-600/10" : "hover:bg-card-subtle",
            )}
          >
            <span
              className={cn(
                "block text-[14px] font-semibold",
                item.current ? "text-brand-600" : "text-foreground",
              )}
            >
              {item.label}
            </span>
            <span className="mt-0.5 block text-[12px] leading-snug text-muted-foreground">
              {item.description}
            </span>
          </a>
        ))}
      </div>
    </details>
  )
}
