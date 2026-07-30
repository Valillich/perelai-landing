import { MockKpiTiles, MockPeriodTabs } from "@/components/mock/MockFinanceControls"
import { MockTrendChart } from "@/components/mock/MockTrendChart"
import { cn } from "@/lib/cn"
import type { AppScreenDataset } from "@/lib/app-screen-mock"

interface MockFinanceKpisProps {
  dataset: AppScreenDataset
  className?: string
}

/**
 * Niche-page finance mock (F6): the real Finance dashboard's period control,
 * profit trend and metric cards, without the transaction feed the hero
 * showcase carries. Shares every surface with MockFinanceScreen, so the two
 * cannot drift.
 */
export function MockFinanceKpis({ dataset, className }: MockFinanceKpisProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-[24px] border border-border bg-card p-5 shadow-[0_6px_20px_rgba(16,24,40,0.06)]",
        className,
      )}
    >
      {/* Capped like the calendar mock: on the full-width mocks section the
          chart would otherwise stretch to ~1100px of flat line. */}
      <div className="mx-auto w-full max-w-[560px]" aria-hidden="true">
        {/* Stacked below `sm`: side by side, the four period labels have no room
            and "Quarter" clips. */}
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <h3 className="text-[15px] font-semibold capitalize text-foreground">
            {dataset.monthLabel} {dataset.yearLabel}
          </h3>
          <MockPeriodTabs dataset={dataset} className="sm:max-w-[280px]" />
        </div>

        <MockTrendChart dataset={dataset} gradientId="nicheProfitAreaGradient" />

        <MockKpiTiles dataset={dataset} className="mt-4" />
      </div>

      <figcaption className="mt-4 text-center text-[12px] font-medium text-subtle-text">
        {dataset.base.exampleCaption}
      </figcaption>
    </figure>
  )
}
