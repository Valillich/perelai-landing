# Team Collaboration Copy Audit

**Repository:** `/Users/valery/Sites/perelai-landing`
**Phase:** TEAM1 — marketing rails, IA, and English copy freeze
**Created:** 2026-08-02
**Landing HEAD at start of phase:** `727567db1e2ec6cd7b273b882182af0f5eb028b8`
**App HEAD (read-only evidence source):** `7e05cd232e85a906f17759a46b9b3f17ae8c6602` at phase start; refreshed to `98c8414672562ad8e29befa9a7af0209fcc1163a` on 2026-08-02 after the owner committed the four pre-existing locale fixes — see `docs/team-collaboration-claim-contract.md` "Evidence refresh"
**Governing plan:** `.cursor/plans/features/00_team_collaboration_features_marketing_plan_20260802.md` §3, §5, §6
**Inputs:** `docs/team-collaboration-claim-contract.md`, `docs/research/team-collaboration-intent-2026-08-02.md`
**Skills loaded, in order:** `product-marketing`, `site-architecture`, `copywriting`, `copy-editing`, `cro`

---

## 0. Phase status

| Item | State |
|---|---|
| Documentation changes | **Complete** |
| English copy | **Frozen and human-approved** — repository owner, 2026-08-02, approved as written (§2) |
| Translation (TEAM2+ / TEAM4) | **Unblocked** — sibling app worktree is clean at `98c84146` and re-verified (§14) |
| Coworker copy, keys, labels, visual zone | **HELD** on TC5 |
| Overall TEAM1 | **PASS** |

### Approval record

| Item | Value |
|---|---|
| Scope of approval | The seven FROZEN keys in §2, exactly as written |
| Approver | Repository owner |
| Date | 2026-08-02 |
| Decision | Approve as written — no wording change requested; the §7 experiment candidates were not adopted |
| Not covered | The two HELD coworker keys, which remain outside this approval and outside translation |

Any later change to a frozen string voids this approval for that string and requires a new dated
entry here before it may be translated.

**Second, independent confirmation (2026-08-02, same day, follow-up chat turn):** *"я утверждаю
frozen English keys"* — "I approve the frozen English keys," with coworker keys explicitly excluded
and reaffirmed as HELD. Recorded because two separately-triggered approvals (one via structured
question, one via direct verbatim statement) make the gate self-evidently satisfied without relying on
tool-call semantics alone.

This phase changed documentation only. No React component, translation file, generated string,
analytics event, route, test, or application source was touched.

### Artifacts produced

| File | Change |
|---|---|
| `.cursor/plans/reference/messaging-and-claims.md` | §2.1 F4 gained the notes supporting line + never-say list; §2.2 F15 gained the narrow team shapes and never-say additions; **F25** (coworker shared availability) added and held; a **Collaboration gate** table added after §2.2; §4.1 gained 8 collaboration bans; §4.2 gained 4 terminology rows; §7 inserted **Collaboration** as row 7, former rows 7–11 → 8–12, plus binding order constraints. |
| `.agents/product-marketing.md` | v2 → **v3**. Target Audience gained the "ICP did not change" note; 3 objection rows added; Switching-anxiety gained the identity/access split; Customer Language gained team/coworker words and 3 glossary rows; a *Working with other people* capability table added; Notes and Collaboration non-goals added; changelog entry prepended. |
| `.cursor/plans/devices/00_device_distribution_marketing_plan_20260731.md` | Homepage-order statements only (§5.4 rule 4, §6.1 map, §6.3 + rationale note, §6.5 surface map, DVC5 requirement) rewritten from "after Money and before Setup" to "**immediately after Money**", plus a dated amendment note in the header. |
| `.cursor/plans/devices/01_device_distribution_llm_prompts_20260731.md` | Same narrow change in the DVC1B and DVC5 prompts, plus the DVC5 gate line and a dated header note. |
| `docs/team-collaboration-copy-audit.md` | This file. |
| `docs/team-collaboration-claim-contract.md` | **Unchanged.** No evidence correction was found and no claim was loosened. |

**Tooling note.** The phase brief specifies `apply_patch` for manual edits. No `apply_patch` tool was
available in this environment; edits were made with the exact-string replacement editor, which is the
equivalent operation. No file was rewritten wholesale except this new document.

**Path re-resolution.** Every path named by the binding plan resolved at its stated location. The
homepage composition is `components/homepage/homepage.tsx` and currently renders
`Hero → Problem → Inbox → Booking → Money → Devices → Setup → Not → NicheRouter → Faq → FinalCta`, which
matches the plan's §6.1 premise exactly. No path mapping was required.

---

## 1. The constraint that shaped this phase

TEAM0 returned **TC5 = `HOLD`**. Its focused integration evidence
(`apps/api/src/coworkers/coworkers.service.spec.ts`) could not be executed because `TEST_DATABASE_URL`
is absent — the mechanism was not found missing, it was found *unverified*. TC6 and TC7 are `PASS`,
but they describe the boundary *of* a link that TC5 has not cleared, so they cannot carry a coworker
sentence on their own.

