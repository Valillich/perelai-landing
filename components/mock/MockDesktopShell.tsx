import { MockCalendarScreen } from "@/components/mock/MockCalendarScreen"
import { MockDesktopRail, type RailPrimaryId } from "@/components/mock/MockDesktopRail"
import { MockFinanceScreen } from "@/components/mock/MockFinanceScreen"
import { MockInboxTriage } from "@/components/mock/MockInboxTriage"
import { cn } from "@/lib/cn"
import type { AppScreenDataset } from "@/lib/app-screen-mock"

interface MockDesktopShellProps {
  dataset: AppScreenDataset
  paidLabel: string
  pendingLabel: string
  activeRail?: RailPrimaryId
  /**
   * Render the third contextual pane above the product's wide-desktop
   * threshold. Off gives the 1024–1359 composition; on adds the pane the app
   * shows from 1360px.
   */
  contextualPane?: boolean
  className?: string
}

/**
 * The app's desktop workspace grammar: the 82px rail beside a list pane and a
 * detail pane, plus a third contextual pane at the wide class
 * (`apps/web/src/components/layout/DesktopWorkspace.tsx`,
 * `calendarDesktopWorkspace.ts`).
 *
 * Pane counts follow the product's own thresholds, read from
 * `apps/web/src/utils/responsiveLayout.ts` — `DESKTOP_MIN_WIDTH_REM = 64rem`
 * (1024px) and `WIDE_DESKTOP_MIN_WIDTH_REM = 85rem` (1360px) — and the
 * workspace caps at 1600px like `DesktopWorkspace`. Those thresholds are
 * evaluated as **container** queries, so the shell composes correctly inside
 * the homepage section, inside `/install`, and inside `next/og` without a trio of
 * separate layouts. DVC2 verified the same classes in the real app:
 * `docs/device-capture-manifest.md` §2 records two panes at 1024 and the
 * contextual pane appearing at 1360.
 *
 * The panes reuse the shipped screens rather than reimplementing a calendar or
 * a finance dashboard, and every string inside them still comes from the
 * generated catalog.
 */
export function MockDesktopShell({
  dataset,
  paidLabel,
  pendingLabel,
  activeRail = "calendar",
  contextualPane = true,
  className,
}: MockDesktopShellProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "@container flex w-full max-w-[1600px] overflow-hidden bg-background",
        className,
      )}
    >
      <MockDesktopRail locale={dataset.locale} active={activeRail} />

      <div className="flex min-w-0 flex-1">
        {/* List pane — the Operational Inbox, which is what the app puts here. */}
        <div className="min-w-0 flex-1 border-r border-border p-3">
          <MockInboxTriage dataset={dataset.base} showCaption={false} />
        </div>

        {/* Detail pane — the day the visitor is looking at. */}
        <div className="min-w-0 flex-[1.15] p-3">
          <MockCalendarScreen
            dataset={dataset}
            paidLabel={paidLabel}
            pendingLabel={pendingLabel}
          />
        </div>

        {contextualPane ? (
          <div className="hidden min-w-0 flex-1 border-l border-border p-3 @[85rem]:block">
            <MockFinanceScreen dataset={dataset} />
          </div>
        ) : null}
      </div>
    </div>
  )
}
