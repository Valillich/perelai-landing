# Device Distribution & Responsive Product Marketing Plan

**Repository:** `/Users/valery/Sites/perelai-landing`

**Sibling app (read-only evidence):** `/Users/valery/Sites/beauty-finance`

**Created:** 2026-07-31

**Status:** planning only — this document does not authorize product or landing implementation by itself.

**Amended:** 2026-07-31, review pass 2. Three substantive changes, all recorded inline: the visual
contract in §8 is rewritten around the shipped rendered mock kit instead of a screenshot set (§8.0);
a premium presentation contract and the ported desktop shell are added (§8.1–§8.4, §6.5); the skill
set in §2 gains `ai-seo`, `marketing-psychology`, `seo-audit`, and `signup`, and `aso` is demoted.
Phase `DVC2R` is inserted between DVC2 and DVC3. Nothing in §4 (claim contract) was loosened.

**Amended:** 2026-08-02 by TEAM1 of
[`../features/00_team_collaboration_features_marketing_plan_20260802.md`](../features/00_team_collaboration_features_marketing_plan_20260802.md).
Homepage-order statements in §5.4, §6.1, §6.3, §6.5 and DVC5 were rewritten from “after Money and
before Setup” to “**immediately after Money**”, so a `Collaboration` section may sit between `Devices`
and `Setup`. The `Money → Devices` adjacency is unchanged and still binding. No device claim, visual
contract, evidence rule, CTA rule, or `/install` decision was touched.

**Companion executor prompts:**

[`01_device_distribution_llm_prompts_20260731.md`](01_device_distribution_llm_prompts_20260731.md)

**Extends, does not replace:**

- [`../01_plan_integrity_review_20260729.md`](../01_plan_integrity_review_20260729.md)
- [`../00_architecture_review_20260725.md`](../00_architecture_review_20260725.md)
- [`../niche_landing_i18n_product_relaunch_20260725.plan.md`](../niche_landing_i18n_product_relaunch_20260725.plan.md)
- [`../product_mock_kit_20260728.md`](../product_mock_kit_20260728.md)
- `/Users/valery/Sites/beauty-finance/.cursor/plans/minimal_desktop_ready_layer_20260714.plan.md`

---

## 1. Executive decision

Perelai must not market four separate products called “the iOS app”, “the Android app”, “the iPad
app”, and “the desktop app”. The code implements **one responsive web application** with:

1. a focused mobile/tablet presentation below `1024px`;
2. a desktop rail and two-pane workspaces from `1024px`;
3. wider contextual three-pane workspaces from `1360px`;
4. optional browser installation, exposed after onboarding and in Settings;
5. an iOS/iPad-specific guided “Add to Home Screen” flow and a native browser prompt where
   `beforeinstallprompt` is available.

The marketing proposition is therefore:

> **One workspace across phone, iPad and desktop. It works in the browser first; installation is
> optional.**

“PWA” remains an internal technical term. Public copy explains the behavior in language a solo
professional already understands.

The landing should use a layered answer, not turn the homepage hero into a platform compatibility
page:

- a short device reassurance near the homepage CTA;
- a full device-value section after the product-value sections;
- a canonical localized `/install` page for visitors explicitly looking for an iPhone, Android,
  iPad, or desktop app;
- a small shared reassurance/link on niche pages;
- factual install questions in the FAQ;
- one navigation/footer path to the `/install` page;
- no App Store or Google Play badge unless a real listing exists.

Do **not** create `/ios-app`, `/android-app`, `/ipad-app`, or `/desktop-app` in this phase. They would
be thin, overlapping pages without separate products or separate proof. `/install` is the single
search-intent and support hub.

### 1.1 Presentation decision (added in review pass 2)

The proposition in §1 is *"one workspace, three densities."* A page that asserts that in prose beside
three cropped screenshots is arguing for it. A page built from the product's own live layout
**demonstrates** it — the same markup, reflowing at the product's own breakpoints, in the visitor's
own language and the visitor's chosen theme.

The landing already owns the mechanism. `components/mock/` renders app-screen replicas as live DOM
from the app's generated catalog and translated strings (see `product_mock_kit_20260728.md` §6). The
piece it is missing is the one that makes a desktop layout legible as an application rather than a
wide website: the **navigation rail**. Porting that grammar is the highest-value visual work in this
plan, and it is what §8 is now built around.

Therefore: **the device story is demonstrated with rendered product surfaces, and screenshots are
demoted to evidence.** This is not a weakening of the honesty rules — §4 is unchanged, and §8.5 keeps
a real-screenshot obligation. It is a correction that aligns this plan with the visual system the
repository already shipped.

---

## 2. Skills used and why

This plan applies only the skills that materially affect this scope. Their advice is subordinate to
the verified product code, the claim rails, and the existing landing architecture.

| Skill | Applied decision |
|---|---|
| `product-marketing` | Keep device availability subordinate to the core clients/bookings/cash-flow positioning; add the browser/install distinction to shared positioning context during execution. |
| `customer-research` | Treat “users will search for an iOS/Android app” as a hypothesis until Search Console, conversations, or support language validates it; never invent demand or search volume. |
| `copywriting` | Translate technical behavior into benefits and plain-language answers; one idea per section; outcome before mechanism. |
| `copy-editing` | Run clarity, proof, specificity, and zero-risk sweeps; remove `native`, `offline`, `download`, and store ambiguity. |
| `cro` | Put a short compatibility reassurance near the CTA, then the full explanation after value has been established; preserve one primary conversion action. |
| `aso` | Borrow only the store-listing conversion discipline: clear platform answer, first visual communicates value, visible screenshot captions. There is no store listing to audit or fabricate. |
| `site-architecture` | Use one canonical `/install` hub, link it within one click from the homepage, and avoid four near-duplicate platform pages. |
| `schema` | Describe a web `SoftwareApplication` and visible installation instructions accurately; never mark it up as a native `MobileApplication`. |
| `analytics` | Add only events that answer placement and intent questions; no device fingerprinting or full user-agent collection. |
| `ab-testing` | Record device-message hypotheses, but do not launch a split test until baseline, MDE, power, and required sample are documented. |
| `image` | Govern the **evidence** screenshots and the OG export budget. It does not govern the shipping visual — §8 makes that rendered DOM. No AI generation, redraw, or cosmetic repair of app UI, ever. |

### 2.1 Skills added in review pass 2

The original table under-served the marketing objective in four places. These are additions, not
replacements; every existing row still stands.

| Skill | Why it materially changes this scope | Phase |
|---|---|---|
| `ai-seo` | **The highest-leverage omission.** “Does Perelai have an iPhone app?” is now asked to ChatGPT, Perplexity, and AI Overviews at least as often as to Google, and a wrong LLM answer (“web only, try a competitor instead”) is a silent conversion loss the current plan cannot detect. The plan already touches `llms.txt`, but treats it as a file to update rather than an answer surface to win. See new §9.5. | DVC1A, DVC6A |
| `marketing-psychology` | The device question is an **anxiety**, not a feature request (§5.4). “No App Store” triggers ambiguity aversion and a legitimacy heuristic — absence of a store reads as absence of a real product. Handling that is a framing problem with known mechanics, and getting it wrong costs more than any layout choice in this plan. | DVC1B |
| `seo-audit` | Already loaded by DVC6A and DVC7 but missing from this table — a plan-integrity gap. Owns metadata limits, canonical/hreflang correctness, orphan-link checks, and the `/install` indexability contract. | DVC6A, DVC7 |
| `signup` | `/install` ends in a **cross-origin handoff**: `perelai.com` → `buildAppSignupUrl` → `perelai.app` → verification email. That is a signup flow with an extra domain hop, and it is where `/install` traffic actually converts or dies. The plan currently specifies the CTA helper but never audits the flow it hands off to. | DVC4 |

**Demotion, recorded honestly:** `aso` stays in the table but drops to advisory. There is no store
listing to audit, score, or optimize, and the original justification — “borrow store-listing
conversion discipline” — is largely a restatement of what `cro` and `copywriting` already provide.
Its one non-redundant contribution is understanding the *expectation* the words “app”, “iPhone”, and
“Android” create in a searcher's head. Load it in DVC1A for that alone; do not let it pull the page
toward store-listing structure, and never let it produce a fabricated listing artifact.

**Skills deliberately not used**, so a later executor does not add them speculatively:
`competitors` (a “Perelai vs native app” page would invite the exact comparison this plan avoids),
`aso`-driven store work, `offers`, `pricing`, `launch`, `ads`, `social`, `programmatic-seo`.
`/install` is a support-and-answer hub, not a campaign surface.

---

## 3. Verified current-state contract

### 3.1 App distribution and install behavior

