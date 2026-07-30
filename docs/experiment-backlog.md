# Experiment Backlog & Hypothesis Scoring

**Last Updated:** 2026-07-30  
**Phase:** LP12 (Experimentation Readiness)  
**Status:** Pre-volume phase — A/B tests NOT active.

---

## 1. Qualitative Tooling & Privacy Status

| Tool | Status | Reason & Blocker |
|---|---|---|
| Session Recordings | **OFF / BLOCKED** | Requires explicit owner & legal approval of privacy policy, consent banner, and data processor DPA under LP10 privacy decision in `docs/tracking-plan.md`. |
| Scroll Maps & Heatmaps | **OFF / BLOCKED** | Same as above. No DOM capture or third-party tracking scripts loaded. |
| Qualitative Observations | **ACTIVE** | Direct user interviews, support emails (`hello@perelai.com`), and onboarding report funnel analysis. |

---

## 2. Statistical Sample Size Methodology

Do not use universal thresholds (e.g. "1,000 sessions"). Sample sizes are calculated using the two-tailed proportion test formula:

$$n = \frac{(Z_{\alpha/2} + Z_{\beta})^2 \cdot [p_1(1-p_1) + p_2(1-p_2)]}{(p_2 - p_1)^2}$$

- Significance level: $\alpha = 0.05$ ($Z_{\alpha/2} = 1.96$)
- Statistical power: $1 - \beta = 0.80$ ($Z_{\beta} = 0.84$)
- Baseline conversion rate: $p_1$ (visitor $\rightarrow$ `signup_started`)
- Target conversion rate: $p_2 = p_1 \cdot (1 + \text{MDE})$

---

## 3. ICE-Scored Hypothesis Backlog

| Rank | Test ID | Hypothesis Name | Impact (1-10) | Confidence (1-10) | Ease (1-10) | ICE Score |
|---|---|---|---|---|---|---|
| **1** | **H3** | **Inbox Differentiator Placement** | 9 | 8 | 8 | **576** |
| **2** | **H1** | **Hero Headline Framing** | 8 | 7 | 9 | **504** |
| **3** | **H4** | **Terminology Table Placement** | 7 | 7 | 9 | **441** |
| **4** | **H5** | **Pricing Information Access** | 8 | 6 | 8 | **384** |
| **5** | **H2** | **Primary CTA Wording** | 6 | 5 | 10 | **300** |

---

## 4. Hypothesis Specifications

### H3: Inbox Differentiator Placement (Rank #1 — Run First)
- **If:** We place the Operational Inbox section (`#features`) directly above the booking link section on the homepage,
- **Then:** `signup_started` conversion rate will increase by 25% relative (from 4.0% to 5.0%),
- **Because:** The Operational Inbox ("keeps it until you deal with it") is Perelai's core data-model differentiator that competitors cannot copy without changing their architecture.
- **Primary Metric:** `signup_started`
- **Guardrail Metric:** `onboarding_completed` rate for `premium-colorist` (from `onboarding-report.ts`)
- **Required Sample Size:** ~12,200 visitors per variant (Total: **24,400 visitors**).
- **Traffic Threshold:** Homepage only (~800 visitors/day over 30 days).

---

### H1: Hero Headline Framing (Rank #2)
- **If:** We change the hero headline from outcome-led (*"Your clients, bookings and cash flow — finally in one place"*) to pain-led (*"Stop reconstructing your week from DMs, notes apps and memory"*),
- **Then:** `signup_started` conversion rate will increase by 20% relative (from 4.0% to 4.8%),
- **Because:** Customer research verbatims (sources 1, 2, 10 in `docs/icp-research-homepage.md`) confirm that "answering DMs at 11pm" and "reconstructing weeks from memory" are the most acute daily frustration.
- **Primary Metric:** `signup_started`
- **Guardrail Metric:** `onboarding_completed` rate for `premium-colorist`
- **Required Sample Size:** ~19,200 visitors per variant (Total: **38,400 visitors**).
- **Traffic Threshold:** Homepage (~1,300 visitors/day over 30 days).

---

### H4: Terminology Table Placement (Rank #3)
- **If:** We move the Niche Terminology Translation Table on niche pages to sit directly above the FAQ section,
- **Then:** `signup_started` conversion rate on niche pages will increase by 20% relative (from 3.0% to 3.6%),
- **Because:** The terminology table proves immediate trade understanding ("Formula history" vs "Notes"), capturing high-intent visitors before FAQ scroll.
- **Primary Metric:** `signup_started`
- **Guardrail Metric:** `onboarding_completed` rate for `premium-colorist`
- **Required Sample Size:** ~25,800 visitors per variant (Total: **51,600 visitors**).
- **Traffic Threshold:** High-traffic niche pages (`/for-independent-colorists`) during active acquisition campaigns.

---

### H5: Pricing Information Access (Rank #4)
- **If:** We render an approved pricing capability summary directly on the niche landing page instead of requiring a click to `/pricing`,
- **Then:** `signup_started` conversion rate will increase by 30% relative (from 3.0% to 3.9%),
- **Because:** Reducing navigation friction for price-curious visitors prevents bounce.
- **Primary Metric:** `signup_started`
- **Guardrail Metric:** `onboarding_completed` rate for `premium-colorist`
- **Required Sample Size:** ~11,400 visitors per variant (Total: **22,800 visitors**).
- **Traffic Threshold:** Niche landing pages with dedicated campaign traffic.

---

### H2: Primary CTA Wording (Rank #5)
- **If:** We change the primary CTA copy from "Create workspace" to "Join the Founding Beta",
- **Then:** `signup_started` conversion rate will increase by 15% relative (from 4.0% to 4.6%),
- **Because:** Solo operators respond to early-stage co-creation framing over generic utility creation.
- **Primary Metric:** `signup_started`
- **Guardrail Metric:** `onboarding_completed` rate for `premium-colorist`
- **Required Sample Size:** ~34,500 visitors per variant (Total: **69,000 visitors**).
- **Traffic Threshold:** Homepage (~2,300 visitors/day over 30 days).