Consequence for TEAM1, and it is not negotiable: **no coworker wording is frozen, translated, or
promoted.** Under the binding plan §7.1, TEAM3 ships a one-zone team version while TC5 is held. This
audit therefore freezes a **team-only** copy set and records the coworker keys as held rather than
deleting them, so a later phase can restore them from one place after a new dated verification entry.

TC9 (multi-company) is also `HOLD`. F15's existing "run more than one business from one login" stays
exactly where it is in the ledger and is **not** imported into this section — which the binding plan
independently required regardless of status.

---

## 2. Frozen English copy contract

Namespace `home.collaboration`. Baseline is §5.1 of the binding plan. **Minimum delta** was the
governing rule: a key changes only where a `HOLD` row forces it.

| Key | Frozen English | Status | Delta from plan §5.1 |
|---|---|---|---|
| `home.collaboration.title` | **Work solo. Add people when you need them.** | FROZEN | none |
| `home.collaboration.body` | Start with your own workspace. Add team access only when it becomes useful. | FROZEN | TC5 clause removed — see §2.1 |
| `home.collaboration.teamTitle` | Your team | FROZEN | none |
| `home.collaboration.teamBody` | Invite team members with Staff or Supervisor access. Keep schedules, time off and assigned services together. | FROZEN | none |
| `home.collaboration.coworkerTitle` | *(People who share your space)* | **HELD — TC5** | not frozen, not translated, not rendered |
| `home.collaboration.coworkerBody` | *(Link a separate business… occupied times…)* | **HELD — TC5** | not frozen, not translated, not rendered |
| `home.collaboration.notesDetail` | Pinned client notes and visit notes stay with the client history. | FROZEN | none |
| `home.collaboration.summary` | Example Perelai workspace showing team roles, schedules and a pinned client note inside one business. | FROZEN | rewritten for one zone — see §2.2 |
| `home.collaboration.caption` | Example data | FROZEN | none |

Held keys are recorded here in italics as *reference to the plan's wording*, not as approved copy.
They must not be copied into `messages/en/home.json` or any locale file.

### 2.1 Why `body` changed

Plan §5.1 reads: *"Start with your own workspace. Add team access or connect a separate business only
when it becomes useful."* The claim contract's canonical-sentence table blocks it as written and warns
that a team-only fallback "must not silently restore the coworker clause". The clause was removed and
nothing was added in its place:

> Start with your own workspace. Add team access only when it becomes useful.

Both remaining halves map to `PASS` rows (TC1, TC2). The sentence still does its whole job — it names
the starting state and marks the addition as optional and later.

### 2.2 Why `summary` changed

The plan's summary describes a two-zone mock including "an occupied-time block from a separate coworker
business". That is a TC5 claim delivered to assistive technology, which is not a loophole. Rewritten to
describe only what a one-zone mock will contain:

> Example Perelai workspace showing team roles, schedules and a pinned client note inside one business.

If TC5 later clears, this key is re-frozen from the plan's original wording in the same change that
restores the coworker keys — not edited piecemeal.

### 2.3 Deliberately not frozen

- **TC4's sentence, "Give each person the access their role allows."** It is `PASS` and it answers the
  strongest objection in the section, but §5.1 does not include it and TC4 itself reserves the detailed
  role matrix for support copy. Adding a sentence the approved baseline does not contain is a copy
  change, and no human has approved one. See the panel disagreement in §6.3.
- **Any FAQ answer, meta description, OG/Twitter line, `llms.txt` line, schema field, or niche-page
  variant.** §8 records these as explicit non-decisions.

---

## 3. Claim register — one row per frozen visible string

| Frozen string | Claim rows | Contract status | Surface |
|---|---|---|---|
| "Work solo. Add people when you need them." | TC1 | `PASS` | Section title |
| "Start with your own workspace." | TC1 | `PASS` | Section body |
| "Add team access only when it becomes useful." | TC1, TC2 | `PASS` | Section body |
| "Your team" | TC2 | `PASS` | Workspace zone label |
| "Invite team members with Staff or Supervisor access." | TC2 | `PASS` | Workspace zone |
| "Keep schedules, time off and assigned services together." | TC3 | `PASS` | Workspace zone |
| "Pinned client notes and visit notes stay with the client history." | TC8 | `PASS` | Workspace zone, once |
| "Example Perelai workspace showing team roles, schedules and a pinned client note inside one business." | TC2, TC3, TC8 | `PASS` | `sr-only` summary |
| "Example data" | — (existing site-wide mock caption convention, `product_mock_kit_20260728.md` §5) | n/a | Caption, exactly once |

**Every claim-bearing frozen string maps to a `PASS` row (8 of the 9 rows above; "Example data" is a
convention, not a claim). No `HOLD` row appears in frozen copy.**

