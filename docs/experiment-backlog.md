# Experiment Backlog (LP12)

This backlog contains hypotheses for A/B testing once sufficient traffic volume is reached.

> **No number in this file is observed data.** Every baseline and sample figure below is an unvalidated
> planning assumption carried over from LP12. No production baseline has been measured. MSG5
> (`docs/home-hero-experiment-readiness.md`) is the phase that records the first observed baseline and
> its confidence interval; until it does, no entry here may be quoted as a measured conversion rate,
> and no sample figure here may be used to justify starting or stopping a test.
> *(Added 2026-08-03, MSG1.)*

## Change classification (read before adding an entry)

Not every copy change is an experiment. Classify first — the three categories have different evidence
requirements and only one of them can produce a causal claim.

| Class | What it is | What it can prove | Requirements |
|---|---|---|---|
| **Rollout** | One version ships to everyone: a deploy, a preview environment, a build-time flag, a staged or emergency-rollback release. | Nothing causal. Comparing deployment A with deployment B, or week-over-week before and after a release, is a sequential comparison confounded by traffic source, weekday, campaigns, indexing, other releases and seasonality. | Record it as a release. **Never describe an environment variable or a redeploy as an A/B test.** |
| **Qualitative test** | Moderated comprehension or interview work — e.g. the five-second protocol, founder-led conversations with signup prospects. | Whether people understand the message, what they expect, and which phrase reads as untrue. | Consent and provenance recorded; answers verbatim; no invented participants or frequencies; results are directional, not statistical. |
| **True A/B** | Concurrent split with sticky, flicker-free, pre-render assignment. | A causal difference on one preregistered primary metric. | Everything in the traffic and privacy gates below. |

**Homepage visits are not a valid hero outcome.** A visit happens before the hero is read, so the hero
cannot cause it. Visits are the *denominator*. If the goal is more traffic, that is an acquisition
experiment (ad creative, search snippet, source-specific message match) and belongs in a different plan.

## Experiment Design Standards

*   **Primary Metric:** `signup_started` (Clicking the main CTA).
*   **Guardrail Metric:** The app's `onboarding_completed` rate for the specific niche (using the cross-domain join in `apps/api/src/scripts/onboarding-report.ts`). A landing change that lifts clicks but sends worse-fit users who abandon onboarding is a **failed experiment**.
*   **Sample Size Assumptions — planning placeholders, not measurements:**
    *   Alpha: 0.05 (95% confidence)
    *   Power: 0.80
    *   Baseline Conversion Rate: **assumed 2.0% — never observed.** Replace with the MSG5 observed rate before any test is designed.
    *   Minimum Detectable Effect (MDE): 20% relative (i.e., detecting a lift from 2.0% to 2.4%)
    *   **Sample implied by those assumptions:** ~25,000 sessions per variation (~50,000 total). This is arithmetic from an assumed baseline, not a measured requirement; it moves whenever the real baseline is known.

## Qualitative Data (Blocker)
Session recordings and scroll maps are **OFF**. The LP10 privacy decision enforced `persistence: 'memory'` (no cookies), which precludes the use of consent banners and cross-session tracking required by the PostHog replay SDK. These features remain blocked until a new legal/privacy decision allows them.

---

## 1. Hero Message — candidate and traffic policy

> **SUPERSEDED 2026-08-03 (FM2).** The `operational_clarity` candidate below — and the whole
> `operational_clarity` / `beyond_calendar` / `fragmented_week` / `booking_to_payment` set — belonged to
> the retired booking-first positioning and is **no longer a live experiment candidate**. Perelai's
> category changed to financial tracking and analytics; a headline test across a category boundary would
> compare two different products, not two messages.
>
> **No replacement experiment is registered here, deliberately.** FM2 owns only this supersession note.
> The finance-first control and any dormant candidates get registered in **FM6**, after the English
> freeze is owner-approved (FM2), implemented (FM4A/FM4B) and localized with named human review (FM5).
> Registering one now would imply an approved message that does not yet exist.
>
> **No A/B test is running, and none is ready.** Every gate in §1.2 below remains unmet — there is still
> no observed baseline, no sticky assignment, no privacy approval, and feature flags remain OFF by the
> approved tracking plan. Retained below as the traffic/feasibility policy, which survives the category
> change unchanged.

*Rewritten 2026-08-03 (MSG1). Supersedes the previous entry, whose control and variant wording
("Stop losing time on admin" / "Focus on your craft, we handle the rest") was never on the site,
described a product that handles work automatically, and carried an assumed sample as if it were a
launch instruction.*

