# Team collaboration in Homepage Features — marketing and implementation plan

**Repository:** `/Users/valery/Sites/perelai-landing`

**Product source:** `/Users/valery/Sites/beauty-finance` (read-only evidence source)

**Created:** 2026-08-02

**Status:** planning only — this document changes no application or landing implementation

**Companion prompts:** `01_team_collaboration_features_llm_prompts_20260802.md`

---

## 0. Executive decision

Implement **one new homepage Features section about working with other people**. It must keep the
current solo-professional positioning and explain two product mechanisms without conflating them:

1. **Team members inside one workspace** — invited access with Staff or Supervisor roles, plus staff
   schedules, time off, and assigned services.
2. **Coworkers outside the workspace** — a link between separate businesses that share a physical
   space or equipment. They exchange company identity and occupied time only; client, service, staff,
   money, and note details remain inside each company.

The section belongs on the **homepage only**, after `Devices` and before `Setup`:

```text
Hero → Problem → Inbox → Booking → Money → Devices → Collaboration → Setup
```

This preserves the DVC decision that device reassurance follows the three core benefits. Team support
then appears beside setup as a progressive capability: the visitor may start solo and add access only
when it becomes relevant.

### Decision on Notes

**Do not create a separate full-height Notes feature section.** Notes are implemented and useful, but
they are not a differentiated purchasing argument by themselves. A separate section would:

- promote table-stakes functionality above the Operational Inbox and money model;
- lengthen an already substantial homepage and increase feature-list fatigue;
- repeat the existing `Problem` claim about “notes in three places” without adding a new reason to
  choose Perelai;
- risk making Perelai read like a generic CRM, a banned category frame.

Instead, use Notes once as a **supporting proof line inside the collaboration section**:

> Pinned client notes and visit notes stay with the client history.

This closes the note-fragmentation loop and explains a team handoff benefit without selling “notes” as
an isolated product. The visual may contain a compact pinned-note fragment inside the **workspace**
subpanel, but it must never place a note inside the coworker subpanel; that would imply cross-company
note sharing, which is false.

Reconsider a standalone Notes section only if at least one of these becomes true:

- five or more independent ICP research signals identify client-context handoff as a buying trigger;
- first-party interviews show Notes materially influence purchase or switching decisions;
- a genuinely differentiated notes capability ships, such as a product-backed collaboration mechanic;
- a case study or measurable customer outcome can provide proof.

Attachments, tags, mentions, AI summaries, and a company-wide activity feed do not currently satisfy
this condition because they are not shippable capabilities.

---

## 1. Why this is the marketing hierarchy

### 1.1 ICP constraint

The current product-marketing context targets independent US colorists and premium solo beauty
professionals. Their documented anxiety includes:

> “It’ll be built for salons with 12 chairs, not me.”

A headline such as “Manage your salon team” would therefore damage message match. The new section must
use a **solo-first progression frame**:

> Work solo. Add people when you need them.

The mechanism reduces two different anxieties:

- **identity anxiety:** “Is this too big for a solo professional?” — answer: no, team access is
  optional and appears late on the page;
- **access anxiety:** “If I add someone, will they see everything?” — answer with concrete roles and
  company boundaries, not vague “powerful permissions” language.

### 1.2 Applied marketing psychology

| Mechanism | Application | Failure mode to avoid |
|---|---|---|
| Progressive disclosure | Core solo outcomes remain above the collaboration section; team capability appears only after product fit is established. | Repositioning Perelai as salon-management software. |
| Ambiguity aversion | Name the two boundaries: workspace roles vs separate coworker businesses. | “Collaborate with anyone” or “one shared workspace” obscures what is shared. |
| Hick’s Law / feature overload | One collaboration section, no new nav item, no second Notes section, no additional CTA. | A grid of every staff, invite, coworker, note, and scheduling feature. |
| Pratfall/honesty effect | State that coworkers see occupied time but not work details. | Claiming “complete privacy” or “nothing is shared” when company name and time are shared. |
| Status-quo bias | “Start on your own” makes adoption compatible with today’s solo workflow. | Suggesting the visitor must configure a team before using the product. |

### 1.3 CRO role of the section

The section is **objection handling**, not a new conversion path. It must not add a button. The existing
page-level `Create workspace` CTA remains the sole primary action. The section should answer in one
scan:

