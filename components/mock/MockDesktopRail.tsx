import {
  Calendar,
  DollarSign,
  Landmark,
  Layers,
  Settings,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react"
import uiStrings from "@/data/app-ui-strings.generated.json"
import { ProductStageBadge } from "@/components/product-stage-badge"
import { cn } from "@/lib/cn"
import type { AppLocale } from "@/i18n/locales"

/**
 * Product strings the rail renders as visible text.
 *
 * `pnpm verify:niches` parses this array and fails when any of these keys stops
 * existing in `data/app-ui-strings.generated.json` for a published locale — the
 * same drift guard LP5b built for service names, applied to navigation labels.
 * Hand-typing "Calendar" here would bypass it, so nothing in this file may
 * contain a product label as a literal.
 *
 * `nav.calendar` / `clients` / `finance` / `settings` come from the company's
 * terminology-profile namespace; the rest from `common`.
 */
export const DESKTOP_RAIL_UI_KEYS = [
  "nav.calendar",
  "clients",
  "finance",
  "settings",
  "profile",
  "product_stage.badge",
  "desktop_navigation.contextual_staff",
  "desktop_navigation.contextual_services",
  "desktop_navigation.contextual_instalments",
  "desktop_navigation.contextual_payment_accounts",
  "desktop_navigation.contextual_memberships",
  "desktop_navigation.contextual_rental_resources",
] as const

export type DesktopRailUiKey = (typeof DESKTOP_RAIL_UI_KEYS)[number]

/** Throws rather than rendering an empty rail slot — a blank label is drift too. */
export function railLabel(locale: AppLocale, key: DesktopRailUiKey): string {
  const bag = uiStrings.locales[locale] as Record<string, string> | undefined
  const value = bag?.[key]
  if (!value) {
    throw new Error(`Missing rail UI string for locale=${locale} key=${key}`)
  }
  return value
}

/** The rail's trio of top-level destinations, in the app's own order. */
export const RAIL_PRIMARY_DESTINATIONS = [
  { id: "calendar", icon: Calendar, key: "nav.calendar" },
  { id: "clients", icon: Users, key: "clients" },
  { id: "finance", icon: DollarSign, key: "finance" },
] as const satisfies ReadonlyArray<{
  id: string
  icon: LucideIcon
  key: DesktopRailUiKey
}>

export type RailPrimaryId = (typeof RAIL_PRIMARY_DESTINATIONS)[number]["id"]

/**
 * Contextual shortcuts, keyed exactly as the app's
 * `DESKTOP_RAIL_CONTEXTUAL_DESTINATIONS`. The app shows every destination the
 * signed-in role can reach; the replica takes a subset so a rail composed at
 * marketing sizes stays legible instead of running ten items tall. The default
 * pair is owner-accessible in APPOINTMENT mode, which is the ICP's configuration.
 */
export const RAIL_CONTEXTUAL_DESTINATIONS = {
  staff: { icon: Users, key: "desktop_navigation.contextual_staff" },
  services: { icon: Layers, key: "desktop_navigation.contextual_services" },
  instalments: { icon: Layers, key: "desktop_navigation.contextual_instalments" },
  "payment-accounts": {
    icon: Landmark,
    key: "desktop_navigation.contextual_payment_accounts",
  },
  memberships: { icon: Layers, key: "desktop_navigation.contextual_memberships" },
  "rental-resources": {
    icon: Layers,
    key: "desktop_navigation.contextual_rental_resources",
  },
} as const satisfies Record<string, { icon: LucideIcon; key: DesktopRailUiKey }>

export type RailContextualId = keyof typeof RAIL_CONTEXTUAL_DESTINATIONS

const DEFAULT_CONTEXTUAL: readonly RailContextualId[] = ["services", "payment-accounts"]

/** The app's `railControlClass`, minus the interaction and focus states. */
const RAIL_ITEM =
  "flex min-h-11 w-full flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-center"

const RAIL_LABEL = "max-w-full truncate text-[10px] font-semibold leading-tight"

interface RailItemProps {
  icon: LucideIcon
  label: string
  active?: boolean
}

function RailItem({ icon: Icon, label, active = false }: RailItemProps) {
  return (
    <li>
      <div
        className={cn(
          RAIL_ITEM,
          active ? "bg-brand-600/10 text-brand-600" : "text-muted-foreground",
        )}
      >
        <Icon size={22} strokeWidth={active ? 2.5 : 2} />
        <span className={RAIL_LABEL}>{label}</span>
      </div>
    </li>
  )
}

interface MockDesktopRailProps {
  locale: AppLocale
  /** Which primary destination reads as current. Static — the landing has no router. */
  active?: RailPrimaryId
  contextual?: readonly RailContextualId[]
  className?: string
}

/**
 * Replica of the app's 82px desktop navigation rail
 * (`apps/web/src/components/layout/DesktopNavigationRail.tsx`).
 *
 * This is the component that makes a wide layout read as an application rather
 * than as a wide website, which is why the plan treats the chrome contrast
 * against `MockMobileShell` as the responsive claim itself.
 *
 * Presentational: props in, DOM out. No router, no store, no client boundary —
 * the active destination is a prop, not a location.
 */
export function MockDesktopRail({
  locale,
  active = "calendar",
  contextual = DEFAULT_CONTEXTUAL,
  className,
}: MockDesktopRailProps) {
  return (
    <div
      className={cn(
        "flex w-[82px] shrink-0 flex-col self-stretch border-r border-border bg-background",
        className,
      )}
    >
      <div className="flex flex-1 flex-col gap-2 px-1.5 py-3">
        <div className="mb-1 flex flex-col items-center gap-1 px-1 py-1">
          {/* Brand mark, not a translated string — the app hardcodes it too. */}
          <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Perelai
          </span>
          <ProductStageBadge label={railLabel(locale, "product_stage.badge")} />
        </div>

        <ul className="flex flex-col items-stretch gap-1">
          {RAIL_PRIMARY_DESTINATIONS.map((destination) => (
            <RailItem
              key={destination.id}
              icon={destination.icon}
              label={railLabel(locale, destination.key)}
              active={destination.id === active}
            />
          ))}
        </ul>

        {contextual.length > 0 ? (
          <ul className="flex flex-col items-stretch gap-1 border-t border-border pt-2">
            {contextual.map((id) => (
              <RailItem
                key={id}
                icon={RAIL_CONTEXTUAL_DESTINATIONS[id].icon}
                label={railLabel(locale, RAIL_CONTEXTUAL_DESTINATIONS[id].key)}
              />
            ))}
          </ul>
        ) : null}
      </div>

      <ul className="flex flex-col items-stretch gap-1 border-t border-border px-1.5 py-3">
        <RailItem icon={UserRound} label={railLabel(locale, "profile")} />
        <RailItem icon={Settings} label={railLabel(locale, "settings")} />
      </ul>
    </div>
  )
}
