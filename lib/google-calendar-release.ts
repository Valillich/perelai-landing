/**
 * Landing copy only: does not enable OAuth or Calendar import in the app.
 * Keep the testing notice unless general production availability is confirmed.
 * Static pages pick up a flag change when the landing is rebuilt.
 */
export function isGoogleCalendarReleased(): boolean {
  return process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_RELEASED === "true"
}
