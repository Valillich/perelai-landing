import { RegionCurrency } from "@/components/mock/region-currency"
import { cn } from "@/lib/cn"
import type { MockDataset } from "@/lib/mock-data"

interface MockCalendarMonthProps {
  dataset: MockDataset
  className?: string
}

/** Mode-aware calendar month strip (F2) — two week rows, day totals. */
export function MockCalendarMonth({ dataset, className }: MockCalendarMonthProps) {
  const weekdayLabels = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(Date.UTC(2026, 6, 5 + index))
    return new Intl.DateTimeFormat(dataset.locale, { weekday: "narrow", timeZone: "UTC" }).format(
      date,
    )
  })

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-[24px] border border-border bg-card p-5 shadow-[0_6px_20px_rgba(16,24,40,0.06)]",
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="text-[14px] font-semibold text-foreground">{dataset.calendarMonthLabel}</p>
        <p className="text-[12px] text-muted-foreground">{dataset.labels["month"]}</p>
      </div>

      <div aria-hidden="true">
        <div className="grid grid-cols-7 gap-1 text-center text-[11px] text-muted-foreground">
          {weekdayLabels.map((label, index) => (
            <span key={`${label}-${index}`}>{label}</span>
          ))}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-1">
          {dataset.calendarDays.map((cell, index) => (
            <div
              key={`day-${index}`}
              className={cn(
                "flex min-h-[52px] flex-col items-center justify-center rounded-lg border border-border px-0.5 py-1",
                cell.inMonth ? "bg-card-subtle" : "bg-transparent opacity-40",
                cell.busy && "ring-1 ring-brand-600/30",
              )}
            >
              {cell.inMonth ? (
                <>
                  <span className="text-[12px] font-medium text-foreground">{cell.day}</span>
                  {cell.total != null ? (
                    <RegionCurrency
                      amount={cell.total}
                      locale={dataset.locale}
                      className="max-w-full truncate text-[10px] font-semibold text-success"
                    />
                  ) : (
                    <span className="text-[10px] text-subtle-text">·</span>
                  )}
                </>
              ) : null}
            </div>
          ))}
        </div>
        {dataset.calendarDays.some((cell) => cell.busy) ? (
          <p className="mt-2 text-[11px] text-muted-foreground">
            {dataset.labels["coworker.busy_block_title"]}
          </p>
        ) : null}
      </div>

      <figcaption className="mt-3 text-center text-[12px] font-medium text-subtle-text">
        {dataset.exampleCaption}
      </figcaption>
    </figure>
  )
}
