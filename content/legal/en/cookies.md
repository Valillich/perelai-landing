---
document: cookies
version: "2026-10-01.1"
effectiveDate: "2026-10-01"
lastReviewedDate: "2026-09-26"
status: approved
sourceLocale: en
approvedBy: "owner-platform-legal-v1-20260926"
---

# Perelai Cookie and Similar Technologies Policy

## 1. Scope

This policy explains how {{LEGAL_PROVIDER_FULL_NAME}}, trading as {{TRADING_NAME}} (**Perelai**, **we**,
**us**), uses cookies and similar technologies on perelai.com, the Perelai app, Perelai-powered public
booking and client pages, and related web pages.

Read the [Privacy Notice](/legal/privacy) for who controls personal data, purposes, recipients,
transfers, retention and your rights.

## 2. Summary

We use only technologies that are needed to deliver and protect our pages, keep you signed in, run
booking flows you start and remember choices you make. We do not use analytics, advertising pixels,
marketing cookies or cross-site tracking. Because we do not use optional cookies, we do not show a
cookie consent banner.

## 3. What these technologies are

- **Cookies** are small values a website asks a browser to store and send with later requests.
- **Local storage** remains on a device until code or the user removes it.
- **Session storage** normally remains for the life of a browser tab.
- **Service workers** are scripts a browser can run in the background, for example to show
  notifications you asked for.

## 4. Website (perelai.com)

| Name | Type and provider | Purpose | Duration |
|---|---|---|---|
| `NEXT_LOCALE` | first-party cookie | serve the website in your language | 1 year |
| `cf_clearance` | Cloudflare security cookie, only when a security check is shown | remember that your browser passed a security check | up to 1 year |
| `perelai-theme` | first-party local storage | remember light or dark theme | until you change or clear it |
| `perelai-market` | first-party local storage | remember a display market you choose | until you change or clear it |

Our hosting and network providers also receive standard request data, such as IP address and browser
information, to deliver and protect pages. See the [Subprocessor List](/legal/subprocessors).

## 5. App and public booking pages

| Name or group | Type | Purpose | Duration |
|---|---|---|---|
| `accessToken` | local storage | keep you signed in to the app | sign-in token valid for 1 day; removed when you sign out or when the session is rejected |
| `google_oauth_bind` | first-party cookie, only during Google sign-in | protect the Google sign-in flow against forgery | 10 minutes |
| `i18nextLng` | local storage | remember the app and booking page language | until you change or clear it |
| `lastLoginEmail` | local storage | pre-fill your email on the sign-in form | until replaced or cleared |
| theme and display settings, such as `bf-theme` and `bf-privacy-modes` | local storage | remember app theme and whether amounts are hidden on screen | until you change or clear them |
| interface guidance state | local and session storage | remember dismissed tips and welcome screens | until cleared or the tab is closed |
| onboarding draft | session storage | keep unfinished workspace setup in the current tab | until setup is completed or the tab is closed |
| checkout status | session storage | continue a subscription checkout you started and wait for confirmation | until the checkout finishes or the tab is closed |
| Google Calendar sync status | session storage | track a Calendar import you started | until it finishes or the tab is closed |
| public booking navigation, such as `bf_public_booking_return_path` | session storage | return you to the booking page you were using | until the tab is closed |
| client hub and personal booking links, such as `bf_public_hub_session` | session storage | keep a personal booking link you opened working in the current tab | checked for up to 2 hours; removed when stale or when the tab is closed |
| notification service worker | service worker | show Web Push notifications you enabled | until you disable notifications or clear site data |

## 6. Third-party content and services

- **Paddle:** when you open subscription checkout in the app, Paddle's checkout script and pages are
  loaded from Paddle. Paddle may use its own cookies for payment, fraud prevention and preferences
  under its [Privacy Notice](https://www.paddle.com/legal/privacy).
- **Google:** if you choose Google sign-in or connect Google Calendar, you are taken to Google, which
  uses its own cookies under its own policies.
- **Images:** a business page may show a default cover image loaded from Unsplash, which receives
  your IP address and browser information to deliver the image.
- **Push services:** if you enable notifications, your browser vendor's push service relays them.

## 7. Your choices

You can:

- change language, theme and other preferences in the product;
- disable notifications in the app or in your browser or device settings;
- clear cookies, local storage and site data in your browser settings; and
- use browser controls that block or limit storage.

Clearing necessary storage may sign you out, remove an unfinished setup or interrupt a booking flow.

## 8. Changes

We update this policy when the technologies we use change and show the version and effective date at
the top. If we ever introduce optional analytics or marketing technologies, we will update this policy
and ask for any required consent before they are activated. Prior versions are available on request
from {{SUPPORT_EMAIL}}.

## 9. Contact

- Privacy questions and requests: {{PRIVACY_EMAIL}}
- Support: {{SUPPORT_EMAIL}}
- Address: {{BUSINESS_ADDRESS}}
