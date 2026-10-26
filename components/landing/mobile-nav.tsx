"use client"

import { useRef, type ReactNode } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { analytics } from "@/lib/analytics"
import { cn } from "@/lib/cn"

export interface MobileNavItem {
  /** A fully resolved path or same-page anchor, built once by the header. */
  href: string
  label: string
  current?: boolean
}

export interface MobileNavGroup {
  /** Section heading — not a link, since the desktop equivalent is a dropdown. */
  label: string
  items: MobileNavItem[]
}

/**
 * The below-`lg` disclosure for the header nav. `<details>` keeps it usable
 * with no JavaScript; the client boundary exists only so the panel can close
 * when a same-page anchor is chosen — a cross-page link resets it by
 * navigating, but `#features` on this page would otherwise leave it hanging
 * open over the content it just scrolled to.
 */
export function MobileNav({
  triggerLabel,
  navLabel,
  items,
  group,
  children,
}: {
  triggerLabel: string
  navLabel: string
  items: MobileNavItem[]
  /** Nested disclosure — the below-`lg` form of a header dropdown. */
  group?: MobileNavGroup
  children?: ReactNode
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  const close = () => {
    if (detailsRef.current) detailsRef.current.open = false
  }

  const handleItemClick = (item: MobileNavItem) => {
    if (!item.current && item.href.includes("/install")) {
      analytics.track({
        name: "install_help_clicked",
        properties: { source_surface: "header" },
      })
    }
    close()
  }

  return (
    <details
      ref={detailsRef}
      className="group relative shrink-0 lg:hidden"
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

      <div className="absolute right-0 z-50 mt-2 max-h-[calc(100dvh-6rem)] w-[min(19rem,calc(100vw-3rem))] overflow-y-auto overscroll-contain rounded-2xl border border-border bg-card p-1.5">
        <nav aria-label={navLabel} className="flex flex-col">
          {group && group.items.length > 0 && (
            <details className="group/topics mb-1 border-b border-border pb-1">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between rounded-xl px-3 text-sm font-medium text-foreground hover:bg-card-subtle focus-visible:outline-2 focus-visible:outline-brand-600 [&::-webkit-details-marker]:hidden">
                {group.label}<ChevronDown aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-open/topics:rotate-180 motion-reduce:transition-none" />
              </summary>
              <div className="pl-2">
                {group.items.map(item => (
                  <a key={item.href} href={item.href} onClick={() => handleItemClick(item)} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-card-subtle hover:text-foreground focus-visible:outline-2 focus-visible:outline-brand-600">
                    {item.label}
                  </a>
                ))}
              </div>
            </details>
          )}
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              onClick={() => handleItemClick(item)}
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
