"use client"

import { useState } from "react"
import { Banknote, CircleDot } from "lucide-react"
import uiStrings from "@/data/app-ui-strings.generated.json"
import type { AppLocale } from "@/i18n/locales"
import { cn } from "@/lib/cn"
import { DRAWER_DEMO } from "@/lib/launch-demo-fixture"

/**
 * Product strings this mock renders as visible text.
 * Checked by `pnpm verify:niches` against `app-ui-strings.generated.json` for every locale.
 */
export const CASH_DRAWER_UI_KEYS = [
  "cash_drawer.open",
  "cash_drawer.summary_opening",
  "cash_drawer.summary_receipts",
  "cash_drawer.summary_expected",
  "cash_drawer.close_preview_title",
  "cash_drawer.preview_expected",
  "cash_drawer.preview_counted",
  "cash_drawer.shortage",
  "cash_drawer.surplus",
  "cash_drawer.counts_match",
] as const

export type CashDrawerUiKey = (typeof CASH_DRAWER_UI_KEYS)[number]

export function drawerLabel(locale: AppLocale, key: CashDrawerUiKey): string {
  const bag = uiStrings.locales[locale] as Record<string, string> | undefined
  const value = bag?.[key]
  if (!value) {
    throw new Error(`Missing cash drawer UI string for locale=${locale} key=${key}`)
  }
  return value
}

/**
 * Locale-aware currency formatting for fixed demo values.
 * Uses unicode minus (−) for negative values, never literal escaped strings.
 */
export function formatDrawerAmount(amount: number, locale: AppLocale, currency = DRAWER_DEMO.currency): string {
  const isNegative = amount < 0
  const abs = Math.abs(amount)
  const formatted = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(abs)
  return isNegative ? `−${formatted}` : formatted
}

interface MockCashDrawerSummaryProps {
  locale: AppLocale
  labels: {
    title: string
    body: string
    summary: string
    caption: string
  }
  className?: string
}

export function MockCashDrawerSummary({ locale, labels, className }: MockCashDrawerSummaryProps) {
  const [activeTab, setActiveTab] = useState<"open" | "close">("open")

  const openLabel = drawerLabel(locale, "cash_drawer.open")
  const closeTitle = drawerLabel(locale, "cash_drawer.close_preview_title")
  const expectedLabel = drawerLabel(locale, "cash_drawer.summary_expected")
  const openingLabel = drawerLabel(locale, "cash_drawer.summary_opening")
  const receiptsLabel = drawerLabel(locale, "cash_drawer.summary_receipts")

  const previewExpectedLabel = drawerLabel(locale, "cash_drawer.preview_expected")
  const previewCountedLabel = drawerLabel(locale, "cash_drawer.preview_counted")
  const shortageTemplate = drawerLabel(locale, "cash_drawer.shortage")

  const shortageAmountFormatted = formatDrawerAmount(Math.abs(DRAWER_DEMO.difference), locale)
  const shortageText = shortageTemplate.replace("{{amount}}", shortageAmountFormatted)

  return (
    <figure className={cn("mock-surface-elevated-shadow overflow-hidden rounded-[24px] border border-border bg-card p-5", className)}>
      <p className="sr-only">{labels.summary}</p>
      <div aria-hidden="true">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-[14px] font-semibold text-foreground">{labels.title}</h3>
            <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">{labels.body}</p>
          </div>
        </div>

        {/* Manual tabs: Open session vs Close preview (no autoplay) */}
        <div className="mt-4 flex rounded-xl bg-secondary/50 p-1 text-[12px] font-medium">
          <button
            type="button"
            onClick={() => setActiveTab("open")}
            className={cn(
              "flex-1 rounded-lg py-1.5 text-center transition-all",
              activeTab === "open"
                ? "bg-card font-semibold text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {openLabel}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("close")}
            className={cn(
              "flex-1 rounded-lg py-1.5 text-center transition-all",
              activeTab === "close"
                ? "bg-card font-semibold text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {closeTitle}
          </button>
        </div>

        {/* OPEN session summary replica (from CashDrawerSummary.tsx) */}
        {activeTab === "open" ? (
          <div className="mt-3 overflow-hidden rounded-xl border border-border bg-card">
            <div className="bg-primary/[0.045] px-4 pb-4 pt-3 dark:bg-primary/[0.08]">
              <p className="flex items-center gap-1.5 text-[12px] font-semibold text-primary">
                <CircleDot className="h-3.5 w-3.5 fill-primary/15" />
                {openLabel}
              </p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11.5px] font-medium text-muted-foreground">{expectedLabel}</p>
                  <p className="mt-0.5 text-[24px] font-bold leading-none tracking-[-0.03em] tabular-nums text-foreground">
                    {formatDrawerAmount(DRAWER_DEMO.expected, locale)}
                  </p>
                </div>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-card text-primary shadow-sm">
                  <Banknote className="h-4.5 w-4.5" />
                </div>
              </div>
            </div>

            <dl className="space-y-2 px-4 py-3 text-[12.5px]">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted-foreground">{openingLabel}</dt>
                <dd className="font-semibold tabular-nums text-foreground">
                  {formatDrawerAmount(DRAWER_DEMO.opening, locale)}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-border/50 pt-2">
                <dt className="text-muted-foreground">{receiptsLabel}</dt>
                <dd className="font-semibold tabular-nums text-foreground">
                  +{formatDrawerAmount(DRAWER_DEMO.cashReceived, locale)}
                </dd>
              </div>
            </dl>
          </div>
        ) : (
          /* Close reconciliation preview replica (from CloseCashDrawerSheet.tsx) */
          <div className="mt-3 overflow-hidden rounded-xl border border-border bg-card p-4">
            <p className="text-[12px] font-semibold text-foreground">{closeTitle}</p>
            <dl className="mt-3 space-y-2.5 text-[12.5px]">
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">{previewExpectedLabel}</dt>
                <dd className="font-semibold tabular-nums text-foreground">
                  {formatDrawerAmount(DRAWER_DEMO.expected, locale)}
                </dd>
              </div>
              <div className="flex justify-between gap-3 border-t border-border/50 pt-2">
                <dt className="text-muted-foreground">{previewCountedLabel}</dt>
                <dd className="font-semibold tabular-nums text-foreground">
                  {formatDrawerAmount(DRAWER_DEMO.counted, locale)}
                </dd>
              </div>
              <div className="flex justify-between gap-3 border-t border-border/70 pt-2.5 font-semibold">
                <dt className="text-badge-danger-text">{shortageText}</dt>
                <dd className="tabular-nums text-badge-danger-text">
                  {formatDrawerAmount(DRAWER_DEMO.difference, locale)}
                </dd>
              </div>
            </dl>
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-[12px] font-medium text-subtle-text">{labels.caption}</figcaption>
    </figure>
  )
}
