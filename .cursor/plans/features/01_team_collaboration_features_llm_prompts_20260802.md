# Team collaboration in Homepage Features — execution prompts for simpler LLMs

**Repository:** `/Users/valery/Sites/perelai-landing`

**Product source:** `/Users/valery/Sites/beauty-finance` (read-only evidence source)

**Created:** 2026-08-02

**Status:** planning only — these prompts must be executed in separate, sequential sessions

**Binding plan:** `00_team_collaboration_features_marketing_plan_20260802.md`

---

## 0. How to use this document

Run exactly one phase prompt per LLM session, in order: `TEAM0` through `TEAM7`. Do not ask one
smaller model to implement the whole plan. Every session begins with the universal preamble below,
then appends exactly one phase prompt.

The main plan is the source of truth. This document makes the work easier to execute; it does not
relax any claim, privacy, copy, accessibility, or verification rule in the main plan.

Phase status values:

- `READY`: every dependency and evidence row needed by the phase is available;
- `HOLD`: one or more claims or source conditions are unavailable; record the exact blocker and stop
  only the affected work;
- `PASS`: the phase output and all of its gates are complete;
- `FAIL`: a gate failed; do not begin the next phase.

Never mark a phase `PASS` because the code compiles. Its phase-specific evidence must also be
complete.

---

## 1. Universal preamble — paste before every phase prompt

```text
You are executing exactly one phase of an approved plan in the repository:
/Users/valery/Sites/perelai-landing

The sibling product repository is:
/Users/valery/Sites/beauty-finance

The product repository is a READ-ONLY evidence and localization source for this task. Do not edit,
stash, reset, checkout, commit, format, or otherwise mutate it.

Before any work:
1. Read this complete binding plan:
   /Users/valery/Sites/perelai-landing/.cursor/plans/features/00_team_collaboration_features_marketing_plan_20260802.md
2. Read the complete SKILL.md files named by this phase. Do not rely on remembered summaries.
3. Read repository instructions such as AGENTS.md if present.
4. Run `git status --short` in both repositories and record each HEAD commit.
5. Treat every existing changed or untracked file as user-owned. Do not overwrite, revert, stage,
   format, or fold unrelated changes into your work.
6. Re-resolve referenced paths with repository search. If a path changed, use the current equivalent
   and record the mapping in the handoff.

Non-negotiable product model:
- A team member belongs inside one company workspace and may have Staff or Supervisor access.
- A coworker relationship connects two separate businesses that share space or equipment.
- A coworker is never a Role or CompanyMembership and does not share the client list.
- Across the coworker boundary, only company identity and occupied time may be represented.
- Client, service, staff, money, payment, note, title, and raw transaction identifiers must not appear
  in the coworker surface.
- Notes remain a supporting proof line inside the workspace side of the collaboration section. Do not
  create a separate Notes homepage section.

Non-negotiable marketing/IA decisions:
- Preserve the solo-professional ICP and the solo-first headline frame. Use “Work solo. Add people
  when you need them.” as the canonical baseline unless TEAM0 evidence and explicit human approval
  justify a safer replacement.
- Add one homepage collaboration section after Devices and before Setup.
- Devices must remain immediately after Money.
- Add no route, header/footer navigation item, CTA, form, tab, carousel, FAQ item, schema, metadata,
  OG/Twitter claim, llms.txt claim, pricing claim, install claim, or niche-page block.
- Do not call Perelai a CRM, accounting system, payroll system, marketplace, or enterprise permission
  platform.

Implementation discipline:
- Execute only the current phase and only its declared file scope.
- Use apply_patch for manual file edits.
- Do not install dependencies.
- Do not use `ALLOW_DIRTY_SOURCE=1`.
- Never fabricate Voice of Customer quotes, capability evidence, screenshots, metrics, testimonials,
  or review status.
- A claim marked HOLD must not appear in visible copy.
- Product UI labels must come from the generated app string catalog; do not hand-type their English
  values in a mock component.
- Preserve server components. A tiny client tracker is allowed only in TEAM5.
- If a phase requires a clean sibling app source and the app is dirty, stop that phase and report the
  exact dirty files. Do not clean them yourself.

At the end:
1. Run the phase-specific gates.
2. Run `git diff --check` for files touched in the phase.
3. Review `git diff --stat` and the full scoped diff.
4. Report: phase status; files changed; claims used/held; commands and results; manual checks;
   unrelated dirty files preserved; risks and exact next phase.
5. Do not declare the complete feature finished before TEAM7.
```

