import { RegionCurrency } from "@/components/mock/region-currency"
import { cn } from "@/lib/cn"
import type { MockDataset } from "@/lib/mock-data"

interface MockFinanceKpisProps {
  dataset: MockDataset
  className?: string
}

/** Finance overview KPI tiles + inline SVG sparkline (F6) — no chart library. */
export function MockFinanceKpis({ dataset, className }: MockFinanceKpisProps) {
  const max = Math.max(...dataset.sparkline, 1)
  const points = dataset.sparkline
    .map((value, index) => {
      const x = (index / (dataset.sparkline.length - 1)) * 100
      const y = 36 - (value / max) * 28
      return `${x},${y}`
    })
    .join(" ")

  const tiles = [
    {
      key: "revenue" as const,
      label: dataset.labels["chart_labels.revenue"],
      amount: dataset.kpis.revenue,
      tone: "text-success",
    },
    {
      key: "cost" as const,
      label: dataset.labels["chart_labels.cost"],
      amount: dataset.kpis.cost,
      tone: "text-badge-danger-text",
    },
    {
      key: "profit" as const,
      label: dataset.labels["chart_labels.profit"],
      amount: dataset.kpis.profit,
      tone: "text-success",
    },
  ]

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-[24px] border border-border bg-card p-5 shadow-[0_6px_20px_rgba(16,24,40,0.06)]",
        className,
      )}
    >
      <div className="mb-3 flex items-center gap-2 text-[12px] text-muted-foreground">
        <span>{dataset.labels.week}</span>
        <span aria-hidden="true">·</span>
        <span className="font-medium text-foreground">{dataset.labels.month}</span>
        <span aria-hidden="true">·</span>
        <span>{dataset.labels.quarter}</span>
        <span aria-hidden="true">·</span>
        <span>{dataset.labels.year}</span>
      </div>

      <div aria-hidden="true" className="grid grid-cols-3 gap-2">
        {tiles.map((tile) => (
          <div
            key={tile.key}
            className="rounded-xl border border-border bg-card-subtle px-2 py-3 text-center"
          >
            <p className="truncate text-[11px] text-muted-foreground">{tile.label}</p>
            <RegionCurrency
              amount={tile.amount}
              locale={dataset.locale}
              className={cn("mt-1 block truncate text-[13px] font-semibold sm:text-[15px]", tile.tone)}
            />
          </div>
        ))}
      </div>

      <div aria-hidden="true" className="mt-4">
        <svg viewBox="0 0 100 40" className="h-16 w-full" role="presentation">
          <polyline
            fill="none"
            stroke="var(--brand-600)"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            points={points}
          />
          <polyline
            fill="var(--brand-600)"
            fillOpacity="0.12"
            stroke="none"
            points={`0,40 ${points} 100,40`}
          />
        </svg>
      </div>

      <figcaption className="mt-3 text-center text-[12px] font-medium text-subtle-text">
        {dataset.exampleCaption}
      </figcaption>
    </figure>
  )
}