| Fact | Code evidence | Marketing consequence |
|---|---|---|
| The app is a browser application with a web manifest. | `apps/web/index.html`, `apps/web/public/manifest.json` | “Works in your browser” is accurate. |
| Installed display mode is `standalone`. | `manifest.json` → `display: "standalone"` | It may be described as opening from a home-screen/desktop icon in its own app window after verification. |
| Installation is optional and non-blocking. | shared `CONTEXT.md` §11/§19; onboarding Review keeps install secondary | Never make install the primary signup requirement or imply it is needed to use Perelai. |
| iPhone/iPad Safari uses Share → Add to Home Screen; Chrome iOS gets its own route; embedded browsers are sent to Safari. | `installTarget.ts`, `IosInstallPrompt.tsx` and their tests | The landing may explain the general path; the app remains the authoritative browser-specific guide. |
| Chromium-like browsers get a one-tap browser prompt only when `beforeinstallprompt` is captured. | `pwaInstallPromptStore.ts`, `usePwaPrompt.ts` | Never promise a visible Install button in every browser. |
| Install is offered after onboarding and in Settings/Quick Settings. | `OnboardingReviewStep.tsx`, `InstallAppSettingsControl.tsx`, `QuickSettingsPanel.tsx`, `SettingsPage.tsx` | Landing CTAs should create/login to a workspace, not pretend to install the cross-origin app directly. |
| The current service worker is notification-oriented, not an offline application-shell contract. | `public/notification-sw.js`, `utils/webPush.ts` | Do not claim offline use, offline booking, or offline data sync. |
| On iPhone, the product itself explains that alerts require the app on the home screen. | `OnboardingReviewStep.tsx`, locale key `stay_informed_push_needs_install` | This may be a conditional benefit only after production push is verified; not a universal device promise. |

### 3.2 Responsive product behavior

| Effective CSS width | Verified app behavior | Safe public framing |
|---|---|---|
| `<1024px` | Existing mobile/tablet Calendar, bottom navigation, sheets, standalone details | “A focused layout for work between clients.” Do not call it a separate mobile app. |
| `1024–1359px` | Desktop rail plus two-pane Calendar/Clients/Finance layouts | “More context appears as the screen gets wider.” |
| `>=1360px` | Wide contextual third pane for key workflows | “On a large desktop, keep the schedule, list, and current task in view.” Only publish after authenticated visual QA. |
| `>1600px` | Workspace remains capped near 1600px | Do not claim unlimited dashboard density or use ultra-wide marketing comps that the product does not render. |

The authoritative breakpoint contract is in `minimal_desktop_ready_layer_20260714.plan.md` §11 and
the current helpers `responsiveLayout.ts`, `calendarDesktopWorkspace.ts`,
`clientsWorkspace.ts`, and `financeDesktopWorkspace.ts`.

### 3.3 Evidence status

The desktop plan contains strong automated evidence, but its authenticated manual matrix is still
recorded as blocked in §16/DESK20. The landing must not turn “implemented in code” into an
unqualified “perfect on every device” claim.

Before public device copy ships, execution must record current, authenticated evidence on at least:

- iPhone Safari, portrait;
- iPad Safari, portrait and landscape;
- Android Chrome, portrait;
- desktop Chrome or Edge at `1024`, `1360`, and `1600` CSS px;
- one desktop Safari or Firefox browser for the normal browser-use fallback;
- standalone launch after installation where the platform supports it;
- embedded Instagram-style browser → open-in-Safari escape path on iOS.

If a device cannot be exercised, copy for that device stays generic (“use in a supported browser”)
and the unverified screenshot/claim does not ship.

---

## 4. Claim contract

### 4.1 Allowed after the named gate

| Claim | Gate/source |
|---|---|
| “Works in your browser.” | Current app delivery model; no extra gate. |
| “Install it on your phone when you are ready.” | Existing shared wording plus install-flow tests. |
| “Use Perelai on phone, iPad and desktop.” | Responsive code plus the authenticated device matrix. |
| “The layout adapts as your screen gets wider.” | Breakpoint code plus screenshots at the three layout classes. |
| “Add it to your iPhone or iPad Home Screen.” | iOS/iPad install path and manual Safari verification. |
| “Install from a compatible browser on Android or desktop.” | Captured native prompt plus manual supported-browser verification. |
| “Open Perelai from its icon.” | Standalone launch verification on the target platform. |
| “On iPhone, home-screen installation enables Perelai alerts.” | Production Web Push flags/VAPID plus physical-device receipt test. |
| “Light and dark themes.” | Existing app capability plus visual verification; do not turn it into a primary device claim. |

### 4.2 Forbidden unless the product architecture changes

- “Native iOS app”, “native Android app”, “native desktop app”.
- “Download on the App Store” or “Get it on Google Play”.
- Official-looking App Store / Google Play badges or store logos used as fake buttons.
- “Available in the App Store” / “Available in Google Play”.
- “Works offline”, “offline-first”, “book clients offline”, “syncs when you reconnect”.
- “Install in every browser” or “one-click install everywhere”.
- “No internet required”.
- “Same as a native app”, “native performance”, “full system integration”.
- “Automatically syncs across every device” unless a separate claim audit defines exactly what
  state and latency are meant.
- A CTA labelled “Download” or “Install now” on `perelai.com`; that origin cannot install the
  authenticated app on `perelai.app`.
- “PWA” in a headline, CTA, navigation label, metadata title, or FAQ question written for prospects.

### 4.3 Required honesty language

Every full explanation must state all three facts:

1. Perelai works in the browser without installation.
2. Browser installation is optional and depends on the browser/platform.
3. There is currently no App Store or Google Play listing.

The answer should be calm and matter-of-fact, not apologetic. The absence of a store is framed as a
shorter path to the product, not as a technical workaround.

### 4.4 Claim-ledger reconciliation

`reference/messaging-and-claims.md` remains the landing-wide authority: its rule says public claims
must exist in §2 with a source. `docs/device-claim-contract.md` adds evidence status; it does not
silently replace that authority.

During DVC1, before any new device sentence becomes shippable:

1. take only final `PASS` rows from the device claim contract;
2. add/refine the minimum Platform rows in `messaging-and-claims.md` §2 with exact source paths;
3. keep browser-first/installable wording grounded in existing F20/F21/F22;
4. add the no-store and internet-required limitations only if DVC0 recorded defensible evidence;
5. perform this claim-ledger edit separately from prose generation so a reviewer can approve the
   product fact before reviewing the persuasion.

If a limitation cannot be sourced strongly enough, the page says only what is already in F20/F21 and
does not invent a confident compatibility answer.

---

## 5. Positioning and message hierarchy

### 5.1 Message stack

1. **Primary outcome:** clients, bookings, unresolved work, and cash-flow visibility in one place.
2. **Device benefit:** use that workspace where the work happens.
3. **Responsive proof:** phone is focused; larger screens keep more context visible.
4. **Install convenience:** browser first, optional icon/app window later.
5. **Platform answer:** no traditional store listing; no need to wait for one to use the product.

Do not reverse this order. “Installable web app” is distribution, not the reason someone changes
their booking and money workflow.

### 5.2 Device-specific benefit framing

| Device context | Outcome-led story | Product proof to show |
|---|---|---|
| Phone | Check today, act on the Operational Inbox, or open a client between services. | Focused Calendar or Inbox; bottom navigation; 44px touch targets. |
| iPad/tablet | Keep touch-first use while gaining room in landscape. | Portrait focused layout and/or landscape wider composition, only after physical-device QA. |
| Desktop | Keep more of the day visible at once: navigation, list/workspace, and current context. | Actual Calendar/Clients/Finance multi-pane layout at verified widths. |
| Installed mode | Reach the same product from an icon and open it without ordinary browser chrome. | Real standalone launch; no fake native shell. |

The mechanism for showing each proof is §8.2. Note that the phone and desktop rows are the same
claim seen through different chrome — bottom navigation versus the 82px rail — which is why §8.1
rule 2 treats the chrome contrast as the proof rather than as decoration around it.

### 5.3 Draft copy rails for the writing phase

These are direction rails, not pre-approved translations.

**Canonical plain-language explanation**

> Perelai works in your browser on phone, iPad and desktop. After you create your workspace, you can
> add it to your home screen or install it from a compatible browser. There is no App Store or
> Google Play download.

**Short homepage reassurance**

> Works in your browser. Install it when you are ready.

**Device-section direction**

> One workspace. The view changes with the screen.

**Search-intent FAQ question**

> Does Perelai have an iPhone or Android app?

**Answer direction**

> Perelai is not distributed through the App Store or Google Play today. Open it in your browser,
> then add it to your Home Screen or install it from a compatible browser. You can also keep using it
> in the browser without installing anything.

Copy writers must not introduce speed, offline, reliability, battery, notification, or “automatic
update” claims merely because they are common PWA benefits.

### 5.4 The store objection is an anxiety, not a feature gap (added in review pass 2)

**Skill:** `marketing-psychology`. This section is the framing contract; DVC1B implements it.