---

## 2. TEAM0 prompt — evidence, research, and claim contract

Append this after the universal preamble:

```text
Execute TEAM0 only: establish product evidence and research confidence. Do not implement UI, copy in
locale files, generator changes, or analytics.

Load and follow these skills completely:
- /Users/valery/.agents/skills/product-marketing/SKILL.md
- /Users/valery/.agents/skills/customer-research/SKILL.md
- /Users/valery/.agents/skills/marketing-psychology/SKILL.md
- /Users/valery/.agents/skills/cro/SKILL.md

Allowed writes:
- docs/team-collaboration-claim-contract.md
- docs/research/team-collaboration-intent-2026-08-02.md
- no source code, app messages, or existing marketing rail changes

Required evidence inspection:
- /Users/valery/Sites/beauty-finance/.cursor/plans/roles_availability_coworker_master_20260725.plan.md
- /Users/valery/Sites/beauty-finance/.cursor/plans/phase_22_rbac_detailing_89e40333.plan.md
- /Users/valery/Sites/beauty-finance/.cursor/plans/phase1_rbac_invite_fixes_20260725.plan.md
- /Users/valery/Sites/beauty-finance/.cursor/plans/phase_27_notes_unified_feed_20260620.plan.md
- current staff, coworker, booking-availability, calendar, and notes implementation and tests
- current landing .agents/product-marketing.md and messaging-and-claims.md
- current landing research documents; search first-party interviews/support/founder notes if they are
  locally available

Tasks:
1. Create one claim row for TC1–TC9 from §3 of the binding plan.
2. For every row record: exact allowed public wording, prohibited wording, implementation path, test
   path or command, app commit, verification date, and PASS or HOLD.
3. Keep independent failures independent. Missing coworker evidence must not hold team claims; missing
   notes evidence must not hold the rest of the section.
4. Verify current source, not only old plan checkboxes. Historical TODO states are not proof.
5. If practical in the local environment, run the smallest relevant existing app tests. If they need
   unavailable services, record that instead of changing app configuration.
6. Build the research document required by §4. For every real signal capture exact quote, source,
   date, context, ICP/profile indication, and theme. Separate `adding staff`, `access anxiety`, `shared
   room/equipment`, `client-context handoff`, and `solo identity`.
7. Synthesize frequency × intensity and confidence. State sample bias.
8. If five independent relevant signals are unavailable, say so explicitly. Retain only conservative
   functional copy; do not write invented pain language.
9. Confirm the decision: no standalone Notes feature section. Notes may appear only as client-context
   continuity inside the workspace side of Collaboration.

Reject the phase if:
- a plan checkbox is treated as implementation proof;
- Staff/Supervisor and coworker are described as one permission system;
- the coworker visible/hidden boundary is vague;
- a research quote lacks provenance;
- a HOLD claim is silently promoted to PASS;
- any code or product repository file changes.

Gate:
- both documents exist and are internally consistent;
- every proposed canonical sentence maps to PASS evidence or is explicitly blocked;
- no research-derived headline replaces the conservative title without five independent signals and
  human approval;
- git diff contains documentation only.

Return a concise TEAM0 handoff and name TEAM1 as the next phase only if TEAM0 is PASS.
```

---

## 3. TEAM1 prompt — marketing rails, IA, and English copy freeze

Append this after the universal preamble:

