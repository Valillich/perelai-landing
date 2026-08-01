# Device-Install Intent Research

**Phase:** DVC1A - research, positioning, and site architecture
**Captured:** 2026-08-01
**Status:** Directional hypothesis only; do not use as demand, search-volume, or customer-proof evidence.

## Scope and Method

This note asks whether independent beauty professionals express an app, installation, phone, iPad, Android, or desktop concern when selecting booking software. It does not assume that a device concern exists, and it does not establish demand for Perelai.

The repository was checked first for Search Console exports, founder notes, support requests, signup feedback, and analytics. It contains existing voice-of-customer research about bookings, no-shows, and money, plus privacy-limited landing analytics code, but no first-party device/install-intent dataset. The sources below are therefore clearly labelled proxies: public community discussions about adjacent booking tools. They are not Perelai prospects and cannot establish frequency for Perelai.

## Proxy Source Log

| URL | Source kind | Published | Captured | Short excerpt | Theme | Segment signal |
|---|---|---|---|---|---|---|
| https://www.reddit.com/r/hairstylist/comments/1go8hx2 | Hairstylist community discussion | 2024-11-10 | 2026-08-01 | "The last thing I want is another app on my phone. It's just as easy to click their website and book." | App versus website; client-booking friction | Hairstylist considering a branded salon booking app |
| https://www.reddit.com/r/hairstylist/comments/1lu7nd1 | Hairstylist community discussion | 2025-07-07 | 2026-08-01 | "I absolutely love their app on my phone." | Phone access | Self-employed stylist evaluating a replacement scheduling tool |
| https://www.reddit.com/r/hairstylist/comments/1lu7nd1 | Hairstylist community discussion | 2025-07-07 | 2026-08-01 | "not friendly to android users as much as apple" | Android compatibility concern | Stylist comparing scheduling tools |
| https://www.reddit.com/r/hairstylist/comments/1fia0ac | Hairstylist community discussion | 2024-09-16 | 2026-08-01 | "The mobile app is difficult to move things around on, but the desktop version I can modify almost anything." | Desktop work versus phone workflow | Salon operator managing online booking changes |

## Research Questions and Synthesis

### Do prospects ask whether there is an iPhone or Android app?

**Finding:** The available proxy set contains phone and Android language, but no first-party Perelai question and no direct iPhone-app question. It is not evidence that Perelai prospects ask for a native app or a store listing.

**Confidence:** Low. Two proxy observations mention phone or Android, no Perelai customer source exists, and the sample has fewer than five independent data points.

### Is the concern store availability, home-screen access, notifications, desktop use, or trust?

**Finding:** The proxy discussions point to practical access and workflow fit, not a single dominant store concern: one participant prefers a website to another phone app, one values phone access, one flags Android compatibility, and one prefers desktop controls for a task that is awkward on mobile.

**Confidence:** Medium hypothesis. The pattern appears across three independent proxy threads, but it is not Perelai-specific and must be validated with first-party evidence before it shapes a strong claim.

### Which words do people use?

**Finding:** The observed proxy vocabulary is `app`, `phone`, `website`, `online booking`, `Android`, `mobile app`, and `desktop version`. None of the sources establishes that prospects use `install`, `download`, `home screen`, or `store` when asking about Perelai.

**Confidence:** Medium hypothesis for the observed words; Low for the absent terms. The wording is directly quoted from four proxy sources, but the sample is small and adjacent.

### When does the question appear in the journey?

**Finding:** It appears during evaluation or switching, when a professional compares scheduling tools and thinks through the client booking experience or a daily operational task. It is not evidence of a post-signup installation problem.

**Confidence:** Medium hypothesis. Each proxy thread is a selection, switching, or workflow discussion rather than a Perelai conversion record.

## Implications and Boundaries

- Keep device language calm and answer-oriented: browser access, phone, and desktop are compatibility questions, not primary product value.
- Do not infer that a store listing, a native app, or a download mechanism is desired. The proxy source preferring a website is evidence against treating installation as a conversion benefit.
- Keep Android, iPad, desktop-layout, standalone-window, and iPhone-alert language out of public copy until their rows in `docs/device-claim-contract.md` become `PASS`.
- Collect first-party evidence next: tag support and founder-outreach questions that include `app`, `iPhone`, `Android`, `browser`, `desktop`, `install`, `home screen`, or `download`; export Search Console queries; then replace this proxy note rather than aggregating it into a false trend.

## Information Architecture Decision

**Decision:** Use one canonical `/install` hub. Do not propose `/ios-app`, `/android-app`, `/ipad-app`, or `/desktop-app` routes.

**Access:** Make `/install` reachable within one click from the header and footer. Do not add a platform submenu.

**Homepage placement:** Reserve a short compatibility reassurance near the hero CTA and a full device section after Money and before Setup. This is a content-architecture decision only; DVC1A adds no copy or component.

**Niche placement:** Reserve one compact shared reassurance after Setup, linking to `/install`; do not duplicate install instructions on niche pages.

**Rationale:** The narrow answer hub addresses the observed evaluation-stage vocabulary without turning the site into four duplicate platform pages or displacing the clients, bookings, and cash-flow proposition.

## Research Gaps

- Search Console query export for brand-plus-platform terms.
- Founder outreach, sales, and support questions with consented provenance.
- Signup-feedback tagging for where the question occurs and whether it blocks conversion.
- Authenticated manual device evidence required by the claim contract. Research language cannot unblock a product claim.