“Is there an iPhone app?” is rarely a question about distribution mechanics. Three distinct
mechanisms sit underneath it, and they need different answers:

| Underlying mechanism | What the visitor is actually asking | What answers it |
|---|---|---|
| **Legitimacy heuristic** | “Is this a real company or someone's side project?” Store presence is a proxy for having passed a gatekeeper. | Product substance, not distribution talk. A visible, real, working workspace on screen does more than any sentence about installation. This is why §8's demonstration outranks §7's prose. |
| **Ambiguity aversion** | “I don't know what I'll get, so I'd rather not find out.” Unknown process feels riskier than a known-bad one. | Removing unknowns: name the exact path, the exact number of steps, and what happens after. Certainty beats persuasion here. |
| **Access anxiety** | “Will it be on my phone when I'm standing in front of a client?” | The icon, the home screen, the standalone window. This is the one genuine benefit claim, and it is gated by §4.1. |

Framing rules, binding on all device copy:

1. **Never apologize, never over-explain.** Length signals defensiveness. The plain answer in §5.3 is
   three sentences; a six-paragraph justification converts worse than the three sentences.
2. **Do not sell the absence.** “No download!”, “No 200MB update!”, “Skip the App Store!” all make
   the store the frame of reference and invite the comparison. State the path; move on.
3. **Reduce the unknown, do not reframe it as a benefit.** “Open it in your browser, then add it to
   your Home Screen” is an instruction. “No app store friction” is a slogan defending a gap.
4. **Answer at the moment of doubt, not before it.** §6.3's placement — immediately after Money —
   is this rule applied to the homepage: the anxiety only exists once the visitor wants the product.
5. **One concession, stated calmly, buys the rest.** §4.3's required honesty language is a
   credibility instrument, not a legal disclaimer. A page that volunteers its own limitation is
   trusted on the claims it does make. Keep it visible, keep it short, do not bury it in an
   accordion.

Forbidden framings, in addition to §4.2: scarcity or urgency around installation, “most professionals
already…” style manufactured consensus, any invented count of installs or users, and any suggestion
that browser delivery is *superior* to native rather than simply how Perelai works today.

---

## 6. Information architecture and placement

### 6.1 Canonical page map

```text
Homepage (/)
├── Device reassurance near hero CTA
├── Full “on your devices” section immediately after Money
└── Link to Installation hub

Installation hub (/install)
├── What it is: browser first, optional install
├── Phone / iPad / desktop product proof
├── What changes when installed
├── iPhone + iPad guidance
├── Android guidance
├── Desktop guidance
├── Browser fallback / embedded-browser guidance
├── Honest limitations + FAQ
└── Create workspace / Log in

Niche page (/for-...)
└── Compact device reassurance after Setup, linking to /install

Pricing (/pricing)
└── Header/footer access to /install; no duplicate device section initially
```

Localized canonicals use the existing `localePrefix: as-needed` policy:

- English: `/install`
- Ukrainian: `/uk/install`
- every other currently published locale: `/<locale>/install`

At execution time use `PUBLISHED_LOCALES` from code. The verified set on 2026-07-31 is
`en, uk, pl, ru, es, fr, de, pt, tr`; do not freeze this list in new runtime code.

### 6.2 Navigation decisions

- Add one header item linking to `/install`. Preferred English label: **“Devices”** or **“On your
  devices”**, selected by copy review. Do not label it “Download”.
- Add `/install` to the Product footer group.
- Add `install` to `RESERVED_SLUGS` so it can never collide with a generated niche route.
- The route is reachable within one click from the homepage and every public page via header/footer.
- Do not add separate platform dropdowns to the main navigation.

### 6.3 Homepage placement rationale

The full section belongs **immediately after `Money`**, and ahead of `Setup`:

- the visitor has already understood the product's main value;
- device availability answers “will this fit how I work?” before migration/setup anxiety is handled;
- it avoids leading with distribution jargon;
- it provides a natural bridge from product outcomes to starting the workspace.

**Amended 2026-08-02 (TEAM1).** The binding half of this decision is the `Money → Devices` adjacency,
not literal contact with `Setup`. `Collaboration` is inserted between `Devices` and `Setup` by
`../features/00_team_collaboration_features_marketing_plan_20260802.md` §6.1, giving
`… → Money → Devices → Collaboration → Setup → …`. Devices still follows Money immediately, still
precedes migration/setup anxiety, and none of its claims, visuals, or CTA rules change. Any future
section proposing to sit between `Money` and `Devices` is still rejected by this section.

The hero gets only one short reassurance line or compact accessible device row. It must not add a
second competing CTA.

This is an explicit, narrow amendment to
`.cursor/plans/reference/messaging-and-claims.md` §7: insert **Device fit** after row 5 “Money that
adds up”, then shift the former rows 6–10 down by one. It does not change the core promise or reorder
Inbox, Booking, or Money. During DVC1, update that reference table so future executors do not receive
two conflicting homepage orders; the new row may use only existing platform claims F20/F21/F22 plus
the device claim contract.

Since 2026-08-02 that table carries a further row — **Collaboration**, row 7, immediately after Device
fit — added by TEAM1. Device fit's own row number and its position after “Money that adds up” are
unchanged. `.cursor/plans/reference/messaging-and-claims.md` §7 is the single authority on the current
homepage order; read it there rather than reconstructing it from this paragraph.

### 6.4 Niche and pricing scope

- Niche pages reuse a compact universal device block; they do not duplicate all install steps or add
  device-specific fields to every `NichePageContent` locale file.
- The pricing page initially relies on global navigation/footer and may include one factual
  capability line only if copy review shows it helps purchase anxiety.
- Do not let shared device copy inflate niche-page uniqueness or become a find-and-replace section.

### 6.5 Presentation surface map (added in review pass 2)

Which visual renders where, and — equally important — where nothing new renders. Component names
resolve against §8.2.

| Surface | Visual | Rationale |
|---|---|---|
| Homepage hero | **Unchanged.** The existing `HeroShowcase` already rotates two live phone screens. Add one line of text reassurance in the CTA microcopy area only. | The hero is the LCP element and carries the single primary CTA. Adding a device composition here costs performance and dilutes the one action. §6.3 already ruled this out; §8 does not reopen it. |
| Homepage device section (immediately after `Money`) | `DeviceDensityLadder` — one workspace at three densities, live, in a single composition. | The section's job is to make “one workspace, three densities” self-evident in under two seconds. A single continuous object does that; three tabbed panels do not (§8.3). |
| `/install` hero | `MockDesktopShell` at full width, rail visible. | Answers the category question — “is there a desktop app?” — in one glance, before the H1 is read. Desktop is the layout class a visitor is least likely to assume exists. |
| `/install` showcase | Phone / iPad / Desktop, each a live composition. Tabs are permitted **here only**, with all three panels in server-rendered DOM (§7.3). | A long-form reference page earns progressive disclosure; the homepage does not. |
| Niche pages | `DeviceConfidence` — three small neutral glyph frames, one line, one link. No product surface. | Niche pages already carry three mock surfaces. A fourth would bloat the page and dilute the niche-specific text budget that `check-uniqueness.mjs` measures. |
| Pricing | Nothing. Header/footer access only. | §6.4 already decided this. Recorded here so the surface map is exhaustive. |
| `/install` OG image | Deterministic `next/og` render of the ladder's simplified markup. | `product_mock_kit_20260728.md` §8 already established that `next/og` can render mock markup; §8.7 applies it. |

---

## 7. `/install` page content contract

### 7.1 Section order

1. **Hero — answer the category question immediately**
   - H1 names phone, iPad, and desktop without calling them separate apps.
   - Subhead says browser first and optional install.
   - Visual: `MockDesktopShell` at full width, rail visible (§6.5). The desktop layout is the one a
     visitor is least likely to assume exists, so it earns the hero slot.
   - Primary CTA: `Create workspace` through `buildAppSignupUrl`.
   - Secondary CTA: `Log in` through the existing app URL helper.
   - No install CTA on the landing origin.

2. **Responsive product proof**
   - Three accessible tabs or cards: Phone, iPad, Desktop. Tabs are permitted on this page only.
   - All three descriptions **and** all three rendered compositions exist in server-rendered HTML; a
     tab changes emphasis, never DOM presence (§7.3).
   - Visuals are the DVC2R rendered shells, localized and theme-following.
   - The one real desktop screenshot from §8.5 sits in this section, `next/image`, lazy-loaded,
     captioned `Actual product · Example data`. It is the section's honesty anchor: one place on the
     page family where the visitor sees the unedited product.

3. **What changes when you install**
   - Home-screen/desktop icon.
   - Standalone app window where supported.
   - Conditional iPhone alert benefit only when its gate passes.
   - Explicit “you can keep using the browser” fallback.

