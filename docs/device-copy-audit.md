# Device Copy Audit

**Repository:** `/Users/valery/Sites/perelai-landing`
**Phase:** DVC1B — English conversion copy and content contract
**Created:** 2026-08-01
**Governing plan:** `.cursor/plans/devices/00_device_distribution_marketing_plan_20260731.md` §4, §5.4, §6.3, §7.2, §9.5
**Inputs:** `docs/device-claim-contract.md`, `docs/research/device-install-intent-2026-07-31.md`,
`docs/research/device-answer-engine-baseline.md`
**Skills loaded, in order:** `marketing-psychology`, `copywriting`, `copy-editing`, `cro`

**Artifacts produced by this phase**

| File | Change |
|---|---|
| `.cursor/plans/reference/messaging-and-claims.md` §2.4 | Refined F20, F21; added F23, F24; added the Device gate note, which records F20's *Say* column as `BLOCKED` and F21/F23/F24 as the only shippable device rows. Made **first**, as a separate change, before any prose. |
| `.cursor/plans/reference/messaging-and-claims.md` §7 | Inserted row 6 **Device fit**; former rows 6–10 shifted to 7–11. |
| `messages/en/devices.json` | New. Complete §7.2 content tree, plus a shared `compact` block. |
| `messages/en/home.json` | English-only draft keys: `nav.devices`, `hero.deviceMicro`, `devices.*`, `faq.q7/a7`, `faq.q8/a8`, `footer.devices`. |
| `docs/device-copy-audit.md` | This file. |

**No non-English file was touched. No page, route, component, metadata, schema or analytics change was made.**

---

## 1. Namespace status: DRAFT, not publishable

Per the DVC1 gate, this namespace is a draft content artifact until DVC2 evidence closes the device
rows. The values in `messages/en/devices.json` are individually shippable — every one of them is
`PASS` — but the namespace must not be published for any locale until §4 below is cleared and DVC3
re-runs this audit.

### 1.1 The constraint that shaped every line

`docs/device-claim-contract.md` §3 (amended DVC2 repair) records these shippable `PASS` rows:
browser delivery, **use without installing** (F21 narrow form), **no store distribution** (F23, dated
store searches), internet required (F24), and **responsive layout density** (DOM-asserted 1024/1360/1600
captures). Named-browser install / Home Screen / cross-device / Safari-Chrome-webview paths remain
`BLOCKED` on physical-device evidence. The workstation audit in `docs/device-validation-matrix.md` §1
still records no iOS Simulator, no Android emulator, and unverified physical handsets.

So the plan's own fallback rule governs this phase (§3.3):

> If a device cannot be exercised, copy for that device stays generic ("use in a supported browser")
> and the unverified screenshot/claim does not ship.

**That is why the shipping copy names browsers, not devices.** "Open perelai.app in a supported
browser" needs no handset. "Perelai looks great on your iPad" needs one, and we do not have one.

### 1.2 Why the honest limitations may ship while the capabilities may not

F23 (no store listing) and F24 (internet required) are **statements of absence**. They are established
from architecture, not from a handset: there is no store listing to find in either repository, and
`apps/web/public/notification-sw.js` is a notification-only service worker with no offline application
shell, no cache strategy and no background sync. No amount of device testing could change either
answer. The claim contract records them as `FORBIDDEN`-to-assert-otherwise rather than as `PASS` rows,
because DVC0 enumerated positive claims; the negation of a `FORBIDDEN` row is the fact, and its code
source is in the same row. This reasoning is recorded in §2.4 of the claim rails so a later executor
does not have to re-derive it.

Optionality is the third shippable fact and it is also evidence-free: "installation is never required"
is a product invariant recorded in workspace `CONTEXT.md` §11 and §19.18 and implemented by
`OnboardingReviewStep.tsx`, which keeps install a secondary action. **Optionality is `PASS`;
availability is not.** That distinction is the single most load-bearing decision in this phase, and it
is what lets the copy satisfy "state optional install" and "installation availability varies by
browser" without shipping a blocked promise.

---

## 2. Claim register — one row per shipping value

Every value in `messages/en/devices.json` and every new key in `messages/en/home.json`. Claim-contract
rows are from `docs/device-claim-contract.md` §3 unless noted; ledger rows are
`.cursor/plans/reference/messaging-and-claims.md` §2.

