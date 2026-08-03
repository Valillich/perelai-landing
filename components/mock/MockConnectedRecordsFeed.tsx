import { ArrowDownLeft, ArrowUpRight } from "lucide-react"
import { RegionCurrency } from "@/components/mock/region-currency"
import { cn } from "@/lib/cn"
import type { AppLocale } from "@/i18n/locales"
import type { SupportedMarket } from "@/lib/market"

export interface ConnectedFeedItem {
  id: string
  title: string
  subtitle: string
  amount: number
  direction: "income" | "expense"
  /** Optional mechanism badge (Connected records section). */
  badge?: string
}

interface MockConnectedRecordsFeedProps {
  items: ConnectedFeedItem[]
  locale: AppLocale
  market?: SupportedMarket
  className?: string
  /** When false, skip the outer decorative wrapper (Hero already frames). */
  framed?: boolean
}

/**
 * Transaction / connected-records list extracted from MockFinanceScreen so Hero
 * and the Connected records section share one markup path (FM3 §2 / §6.6).
 */
export function MockConnectedRecordsFeed({
  items,
  locale,
  className,
  framed = false,
}: MockConnectedRecordsFeedProps) {
  const list = (
    <div className={cn("space-y-2", className)}>
      {items.map((item) => {
        const isIncome = item.direction === "income"
        const Icon = isIncome ? ArrowDownLeft : ArrowUpRight

        return (
          <div
            key={item.id}
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
              <p className="truncate text-[11.5px] text-muted-foreground">
                {item.subtitle}
              </p>
              {item.badge ? (
                <p className="mt-0.5 truncate text-[11px] font-medium text-muted-foreground">
                  {item.badge}
                </p>
              ) : null}
            </div>

            <RegionCurrency
              amount={isIncome ? item.amount : -item.amount}
              locale={locale}
              className={cn(
                "mock-money shrink-0 text-[14px] font-semibold",
                isIncome ? "text-success" : "text-badge-danger-text",
              )}
            />
          </div>
        )
      })}
    </div>
  )

  if (!framed) return list

  return (
    <div className="rounded-2xl border border-border bg-card/60 p-3 sm:p-4">{list}</div>
  )
}