4. **Installation guidance**
   - iPhone/iPad: sign in/open Perelai, then follow the app's guided Home Screen steps.
   - Android: use the in-product Install action when the compatible browser exposes it.
   - Desktop: use the in-product Install action in a compatible browser, or bookmark/use the browser.
   - Embedded browser: open the link in Safari on iOS; do not duplicate the full `installTarget.ts`
     user-agent matrix on the landing.

5. **Honest compatibility and limitations**
   - Browser installation varies.
   - No store listing.
   - Internet connection is required unless an offline architecture is later implemented and tested.
   - The app itself shows the actionable route for the current browser.

6. **FAQ**
   - App Store / Google Play availability.
   - Use without installing.
   - iPad behavior.
   - Desktop behavior.
   - Why the Install action may not appear.
   - Offline availability.

7. **Final CTA**
   - Same `Create workspace` action and verification-email expectation as the rest of the landing.

### 7.2 Content architecture

Create a dedicated `devices` message namespace rather than adding a large platform tree to
`home.json`:

```text
messages/{locale}/devices.json
  meta
  nav
  hero
  showcase.phone|ipad|desktop
  installBenefits
  guides.iphone|ipad|android|desktop|embedded
  limitations
  faq
  cta
```

Update `i18n/messages.ts` for every current `PublishedLocale`. Do not publish `/install` for any
locale until its entire namespace, metadata, OG alt text, guides, and FAQ pass human review.

Shared compact homepage/niche copy may live under `home.devices` if it is genuinely homepage-only;
the long-form guide remains in `devices.json` to avoid loading copy responsibilities into niche
content data.

### 7.3 Progressive enhancement

- Server render all platform content.
- Tabs/disclosures may improve scanning but cannot be the only way search engines or no-JS visitors
  receive the guidance.
- Do not use landing-side user-agent detection to hide platforms or generate instructions. That
  duplicates the app's tested install routing and will drift.
- The selected platform may be explicit user state only; do not persist or send raw user-agent data.

---

## 8. Visual system, premium presentation, and asset contract

> **Rewritten in review pass 2.** The previous §8 made three real screenshots the minimum shipping
> proof. §8.0 records why that was wrong for this repository and what replaces it. §4 is unchanged.

### 8.0 Correction: the shipping visual is rendered, not captured

The original §8 was internally inconsistent. It opened with *“follow the existing Product Mock Kit
decision”* and then mandated a screenshot set that the Product Mock Kit had already rejected, for
reasons that apply here with more force, not less:

| Problem | Consequence for the device section specifically |
|---|---|
| **Theme.** `product_mock_kit_20260728.md` §4.4 requires light *and* dark. | The landing has a working theme toggle (`components/theme-toggle.tsx`, `.dark` on the root). A light-mode desktop screenshot sitting in a dark-mode device section is the exact mismatch LP5b was written to kill — and it would sit in the section whose entire job is to claim the product looks right everywhere. |
| **Locale.** `PUBLISHED_LOCALES` is 9 locales, verified in `i18n/locales.ts`. | 3 devices × 9 locales × 2 themes = **54 captures**, re-shot on every UI change. The original §8.4 anticipated this (“avoid screenshot explosion”) and resolved it by shipping English screenshots to Ukrainian and German visitors — after the plan spent all of LP4 localizing the text. |
| **Hardware dependency.** §8.2 required physical iPad Safari capture. | DVC2 blocked DVC3, which blocked DVC4–DVC7. One unavailable tablet stalled the entire plan, and the recorded status of the app's own manual matrix (§3.3, DESK20) says that availability is already uncertain. |
| **Uniqueness budget.** `scripts/check-uniqueness.mjs` tokenizes *rendered text*. | A `<img>` contributes zero. A rendered surface contributes real per-template service and expense names — the strongest defensible category per `messaging-and-claims.md` §9. |
| **Performance.** DVC5's gate forbids homepage LCP regression. | Three device screenshots in the homepage device section is the single most likely way to fail that gate. Rendered DOM paints with the page. |

**The correction:** rendered product surfaces are the **shipping** visual on every device surface.
Real screenshots remain mandatory as **evidence** (§8.5) — they are what proves the rendered surface
is honest, and they live in the claim contract and capture manifest, with exactly one shipping
exception that preserves `messaging-and-claims.md` §5.1's intent.

This does not relax honesty. It moves the honesty guarantee from “a photograph exists” to the
mechanism LP5b §6 already built and `pnpm verify:niches` already enforces: service names come from
`data/niche-catalog.generated.json`, UI labels from `data/app-ui-strings.generated.json`, and the
build fails when either stops matching the app. A rendered surface is *checkable on every commit*.
A screenshot silently rots from the moment it is taken.

### 8.1 Premium presentation principles

**Skills:** `cro`, `copywriting`, `marketing-psychology`. These are binding design rules, not taste
notes; DVC2R and DVC3 are gated on them.

The default pattern for this section — a row of three device photos with tab labels *Phone · iPad ·
Desktop* — is the pattern every template-built SaaS site uses. It reads as a compatibility matrix.
Six rules move it to a premium register:

1. **One object, not three.** The claim is “one workspace.” The visual must therefore be a single
   continuous composition that changes size, not three separate cropped images placed side by side.
   Three images say “three products”; the copy then has to argue them back into one. Let the visual
   do the work the copy would otherwise have to.
2. **The chrome is the proof.** A resized website and a real desktop application look different in
   exactly one place: the navigation chrome. Bottom bar on the phone, **82px icon rail on the
   desktop**. Rendering that contrast *is* the device claim, made pre-attentively. This is why §8.2
   treats the rail port as the highest-value component in the plan.
3. **Density carries the message, not decoration.** What changes across the ladder is how much
   context is visible — one pane, then two, then three. Nothing else should change: same workspace,
   same data, same theme, same accent. If a reader can spot a second difference, the composition is
   saying something the plan did not authorize.
4. **Restraint over spectacle.** No 3D perspective, no floating tilted devices, no glass reflections,
   no gradient blob behind the composition, no parallax, no device shadows heavier than the existing
   card shadows in `app/globals.css`. Premium reads as *quiet and exact*. One accent
   (`--brand-600`), generous space, precise alignment.
5. **Alignment is the craft signal.** The three densities share one optical baseline and one
   consistent corner-radius rhythm. Scale relationships must be deliberate and stated in the
   component, not eyeballed per breakpoint.
6. **It must survive the ugliest case.** German at 360px in dark mode with a long client name. A
   composition that only looks premium in English light mode at 1440px is not premium; it is a
   screenshot with extra steps.

**Motion:** at most one entrance transition, `prefers-reduced-motion` respected, using the existing
`components/landing/reveal.tsx`. No autoplay carousel in the device section — `HeroShowcase` already
owns the one rotating element on the homepage, and a second competes with it.

### 8.2 Component inventory

New components live in `components/mock/` in **PascalCase**, matching the shipped kit
(`MockCalendarScreen.tsx`, `MockFinanceScreen.tsx`). Presentation wrappers that are not app replicas
live in `components/devices/` in kebab-case, matching `components/homepage/`. Both conventions
already exist in the repo; do not introduce a third.

| Component | Ports / mirrors (app, read-only) | Renders | Consumed by |
|---|---|---|---|
| `MockDesktopRail` | `apps/web/src/components/layout/DesktopNavigationRail.tsx` | The 82px vertical rail: `Perelai` wordmark + `ProductStageBadge`, three primary destinations (Calendar, Clients, Finance) as stacked icon + `text-[10px]` label, a border-separated contextual group, and the pinned Profile/Settings pair at the bottom. Active state is `bg-primary/10 text-primary` with `strokeWidth 2.5`. | `MockDesktopShell` |
| `MockDesktopShell` | `apps/web/src/components/layout/DesktopWorkspace.tsx` (`lg:max-w-[1600px]`), `calendarDesktopWorkspace.ts` | Rail + list pane + detail pane, with an optional third contextual pane above the `1360px` class. Composes the **existing** `MockCalendarScreen` / `MockFinanceScreen` into the panes rather than reimplementing them. | Ladder, `/install` hero |
| `MockMobileShell` | `apps/web/src/components/layout/BottomNavigation.tsx` | The existing phone screens plus the bottom navigation bar, so the mobile/desktop chrome contrast is visible. | Ladder, `/install` showcase |
| `DeviceFrame` | — (landing-only presentation) | Neutral CSS frame in three sizes. Rounded rect, 1px `--border`, existing card shadow. Nothing that resembles specific hardware. | All of the above |
| `DeviceDensityLadder` | — (landing-only composition) | The homepage device section: the three shells in one aligned composition. | Homepage, OG |
| `DeviceConfidence` | — | Compact reassurance strip + `/install` link. Already named in the original plan. | Homepage hero microcopy, niche pages |

**Hard constraints.** No new npm dependency — LP5b §7.1 already forbids charting libraries and the
same reasoning applies to any device-mockup package. No app code imported (separate repo, Vite SPA vs
Next App Router; `product_mock_kit_20260728.md` §6). Port the **visual grammar and the i18n key
names**, never the code. No `react-router`, no `zustand` stores, no `useLocation` — the rail's active
state is a static prop on the landing.

