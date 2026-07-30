# Pre-Volume Decision Log

**Purpose:** Document sequential copy and layout iterations during the pre-volume phase.  
**Rule:** Every entry represents a qualitative product decision based on a fixed 2-week observation window. It is **explicitly NOT a statistically significant result**.

---

## Log Template

```markdown
### [DECISION-ID] Title / Surface
- **Observation Window:** YYYY-MM-DD to YYYY-MM-DD (fixed 2 weeks)
- **Change Made:** Description of baseline vs updated copy/layout.
- **Rationale & Source:** ICP research quote, support feedback, or LP phase gate requirement.
- **Observed Metrics (Qualitative):** Total visitors, signup_started count, onboarding_completed count.
- **Decision & Action:** Kept, reverted, or iterated further.
```

---

## Log Entries

### [DEC-02] Single closing-CTA card + navigation on every page
- **Observation Window:** 2026-07-30 to 2026-08-13
- **Change Made:** The homepage, `/pricing` and `/for-independent-colorists` closing CTAs were three
  separate blocks with different button shapes, heading sizes and micro-copy styling. They now render
  one `components/cta-card.tsx`. The header nav (Features / How it works / Pricing) was hidden on
  `/pricing`, the niche page and the legal pages; it now renders everywhere, resolves `#features` /
  `#how` against the homepage on pages that have no such sections, and marks the current page with
  `aria-current="page"` plus a brand underline.
- **Rationale & Source:** Reported directly by the owner. Three divergent CTA cards is drift, not a
  test — no variant was ever recorded as a hypothesis, so the difference produced noise rather than
  signal. A missing nav also removed the only path from `/pricing` back into the product story.
- **Observed Metrics (Qualitative):** `landing_cta_clicked` by `cta_position`
  (`closing_signup` / `pricing_signup` / `niche_final_cta`) and `pricing_viewed` by `surface`.
- **Decision & Action:** Adopted as the new baseline. Any future CTA-card variant is an
  `docs/experiment-backlog.md` entry, not a per-page edit.

---

### [DEC-01] Pre-Volume Baseline Setup (LP6 / LP8 Clean Alignment)
- **Observation Window:** 2026-07-30 to 2026-08-13
- **Change Made:** Aligned homepage H1 (*"Your clients, bookings and cash flow — finally in one place"*), primary CTA (*"Create workspace"*), and repointed header Pricing link to `/pricing`.
- **Rationale & Source:** Compliance with commercial policy CF-01..CF-04 (pending owner approval) and LP8 honesty constraint (no billing system active).
- **Observed Metrics (Qualitative):** Pre-launch baseline tracking via `onboarding-report.ts`.
- **Decision & Action:** Active baseline. No A/B testing until sample size thresholds in `docs/experiment-backlog.md` are reachable.