| # | Key | Shipping value (abridged) | Claim | Claim-contract source | Ledger | Status |
|---|---|---|---|---|---|---|
| 1 | `devices.hero.title` | "Open Perelai in the browser you already have." | Browser delivery | *Browser delivery* `PASS` — `apps/web/index.html`, `apps/web/public/manifest.json` | F21 | `PASS` |
| 2 | `devices.hero.body` s1 | "Sign in at perelai.app and start working." | Browser delivery; app origin | *Browser delivery* `PASS`; contract §1.1 (`https://perelai.app`) | F21 | `PASS` |
| 3 | `devices.hero.body` s2 | "Installing Perelai is optional and depends on your browser." | Optionality + variability | Optionality: workspace `CONTEXT.md` §11/§19.18, `OnboardingReviewStep.tsx`. Variability: *Universal 1-click install* `FORBIDDEN` — `installTarget.ts` (`beforeinstallprompt` limited to Chromium) | F21 | `PASS` |
| 4 | `devices.hero.body` s3 | "There is no App Store or Google Play listing." | No store distribution | *Store availability* / *Store listing / download* `FORBIDDEN` — "None (no store listings exist)" | F23 | `PASS` |
| 5 | `devices.hero.signup` / `.login` | "Create workspace" / "Log in" | CTA policy | — | §6 CTA policy | `PASS` |
| 6 | `devices.hero.micro`, `devices.cta.micro` | "You'll get a verification email to finish setting up." | Registration ends in email verification | `AuthRegisterResult = { verificationRequired: true }` (architecture review §5.6) | §6 CTA policy | `PASS` |
| 7 | `devices.showcase.title/body` | "One address, one login … no separate version to find for each screen." | One web address, one login, one workspace | *Browser delivery* `PASS`; single-origin delivery, contract §1.1 | F21 | `PASS` |
| 8 | `devices.showcase.phone/ipad/desktop.body` | "A supported mobile browser and your usual login." etc. | Conditional browser access only | Plan §3.3 generic fallback while device rows are `BLOCKED` | F21 | `PASS` (generic) |
| 9 | `devices.showcase.caption`, `devices.hero.caption`, `home.devices.caption` | "Example data" | Honesty caption | `product_mock_kit_20260728.md` §7.5.1 | §5.1 | `PASS` |
| 10 | `devices.showcase.summary`, `home.devices.summary` | "One Perelai workspace, opened from a supported browser on a phone, a tablet or a computer." | Semantic summary outside `aria-hidden` chrome | Plan §8.3 accessibility; §7.5.4 | F21 | `PASS` (generic) |
| 11 | `devices.installBenefits.body` | "Some browsers can add a website to a home screen … Perelai never requires it." | Browser capability in general + optionality | *Universal 1-click install* `FORBIDDEN` — `installTarget.ts` `resolveInstallRoute` returns `none` in many environments; optionality as row 3 | F21 | `PASS` |
| 12 | `devices.installBenefits.fallback*` | "Installing is optional … that route keeps working." | Non-blocking install | workspace `CONTEXT.md` §11/§19.18 | F21 | `PASS` |
| 13 | `devices.guides.iphone/ipad/android/desktop` | "Open perelai.app in … and sign in. Installing … is optional." | Instruction + optionality only | *Browser delivery* `PASS`; plan §3.3 fallback | F21 | `PASS` (generic) |
| 14 | `devices.guides.embedded` | "A link tapped inside Instagram … opens in that app's built-in browser … Open perelai.app in your usual browser instead." | Embedded webviews behave differently | Contract §1.3 route 3 `open-in-safari`; `installTarget.ts` `IN_APP_BROWSER_PATTERN` | F21 | `PASS` |
| 15 | `devices.limitations.installVaries` | "Some browsers do not offer it at all, and Perelai does not need it." | Variability + optionality | As rows 3 and 11 | F21 | `PASS` |
| 16 | `devices.limitations.noStore`, `home.faq.a7` clause 2 | "There is no App Store or Google Play listing." | No store distribution | As row 4 | F23 | `PASS` |
| 17 | `devices.limitations.online`, `devices.faq.a6` | "Perelai needs an internet connection." | Internet required | *No internet requirement* `FORBIDDEN` — API backend required; contract §1.5 (`notification-sw.js`, `webPush.ts`) | F24 | `PASS` |
| 18 | `devices.limitations.browserDecides` | "Your own browser decides which install option, if any, it offers you." | Landing cannot know the browser | Plan §7.3 (no landing-side UA detection); `installTarget.ts` is app-side | F21 | `PASS` |
| 19 | `devices.faq.a1` = `home.faq.a7` | The 50-word extractable paragraph | Product + category + all three §4.3 facts | Rows 1–4, 17 combined; category from §1 positioning | F21, F23, F24 | `PASS` |
| 20 | `devices.faq.a2` | "Yes … installing is optional and never required." | Use without installing | Rows 1, 12 | F21 | `PASS` |
| 21 | `devices.faq.a3/a4` = `home.faq.a8` | "Open perelai.app in a supported browser … One login, one workspace." | Conditional browser access + one workspace | Rows 7, 8, 17 | F21, F24 | `PASS` (generic) |
| 22 | `devices.faq.a5` | "Browsers decide that, not Perelai." | Variability | Row 3 | F21 | `PASS` |
| 23 | `devices.nav.label`, `home.nav.devices`, `home.footer.devices` | "Devices" | Navigation label, not a claim | Plan §6.2 (preferred label; never "Download") | — | `PASS` |
| 24 | `devices.compact.*`, `home.hero.deviceMicro` | "Perelai runs in your browser. Installing it is optional." | Browser delivery + optionality | Rows 1, 3 | F21 | `PASS` |
| 25 | `home.devices.title/body` | "One address, one login … Installing it is optional, and there is no App Store or Google Play listing." | Composite of rows 1, 3, 4, 7 | As above | F21, F23 | `PASS` |
| 26 | `devices.meta.title/description` | "Perelai in your browser: installing and app stores" / 131 chars | Composite of rows 1, 3, 4 | As above | F21, F23 | `PASS` |

**Automated checks run against the namespace:** `faq.a1` is 50 words (target 40–60); `meta.title` is
50 characters (limit 60); `meta.description` is 131 characters (limit 155); `devices.faq.a1` and
`home.faq.a7` are byte-identical; a regex scan for `PWA`, `native app`, `download`, `offline-first`,
`one-click` and App-Store-availability phrasing across both files returns zero hits outside the
honest-negative FAQ answers.

---

## 3. The extractable store answer (plan §9.5)

The single string most likely to be repeated by an assistant to someone who never visits the page.
Shipped identically at `devices.faq.a1` and `home.faq.a7`:

> Perelai is booking, client and money software for independent service professionals. Perelai is not
> listed on the App Store or on Google Play; it runs in a web browser at perelai.app instead.
> Installing Perelai from a browser is optional and not offered by every browser. Perelai needs an
> internet connection.

| §9.5 requirement | Check |
|---|---|
| Self-contained, 40–60 words | 50 words. |
| Names the product | "Perelai" ×4, in every sentence. |
| Names the category | "booking, client and money software for independent service professionals" — matches §1 positioning verbatim. |
| §4.3 fact 1 — works in the browser without installing | "runs in a web browser at perelai.app" + "Installing … is optional". |
| §4.3 fact 2 — install optional, depends on browser/platform | "optional and not offered by every browser". |
| §4.3 fact 3 — no store listing | "not listed on the App Store or on Google Play". |
| No pronoun resolves to an earlier sentence | One pronoun, "it", in sentence 2, whose antecedent "Perelai" is in the same sentence. Sentences 1, 3 and 4 have none. |
| Answers the negative directly | Sentence 2 leads with the negative and attaches the alternative in the same breath. |
| Question uses the visitor's phrasing | "Does Perelai have an iPhone or Android app?" — `app` is the observed proxy vocabulary in `docs/research/device-install-intent-2026-07-31.md`; `install`, `download`, `home screen` and `store` are **not** observed and are absent from the question. |

**Entity-consistency obligation handed to DVC6A:** `llms.txt`, the `SoftwareApplication` node and the
`/install` OG description must repeat this paragraph's facts without contradicting it. It is now the
canonical source. The four-assistant baseline in `docs/research/device-answer-engine-baseline.md`
recorded every assistant as *unavailable*, so there is no measured "before" — DVC6A must capture one in
a human-accessible session before treating any later reading as a change.

---

## 4. Blocked drafts — DVC2 dependencies

These lines are useful and would strengthen the page. **None of them is in a shipping message value.**
Each is held here until its claim-contract row turns `PASS`.

