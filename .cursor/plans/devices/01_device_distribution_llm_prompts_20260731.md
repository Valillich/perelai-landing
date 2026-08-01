# Copy/Paste Prompts — Device Distribution & Responsive Product Marketing

Use these prompts with
[`00_device_distribution_marketing_plan_20260731.md`](00_device_distribution_marketing_plan_20260731.md).
They are deliberately narrow so a smaller LLM does not mix research, copy, assets, routing, SEO,
analytics, and release validation in one turn.

For every task, paste the **Universal preamble** and then exactly one phase prompt. Run DVC1A before
DVC1B and DVC6A before DVC6B. Do not start a later phase when the current gate is blocked.

**Updated 2026-07-31, review pass 2.** New phase **DVC2R** (rendered device shell kit) sits between
DVC2 and DVC3 and is now what DVC3 depends on. DVC2 became evidence capture and no longer blocks
components. Skill loads changed in DVC1A, DVC1B, DVC4, and DVC6A. A design/visual section was added
to the universal preamble, and reusable prompt **R-DVC3** audits premium presentation.

**Run order:**

```text
DVC0 → DVC1A → DVC1B → DVC2 → DVC2R → DVC3 → DVC4 → DVC5 → DVC6A → DVC6B → DVC7 → DVC8
                                ↑
                    DVC2 may return BLOCKED rows for
                    unavailable devices. That blocks those
                    claims only. DVC2R and everything after
                    it still runs.
```

---

## Universal preamble — prepend to every executor prompt

> You are working in `/Users/valery/Sites/perelai-landing` (Next.js 16 App Router, React 19,
> Tailwind v4, next-intl, Vitest). Start with `git status --short --untracked-files=all`; preserve
> every existing user change and never revert unrelated files.
>
> Read these files before editing:
>
> 1. `.cursor/plans/devices/00_device_distribution_marketing_plan_20260731.md` in full;
> 2. `.cursor/plans/01_plan_integrity_review_20260729.md`;
> 3. `.cursor/plans/00_architecture_review_20260725.md`;
> 4. `.cursor/plans/product_mock_kit_20260728.md`;
> 5. `.cursor/plans/reference/messaging-and-claims.md`;
> 6. `.agents/product-marketing.md`;
> 7. `CONTEXT.md` and `/Users/valery/Sites/perelai-workspace/CONTEXT.md`.
>
> The sibling app is **read-only evidence**. Never modify anything under
> `/Users/valery/Sites/beauty-finance`. When the phase touches device or install claims, inspect the
> following paths **inside that sibling repository**:
>
> - `apps/web/public/manifest.json` and `apps/web/index.html`;
> - `apps/web/src/utils/installTarget.ts`;
> - `apps/web/src/hooks/usePwaPrompt.ts`;
> - `apps/web/src/components/ui/IosInstallPrompt.tsx`;
> - `apps/web/src/components/settings/InstallAppSettingsControl.tsx`;
> - `apps/web/src/components/onboarding/OnboardingReviewStep.tsx`;
> - `apps/web/src/utils/responsiveLayout.ts`;
> - `/Users/valery/Sites/beauty-finance/.cursor/plans/minimal_desktop_ready_layer_20260714.plan.md`
>   §11 and the latest validation evidence.
>
> When the phase builds or reviews a **device visual**, also read, as read-only reference for visual
> grammar and i18n key names — never to copy code:
>
> - `apps/web/src/components/layout/DesktopNavigationRail.tsx` (the 82px rail);
> - `apps/web/src/components/layout/DesktopWorkspace.tsx` (`lg:max-w-[1600px]` cap);
> - `apps/web/src/components/layout/BottomNavigation.tsx` (the mobile chrome it contrasts with);
> - `apps/web/src/utils/desktopRailRouteState.ts` (which destinations the rail shows);
> - `apps/web/src/utils/calendarDesktopWorkspace.ts` (pane composition);
>
> and, in the landing, the visual system that already exists:
>
> - `components/mock/*` — the shipped app-screen replicas you must compose, not replace;
> - `components/homepage/hero-showcase.tsx` — the established composition pattern;
> - `lib/app-screen-mock.ts` and `lib/mock-data.ts` — the deterministic dataset builders;
> - `app/globals.css` — every color token, light and dark.
>
> Read every marketing skill named by this phase **in full before editing** at
> `/Users/valery/.agents/skills/<skill>/SKILL.md`. Do not load unrelated skills. The current code,
> device claim contract, product marketing context, and messaging claim rails outrank generic skill
> advice.
>
> Hard rules:
>
> - “PWA” is allowed in internal engineering notes only, never in prospect-facing copy, navigation,
>   metadata, CTA text, or FAQ questions.
> - Never say or imply: native app, App Store availability, Google Play availability, download,
>   offline use, offline sync, one-click install in every browser, or store endorsement.
> - Never render an official-looking App Store or Google Play badge without a real listing.
> - Perelai works in the browser first. Installation remains optional and non-blocking.
> - `perelai.com` cannot directly install the authenticated app on `perelai.app`; landing CTAs create
>   a workspace or log in through existing URL helpers.
> - Do not copy user-agent/install-routing logic from the app into the landing.
> - Do not generate or reconstruct product UI with AI. Real screenshots come from a synthetic,
>   authenticated app workspace; repeated/localized visuals use the existing rendered mock system.
>
> Visual and design rules (apply to any phase that touches a component or an asset):
>
> - **The shipping device visual is rendered DOM, not a screenshot.** The landing already has a mock
>   kit (`components/mock/`) that is theme-aware, localized in 9 locales, and verified against the
>   app's own generated strings. Compose it. Plan §8.0 explains why; do not reopen that decision.
> - **Read plan §8.1 (premium principles) and §8.9 (anti-patterns) before writing any JSX.** §8.9 is
>   a reject-on-sight list — if your output contains one of those items, you have failed the phase.
> - One object, not three. One accent (`--brand-600`). No 3D, no tilt, no glow, no gradient blob, no
>   fake browser chrome, no notch, no hardware likeness, no device photography.
> - **No hardcoded hex, ever.** Every color is an `app/globals.css` token so the theme toggle works.
> - **Zero new npm dependencies.** No device-mockup package, no 3D library, no charting library.
>   This is a marketing site with a Lighthouse gate.
> - Naming: app-surface replicas are **PascalCase** in `components/mock/`; landing presentation is
>   **kebab-case** in `components/devices/`. Both conventions already exist — follow them, do not
>   unify them.
> - Product strings inside a mock (including rail labels) come from
>   `data/app-ui-strings.generated.json`. Never hand-type a product label.
> - Never call `Date.now()` in a rendered surface — SSG output must be byte-identical between builds.
> - Decorative mock chrome is `aria-hidden="true"`, with one semantic summary sentence outside the
>   hidden subtree.
> - Every visual carries a visible `Example data` caption inside its frame.
> - Use the current `PUBLISHED_LOCALES` from code. Never hand-maintain a second locale list.
> - Use existing helpers for app URLs, locale paths, analytics, JSON-LD, OG images, and niche route
>   reservations; do not create parallel utilities.
> - Do exactly the phase you were given. Do not begin the next phase.
> - After code phases, run the phase gate plus `pnpm typecheck`, `pnpm lint`, relevant tests,
>   `pnpm verify:niches`, `pnpm build`, and `git diff --check` unless the phase explicitly limits
>   itself to documentation.
> - If proof is missing, mark the claim/release `BLOCKED`. Do not soften or invent evidence to keep
>   moving.