**Status:** **not runnable.** Classified as a future **true A/B**, currently blocked on traffic,
assignment and privacy gates. Nothing in this entry authorises traffic.

### 1.1 First launch is not an experiment

The first launch ships **one** message in all nine published locales:
`operational_clarity` — *"Know what still needs doing — and what was actually paid."* It was selected on
claim safety, differentiation and a weighted scorecard, not on measurement
(`docs/home-hero-copy-audit.md` §5). Shipping it is a **rollout**. Its job is to establish a baseline.

Documented alternatives — `beyond_calendar`, `fragmented_week`, `booking_to_payment` — stay in
documentation. They do **not** become a runtime variant registry, an environment switch, a query
parameter, a cookie, a feature flag or a random assignment. Never run A/B/n across all four at this
stage: four arms need roughly twice the sample of two, and nine locales would turn one copy test into a
translation-and-segmentation problem where pooling arms across languages invalidates the conclusion.

`fragmented_week` is additionally **not eligible** until its DM-import inference risk is resolved; its
pain language rests on proxy sources that failed live recheck and cleared no independent-signal
threshold.

### 1.2 Preconditions before this becomes a runnable test

| # | Gate | State on 2026-08-03 |
|---|---|---|
| 1 | Approved English shipped and stable in production | Not started — MSG1 is held on owner approval |
| 2 | `landing_viewed`, `landing_cta_clicked`, `signup_started` verified live | Not verified |
| 3 | Observed baseline for the exact primary metric, with confidence interval, over ≥2 full weekly cycles (prefer 28 days) | **None** — MSG5 owns this |
| 4 | Eligible daily exposures measured, by locale and source | Unknown |
| 5 | Sticky, flicker-free assignment resolved **before** the hero renders | Does not exist |
| 6 | Privacy/legal approval for whatever storage that assignment needs | Not sought. Analytics is `persistence: 'memory'` with no visitor ID; a sticky experiment cookie is a **new** privacy decision even though the analytics provider stays memory-only |
| 7 | Feature flags | Deliberately **OFF** in the approved tracking plan. Turning them on to run this test would contradict that approval |
| 8 | Variant persisted into the app for the onboarding guardrail | Does not exist; must never be smuggled into `utm_campaign` |

### 1.3 Feasibility rule

```text
duration_days = (sample_per_variant × 2) / eligible_daily_exposures
```

Minimum 14 days / two weekly cycles. Maximum 56 days. **If the computed duration exceeds 56 days, do not
run the test** — choose the message on claim safety, comprehension testing and first-party interviews
instead. Do not lower confidence, widen the MDE past what is commercially meaningful, or pool
incompatible locales to manufacture a result.

### 1.4 The test, if and when the gates pass

| Element | Contract |
|---|---|
| Class | True A/B, concurrent, 50/50 |
| Control A | `operational_clarity` |
| Challenger B | `beyond_calendar` — only if qualitative review confirms it clears its category-clarity weakness |
| Audience | New eligible homepage sessions; English only unless English alone lacks the traffic, and never pooled across locales without a planned stratified analysis |
| Primary metric | Deduplicated hero signup-start rate **per exposure** |
| Secondary | Whole-home signup-start rate, only if the variant is attached to every homepage CTA event |
| Guardrail | App onboarding completion by variant — only after an approved cross-domain variant join exists |
| Fixed across arms | Shared body, CTAs, destinations, microcopy, visual, layout, metadata and everything below the hero |
| Stopping | Preregistered sample and duration. No peeking, no early winner calls |
| Invalid outcome metric | Homepage visits |

**Hypothesis (non-directional, deliberately).**

> Because cold visitors may classify Perelai as another booking calendar, we believe the explicit
> "beyond the calendar" category reframe will **change** hero signup-start rate compared with the
> operational-outcome headline, for new English homepage sessions. We will know only after the
> preregistered sample is reached and the onboarding guardrail is available.

No "will increase" claim is made: there is no qualitative or first-party evidence supporting a
direction, and the first experiment is legitimately about which mental model produces better-qualified
intent rather than more clicks.

### 1.5 If the traffic gate fails

That is an acceptable outcome, not a failure to work around. Run the five-second comprehension protocol
and founder-led conversations with real signup prospects instead, and record the result as qualitative
evidence. Do **not** substitute a sequential before/after comparison of two deployments and call it a
winner.

**ICE:** not scored. ICE ranks runnable experiments; this one is gate-blocked, and scoring it would
imply it is queued.

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