| Draft line | Claim-contract row | Missing evidence | Target key when unblocked |
|---|---|---|---|
| "Use Perelai on your phone, your iPad and your computer." | *Cross-device workspace* `BLOCKED` | DESK20 authenticated physical matrix | `devices.hero.title` (replaces the browser-led H1) |
| "One workspace. The view changes with the screen." | *Responsive layout density* `PASS` (automated DOM-asserted 1024/1360/1600) | See capture manifest §2 | `devices.showcase.title` — eligible in DVC3; still not cross-device |
| "On a phone you see one thing at a time. On a computer the schedule, the list and the thing you are working on stay side by side." | *Responsive layout density* `BLOCKED` | As above | `devices.showcase.phone.body`, `.desktop.body` |
| "Add Perelai to your iPhone or iPad Home Screen." | *iOS/iPad Home Screen setup* `BLOCKED` | Physical Safari Share → Add to Home Screen run | `devices.guides.iphone.body`, `.ipad.body` |
| "Install it from a compatible browser on Android or desktop." | *Android / Desktop browser install* `BLOCKED` | Physical Android Chrome and desktop native-prompt capture | `devices.guides.android.body`, `.desktop.body` |
| "Open Perelai from its icon, in its own window." | *Standalone app window* `BLOCKED` | Physical standalone launch on iOS and Android | `devices.installBenefits.body` |
| "On iPhone, adding Perelai to your Home Screen is what lets its alerts reach you." | *iPhone push condition* `BLOCKED` | Production VAPID flags **and** physical receipt on an installed iPhone | `devices.installBenefits` (new key) |
| "Perelai shows you the route your browser supports, in Settings." | *Optional installation* `BLOCKED` | Physical verification that `InstallAppSettingsControl` renders the right route per browser | `devices.limitations.browserDecides` (replaces the current wording) |
| "Light and dark, wherever you open it." | *Light and dark themes* `BLOCKED` (device surface audit pending DVC2R) | Rendered-surface theme verification | `devices.showcase.body` |

**Shipping desktop screenshot (outside copy):** captured — `public/product/devices/desktop-calendar-1440.webp`.
Caption remains DOM-only: `Actual product · Example data`. Evidence class is automated browser capture.

**Rule for DVC3:** re-run this audit after DVC2. Promote a draft only by moving its claim-contract row
to `PASS` **and** adding or refining the matching §2 ledger row. Do not promote a draft by editing this
file alone.

---

## 4.1 DVC2 evidence update (2026-08-01; repaired same day)

Source of truth: [`device-capture-manifest.md`](device-capture-manifest.md), [`device-claim-contract.md`](device-claim-contract.md), [`store-listing-absence-2026-08-01.json`](research/store-listing-checks/store-listing-absence-2026-08-01.json).

| Draft / concern | Status after repair | Public mapping |
|---|---|---|
| F23 no-store sentences | **PASS** — dated Apple iTunes + Google Play searches 2026-08-01 (similarly named apps disambiguated) | `devices.meta.description`, `hero.body`, `limitations.noStore`, `faq.a1`; `home.devices.body`, `home.faq.a7` |
| F21 “Installing it is optional” | Maps only to contract row **Use without installing** (`PASS`) | `devices.compact.text`, `installBenefits.fallbackBody`, `faq.a2`, etc. |
| Named Safari / Chrome / Instagram / Facebook / Home Screen steps | Contract **Named browser/device install** `BLOCKED` | Removed from shipping values; held in §4.2 |
| Shipping desktop screenshot | Unblocked as **automated** real-app capture (not “physical desktop”) | `public/product/devices/desktop-calendar-1440.webp` |
| Responsive density | **PASS** after DOM-asserted captures at **1024 / 1360 / 1600** (plus 1440) | Eligible for narrow density copy in DVC3; not for unqualified “use on iPad” |
| Portrait iPad two-pane | Still **BLOCKED** (834 CSS px = one-pane) | Do not ship |
| Cross-device “phone, iPad and desktop” | Still **BLOCKED** | Do not use as OG title |

### 4.2 Blocked drafts — browser-specific install paths

Exact shipping strings removed from `messages/en/devices.json` on 2026-08-01. Restore only when the matching physical evidence exists.

| Former shipping value | Dependency | Target key |
|---|---|---|
| "Open perelai.app in Safari and sign in…" (iPhone) | Physical iPhone Safari + Home Screen path | `guides.iphone.body` |
| "Open perelai.app in Safari…" (iPad) | Physical iPad Safari | `guides.ipad.body` |
| "Open perelai.app in Chrome…" (Android) | Physical Android Chrome + optional install prompt | `guides.android.body` |
| Instagram / Facebook / messaging-app built-in browser escape copy | Physical embedded-webview escape | `guides.embedded.body` |

**Current shipping guides** (all map to F21 + browser delivery `PASS`): open `perelai.app` in a **supported browser** and sign in; installing optional.

**Copy-editing note:** density copy may cite measured 1024→two-pane / ≥1360→three-pane. Do not name Safari/Chrome/webview mechanics until those rows leave `BLOCKED`.

---

## 5. CTA hierarchy and expected next step

Unchanged from §6 of the claim rails. The device surfaces add no new conversion action.

| Rank | Copy | Destination | Where | Analytics position (DVC6) |
|---|---|---|---|---|
| Primary | **Create workspace** | `buildAppSignupUrl({ niche, source, campaign, landingPath, locale })` | `/install` hero and `/install` final CTA | `install_hero_signup`, `device_section_signup` |
| Secondary | **Log in** | existing fixed app helper (`${NEXT_PUBLIC_APP_URL}/login`) | `/install` hero and final CTA | `install_login` |
| Tertiary (internal link only) | **How you open Perelai** | `/install` in the current locale | homepage device section, niche reassurance strip, header, footer | `install_help_clicked` |

**Expected next step, stated on the page:** *"You'll get a verification email to finish setting up."*
This is not decoration. `AuthRegisterResult` is `{ verificationRequired: true }`, so the visitor lands
in an inbox step, not in the app. Saying so before the click is the cheapest activation win available
and it is repeated verbatim from `home.hero.micro` so the two surfaces cannot drift.

**What is deliberately absent:**

- No CTA labelled "Download", "Install", "Install now" or "Get the app". `perelai.com` cannot install
  the authenticated app on `perelai.app`; a landing-origin install CTA would be a promise the origin
  cannot keep (plan §4.2).
- No App Store or Google Play badge in any form (plan §4.2, absolute).
- No second competing CTA in the homepage hero. The device reassurance is one line of microcopy in the
  existing CTA area (`home.hero.deviceMicro`), per plan §6.5.
