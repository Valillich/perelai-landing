import { ChevronLeft, ChevronRight } from "lucide-react"
import { MockCalendarGrid } from "@/components/mock/MockCalendarGrid"
import { cn } from "@/lib/cn"
import type { AppScreenDataset } from "@/lib/app-screen-mock"

interface MockCalendarMonthProps {
  dataset: AppScreenDataset
  className?: string
}

/**
 * Niche-page calendar mock (F2): the real Calendar screen's month header and
 * grid, without the selected-day activity list the hero showcase carries.
 */
export function MockCalendarMonth({ dataset, className }: MockCalendarMonthProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-[24px] border border-border bg-card p-5 shadow-[0_6px_20px_rgba(16,24,40,0.06)]",
        className,
      )}
    >
      {/* Capped and centred: the suite gives this a full row, which on the wide
          mocks section would otherwise stretch day cells to ~150px each. */}
      <div className="mx-auto w-full max-w-[360px]">
        <div className="mb-1 flex items-center justify-between gap-2">
          <h3 className="mock-calendar-title">
            <span className="mock-calendar-month capitalize">{dataset.monthLabel}</span>
            <span className="mock-calendar-year">{dataset.yearLabel}</span>
          </h3>
          <div className="flex gap-2">
            {[ChevronLeft, ChevronRight].map((Icon, index) => (
              <span
                key={index}
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-[0_4px_12px_rgba(16,24,40,0.04)]"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <MockCalendarGrid dataset={dataset} />
      </div>

      <figcaption className="mt-4 text-center text-[12px] font-medium text-subtle-text">
        {dataset.base.exampleCaption}
      </figcaption>
    </figure>
  )
}