**Rail label sourcing.** Rail labels are real product strings and must come from
`data/app-ui-strings.generated.json` via the LP5b allowlist, not hand-typed. The generator's
allowlist needs extending with the desktop navigation keys (`desktop_navigation.*` and the three
primary destination labels) — this is a DVC2R deliverable and it makes `pnpm verify:niches` fail if
the app renames a destination. Hand-typing “Calendar / Clients / Finance” would be exactly the drift
LP5b §6 exists to prevent.

### 8.3 The density ladder

The homepage device section's single composition.

```text
┌──────────────────────────────────────────────────────────────┐
│  ▭ desktop shell — rail + list + detail (+ contextual)        │
│      ┌──────────────────────────┐                             │
│      │ ▭ tablet — rail + list   │                             │
│      │      ┌───────────┐       │                             │
│      │      │ ▭ phone — │       │   one baseline, one accent, │
│      │      │ bottom nav│       │   same workspace, same data │
└──────┴──────┴───────────┴───────┴─────────────────────────────┘
                    Example data · rendered from the product's own catalog
```

Specification:

- **One dataset.** All three densities render the same `buildAppScreenDataset(...)` result for the
  page's template, locale, and market. Different data across densities would imply different
  products and would break the “one workspace” claim visually while the copy asserts it.
- **Container queries, not viewport queries.** Tailwind v4 ships `@container` natively. The ladder
  must size its panes against its own container so it composes correctly inside the homepage
  section, inside `/install`, and inside the `next/og` renderer without three separate layouts.
- **Real breakpoint values.** Pane counts change at the product's own thresholds — `1024px` and
  `1360px`, sourced from `responsiveLayout.ts` (`DESKTOP_MIN_WIDTH_REM = 64rem`,
  `WIDE_DESKTOP_MIN_WIDTH_REM = 85rem`), and the workspace caps at `1600px` per `DesktopWorkspace`.
  Do not invent marketing breakpoints. If the product's values change, the ladder must change.
- **Below `lg` the ladder stacks** into phone → tablet → desktop, each full width, each keeping its
  own chrome. It does not shrink the desktop shell to 360px, which would render the rail illegible
  and prove the opposite of the claim.
- **Accessibility.** Decorative chrome is `aria-hidden="true"` per LP5b §7.5.4. One semantic summary
  sentence outside the hidden subtree carries the message for assistive technology — a screen-reader
  user must get “one workspace across phone, tablet and desktop”, not a table of fake rows.
- **Caption.** One visible `Example data` caption inside the composition frame, per LP5b §7.5.1.
  Not three captions — one object, one caption.

**Optional, only if DVC7 performance allows:** a single accessible width control (three radio
buttons: `Phone · Tablet · Desktop`) that changes the ladder container's width class. This makes the
adaptation *observable* rather than asserted, which is the strongest available form of the claim. It
must be progressive enhancement — all three densities render server-side and the control only
emphasizes one. If it costs more than one small client component, drop it; the static ladder already
carries the message.

### 8.4 Device frame rules

- Frames are CSS: rounded rectangle, 1px `--border`, the existing card shadow, `--card` fill. Corner
  radius scales with frame size; the phone is the roundest.
- **No hardware likeness.** No notch, no Dynamic Island, no home indicator, no camera dot, no
  side buttons, no Apple or Google device renders, no product photography. §8.6 already forbids
  trademark use as implied endorsement; frames are where that rule is most often broken.
- No browser chrome, no fake URL bar, no traffic-light dots. The claim is about the workspace, and a
  fake address bar reading `perelai.app` is a fabricated artifact.
- No status bar with an invented time or battery level.
- Tokens only. No hardcoded hex — `app/globals.css` defines light and dark ramps precisely so these
  compositions follow the theme.

### 8.5 Real screenshot evidence set

Screenshots are still required. Their role changes from *shipping asset* to *proof that the rendered
surface is honest*, plus one shipping exception.

| Capture | Viewport | Role | Blocking? |
|---|---:|---|---|
| Phone | `390×844` | Evidence. Attached to the claim contract; verifies `MockMobileShell` composition. | Blocks the phone claim only. |
| iPad Safari, portrait and landscape | actual effective CSS viewport, recorded | Evidence. Determines which layout class the iPad genuinely enters. | Blocks **iPad-specific** wording only. Generic “works in a supported browser” ships regardless. |
| Desktop | `1440×900` | Evidence **and** the one shipping screenshot (below). | Blocks the desktop multi-pane claim. |

**The one shipping screenshot.** `messaging-and-claims.md` §5.1, as narrowed by LP5b §5, requires at
least one real screenshot per page family: one place where a visitor sees the unedited product. For
the `/install` family that is the **desktop capture**, placed in the “Responsive product proof”
section, `next/image`, `Actual product · Example data` caption, lazy-loaded, below the fold. Desktop
is chosen deliberately — it is the least-assumed layout class and the one whose rendered replica is
newest and therefore least proven.

**Non-blocking rule.** If a device cannot be exercised, that device's *strong* claim stays `BLOCKED`
per §4, its rendered surface still ships with generic wording, and the plan continues. A missing
tablet must never stall DVC3–DVC7 again.

### 8.6 Screenshot rules

- Use synthetic names and records only; no real client data, email, phone, notes, or booking text.
- Capture the real app, not the landing mocks.
- Keep browser/device chrome neutral; do not use Apple/Google trademarks as implied endorsements.
- Add captions and callouts in HTML/CSS, not baked into the source screenshot.
- Serve responsive WebP/AVIF through `next/image` with explicit dimensions and `sizes`.
- Target `<200KB` per served screenshot variant where visual quality permits.
- Lazy-load below-the-fold images; only an above-the-fold `/install` hero proof may be prioritized.
- Preserve an original lossless source outside the served asset path or in the documented capture
  workflow; never repeatedly recompress an already compressed export.
- Use localized alt text. Do not pretend an English screenshot is localized; if the UI is English,
  the caption says so or the visual is treated as language-neutral product proof.

### 8.7 Avoid screenshot explosion

Do not capture `3 devices × every niche × every locale × light/dark`. The evidence set in §8.5 plus
the rendered surfaces cover the plan. Add another screenshot only when it answers a measured
objection the rendered composition cannot answer — and record that objection in
`docs/device-copy-audit.md` before capturing.

### 8.8 OG image

Create one deterministic `/install` OG composition. It renders `DeviceDensityLadder`'s simplified
markup through the existing `lib/og-image.tsx` seam — the same combinatorics saving LP5b §8 applied
to social previews, now applied to the device story. It must not contain fake store badges,
hardcoded unsupported copy, tiny unreadable interface text, or a `Date.now()`-dependent value.

### 8.9 Anti-patterns — reject on sight

A reviewer should be able to fail a DVC2R/DVC3 deliverable against this list without further debate:

| Anti-pattern | Why it fails |
|---|---|
| Three separate device images in a row | Contradicts the “one workspace” claim the section exists to make (§8.1.1). |
| Tilted/3D/perspective device renders | Spectacle over substance; also makes the UI unreadable at the size it ships. |
| iPhone-shaped frame with notch or Dynamic Island | Hardware likeness and trademark implication (§8.4, §8.6). |
| Fake browser chrome or URL bar | Fabricated artifact. |
| Gradient blob / glow behind the composition | Not in the design system; `app/globals.css` has no token for it. |
| A desktop shell squeezed to 360px | Proves the opposite of the responsive claim. |
| Hand-typed rail labels | Bypasses the LP5b drift guard (§8.2). |
| Different data across the three densities | Reads as three products. |
| Second autoplaying carousel on the homepage | Competes with `HeroShowcase`; WCAG 2.2.2 surface area for no gain. |
| App Store / Google Play badge in any form | §4.2, absolute. |
| Any AI-generated, redrawn, or “cleaned up” product UI | §8.6, absolute, no exceptions. |

---

## 9. SEO, schema, and store-intent handling

### 9.1 Search intent

The page should answer branded navigation intent such as:

- Perelai app
- Perelai iPhone / iOS
- Perelai Android
- Perelai iPad
- Perelai desktop
- install Perelai

These are hypotheses, not claimed search-volume findings. Do not keyword-stuff the H1 or create
platform pages until Search Console shows enough distinct demand and distinct content to justify
them.

### 9.2 Metadata direction

English starting point, subject to the existing `<=60`/`<=155` checks:

- **Title:** `Perelai on iPhone, Android, iPad & Desktop`
- **Description:** `Use Perelai in your browser on phone, tablet or desktop, then install it from a compatible browser when you are ready.`

Each locale needs a human-reviewed transcreation, not a mechanical list of English platform terms.
Keep Apple product names and Android brand terms accurate in the target language.