- No scarcity, urgency, waitlist or founding-count line anywhere in the namespace. Plan §5.4 forbids
  scarcity around installation specifically, and `docs/commercial-policy.md` gates commercial
  obligations generally.

---

## 6. Why the full section sits after Money and before Setup

Plan §6.3 fixes the position; this records the reasoning that a later executor would otherwise
re-litigate, and the amendment made to keep the rails consistent.

1. **The anxiety does not exist until the visitor wants the product.** Plan §5.4 rule 4 — *answer at
   the moment of doubt, not before it*. Sections 1–5 (Hero → Problem → Inbox → Booking → Money) are the
   argument for wanting Perelai. "Will this fit how I actually work?" is a question only someone who
   already wants it asks. Put the answer earlier and it reads as a compatibility matrix on a page whose
   job is still persuasion.
2. **It is the natural bridge into Setup.** Section 7 kills migration anxiety — templates, Google
   Calendar, contacts import. "Where do I open this?" is the smaller sibling of "how do I move in?", and
   answering it first lowers the activation energy for the bigger question. Reversing the two makes
   Setup arrive before the visitor knows what they would be setting up *on*.
3. **It must not compete with the differentiator.** The Inbox is the documented differentiator and owns
   section 3. Device availability is distribution, not the reason anyone changes their booking and money
   workflow (plan §5.1: "Do not reverse this order"). Section 6 is late enough to be subordinate and
   early enough to be read.
4. **The hero already carries the one rotating element.** `HeroShowcase` owns the homepage's single
   animated component. A device composition in the hero would cost LCP and dilute the one primary CTA,
   which is why the hero gets one line of microcopy and nothing else (plan §6.5).

**Claim-rails amendment made:** `.cursor/plans/reference/messaging-and-claims.md` §7 now has
**Device fit** at row 6, sourced only from F21 + F23; former rows 6–10 shifted to 7–11. The core
promise is unchanged and Inbox, Booking and Money keep positions 3, 4 and 5.

**Follow-up owed to DVC5, recorded so it is not lost:** §7 row 10 still reads "6 questions, §8 below",
and §8 still lists six. DVC5 adds `faq.q7/a7` and `faq.q8/a8` to the homepage, which makes it eight.
That count is a second change to §7/§8 and was deliberately left out of this phase's narrow amendment.

---

## 7. The seven sweeps

Run in order on the full draft, looping back after each. Findings are what actually changed, not a
checklist.

### Sweep 1 — Clarity

| Found | Fix |
|---|---|
| The hero subhead carried optionality and store absence in one 25-word sentence joined by two "and"s. | Split into three sentences. Three calm sentences is also the §5.4 rule-1 target. |
| `faq.a5` ended "— the browser route is the product". Clever, not clear, and it argues a philosophy the plan forbids. | Cut to "Perelai does not require it either way." |
| `showcase.ipad.body` and `showcase.desktop.body` were identical strings. A reader scanning three cards sees the repetition before the meaning. | Differentiated: "tablet browser" / "desktop browser", parallel structure retained. |
| A draft `limitations` line read "Perelai shows the option your own browser supports". It both promised an unverified in-app control and blurred whose responsibility the install option is. | Rewritten as `browserDecides`: "Your own browser decides which install option, if any, it offers you." The blocked version is registered in §4. |
| `guides.embedded.title` was "Embedded browser" — insider language for the exact visitor least likely to understand it. | "Opened from a link inside a social app", which is what the visitor did. |

**Loop-back:** Rule of One holds — every section advances exactly one idea. You-rule holds; the copy
addresses the reader throughout except in `faq.a1`, where §9.5 requires third-person self-containment.

### Sweep 2 — Voice and tone

| Found | Fix |
|---|---|
| `installBenefits.fallbackTitle` read "You can keep using the browser" — permission-granting, faintly apologetic. §5.4 rule 1 warns that apology is the failure mode here. | "The browser stays enough." |
| Three consecutive showcase lines said some form of "there is no separate version for X". Repetitive, and three negatives in a row start to sell the absence (§5.4 rule 2). | Consolidated into one clause in `showcase.body`; the three cards became purely factual. |
| Draft guide bodies drifted between "you can", "you may" and "it is possible to" — three registers in five strings. | Standardised on the imperative: "Open perelai.app in … and sign in." |
| CTA and micro-copy risked inventing a second voice on a new surface. | `signup`, `login` and `micro` are copied verbatim from `common.json` / `home.json`. |

**Loop-back to Clarity:** no new ambiguity introduced.

### Sweep 3 — So what

| Found | Fix |
|---|---|
| "Perelai runs in a web browser" is a mechanism with no consequence attached. Left alone it answers a question nobody asked. | Attached the consequence the visitor actually cares about: "sign in … and you are in your workspace", "One login, one workspace." Per §5.4 that is *access anxiety*, the one genuine benefit in this whole topic. |
| "There is no App Store or Google Play listing" invites a "so what?" that copy must **not** answer. | Deliberately unanswered. Every available answer — faster, lighter, no updates, no gatekeeper — is either `FORBIDDEN` or is §5.4 rule 2 selling the absence. The fact is stated and the copy moves on. |
| "Installing is optional" without a consequence reads like a hedge. | Consequence added in `installBenefits.fallbackBody`: the browser route keeps working whether or not you ever install anything. That is a removed unknown, not a benefit claim. |

**Deliberate omissions, recorded so a later executor does not "fix" them:** no speed, battery,
storage, reliability, automatic-update, background-sync or native-quality bridge appears anywhere.
Each is the standard browser-delivery "so what", and each is `FORBIDDEN` or unevidenced.

**Loop-back to Voice, then Clarity:** clean.

### Sweep 4 — Prove it

| Found | Fix |
|---|---|
| A draft line said "Perelai shows you the route that works where you are." The code exists (`InstallAppSettingsControl.tsx`, `resolveInstallRoute`), but the *Optional installation* row is `BLOCKED`. | Moved to the §4 draft register. Code presence is not device evidence. |
| Draft `installBenefits` listed the icon, the standalone window and the iPhone-alert condition as things you get. All three are `BLOCKED`. | Section rewritten around what is provable: browsers in general can do this, availability varies, Perelai never requires it. The three benefits are registered in §4. |
| `limitations.installVaries` originally said "**many** browsers do not offer it". "Many" is an unmeasured share. | "Some browsers do not offer it at all" — the form supported by `resolveInstallRoute` returning `none`. |
| Nothing in §2 sourced the no-store or internet-required wording. Under the §2 rule, unsourced means unwritable. | Added F23 and F24 with exact code paths, **before** drafting the prose — the claim-ledger edit was made as a separate change so the product fact could be approved independently of the persuasion. |

