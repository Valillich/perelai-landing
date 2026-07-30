import { ArrowDownLeft, ArrowUpRight, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { RegionCurrency } from "@/components/mock/region-currency"
import { cn } from "@/lib/cn"
import { formatDayTotal, type HeroDataset } from "@/lib/hero-mock"

interface MockFinanceScreenProps {
  dataset: HeroDataset
  className?: string
}

/** Plot geometry — a proportional viewBox so the whole chart scales as one unit. */
const CHART = {
  width: 440,
  height: 168,
  left: 34,
  right: 8,
  top: 10,
  bottom: 22,
} as const

const GRADIENT_ID = "heroProfitAreaGradient"

/**
 * Replica of the in-app Finance dashboard (compact variant): period navigator,
 * glass-framed profit trend, and the three KPI cards that pick the chart's
 * metric. The chart is hand-rolled SVG — the landing has no chart library, and
 * the app's Recharts AreaChart is a client-only dependency we do not want here.
 */
export function MockFinanceScreen({ dataset, className }: MockFinanceScreenProps) {
  const { trend, kpis, base } = dataset

  const values = trend.map((point) => point.profit)
  const maxValue = Math.max(...values)
  const minValue = Math.min(...values)
  // Pad the domain so the line never rides the frame, matching Recharts' default.
  const domainTop = Math.ceil((maxValue * 1.12) / 100) * 100
  const domainBottom = Math.max(0, Math.floor((minValue * 0.85) / 100) * 100)
  const span = domainTop - domainBottom || 1

  const plotWidth = CHART.width - CHART.left - CHART.right
  const plotHeight = CHART.height - CHART.top - CHART.bottom

  const pointAt = (index: number, value: number) => ({
    x: CHART.left + (index / (trend.length - 1)) * plotWidth,
    y: CHART.top + (1 - (value - domainBottom) / span) * plotHeight,
  })

  const points = trend.map((point, index) => pointAt(index, point.profit))
  const linePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(2)},${point.y.toFixed(2)}`)
    .join(" ")
  const areaPath = `${linePath} L${points[points.length - 1].x.toFixed(2)},${
    CHART.top + plotHeight
  } L${points[0].x.toFixed(2)},${CHART.top + plotHeight} Z`

  // Three Y ticks, the same count the app's compact AreaChart requests.
  const yTicks = [domainBottom, domainBottom + span / 2, domainTop]

  const periods = [
    { key: "week", label: base.labels.week },
    { key: "month", label: base.labels.month },
    { key: "quarter", label: base.labels.quarter },
    { key: "year", label: base.labels.year },
  ] as const

  const kpiTiles = [
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

      <div className="mb-4 flex w-full items-center justify-center rounded-lg bg-secondary p-1">
        {periods.map((period) => (
          <span
            key={period.key}
            className={cn(
              "w-full truncate rounded-md px-2 py-1.5 text-center text-[12px] font-semibold",
              period.key === "month"
                ? "bg-card text-brand-600 shadow-sm"
                : "text-muted-foreground",
            )}
          >
            {period.label}
          </span>
        ))}
      </div>

      {/* Profit trend on the frosted glass board */}
      <div className="mock-glass-shell px-1 py-3">
        <div className="mock-glass-frame">
          <div className="mock-card-elevated">
            <svg
              viewBox={`0 0 ${CHART.width} ${CHART.height}`}
              className="w-full"
              role="presentation"
            >
              <defs>
                <linearGradient id={GRADIENT_ID} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--success)" stopOpacity="0.16" />
                  <stop offset="95%" stopColor="var(--success)" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Horizontal grid + Y ticks */}
              {yTicks.map((tick) => {
                const y = CHART.top + (1 - (tick - domainBottom) / span) * plotHeight
                return (
                  <g key={tick}>
                    <line
                      x1={CHART.left}
                      x2={CHART.width - CHART.right}
                      y1={y}
                      y2={y}
                      stroke="var(--border)"
                      strokeWidth="1"
                    />
                    <text
                      x={CHART.left - 6}
                      y={y + 3.5}
                      textAnchor="end"
                      fontSize="10"
                      fill="var(--muted-foreground)"
                    >
                      {formatDayTotal(Math.round(tick))}
                    </text>
                  </g>
                )
              })}

              <path d={areaPath} fill={`url(#${GRADIENT_ID})`} />
              <path
                d={linePath}
                fill="none"
                stroke="var(--success)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {points.map((point, index) => (
                <circle
                  key={trend[index].label}
                  cx={point.x}
                  cy={point.y}
                  r={index === points.length - 1 ? 4 : 3}
                  fill="var(--success)"
                  stroke="var(--card)"
                  strokeWidth={index === points.length - 1 ? 2 : 0}
                />
              ))}

              {/* X labels */}
              {points.map((point, index) => (
                <text
                  key={`x-${trend[index].label}`}
                  x={point.x}
                  y={CHART.height - 6}
                  textAnchor="middle"
                  fontSize="10"
                  fill="var(--muted-foreground)"
                >
                  {trend[index].label}
                </text>
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* KPI cards — the active one drives the chart above */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {kpiTiles.map((tile) => (
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
                  ? "border-transparent bg-[rgba(var(--brand-600-rgb),0.1)] text-brand-600"
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
