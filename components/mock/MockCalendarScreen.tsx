import { ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { MockCalendarGrid } from "@/components/mock/MockCalendarGrid"
import { RegionCurrency } from "@/components/mock/region-currency"
import { cn } from "@/lib/cn"
import type { AppScreenDataset } from "@/lib/app-screen-mock"

interface MockCalendarScreenProps {
  dataset: AppScreenDataset
  /** Status pill copy — the app renders localized transaction statuses here. */
  paidLabel: string
  pendingLabel: string
  className?: string
}

/**
 * Replica of the in-app Calendar screen: month header, the shared month grid,
 * and the selected day's activity list. Presentational only — every surface
 * class is the landing port of the app's v2 design system, so it follows the
 * `.dark` class the theme toggle sets.
 */
export function MockCalendarScreen({
  dataset,
  paidLabel,
  pendingLabel,
  className,
}: MockCalendarScreenProps) {
  const visits = dataset.base.visits

  return (
    <div className="mx-auto w-full max-w-[360px]">
    <div className={cn("flex flex-col", className)} aria-hidden="true">
     
      {/* Month header + nav arrows */}
      <div className="mb-1 flex items-center justify-between gap-2">
        <h3 className="mock-calendar-title">
          <span className="mock-calendar-month capitalize">{dataset.monthLabel}</span>
          <span className="mock-calendar-year">{dataset.yearLabel}</span>
        </h3>
        <div className="flex gap-2">
          {[ChevronLeft, ChevronRight].map((Icon, index) => (
            <span
              key={index}
              className="mock-control-shadow flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-foreground"
            >
              <Icon className="h-4 w-4" />
            </span>
          ))}
        </div>
        </div>

      <MockCalendarGrid dataset={dataset} />
      </div>

      {/* Selected day activity list */}
      <div className="mt-4 flex items-center justify-between gap-2 px-0.5">
        <p className="text-[13px] font-semibold text-foreground">{dataset.selectedDayLabel}</p>
        <span className="mock-money rounded-full bg-secondary px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
          {dataset.selectedDayCount}
        </span>
      </div>

      <div className="mt-2 space-y-2">
        {visits.map((visit, index) => (
          <div
            key={`${visit.serviceName}-${index}`}
            className="mock-card-flat flex items-stretch gap-3 p-3"
          >
            {/* Date module, small variant: clock glyph over the visit time. */}
            <div className="mock-brand-subtle flex min-h-[46px] w-[50px] shrink-0 flex-col items-center justify-center rounded-xl border border-border">
              <Clock className="mb-1 h-3.5 w-3.5 text-brand-600" />
              <span className="mock-money text-[13px] font-semibold leading-none text-foreground">
                {visit.timeLabel}
              </span>
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <p className="truncate text-[13.5px] font-medium text-foreground">
                {visit.serviceName}
              </p>
              <p className="truncate text-[12px] text-muted-foreground">{visit.clientName}</p>
            </div>

            <div className="flex shrink-0 flex-col items-end justify-center gap-1">
              <RegionCurrency
                amount={visit.amount}
                locale={dataset.locale}
                className="mock-money text-[14px] font-semibold text-foreground"
              />
              <span
                className={cn(
                  "inline-flex items-center rounded-[10px] border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                  index === 1
                    ? "border-muted-foreground/25 text-muted-foreground"
                    : "border-success/25 text-success",
                )}
              >
                {index === 1 ? pendingLabel : paidLabel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
