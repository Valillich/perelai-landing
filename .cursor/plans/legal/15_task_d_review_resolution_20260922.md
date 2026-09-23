# Task D review resolution — 2026-09-22

Review of `feat(legal): require signup acceptance evidence` (beauty-finance `0cc6fec76`,
migration fix `72fa0f3a1`, branch `bill`) against `00_README_execution_plan.md` §7/§7.4,
LGL-3, §10 and `08_ui_copy_and_surface_matrix.md` §3/§7.

Code completion is not legal approval. Counsel gates remain unchanged.

## Resolved findings

### 1. Company provisioned without bound DPA evidence (fixed)

`POST /companies` and `POST /companies/workspace` previously created an OWNER
workspace without checking or binding represented-business DPA evidence. A
staff-invited user (Terms+Privacy only, `PERSONAL_USE`) could provision a
Company, and an owner's second Company got no scope link.

Resolution: new `LegalAcceptanceService.bindCompanyScope(tx, {userId, companyId})`
called inside the provisioning transaction of both `CompaniesService.create` and
`CompaniesService.createWorkspace`. It locates the user's latest
`DPA` + `AUTHORIZED_BUSINESS_REPRESENTATIVE` acceptance and adds an append-only
`LegalAcceptanceCompanyScope` row; the original evidence is never rewritten.
When the evidence layer is configured (production asserts it at bootstrap) and
the user has no authorised DPA acceptance, provisioning is rejected with 403.
When `LEGAL_*_VERSION` env is absent (unconfigured preview/development), the
requirement is skipped so local flows keep working.

`LegalAcceptanceService` moved into a new `LegalAcceptanceModule`, imported by
`AuthModule` and `CompaniesModule`.

~~Open gap (documented, not a defect): a user whose only evidence is a staff
invitation (`PERSONAL_USE`, no DPA) cannot provision a Company in production
until a provisioning-time DPA acceptance surface exists. That surface needs
counsel-approved copy and is not part of Task D.~~

**Resolved 2026-09-22** by `legal_acceptance_ux_20260922.plan.md`
(beauty-finance `.cursor/plans/monetization/polishing/`): the create-workspace
sheet reveals an in-context DPA acceptance step on the coded
`LEGAL_DPA_ACCEPTANCE_REQUIRED` 403 and resubmits with evidence; the API
records a `WORKSPACE_PROVISIONING` DPA row and binds it to the new Company
atomically.

### 2. Google sign-in for a new account from the Login page dead-ended (fixed)

`LoginPage` starts OAuth without acceptance params, so a brand-new account hit
`loginWithGoogle` → generic `google_login_failed` with no route to register.

Resolution: `AuthService.prepareGoogleSignupAcceptance` now rethrows missing,
stale or unconfigured acceptance as `LegalAcceptanceRequiredException` (a
`BadRequestException` subclass). `AuthController.googleCallback` maps it to
`/auth/callback?error=legal_acceptance_required`; any other failure keeps
`google_login_failed`. `OAuthCallbackPage` renders dedicated copy
("Confirm the Terms to continue" + explanation) and a "Back to sign up" button
navigating to `/register` instead of `/login`.

### 3. Stale bundle at OAuth initiation returned a raw JSON 400 (fixed)

`GoogleAuthGuard.readSignupLegalAcceptance` let `BadRequestException` escape on
a top-level navigation. Now it converts it to `GoogleOAuthRedirectException`
redirecting to `/auth/callback?error=legal_acceptance_required`, and
`@Get('auth/google')` got `@UseFilters(GoogleOAuthRedirectFilter)` so the guard
throw is honoured. No `OAuthState` row is written and Google is never invoked
for stale acceptance.

## Resolved review notes (round 2)

### 4. Acceptance copy is now canonical in `en/common.json`

The `legal.signup_*`, `legal.dpa_link`, `legal.privacy_notice_link` and
`login.oauth_legal_required_*` / `login.back_to_signup` keys are real English
translations (counsel-controlled wording), not only inline `defaultValue`s.
Other locales intentionally fall back to English (`fallbackLng: 'en'`) —
translated acceptance copy requires a counsel decision; no machine translation
was added.

