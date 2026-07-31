import { ArrowDownLeft, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { MockKpiTiles, MockPeriodTabs } from "@/components/mock/MockFinanceControls"
import { MockTrendChart } from "@/components/mock/MockTrendChart"
import { RegionCurrency } from "@/components/mock/region-currency"
import { cn } from "@/lib/cn"
import type { AppScreenDataset } from "@/lib/app-screen-mock"

interface MockFinanceScreenProps {
  dataset: AppScreenDataset
  className?: string
}

/**
 * Replica of the in-app Finance dashboard (compact variant): period navigator,
 * profit trend, the three KPI cards that pick the chart's metric, and the
 * transaction feed the app renders underneath.
 */
export function MockFinanceScreen({ dataset, className }: MockFinanceScreenProps) {
  return (
    <div className="mx-auto w-full max-w-[460px]">
    <div className={cn("flex flex-col", className)} aria-hidden="true">
      {/* Period navigator */}
      <div className="mb-3 flex items-center justify-between gap-2">
        {[ChevronLeft, ChevronRight].map((Icon, index) => (
          <span
            key={index}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground shadow-[0_4px_12px_rgba(16,24,40,0.04)]",
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
      </div>
      {/* Finance feed — the transaction list the app renders under the dashboard */}
      <div className="mt-4 space-y-2">
        {dataset.feed.map((item, index) => {
          const isIncome = item.direction === "income"
          const Icon = isIncome ? ArrowDownLeft : ArrowUpRight

          return (
            <div
              key={`${item.title}-${index}`}
              className="mock-card-flat flex items-center gap-3 p-3"
            >
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                  isIncome
                    ? "bg-success/10 text-success"
                    : "bg-badge-danger-text/10 text-badge-danger-text",
                )}
              >
                <Icon className="h-4 w-4" />
              </span>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[13.5px] font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="truncate text-[11.5px] text-muted-foreground">{item.dateLabel}</p>
              </div>

              <RegionCurrency
                amount={isIncome ? item.amount : -item.amount}
                locale={dataset.locale}
                className={cn(
                  "mock-money shrink-0 text-[14px] font-semibold",
                  isIncome ? "text-success" : "text-badge-danger-text",
                )}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