- Can I use this alone? — yes.
- Can I add a team later? — yes, with Staff or Supervisor access.
- What if another independent business shares my room or equipment? — link occupied time only.
- Where does client context live? — with the client history.

---

## 2. Repository-grounded capability audit

Plans are context, not proof of current availability. Before any public copy is added, TEAM0 must
re-check the source and targeted tests at the app commit used by the landing generator.

### 2.1 Team inside a workspace

Evidence surfaces:

- `apps/api/src/staff/staff.service.ts`
- `apps/api/src/common/utils/staff-scope.util.ts`
- `apps/api/src/staff/staff.controller.ts`
- `apps/web/src/pages/StaffManagementPage.tsx`
- `apps/web/src/components/staff/StaffWorkspaceInviteSheet.tsx`
- `apps/web/src/components/staff/StaffAccessSheet.tsx`
- `.cursor/plans/phase_22_rbac_detailing_89e40333.plan.md`
- `.cursor/plans/phase1_rbac_invite_fixes_20260725.plan.md`

Current repository evidence supports these narrow facts, subject to TEAM0 verification:

- a workspace owner can add staff profiles;
- workspace access can be invited with Staff or Supervisor roles;
- Staff remains scoped to their own operational data;
- Supervisor has company-wide read scope but not owner-only staff writes;
- staff profiles have availability, time-off blocks, active state, and service associations;
- invite links support localized acceptance and require account creation or sign-in.

### 2.2 Coworkers between separate businesses

Evidence surfaces:

- `apps/api/src/coworkers/`
- `apps/api/prisma/schema.prisma` — `CoworkerGroup`, `CoworkerMembership`, `CoworkerInvite`
- `apps/web/src/components/coworkers/CoworkerListCard.tsx`
- `apps/web/src/components/coworkers/CoworkerInviteSheet.tsx`
- `apps/web/src/components/calendar/CoworkerBusyCard.tsx`
- `apps/web/src/pages/AcceptCoworkerInvitePage.tsx`
- `apps/api/src/public-booking/public-booking.service.ts`
- `.cursor/plans/roles_availability_coworker_master_20260725.plan.md`
- `.cursor/plans/phase3_coworker_shared_availability_20260725.plan.md`

Current repository evidence supports these narrow facts, subject to TEAM0 verification:

- coworker is a company-to-company relationship, not a workspace role;
- an owner deliberately accepts an invite; acceptance never grants a membership in the other company;
- connected companies see company name, colour, start, and end of occupied intervals;
- no client, service, staff, amount, payment state, note, title, or underlying transaction id crosses
  the company boundary;
- occupied intervals appear on the calendar and affect internal-save conflict checks and public
  booking availability.

Do not expose invite expiry, creator succession, caps, locking, database invariants, or error-code
mechanics on the homepage; these are implementation details, not marketing value.

### 2.3 Notes

Evidence surfaces:

- `apps/api/src/notes/`
- `apps/web/src/services/notesApi.ts`
- `apps/web/src/components/clients/ClientUnifiedFeed.tsx`
- `apps/web/src/components/clients/PinnedClientNoteCard.tsx`
- `apps/web/src/components/clients/ClientNoteTimelineItem.tsx`
- `apps/web/src/pages/ClientDetailsPage.tsx`
- `.cursor/plans/phase_27_notes_unified_feed_20260620.plan.md`

Current repository evidence supports these narrow facts, subject to TEAM0 verification:

- a client can have a pinned note;
- client timeline notes and visit notes appear in the client feed/history;
- note access follows company and client/staff visibility rules;
- legacy client descriptions and transaction comments remain compatibility fields.

The public copy must not imply attachments, tags, mentions, search, rich text, AI summarization,
global notes, or notes shared with coworker companies.

### 2.4 Claim rows fail independently

TEAM0 creates `docs/team-collaboration-claim-contract.md` with one row per claim and status
`PASS | HOLD`. A missing or failing coworker test holds only coworker copy and its visual subpanel; it
must not block the team-role block. A held Notes row removes the single supporting Notes line; it does
not block the collaboration section.

No later executor may turn `HOLD` into marketing copy because a plan says `status: completed`.

---

## 3. Public claim contract

These are the intended rows for the new claim contract. TEAM0 supplies verified commit paths and test
evidence before changing status to `PASS`.