```text
Execute TEAM1 only: update marketing reference documents, freeze the English copy contract, and
amend the homepage order documentation. Do not implement React, translations, generated strings, or
analytics.

Prerequisite:
- TEAM0 is PASS.
- Read docs/team-collaboration-claim-contract.md and the research synthesis before writing copy.

Load and follow these skills completely:
- /Users/valery/.agents/skills/product-marketing/SKILL.md
- /Users/valery/.agents/skills/site-architecture/SKILL.md
- /Users/valery/.agents/skills/copywriting/SKILL.md
- /Users/valery/.agents/skills/copy-editing/SKILL.md
- /Users/valery/.agents/skills/cro/SKILL.md

Allowed writes:
- .agents/product-marketing.md
- .cursor/plans/reference/messaging-and-claims.md
- .cursor/plans/devices/00_device_distribution_marketing_plan_20260731.md
- .cursor/plans/devices/01_device_distribution_llm_prompts_20260731.md
- docs/team-collaboration-copy-audit.md
- docs/team-collaboration-claim-contract.md only to record an evidence correction, never to loosen a
  claim

Tasks:
1. In messaging-and-claims, retain F15 for staff and multi-company; add a separate coworker
   shared-availability claim; retain Notes under clients/history; add all forbidden formulations.
2. Update the homepage hierarchy to:
   Hero → Problem → Inbox → Booking → Money → Devices → Collaboration → Setup → remaining sections.
3. In the two DVC plan documents, modify only statements that would reject Collaboration between
   Devices and Setup. Preserve the binding rule that Devices immediately follows Money.
4. Update product-marketing context as a versioned document. Keep the flagship ICP solo. Describe
   collaboration as optional progression, not a repositioning to salons.
5. Freeze the canonical English keys from §5.1 of the binding plan unless TEAM0 contains stronger,
   verified customer wording and a human has explicitly approved it.
6. Run the copywriting framework and the Seven Sweeps from the skills. Record concrete edits, not
   generic “reviewed” claims.
7. Audit from four perspectives: conversion copywriter, UX writer, solo ICP, skeptical privacy
   reviewer. Record disagreements and resolution.
8. Record rejected headline options, including “Built for teams” and “Manage your salon team,” and
   why they harm message match.
9. Record explicit decisions not to add a route, nav item, CTA, FAQ, metadata, schema, niche block, or
   Notes section.

Copy rules:
- “team member” is marketing language; Staff and Supervisor are product role labels.
- “coworker” means a separate business link only.
- never say “shared calendar”; say occupied times.
- never say “nothing is shared,” because company identity and occupied time are shared.
- never say “complete privacy,” “granular permissions,” “payroll,” “timesheets,” “commissions,” or
  “no double-booking ever.”
- no vague “streamline collaboration” language.

Gate:
- every visible claim maps to a PASS row;
- English copy is marked human-approved or the phase remains HOLD before translation;
- solo ICP, Devices placement, and Notes decision remain unchanged;
- changes are documentation only;
- no unrelated DVC content changed.

Return TEAM1 status. TEAM2 may begin only when English is approved and the sibling app source is
clean.
```

---

## 4. TEAM2 prompt — generated product labels and drift guard

Append this after the universal preamble:

```text
Execute TEAM2 only: extend the generated app-label catalog and verification guard. Do not create or
edit React homepage/mock components, marketing translations, or analytics.

Prerequisites:
- TEAM1 is PASS and English copy is human-approved.
- The sibling app repository is clean. If `git status --short` there is non-empty, set TEAM2 to HOLD,
  list the exact dirty files, change nothing, and stop. Never use ALLOW_DIRTY_SOURCE=1 and never clean
  the sibling repository.

Load and follow these skills completely:
- /Users/valery/.agents/skills/product-marketing/SKILL.md
- /Users/valery/.agents/skills/copy-editing/SKILL.md

Allowed writes:
- scripts/generate-niche-catalog.mjs
- data/app-ui-strings.generated.json
- data/niche-catalog.generated.json only if the existing generator intentionally updates it
- tests/verify-niches.test.ts or the current generator/verifier test equivalent

Use the final visible label set, not a speculative superset. Start from these candidates and remove
unused keys before phase completion:
- staff_management.header_title
- staff_management.status_active
- staff_management.working_hours
- staff_management.role_staff_title
- staff_management.role_supervisor_title
- coworker.list_title
- coworker.invite_privacy_note
- coworker.busy_block_title
- notes.pinned_title
- notes.visit_note

Tasks:
1. Confirm every candidate key exists at app HEAD in all nine published locales and identify its
   namespace/profile resolution.
2. Add the final curated list to FIXED_UI_KEYS. Extend COMMON_NS_KEYS only for true common-namespace
   keys; preserve profile-specific resolution for staff_management keys.
3. Regenerate from app HEAD using the repository's normal command. Do not read dirty working-tree
   locale content.
4. Add a negative test that removes one required team/coworker/note key from one locale fixture and
   proves verification fails.
5. Prove deterministic generation by running it twice and confirming no second diff.
6. Confirm landing build data remains committed and usable without the sibling repository.
7. Do not add a DECLARED_KEY_SOURCES entry yet: its required component does not exist until TEAM3,
   and the current verifier correctly rejects missing declared source files. Do not create a stub or
   temporary key module to bypass that contract.

Reject the phase if:
- the app repository is mutated;
- ALLOW_DIRTY_SOURCE is used;
- all locale namespaces are bulk-copied;
- a label is hand-translated in landing source;
- a missing locale silently falls back to English;
- verification is weakened to accommodate the new mock;
- generated output changes between two identical runs.

Required commands:
- the repository's generator command
- pnpm verify:niches
- the focused generator/verifier tests
- pnpm typecheck
- git diff --check

Return TEAM2 status, final key list, namespaces, generated-file diff summary, determinism result, and
the exact next file contract for TEAM3.
```

