import { Check } from "lucide-react"
import { RegionCurrency } from "@/components/mock/region-currency"
import { cn } from "@/lib/cn"
import type { AppScreenDataset } from "@/lib/app-screen-mock"

/** Week / Month / Quarter / Year segmented control from the app's PeriodNavigator. */
export function MockPeriodTabs({
  dataset,
  className,
}: {
  dataset: AppScreenDataset
  className?: string
}) {
  const periods = [
    { key: "week", label: dataset.base.labels.week },
    { key: "month", label: dataset.base.labels.month },
    { key: "quarter", label: dataset.base.labels.quarter },
    { key: "year", label: dataset.base.labels.year },
  ] as const

  return (
    <div
      className={cn(
        "flex w-full items-center justify-center rounded-lg bg-secondary p-1",
        className,
      )}
    >
      {periods.map((period) => (
        <span
          key={period.key}
          className={cn(
            "w-full truncate rounded-md px-2 py-1.5 text-center text-[12px] font-semibold",
            period.key === "month" ? "bg-card text-brand-600 shadow-sm" : "text-muted-foreground",
          )}
        >
          {period.label}
        </span>
      ))}
    </div>
  )
}

/**
 * The trio of metric cards under the chart. In the app these are radio buttons
 * that re-point the chart, so the selected one carries a check — profit here,
 * which is what the trend line is showing.
 */
export function MockKpiTiles({
  dataset,
  className,
}: {
  dataset: AppScreenDataset
  className?: string
}) {
  const { kpis, base } = dataset

  const tiles = [
    {
      key: "revenue",
      label: base.labels["chart_labels.revenue"],
      amount: kpis.revenue,
      tone: "text-success",
      active: false,
    },
    {
      key: "cost",
      label: base.labels["chart_labels.cost"],
      amount: -kpis.cost,
      tone: "text-badge-danger-text",
      active: false,
    },
    {
      key: "profit",
      label: base.labels["chart_labels.profit"],
      amount: kpis.profit,
      tone: "text-success",
      active: true,
    },
  ] as const

  return (
    <div className={cn("grid grid-cols-3 gap-3", className)}>
      {tiles.map((tile) => (
        <div
          key={tile.key}
          className={cn(
            "mock-card-flat py-3 pl-2.5 pr-2 text-center",
            tile.active && "border-brand-600/20 ring-1 ring-brand-600/30",
          )}
        >
          <span
            className={cn(
              "absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full border",
              tile.active
                ? "border-transparent mock-brand-tint text-brand-600"
                : "border-border",
            )}
          >
            {tile.active ? <Check className="h-2.5 w-2.5" strokeWidth={3} /> : null}
          </span>
          <p className="truncate text-[11px] text-muted-foreground">{tile.label}</p>
          <RegionCurrency
            amount={tile.amount}
            locale={dataset.locale}
            className={cn(
              "mock-money mt-1 block truncate text-[15px] font-bold sm:text-[17px]",
              tile.tone,
            )}
          />
        </div>
      ))}
    </div>
  )
}