| ID | Capability | Allowed public shape | Never say |
|---|---|---|---|
| TC1 | Optional team use | “Work solo. Add people when you need them.” | “Built for salons”, “requires a team”, “enterprise workforce management” |
| TC2 | Workspace roles | “Invite team members with Staff or Supervisor access.” | “Granular/custom permissions”, “SSO”, “enterprise permissions”, arbitrary roles |
| TC3 | Staff operations | “Keep schedules, time off and assigned services together.” | Payroll, timesheets, commissions, HR management |
| TC4 | Staff/Supervisor scope | “Give each person the access their role allows.” Use the detailed role matrix only in support copy. | “Staff can never see another client” without reproducing the exact visibility rules; “everyone sees everything” |
| TC5 | Coworker link | “Link a separate business that shares your space.” | Coworker as a workspace role, shared account, shared client list |
| TC6 | Coworker visibility | “Linked businesses see company identity and occupied times — not client, service, staff, money or note details.” | “Nothing is shared”, “anonymous” (company identity is visible), “complete privacy” |
| TC7 | Busy-time enforcement | “Coworker occupied times are checked when a visit is saved and excluded from public booking availability.” | “No double-booking ever”, “real-time locking”, “calendar sync” |
| TC8 | Client note context | “Pinned client notes and visit notes stay with the client history.” | Attachments, tags, mentions, AI summaries, shared coworker notes |
| TC9 | Multiple companies | Existing F15 only: “Run more than one business from one login.” Do not force it into this section. | One merged company workspace or shared finances |

### Required additions to existing marketing rails

TEAM1 updates, in a separate documentation-only diff before UI implementation:

1. `.cursor/plans/reference/messaging-and-claims.md`
   - retain F15 for staff and multi-company;
   - add a distinct Coworker shared-availability row based on TC5–TC7;
   - keep Notes inside F4 “Clients + history”, with TC8 as the allowed supporting line;
   - update Homepage message hierarchy to insert Collaboration after Device fit and before Setup;
   - add all new “Never say” constraints.
2. `.agents/product-marketing.md`
   - bump `v2` to the next version and prepend a dated changelog entry;
   - add collaboration as an optional, secondary capability without changing the solo ICP;
   - add “team capability does not mean salon-first” to objections/switching anxiety;
   - add the coworker boundary and Notes non-goals to shippable/not-shippable context.
3. `.cursor/plans/devices/00_device_distribution_marketing_plan_20260731.md` and
   `.cursor/plans/devices/01_device_distribution_llm_prompts_20260731.md`
   - amend only the homepage-order statements so they no longer reject the new section;
   - preserve the decision that `Devices` immediately follows `Money`.

Do not edit old app plans. They remain historical evidence.

---

## 4. Customer-research gate

Existing landing research contains strong evidence for double booking, money anxiety, and “this is
built for a 10-chair salon,” but no sufficient team/coworker Voice of Customer set. TEAM0 creates:

`docs/research/team-collaboration-intent-2026-08-02.md`

Minimum contents:

- repository search summary for first-party interviews, support, founder DMs, and analytics;
- at least five independent, recent proxy or first-party data points for the flagship ICP if research
  access is available;
- exact quote, source, date, context, profile signal, and theme for every item;
- separate tags for `adding staff`, `access anxiety`, `shared room/equipment`, `client-context
  handoff`, and `solo identity`;
- frequency × intensity synthesis with `High | Medium | Low` confidence;
- explicit sample-bias note;
- a final recommendation on whether the provided conservative copy can be made more customer-led.

If live research is unavailable, record that honestly. Do not invent quotes or convert app UI strings
into Voice of Customer. In that case the section still may use the conservative functional copy in
§5, but research-derived pain claims remain prohibited.

---

## 5. Copy contract

### 5.1 Recommended English canonical copy

Use this as the baseline unless TEAM0 research supplies better verified customer language and a human
review approves the change.

