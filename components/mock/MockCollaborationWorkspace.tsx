import uiStrings from "@/data/app-ui-strings.generated.json"
import { cn } from "@/lib/cn"
import type { AppLocale } from "@/i18n/locales"

/**
 * Product strings this mock renders as visible text.
 *
 * `pnpm verify:niches` parses this array and fails when any key stops existing
 * in `data/app-ui-strings.generated.json` for a published locale. Hand-typing
 * a role or note label here would bypass that guard.
 *
 * TC5 is HOLD: coworker keys are intentionally absent. TC8 is PASS: note labels
 * stay inside the workspace zone only.
 */
export const TEAM_COLLABORATION_UI_KEYS = [
  "staff_management.header_title",
  "staff_management.status_active",
  "staff_management.working_hours",
  "staff_management.role_staff_title",
  "staff_management.role_supervisor_title",
  "notes.pinned_title",
  "notes.visit_note",
] as const

export type TeamCollaborationUiKey = (typeof TEAM_COLLABORATION_UI_KEYS)[number]

/** Throws rather than rendering a blank product label — empty is drift too. */
export function collaborationLabel(
  locale: AppLocale,
  key: TeamCollaborationUiKey,
): string {
  const bag = uiStrings.locales[locale] as Record<string, string> | undefined
  const value = bag?.[key]
  if (!value) {
    throw new Error(`Missing collaboration UI string for locale=${locale} key=${key}`)
  }
  return value
}

/**
 * Deterministic fictional roster. Names are obviously synthetic, contain no
 * email or phone, and stay inside the aria-hidden decorative subtree.
 */
const TEAM_ROWS = [
  {
    id: "row-supervisor",
    name: "Jordan Lee",
    initials: "JL",
    roleKey: "staff_management.role_supervisor_title" as const,
    hours: "Mon–Fri · 09:00–17:00",
  },
  {
    id: "row-staff",
    name: "Casey Morgan",
    initials: "CM",
    roleKey: "staff_management.role_staff_title" as const,
    hours: "Tue–Sat · 10:00–18:00",
  },
  {
    id: "row-staff-alt",
    name: "Riley Quinn",
    initials: "RQ",
    roleKey: "staff_management.role_staff_title" as const,
    hours: "Wed–Sun · 11:00–19:00",
  },
] as const

const PINNED_NOTE_BODY = "Prefers quiet mornings before colour."
const VISIT_NOTE_BODY = "Confirmed shade match on last visit."

interface MockCollaborationWorkspaceProps {
  locale: AppLocale
  /** One sr-only summary — marketing locale copy, never product strings. */
  summary: string
  /** Exactly one visible "Example data" caption when showCaption is true. */
  exampleCaption: string
  /**
   * Composed surfaces may carry one caption for the whole composition, so a
   * nested mock must not add a second one.
   */
  showCaption?: boolean
  className?: string
}

/**
 * Presentational, server-rendered collaboration mock — workspace zone only.
 *
 * While TC5 is HOLD, this is a one-zone team surface: role pills, schedule cues,
 * and a compact notes fragment. No coworker company identity, occupied-time
 * block, or privacy-note label may appear here.
 *
 * The marketing argument is progressive capability inside one business, not a
 * feature-card grid. Detailed rows stay aria-hidden; assistive technology gets
 * only the summary.
 */
export function MockCollaborationWorkspace({
  locale,
  summary,
  exampleCaption,
  showCaption = true,
  className,
}: MockCollaborationWorkspaceProps) {
  const header = collaborationLabel(locale, "staff_management.header_title")
  const statusActive = collaborationLabel(locale, "staff_management.status_active")
  const workingHours = collaborationLabel(locale, "staff_management.working_hours")
  const pinnedTitle = collaborationLabel(locale, "notes.pinned_title")
  const visitNote = collaborationLabel(locale, "notes.visit_note")

  return (
    <figure
      className={cn(
        "mock-surface-elevated-shadow overflow-hidden rounded-[24px] border border-border bg-card p-5",
        className,
      )}
    >
      <p className="sr-only">{summary}</p>

      <div aria-hidden="true" className="space-y-4">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-[15px] font-semibold text-foreground">{header}</p>
          <span className="text-[12px] font-medium text-muted-foreground">{workingHours}</span>
        </div>

        <ul className="space-y-2.5">
          {TEAM_ROWS.map((row) => (
            <li
              key={row.id}
              className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2.5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-[11px] font-semibold tracking-wide text-muted-foreground">
                {row.initials}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="truncate text-[14px] font-medium text-foreground">{row.name}</p>
                  <span className="rounded-md bg-brand-600/10 px-2 py-0.5 text-[11px] font-semibold text-brand-600">
                    {collaborationLabel(locale, row.roleKey)}
                  </span>
                  <span className="text-[11px] font-medium text-success">{statusActive}</span>
                </div>
                <p className="mt-0.5 truncate text-[12px] text-muted-foreground">{row.hours}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="space-y-2 rounded-xl border border-border bg-background px-3 py-2.5">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold tracking-wide text-muted-foreground">
              {pinnedTitle}
            </p>
            <p className="mt-0.5 text-[13px] leading-snug text-foreground">{PINNED_NOTE_BODY}</p>
          </div>
          <div className="min-w-0 border-t border-border pt-2">
            <p className="text-[11px] font-semibold tracking-wide text-muted-foreground">
              {visitNote}
            </p>
            <p className="mt-0.5 text-[13px] leading-snug text-foreground">{VISIT_NOTE_BODY}</p>
          </div>
        </div>
      </div>

      {showCaption ? (
        <figcaption className="mt-3 text-center text-[12px] font-medium text-muted-foreground">
          {exampleCaption}
        </figcaption>
      ) : null}
    </figure>
  )
}