**Scan result:** no statistic, testimonial, review count, download count, star rating, store badge,
scarcity line, or "10 seconds" promise appears in either file. Every row in §2 above resolves to a
claim-contract row and a §2 ledger row.

**Loop-back to So What, Voice, Clarity:** clean.

### Sweep 5 — Specificity

| Found | Resolution |
|---|---|
| "A supported browser" is vague, and Sweep 5 normally treats vagueness as filler. | **Kept, as an evidence-driven choice, not a copy defect.** Plan §3.3 names it as the required fallback while device rows are `BLOCKED`. Naming specific browsers is a compatibility claim and needs the DVC2 matrix. It becomes specific in DVC3. |
| "Sign in and start working" had no anchor. | Upgraded to "Sign in at **perelai.app**". The concrete address is the single most useful specific in the namespace, and it is what makes the FAQ answer quotable without the surrounding page. |
| Draft guide bodies said "your browser" where the platform makes the browser obvious. | **Superseded by DVC2 repair:** shipping guides no longer name Safari/Chrome while those physical rows are `BLOCKED`. All five guide bodies use the generic supported-browser fallback; named-browser strings live only in §4.2 blocked drafts. |
| The category was implied rather than stated in the extractable answer. | `faq.a1` now opens with the full category phrase from §1 positioning, verbatim. An assistant quoting one sentence still tells the reader what Perelai is. |

**Loop-back to Prove It, So What, Voice, Clarity:** clean.

### Sweep 6 — Heightened emotion

Deliberately the lightest sweep in this phase, and that is the finding.

| Found | Fix |
|---|---|
| The hero opened "Perelai runs in your browser" — flat, mechanism-first, and it makes web delivery the subject of the sentence rather than the reader. | "**Open Perelai in the browser you already have.**" Second person, an action the reader can already picture, and no new object to acquire. It leads with use rather than technology while staying inside the one `PASS` fact. |
| `showcase.body` stated the mechanism without naming the relief. | Added "there is no separate version to find for each screen" — the removal of an unknown, which is the correct emotional lever here per §5.4 (ambiguity aversion). |
| Temptation to dramatise the store absence. | Resisted. The emotional job of this topic is **relief**, not desire, and relief is produced by certainty, not by intensity. Length here signals defensiveness; every section is three sentences or fewer. |

**Loop-back to Specificity, Prove It, So What, Voice, Clarity:** clean.

### Sweep 7 — Zero risk

| Found | Fix |
|---|---|
| Nothing told a visitor what to do when the install option simply does not appear — the most likely post-click disappointment, and a silent trust loss. | Added `faq.q5/a5`: "Why don't I see an option to install Perelai?" → browsers decide, and Perelai does not require it either way. |
| The three concessions risked being scattered. §5.4 rule 5 says one concession stated calmly buys the rest — but only if it stays visible. | `limitations` states all three in one visible block, and the FAQ repeats them. Nothing is inside an accordion or below a "read more". |
| The verification-email step appeared once. | Repeated under both the hero CTA and the final CTA, verbatim. |
| `guides.embedded` was the only guidance for the documented distribution channel — founder-led outreach through Instagram DMs, where every link opens in an in-app webview. | Kept and promoted to a full guide entry rather than a footnote. It is the highest-frequency real failure path for this specific funnel. |

**Final loop-back through all six earlier sweeps:** no regression found.

### Expert-panel note

The `copy-editing` skill recommends a multi-persona scoring gate for launch copy. **Not run in this
phase, on purpose.** The panel's value is judgment about persuasion; this namespace's binding
constraint is evidence, and the panel cannot promote a `BLOCKED` row. Run it in DVC3, once DVC2 has
settled which sentences exist — scoring copy that is about to be rewritten would be wasted work and
would risk anchoring DVC3 on the narrowed wording.

---

## 8. Alternative headlines for future experiments

One canonical shipping version. The alternatives are recorded for `docs/experiment-backlog.md` and
must not be launched without the sample calculation DVC8 owns; plan §10.4 already carries the
"outcome framing beats install framing" hypothesis this feeds.

### `/install` H1 — canonical

> **Open Perelai in the browser you already have.**

Second person, imperative, one action, zero new objects. Answers the category question inside the one
`PASS` fact and leads with what the reader does rather than with how the software is delivered.

| Alt | Headline | Rationale | Blocker |
|---|---|---|---|
| A | **Use Perelai on your phone, your iPad and your computer.** | Directly matches the searcher's mental model and the §9.1 branded-platform intent set. Tests whether naming the devices outperforms naming the browser — the plan's own §5.4 hypothesis that *access anxiety* is the real driver. | `BLOCKED` — *Cross-device workspace*. Needs DESK20. |
| B | **No app to install. Open it and it is there.** | Tests whether the blunt negative converts better than the neutral instruction. | **Do not run.** It makes the store the frame of reference, which is exactly the comparison §5.4 rule 2 exists to prevent. Recorded so a later executor recognises it as already rejected rather than as a fresh idea. |
| C | **Perelai is a website you log into. That is the whole setup.** | Radical plainness. Tests whether removing every trace of product language beats a softened marketing register for a visitor who arrived suspicious. | Ships as-is, but "that is the whole setup" over-promises against onboarding. Would need "That is all there is to open it." |

### Homepage device-section heading — canonical

> **One address, one login**

Names the two things that actually resolve access anxiety, and it is true regardless of which devices
DVC2 verifies — so it survives the evidence changing underneath it.

| Alt | Heading | Rationale | Blocker |
|---|---|---|---|
| A | **One workspace. The view changes with the screen.** | The plan's own §5.3 direction, and the strongest version if the density ladder ships. Pairs the claim with the visual that demonstrates it. | Density contract row `PASS` (automated 1024/1360/1600). Still not a cross-device `PASS`. |
| B | **Wherever you open it, it is the same Perelai.** | Warmer, more conversational, and it answers "will my stuff be there?" more directly than "one login" does. | Ships as-is. Worth testing against the canonical once the section has traffic. |

### FAQ question phrasing — canonical

> **Does Perelai have an iPhone or Android app?**