---

## 5. TEAM3 prompt — deterministic collaboration product mock

Append this after the universal preamble:

```text
Execute TEAM3 only: build the presentational, server-rendered collaboration mock and its focused
tests. Do not add the homepage section, locale marketing copy, analytics, routes, or navigation.

Prerequisite:
- TEAM2 is PASS and the generated catalog contains all final labels for all nine locales.

Load and follow these skills completely:
- /Users/valery/.agents/skills/cro/SKILL.md
- /Users/valery/.agents/skills/marketing-psychology/SKILL.md
- /Users/valery/.agents/skills/copy-editing/SKILL.md

Allowed writes:
- components/mock/MockCollaborationWorkspace.tsx
- scripts/verify-niches.mjs, limited to registering the new existing component/export
- tests/collaboration-feature.test.ts, limited to mock tests in this phase
- tests/verify-niches.test.ts or the current verifier test, limited to the declared-key guard

Read the final claim-contract status first. When TC5–TC6 are PASS, build one composite product
surface with two zones:
A. Workspace zone: deterministic fictional team rows, generated Staff/Supervisor labels, a
   schedule/status cue, and one small generated pinned-note or visit-note label with neutral example
   content.
B. Coworker zone: a fictional company name, neutral color dot, and one generated occupied-time cue.
   It must expose no client, service, staff, amount, payment, note, title, or raw transaction id.

If TC5 or TC6 is HOLD, build only the workspace zone and remove coworker keys/content from the phase;
do not render a disabled or coming-soon card. If TC8 is HOLD, remove the note fragment and its keys.
Record the reduced shape in the claim contract handoff rather than weakening a claim.

The visual argument is boundary: rich internal workspace information versus deliberately opaque
coworker occupied time. It is not a feature-card grid.

Technical constraints:
- server component; no `use client`;
- no state, effect, event handler, routing, fetch, focusable control, tabs, carousel, animation, new
  package, screenshot, device frame, browser chrome, stock/AI person, or avatar photo;
- product labels are read from data/app-ui-strings.generated.json using existing typed helpers;
- every rendered product key is present in TEAM_COLLABORATION_UI_KEYS, and every declared key is
  rendered or removed;
- TEAM_COLLABORATION_UI_KEYS is exported from MockCollaborationWorkspace.tsx as an `as const` array,
  and that existing file/export pair is registered in DECLARED_KEY_SOURCES;
- synthetic names/content are deterministic, obviously fictional, and contain no email or phone;
- semantic Tailwind/design tokens only; no raw hex/RGB/RGBA or copied product color literal;
- one sr-only semantic summary outside an aria-hidden decorative subtree;
- zero focusable nodes inside the decorative subtree;
- exactly one visible “Example data” caption, supplied later by marketing locale copy if that is the
  existing component pattern;
- do not expose invented employee/note rows to assistive technology.

Tests must prove:
- server rendering works in every published locale;
- all declared generated keys resolve in every locale;
- no client directive, interactivity, routing, fetch, random value, Date.now, or raw color;
- repeated renders are deterministic;
- exactly one semantic summary and one caption contract;
- the coworker subtree contains none of the forbidden private fields or labels;
- the mock contains no real-looking email/phone data;
- verify-niches fails when one declared collaboration key is missing from one generated locale.

Visually inspect at 390 and 1024 in light and dark if the test harness can render the isolated mock.
Do not expand into the full TEAM6 matrix yet.

Required commands:
- focused collaboration/mock tests
- pnpm verify:niches
- pnpm typecheck
- pnpm lint
- git diff --check

Return TEAM3 status, component contract, labels used, privacy-negative test evidence, and any visual
limitations for TEAM4.
```