| Key | English |
|---|---|
| `home.collaboration.title` | **Work solo. Add people when you need them.** |
| `home.collaboration.body` | Start with your own workspace. Add team access or connect a separate business only when it becomes useful. |
| `home.collaboration.teamTitle` | Your team |
| `home.collaboration.teamBody` | Invite team members with Staff or Supervisor access. Keep schedules, time off and assigned services together. |
| `home.collaboration.coworkerTitle` | People who share your space |
| `home.collaboration.coworkerBody` | Link a separate business that shares your room or equipment. You each see the other company’s occupied times — not client, service, staff, money or note details. |
| `home.collaboration.notesDetail` | Pinned client notes and visit notes stay with the client history. |
| `home.collaboration.summary` | Example Perelai workspace showing team roles and client notes inside one business, plus an occupied-time block from a separate coworker business. |
| `home.collaboration.caption` | Example data |

The title is intentionally not “Built for teams.” The first words preserve the flagship solo identity.

### 5.2 Copy rules

- One section, one argument: Perelai can grow from solo work to coordinated work without erasing
  access boundaries.
- Feature → benefit bridges must remain concrete; do not use “streamline collaboration.”
- Use “workspace access,” not “membership.”
- Use “team member” in marketing copy; reserve raw `STAFF` and `SUPERVISOR` enum names for generated
  product-label fragments.
- Use “coworker” only for a separate business link. A staff member is not a coworker relationship.
- Do not say “shared calendar”: only occupied intervals cross the boundary.
- Do not say “private by default” or “complete privacy.” State the precise visible and hidden fields.
- No new CTA, FAQ item, meta-description sentence, navigation item, schema field, or OG claim is
  required for this section.
- No statistics, testimonials, counts, or customer logos.
- Preserve existing banned words and category boundaries: not CRM, accounting, payroll, marketplace,
  or enterprise permissions.

### 5.3 Localization gate

Add the `home.collaboration` object to all nine published locales:

`en`, `uk`, `pl`, `ru`, `es`, `fr`, `de`, `pt`, `tr`.

Workflow:

1. Freeze and human-review English.
2. Translate meaning, not word order.
3. Run a seven-sweep copy-editing pass per locale: clarity, voice, “so what,” proof, specificity,
   emotion without hype, and zero-risk/boundary clarity.
4. Confirm role labels match the generated app labels and no raw English remains.
5. Record reviewer/status per locale in `docs/team-collaboration-copy-audit.md`.

A locale with missing or unreviewed marketing copy blocks publication of the new section in that
locale. Do not silently fall back to English on a published localized route.

---

## 6. Information architecture and surface placement

### 6.1 Homepage only

Modify the homepage order to:

```tsx
<Hero />
<Problem />
<Inbox />
<Booking />
<Money />
<Devices />
<Collaboration />
<Setup />
<Not />
<NicheRouter />
<Faq />
<FinalCta />
```

Why after Devices:

- `Inbox`, `Booking`, and `Money` remain the three core purchase arguments;
- DVC’s device reassurance remains directly after `Money` and before migration/setup anxiety;
- collaboration is a progressive capability and naturally leads into the existing Setup question
  “your team if you have one”;
- the solo-first section arrives late enough not to imply a salon-only product.

### 6.2 Explicit non-surfaces

Do not add:

- a `/features/team`, `/team`, `/notes`, or `/collaboration` route;
- a header/footer link or new `#team` navigation target;
- a dedicated Notes homepage section;
- the full collaboration block to niche pages in this phase;
- team/coworker claims to pricing, `/install`, legal pages, sitemap, metadata, OG/Twitter, JSON-LD,
  or `llms.txt`;
- a second hero animation or carousel.

The existing `#features` anchor remains on `Inbox`; the collaboration section is part of the same
scroll narrative.

---

## 7. Visual contract

### 7.1 One composite, not a feature-card matrix

Create a live-DOM, theme-aware, localized product mock:

`components/mock/MockCollaborationWorkspace.tsx`

It should read as one app surface containing two clearly separated zones:

1. **Workspace zone**
   - two or three fictional team rows;
   - generated Staff/Supervisor role labels;
   - schedule/status cue;
   - one compact pinned-note or visit-note fragment;
   - no real email, phone, avatar photo, or client identifier.
2. **Coworker zone**
   - one fictional company name and neutral colour dot;
   - one `Occupied` calendar interval;
   - generated privacy-note label or equivalent precise visible cue;
   - no client, service, staff, amount, note, payment state, or transaction id.

The visual’s pre-attentive message is **boundary**, not “many features”: the workspace content is
rich; the coworker block is intentionally opaque.

