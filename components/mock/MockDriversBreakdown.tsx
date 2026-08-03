import { RegionCurrency } from "@/components/mock/region-currency"
import { cn } from "@/lib/cn"
import type { AppLocale } from "@/i18n/locales"
import type { FinanceCategoryId, FinanceClientTotals } from "@/lib/finance-fixture"

export interface DriversCategoryRow {
  categoryId: FinanceCategoryId
  label: string
  settledRevenue: number
  expenses: number
  calculatedProfit: number
}

interface MockDriversBreakdownProps {
  categories: DriversCategoryRow[]
  clients: Array<FinanceClientTotals & { label: string }>
  locale: AppLocale
  className?: string
  caption: string
}

/**
 * Semantic category + client breakdown for the Drivers section (FM3 §8.1).
 * Real list markup — not aria-hidden decoration — so the numbers are natively
 * accessible without a separate sr-only summary string.
 */
export function MockDriversBreakdown({
  categories,
  clients,
  locale,
  className,
  caption,
}: MockDriversBreakdownProps) {
  return (
    <figure
      className={cn(
        "mock-surface-elevated-shadow overflow-hidden rounded-[24px] border border-border bg-card p-5",
        className,
      )}
    >
      <div className="@container mx-auto w-full max-w-[560px]">
        <div className="flex flex-col gap-8 @[64rem]:flex-row @[64rem]:gap-10">
          <ul className="min-w-0 flex-1 space-y-3">
            {categories.map((category) => (
              <li
                key={category.categoryId}
                className="flex items-baseline justify-between gap-4 border-b border-border/70 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-[14px] font-medium text-foreground">
                  {category.label}
                </span>
                <span className="text-right">
                  <RegionCurrency
                    amount={category.settledRevenue}
                    locale={locale}
                    className="mock-money block text-[15px] font-semibold text-success"
                  />
                  <span className="text-[11px] text-muted-foreground">
                    <RegionCurrency
                      amount={-category.expenses}
                      locale={locale}
                      className="mock-money"
                    />
                    {" · "}
                    <RegionCurrency
                      amount={category.calculatedProfit}
                      locale={locale}
                      className="mock-money text-foreground"
                    />
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <ul className="min-w-0 flex-1 space-y-3">
            {clients.map((client) => (
              <li
                key={client.clientKey}
                className="flex items-baseline justify-between gap-4 border-b border-border/70 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-[14px] font-medium text-foreground">
                  {client.label}
                </span>
                <RegionCurrency
                  amount={client.settled}
                  locale={locale}
                  className="mock-money text-[15px] font-semibold text-success"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figcaption className="mt-4 text-center text-[12px] font-medium text-subtle-text">
        {caption}
      </figcaption>
    </figure>
  )
}
