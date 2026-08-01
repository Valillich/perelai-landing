import { Inbox, Plus } from "lucide-react"
import uiStrings from "@/data/app-ui-strings.generated.json"
import { cn } from "@/lib/cn"
import type { AppLocale } from "@/i18n/locales"

/**
 * Product strings this pane renders as visible text.
 *
 * `pnpm verify:niches` parses this array and fails when any key stops existing
 * in `data/app-ui-strings.generated.json` for a published locale — the same
 * drift guard `MockDesktopRail` uses. Writing any of these labels out as a
 * string literal would bypass it, so this file must contain none.
 *
 * All three live in the company's terminology-profile namespace
 * (`beauty.json` et al.), which is where `CalendarPage` reads them from.
 */
export const DESKTOP_PANE_EMPTY_STATE_UI_KEYS = [
  "calendar.desktop_create_title",
  "calendar.desktop_create_description",
  "calendar.fab_add_visit",
] as const

export type DesktopPaneEmptyStateUiKey =
  (typeof DESKTOP_PANE_EMPTY_STATE_UI_KEYS)[number]

/** Throws rather than rendering a blank pane — an empty label is drift too. */
export function paneEmptyStateLabel(
  locale: AppLocale,
  key: DesktopPaneEmptyStateUiKey,
): string {
  const bag = uiStrings.locales[locale] as Record<string, string> | undefined
  const value = bag?.[key]
  if (!value) {
    throw new Error(`Missing pane empty-state UI string for locale=${locale} key=${key}`)
  }
  return value
}

interface MockDesktopPaneEmptyStateProps {
  locale: AppLocale
  className?: string
}

/**
 * Replica of the app's passive contextual pane
 * (`apps/web/src/components/layout/DesktopPaneEmptyState.tsx`), in the shape
 * `CalendarPage` gives it: the Inbox glyph, the create heading, the
 * booking-mode explanation, and the create action.
 *
 * This is what the third pane actually shows on a fresh desktop workspace —
 * the app fills it with a selected record or the create sheet, and falls back
 * to this when nothing is selected. Rendering the fallback keeps the wide
 * composition honest: the visitor sees the state they will land in, not a
 * dashboard populated for the screenshot.
 *
 * Presentational and non-interactive. The action is a styled `span`, not a
 * `button`: the shell around it is `aria-hidden`, and a real focusable control
 * inside a hidden subtree is a keyboard trap that leads nowhere.
 */
export function MockDesktopPaneEmptyState({
  locale,
  className,
}: MockDesktopPaneEmptyStateProps) {
  return (
    <div
      className={cn(
        "flex h-full min-h-0 flex-col items-center justify-center gap-4 px-6 text-center",
        className,
      )}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
        <Inbox className="h-7 w-7 text-muted-foreground" strokeWidth={1.75} />
      </div>

      <div className="max-w-sm space-y-2">
        <p className="text-[18px] font-semibold leading-snug text-foreground">
          {paneEmptyStateLabel(locale, "calendar.desktop_create_title")}
        </p>
        <p className="text-[14px] leading-relaxed text-muted-foreground">
          {paneEmptyStateLabel(locale, "calendar.desktop_create_description")}
        </p>
      </div>

      <span className="inline-flex h-11 max-w-full items-center gap-2 rounded-xl bg-brand-600 px-4 text-[14px] font-semibold text-primary-foreground">
        <Plus className="h-[18px] w-[18px] shrink-0" strokeWidth={2.25} />
        <span className="truncate">
          {paneEmptyStateLabel(locale, "calendar.fab_add_visit")}
        </span>
      </span>
    </div>
  )
}
