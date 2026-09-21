import { Check, Gift } from "lucide-react"
import uiStrings from "@/data/app-ui-strings.generated.json"
import type { AppLocale } from "@/i18n/locales"
import { cn } from "@/lib/cn"
import { PACKAGE_DEMO } from "@/lib/launch-demo-fixture"

/**
 * Product strings this mock renders as visible text.
 * Checked by `pnpm verify:niches` against `app-ui-strings.generated.json` for every locale.
 */
export const PACKAGE_CHECKOUT_UI_KEYS = [
  "memberships.package_credit_applied",
  "memberships.package_credit_available",
  "memberships.apply_from_package",
  "calendar_create.checkout_pay_now",
  "calendar_create.checkout_total",
] as const

export type PackageCheckoutUiKey = (typeof PACKAGE_CHECKOUT_UI_KEYS)[number]

export function packageLabel(locale: AppLocale, key: PackageCheckoutUiKey): string {
  const bag = uiStrings.locales[locale] as Record<string, string> | undefined
  const value = bag?.[key]
  if (!value) {
    throw new Error(`Missing package checkout UI string for locale=${locale} key=${key}`)
  }
  return value
}

interface MockPackageCheckoutProps {
  locale: AppLocale
  labels: {
    title: string
    body: string
    summary: string
    caption: string
  }
  className?: string
}

export function MockPackageCheckout({ locale, labels, className }: MockPackageCheckoutProps) {
  const { total, used, remaining, unit } = PACKAGE_DEMO

  const creditAppliedLabel = packageLabel(locale, "memberships.package_credit_applied")
  const applyTemplate = packageLabel(locale, "memberships.apply_from_package")
  const payNowLabel = packageLabel(locale, "calendar_create.checkout_pay_now")

  // Interpolate apply_from_package template: e.g. "{{package}} · {{remaining}} left"
  const packageSubtitle = applyTemplate
    .replace("{{package}}", `${total} ${unit}`)
    .replace("{{remaining}}", `${remaining}`)

  const formattedZero = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(0)

  return (
    <figure
      className={cn(
        "mock-surface-elevated-shadow overflow-hidden rounded-[24px] border border-border bg-card p-5",
        className,
      )}
    >
      <p className="sr-only">{labels.summary}</p>
      <div aria-hidden="true">
        <h3 className="text-[14px] font-semibold text-foreground">{labels.title}</h3>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">{labels.body}</p>

        {/* Replica of PackageCreditBadge from beauty-finance */}
        <div className="mt-4 rounded-2xl border border-primary/30 bg-primary/[0.04] p-3.5 dark:bg-primary/[0.08]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Gift className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13.5px] font-bold text-primary">{creditAppliedLabel}</p>
                <p className="truncate text-[12px] font-medium text-muted-foreground">{packageSubtitle}</p>
              </div>
            </div>

            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-[1.5px] border-primary bg-primary text-white shadow-sm">
              <Check size={13} strokeWidth={3} />
            </div>
          </div>

          {/* Units indicator: 1 used, 2 remaining of 3 visits */}
          <div className="mt-3 flex items-center justify-between border-t border-primary/15 pt-2.5 text-[12px]">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: total }, (_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-3 w-3 rounded-full border-2",
                    i < used
                      ? "border-muted-foreground/60 bg-muted-foreground/60"
                      : "border-primary bg-primary",
                  )}
                  title={i < used ? "Used visit" : "Remaining visit"}
                />
              ))}
              <span className="ml-1 font-semibold text-foreground">
                {remaining} / {total} {unit}
              </span>
            </div>

            {/* Explicit Pay now / New payment: $0 (not approximate zero) */}
            <div className="flex items-center gap-1.5">
              <span className="text-muted-foreground">{payNowLabel}:</span>
              <span className="font-bold tabular-nums text-foreground">{formattedZero}</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-[12px] font-medium text-subtle-text">{labels.caption}</figcaption>
    </figure>
  )
}
