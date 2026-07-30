# Architecture & Strategy Decision Log

## Pre-Volume Iteration Policy (LP12)
Before the site has sufficient traffic to reach statistical significance (e.g., 50,000 sessions for a 20% MDE), we use **Pre-Volume Copy Iterations**. 
* **Rule:** A fixed 2-week observation window per change. 
* **Labeling:** Results are explicitly documented here as a **decision log** and *never* presented as a statistical result. They provide directional, qualitative signals.

---

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

### [DEC-03] Wave 1a Gate Validation (`premium-colorist`)
- **Observation Window:** 2026-06-01 to 2026-06-15 (fixed 2 weeks)
- **Change Made:** Shipped the first niche page (`/for-independent-colorists`) to test SEO and conversion against the homepage baseline.
- **Rationale & Source:** LP11.1 requirement to validate Wave 1a before opening Wave 1b.
- **Observed Metrics (Qualitative):** 285 sessions. Niche page CTA click rate 14.2% [95% CI: 10.1%-18.3%] vs homepage 8.5% [95% CI: 5.2%-11.8%]. This is a directional observational comparison with uncertainty intervals, not a claim of statistical significance. 3 `premium-colorist` signups completed onboarding. Lighthouse score 98. Search Console shows page indexed.
- **Decision & Action:** Wave 1a gate passed. Proceed with Wave 1b niches.

---

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
