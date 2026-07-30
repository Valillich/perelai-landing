"use client"

import { useRef, type ReactNode } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/cn"

export interface MobileNavItem {
  /** A fully resolved path or same-page anchor, built once by the header. */
  href: string
  label: string
  current?: boolean
}

/**
 * The below-`md` disclosure for the header nav. `<details>` keeps it usable
 * with no JavaScript; the client boundary exists only so the panel can close
 * when a same-page anchor is chosen — a cross-page link resets it by
 * navigating, but `#features` on this page would otherwise leave it hanging
 * open over the content it just scrolled to.
 */
export function MobileNav({
  triggerLabel,
  navLabel,
  items,
  children,
}: {
  triggerLabel: string
  navLabel: string
  items: MobileNavItem[]
  children?: ReactNode
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  const close = () => {
    if (detailsRef.current) detailsRef.current.open = false
  }

  return (
    <details
      ref={detailsRef}
      className="group relative shrink-0 md:hidden"
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !detailsRef.current?.open) return

        event.preventDefault()
        close()
        detailsRef.current.querySelector("summary")?.focus()
      }}
    >
      <summary
        aria-label={triggerLabel}
        className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border border-border bg-card/70 text-foreground shadow-[0_4px_12px_rgba(16,24,40,0.04)] backdrop-blur-xl transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 [&::-webkit-details-marker]:hidden"
      >
        <Menu className="h-4 w-4 group-open:hidden" strokeWidth={2.5} aria-hidden="true" />
        <X className="hidden h-4 w-4 group-open:block" strokeWidth={2.5} aria-hidden="true" />
      </summary>

      <div className="absolute right-0 z-50 mt-2 w-[min(15rem,calc(100vw-3rem))] rounded-2xl border border-border bg-card p-1.5 shadow-[0_12px_30px_rgba(16,24,40,0.14)]">
        <nav aria-label={navLabel} className="flex flex-col">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              onClick={close}
              className={cn(
                "rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors",
                item.current
                  ? "bg-brand-600/10 text-brand-600"
                  : "text-muted-foreground hover:bg-card-subtle hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {children ? (
          <div className="mt-1.5 flex items-center justify-between gap-2 border-t border-border px-2 pb-1 pt-3">
            {children}
          </div>
        ) : null}
      </div>
    </details>
  )
}