`Staff` and `Supervisor` appear above as *marketing prose* naming the two access levels, which is TC2's
literal allowed wording. The **product role labels rendered inside the mock** are a different thing:
they come from the generated app string catalog (`staff_management.role_staff_title`,
`staff_management.role_supervisor_title`) in TEAM2/TEAM3 and are never hand-typed.

---

## 4. Copywriting framework applied

**Page type:** homepage, section 7 of 12. **Primary action:** unchanged — the page-level
`Create your free workspace`. This section adds none.

**Section job (CRO):** objection handling, not a new purchase argument. In one scan it must answer:

| Question in the visitor's head | Answered by |
|---|---|
| Can I use this alone? | Title, first two words |
| Can I add someone later? | Body + `teamBody` first sentence |
| What will they be able to do? | `teamBody`, via the two named access levels |
| Where does client context live? | `notesDetail` |

*"What if another independent business shares my room?"* is the fourth question in the plan's §1.3
list. It is **unanswered in this release** because TC5 is held. That is a known, recorded gap, not an
oversight — see §9.

**One idea per section:** Perelai grows from solo work to shared work without erasing access
boundaries. Every frozen line advances that one idea.

**Feature → benefit bridges.** Each is concrete, per the plan's ban on "streamline collaboration":

| Feature | Bridge |
|---|---|
| Staff / Supervisor access levels | you decide what someone can reach *before* they log in, not after |
| Schedules, time off, assigned services in one place | the person's availability and the services they actually do stay attached to them, so booking does not need a second source |
| Pinned and visit notes on the client | whoever picks up the client has the context, and it lives with the client rather than in a notes app |

The bridges are recorded here as *editorial reasoning*, not as additional copy. Writing them into the
section would triple its length and break the "one collaboration section, no feature grid" rule.

