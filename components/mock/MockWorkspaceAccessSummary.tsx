import { Check } from "lucide-react"
import uiStrings from "@/data/app-ui-strings.generated.json"
import type { AppLocale } from "@/i18n/locales"
import { cn } from "@/lib/cn"

/**
 * Product strings this mock renders as visible text.
 * Checked by `pnpm verify:niches` against `app-ui-strings.generated.json` for every locale.
 */
export const WORKSPACE_ACCESS_UI_KEYS = [
  "staff_management.access_role",
  "staff_management.role_administrator_title",
  "staff_management.role_administrator_desc",
  "staff_management.service_provision_label",
  "staff_management.service_mode_none",
  "staff_management.service_mode_none_desc",
] as const

export type WorkspaceAccessUiKey = (typeof WORKSPACE_ACCESS_UI_KEYS)[number]

export function accessLabel(locale: AppLocale, key: WorkspaceAccessUiKey): string {
  const bag = uiStrings.locales[locale] as Record<string, string> | undefined
  const value = bag?.[key]
  if (!value) {
    throw new Error(`Missing workspace access UI string for locale=${locale} key=${key}`)
  }
  return value
}

interface MockWorkspaceAccessSummaryProps {
  locale: AppLocale
  labels: {
    accessTitle: string
    accessBody: string
    accessSummary: string
    planNote: string
    caption: string
  }
  className?: string
}

export function MockWorkspaceAccessSummary({
  locale,
  labels,
  className,
}: MockWorkspaceAccessSummaryProps) {
  const roleLabel = accessLabel(locale, "staff_management.access_role")
  const adminTitle = accessLabel(locale, "staff_management.role_administrator_title")
  const adminDesc = accessLabel(locale, "staff_management.role_administrator_desc")

  const serviceProvisionLabel = accessLabel(locale, "staff_management.service_provision_label")
  const serviceModeNoneTitle = accessLabel(locale, "staff_management.service_mode_none")
  const serviceModeNoneDesc = accessLabel(locale, "staff_management.service_mode_none_desc")

  return (
    <figure
      className={cn(
        "mock-surface-elevated-shadow overflow-hidden rounded-[24px] border border-border bg-card p-5",
        className,
      )}
    >
      <p className="sr-only">{labels.accessSummary}</p>
      <div>
        <h3 className="text-[14px] font-semibold text-foreground">{labels.accessTitle}</h3>
        <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">{labels.accessBody}</p>

        {/* Replica of WorkspaceAccessFormFields ChoiceCard pattern from beauty-finance */}
        <div className="mt-4 space-y-4" aria-hidden="true">
          {/* Role Section */}
          <div className="space-y-1.5">
            <span className="text-[12px] font-medium text-muted-foreground">{roleLabel}</span>
            <div className="flex items-start gap-3 rounded-xl border border-primary/40 bg-primary/[0.03] p-3.5 dark:bg-primary/[0.06]">
              <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary text-white">
                <Check size={11} strokeWidth={3} />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-foreground">{adminTitle}</p>
                <p className="mt-0.5 text-[11.5px] leading-relaxed text-muted-foreground">{adminDesc}</p>
              </div>
            </div>
          </div>

          {/* Service Provision Section */}
          <div className="space-y-1.5">
            <span className="text-[12px] font-medium text-muted-foreground">{serviceProvisionLabel}</span>
            <div className="flex items-start gap-3 rounded-xl border border-primary/40 bg-primary/[0.03] p-3.5 dark:bg-primary/[0.06]">
              <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary text-white">
                <Check size={11} strokeWidth={3} />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-foreground">{serviceModeNoneTitle}</p>
                <p className="mt-0.5 text-[11.5px] leading-relaxed text-muted-foreground">{serviceModeNoneDesc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Essential planNote remains visible and accessible to screen readers (not inside aria-hidden) */}
        <p className="mt-3.5 border-t border-border/60 pt-3 text-[11.5px] leading-relaxed text-muted-foreground">
          {labels.planNote}
        </p>
      </div>
      <figcaption className="mt-2.5 text-[12px] font-medium text-subtle-text">{labels.caption}</figcaption>
    </figure>
  )
}
