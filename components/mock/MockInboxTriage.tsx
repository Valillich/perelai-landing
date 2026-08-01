"use client"

import { MockVisitCard } from "@/components/mock/MockVisitCard"
import { useMarket } from "@/lib/region"
import { cn } from "@/lib/cn"
import {
  buildTrustSentence,
  formatReadyToConfirm,
  formatTrustAmount,
  type MockDataset,
} from "@/lib/mock-data"

interface MockInboxTriageProps {
  dataset: MockDataset
  /**
   * Composed surfaces (the density ladder) carry one caption for the whole
   * composition, so a nested Inbox must not add a second one.
   */
  showCaption?: boolean
  className?: string
}

/**
 * Operational Inbox differentiator (F1) — trust sentence is a semantic sibling
 * outside decorative chrome (aria-hidden).
 * Client updates both trust sentence and total amount in sync using detected market currency.
 */
export function MockInboxTriage({
  dataset,
  showCaption = true,
  className,
}: MockInboxTriageProps) {
  const { market } = useMarket(dataset.locale)
  const trust = buildTrustSentence(dataset, market)
  const trustAmountFormatted = formatTrustAmount(dataset.trustTotal, market)

  return (
    <figure
      className={cn(
        "mock-surface-elevated-shadow overflow-hidden rounded-[24px] border border-border bg-card p-5",
        className,
      )}
    >
      <p className="text-[13px] leading-relaxed text-muted-foreground">{trust}</p>

      <div aria-hidden="true" className="mt-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[13px] font-semibold text-foreground">{dataset.labels["inbox.title"]}</p>
          <span className="rounded-full bg-brand-600/10 px-2.5 py-1 text-[12px] font-semibold text-brand-600">
            {formatReadyToConfirm(dataset)}
          </span>
        </div>
        <div className="mt-3 space-y-2.5">
          {dataset.visits.map((visit) => (
            <MockVisitCard key={`${visit.serviceName}-${visit.clientName}`} visit={visit} locale={dataset.locale} />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-end text-[12px] font-semibold text-success">
          <span>{trustAmountFormatted}</span>
        </div>
      </div>

      {showCaption ? (
        <figcaption className="mt-3 text-center text-[12px] font-medium text-subtle-text">
          {dataset.exampleCaption}
        </figcaption>
      ) : null}
    </figure>
  )
}
