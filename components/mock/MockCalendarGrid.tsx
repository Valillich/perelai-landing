import { cn } from "@/lib/cn"
import { formatDayTotal, type AppScreenDataset } from "@/lib/app-screen-mock"

interface MockCalendarGridProps {
  dataset: AppScreenDataset
  className?: string
}

const GRID_COLUMNS = "grid grid-cols-[repeat(7,minmax(0,1fr))]"

/**
 * The month grid from the in-app Calendar screen: glass-framed card, Mon-first
 * weekday row, and day cells carrying either a settled day total or the count
 * of records still awaiting a decision.
 *
 * Shared by the hero showcase and the niche pages so there is one grid to keep
 * faithful to the app, not two that drift.
 */
export function MockCalendarGrid({ dataset, className }: MockCalendarGridProps) {
  return (
    <div className={cn("mock-glass-shell px-1 py-3", className)} aria-hidden="true">
      <div className="mock-glass-frame">
        <div className="mock-card-elevated">
          {/* minmax(0,1fr), not grid-cols-7: `1fr` is `minmax(auto,1fr)`, so a
              wide day total would widen its own column and squeeze the rest —
              visible as truncated weekday names in narrow columns. */}
          <div className={cn(GRID_COLUMNS, "gap-1 pb-1")}>
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

          <div className={cn(GRID_COLUMNS, "gap-1")}>
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
  )
}
