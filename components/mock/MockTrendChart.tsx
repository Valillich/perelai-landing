import { cn } from "@/lib/cn"
import { formatDayTotal, type AppScreenDataset } from "@/lib/app-screen-mock"

interface MockTrendChartProps {
  dataset: AppScreenDataset
  /**
   * Scopes the gradient's id. Two charts on one page with the same id would
   * both resolve to whichever `<defs>` the browser saw first.
   */
  gradientId: string
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

/**
 * Profit trend from the in-app Finance dashboard (compact AreaChart), on the
 * frosted glass board. Hand-rolled SVG: the landing has no chart library, and
 * the app's Recharts is a client-only dependency we do not want here.
 *
 * Shared by the hero showcase and the niche pages.
 */
export function MockTrendChart({ dataset, gradientId, className }: MockTrendChartProps) {
  const { trend } = dataset

  const values = trend.map((point) => point.profit)
  const maxValue = Math.max(...values)
  const minValue = Math.min(...values)
  // Pad the domain so the line never rides the frame, matching Recharts' default.
  const domainTop = Math.ceil((maxValue * 1.12) / 100) * 100
  const domainBottom = Math.max(0, Math.floor((minValue * 0.85) / 100) * 100)
  const span = domainTop - domainBottom || 1

  const plotWidth = CHART.width - CHART.left - CHART.right
  const plotHeight = CHART.height - CHART.top - CHART.bottom

  const points = trend.map((point, index) => ({
    x: CHART.left + (index / (trend.length - 1)) * plotWidth,
    y: CHART.top + (1 - (point.profit - domainBottom) / span) * plotHeight,
  }))

  const linePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(2)},${point.y.toFixed(2)}`)
    .join(" ")
  const areaPath = `${linePath} L${points[points.length - 1].x.toFixed(2)},${
    CHART.top + plotHeight
  } L${points[0].x.toFixed(2)},${CHART.top + plotHeight} Z`

  // Three Y ticks, the same count the app's compact AreaChart requests.
  const yTicks = [domainBottom, domainBottom + span / 2, domainTop]

  return (
    <div className={cn("mock-glass-shell px-1 py-3", className)}>
      <div className="mock-glass-frame">
        <div className="mock-card-elevated">
          <svg
            viewBox={`0 0 ${CHART.width} ${CHART.height}`}
            className="w-full"
            role="presentation"
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
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

            <path d={areaPath} fill={`url(#${gradientId})`} />
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
  )
}