---

## 6. TEAM4 prompt — homepage section and nine-locale copy

Append this after the universal preamble:

```text
Execute TEAM4 only: create the homepage Collaboration section, place it in the approved narrative,
and add reviewed marketing copy to all nine locales. Do not add analytics yet.

Prerequisites:
- TEAM1 and TEAM3 are PASS.
- English copy in docs/team-collaboration-copy-audit.md is human-approved.
- Every claim used is PASS in docs/team-collaboration-claim-contract.md.

Load and follow these skills completely:
- /Users/valery/.agents/skills/copywriting/SKILL.md
- /Users/valery/.agents/skills/copy-editing/SKILL.md
- /Users/valery/.agents/skills/cro/SKILL.md
- /Users/valery/.agents/skills/site-architecture/SKILL.md

Allowed writes:
- components/homepage/collaboration.tsx
- components/homepage/homepage.tsx
- messages/en/home.json
- messages/uk/home.json
- messages/pl/home.json
- messages/ru/home.json
- messages/es/home.json
- messages/fr/home.json
- messages/de/home.json
- messages/pt/home.json
- messages/tr/home.json
- docs/team-collaboration-copy-audit.md
- tests/collaboration-feature.test.ts
- the narrow existing homepage-order/localization test if a separate file already owns that contract

Use this approved key shape:
- home.collaboration.title
- home.collaboration.body
- home.collaboration.teamTitle
- home.collaboration.teamBody
- home.collaboration.coworkerTitle
- home.collaboration.coworkerBody
- home.collaboration.notesDetail
- home.collaboration.summary
- home.collaboration.caption

Tasks:
1. Build Collaboration as a server component using the existing Reveal, typography, spacing,
   max-width, and semantic color patterns from neighboring homepage sections.
2. Compose the approved marketing copy with MockCollaborationWorkspace. Copy first and mock second at
   390px; balanced columns at 1024px+.
3. Insert exactly after Devices and before Setup. Keep Devices immediately after Money. Leave the
   existing #features anchor on Inbox.
4. Translate meaning, not word order, into all nine locale files. Do not use runtime English fallback.
5. For every locale, perform and record Seven Sweeps: clarity, voice/tone, so-what, proof, specificity,
   emotion without hype, and zero-risk/boundary wording.
6. Verify that Staff/Supervisor product labels remain generated app labels while surrounding marketing
   text comes from home.json.
7. Keep Notes as one supporting line and at most one compact workspace visual fragment.
8. Add tests for section order, key parity, no forbidden CTA/link/route behavior, and all-locale render.

Do not modify:
- Hero or HeroShowcase;
- niche pages or their mocks;
- Pricing, Install, Header, Footer, FAQ, metadata, schema, OG/Twitter, llms.txt, or sitemap;
- generated app labels unless a real TEAM2 defect is discovered; if so, stop and return to TEAM2.

Reject the phase if:
- there is a dedicated Notes section;
- Collaboration appears before Money or between Money and Devices;
- a nav link, CTA, button, form, tab, or carousel is added;
- marketing copy calls a coworker a team role or says shared calendar;
- untranslated English appears on a non-English route;
- a published locale lacks human review status;
- the section/mock becomes a client component.

Required commands:
- focused collaboration and homepage-order tests
- pnpm check:uniqueness
- pnpm verify:niches
- pnpm typecheck
- pnpm lint
- pnpm test
- pnpm build
- git diff --check

Return TEAM4 status, exact homepage order, locale-review matrix, tests, and any held locale. Do not
continue to TEAM5 if one published locale is unreviewed.
```

---

## 7. TEAM5 prompt — privacy-safe visibility analytics

Append this after the universal preamble:

```text
Execute TEAM5 only: decide against the current tracking policy whether to add one section-visibility
event. Do not change copy, visual composition, routes, CTAs, or add device/user fingerprinting.

Prerequisite:
- TEAM4 is PASS.

Load and follow this skill completely:
- /Users/valery/.agents/skills/analytics/SKILL.md

Allowed writes if the event is approved:
- lib/analytics.ts
- components/analytics/collaboration-section-tracker.tsx
- components/homepage/collaboration.tsx, only to mount the tiny tracker boundary
- tests/analytics.test.ts
- tests/collaboration-feature.test.ts only for server/client-boundary assertions
- docs/tracking-plan.md

First inspect the current analytics architecture, consent behavior, naming rules, once-per-session
helper, existing IntersectionObserver trackers, and tracking-plan status. Do not assume a provider or
deployment state from an old plan.

If approved, implement exactly:
event name: collaboration_message_viewed
properties:
- surface: the fixed enum value "home"
- locale: PublishedLocale
trigger:
- at least 50% section visibility
- once per page session with key collaboration_message_viewed:home

No other properties. Specifically prohibit team size, roles, note content, company/client data,
viewport, screen resolution, user agent, browser version, device model, display mode, installed state,
free text, URL query values, or visitor input.

Do not add:
- click/CTA events, because the section has no CTA;
- an experiment assignment;
- scroll-depth events for other sections;
- analytics inside MockCollaborationWorkspace;
- a client directive on the whole Collaboration or mock component.

Tests:
- zero events below 50%;
- one event on threshold crossing;
- no duplicate on re-entry during the same page session;
- correct home surface and valid locale;
- no forbidden properties in type/event construction;
- the heavy mock/generated catalog remains outside the client tracker graph.

If policy disallows the event, document the omission and reasoning in the current tracking plan and
leave source code unchanged. That is a valid PASS because analytics is optional.

Required commands when code changes:
- focused analytics tests
- pnpm typecheck
- pnpm lint
- pnpm test
- pnpm build
- git diff --check

Return TEAM5 status, add/omit decision, policy evidence, payload, deduplication proof, and client-bundle
boundary result.
```

---

## 8. TEAM6 prompt — visual, accessibility, copy, and performance audit

Append this after the universal preamble:

```text
Execute TEAM6 only: audit the implemented collaboration section and fix defects within the existing
TEAM2–TEAM5 file scope. Do not add capabilities, surfaces, copy claims, dependencies, or redesign
unrelated homepage sections.

Prerequisites:
- TEAM0–TEAM5 are PASS, including a documented analytics omission if TEAM5 intentionally omitted it.

Load and follow these skills completely:
- /Users/valery/.agents/skills/cro/SKILL.md
- /Users/valery/.agents/skills/copy-editing/SKILL.md
- /Users/valery/.agents/skills/analytics/SKILL.md

Create or update a dated evidence section in docs/team-collaboration-copy-audit.md. Record concrete
results; do not write “looks good” without viewport/theme/locale evidence.

Required visual matrix:
- widths: 390, 768, 1024, 1360, 1600
- themes: light and dark
- languages: en, de, uk, and the longer of pt/tr after inspection
- reduced motion: enabled

Automated locale/render checks still cover en, uk, pl, ru, es, fr, de, pt, tr.

At every matrix point inspect:
- no horizontal page scroll or clipped text;
- copy precedes the mock on narrow screens;
- role labels and privacy copy wrap without compressed or overlapping pills;
- the two business boundaries are visually obvious before detailed reading;
- coworker block remains information-poor and contains no private field;
- one Example data caption only;
- no false interactivity or focusable mock element;
- semantic colors and sufficient contrast in light/dark;
- no collision with adjacent Devices/Setup sections;
- section does not read as salon-first or as a generic feature-card grid.

Accessibility inspection:
- semantic heading order;
- one useful sr-only mock summary;
- decorative subtree aria-hidden;
- zero focusable elements inside aria-hidden content;
- keyboard flow unchanged;
- reduced-motion behavior inherited correctly;
- screen-reader tree does not announce fictional employee/note rows.

Copy audit:
- rerun the Seven Sweeps for all nine locales;
- Staff/Supervisor and coworker remain distinct;
- visible/hidden coworker fields are precise;
- Notes appears only as supporting client-history context;
- no English fallback, hype, unsupported promise, or category drift.

Performance audit:
- capture the accepted pre/post mobile Lighthouse or project-equivalent baseline;
- no new image request, dependency, or autonomous motion;
- no layout shift attributable to the section;
- no new client chunk containing MockCollaborationWorkspace or the generated label catalog;
- explain any material Lighthouse regression instead of changing the threshold after the fact.

Reject on sight:
- screenshots, device/browser chrome, stock or AI people, gradient decoration, raw colors, hand-typed
  product labels, random data, client-side mock, CTA/tab/carousel, or coworker private detail.

Required cumulative commands:
- pnpm typecheck
- pnpm lint
- pnpm test
- pnpm check:uniqueness
- pnpm verify:niches
- pnpm build
- git diff --check

Return TEAM6 status with a compact matrix table, accessibility findings, copy-review status per locale,
performance comparison, fixes made, and unresolved blockers. TEAM7 requires every blocking row PASS.
```