The two-zone composition is allowed only while TC5–TC6 are `PASS`. If either row is `HOLD`, ship a
one-zone team version and remove coworker marketing keys, generated labels, and visual content from
the phase scope; do not render a disabled or “coming soon” coworker card. If TC8 is `HOLD`, remove the
note line and note fragment without blocking the remaining section. Record either reduction as a
follow-up in the claim contract rather than weakening the evidence gate.

### 7.2 Data and text sourcing

- Product UI labels come from `data/app-ui-strings.generated.json`.
- Synthetic names and example note content are deterministic, PII-free fixture data.
- Marketing explanation comes from `messages/<locale>/home.json`.
- Every visible app label must be declared in an exported key array:

```ts
export const TEAM_COLLABORATION_UI_KEYS = [
  "staff_management.header_title",
  "staff_management.status_active",
  "staff_management.working_hours",
  "staff_management.role_staff_title",
  "staff_management.role_supervisor_title",
  "coworker.list_title",
  "coworker.invite_privacy_note",
  "coworker.busy_block_title",
  "notes.pinned_title",
  "notes.visit_note",
] as const
```

If the final mock does not render one of these, remove it. If it renders another product label, add
the real app key; never hand-type the English label.

### 7.3 Accessibility

- The marketing section remains semantic and visible to assistive technology.
- The product mock has one `sr-only` summary outside its decorative subtree.
- The detailed mock subtree is `aria-hidden="true"`; it contains no focusable controls.
- Use one visible “Example data” caption exactly once.
- Do not expose a fake table of employees or invented note content to a screen reader.
- Respect reduced-motion through the existing `Reveal` behavior; add no new autonomous motion.

### 7.4 Responsive and theme behavior

- 390px: copy first, mock second; no horizontal page scroll; cards remain readable.
- 768px: zones may stack; no compressed role pills.
- 1024px+: two-column section, with copy and composite mock balanced.
- 1360/1600px: preserve the page’s `max-w-6xl`; do not grow into a dashboard wall.
- Light and dark use semantic tokens only.

### 7.5 Reject on sight

Reject the deliverable if it contains any of these:

- stock people, AI-generated people, screenshots, device frames, or browser chrome;
- a grid of unrelated feature cards;
- gradients/glows added as decoration rather than existing brand tokens;
- `#hex`, raw inline RGB/RGBA, or app-specific copied colour literals;
- hand-typed product labels;
- a coworker card containing a client, service, amount, staff name, or note;
- real-looking email/phone/contact data;
- `Date.now()`, random values, or non-deterministic build output;
- `"use client"` on the section or mock merely for analytics;
- a new dependency, charting library, carousel, tabs, or interaction that exists only in the mock;
- more than one `Example data` caption.

---

## 8. Generated app-string extension

TEAM2 extends `scripts/generate-niche-catalog.mjs`:

1. Add the final `TEAM_COLLABORATION_UI_KEYS` to `FIXED_UI_KEYS`.
2. Add common-namespace keys such as `coworker.*` and `notes.*` to `COMMON_NS_KEYS`; profile-specific
   `staff_management.*` continues to resolve from the template profile namespace.
3. Do not bulk-copy locale namespaces. Keep the allowlist curated.
4. Continue reading translations from **app `HEAD`**, not its working tree.
5. Never set `ALLOW_DIRTY_SOURCE=1` for this work.
6. Regenerate both generated files only from a clean app repository.
7. Add a negative fixture test proving removal of one team key from any locale makes
   `pnpm verify:niches` fail.
8. In TEAM3, after `MockCollaborationWorkspace.tsx` exists, export
   `TEAM_COLLABORATION_UI_KEYS` from that component and register that exact file/export pair in
   `scripts/verify-niches.mjs::DECLARED_KEY_SOURCES`. Do not add a stub component or temporary
   declaration merely to make TEAM2 pass.

Known preflight condition on 2026-08-02: the sibling app repository contains unrelated uncommitted
locale changes. TEAM2 must stop and report until the source is clean; it must not edit, stash, reset,
or commit the app repo on the landing task’s authority.

The landing must still build later when the sibling app is absent, using committed generated data.

---

## 9. Implementation architecture and file ownership

### 9.1 Expected new files

- `components/homepage/collaboration.tsx`
- `components/mock/MockCollaborationWorkspace.tsx`
- `components/analytics/collaboration-section-tracker.tsx`
- `tests/collaboration-feature.test.ts`
- `docs/team-collaboration-claim-contract.md`
- `docs/team-collaboration-copy-audit.md`
- `docs/research/team-collaboration-intent-2026-08-02.md`