---

## DVC0 — Baseline and device claim contract

> Load **`product-marketing`** and **`copy-editing`**.
>
> Execute plan phase **DVC0 only**. Make no public copy, component, route, metadata, schema, analytics,
> image, or app change.
>
> Inspect current landing and app code instead of treating old plan status as current. Produce:
>
> 1. `docs/device-claim-contract.md` with columns:
>    `claim | public wording | code source | manual evidence | status | owner | checked date`.
>    Allowed statuses are `PASS`, `BLOCKED`, `FORBIDDEN`. Include every row from plan §4.1–§4.2.
> 2. `docs/device-validation-matrix.md` transcribing plan §13 and adding exact device/browser versions
>    that are actually available to the tester. Distinguish physical device, simulator, browser
>    emulation, and unit test evidence.
> 3. A concise inventory inside the claim-contract document of:
>    - current manifest/display behavior;
>    - install entry points after onboarding and in Settings/Quick Settings;
>    - iOS/iPad/browser routes from `resolveInstallRoute`;
>    - responsive layout thresholds and representative workspaces;
>    - the current absence of a general offline application-shell contract.
> 4. A gap list: which screenshots and manual cases are still unavailable.
>
> Rules:
>
> - Code presence is not physical-device evidence.
> - The incomplete authenticated DESK20 matrix remains visible; do not mark it complete from unit
>   tests.
> - Do not edit `.agents/product-marketing.md` yet; DVC1A owns that revision.
> - Do not turn “no App Store” into a product weakness or an unsupported speed/reliability benefit.
>
> **Gate:** all native/offline/store/download claims are `FORBIDDEN`; device claims without current
> manual proof are `BLOCKED`; sibling app has no diff; `git diff --check` passes. Report the smallest
> exact evidence list needed to unblock DVC2 and public copy.

---

## DVC1A — Research, positioning, and site architecture

> Load **`customer-research`**, **`product-marketing`**, **`site-architecture`**, **`ai-seo`**, and
> **`aso`** (advisory only — see plan §2.1).
>
> Execute the research/positioning half of plan phase **DVC1**. Do not write final page copy or create
> routes/components.
>
> 1. Read `docs/device-claim-contract.md`. Stop any line of inquiry that requires a forbidden claim.
> 2. Create `docs/research/device-install-intent-2026-07-31.md`.
>    Use existing first-party material first: Search Console query exports if present, founder notes,
>    support questions, signup feedback, and current landing analytics. If none exists, use clearly
>    labelled proxy sources (competitor reviews or community questions) and record URL, source kind,
>    capture date, short excerpt, theme, and segment signal.
> 3. Research these questions without presupposing their answer:
>    - Do prospects ask “is there an iPhone/Android app?”
>    - Is the concern store availability, home-screen access, notifications, desktop use, or trust?
>    - Which phrase do they use: app, install, download, home screen, browser, desktop version?
>    - At what point in the journey does the question appear?
> 4. Label every synthesis `High`, `Medium`, or `Low` using the customer-research skill. Do not invent
>    search volume, personas, or verbatim quotes. Fewer than five independent data points stays a
>    hypothesis.
> 5. Produce a final IA decision in the research document:
>    one `/install` hub; no `/ios-app`, `/android-app`, `/ipad-app`, `/desktop-app`; one-click access
>    from header/footer; homepage and niche placements exactly as plan §6.
> 6. Update `.agents/product-marketing.md` only in these sections:
>    Product Overview/Product type, Differentiation, Objections, Customer Language, Proof Points.
>    Keep the core category and GTM unchanged. Add browser-first/optional-install wording, add
>    `PWA`, `native app`, `download`, `offline`, and store availability to words/claims to avoid as
>    appropriate. Increment the document version, update the ISO date, and prepend one changelog row;
>    never rewrite older changelog rows.
>
> 7. **Answer-engine baseline** (plan §9.5). Ask four assistants — ChatGPT, Perplexity, Google AI
>    Overviews, and Claude — these three questions verbatim:
>    - “Does Perelai have an iPhone app?”
>    - “Is Perelai available on Android?”
>    - “Can I use Perelai on desktop?”
>
>    Record each answer **verbatim** with the assistant name and the date in
>    `docs/research/device-answer-engine-baseline.md`. Note specifically whether the answer is wrong,
>    absent, hedged, or names a competitor. This is a directional observation log, not a metric — do
>    not compute a score, do not build a dashboard, and do not extrapolate a trend from one reading.
>    If an assistant is unavailable, record that instead of guessing what it would say.
>
> ASO is used only to understand the expectation created by the words “app”, “iPhone”, and “Android”
> and to order platform proof. There is no listing URL; do not search for, create, score, or optimize a
> fake store listing. Do not let it pull the page toward store-listing structure.
>
> AI-SEO is used here only to (a) capture the baseline above and (b) note which phrasings the
> assistants themselves use, as an additional customer-language source with its own provenance label.
> Do not design AI-only content, chunking, or a retrieval file — DVC6A owns implementation, and plan
> §9.5 lists what is out of scope.
>
> **Gate:** every insight has provenance/confidence; `/install` is the only proposed platform route;
> product-marketing version/changelog are correct; the answer-engine baseline is verbatim and dated;
> no final public copy or code is added.