### 9.3 Structured data

For `/install`:

- `SoftwareApplication`, `applicationCategory: BusinessApplication`;
- `operatingSystem: Web browser` or an equally accurate web-only value;
- visible `featureList` limited to claims present on the page;
- optional semantic `HowTo` nodes only for the visible, platform-specific instruction blocks and
  only after current schema guidance is checked;
- `BreadcrumbList` for Home → Install;
- no `MobileApplication`;
- no `Offer`, rating, review, download count, or app-store URL;
- no `FAQPage` markup under the existing 2026 integrity ruling; keep the FAQ visible for people.

Schema validation does not imply a promised Google rich result.

### 9.4 Internal and machine-readable surfaces

- Add `/install` to `sitemap.ts` for every published locale with reciprocal alternates.
- Add `/install` to the key URLs and truthful platform description in `llms.txt`, derived from the
  same English source as the page.
- Do not create an `app-store.json`, fake manifest for the landing, or a second install manifest.
- The installable manifest stays owned by `perelai.app`, not `perelai.com`.

### 9.5 Answer-engine visibility (added in review pass 2)

**Skill:** `ai-seo`. Owned by DVC1A (research) and DVC6A (implementation).

This is the section the original plan was missing, and it is the highest-leverage marketing addition
in this review. “Does *X* have an iPhone app?” is a **factual, single-answer, zero-click question** —
the exact query shape that AI assistants answer directly and that users increasingly never bring to a
search results page at all. Three consequences:

1. **An assistant will answer this question about Perelai whether or not `/install` exists.** With no
   authoritative source, it answers from inference — and the most probable inference for a product
   with no store listing is “web-only, no mobile app”, which is both wrong (installable, home-screen
   icon, standalone window) and disqualifying for a mobile-first ICP.
2. **`/install` is unusually well-suited to being cited.** It is a direct answer to a direct
   question, it is self-contained, and it needs no ranking authority to be quoted — extraction favors
   structure and clarity over domain strength.
3. **The plan's existing anti-fabrication discipline is an advantage here, not a tax.** The claim
   contract in §4 produces exactly the kind of precise, verifiable, hedge-free statements that get
   quoted, and none of the marketing inflation that gets skipped.

Requirements:

- **One extractable answer block.** The `/install` FAQ answer to the store question must be a
  self-contained 40–60 word paragraph that is correct when quoted with zero surrounding context. It
  must name the product, the category, and all three facts from §4.3 without a pronoun that needs a
  prior sentence to resolve. Test it by reading it alone: if “it” is ambiguous, rewrite.
- **Question-shaped headings.** `/install` FAQ headings use the visitor's own phrasing from DVC1A
  research (“Does Perelai have an iPhone app?”), not marketing labels (“Availability”). Extraction
  matches question to heading.
- **Entity consistency across every surface.** `/install` page copy, `llms.txt`, the
  `SoftwareApplication` node, and the OG description must describe the platform situation in
  *mutually consistent* terms. Contradiction between a page and its own structured data is a known
  reason a source gets skipped. DVC6A already derives `llms.txt` from the same English message source
  — §9.5 makes that a correctness requirement rather than a convenience.
- **Answer the negative directly.** State plainly that there is no App Store or Google Play listing.
  An assistant asked “is there an App Store app?” needs a quotable *no* with the alternative attached
  in the same breath. Omitting the negative does not make it unsaid — it makes it inferred, badly.
- **`llms.txt` carries the platform answer verbatim**, not a link to it. `app/llms.txt` already
  exists and `buildLlmsTxt()` already has the seam.

