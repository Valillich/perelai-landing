import { ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { RegionCurrency } from "@/components/mock/region-currency"
import { cn } from "@/lib/cn"
import { formatDayTotal, type HeroDataset } from "@/lib/hero-mock"

interface MockCalendarScreenProps {
  dataset: HeroDataset
  /** Status pill copy — the app renders localized transaction statuses here. */
  paidLabel: string
  pendingLabel: string
  className?: string
}

/**
 * Replica of the in-app Calendar screen: month header, glass-framed month grid
 * with day totals, and the selected day's activity list. Presentational only —
 * every surface class is the landing port of the app's v2 design system, so it
 * follows the `.dark` class the theme toggle sets.
 */
export function MockCalendarScreen({
  dataset,
  paidLabel,
  pendingLabel,
  className,
}: MockCalendarScreenProps) {
  const visits = dataset.base.visits

  return (
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
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-[0_4px_12px_rgba(16,24,40,0.04)]"
            >
              <Icon className="h-4 w-4" />
            </span>
          ))}
        </div>
      </div>

      {/* Month grid on the frosted glass board */}
      <div className="mock-glass-shell px-1 py-3">
        <div className="mock-glass-frame">
          <div className="mock-card-elevated">
            <div className="grid grid-cols-7 gap-1 pb-1">
              {dataset.weekdayLabels.map((label, index) => (
                <div
                  key={`${label}-${index}`}
                  className={cn(
                    "truncate py-1 text-center text-[11px] font-medium",
                    index >= 5 ? "text-muted-foreground/50" : "text-muted-foreground",
                  )}
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {dataset.calendarCells.map((cell) => (
                <div
                  key={cell.key}
                  className={cn(
                    "relative flex h-[44px] flex-col items-center justify-center overflow-hidden rounded-xl",
                    cell.isSelected &&
                      "border border-[rgba(16,24,40,0.06)] bg-[rgba(var(--brand-600-rgb),0.08)] dark:border-white/10",
                  )}
                >
                  <span
                    className={cn(
                      "mock-money text-[13px] leading-none",
                      cell.inCurrentMonth ? "text-foreground" : "text-muted-foreground/60",
                      cell.isToday ? "font-bold text-rose-500" : "font-normal",
                    )}
                  >
                    {cell.day}
                  </span>

                  <span className="mt-1 flex h-[15px] w-full items-center justify-center">
                    {cell.total != null ? (
                      <span className="mock-money text-[10.5px] font-semibold leading-none text-success">
                        {formatDayTotal(cell.total)}
                      </span>
                    ) : cell.attentionCount != null ? (
                      <span className="relative flex items-center justify-center">
                        <span className="mock-money flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[rgba(var(--brand-600-rgb),0.12)] px-1 text-[10px] font-bold leading-none text-brand-600">
                          {cell.attentionCount}
                        </span>
                        {cell.hasUnread ? (
                          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border-[1.5px] border-card bg-amber-500" />
                        ) : null}
                      </span>
                    ) : null}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
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
            <div className="flex min-h-[46px] w-[50px] shrink-0 flex-col items-center justify-center rounded-xl border border-border bg-[rgba(var(--brand-600-rgb),0.06)]">
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