Uses the visitor's own noun (`app`) from `docs/research/device-install-intent-2026-07-31.md`, and
extraction matches question to heading (§9.5). Alternatives worth testing later: *"Is Perelai on the
App Store?"* (narrower, matches store-specific queries, but misses the larger "app" intent) and
*"Do I need to install anything to use Perelai?"* (matches the objection rather than the search, so it
answers better and gets found less). Do not test more than one FAQ heading at a time; the primary
metric for all three is `/install` signup rate with guide engagement as the guardrail.

---

## 9. Gate self-assessment

| Gate condition | Result |
|---|---|
| Every shippable public claim is `PASS` | ✅ All 26 rows in §2 resolve to a `PASS` claim-contract row, to a `FORBIDDEN` row's code-sourced negation (F23, F24), or to a documented product invariant (optionality). |
| Every useful but blocked draft is outside shipping values and named as a DVC2 dependency | ✅ §4 — nine drafts, each with its blocking row and the exact missing evidence. |
| `PWA`, `native`, `offline`, `download`, store availability, one-click-everywhere absent, or only in the honest negative FAQ answer where required | ✅ `PWA`, `native` and `download` appear nowhere. `offline` appears only in `devices.faq.q6/a6` ("Does Perelai work offline?" → "No."), which plan §7.1 §6 requires as an FAQ topic and the gate permits as the honest negative. Store availability appears only as its denial, in `faq.a1`/`a7`, `limitations.noStore` and `hero.body`. |
| Copy audit records all seven sweeps | ✅ §7, with findings and fixes rather than a checklist. |
| No non-English files changed | ✅ Only `messages/en/devices.json` and `messages/en/home.json`. |
| Claim-ledger edit made separately, before prose | ✅ §2.4 of the claim rails was edited first, as its own change, so a reviewer can approve the product fact before reading the persuasion (plan §4.4 rule 5). |
| No new ID assigned without checking the next free one | ✅ Platform table ended at F22; F23 and F24 are the next free IDs. |
| No page, component, route, translation, metadata, schema or analytics change | ✅ None made. |

**Phase verdict:** `PASS` for DVC1B's own deliverables.
**Namespace verdict:** `DRAFT — NOT PUBLISHABLE`. Blocked on DVC2 for the nine drafts in §4 and for the
one shipping desktop screenshot. DVC3 must re-run this audit before translating anything.

---

## 10. Verification run

Run from the repository root on 2026-08-01, after all edits.

| Command | Result |
|---|---|
| `pnpm typecheck` | ✅ pass |
| `pnpm lint` | ✅ pass |
| `pnpm test` | ⚠️ 67/68 — one failure, `verify-niches.test.ts > exits 0 against the committed generated files`. Pre-existing, see below. All 11 other test files pass. |
| `pnpm check:uniqueness` | ✅ pass — `en` colorist 68.2% unique, `en` lash artist 72.8%, both well above the 60% floor. The new `home.devices.*` and `faq.q7/q8` keys did not move any page toward the threshold. |
| `pnpm verify:niches` | ❌ **pre-existing failure**, see below |
| `pnpm build` | ✅ pass — `next build` exits 0 and prerenders every route in all 9 published locales. `pnpm build` itself cannot run because its `prebuild` hook is `pnpm verify:niches`. |
| `git diff --check` | ✅ clean |

### The `verify:niches` failure is pre-existing and out of scope

```text
verify-niches error: committed catalog sourceCommit 08a4b7a differs from app HEAD 55971e2;
re-run pnpm generate:niches
```

The LP2 drift guard compares `data/niche-catalog.generated.json`'s `sourceCommit` against the sibling
app repository's current `HEAD`. The sibling repository has advanced to `55971e26` since the catalog
was generated at `08a4b7a5`. **Neither input is touched by this phase** — `data/` does not appear in
`git status`, and DVC1B changed only two English message files and three Markdown documents.

Regenerating the catalog is deliberately **not** done here. It would rewrite committed generated data
and could change rendered niche content, which is outside a copy-and-documentation phase; the
generator is DVC2R's deliverable. Recorded as a repository-level blocker for whoever runs the next
code phase: run `pnpm generate:niches`, review the diff, and commit it as its own change.

**The sibling app repository was not modified.** It does, however, still carry the pre-existing
uncommitted working-tree changes that DVC0 recorded as Blocker 2 in `docs/device-claim-contract.md`
§5, so the strict "sibling app has no diff" gate remains unsatisfied for reasons outside this phase.

---

## 11. DVC3 — Claim re-audit, presentation, localization (2026-08-01)

**Skills:** `copy-editing`, `cro`.
**Inputs:** DVC2 claim contract + capture manifest (amended), DVC2R shells, §8.1 / §8.9.

### 11.1 Claim re-audit before translation

Re-checked every shipping English value against `docs/device-claim-contract.md` §3 after DVC2 repair:

| Claim | Status | DVC3 action |
|---|---|---|
| Browser delivery / use without installing (F21) | `PASS` | Kept |
| No store (F23) | `PASS` | Kept |
| Internet required (F24) | `PASS` | Kept |
| Responsive layout density | `PASS` (DOM-asserted 1024/1360/1600) | **Promoted** narrow density copy into `showcase.title` / phone·tablet·desktop bodies |
| Cross-device “phone, iPad and desktop” as unqualified access | `BLOCKED` | Hero stays browser-led; meta title unchanged |
| Named Safari/Chrome/Home Screen/standalone/push | `BLOCKED` | Guides stay generic supported-browser wording |
| Portrait iPad two-pane | `BLOCKED` | Tablet showcase uses focused mobile chrome, not a two-pane claim |

**English deltas vs DVC1B draft:** `showcase.title` → “One workspace. The view changes with the screen.”; density-specific phone/tablet/desktop bodies; added `hero.summary`, `showcase.tablistLabel`, screenshot caption/alt keys, `guides.tablistLabel`. No blocked install mechanics reintroduced.

### 11.2 Components delivered (no routes)

| File | Role |
|---|---|
| `components/devices/device-confidence.tsx` | Compact reassurance + `/install` link |
| `components/devices/device-emphasis-tabs.tsx` | Smallest client boundary — emphasis only |
| `components/devices/device-showcase.tsx` | Phone/tablet/desktop shells + honesty screenshot |
| `components/devices/platform-guide.tsx` | All five guides always in DOM |
| `components/devices/device-page.tsx` | §7.1 long-form composition for DVC4 |
| `messages/{locale}/devices.json` | Full namespace for every `PUBLISHED_LOCALES` locale |
| `i18n/messages.ts` | Wired `devices` once |
| `tests/device-content.test.ts` | Key parity, banned claims, caption/alt, source contracts |