---

## 9. TEAM7 prompt — cumulative final review

Append this after the universal preamble:

```text
Execute TEAM7 only: review the entire TEAM0–TEAM6 cumulative diff against the binding plan and release
criteria. Do not assume earlier phase summaries are correct; inspect the current repository.

Prerequisite:
- TEAM0–TEAM6 each report PASS.

Load and follow these skills completely:
- /Users/valery/.agents/skills/product-marketing/SKILL.md
- /Users/valery/.agents/skills/site-architecture/SKILL.md
- /Users/valery/.agents/skills/copy-editing/SKILL.md
- /Users/valery/.agents/skills/cro/SKILL.md
- /Users/valery/.agents/skills/analytics/SKILL.md

Review the cumulative diff from the recorded pre-TEAM0 landing commit. Separate pre-existing user
changes from plan-owned changes. Fix only defects inside the approved file scope.

Claim audit:
- every visible statement maps to a current PASS row;
- no HOLD row leaked into any locale;
- staff, supervisor, multiple-company, and coworker mechanisms are not conflated;
- coworker visibility lists what is shared and what is hidden accurately;
- Notes is supporting proof only and has no standalone section;
- no unsupported payroll, timesheet, commission, custom-permission, privacy, double-booking, or
  shared-calendar promise.

IA/surface audit:
- homepage order is Hero → Problem → Inbox → Booking → Money → Devices → Collaboration → Setup;
- Devices still immediately follows Money;
- no new route, nav item, CTA, FAQ, niche block, metadata, schema, OG/Twitter, llms.txt, pricing, or
  install claim;
- HeroShowcase and unrelated mocks are unchanged.

Visual/technical audit:
- one deterministic server-rendered two-zone mock;
- generated product labels and verify-niches drift guard cover all nine locales;
- coworker zone has no private field;
- accessible semantic summary and decorative tree contract hold;
- semantic tokens, no new dependency/image/client bundle;
- all TEAM6 matrix and performance evidence exists.

Analytics audit:
- either the single approved visibility event is fully typed, documented, deduplicated, private, and
  tested, or its omission is explicitly documented;
- no extra event or fingerprint field exists.

Run all final gates from §12 and verify `git diff --check`. Review generated-data determinism and the
complete locale copy audit.

Final output must include:
- SHIP or NO-SHIP;
- phase table TEAM0–TEAM7;
- claims PASS/HOLD table;
- files changed grouped by documentation, generator, UI, localization, analytics, tests;
- all command results;
- visual/accessibility/performance evidence links;
- unrelated user changes preserved;
- any remaining blocker with exact owner and required action.

Do not declare SHIP if a published locale is unreviewed, a claim is HOLD but visible, the sibling app
working tree was used to generate labels, or any final gate is red.
```

---

## 10. Standard phase handoff template

Every phase should end with this structure:

```markdown
## <PHASE> handoff

**Status:** PASS | HOLD | FAIL
**Landing base commit:** <sha>
**App evidence commit:** <sha>

### Files changed
- <path>: <why>

### Claims
- PASS: <IDs>
- HOLD: <IDs and exact reason>

### Verification
- `<command>` — PASS | FAIL | NOT RUN: <result/reason>

### Manual evidence
- <viewport/theme/locale/research/copy evidence required by this phase>

### Preserved unrelated changes
- <repo and path, or “none observed”>

### Risks or blockers
- <exact blocker and owner, or “none”>

### Next phase
- <phase>; allowed only after <dependency/gate>
```

Do not include a generic “all done” sentence. The next executor must be able to reconstruct what was
verified, what was not, and which claim boundaries remain binding.
