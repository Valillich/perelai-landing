# Team collaboration claim contract

**Phase:** TEAM0 — evidence, research, and claim contract
**Verification date:** 2026-08-02
**Landing HEAD:** `727567db1e2ec6cd7b273b882182af0f5eb028b8`
**App HEAD:** `7e05cd232e85a906f17759a46b9b3f17ae8c6602`

## Scope and evidence rules

This contract is the publication gate for the proposed homepage collaboration section. A `PASS` means the current app source was inspected at the app HEAD above and the named focused evidence was available. A `HOLD` sentence is not public copy and may not be added in a later phase without a new verification entry.

The app worktree contained unrelated locale edits when inspected:

- `apps/web/public/locales/fr/common.json`
- `apps/web/public/locales/pt/beauty.json`
- `apps/web/public/locales/tr/beauty.json`
- `apps/web/public/locales/uk/beauty.json`

They do not overlap the inspected implementation paths and were not changed. All required evidence paths from the binding plan resolved at their stated locations; no path mapping was required.

The two collaboration mechanisms are deliberately separate:

- A **team member** has workspace access through `CompanyMembership` with `OWNER`, `SUPERVISOR`, or `STAFF` role semantics.
- A **coworker** is another `Company` in a `CoworkerGroup`; accepting its invite creates no `CompanyMembership` in the other company. Its busy-block response is limited to an opaque company identity and interval.

## Claim rows

| ID | Exact allowed public wording | Prohibited wording | Current implementation path | Test path or command | App commit | Verified | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TC1 | “Work solo. Add people when you need them.” | “Built for salons”; “requires a team”; “enterprise workforce management” | `apps/api/prisma/schema.prisma` (`Company.staff`); `apps/api/src/staff/staff.controller.ts` (owner-created staff); `apps/api/src/staff/staff.service.ts` (`create`) | Ran: `./node_modules/.bin/jest --no-cache --config apps/api/jest.config.ts --runInBand apps/api/src/staff/staff.service.spec.ts apps/api/src/common/utils/staff-scope.util.spec.ts apps/api/src/notes/notes.service.spec.ts apps/api/src/public-booking/coworker-privacy.spec.ts` — 62 passed | `7e05cd232e85a906f17759a46b9b3f17ae8c6602` | 2026-08-02 | PASS |
| TC2 | “Invite team members with Staff or Supervisor access.” | “Granular/custom permissions”; “SSO”; “enterprise permissions”; arbitrary roles | `apps/api/prisma/schema.prisma` (`Role`); `apps/api/src/staff/staff.service.ts` (`createInvite`, only `STAFF`/`SUPERVISOR`); `apps/api/src/staff/staff.controller.ts` | Same 62-test API command above; `StaffService` cases cover Staff/Supervisor invite and access-role shapes | `7e05cd232e85a906f17759a46b9b3f17ae8c6602` | 2026-08-02 | PASS |
| TC3 | “Keep schedules, time off and assigned services together.” | Payroll; timesheets; commissions; HR management | `apps/api/src/staff/staff.service.ts` (`replaceSchedules`, `replaceBlocks`, income `serviceCategories`); `apps/api/prisma/schema.prisma` (`StaffSchedule`, `StaffBlock`, staff-category relation) | Same 62-test API command above; `staff.service.spec.ts` covers schedule/block replacement and income-only services | `7e05cd232e85a906f17759a46b9b3f17ae8c6602` | 2026-08-02 | PASS |
| TC4 | “Give each person the access their role allows.” | “Staff can never see another client”; “everyone sees everything” | `apps/api/src/common/utils/staff-scope.util.ts` (unrestricted `OWNER`/`SUPERVISOR`, self-scoped `STAFF`); `apps/api/src/notes/notes.service.ts` (company/client visibility checks); `apps/api/src/staff/staff.controller.ts` (owner-only writes) | Same 62-test API command above; `staff-scope.util.spec.ts` and `notes.service.spec.ts` passed | `7e05cd232e85a906f17759a46b9b3f17ae8c6602` | 2026-08-02 | PASS |
| TC5 | “Link a separate business that shares your space.” | Coworker as a workspace role; shared account; shared client list | `apps/api/prisma/schema.prisma` (`CoworkerGroup`, `CoworkerMembership`, `CoworkerInvite`); `apps/api/src/coworkers/coworkers.service.ts`; `docs/adr/0010-coworker-cross-company-availability.md` | Required focused integration: `./node_modules/.bin/jest --no-cache --config apps/api/jest.config.ts --runInBand apps/api/src/coworkers/coworkers.service.spec.ts`; not run because `TEST_DATABASE_URL` is absent. Existing source test: `apps/api/src/coworkers/coworker-busy.integration.spec.ts` includes the zero-`CompanyMembership` acceptance assertion. | `7e05cd232e85a906f17759a46b9b3f17ae8c6602` | 2026-08-02 | HOLD |
| TC6 | “Linked businesses see company identity and occupied times — not client, service, staff, money or note details.” | “Nothing is shared”; “anonymous”; “complete privacy” | `apps/api/src/coworkers/coworker-busy.service.ts` (only `id`, `startAt`, `endAt`, `companyName`, `companyColor`); `apps/web/src/services/coworkersApi.ts` (strict schemas); `apps/web/src/components/calendar/CoworkerBusyCard.tsx` | Ran: API 62-test command above includes `coworker-privacy.spec.ts` (5 passed); `./node_modules/.bin/jest --no-cache --config apps/web/jest.config.ts --runInBand apps/web/src/components/calendar/CoworkerBusyCard.spec.tsx apps/web/src/components/coworkers/CoworkerListCard.spec.tsx apps/web/src/services/coworkersApi.spec.ts` — 17 passed | `7e05cd232e85a906f17759a46b9b3f17ae8c6602` | 2026-08-02 | PASS |
| TC7 | “Coworker occupied times are checked when a visit is saved and excluded from public booking availability.” | “No double-booking ever”; “real-time locking”; “calendar sync” | `apps/api/src/public-booking/public-booking.service.ts` (`calculateAvailability`, `lockGroupAndAssertIntervalFree`); `apps/api/src/coworkers/coworker-busy.service.ts` | Ran: `./node_modules/.bin/jest --no-cache --config apps/api/jest.config.ts --runInBand apps/api/src/public-booking/public-booking.service.spec.ts -t 'coworker'` — 4 passed (availability, default slots, overnight interval, DST); public privacy path also passed in the 62-test command | `7e05cd232e85a906f17759a46b9b3f17ae8c6602` | 2026-08-02 | PASS |
| TC8 | “Pinned client notes and visit notes stay with the client history.” | Attachments; tags; mentions; AI summaries; shared coworker notes | `apps/api/src/notes/notes.service.ts` (`getClientNotesFeed`, pinned and visit-note access); `apps/web/src/services/notesApi.ts`; `apps/web/src/components/clients/ClientUnifiedFeed.tsx`; `apps/web/src/components/clients/PinnedClientNoteCard.tsx`; `apps/web/src/pages/ClientDetailsPage.tsx` | Ran: API 62-test command above; `notes.service.spec.ts` covers company/staff visibility, pinned notes, and transaction visit notes | `7e05cd232e85a906f17759a46b9b3f17ae8c6602` | 2026-08-02 | PASS |
| TC9 | Existing F15 only: “Run more than one business from one login.” Do not force it into Collaboration. | One merged company workspace; shared finances | `apps/api/src/auth/auth.controller.ts` (`login`, `selectCompany`); `apps/api/src/auth/auth.service.ts` (multiple memberships route to `/select-company`); `apps/api/src/companies/companies.service.ts` (`findMine`) | No dedicated multi-company regression test was found in the current suite search. Source review is not enough to promote this pre-existing claim under this contract. | `7e05cd232e85a906f17759a46b9b3f17ae8c6602` | 2026-08-02 | HOLD |

