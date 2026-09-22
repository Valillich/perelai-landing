"use client"

import { Link } from "@/i18n/navigation"
import { useSearchParams } from "next/navigation"
import { LEGAL_NAV_ITEMS } from "@/lib/legal/nav"
import { validReturnFrom } from "@/lib/legal/return"
import type { LegalDocumentSlug } from "@/lib/legal/types"

export { LEGAL_NAV_ITEMS }

function LegalNavContent({
  currentSlug,
  from,
}: {
  currentSlug: LegalDocumentSlug
  from?: ReturnType<typeof validReturnFrom>
}) {
  return (
    <nav
      aria-label="Legal documents"
      className="my-6 border-b border-border print:hidden"
    >
      <div className="flex gap-1 overflow-x-auto pb-2 sm:flex-wrap">
        {LEGAL_NAV_ITEMS.map((item) => {
          const isActive = item.slug === currentSlug
          const isRefundPolicy = item.slug === "billing"

          return (
            <Link
              key={item.slug}
              href={`/legal/${item.slug}${from ? `?from=${from}` : ""}`}
              className={`inline-flex shrink-0 items-center rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors ${
                isActive
                  ? "bg-brand-600 text-white shadow-sm"
                  : isRefundPolicy
                    ? "bg-brand-600/10 text-brand-600 hover:bg-brand-600/15"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {item.shortTitle}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

/** Server-rendered navigation used while the client URL context hydrates. */
export function LegalNavFallback({ currentSlug }: { currentSlug: LegalDocumentSlug }) {
  return <LegalNavContent currentSlug={currentSlug} />
}

/** Adds only the validated app return context after the legal page hydrates. */
export function LegalNav({ currentSlug }: { currentSlug: LegalDocumentSlug }) {
  const searchParams = useSearchParams()
  const from = validReturnFrom(searchParams.get("from"))

  return <LegalNavContent currentSlug={currentSlug} from={from} />
}