---

## DVC1B — English conversion copy and content contract

> Load **`marketing-psychology`**, then **`copywriting`**, then **`copy-editing`**, then **`cro`**.
>
> Execute the copy half of plan phase **DVC1**. Read the DVC1A research and
> `docs/device-claim-contract.md` first. Do not translate or create pages/components.
>
> Read plan §5.4 before writing a word. The device question is an **anxiety**, not a feature request,
> and §5.4 names the three mechanisms underneath it and the five framing rules that bind this copy.
> The two failure modes it exists to prevent, restated because they are the ones that actually happen:
>
> - **Over-explaining.** Length signals defensiveness. Three calm sentences outperform six paragraphs
>   of justification. If the draft grows, cut it.
> - **Selling the absence.** “No download!”, “Skip the App Store!”, “No 200MB updates!” all make the
>   store the frame of reference and invite the comparison you are trying to defuse. State the path
>   and move on. Browser delivery is how Perelai works — not a superior philosophy.
>
> Deliver:
>
> 1. First make a separate claim-ledger edit in
>    `.cursor/plans/reference/messaging-and-claims.md` §2. Promote only final `PASS` device facts and
>    give each exact current source paths. Reuse/refine F20/F21/F22 where sufficient. Add a new
>    Platform row only when no-store or internet-required wording needs a fact not already covered.
>    Do not assign an ID without inspecting the current next free ID. A `BLOCKED` fact never enters
>    §2.
> 2. Complete `messages/en/devices.json` using the exact content tree from plan §7.2 and only the
>    now-approved §2 Platform facts.
> 3. Add English-only draft keys for:
>    - short homepage hero reassurance;
>    - full homepage device section;
>    - compact niche reassurance;
>    - homepage FAQ: store availability and desktop/iPad use;
>    - header/footer label for `/install`.
> 4. Create `docs/device-copy-audit.md` containing:
>    - one row per claim with the matching claim-contract source;
>    - CTA hierarchy and expected next step;
>    - why the full section sits after Money and before Setup;
>    - the seven copy-editing sweeps and findings;
>    - 2–3 alternative **future experiment** headlines/section headings with rationale, while keeping
>      one canonical shipping version.
> 5. Amend `.cursor/plans/reference/messaging-and-claims.md` §7 in one narrow way: insert a “Device
>    fit” row after “Money that adds up” and shift the former rows down. Source its wording only from
>    existing F20/F21/F22 plus `PASS` rows in `docs/device-claim-contract.md`. Do not change the core
>    promise or reorder Inbox, Booking, or Money.
>
> The shipping copy must:
>
> - lead with use across screens, not with web technology;
> - state browser first, optional install, and no current App Store/Google Play listing;
> - explain that installation availability varies by browser;
> - keep Create workspace as primary and Log in as secondary;
> - tell the visitor that registration finishes via verification email;
> - state internet is required unless DVC0 found a separately verified offline contract;
> - avoid speed, battery, reliability, automatic updates, syncing, push, and native-quality claims
>   unless the exact line is `PASS` in the claim contract;
> - make the store-availability FAQ answer a **self-contained 40–60 word paragraph that is still
>   correct when quoted with zero surrounding context** (plan §9.5). Name the product, the category,
>   and all three §4.3 facts. No pronoun may depend on an earlier sentence to resolve. Test it by
>   reading the paragraph alone — if “it” is ambiguous, rewrite. This is the single sentence most
>   likely to be repeated by an AI assistant to someone who will never visit the page.
>
> Do not use a fake statistic, testimonial, review count, download count, star rating, store badge,
> scarcity line, or unsupported “10 seconds” promise on the marketing page.
>
> DVC2 follows this phase and owns physical screenshot/device evidence. If a useful line still has
> `BLOCKED` status, keep it in `docs/device-copy-audit.md` as a draft but omit it from the shippable
> message value (or use the narrower `PASS` wording). Do not mark the namespace publishable until
> DVC2 closes the relevant row.
>
> **Gate:** every shippable public claim is `PASS`; every useful but blocked draft is outside shipping
> values and named as a DVC2 dependency; `PWA`, `native`, `offline`, `download`, store availability,
> and one-click-everywhere language are absent or appear only in the honest negative FAQ answer where
> required; copy audit records all seven sweeps; no non-English files changed.

---

## DVC2 — Device evidence capture