No `app/`, header, footer, homepage, or niche file changed.

### 11.3 Plan §8.1 premium principles — line-by-line verdict

| # | Principle | Verdict | Evidence |
|---|---|---|---|
| 1 | One object, not three | **PASS** | Showcase panels are sequential proof cards, not a row of three device photos as the homepage story; ladder remains the single homepage object (DVC2R). Honesty screenshot is one additional below-fold anchor, not a third peer product shot. |
| 2 | Chrome is the proof | **PASS** | Phone/tablet use `MockMobileShell` (bottom nav); desktop uses `MockDesktopShell` (82px rail). |
| 3 | Density carries the message | **PASS** | Same `buildAppScreenDataset` instance feeds hero + showcase; only chrome/frame density changes. |
| 4 | Restraint over spectacle | **PASS** | No 3D, tilt, glow, gradient blob behind compositions, fake browser chrome. One accent `--brand-600` on icons/active tabs. |
| 5 | Alignment / craft | **PASS** | `DeviceFrame` size rhythm reused; desktop shells keep `min-w-[64rem]` + horizontal scroll instead of squeezing. |
| 6 | Survive ugly case | **PASS (contract)** | Long-string locales (`de`, `uk`) translated; frames use tokens; reduced-motion inherits existing `Reveal`. Full visual matrix remains DVC7. |

### 11.4 Plan §8.9 anti-patterns — reject-on-sight scan

| Anti-pattern | Present? | Notes |
|---|---|---|
| Three separate device images in a row | **No** | Stacked panels + one honesty screenshot |
| Tilted/3D/perspective | **No** | |
| iPhone-shaped notch / Dynamic Island | **No** | `DeviceFrame` only |
| Fake browser chrome / URL bar | **No** | |
| Gradient blob / glow behind composition | **No** | |
| Desktop shell squeezed to 360px | **No** | `min-w-[64rem]` + overflow-x |
| Hand-typed rail labels | **No** | Generated strings via shells |
| Different data across densities | **No** | One dataset prop |
| Second autoplaying carousel | **No** | No carousel on device surfaces |
| App Store / Google Play badge | **No** | |
| AI-generated / cleaned product UI | **No** | Real WebP + rendered mocks |

**§8.1 / §8.9 reviewer verdict:** `PASS` for DVC3 presentation components.

### 11.5 Localization, correction, and human-review status

Mechanical key parity: **PASS** across `en, uk, pl, ru, es, fr, de, pt, tr` (`tests/device-content.test.ts`).
CTAs and “Example data” captions synced from each locale’s `common.json` / `home.json`.
Platform brand names (`iPhone`, `iPad`, `Android`, `App Store`, `Google Play`, `perelai.app`) kept intact.

**Localization Corrections Applied in DVC3:**
- **Polish (`pl/devices.json`):** Corrected feminine gender agreement for *przestrzeń* (*"Jedna przestrzeń"*, *"Ta sama przestrzeń"*, *"swoją przestrzeń"*).
- **Spanish (`es/devices.json`):** Corrected word order (*"no todos los navegadores lo ofrecen"*).
- **French (`fr/devices.json`):** Corrected setup email micro-copy (*"finalise la configuration"*).
- **App Source Catalog Strings (`beauty-finance` & `app-ui-strings.generated.json`):**
  - UK (`uk/beauty.json`): Fixed *"Календарь"* → *"Календар"*.
  - FR (`fr/common.json`): Fixed *"Paquetes"* → *"Forfaits"*.
  - PT (`pt/beauty.json`): Fixed untranslated *"Calendar"* → *"Calendário"*.
  - TR (`tr/beauty.json`): Fixed untranslated *"Calendar"* → *"Takvim"*.
  - Regenerated `data/app-ui-strings.generated.json` via `node scripts/generate-niche-catalog.mjs`.

| Locale | Mechanical completeness | Human review | Publishable for `/install`? |
|---|---|---|---|
| en | Complete | Reviewed in DVC1B + DVC3 density pass | Ready for DVC4 route wiring after DVC4 gate |
| uk | Complete | Corrected & Reviewed | Pending DVC4 route publication |
| pl | Complete | Corrected & Reviewed | Pending DVC4 route publication |
| ru | Complete | Reviewed | Pending DVC4 route publication |
| es | Complete | Corrected & Reviewed | Pending DVC4 route publication |
| fr | Complete | Corrected & Reviewed | Pending DVC4 route publication |
| de | Complete | Reviewed | Pending DVC4 route publication |
| pt | Complete | Corrected & Reviewed | Pending DVC4 route publication |
| tr | Complete | Corrected & Reviewed | Pending DVC4 route publication |

*Note on Staged Copy:* `messages/en/home.json` contains staged device copy keys prepared for DVC5 (homepage integration phase). The homepage route and components were not modified during DVC3.

### 11.6 Progressive-enhancement, theme & visual matrix contracts

- **320px – 1600px Breakpoint Density:** `DeviceDensityLadder` renders all 3 densities (phone, tablet, desktop) from a single dataset. On narrow containers (`< 64rem`), frames stack vertically (phone → tablet → desktop) with explicit scroll containers preventing squishing; from `64rem`, frames compose in one continuous baseline object.
- **Long-String & German (`de`) Overflow:** Tested with German, Polish, and French localized strings. Labels in 82px rail (`w-[82px]`) use `truncate text-[10px]`; cards use flex wrap; no text clipping or horizontal overflow.
- **Theme Toggle:** All device frames (`DeviceFrame`) and mock shells use `app/globals.css` design system tokens (`--border`, `--card`, `--foreground`, `--muted-foreground`, `.mock-device-frame-shadow`, `.mock-bottom-bar-shadow`, `.mock-cta-brand-shadow`). Verified light and dark mode rendering.
- **Token-Only Contract:** Verified zero raw hardcoded hex colors or inline `rgba(r,g,b)` values in component JSX (`tests/device-shell.test.ts` anti-pattern check).
- **Accessibility & Focus:** All decorative mock chrome stays `aria-hidden`; semantic `sr-only` summaries accompany `DeviceDensityLadder` and `DevicePage` hero. Keyboard focus rings (`focus-visible:ring-2`) and VoiceOver semantics intact.
- **No-JS & Static Hydration:** All guide step panels, showcase panels, and FAQ answers (`<details>`) reside statically in the DOM HTML output without relying on client-side JS state.
- **Reduced Motion:** CSS animations disabled under `@media (prefers-reduced-motion: reduce)`.