### 9.2 Expected modified files

- `components/homepage/homepage.tsx`
- `messages/{en,uk,pl,ru,es,fr,de,pt,tr}/home.json`
- `scripts/generate-niche-catalog.mjs`
- `scripts/verify-niches.mjs`
- `tests/verify-niches.test.ts` or the most relevant existing generator test
- `lib/analytics.ts`
- `tests/analytics.test.ts`
- `docs/tracking-plan.md`
- `.agents/product-marketing.md`
- `.cursor/plans/reference/messaging-and-claims.md`
- the two DVC plans, limited to their homepage-order statements

The executor must re-resolve paths at implementation time. If the architecture changed, update the
plan handoff rather than creating a duplicate component beside a renamed equivalent.

### 9.3 Server/client boundary

`Collaboration` and `MockCollaborationWorkspace` are server components. If analytics is approved,
wrap the section in a tiny client-only `CollaborationSectionTracker` using `IntersectionObserver`.
Do not pull the mock, generated UI-string catalog, or localization dataset into the client graph for
one visibility event.

---

## 10. Analytics contract

One optional event is justified because it answers a concrete placement question: **do homepage
visitors reach the collaboration objection before leaving?**

```ts
interface CollaborationMessageViewedEvent {
  name: "collaboration_message_viewed"
  properties: {
    surface: "home"
    locale: PublishedLocale
  }
}
```

Trigger:

- section reaches at least 50% visibility;
- once per page session, key `collaboration_message_viewed:home`;
- no team size, role, note content, device information, viewport, user agent, free text, or visitor
  input;
- no click event because the section has no CTA.

Decision use:

- compare aggregate section exposures with aggregate homepage views to understand reach;
- if reach is consistently low, investigate page length/placement before changing copy;
- do not infer conversion causality from this event alone;
- do not launch an A/B test until traffic and a pre-registered sample-size plan make it meaningful.

If the current approved tracking policy no longer permits a new event, omit the tracker and document
the decision; analytics must not block the content section.

---

## 11. Phased execution plan

### TEAM0 — Evidence, research, and claim contract

**Skills:** `product-marketing`, `customer-research`, `marketing-psychology`, `cro`

**Writes:** documentation only

**Depends on:** nothing

Actions:

1. Record landing and app `git status --short` and commits; preserve all unrelated changes.
2. Verify the sources in §2 and run the smallest relevant staff/coworker/notes tests when their test
   environment is available.
3. Write the claim contract with one row per TC claim, evidence path, test, date, app commit, and
   `PASS | HOLD`.
4. Create the research gap/synthesis document under §4.
5. Reconfirm that Notes stays supporting copy, not a section.

Gate:

- no application source modified;
- every public sentence planned in §5 maps to a `PASS` row or is removed;
- unavailable tests/research are recorded, never inferred;
- coworker and Notes can be held independently.

### TEAM1 — Marketing rails, IA, and copy freeze

**Skills:** `product-marketing`, `site-architecture`, `copywriting`, `copy-editing`, `cro`

**Writes:** reference/marketing documents only

**Depends on:** TEAM0

Actions:

1. Update messaging-and-claims and product-marketing context as specified in §3.
2. Amend DVC order statements without changing device claims.
3. Finalize English copy against the claim contract and research confidence.
4. Run the Seven Sweeps and a four-perspective panel: conversion copywriter, UX writer, solo ICP,
   and skeptical privacy reviewer.
5. Record rejected headline alternatives and why they were rejected.

Gate:

- solo ICP unchanged;
- `Devices` still immediately follows `Money`;
- no standalone Notes section or new page/nav item;
- all copy claims trace to `PASS` rows;
- English copy marked human-approved before translation begins.

### TEAM2 — Generated app labels and drift guard

**Skills:** `product-marketing`, `copy-editing`

**Writes:** generator, generated data, generator tests

**Depends on:** TEAM1 and a clean app source tree

Actions and gate are defined in §8 steps 1–7. This phase does not create React components and does
not add the `DECLARED_KEY_SOURCES` entry before its source file exists.

### TEAM3 — Presentational collaboration mock