> Load **`image`** and **`copy-editing`**.
>
> Execute plan phase **DVC2 only**. This task may read and run the sibling app but may not modify it.
> If authentication or representative synthetic data is unavailable, stop the blocked capture and
> document it; do not substitute generated UI.
>
> **Read plan §8.0 and §8.5 first.** Your captures are primarily **evidence**, not shipping assets.
> Exactly one capture ships. Everything else exists to prove that the rendered surfaces DVC2R builds
> are honest, and to record which layout class each device actually enters.
>
> 1. Create or use one existing synthetic, PII-free app workspace. It may contain fictional names,
>    services, visits, payments, and Inbox items. It must contain no real email, phone, note, client,
>    booking, or company data.
> 2. Capture the §8.5 evidence set:
>    - phone `390×844`, focused Calendar or Inbox;
>    - iPad Safari **portrait and landscape** at the recorded effective CSS viewport;
>    - desktop `1440×900`, a real wide multi-pane workspace.
> 3. Do not resize a desktop screenshot into an iPad frame. Capture what that platform actually
>    renders. If the iPad layout differs from the planned caption, rewrite the asset spec/caption and
>    mark the original claim blocked.
> 4. **Record the layout class each device genuinely entered** — one pane, two panes, or three — with
>    the effective CSS width you measured. DVC2R builds its shells against these observations, so a
>    guess here becomes a false claim three phases later. If the iPad does not reach the two-pane
>    class, say so plainly; that is a useful finding, not a failure.
> 5. Optimize and ship **only the desktop capture** (§8.5's honesty anchor) to
>    `public/product/devices/`. Responsive WebP/AVIF, `<200KB` per served variant where quality
>    permits, original preserved per repo practice. No AI editing, UI cleanup, fake notification, or
>    invented callout. The other captures stay as evidence attached to the manifest.
> 6. Add `docs/device-capture-manifest.md` with:
>    `asset | app commit | route | viewport | DPR | browser | physical/simulator/emulated | locale |
>    theme | synthetic dataset | capture date | file size | shipping? | claim supported`.
> 7. Define the deterministic `/install` OG composition inputs, but do not build the route/component.
>
> Image-skill constraint: real product UI uses screenshot + HTML/CSS overlay, never AI generation.
> Text captions and callouts are separate DOM content in DVC3, not baked into the screenshot.
>
> **A blocked capture does not block the plan.** If a device is unavailable, mark that device's strong
> claim `BLOCKED` in `docs/device-claim-contract.md`, record the gap, and hand off to DVC2R anyway.
> DVC2R depends on your recorded layout observations, not on a complete screenshot set.
>
> **Gate:** PII scan clean; app commit and viewport recorded; each capture visually matches the source
> route; the one shipping asset meets the size budget or has a written exception; layout class
> recorded per device; no sibling-app file changed; missing physical evidence remains `BLOCKED` rather
> than fabricated.

---

## DVC2R — Rendered device shell kit

> Load **`cro`**, **`copy-editing`**, and **`marketing-psychology`**.
>
> Execute plan phase **DVC2R only**. This is the phase where the premium presentation is actually
> built. Build components and the generator extension. Do **not** create routes, navigation, page
> integration, metadata, schema, or analytics.
>
> **Read before writing any JSX, in full:**
>
> - plan §8.0 (why rendered, not captured), §8.1 (premium principles), §8.2 (component inventory),
>   §8.3 (density ladder spec), §8.4 (frame rules), §8.9 (anti-patterns);
> - `product_mock_kit_20260728.md` §6 and §7 — the drift-guard mechanism you are extending;
> - `docs/device-capture-manifest.md` — DVC2's recorded layout observations.
>
> **Reference for visual grammar and i18n key names only — DO NOT COPY CODE.** The app is a Vite SPA
> with `react-router` and `zustand`; the landing is a Next.js App Router site with `next-intl`. There
> is no shared module graph.
>
> - `apps/web/src/components/layout/DesktopNavigationRail.tsx`
> - `apps/web/src/components/layout/DesktopWorkspace.tsx`
> - `apps/web/src/components/layout/BottomNavigation.tsx`
> - `apps/web/src/utils/desktopRailRouteState.ts`
> - `apps/web/src/utils/responsiveLayout.ts`
>
> **Build, in this order:**
>
> 1. **Extend the LP5b string allowlist** in `scripts/generate-niche-catalog.mjs` with the desktop
>    navigation keys — `desktop_navigation.*` plus the three primary destination labels the rail
>    renders (Calendar, Clients, Finance). Regenerate `data/app-ui-strings.generated.json`.
>    **Allowlist only — never bulk-copy a locale file.** Hand-typing “Calendar / Clients / Finance”
>    into JSX is the exact drift this mechanism exists to prevent.
> 2. **Add one failure condition** to `scripts/verify-niches.mjs`: a key referenced by
>    `components/mock/MockDesktopRail` is absent from `app-ui-strings.generated.json` for any
>    published locale. It must skip with a warning when the app repo is absent, matching the existing
>    behavior of conditions 6 and 7.
> 3. **`components/mock/MockDesktopRail.tsx`** — the 82px vertical rail. Port the *grammar*: the
>    `Perelai` wordmark with `ProductStageBadge` above three stacked icon + `text-[10px]` label
>    destinations, a border-separated contextual group, and the pinned Profile/Settings pair at the
>    bottom. Active state is a brand tint with a heavier icon stroke. It is presentational: props in,
>    DOM out. **No `react-router`, no `useLocation`, no store, no `"use client"`** — the active
>    destination is a static prop.
> 4. **`components/mock/MockDesktopShell.tsx`** — rail + list pane + detail pane, with an optional
>    third contextual pane at the wide class. **Compose the existing `MockCalendarScreen` /
>    `MockFinanceScreen` into the panes.** Do not reimplement a calendar or a finance dashboard;
>    they already exist and are already verified.
> 5. **`components/mock/MockMobileShell.tsx`** — the existing phone screen plus the bottom navigation
>    bar, so the mobile/desktop chrome contrast is visible. That contrast *is* the responsive claim
>    (§8.1 rule 2).
> 6. **`components/devices/device-frame.tsx`** — neutral CSS frame in three sizes per §8.4.
> 7. **`components/devices/device-density-ladder.tsx`** — the §8.3 composition.
> 8. Extend the `components/mock/index.ts` barrel. Add `tests/device-shell.test.ts`.
>
> **Absolute rules:**
>
> - **Zero new npm dependencies.** `rg "device-mockup|react-device|@react-three|three|recharts" components lib`
>   must return nothing.
> - **No hardcoded hex.** Every color is an `app/globals.css` token, or the theme toggle breaks.
> - **Use the product's real breakpoints**, read from `responsiveLayout.ts`: `1024px`
>   (`DESKTOP_MIN_WIDTH_REM = 64rem`) and `1360px` (`WIDE_DESKTOP_MIN_WIDTH_REM = 85rem`), capped at
>   `1600px` per `DesktopWorkspace`. Do not invent marketing breakpoints.
> - **Container queries, not viewport queries** — Tailwind v4 ships `@container` natively. The ladder
>   must compose correctly inside the homepage section, inside `/install`, and inside `next/og`.
> - **One dataset for all three densities.** Call `buildAppScreenDataset(...)` once. Different data
>   across densities reads as three products and breaks the claim the section exists to make.
> - Below `lg`, the ladder **stacks** — phone, then tablet, then desktop, each full width. Never
>   shrink the desktop shell to 360px; an illegible rail proves the opposite of the claim.
> - Server components. `"use client"` only if you build the optional width control, and only there.
> - No `Date.now()` anywhere. SSG output must be byte-identical between builds.
> - `aria-hidden="true"` on decorative chrome, with one semantic summary sentence outside it that
>   carries “one workspace across phone, tablet and desktop” to assistive technology.
> - One visible `Example data` caption inside the ladder frame. One — not three.
>
> **Before you finish, self-check against plan §8.9 line by line.** If your output contains a tilted
> device, a notch, a fake URL bar, a gradient blob, three separate images, a hand-typed rail label, or
> a second autoplaying carousel, you have failed the phase — fix it before reporting.
>
> **Gate:** zero new dependencies; no hardcoded hex; renders in all 9 `PUBLISHED_LOCALES` × light/dark
> × 360/768/1024/1360/1600px with no overflow, clipping, or illegible rail label; `de` and `uk` at
> 360px pass; removing an allowlisted rail key makes `pnpm verify:niches` exit non-zero; SSG output
> byte-identical across two builds and two simulated regions; no route/nav/home/niche/metadata file
> changed; sibling app has no diff; `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm verify:niches`,
> `pnpm build`, `git diff --check` all pass.

---

## DVC3 — Shared device components and complete localization

> Load **`copy-editing`** and **`cro`**.
>
> Execute plan phase **DVC3 only**. Build presentation components and translations, not public routes
> or homepage/niche integration. **DVC2R must be complete first** — you compose its shells, you do not
> rebuild product surfaces here.
>
> Expected components:
>
> - `components/devices/device-confidence.tsx` — compact reusable reassurance/link;
> - `components/devices/device-showcase.tsx` — Phone/iPad/Desktop proof composing DVC2R's rendered
>   shells, plus the one real desktop screenshot from DVC2 as the honesty anchor;
> - `components/devices/platform-guide.tsx` — accessible, server-visible guide content;
> - `components/devices/device-page.tsx` — long-form page composition consumed later by DVC4.
>
> Requirements:
>
> 1. Server components by default. Add `"use client"` only to the smallest tabs/disclosures or
>    analytics boundary that truly needs it.
> 2. All platform headings, explanations, and steps are present in server-rendered HTML. A tab may
>    change emphasis; it may not remove the other platform content from the DOM.
> 3. No landing-side UA sniffing, `beforeinstallprompt`, display-mode checks, install button, browser
>    version matrix, or persistence of selected device.
> 4. Use `next/image` with explicit dimensions/sizes **for the one real screenshot only** — the
>    rendered shells are DOM and need no image pipeline. The screenshot caption says `Actual product ·
>    Example data`; the rendered compositions say `Example data`. If the screenshot's UI is English on
>    a translated page, state that truthfully rather than implying it is localized.
> 5. Do not use official store badges/logos or device-maker logos. Neutral Lucide phone/tablet/monitor
>    icons are allowed if accessible labels carry the meaning.
> 6. Translate the entire `devices` namespace into every **current** `PUBLISHED_LOCALES` locale.
>    Domain terms must match the app locale files. Platform brand names remain correct. Translation
>    completeness is mechanical; publishability still requires human review.
> 7. Update `i18n/messages.ts` once, using the current pattern. Do not create a runtime locale list.
> 8. Add tests for message-key parity, no banned claims, alt/caption presence, and server-visible guide
>    content. If no DOM test dependency exists, test the data/component source contracts without
>    adding a large testing framework.
> 9. Before translating, rerun the DVC1B claim/copy audit against DVC2 evidence. Remove or narrow any
>    still-blocked device-specific line; translate only the resulting `PASS` copy.
>
> **Gate:** key parity across every current locale; human-review status recorded per locale; 320px,
> long-string, dark/light, keyboard, no-JS and reduced-motion checks pass; plan §8.1 and §8.9 reviewed
> line by line with the verdict written into `docs/device-copy-audit.md`; no route/nav/home/niche file
> changed.

---

## DVC4 — Canonical localized `/install` page and navigation

> Load **`site-architecture`**, **`copywriting`**, **`copy-editing`**, **`cro`**, and **`signup`**.
>
> Execute plan phase **DVC4 only**.
>
> `signup` is loaded for one specific reason: `/install` ends in a **cross-origin handoff** —
> `perelai.com` → `buildAppSignupUrl` → `perelai.app` → verification email. That is a signup flow with
> an extra domain hop, and it is where `/install` traffic actually converts or dies. Audit it as a
> flow, not just as a link: does the visitor know what happens after the click, that they are moving
> to another domain, and that registration completes by email? Set that expectation in the CTA
> microcopy. Do not redesign the app-side signup form — it is another repository — and do not add
> fields, steps, or a landing-side account form.
>
> Build:
>
> - `app/[locale]/install/page.tsx` with `generateStaticParams`, `dynamicParams = false`, localized
>   metadata through `buildLocalizedPageMetadata`, and the shared `DevicePage`;
> - colocated `opengraph-image.tsx` and `twitter-image.tsx` using existing OG helpers;
> - a localized header item and Product-footer item linking to `/install`;
> - `install` in the existing niche `RESERVED_SLUGS` contract;
> - focused route/navigation tests.
>
> Page structure must match plan §7.1 exactly. The hero's primary action is Create workspace via the
> existing `CtaButton`/`buildAppSignupUrl`; the secondary action is Log in via the existing fixed app
> helper. There is no landing-side Install/Download button.
>
> Navigation rules:
>
> - link label is the approved “Devices”/“On your devices” translation, never “Download”;
> - locale is preserved;
> - header remains within its current 4–7 item budget and mobile menu uses the same source list;
> - footer exposes the page from every public route;
> - do not add platform dropdowns or four platform routes.
>
> Do not change sitemap/schema/llms/analytics yet; DVC6 owns those. Do not integrate homepage/niche
> device sections; DVC5 owns them.
>
> **Gate:** `/install` and every complete localized variant return 200; `/en/install` follows the
> existing duplicate-English redirect policy; route has no niche collision; CTA helpers are the only
> app URL source; no `href="#"`; typecheck/lint/tests/build pass.

---

## DVC5 — Homepage, niche, FAQ, and restrained pricing integration

> Load **`cro`**, **`copywriting`**, and **`copy-editing`**.
>
> Execute plan phase **DVC5 only**.
>
> 1. Homepage:
>    - add one short device reassurance near the hero CTA/microcopy without adding a new button;
>    - **leave `HeroShowcase` alone.** It already rotates two live phone screens and owns the one
>      rotating element on the page. Do not add a device composition to the hero, and do not add a
>      second autoplaying element anywhere (plan §6.5, §8.9);
>    - add the full shared device section after `<Money>` and before `<Setup>`, rendering
>      `DeviceDensityLadder` — **one composition, not three tabbed panels**. Tabs are permitted on
>      `/install` only;
>    - keep clients/bookings/cash-flow and the existing Create workspace CTA visually dominant.
> 2. Niche template:
>    - add one compact `DeviceConfidence` block after the niche Setup section and before “What it is
>      not”;
>    - link to the localized `/install` page;
>    - do not add device fields to every `NichePageContent` file or duplicate install steps.
> 3. Homepage FAQ:
>    - add the approved store-availability question;
>    - add the approved desktop/iPad/browser-use question;
>    - keep answers in the DOM and use the existing `faq_opened` pattern.
> 4. Pricing:
>    - do not add a duplicate full section;
>    - add at most one factual capability line only if DVC1B marked it canonical and DVC0 marked it
>      `PASS`; otherwise header/footer access is sufficient.
> 5. Add localized internal-link tracking hook-up only if DVC6B's typed event already exists; otherwise
>    leave analytics for DVC6B rather than inventing a temporary event.
>
> **Gate:** homepage section order is Hero → Problem → Inbox → Booking → Money → Devices → Setup;
> primary CTA hierarchy is unchanged; niche uniqueness remains green; all internal links preserve
> locale; mobile has no horizontal scroll; no App Store/Google Play badge or fake install action;
> typecheck/lint/tests/verify/build pass.

---

## DVC6A — SEO, schema, OG, sitemap, and machine-readable output

> Load **`seo-audit`**, **`schema`**, **`ai-seo`**, and **`copy-editing`**.
>
> Execute the SEO/schema half of plan phase **DVC6** only. Do not change analytics.
>
> 1. Add `/install` to `app/sitemap.ts` for every current published locale with reciprocal,
>    self-referencing alternates and `x-default` to English.
> 2. Test self-canonical localized metadata, title `<=60`, description `<=155`, unique titles, 200
>    status, no duplicate `/en` indexable page, and exact trailing-slash behavior.
> 3. Finish localized OG/Twitter images and alt text using existing deterministic helpers. Do not bake
>    fake store badges or unsupported platform copy into the image.
> 4. Extend `lib/structured-data.ts` only through existing seams. `/install` may emit:
>    - web `SoftwareApplication` with `applicationCategory: BusinessApplication`;
>    - accurate web-browser operating-system value;
>    - visible `featureList` only;
>    - Home → Install `BreadcrumbList`;
>    - semantic `HowTo` only if current schema guidance has been checked and the exact visible steps
>      satisfy it.
> 5. Never emit `MobileApplication`, `Offer`, `FAQPage`, store URLs, ratings, reviews, or download
>    counts.
> 6. Add `/install` and its browser-first truth to `buildLlmsTxt()` from the same English message
>    source. Do not hand-maintain a second description. `llms.txt` must carry the **platform answer
>    verbatim**, not a link to it — an assistant reading the file must be able to answer “does Perelai
>    have an iPhone app?” without fetching the page.
> 7. Extend SEO tests to every current published locale, not only en/uk/pl.
> 8. **Answer-engine contract (plan §9.5).** Verify, and add a test where the surface is testable:
>    - the store-availability answer is a self-contained 40–60 word paragraph that stays correct
>      quoted alone, with no context-dependent pronoun;
>    - FAQ headings use the visitor's own question phrasing from DVC1A research, not marketing labels
>      — “Does Perelai have an iPhone app?”, never “Availability”;
>    - **entity consistency**: the page copy, `llms.txt`, the `SoftwareApplication` node, and the OG
>      description describe the platform situation in mutually consistent terms. A page contradicting
>      its own structured data is a known reason a source gets skipped. Write the check as a test that
>      compares the platform sentence across all four surfaces;
>    - the negative is answered directly — an assistant asked about the App Store needs a quotable
>      *no* with the alternative attached in the same breath.
> 9. Re-run the DVC1A four-assistant baseline once and append the dated results to
>    `docs/research/device-answer-engine-baseline.md`. Label it directional. Do not compute a score.
>
> **Out of scope, do not invent:** no AI-only content variant (that is scaled-content abuse), no
> chunking the page for retrieval, no `llms-full.txt`, no `FAQPage` markup (barred by plan §9.3), and
> no fabricated statistic added to attract citation.
>
> Validate rendered JSON-LD with the Schema.org validator. Do not promise a Google rich result for a
> semantic type, and do not promise AI citation — it is not a controllable outcome.
>
> **Gate:** sitemap/hreflang/canonical tests pass for all locales; metadata limits/uniqueness pass;
> schema matches visible copy and validates; `llms.txt` derives from live copy and states the platform
> answer verbatim; the four platform surfaces do not contradict each other; the store answer survives
> the quoted-alone test; Lighthouse SEO target remains satisfied; typecheck/lint/tests/build pass.

---

## DVC6B — Typed measurement for device messaging

> Load **`analytics`** and **`cro`**.
>
> Execute the analytics half of plan phase **DVC6** only.
>
> Extend the existing provider-neutral adapter and PostHog bridge; never import the provider directly
> from page/device components.
>
> Required contract:
>
> - add `install` to `LandingPageType` so `/install` uses the existing `landing_viewed` event;
> - add fixed `CtaPosition` values for install hero signup/login and device-section signup if that CTA
>   exists;
> - add `device_message_viewed` with `surface: home|niche` and `locale`, once after 50% visibility;
> - add `install_guide_opened` with explicit user-selected
>   `platform: iphone|ipad|android|desktop|browser` and `source_page`;
> - add `install_help_clicked` with fixed
>   `source_surface: hero|home_section|niche|header|footer|faq`;
> - update `docs/tracking-plan.md` with trigger, properties, decision, dedupe key, and funnel.
> - instrument the DVC4/DVC5 page, guide, section, and internal-link seams through the typed adapter;
>   do not leave event types with no call sites or add temporary vendor calls.
>
> Privacy rules:
>
> - no raw UA, browser version, screen resolution, device model, installed state, display mode,
>   notification permission, IP-derived platform, or free text;
> - platform means the guide the person selected, not a detected device;
> - no autocapture, replay, heatmap, or click-ID change;
> - one observer/event per section surface, protected against strict-mode duplicates.
>
> Add typed tests for event construction, fixed enums, dedupe, and absence of PII/device fingerprint
> fields.
>
> **Gate:** every event answers one question in plan §10.1; events fire once per intended trigger;
> provider remains behind `lib/analytics.ts`; tracking plan is current; typecheck/lint/tests/build pass.

---

## DVC7 — Final cross-device release audit

> Load **`copy-editing`**, **`cro`**, **`seo-audit`**, **`schema`**, and **`analytics`**.
>
> Execute plan phase **DVC7** as an audit-and-fix task. It is not permission to change the sibling app
> or expand the landing beyond this device plan.
>
> Produce `docs/device-release-evidence.md` with one row per plan Definition-of-Done item and every
> validation-matrix case:
>
> `requirement | evidence/command | result | owner | date | blocker`.
>
> Automated checks:
>
> 1. `pnpm typecheck`;
> 2. `pnpm lint`;
> 3. `pnpm test`;
> 4. `pnpm verify:niches`;
> 5. `pnpm build`;
> 6. `git diff --check`;
> 7. metadata/schema/sitemap/llms/analytics/device-content tests;
> 8. asset-size report for every served screenshot/OG image;
> 9. claim scan over `messages`, `content`, metadata, and components for forbidden language;
> 10. broken/orphan link audit;
> 11. dependency check — `rg "device-mockup|react-device|@react-three|three|recharts" components lib`
>     returns nothing, and `package.json` gained no dependency in this plan;
> 12. hardcoded-color scan over `components/mock/` and `components/devices/` — every color resolves to
>     an `app/globals.css` token;
> 13. `rg "Date.now\(\)" components lib` finds nothing in device surfaces, and two consecutive builds
>     produce byte-identical `/install` HTML.
>
> Manual checks:
>
> - **plan §8.9 anti-pattern list, item by item, on every device surface** — record a verdict per row,
>   not a single “looks good”;
> - **plan §8.1 principles**, especially: one object not three; chrome contrast visible; nothing
>   changes across densities except pane count; German at 360px in dark mode;
> - landing at 320/360/390/768/820/1024/1360/1440/1600;
> - app evidence on iPhone Safari, iPad portrait/landscape, Android Chrome, desktop Chrome/Edge, and
>   a desktop browser without an install prompt;
> - physical install UI where supported; emulation does not close that row;
> - installed launch and already-installed behavior;
> - embedded iOS browser → Safari path;
> - keyboard, screen reader smoke, reduced motion, 200% zoom, light/dark;
> - every current published locale and long-string clipping;
> - Internet-loss behavior compared with the visible limitation copy;
> - CTA URL, verification-email expectation, and landing → app handoff.
>
> Run the copy-editing Seven Sweeps on homepage additions, `/install`, shared niche block, FAQs,
> metadata, OG text, and llms.txt. Each claim must point to a `PASS` row in
> `docs/device-claim-contract.md`.
>
> Fix only landing defects supported by the plan and rerun their gates. App defects become explicit
> blockers/issues and remain untouched.
>
> End with exactly one verdict: `READY` only if all required rows pass, otherwise `BLOCKED` followed
> by the smallest exact blocker list. Do not mark intention, unit tests, or emulation as physical
> evidence.

---

## DVC8 — Experiment readiness, not automatic experimentation

> Load **`ab-testing`**, **`analytics`**, and **`cro`**.
>
> Execute plan phase **DVC8** only after DVC7 is `READY` and a real traffic/conversion baseline is
> available. Do not alter shipping copy or launch an experiment in this task.
>
> 1. Read current landing sessions, homepage `signup_started` rate, `/install` sessions, and app-side
>    `onboarding_completed` guardrail. If unavailable, record the gap and stop sample calculation
>    inputs as unknown.
> 2. Add the four hypotheses in plan §10.4 to `docs/experiment-backlog.md`.
> 3. For each hypothesis use:
>    `Because [observation], we believe [one change] will cause [outcome] for [audience]. We will know
>    this when [primary, secondary, guardrail].`
> 4. Assign ICE scores based on evidence, not preference.
> 5. Predeclare baseline, MDE, alpha, power, sample per variant, expected duration, allocation, one
>    primary metric, secondary metrics, and guardrails.
> 6. Test one variable only. Do not combine copy, placement, visual, and navigation in one variant.
> 7. If the required sample is unreachable, write a fixed two-week directional observation entry in
>    `docs/decision-log.md`; label it non-statistical and do not declare a winner.
>
> **Gate:** report whether any valid test can run now, with the calculation. No universal “1,000
> sessions” rule, no peeking, no invented baseline, and no experiment launched by this prompt.

---

## Reusable R-DVC1 — Claim audit after any future device-copy change

> Load **`copy-editing`**.
>
> Audit `{{FILE_OR_PAGE}}` against `docs/device-claim-contract.md`,
> `.agents/product-marketing.md`, and `.cursor/plans/reference/messaging-and-claims.md`.
>
> Report:
>
> | Line/key | Claim | Verdict | Evidence or required fix |
> |---|---|---|---|
>
> Verdicts:
>
> - `OK` — exact `PASS` source exists;
> - `BLOCKED` — plausible but manual/product evidence missing;
> - `FORBIDDEN` — native/offline/store/download/unsupported install claim;
> - `DRIFT` — terminology or behavior no longer matches the app;
> - `DUPLICATE` — repeats the same platform explanation without adding value.
>
> Apply fixes for `FORBIDDEN` and `DRIFT`; leave `BLOCKED` visibly listed for product decision. Then
> run Seven Sweeps, the banned-claim scan, metadata limits when relevant, and `git diff --check`.

---

## Reusable R-DVC3 — Premium presentation audit of a device surface

> Load **`cro`** and **`copy-editing`**.
>
> Audit `{{COMPONENT_OR_PAGE}}` against plan §8.1 (premium principles), §8.3 (density ladder spec),
> §8.4 (frame rules), and §8.9 (anti-patterns). Report only; apply fixes for `FAIL` rows.
>
> Render the surface at 360px, 768px, 1024px, 1360px, and 1600px, in **light and dark**, in **English
> and German**, before writing the report. An audit performed at one width in one language in one
> theme is not an audit.
>
> | Check | Verdict | Evidence |
> |---|---|---|
> | One continuous object, not three separate images | | |
> | Mobile/desktop chrome contrast visible (bottom nav vs 82px rail) | | |
> | Only pane count changes across densities — same data, theme, accent | | |
> | Real product breakpoints used (1024 / 1360 / 1600 from `responsiveLayout.ts`) | | |
> | Container queries, not viewport queries | | |
> | Stacks below `lg` instead of shrinking the desktop shell | | |
> | Every color is an `app/globals.css` token | | |
> | Follows the theme toggle in both directions | | |
> | Rail labels come from `app-ui-strings.generated.json` | | |
> | Decorative chrome `aria-hidden`; semantic summary present outside it | | |
> | One visible `Example data` caption inside the frame | | |
> | German at 360px: no clipping, no overflow, no illegible label | | |
> | No §8.9 anti-pattern present (check all eleven rows) | | |
> | No new npm dependency | | |
> | Motion respects `prefers-reduced-motion`; no second autoplay element | | |
>
> Verdicts: `PASS`, `FAIL`, or `N/A` with a reason. A `FAIL` on any §8.9 row is blocking regardless of
> how good the rest looks.
>
> Then run `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`, and `git diff --check`. Do not
> restyle beyond the failing rows, do not introduce a new visual idea, and do not "improve" the
> existing mock kit, `HeroShowcase`, or the token ramps while you are in there.

---

## Reusable R-DVC2 — Re-capture one real device screenshot

> Load **`image`** and **`copy-editing`**.
>
> Re-capture only `{{ASSET}}` for `{{DEVICE_OR_VIEWPORT}}` from the current app commit. Read
> `docs/device-capture-manifest.md` first and use the same synthetic workspace unless the manifest
> explicitly documents a replacement.
>
> - Never use real user/client data.
> - Never AI-generate, redraw, remove awkward UI, or insert a capability.
> - Record app commit, route, browser, viewport, DPR, locale, theme, and date.
> - Compare the new image to its caption and claim; if behavior changed, update the claim contract
>   and block stale copy instead of forcing the old composition.
> - Export the same responsive formats, run the asset budget, and update only the matching capture
>   manifest row.
>
> Gate: visual source and manifest match; PII scan clean; asset budget passes; the sibling app has no
> diff.