Explicitly **not** in scope, so no executor invents them: no separate AI-only content variant (that
is scaled-content abuse and Google's own guidance forbids writing separately for AI), no chunking the
page for retrieval, no `FAQPage` markup (already barred by §9.3 under the 2026 integrity ruling), no
llms-full.txt, and no fabricated statistics added to attract citation.

**Measurement is manual and cheap.** DVC6A records a baseline by asking four assistants
(ChatGPT, Perplexity, Google AI Overviews, Claude) three questions — “does Perelai have an iPhone
app”, “is Perelai available on Android”, “can I use Perelai on desktop” — and pasting verbatim
answers with dates into `docs/research/`. Re-check once post-launch. That is a directional
observation log, not a metric; label it as such and do not build a dashboard for it.

---

## 10. Analytics and experiment contract

### 10.1 Decisions to measure

1. Do visitors who see device reassurance proceed to signup more often?
2. Does `/install` attract branded/search intent that otherwise bounces?
3. Which explicit guide is opened most often?
4. Do `/install` visitors complete onboarding, not merely click Create workspace?

### 10.2 Event changes

Extend the typed provider-neutral adapter only; keep PostHog autocapture/replay off.

| Event/change | Trigger | Properties |
|---|---|---|
| Extend `LandingPageType` with `install` | `/install` page view through existing `landing_viewed` | existing properties only |
| Extend `CtaPosition` | `/install` create/login CTA and homepage device CTA | fixed enum values such as `install_hero_signup`, `install_login`, `device_section_signup` |
| `device_message_viewed` | Device section is at least 50% visible, once per surface | `surface: home|niche`, `locale` |
| `install_guide_opened` | User explicitly opens/selects a guide | `platform: iphone|ipad|android|desktop|browser`, `source_page` |
| `install_help_clicked` | Visitor follows an internal link to `/install` | `source_surface: hero|home_section|niche|header|footer|faq` |

Do not send raw user-agent, screen resolution, installed status, notification permission, device
model, or browser version. The `platform` property records the guide the visitor chose, not an
inferred device fingerprint.

Update `docs/tracking-plan.md` and add typed tests before collection.

### 10.3 Funnel

```text
landing_viewed(page_type=install)
  → install_guide_opened? / install_help_clicked?
  → landing_cta_clicked
  → signup_started
  → onboarding_completed (app-side guardrail)
```

### 10.4 Experiment backlog

Do not launch these automatically. Add them to `docs/experiment-backlog.md` with baseline, MDE,
alpha, power, sample per variant, and guardrails.

| Hypothesis | One variable | Primary | Guardrail |
|---|---|---|---|
| Early device reassurance reduces “no app” uncertainty. | Reassurance row present vs absent near hero CTA. | `signup_started / homepage session` | `onboarding_completed` rate, mobile vs desktop sanity segments only if sufficiently powered. |
| Outcome framing beats install framing. | “One workspace across your devices” vs “Install from your browser”. | Device-section CTA rate or signup rate, predeclared. | Bounce and onboarding completion. |
| A single static three-device composition is clearer than tabs. | Visual presentation only; identical copy. | `/install` signup rate | Guide engagement and performance. |
| Header access helps high-intent visitors. | Header `/install` link present vs footer/section only. | `/install` qualified visits → signup | Homepage primary CTA rate. |

If traffic is insufficient, use a fixed two-week decision log and label the result directional, not
statistically significant.

---

## 11. Ordered implementation phases

Execute one phase at a time with the matching prompt from the companion document. A smaller LLM gets
the full universal preamble plus exactly one phase prompt.

| Order | Phase | Purpose | Depends on |
|---:|---|---|---|
| 1 | DVC0 | Baseline, evidence inventory, device claim contract | current code |
| 2 | DVC1 | Research, positioning-context update, content architecture, English copy | DVC0 |
| 3 | DVC2 | Real screenshot **evidence** capture + the one shipping desktop asset | DVC0, authenticated app |
| 4 | **DVC2R** | **Rendered device shell kit — rail, shells, frames, density ladder** | DVC0; DVC2 evidence where available |
| 5 | DVC3 | Device presentation components and translated namespace | DVC1, DVC2R |
| 6 | DVC4 | Canonical localized `/install` route and navigation | DVC3 |
| 7 | DVC5 | Homepage, niche, FAQ, and restrained pricing integration | DVC4 |
| 8 | DVC6 | SEO, schema, answer-engine surfaces, machine-readable output, analytics | DVC4, DVC5 |
| 9 | DVC7 | Cross-device, accessibility, performance, design, claims, and release audit | DVC0–DVC6 |
| 10 | DVC8 | Experiment-readiness backlog; no automatic test launch | DVC7 + traffic baseline |

**Dependency change from review pass 2.** DVC3 now depends on DVC2R (rendered), not DVC2
(screenshots). DVC2 evidence gates *claims*, per §4 and §8.5, but no longer gates *components*. A
missing physical device blocks one row in the claim contract; it does not stall the build.

### DVC0 — Baseline and claim contract

**Skills:** `product-marketing`, `copy-editing`.

Deliver:

- `docs/device-claim-contract.md` with each proposed claim, code source, manual evidence, status
  (`PASS`, `BLOCKED`, `FORBIDDEN`), owner, and date;
- `docs/device-validation-matrix.md` with exact platform/browser/viewport cases;
- an inventory of current app install entry points and responsive breakpoints;
- a screenshot/evidence gap list;
- no public component/copy changes.

Gate:

- offline/native/store claims are `FORBIDDEN`;
- desktop/iPad/Android install claims remain `BLOCKED` until manual evidence exists;
- the app repo remains unmodified;
- `git diff --check` passes.

### DVC1 — Research, context, and English copy

**Skills:** `customer-research`, `product-marketing`, `copywriting`, `copy-editing`, `cro`,
`marketing-psychology`, `ai-seo`, `site-architecture`, `aso` (advisory only, per §2.1).

Deliver:

- a source-provenance research note for device/install questions;
- confidence labels (`High`, `Medium`, `Low`) and explicit research gaps;
- update `.agents/product-marketing.md` Platform/Objections/Customer Language sections, bump version,
  prepend changelog entry;
- `messages/en/devices.json` complete copy;
- compact English homepage/niche/FAQ additions;
- approved page outline and internal-link map;
- the minimal source-backed Platform claim-ledger amendment in
  `reference/messaging-and-claims.md` §2 for any new no-store/online/browser limitation that will
  appear publicly;
- the narrow homepage-order amendment in `reference/messaging-and-claims.md` §7, using only existing
  F20/F21/F22 claims;
- no translation and no page/component implementation. This is a draft content artifact until DVC2
  evidence closes every device-specific `BLOCKED` row; blocked lines are annotated in the copy audit
  and are not treated as publishable.

Gate:

- every claim maps to `docs/device-claim-contract.md`; a `BLOCKED` draft is clearly marked and cannot
  advance into DVC3 shipping copy until DVC2 supplies evidence or the line is removed;
- every new shippable product fact also exists in `messaging-and-claims.md` §2 with a source;
- the copy says browser first, optional install, no store;
- `PWA`, `native`, `offline`, `download`, and false store language are absent from public copy;
- Seven Sweeps copy-editing pass recorded.

### DVC2 — Device evidence capture

**Skills:** `image`, `copy-editing`.

Deliver:

- the §8.5 evidence captures from a synthetic workspace, as far as available hardware permits;
- the one shipping desktop screenshot, optimized, with `Actual product · Example data` caption spec;
- `docs/device-capture-manifest.md` with app commit, route, viewport, DPR, browser,
  physical/simulator/emulated, locale, theme, capture date, file size, and claim supported;
- a written record of which layout class each device **actually** entered, feeding §8.2's shell
  specification;
- no AI-generated UI and no app code changes.

Gate:

- PII scan clean;
- captures match actual layouts at the recorded viewport;
- served asset budget met or exception documented;
- unavailable physical-device evidence blocks that device's strong claim **and nothing else** —
  record the blocked row and continue to DVC2R.

### DVC2R — Rendered device shell kit

**Skills:** `cro`, `copy-editing`, `marketing-psychology` (for §8.1 rule 3 — what the density
difference is allowed to say). Repo-local design/TDD conventions apply as in LP5b.

This phase did not exist before review pass 2. It is where the premium presentation is actually
built, and it is the load-bearing phase of the plan.

Expected landing files:

```text
components/mock/MockDesktopRail.tsx
components/mock/MockDesktopShell.tsx
components/mock/MockMobileShell.tsx
components/mock/index.ts                    # extend the existing barrel
components/devices/device-frame.tsx
components/devices/device-density-ladder.tsx
scripts/generate-niche-catalog.mjs          # extend the DVC2R allowlist only
data/app-ui-strings.generated.json          # regenerated output
scripts/verify-niches.mjs                   # one new failure condition
tests/device-shell.test.ts
```

Deliver:

- the components in §8.2, meeting the principles in §8.1 and the ladder spec in §8.3;
- an extension of the LP5b string allowlist covering `desktop_navigation.*` and the three primary
  destination labels, so rail labels are generated, never hand-typed;
- one new `verify-niches` failure condition: a key referenced by `components/mock/MockDesktopRail`
  is absent from `app-ui-strings.generated.json` for any published locale;
- deterministic rendering — one `buildAppScreenDataset` result feeds all three densities;
- no route, navigation, homepage, niche, metadata, schema, or analytics change.

Gate:

- **zero new npm dependencies** — `rg "device-mockup|react-device|@react-three|recharts" components lib`
  returns nothing;
- no hardcoded hex; every color resolves to an `app/globals.css` token;
- renders in all 9 `PUBLISHED_LOCALES` × light/dark × 360px/768px/1024px/1360px/1600px with no
  overflow, no clipping, no illegible rail label;
- `de` and `uk` at 360px pass without truncation beyond the app's own `truncate` behavior;
- decorative chrome is `aria-hidden`; the semantic summary sentence exists outside it;
- removing an allowlisted rail key from a fixture makes `pnpm verify:niches` exit non-zero;
- SSG output byte-identical across two builds and two simulated regions (LP5b §7.7 still holds);
- no `Date.now()` in any new module;
- every §8.9 anti-pattern absent;
- sibling app has no diff.

### DVC3 — Device presentation components and localization

**Skills:** `copy-editing`, `cro`.

Expected landing files:

```text
components/devices/device-confidence.tsx
components/devices/device-showcase.tsx
components/devices/platform-guide.tsx
components/devices/device-page.tsx
messages/{locale}/devices.json
i18n/messages.ts
tests/device-content.test.ts
tests/device-components.test.tsx (if the current test stack supports DOM rendering)
```

Requirements:

- compose DVC2R's shells and ladder; do not reimplement product surfaces here;
- server components by default;
- client code only for the `/install` showcase tabs, the optional ladder width control, and view
  events;
- all platform guidance remains in the DOM;
- no UA detection;
- use `next/image` for the one shipping screenshot; no hardcoded hex; no store badges;
- every currently published locale complete and human-reviewed before route publication;
- rerun the DVC1 copy audit after DVC2 and translate only claims whose final status is `PASS`.

Gate:

- message-key parity across all current `PUBLISHED_LOCALES`;
- 320px through 1600px, long translations, light/dark, keyboard, and no-JS checks;
- screenshot captions and alt text accurate;
- §8.1 and §8.9 reviewed explicitly, with the reviewer's verdict recorded in
  `docs/device-copy-audit.md`.

### DVC4 — `/install` route and navigation

**Skills:** `site-architecture`, `copywriting`, `copy-editing`, `cro`, `signup`.

Expected files:

```text
app/[locale]/install/page.tsx
app/[locale]/install/opengraph-image.tsx
app/[locale]/install/twitter-image.tsx
components/landing/landing-header.tsx
components/landing/landing-footer.tsx
config/niche-pages.ts              # RESERVED_SLUGS only
tests/install-page.test.ts
```

Requirements:

- localized static route for every complete published locale;
- primary CTA uses `buildAppSignupUrl`; login uses the existing fixed app helper;
- no direct install/download CTA;
- header/footer link in current locale;
- `install` reserved from niche routing;
- page structure exactly follows §7.1.

Gate:

- every locale returns 200 with reciprocal alternate candidates ready for DVC6;
- all CTA URLs are allowlisted helpers;
- no `href="#"`, no raw app URL interpolation, no route collision.

### DVC5 — Homepage and niche integration

**Skills:** `cro`, `copywriting`, `copy-editing`.

Requirements:

- short reassurance near the hero CTA without a second CTA;
- `HeroShowcase` left unchanged — it already owns the homepage's one rotating element (§6.5);
- full device section immediately after `Money`, rendering `DeviceDensityLadder` as one
  composition, not tabbed panels;
- compact shared niche block after niche Setup, linked to `/install`;
- two factual homepage FAQ additions, including the store question;
- no full duplicate section on pricing; add at most one claim-audited capability line;
- internal links use current locale.

Gate:

- existing primary message and CTA hierarchy remain dominant;
- homepage mobile LCP/performance does not regress beyond the DVC7 budget;
- no second autoplaying element exists on the homepage;
- niche uniqueness checks remain green;
- every shared block is accessible and has a single clear next step.

### DVC6 — SEO, schema, machine-readable output, and analytics

**Skills:** `schema`, `analytics`, `seo-audit`, `ai-seo`, `copy-editing`.

Requirements:

- the §9.5 answer-engine contract: extractable store answer, question-shaped headings, entity
  consistency across page/`llms.txt`/JSON-LD/OG, and the manual four-assistant baseline log;
- localized metadata, canonical, `hreflang`, sitemap and OG/Twitter coverage;
- truthful web `SoftwareApplication`; optional semantic HowTo only after current validation;
- no `MobileApplication`, `Offer`, `FAQPage`, store URL, rating, review, or download count;
- derive the `/install` entry in `llms.txt` from `devices.json` or shared typed content;
- analytics event/type extensions from §10, with no device fingerprinting;
- update `docs/tracking-plan.md`.

Gate:

- metadata lengths and title uniqueness for **every** published locale;
- schema.org validation;
- analytics events dedupe and contain fixed enums only;
- sitemap lists `/install` in every locale with reciprocal alternates.

### DVC7 — Final release audit

**Skills:** `copy-editing`, `cro`, `seo-audit`, `schema`, `analytics`.

Deliver `docs/device-release-evidence.md` with one row per requirement:

```text
requirement | evidence/command | result | owner | date | blocker
```

Automated gate:

- `pnpm typecheck`;
- `pnpm lint`;
- `pnpm test`;
- `pnpm verify:niches`;
- `pnpm build`;
- `git diff --check`;
- banned-claim scan;
- metadata/schema/sitemap/analytics tests;
- image asset budget check.

Manual gate:

- matrix in §3.3 and §13;
- 200% zoom and reduced motion;
- keyboard and screen reader smoke;
- all published locales in light/dark;
- normal browser use and supported install paths;
- installed standalone launch;
- no install action shown once already installed;
- embedded-browser escape path;
- Internet loss does not contradict page copy.

Verdict is `READY` only when every published claim has evidence. Otherwise use `BLOCKED` plus the
smallest exact blocker list; do not downgrade claims silently after review without updating the
claim contract.

### DVC8 — Experiment readiness

**Skills:** `ab-testing`, `analytics`, `cro`.

- Add the §10.4 hypotheses to `docs/experiment-backlog.md` with ICE scores.
- Calculate sample size from measured baseline and chosen MDE, alpha, and power.
- Name one primary metric and guardrails per experiment.
- Do not start an A/B test when traffic cannot reach the committed sample in a reasonable window.
- Use `docs/decision-log.md` for directional pre-volume changes.

Gate: the prompt states plainly whether a valid test is possible now. “Not enough traffic” is a valid
result; inventing statistical confidence is not.

---

## 12. Expected landing file map after execution

```text
app/[locale]/install/
├── page.tsx
├── opengraph-image.tsx
└── twitter-image.tsx

components/mock/                       # PascalCase — app-surface replicas
├── MockDesktopRail.tsx
├── MockDesktopShell.tsx
├── MockMobileShell.tsx
└── index.ts                           # extended barrel

components/devices/                    # kebab-case — landing presentation
├── device-confidence.tsx
├── device-density-ladder.tsx
├── device-frame.tsx
├── device-page.tsx
├── device-showcase.tsx
└── platform-guide.tsx

messages/{locale}/devices.json
public/product/devices/*               # the one shipping screenshot + OG source
data/app-ui-strings.generated.json     # regenerated, rail keys added
docs/device-claim-contract.md
docs/device-validation-matrix.md
docs/device-capture-manifest.md
docs/device-copy-audit.md
docs/device-release-evidence.md
docs/research/device-install-intent-2026-07-31.md
tests/device-content.test.ts
tests/device-shell.test.ts
tests/install-page.test.ts
```

The two naming conventions are deliberate and both already exist in the repository: app-surface
replicas are PascalCase under `components/mock/`, landing presentation is kebab-case under
`components/homepage/`-style directories. Do not unify them in this plan.

Names may change only when the existing repository already provides an equivalent seam. Do not
create parallel helpers for URLs, locale routing, analytics, OG rendering, or JSON-LD.

---

## 13. Required validation matrix

| Surface | Width / device | Browser/mode | What must be proved |
|---|---|---|---|
| Landing homepage | 320, 360, 390 | Chrome/Safari responsive emulation | Reassurance does not crowd CTA; device section scans; no horizontal scroll. |
| Landing `/install` | 320–430 | iPhone/Android emulation + one physical phone | All content and CTAs usable; no fake direct-install behavior. |
| Landing `/install` | 768, 820, 1024 | tablet portrait/landscape | Cards/tabs and real screenshots match captions; touch targets >=44px. |
| Landing `/install` | 1360, 1440, 1600 | desktop Chrome/Edge | Desktop proof readable; layout capped; no oversized empty canvas. |
| App normal browser | iPhone Safari | browser | Login/use without installing; guided Home Screen instructions. |
| App standalone | iPhone/iPad | home-screen launch | Icon and standalone window; conditional push only if production verified. |
| App normal browser | Android Chrome | browser | App usable; native prompt/install action only when browser exposes it. |
| App standalone | Android compatible browser | installed | Icon launch and standalone display. |
| App normal browser | desktop Chrome/Edge | `1024`, `1360`, `1600` | Two-/three-pane claims match actual UI. |
| App fallback | desktop Safari/Firefox | browser | Product remains usable even when install action is absent. |
| App embedded | Instagram-style iOS webview | embedded → Safari | Escape guidance is truthful and actionable. |
| Rendered device surfaces | 360, 768, 1024, 1360, 1600 | light and dark, `en` and `de` | Ladder stacks below `lg`; pane count changes only at the product's real thresholds; rail labels legible; no clipping; every §8.9 anti-pattern absent. |
| Rendered device surfaces | any | theme toggle | Compositions follow light/dark in both directions — the failure mode a screenshot would have shipped. |
| Rendered device surfaces | any | two consecutive builds | `/install` HTML byte-identical; no `Date.now()` leakage. |
| Accessibility | all layout classes | keyboard, reduced motion, 200% zoom | One active tree, visible focus, correct headings/labels, no content loss. Decorative chrome hidden; semantic summary reachable. |
| Localization | all `PUBLISHED_LOCALES` | light and dark | Complete strings, correct platform terminology, no clipping. |

Physical-device availability must be recorded. Emulation alone does not validate browser install UI.

---

## 14. Definition of Done

- [ ] Device positioning supports rather than replaces the clients/bookings/cash-flow value prop.
- [ ] Public copy never uses `PWA` as prospect-facing terminology.
- [ ] Public copy clearly states browser first, install optional, and no current store listing.
- [ ] No native/offline/download/store badge implication exists.
- [ ] `/install` is canonical, localized, static, internally linked, and non-orphaned.
- [ ] No thin `/ios-app`, `/android-app`, `/ipad-app`, or `/desktop-app` pages exist.
- [ ] Homepage has one short early reassurance and one full device section in the decided position.
- [ ] Niche pages use one compact shared device block; uniqueness gates remain green.
- [ ] CTAs still create/login to the workspace; no landing-origin fake install CTA exists.
- [ ] The device story is demonstrated by rendered product surfaces, not asserted beside stock imagery.
- [ ] `MockDesktopRail` labels come from `app-ui-strings.generated.json`; `verify:niches` fails if they drift.
- [ ] The density ladder renders one dataset at three densities using the product's real breakpoints.
- [ ] Every §8.1 principle holds and no §8.9 anti-pattern is present, verdict recorded by a reviewer.
- [ ] All device visuals follow the theme toggle and render in all 9 locales, light and dark.
- [ ] The one shipping desktop screenshot is real, synthetic, PII-free, and accurately captioned.
- [ ] Repeated/localized visuals are rendered, never captured — no screenshot explosion.
- [ ] Every strong device claim has current manual evidence; a missing device blocks its claim only.
- [ ] The store answer is quotable standalone; page, `llms.txt`, JSON-LD and OG do not contradict each other.
- [ ] A four-assistant answer baseline is logged with dates in `docs/research/`.
- [ ] Every published locale has complete, human-reviewed device copy and metadata.
- [ ] Schema describes a web application only and matches visible content.
- [ ] Sitemap, canonicals, hreflang, OG/Twitter, and llms.txt include `/install` truthfully.
- [ ] Analytics answers a named decision without device fingerprinting or PII.
- [ ] No A/B test runs without a precommitted sample calculation.
- [ ] Typecheck, lint, tests, niche verification, build, claims scan, asset budget, and manual matrix pass.
- [ ] `docs/device-release-evidence.md` ends in `READY`; otherwise the release remains `BLOCKED`.

---

## 15. Explicit non-goals

- Building native iOS, Android, iPadOS, Windows, or macOS applications.
- Creating or optimizing App Store / Google Play listings.
- Changing `manifest.json`, service-worker/offline architecture, or install detection in the app.
- Fixing desktop app defects inside the landing task.
- Duplicating `installTarget.ts` logic on the landing.
- Adding landing-side browser/device fingerprinting.
- Creating four platform SEO pages before measured demand and differentiated content exist.
- Adding offline support, background sync, deep OS integrations, or push infrastructure.
- Rewriting the homepage core positioning, niche rollout, pricing policy, or app onboarding contract.
- Generating product UI with an image model.
- Importing app code into the landing, or adding `react-router`/store dependencies to render the rail.
- Adding any device-mockup, 3D, or charting npm package.
- Redesigning the existing `HeroShowcase`, mock kit, or `app/globals.css` token ramps.
- Building an AI-only content variant, chunked retrieval file, or `llms-full.txt`.
- Creating a competitor comparison page positioning Perelai against native apps.

Any app defect found during the device matrix becomes a separately scoped app issue/blocker. It is
not silently patched from this landing plan.