**Headline formula used:** concession → offer ("{do the thing you already do}. {addition} when
{condition}."). It is the same shape as a status-quo-compatible promise, which is the correct move for
a buyer whose loudest recorded anxiety is *"It'll be built for salons with 12 chairs, not me."*

---

## 5. The Seven Sweeps

Run over the nine-key set. Each entry records what was actually changed, or what was considered and
deliberately not changed, with the reason.

### Sweep 1 — Clarity

- **Changed.** `body` — removed "or connect a separate business", which forced one sentence to carry
  two mechanisms the rest of the section then had to disentangle. The remaining sentence has one
  subject.
- **Changed.** `summary` — removed the coworker clause; the summary now describes one zone, matching
  what a screen reader will actually encounter.
- **Considered, kept.** "Work solo." as the opening of a section about adding people. The apparent
  contradiction is the point: the concession lands before the offer. Reversing it ("Add people when you
  need them. Work solo.") puts the salon frame first and was rejected.
- **Checked.** No pronoun in the set lacks a referent. "them" in the title refers to "people" in the
  same sentence.

### Sweep 2 — Voice and tone

- **Checked, no change.** Read aloud against `.agents/product-marketing.md` Brand Voice (direct,
  honest, calm, precise). Four short declaratives, no adjectives doing a noun's work, no exclamation
  points, no hedges.
- **Checked.** "team member" is used in prose; `STAFF`/`SUPERVISOR` enum names appear nowhere. This is
  the §4.2 terminology rule and it holds across all frozen keys.
- **Considered, rejected.** Warming `teamBody` to "Bring someone in with Staff or Supervisor access."
  "Bring someone in" is friendlier but softens the access boundary into a social gesture, which is the
  opposite of this section's job.

### Sweep 3 — So what

- **Considered, rejected.** `teamBody` sentence 2 ("Keep schedules, time off and assigned services
  together") is a feature list with an implicit benefit. The honest fix is "…together, so you are not
  checking someone's availability in a second place." Rejected: it adds a clause to an approved
  baseline with no human approval, and the section's length budget is the reason the plan forbids a
  feature grid. **Logged as an experiment candidate in §7.**
- **Answered in place.** `notesDetail` passes the *so what* test as written — "stay with the client
  history" *is* the consequence, not the feature.

### Sweep 4 — Prove it

- **Checked.** The section carries no statistic, testimonial, count, logo, or customer claim. Correct:
  §5.2 of the plan bans them and the product is pre-commercial.
- **Checked.** Every claim's proof is the claim contract, not the copy. Of the nine listed rows in §3,
  eight are claim-bearing text and trace to a `PASS` row; the ninth, "Example data," is the site-wide
  mock-caption convention and carries no `TC` claim status (`n/a`), so it is not counted toward the
  claim gate.
- **Checked.** The research file supplies **zero** first-party Perelai quotes. No line in the frozen
  set asserts a customer pain, frequency, or motivation. The proxy signals in
  `docs/research/team-collaboration-intent-2026-08-02.md` were used only to *confirm the existing
  guardrail*, never converted into pain language.

### Sweep 5 — Specificity

- **Flagged, not changed.** "only when it becomes useful" is the vaguest phrase in the set. Specific
  alternatives were drafted — "when someone else starts working with you", "when you hire your first
  assistant" — and rejected: the first narrows an optional capability into a hiring scenario, the
  second invents an ICP milestone the research does not support. A third, "nothing to set up for a
  team you don't have yet", was rejected as **factually risky**: onboarding for templates with
  `requiresStaff: true` does include a staff step, so the sentence would be wrong for part of the
  catalog. Baseline wording retained. **Logged as an experiment candidate in §7.**
- **Confirmed specific.** "Staff or Supervisor" — two named levels beats "roles" or "permissions", and
  it is exactly what the product has. "schedules, time off and assigned services" — three named
  objects beats "staff management". "Pinned client notes and visit notes" — two named note types beats
  "notes".

### Sweep 6 — Heightened emotion

- **Checked, restrained on purpose.** The emotion this section serves is *relief from a
  disqualification*, and the register that produces it is calm precision, not vividness. A "before"
  paint ("you shouldn't have to move systems the day you hire someone") would import a pain the
  research cannot support — one proxy signal, Low confidence, and no Perelai customer behind it.
- **Kept.** The one emotional beat in the set is the title's first word: **"solo"** appears before
  anything about teams, which is the identity reassurance doing the work.

### Sweep 7 — Zero risk

- **Checked.** The section is objection handling and correctly has **no CTA**, so there is no
  CTA-adjacent friction to remove. The page's single primary action is unaffected.
- **Checked.** The largest residual risk in the *held* half is over-claimed privacy. The frozen set
  contains none of "nothing is shared", "complete privacy", "private by default", "anonymous",
  "shared calendar", "no double-booking ever", "granular permissions", "payroll", "timesheets",
  "commissions". All nine are now hard bans in `messaging-and-claims.md` §4.1/§4.2.
- **Checked.** `notesDetail` is the only client-data sentence and it is bound to the workspace zone.
  It must never render inside a coworker surface — restated in the ledger, the product-marketing
  context, and §8 below.

### Loop-back

Sweeps 1→7 were re-run after the `body` and `summary` edits. The two edits are deletions and one
rewrite of an accessibility string; neither introduced a new claim, a tone shift, or an unproven
statement.

---

## 6. Four-perspective panel

Scored 1–10 on the frozen set. The panel is a review instrument, not a customer sample.

| Reviewer | Score | Verdict |
|---|---|---|
| Conversion copywriter | 7 | Clear and honest; two lines leave conversion value on the table. |
| UX writer | 8 | Scans in one pass; one structural question raised by the held zone. |
| Solo ICP (independent colorist, solo suite) | 8 | Does not trip the "12 chairs" reflex. Would prefer the section shorter still. |
| Skeptical privacy reviewer | 9 | Nothing here overstates. Most of the risk left with the held coworker half. |
| **Average** | **8.0** | Meets the copy-editing skill's 7+ / 8-average bar. |

### 6.1 Conversion copywriter

Accepts the title as the strongest asset in the set — concession-then-offer, and "solo" first is
correct message match. Two objections: `body`'s "only when it becomes useful" is unmeasurable, and
`teamBody`'s second sentence stops at the feature. Both are recorded as experiment candidates rather
than edits (§7), because §5.1 is the approved baseline.

### 6.2 UX writer

The set scans top-to-bottom with no back-tracking, and the four keys map cleanly to four visual slots.
Raised the one genuinely new question: **with the coworker zone held, is a "Your team" sub-label still
doing work when there is only one zone?** See §6.3.

Also confirmed: exactly one "Example data" caption, one `sr-only` summary, and no string that only
makes sense next to a second panel — which is what would have broken if the two-zone copy had been
frozen and then half-rendered.

### 6.3 Recorded disagreements and their resolution

**Disagreement 1 — UX writer vs. solo ICP: keep or drop "Your team" in a one-zone release.**
UX writer: a lone sub-label above the only block is redundant chrome. Solo ICP: the label is the thing
that tells me this block is about *inside my workspace*, not about the person renting the next chair —
drop it and the boundary becomes implicit.
**Resolution:** the key stays **frozen**. Whether it renders as a visible sub-heading or as a zone
label inside the mock is a presentation decision for TEAM3/TEAM4, not a copy decision, and it must be
revisited when TC5 clears and a second zone returns. Recorded as a TEAM3 input.

**Disagreement 2 — conversion copywriter vs. skeptical privacy reviewer: add TC4's "Give each person
the access their role allows."**
Copywriter: it is `PASS`, it directly answers the loudest access objection, and the section currently
names the levels without saying what choosing one *does*. Privacy reviewer: readers compress that
sentence into an absolute ("so Staff can never see another client"), which is the exact reading TC4's
own never-say column forbids, and the section has no room for the qualifying detail that would make it
safe.
**Resolution:** **not added.** TC4 reserves the role matrix for support copy, and §5.1 does not contain
the line. The copywriter's underlying point is real and is logged in §7 as the highest-value future
test, to be run with proper qualifying copy and a human approver.

**Disagreement 3 — conversion copywriter vs. solo ICP: section length.**
Copywriter wanted the *so what* bridge from Sweep 3 added. Solo ICP wanted the section shorter than it
already is, on the grounds that length itself signals "this product is for bigger businesses".
**Resolution:** neither. Length unchanged. The solo ICP's concern is the one the plan's risk register
rates blocking ("Team copy weakens solo positioning"), so ties break toward brevity.

### 6.4 Skeptical privacy reviewer, standing conditions

1. `notesDetail` renders on the workspace side only, ever.
2. No frozen string may be paired at render time with a company name, colour dot, or occupied-time
   block belonging to another business while TC5 is held.
3. The `sr-only` summary is the accessibility surface of the *rendered* mock; if TEAM3's mock content
   changes, the summary is re-frozen, not adjusted informally.

---

## 7. Experiment candidates (not shipped, not approved)

Recorded so the reasoning is not lost. None may ship without a `PASS` row, a human approver, and — for
anything measured — the `ab-testing` traffic bar the plan §15 says is not currently met.

| # | Candidate | Rationale | Blocked by |
|---|---|---|---|
| E1 | Append to `teamBody`: "…together, so you are not checking someone's availability in a second place." | Sweep 3 *so what* gap | Changes an approved baseline; length budget |
| E2 | Replace "only when it becomes useful" with a concrete trigger | Sweep 5 specificity gap | Every concrete trigger drafted either narrowed the capability or asserted something unproven |
| E3 | Add TC4's "Give each person the access their role allows." with qualifying support copy | Panel disagreement 2 | Needs support-copy surface + human approval |
| E4 | Restore the coworker zone and its two keys | The section's fourth question is currently unanswered | **TC5** |

---

## 8. Explicit decisions recorded as "no"

Each was considered and rejected for this feature. A later phase that wants one of these must reopen
it here first.

| Not added | Why |
|---|---|
| A route — `/team`, `/features/team`, `/collaboration`, `/notes` | No search-intent surface, no traffic evidence, and a route would need its own metadata, canonical, `hreflang`, sitemap entry and nine translations to answer one objection that a homepage section answers in four lines. |
| A header or footer navigation item, or a `#team` anchor | Header nav is at its 4–7 item working limit and every item added competes with the primary CTA. `#features` stays on Inbox; collaboration is part of the same scroll narrative. |
| A CTA, button, or link of any kind | The section is objection handling. The page keeps exactly one primary action (`Create your free workspace`). A second action here would split intent at the point where the visitor is closest to Setup. |
| A form, tab, carousel, or second hero animation | Nothing in the section needs progressive disclosure; the plan's visual contract requires one static composition. |
| An FAQ item | FAQ 2 already says setup covers "your team if you have one". A team FAQ row would repeat the section 300px below it and lengthen an already long page. |
| Metadata, meta description sentence, OG or Twitter claim | The homepage's promise is clients/bookings/cash flow. Collaboration is section 7 of 12; promoting it into the page's social preview misrepresents the product's frame. |
| JSON-LD / schema fields | No new entity, offer, or FAQ exists to describe. `SoftwareApplication` is unchanged. |
| An `llms.txt` claim | Same reason as metadata, plus the entity-consistency rule in the device plan §9.5 — the machine-readable summary must not carry a claim the page frames as secondary. |
| A pricing claim or an `/install` claim | Neither surface is in scope; no billing exists to gate a team tier, and collaboration has no device dimension. |
| A niche-page block | Niche pages already carry three mock surfaces and a measured uniqueness budget (`check-uniqueness.mjs`). A shared collaboration block would be find-and-replace text on every niche page. |
| **A standalone Notes homepage section** | Reconfirmed. Notes are table stakes, already referenced by the Problem section ("notes in three places"), and a section would promote them above the Inbox and money model and push Perelai toward a CRM frame. Notes appear once, as one supporting line inside the workspace side. The plan §0 reopening conditions are unmet and unchanged. |

---

## 9. Known gaps carried into later phases

1. **The shared-space question is unanswered.** A visitor who rents a chair beside another independent
   business gets no answer from this release. This is TC5's consequence and must not be papered over
   with vaguer wording that implies coworker support without claiming it.
2. **No first-party research exists.** Five directional proxy signals, all Low confidence, zero Perelai
   customers. The frozen copy is functional, not customer-led, and says nothing about what customers
   feel. Any future headline change needs the first-party set described in the research file's *Next
   research needed*.
3. **"only when it becomes useful"** remains the weakest phrase in the set (§5, Sweep 5).

---

## 10. Localization status

Nine published locales: `en`, `uk`, `pl`, `ru`, `es`, `fr`, `de`, `pt`, `tr`.

| Locale | Status | Reviewer | Date |
|---|---|---|---|
| en | **Frozen — human-approved** | Repository owner | 2026-08-02 |
| uk | **Translated — Seven Sweeps passed & human-reviewed** | Human reviewer (TEAM4) | 2026-08-02 |
| pl | **Translated — Seven Sweeps passed & human-reviewed** | Human reviewer (TEAM4) | 2026-08-02 |
| ru | **Translated — Seven Sweeps passed & human-reviewed** | Human reviewer (TEAM4) | 2026-08-02 |
| es | **Translated — Seven Sweeps passed & human-reviewed** | Human reviewer (TEAM4) | 2026-08-02 |
| fr | **Translated — Seven Sweeps passed & human-reviewed** | Human reviewer (TEAM4) | 2026-08-02 |
| de | **Translated — Seven Sweeps passed & human-reviewed** | Human reviewer (TEAM4) | 2026-08-02 |
| pt | **Translated — Seven Sweeps passed & human-reviewed** | Human reviewer (TEAM4) | 2026-08-02 |
| tr | **Translated — Seven Sweeps passed & human-reviewed** | Human reviewer (TEAM4) | 2026-08-02 |

Per plan §5.3, translation begins only after a named human approves the English; that condition was met. All nine locales have undergone the Seven Sweeps (clarity, voice/tone, so-what, prove-it, specificity, heightened emotion, zero risk) and have recorded human review status in TEAM4. No runtime English fallback is used.

---

## 11. Gate self-assessment

| Gate | Result |
|---|---|
| Every visible claim maps to a `PASS` row | **Pass** — 7 frozen keys (9 rows counting split compound keys), 8 claim-bearing rows all `PASS`, 1 row ("Example data") is a caption convention with no claim status. No `HOLD` row appears in frozen copy. §3. |
| English marked human-approved, **or** the phase remains HOLD | **Pass** — approved as written by the repository owner on 2026-08-02; recorded in §0 and §10. |
| Solo ICP unchanged | **Pass** — `.agents/product-marketing.md` Target Audience and `messaging-and-claims.md` §1 both still read independent colorists / premium solo beauty professionals, US, `APPOINTMENT`. Collaboration is documented as optional progression in both. |
| `Devices` still immediately follows `Money` | **Pass** — asserted in `messaging-and-claims.md` §7 order constraints and preserved in all five amended DVC statements. |
| Notes decision unchanged | **Pass** — no standalone section; one supporting line under F4/TC8; reconfirmed in §8. |
| No standalone route / nav / CTA / FAQ / metadata / schema / niche block | **Pass** — §8. |
| Changes are documentation only | **Pass** — five documentation files; no component, message, generated file, script, test, or app source. |
| No unrelated DVC content changed | **Pass** — §12 diff review. |
| Rejected headlines recorded | **Pass** — §13. |

---

## 12. Diff review

`git diff --check` on the five touched files: clean, no whitespace errors.

`git diff --stat` for this phase:

```text
 .agents/product-marketing.md                       | 51 ++++++++++++++--
 ..._device_distribution_marketing_plan_20260731.md | 29 +++++++--
 .../01_device_distribution_llm_prompts_20260731.md | 17 ++++--
 .cursor/plans/reference/messaging-and-claims.md    | 72 +++++++++++++++++++---
```

(`docs/team-collaboration-copy-audit.md` is a new untracked file.)

**DVC scope check.** Every hunk in the two device documents is a homepage-order statement. Verified by
reading each changed line: §5.4 rule 4, §6.1 page map, §6.3 heading + rationale note, §6.5 surface-map
row, DVC5 requirement bullet, DVC1B audit bullet, DVC5 prompt bullet, DVC5 gate line, plus one dated
amendment note in each header. **No device claim, `PASS`/`BLOCKED` row, evidence rule, visual
contract, component spec, CTA rule, `/install` decision, SEO/schema requirement, analytics event, or
performance budget was altered.**

**Pre-existing worktree changes preserved.** The landing worktree carried modifications to
`app/globals.css`, `components/devices/device-density-ladder.tsx`,
`components/devices/device-frame.tsx`, `components/niche/niche-page.tsx`, `tests/device-shell.test.ts`
and untracked `components/niche/niche-mock-suite.tsx` before this phase. None was read into, staged,
formatted, reverted, or folded into this work. The sibling app repository was not modified in any way.

---

## 13. Rejected headline options

The canonical title is **"Work solo. Add people when you need them."** Everything below was considered
and rejected. Recorded so no later executor re-proposes them as improvements.

| Rejected | Why it fails |
|---|---|
| **"Built for teams"** | Inverts the ICP in three words. The flagship buyer's documented rejection of competitors is *"clearly built for a 10-chair salon… way too clunky for just me"* — this headline hands them that exact sentence. It also contradicts the section's own placement: a product "built for teams" would not put collaboration seventh. |
| **"Manage your salon team"** | Two separate failures. "Salon" narrows a solo suite operator out of their own product and imports the frame the whole positioning avoids. "Manage… team" is a category claim — it puts Perelai on the workforce-management shelf next to payroll and scheduling tools, where the honest answer to "does it do timesheets?" is no. Now a hard ban in `messaging-and-claims.md` §4.1. |
| "Team management for solo pros" | Tries to keep both audiences and lands on neither. The category noun still says workforce management, and "for solo pros" reads as an apology bolted onto it. |
| "Collaboration, without the chaos" | Vague on both halves — it names no mechanism and asserts a pain ("chaos") the research cannot support. Adjacent to the banned "streamline collaboration" register. |
| "Everyone on the same page" | Implies a shared surface — shared calendar, shared client list — which is false across the coworker boundary and false about Staff scope inside the workspace. It would be the section's only actively untrue line. |
| "Grow from solo to team" | Frames growth as the expected path and quietly makes the solo buyer the "before" state. It also promises a migration story the section is not describing. |
| "Add your team in minutes" | An unmeasured speed claim with no evidence behind it, and it presumes the visitor wants a team. |
| "Work solo. Add your team when you're ready." | Closest runner-up and the reason it lost is precise: "your team" presupposes the team exists, and "when you're ready" implies readiness is the obstacle. "Add people when you need them" makes the trigger a need, not a stage of the buyer's growth. |

---

## 14. Next phase

**TEAM2 may begin.** Both blocking conditions have cleared:

1. ~~English is not human-approved.~~ **Cleared 2026-08-02** — see §0 approval record (two
   independent confirmations).
2. ~~The sibling app source is dirty.~~ **Cleared 2026-08-02.** The repository owner committed the
   four locale files directly in the app repository (commit
   `98c8414672562ad8e29befa9a7af0209fcc1163a`) — this landing task's authority did not touch the app
   repo. `git -C beauty-finance status --short` is now empty. TEAM0's three focused evidence commands
   were re-run on the new HEAD and returned identical counts (62/62, 17/17, 4/4) — recorded in
   `docs/team-collaboration-claim-contract.md` "Evidence refresh". No `TC` status changed; TC5 remains
   `HOLD` for its original reason (`TEST_DATABASE_URL` still unavailable), not because of anything in
   this refresh.

TEAM2 extends the generator with the **team-only** subset of `TEAM_COLLABORATION_UI_KEYS`, reading
translations from app `HEAD` `98c8414672562ad8e29befa9a7af0209fcc1163a`. The `coworker.*` keys are
held with TC5 and must not enter `FIXED_UI_KEYS` while it is `HOLD`.

---

## 15. TEAM6 implementation audit — 2026-08-02

**Scope:** Visual, accessibility, copy, analytics, and performance review of the implemented homepage
section. Landing HEAD at audit start: `22c799e7437109265db17cb758f8705411744fea`. App evidence source:
`98c8414672562ad8e29befa9a7af0209fcc1163a`, clean and read-only.

### Fixes made in the existing TEAM2–TEAM5 scope

1. Removed the held `collaboration.coworkerTitle` and `collaboration.coworkerBody` keys from every
   published locale, and changed the locale-parity test to reject either key. TC5 remains `HOLD`, so
   an unrendered translation is still prohibited claim promotion.
2. Removed `Reveal` from the collaboration section. The section now has no section-specific motion,
   so reduced-motion users receive identical static content without requiring a client boundary.
3. Replaced the section's dark-mode `text-subtle-text` uses with the existing semantic
   `text-muted-foreground` token. The former dark token (`#6b7280`) was too low-contrast on the card
   surface for 12px text; the replacement is `#9ca3af` in dark mode.

### Required visual matrix

Browser inspection used 900px height at each requested width. At every point, the page had no
horizontal overflow, narrow layouts put copy before the mock, role pills had `scrollWidth ===
clientWidth`, the mock had one caption and zero focusable descendants, and neither adjacent section
overlapped it. `pt` was selected over `tr` because its collaboration copy is longer (718 vs 706
characters).

| Theme | Locales inspected | Widths (px) | Result |
| --- | --- | --- | --- |
| Light | en, de, uk, pt | 390, 768, 1024, 1360, 1600 | PASS — all 20 points |
| Dark | en, de, uk, pt | 390, 768, 1024, 1360, 1600 | PASS — all 20 points |

At 390px and 768px the headline/body precede the mock; 1024px and above use the balanced two-column
layout. The mock remains one rich **workspace** zone. A second coworker boundary/block is **not
applicable while TC5 is HOLD**: no coworker key, company, time block, private field, or privacy copy
is rendered. This is intentional claim-gate reduction, not a missing detail. The section is one
progressive workspace argument, not a salon-first feature-card grid; it adds no CTA and does not
collide with Devices or Setup.

### Accessibility and motion

- Heading sequence is `h2` section title followed by `h3` workspace title; no heading is skipped.
- The mock exposes one useful localized `sr-only` summary before one `aria-hidden="true"` decorative
  subtree. The subtree has zero links, buttons, form fields, or non-negative `tabindex` values.
- Fictional team rows and note fragments are inside that decorative subtree; only the localized
  summary is announced. Keyboard flow therefore remains the existing page flow.
- The section and mock are server components. Its only client island is the inert analytics observer;
  it imports neither the mock nor the generated catalog.
- The section no longer uses `Reveal` or any transition/animation, so its reduced-motion behavior is
  static when reduced motion is enabled as well as when it is not. No autonomous motion was added.
- Light/dark inspection uses semantic tokens. The dark small-text contrast repair above brings the
  supporting notes line and `Example data` caption onto `text-muted-foreground`; heading, body,
  brand role labels, and active status retain their existing semantic colors.

### Seven Sweeps and locale review rerun

The seven sweeps (clarity, voice, so-what, proof, specificity, emotion without hype, and zero-risk
boundary clarity) were re-applied to the seven publishable marketing keys in every locale. Team access
remains separate from the held coworker mechanism; Notes remains exactly one supporting
client-history line; no locale adds a CTA, category drift, hype, or an unsupported promise.

| Locale | Marketing copy | Generated product labels | Audit status |
| --- | --- | --- | --- |
| en | PASS | PASS | PASS |
| uk | PASS | PASS | PASS |
| pl | PASS | PASS | PASS |
| ru | PASS | PASS | PASS |
| es | PASS | PASS | PASS |
| fr | PASS | PASS | PASS |
| de | PASS | PASS | PASS |
| pt | PASS | **BLOCKED** — app catalog supplies English `Staff`, `Supervisor`, `active`, and `Working Hours` | BLOCKED |
| tr | PASS | **BLOCKED** — app catalog supplies English `Staff`, `Supervisor`, `active`, `Working Hours`, `Pinned note`, and `Visit note` | BLOCKED |

The Portuguese/Turkish result is not a landing fallback or a hand-typed substitute: the values are the
committed, generated app UI strings required by the contract. Landing must not edit the read-only app
source or replace them with invented translations. An app-owner localization change, clean-app
regeneration, and a new generated-data verification are required before these two locale rows pass.

### Analytics and performance evidence

- `collaboration_message_viewed` remains the sole privacy-safe event: fixed `surface: "home"`, typed
  locale, 50% observer threshold, and page-session deduplication key. It contains no PII, content,
  viewport, device, or free-text property.
- Baseline: [docs/baseline-lighthouse.md](baseline-lighthouse.md) records mobile Lighthouse Performance
  96 and CLS 0.00 (2026-07-29). A Lighthouse binary is not installed locally, and no dependency was
  added for this audit. The post-change project-equivalent check is the production build plus manifest
  review: no new image import/request, package dependency, autonomous animation, or client reference
  to `MockCollaborationWorkspace` or `app-ui-strings.generated.json` is permitted. Final command
  results are recorded with the TEAM6 handoff.
- The section has no image or asynchronously-sized media. Its server-rendered text/mock shape is
  present at first render; the tracker is absolutely positioned and inert, so it cannot create
  section layout shift.

### Cumulative command evidence

All project commands used the locally installed Node `v20.19.5`; the default `v20.18.0` cannot load
this workspace's Vitest/Vite ESM pairing. Commands that launch `tsx` required the normal unsandboxed
temporary IPC socket, but did not install or change any dependency.

| Command | Result |
| --- | --- |
| `pnpm typecheck` | PASS |
| `pnpm lint` | PASS |
| `pnpm test` | PASS on warm rerun. The first full run had one unrelated `check-uniqueness` test timeout under parallel worker load; its standalone command passed. The collaboration suites pass. Next-intl emits an existing missing-test-time-zone warning only. |
| `pnpm check:uniqueness` | PASS — all printed niche comparisons remain at or above the 60% uniqueness threshold. |
| `pnpm verify:niches` | PASS — 32 pages, 17 mock keys, 22 declared product labels, 9 locales. |
| `pnpm build` | PASS — its prebuild `verify:niches` and optimized production compilation completed. |
| `git diff --check` | PASS — no whitespace errors. |

The production page client-reference manifest contains `collaboration-section-tracker` only; it does
not reference `MockCollaborationWorkspace` or `app-ui-strings.generated.json`. No package manifest or
image asset is part of the collaboration diff.

### TEAM6 gate status

All visual, privacy, accessibility, held-claim, reduced-motion, and section-scope rows pass. TEAM6 is
**BLOCKED overall** only on the two upstream generated-label localization rows (`pt`, `tr`) until the
read-only product source supplies non-English labels and the landing catalog is regenerated from a
clean app HEAD. Do not promote these two rows based on the English source strings.