### 5. `authorityBasis` is explicit on every row

Owner Terms now records `AUTHORIZED_BUSINESS_REPRESENTATIVE` (the owner binds
the business contract), DPA unchanged, and every `PRIVACY_NOTICE` row records
`PERSONAL_USE` — the acknowledgement concerns the person's own data notice.
`representedCustomerRef` remains deliberately unpopulated (nullable, deferred
until counsel defines what counts as the verified contracting business).

### 6. Append-only evidence vs deletion — ADR-0016

`docs/adr/0016-append-only-legal-acceptance-evidence.md` records the decision:
evidence survives account deletion (RESTRICT FKs + triggers), erasure is a
retention decision deferred to LGL-7. New test helper
`purgeLegalAcceptanceEvidence` in `test-db.ts` bypasses the triggers via
`SET LOCAL session_replication_role` for fixture cleanup only;
`billing-ownership-provisioning` cleanup uses it.

### 7. Housekeeping

- `AuthService.legalAcceptances` is now a required constructor dependency;
  `requireLegalAcceptances()` removed and the team2 integration fixture passes
  a real service.
- No-op `stopPropagation` handlers removed from the legal links in
  `SignupScreen` — the browser's label activation behaviour already prevents
  the checkbox from toggling.
- `registerSchema` `.strict()` stays (documented breaking change for any
  out-of-repo scripts; the only in-repo client sends the exact field set).
- `CONTEXT.md` now documents that dev registration requires the four `LEGAL_*`
  + `VITE_LEGAL_*` variables (with dev-safe values).

## Tests

- `legal-acceptance.service.spec.ts`: `bindCompanyScope` — links latest
  authorised DPA row; 403 when configured and evidence missing; skip when
  unconfigured.
- `google-auth.guard.spec.ts`: stale acceptance at initiation →
  `GoogleOAuthRedirectException` with `legal_acceptance_required`, no state row.
- `auth.controller.spec.ts`: `legal_acceptance_required` vs
  `google_login_failed` mapping.
- `companies.service.spec.ts`: scope binding delegated on `create` and
  `createWorkspace`; constructor updated at all call sites
  (incl. `company-media.spec.ts`).
- `OAuthCallbackPage.legal.spec.tsx` (new): required-error → `/register`;
  generic error → `/login`.
- Integration specs aligned with the contract:
  `billing-ownership-provisioning` passes `legalAcceptance`/`oauthLegalAcceptance`
  payloads and real `LegalAcceptanceService`;
  `companies.analytics` sets `LEGAL_*_VERSION` env before module compile.

Result: API jest 171/171 pass (auth + legal + companies suites); web jest
17/17 pass; `tsc --noEmit` on apps/api clean. Integration specs could not be
executed in this session — `libs/core/src/billing/api-contracts.ts` has
uncommitted BILL WIP that breaks the `@beauty-finance/core` import
(`BillingTrialStatus is not defined`); run them once the WIP lands.

## Remaining human gates

- `LEGAL_TERMS_VERSION` / `LEGAL_DPA_VERSION` / `LEGAL_PRIVACY_VERSION` /
  `LEGAL_SIGNUP_ACCEPTANCE_COPY_VERSION` (and `VITE_` mirrors) stay `[TBD]` —
  counsel-approved immutable versions are still required before production.
- Signup acceptance copy exists only as English `defaultValue` strings;
  non-EN copy needs a counsel decision, not machine translation.
- Provisioning-time DPA acceptance UI for users without existing DPA evidence
  (staff→owner path) is intentionally deferred; the API now blocks rather than
  silently skipping.
- `LegalAcceptance.userId`/`companyId` FKs are `ON DELETE RESTRICT` + append-only
  triggers: account erasure cannot delete evidence rows — retention vs erasure
  needs an explicit privacy decision (Task H/privacy-request scope).
- Material-change re-acceptance stays disabled (`POLICY_NOT_CONFIGURED`).
