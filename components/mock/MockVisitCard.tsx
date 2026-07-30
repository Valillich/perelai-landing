import { cn } from "@/lib/cn"
import { RegionCurrency } from "@/components/mock/region-currency"
import type { MockVisit } from "@/lib/mock-data"

interface MockVisitCardProps {
  visit: MockVisit
  locale: string
  className?: string
}

/** Presentational visit row — mirrors RecordCardSurface grammar (F4/F5). */
export function MockVisitCard({ visit, locale, className }: MockVisitCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-3.5 py-2.5",
        className,
      )}
    >
      <div className="min-w-0 text-left">
        <p className="truncate text-[14px] font-medium text-foreground">{visit.serviceName}</p>
        <p className="truncate text-[12px] text-muted-foreground">
          {visit.clientName} · {visit.timeLabel}
        </p>
      </div>
      <RegionCurrency
        amount={visit.amount}
        locale={locale}
        className="shrink-0 text-[14px] font-semibold text-success"
      />
    </div>
  )
}