## Canonical sentence disposition

| Proposed sentence | Required rows | TEAM0 disposition |
| --- | --- | --- |
| “Work solo. Add people when you need them.” | TC1 | Eligible — PASS |
| “Start with your own workspace. Add team access or connect a separate business only when it becomes useful.” | TC1, TC2, TC5 | **Blocked as written** — TC5 is HOLD. A later human-reviewed team-only fallback must not silently restore the coworker clause. |
| “Invite team members with Staff or Supervisor access. Keep schedules, time off and assigned services together.” | TC2, TC3 | Eligible — PASS |
| “Link a separate business that shares your room or equipment. You each see the other company’s occupied times — not client, service, staff, money or note details.” | TC5, TC6 | **Blocked** — TC5 is HOLD. No coworker panel, visual, label, or copy may ship while it remains held. |
| “Pinned client notes and visit notes stay with the client history.” | TC8 | Eligible only as one supporting line inside the workspace side of Collaboration — PASS |
| The proposed composite-mock summary mentioning a separate coworker business | TC5, TC6 | **Blocked** — TC5 is HOLD. |
| “Run more than one business from one login.” | TC9 | Not for this section, and HOLD in this contract. Retain existing F15 untouched; do not reuse it here. |

## Required implementation consequence

TEAM1 may preserve the solo-first title and the PASS team/notes boundaries in documentation, but it must not freeze, translate, or promote any TC5-dependent coworker wording. Under the binding visual contract, TEAM3 must use a one-zone team version if TC5 remains HOLD. TC8 does **not** justify a standalone Notes section: it remains workspace-side client-context proof only.