**Skills:** `cro`, `marketing-psychology`, `copy-editing`

**Writes:** mock component, declared-key verifier registration, and focused tests

**Depends on:** TEAM2

Actions:

1. Build the deterministic two-zone mock from §7.
2. Use only generated product labels and synthetic data.
3. Make the coworker data boundary visible before explanatory copy is read.
4. Export `TEAM_COLLABORATION_UI_KEYS` from the component and register the existing file/export in
   `scripts/verify-niches.mjs::DECLARED_KEY_SOURCES`.
5. Add server-render, determinism, semantic-token, accessibility, drift-guard, and privacy-negative
   tests.

Gate:

- no client directive, routing, fetch, state, event handler, focusable element, or dependency;
- exact one caption and one semantic summary;
- no forbidden field in coworker subtree;
- all nine locales render without missing product labels.

### TEAM4 — Homepage section and nine-locale copy

**Skills:** `copywriting`, `copy-editing`, `cro`, `site-architecture`

**Writes:** homepage section, homepage composition, locale files, section tests

**Depends on:** TEAM1 and TEAM3

Actions:

1. Add the `Collaboration` server component using existing `Reveal`, typography, widths, and semantic
   tokens.
2. Insert it after `Devices` and before `Setup`.
3. Add reviewed copy to all nine locales.
4. Add no CTA, link, form, tab, animation, route, metadata, schema, or FAQ.
5. Update order and localization tests.

Gate:

- section order exact;
- `HeroShowcase`, niche pages, pricing, install, header, and footer unchanged;
- no English fallback on non-English routes;
- every locale has a recorded human-review state;
- `pnpm check:uniqueness` remains green.

### TEAM5 — Privacy-safe visibility measurement

**Skills:** `analytics`

**Writes:** analytics contract, tiny tracker, tests, tracking documentation

**Depends on:** TEAM4

Actions:

1. Add the fixed event in §10 if still approved.
2. Use the existing once-per-page-session helper and 50% observer pattern.
3. Keep the section and mock outside the client bundle.
4. Update the current tracking plan without contradictory provider/status statements.

Gate:

- one event on threshold crossing, none below it, no duplicate after re-entry;
- no PII/free text/fingerprint fields;
- no dead event type;
- no additional CTA taxonomy.

### TEAM6 — Visual, accessibility, copy, and performance audit

**Skills:** `cro`, `copy-editing`, `analytics`

**Writes:** fixes within TEAM2–TEAM5 file scope and an evidence document

**Depends on:** TEAM5

Required matrix:

- widths: 390, 768, 1024, 1360, 1600;
- themes: light and dark;
- languages: English plus German for long Latin strings, Ukrainian for Cyrillic, and one of
  Portuguese/Turkish; automated key/render checks still cover all nine;
- reduced motion on;
- keyboard and screen-reader tree inspection.

Performance gate:

- no new client chunk containing `MockCollaborationWorkspace` or the generated app-label catalog;
- no layout shift from the section;
- mobile Lighthouse Performance remains at or above the accepted project baseline and does not
  regress materially from the pre-change capture;
- no new image request or dependency.

### TEAM7 — Final cumulative review

**Skills:** `product-marketing`, `site-architecture`, `copy-editing`, `cro`, `analytics`

**Writes:** only fixes found by review and final evidence/status updates

**Depends on:** TEAM0–TEAM6 all green

Review the cumulative diff, not only the last phase. Confirm all Definition of Done items and that no
held claim leaked into visible copy.

---

## 12. Automated and manual gates

Run on the repository-supported Node version:

```bash
git status --short
pnpm typecheck
pnpm lint
pnpm test
pnpm verify:niches
pnpm build
git diff --check
```

Additional tests must cover:

- exact homepage order including `Devices → Collaboration → Setup`;
- every `home.collaboration.*` key in every published locale;
- every declared app UI key in generated strings for all nine locales;
- verifier failure when a collaboration UI key is missing;
- server-only source guard for section and mock;
- no hardcoded hex/raw inline RGB/RGBA in new visual files;
- no `Date.now`, random input, or locale-dependent nondeterminism;
- exactly one Example data caption;
- summary outside `aria-hidden`, decorative subtree inert;
- coworker visual contains none of the forbidden detail labels/fields;
- Notes label appears only inside the workspace side and no standalone Notes section is composed;
- analytics threshold, deduplication, enum, and privacy contract;
- no new package dependency.

