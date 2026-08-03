import { ChevronLeft, ChevronRight } from "lucide-react"
import { MockKpiTiles, MockPeriodTabs } from "@/components/mock/MockFinanceControls"
import { MockConnectedRecordsFeed } from "@/components/mock/MockConnectedRecordsFeed"
import { MockTrendChart } from "@/components/mock/MockTrendChart"
import { RegionCurrency } from "@/components/mock/region-currency"
import { cn } from "@/lib/cn"
import type { AppScreenDataset } from "@/lib/app-screen-mock"

interface MockFinanceScreenProps {
  dataset: AppScreenDataset
  className?: string
  /** Localized category labels keyed by categoryId (FM3 §6.3). */
  categoryLabels?: { color: string; styling: string }
  /** Suffix after the open-order amount, e.g. "on open orders". */
  openOrdersLabel?: string
}

/**
 * Replica of the in-app Finance dashboard (compact variant): period navigator,
 * profit trend, KPI cards, optional category + open-order lines, and the feed.
 */
export function MockFinanceScreen({
  dataset,
  className,
  categoryLabels,
  openOrdersLabel,
}: MockFinanceScreenProps) {
  const feedItems = dataset.feed.map((item, index) => ({
    id: `${item.title}-${index}`,
    title: item.title,
    subtitle: item.dateLabel,
    amount: item.amount,
    direction: item.direction,
  }))

  const showBreakdown = Boolean(categoryLabels && openOrdersLabel)

  return (
    <div className="mx-auto w-full max-w-[460px]">
      <div className={cn("flex flex-col", className)} aria-hidden="true">
        <div className="mb-3 flex items-center justify-between gap-2">
          {[ChevronLeft, ChevronRight].map((Icon, index) => (
            <span
              key={index}
              className={cn(
                "mock-control-shadow flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground",
                index === 1 && "order-3",
              )}
            >
              <Icon className="h-4 w-4" />
            </span>
          ))}
          <h3 className="order-2 flex-1 text-center text-[17px] font-bold capitalize text-foreground">
            {dataset.monthLabel} {dataset.yearLabel}
          </h3>
        </div>

        <MockPeriodTabs dataset={dataset} className="mb-4" />

        <MockTrendChart dataset={dataset} gradientId="heroProfitAreaGradient" />

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

      <div className="mt-4" aria-hidden="true">
        <MockConnectedRecordsFeed items={feedItems} locale={dataset.locale} />
      </div>
    </div>
  )
}
