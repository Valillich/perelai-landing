# Experiment Backlog (LP12)

This backlog contains hypotheses for A/B testing once sufficient traffic volume is reached.

## Experiment Design Standards

*   **Primary Metric:** `signup_started` (Clicking the main CTA).
*   **Guardrail Metric:** The app's `onboarding_completed` rate for the specific niche (using the cross-domain join in `apps/api/src/scripts/onboarding-report.ts`). A landing change that lifts clicks but sends worse-fit users who abandon onboarding is a **failed experiment**.
*   **Sample Size Assumptions:**
    *   Alpha: 0.05 (95% confidence)
    *   Power: 0.80
    *   Baseline Conversion Rate (assumed): 2.0%
    *   Minimum Detectable Effect (MDE): 20% relative (i.e., detecting a lift from 2.0% to 2.4%)
    *   **Required Sample:** ~25,000 sessions per variation (~50,000 total sessions per test).

## Qualitative Data (Blocker)
Session recordings and scroll maps are **OFF**. The LP10 privacy decision enforced `persistence: 'memory'` (no cookies), which precludes the use of consent banners and cross-session tracking required by the PostHog replay SDK. These features remain blocked until a new legal/privacy decision allows them.

---

## 1. Hero Headline Framing
**ICE Score:** 24 (Impact: 9, Confidence: 7, Ease: 8)
**Hypothesis:** If we change the hero headline from pain-led ("Stop losing time on admin") to outcome-led ("Focus on your craft, we handle the rest"), then `signup_started` will increase, because outcome-led framing resonates better with beauty professionals who value creativity over administration.
**Sample required:** 50,000 sessions.

## 2. CTA Copy
**ICE Score:** 24 (Impact: 8, Confidence: 6, Ease: 10)
**Hypothesis:** If we change the primary CTA from "Join the Founding Beta" to "Create your free workspace", then `signup_started` will increase, because "free workspace" communicates immediate tangible value and lowers the perceived barrier to entry compared to "Beta" which sounds unfinished.
**Sample required:** 50,000 sessions.

## 3. Indicative Pricing Placement
**ICE Score:** 21 (Impact: 7, Confidence: 6, Ease: 8)
**Hypothesis:** If we show indicative pricing directly on the niche page rather than linking out to `/pricing`, then `signup_started` will increase, because users will not have to break their reading flow to verify affordability.
**Sample required:** 50,000 sessions.

## 4. Differentiator Positioning (Inbox)
**ICE Score:** 18 (Impact: 6, Confidence: 5, Ease: 7)
**Hypothesis:** If we move the Inbox differentiator section above the booking-link section, then `signup_started` will increase, because client communication (Inbox) is a more acute pain point for this specific niche than scheduling.
**Sample required:** 50,000 sessions.

## 5. Terminology Table Placement
**ICE Score:** 16 (Impact: 5, Confidence: 4, Ease: 7)
**Hypothesis:** If we move the Terminology table above the FAQ rather than below it, then `signup_started` will increase, because proving we understand their specific industry vocabulary early builds trust before they reach the generic FAQs.
**Sample required:** 50,000 sessions.
