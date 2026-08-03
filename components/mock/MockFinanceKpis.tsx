import { MockKpiTiles, MockPeriodTabs } from "@/components/mock/MockFinanceControls"
import { MockTrendChart } from "@/components/mock/MockTrendChart"
import { RegionCurrency } from "@/components/mock/region-currency"
import { cn } from "@/lib/cn"
import type { AppScreenDataset } from "@/lib/app-screen-mock"

interface MockFinanceKpisProps {
  dataset: AppScreenDataset
  className?: string
  categoryLabels?: { color: string; styling: string }
  openOrdersLabel?: string
  /** Accessible summary placed outside the aria-hidden decorative tree. */
  summary?: string
}

/**
 * Finance-overview mock: period control, profit trend, KPI tiles, plus optional
 * compact category and open-order lines required by FM3 §6.7 on the homepage.
 */
export function MockFinanceKpis({
  dataset,
  className,
  categoryLabels,
  openOrdersLabel,
  summary,
}: MockFinanceKpisProps) {
  const showBreakdown = Boolean(categoryLabels && openOrdersLabel)

  return (
    <figure
      className={cn(
        "mock-surface-elevated-shadow overflow-hidden rounded-[24px] border border-border bg-card p-5",
        className,
      )}
    >
      {summary ? <p className="sr-only">{summary}</p> : null}

      <div className="mx-auto w-full max-w-[560px]" aria-hidden="true">
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <h3 className="text-[15px] font-semibold capitalize text-foreground">
            {dataset.monthLabel} {dataset.yearLabel}
          </h3>
          <MockPeriodTabs dataset={dataset} className="sm:max-w-[280px]" />
        </div>

        <MockTrendChart dataset={dataset} gradientId="nicheProfitAreaGradient" />

        <MockKpiTiles dataset={dataset} className="mt-4" />

        {showBreakdown ? (
          <>
            <p className="mt-3 truncate text-center text-[12px] text-muted-foreground">
              {dataset.categoryBreakdown.map((row, index) => (
                <span key={row.categoryId}>
                  {index > 0 ? " · " : null}
                  {categoryLabels![row.categoryId]}{" "}
                  <RegionCurrency
                    amount={row.settledRevenue}
                    locale={dataset.locale}
                    className="mock-money font-semibold text-foreground"
                  />
                </span>
              ))}
            </p>

            <p className="mt-1 truncate text-center text-[12px] font-medium text-foreground">
              <RegionCurrency
                amount={dataset.openOrderBalance}
                locale={dataset.locale}
                className="mock-money"
              />{" "}
              {openOrdersLabel}
            </p>
          </>
        ) : null}
      </div>

      <figcaption className="mt-4 text-center text-[12px] font-medium text-subtle-text">
        {dataset.base.exampleCaption}
      </figcaption>
    </figure>
  )
}