Manual audit must answer:

1. Does the title still speak to a solo professional first?
2. Can a two-second scan distinguish team access from coworker busy-time sharing?
3. Could any sentence imply that coworkers see clients, notes, money, or services?
4. Does the Notes fragment read as client context rather than a separate product category?
5. Is the page noticeably longer or more repetitive?
6. Does the section add a second conversion action? It must not.
7. Do all languages preserve the access boundary rather than soften it into vague privacy language?

---

## 13. Risk register

| Risk | Mitigation | Blocking? |
|---|---|---|
| Team copy weakens solo positioning | Solo-first headline; late placement; no “salon management” terminology. | Yes |
| Staff and coworker mechanisms get conflated | Two labeled zones; claim contract; privacy-negative tests. | Yes |
| Notes makes section overcrowded | One supporting line and compact workspace-only fragment; no separate section. | Yes |
| App plan status is stale | Source/test evidence at exact app commit; independent `PASS/HOLD` rows. | Yes for affected row only |
| Dirty sibling app breaks provenance | Generator already rejects dirty source; never use override. | TEAM2 only |
| Product UI labels drift | Curated generator allowlist + declared-key verifier + negative fixture. | Yes |
| Marketing translations are semantically wrong | English freeze, nine-locale human copy audit, no fallback publication. | Yes |
| Section drags large catalog into client bundle | Server components + tiny tracker island + build-manifest audit. | Yes |
| Extra analytics becomes vanity collection | One event tied to placement/reach decision; omit if policy disallows. | No |
| Page becomes too long | No CTA/FAQ/nav/new route; audit scan length and visual rhythm. | Yes |

---

## 14. Definition of Done

- [ ] One collaboration section exists on the homepage after `Devices` and before `Setup`.
- [ ] The title is solo-first; the flagship ICP and main category are unchanged.
- [ ] Workspace team access and separate-company coworker sharing are visibly and verbally distinct.
- [ ] Every visible claim maps to a `PASS` claim-contract row at the recorded app commit.
- [ ] Coworker copy states both what crosses the boundary and what does not.
- [ ] Notes is a supporting workspace-only proof line, not a standalone section or coworker field.
- [ ] No new route, nav item, CTA, FAQ, meta/OG/schema/llms claim, or niche-page block was added.
- [ ] Product labels are generated from a clean app `HEAD` and verified in all nine locales.
- [ ] Marketing copy is present and human-reviewed in all nine published locales.
- [ ] Mock is deterministic, server-rendered, PII-free, theme-aware, responsive, and accessible.
- [ ] No new dependency, image request, carousel, tabs, or autonomous motion was introduced.
- [ ] Optional analytics event is fixed-enum, deduplicated, privacy-safe, documented, and decision-bound.
- [ ] Visual matrix and performance comparison are recorded.
- [ ] `typecheck`, `lint`, tests, `verify:niches`, build, and `git diff --check` are green.
- [ ] Existing unrelated worktree changes remain untouched.

---

## 15. Marketing skills used and deliberately not used

| Skill | Material contribution |
|---|---|
| `product-marketing` | Preserves the solo ICP and updates the shared claim/positioning context. |
| `customer-research` | Prevents product-authored assumptions from becoming fabricated customer pain. |
| `site-architecture` | Fixes homepage placement and prevents unnecessary routes/navigation. |
| `cro` | Keeps one CTA hierarchy and limits feature overload. |
| `copywriting` | Defines benefit-led, claim-safe canonical copy. |
| `copy-editing` | Supplies the seven-sweep and multilingual publication gate. |
| `marketing-psychology` | Applies progressive disclosure, ambiguity reduction, and solo-identity protection. |
| `analytics` | Adds only a decision-bound visibility measure, not broad tracking. |

Deliberately not used:

- `ab-testing` — no validated traffic/sample-size basis; do not create a low-power experiment;
- `image` — the product mock must be live DOM sourced from product strings, not generated imagery;
- `seo-audit`, `ai-seo`, `schema`, `programmatic-seo` — no new route or search-intent surface;
- `signup`, `onboarding` — no CTA or post-click flow changes;
- `aso`, `launch`, `ads`, `social`, `competitors`, `offers`, and channel skills — outside this
  homepage feature-hierarchy task.
