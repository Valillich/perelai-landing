import { Calendar, DollarSign, Settings, Users, type LucideIcon } from "lucide-react"
import { MockCalendarScreen } from "@/components/mock/MockCalendarScreen"
import {
  railLabel,
  type DesktopRailUiKey,
} from "@/components/mock/MockDesktopRail"
import { cn } from "@/lib/cn"
import type { AppScreenDataset } from "@/lib/app-screen-mock"

/**
 * The four destinations the app's `BottomNavigation` renders, in its order.
 * Labels resolve through the same generated allowlist the rail uses, so the
 * two chromes can never disagree about what a destination is called.
 */
const BOTTOM_NAV_TABS = [
  { id: "calendar", icon: Calendar, key: "nav.calendar" },
  { id: "clients", icon: Users, key: "clients" },
  { id: "finance", icon: DollarSign, key: "finance" },
  { id: "settings", icon: Settings, key: "settings" },
] as const satisfies ReadonlyArray<{
  id: string
  icon: LucideIcon
  key: DesktopRailUiKey
}>

type BottomNavTabId = (typeof BOTTOM_NAV_TABS)[number]["id"]

interface MockMobileShellProps {
  dataset: AppScreenDataset
  paidLabel: string
  pendingLabel: string
  activeTab?: BottomNavTabId
  className?: string
}

/**
 * The phone composition: the shipped Calendar screen plus the bottom navigation
 * pill (`apps/web/src/components/layout/BottomNavigation.tsx`), which shows the
 * label only for the current destination.
 *
 * The bar exists here for one reason: a resized website and a real application
 * differ in exactly one visible place, the navigation chrome. Rendering the
 * bottom bar against `MockDesktopShell`'s 82px rail *is* the responsive claim,
 * made before anything is read.
 */
export function MockMobileShell({
  dataset,
  paidLabel,
  pendingLabel,
  activeTab = "calendar",
  className,
}: MockMobileShellProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex w-full flex-col justify-end gap-3 bg-background", className)}
    >
      {/*
        `min-h-0` + `overflow-hidden` so a height-clamped frame crops the screen
        from the bottom of the flex line rather than pushing the navigation bar
        out of view. The bar is the reason this shell exists.
      */}
      <div className="min-h-0 flex-1 overflow-hidden px-3 pt-3">
        <MockCalendarScreen
          dataset={dataset}
          paidLabel={paidLabel}
          pendingLabel={pendingLabel}
        />
      </div>

      <div className="shrink-0 px-3 pb-3">
        <div className="mx-auto flex w-full max-w-[400px] items-center justify-between gap-1 rounded-full border border-border bg-card p-1.5 mock-bottom-bar-shadow">
          {BOTTOM_NAV_TABS.map((tab) => {
            const Icon = tab.icon
            const isActive = tab.id === activeTab

            return (
              <div
                key={tab.id}
                className={cn(
                  "flex min-w-0 flex-1 flex-col items-center justify-center gap-[3px] rounded-full py-2",
                  isActive ? "bg-brand-600/[0.08] text-brand-600" : "text-muted-foreground",
                )}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                {/* The app labels the current tab only. */}
                {isActive ? (
                  <span className="max-w-full truncate text-[9px] font-bold leading-none">
                    {railLabel(dataset.locale, tab.key)}
                  </span>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
