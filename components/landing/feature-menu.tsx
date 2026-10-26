"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import type { MobileNavItem } from "./mobile-nav"

export function FeatureMenu({ label, items }: { label: string; items: MobileNavItem[] }) {
  const ref = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target) && ref.current) {
        ref.current.open = false
      }
    }
    document.addEventListener("pointerdown", closeOutside)
    return () => document.removeEventListener("pointerdown", closeOutside)
  }, [])

  return (
    <details ref={ref} className="group/features relative" onKeyDown={event => {
      if (event.key === "Escape" && ref.current?.open) {
        ref.current.open = false
        ref.current.querySelector("summary")?.focus()
      }
    }}>
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-1.5 text-[14px] font-medium text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 [&::-webkit-details-marker]:hidden">
        {label}
        <ChevronDown aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-open/features:rotate-180 motion-reduce:transition-none" />
      </summary>
      <div className="absolute left-0 top-full z-50 max-h-[calc(100dvh-7rem)] w-72 overflow-y-auto overscroll-contain rounded-2xl border border-border bg-card p-2">
        {items.map(item => (
          <a key={item.href} href={item.href} onClick={() => {
            if (ref.current) ref.current.open = false
          }} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-brand-600">
            {item.label}
          </a>
        ))}
      </div>
    </details>
  )
}