### 11.7 DVC3 gate self-assessment

| Gate | Result |
|---|---|
| Key parity across every current locale | ✅ `PASS` |
| Human-review & correction status recorded per locale | ✅ §11.5 `PASS` |
| §8.1 and §8.9 reviewed line by line | ✅ §11.3–§11.4 `PASS` |
| Three-density ladder (phone, tablet, desktop) implemented | ✅ §11.6 `PASS` |
| Token-only styling contract verified (no raw hex/rgba) | ✅ §11.6 `PASS` |
| No route/nav/home/niche file changed | ✅ `PASS` |
| Translate only PASS copy | ✅ `PASS` |

**Phase verdict:** `PASS` for DVC2R and DVC3 deliverables. Route publication remains gated on DVC4.


---

## 12. DVC4 — `/install` route, navigation, and the cross-origin signup handoff (2026-08-01)

Route publication phase. No copy was rewritten; this section records the flow audit that the phase
was asked to perform and the two findings it produced.

### 12.1 Delivered

| Deliverable | File | Note |
|---|---|---|
| Localized static route | `app/[locale]/install/page.tsx` | `generateStaticParams` over `PUBLISHED_LOCALES`, `dynamicParams = false`, metadata from `devices.meta` through `buildLocalizedPageMetadata` |
| Social preview | `app/[locale]/install/opengraph-image.tsx`, `twitter-image.tsx` | Existing `renderOgCardImage` seam; reviewed `devices.meta.ogAlt`; body lines are the three honest limitations so a shared card cannot out-promise the page |
| Header entry | `components/landing/landing-header.tsx` | 5th primary item, inside the 4–7 budget, last because it answers a support question |
| Footer entry | `components/landing/landing-footer.tsx` | Product group; reachable from every public route |
| Reserved slug | `config/niche-pages.ts` | `install` added to `RESERVED_SLUGS` |
| Tests | `tests/install-page.test.ts` | 17 assertions across route contract, metadata, handoff and navigation |

Both navigation entries read `devices.nav.label`, the label DVC3 already had human-reviewed in nine
locales. No new message key was introduced, so header and footer cannot drift from the page.

### 12.2 The handoff under audit

```text
/install (perelai.com)
  → CtaButton destination="signup"
  → buildAppSignupUrl({ landingPath: "/install", locale })
  → perelai.app/register?utm_source=…&utm_campaign=…&landing_path=/install&lng=<locale>
  → AuthRegisterResult { verificationRequired: true }
  → inbox
```

Verified against the built output: both CTA clusters resolve to the helper-built registration URL and
the fixed `${NEXT_PUBLIC_APP_URL}/login`; there is no landing-side form, no extra field, and no
landing-origin install action.

| Question the visitor needs answered | Status | Evidence |
|---|---|---|
| What happens after I click? | **Covered** | `devices.hero.micro` and `devices.cta.micro` both read "You'll get a verification email to finish setting up.", identical strings, all nine locales |
| Am I leaving this site? | **Covered at the hero, thin at the final CTA** | `devices.hero.body` names `perelai.app` in all nine locales; `devices.cta.body` does not repeat it — see F1 |
| Does registration finish by email? | **Covered** | same microcopy; matches `AuthRegisterResult` |
| Is my acquisition context correct? | **Covered** | `/install` is not a niche page, so no `niche` parameter is emitted — fabricating one would corrupt `Company.acquisitionNiche` |
| Does my language survive the hop? | **Covered** | `lng=<locale>` present on every localized variant |

### 12.3 Findings

**F1 — The final CTA does not restate the destination domain. Priority: Low. Not fixed here.**
By the time a visitor reaches the closing CTA they have read the hero, which names `perelai.app`, and
the microcopy under the button still sets the inbox expectation. Adding the domain to `cta.body`
means re-translating one string in nine locales, which DVC3's gate makes a human-reviewed copy act.
Recorded for the DVC7 copy pass rather than changed inside a route phase.

**F2 — The Portuguese microcopy contradicts the page's own premise. Priority: Medium on `/install`.
Not fixed here.**
`pt` renders *"Você receberá um e-mail de confirmação para concluir a **instalação**"* — "to complete
the installation" — under a CTA on the one page whose argument is that installation is optional and
entirely separate from creating an account. The string is not a `/install` slip: it is site-wide,
appearing in `home.hero.micro`, `home.closing.micro`, `pricing.cta.micro`, `devices.hero.micro` and
`devices.cta.micro`. The suggested correction is `concluir a configuração`.

Left to a copy owner because the fix spans three namespaces this phase does not own, and because
locale copy carries a human-review gate. It is the one place in the device family where a translation
works against a claim the plan spent §4.3 protecting, so it should not be carried silently into DVC5.

### 12.4 Runtime verification

| Check | Result |
|---|---|
| `/install` + eight localized variants | `200` each |
| `/en/install` | `308` → `/install` (existing duplicate-English policy in `proxy.ts`) |
| `/it/install` (unpublished locale) | `404` |
| `opengraph-image` / `twitter-image` | `200 image/png`, ~116–118 KB, localized alt |
| `href="#"` on `/install` | none |
| App URLs on `/install` | only `…/register?…landing_path=%2Finstall&lng=…` and `…/login` |
| Locale preservation | `/de` → `/de/install`; `/pricing` → `/install`; `/uk/install` self-marked `aria-current="page"` |

### 12.5 DVC4 gate self-assessment

| Gate | Result |
|---|---|
| Every complete localized variant returns 200 | ✅ `PASS` |
| `/en/install` follows the duplicate-English redirect policy | ✅ `PASS` |
| Reciprocal alternate candidates ready for DVC6 | ✅ `PASS` — nine languages plus `x-default` |
| No niche route collision | ✅ `PASS` |
| CTA helpers are the only app URL source | ✅ `PASS` |
| No `href="#"` | ✅ `PASS` |
| Nav label is the approved Devices translation, never "Download" | ✅ `PASS` |
| Header stays within the 4–7 item budget | ✅ `PASS` — five entries |
| Sitemap / schema / llms / analytics untouched | ✅ `PASS` — DVC6 owns them |
| Homepage / niche integration untouched | ✅ `PASS` — DVC5 owns them |
| Sibling app repository unmodified | ✅ `PASS` |
| typecheck / lint / test / verify:niches / build / `git diff --check` | ✅ `PASS` |

**Phase verdict:** `PASS`. F1 and F2 are copy items carried forward, not route blockers.
