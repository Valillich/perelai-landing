# Finance-First Migration Audit (FM0)

**Phase:** FM0 — Audit and quarantine partial work
**Date:** 2026-08-03
**Landing HEAD:** `32aa27e1a57aefc4a9d6fb348e8cbbe9b2f66ae9`
**Product HEAD (`beauty-finance`):** `f081179fe5beba5f5eeb3bf0bdb7568ad61f032f`
**Governing plan:** `.cursor/plans/messages/00_home_hero_positioning_and_experiment_plan_20260802.md`

---

## 1. Executive Summary & Repository Status

### 1.1 Repository HEADs & Status

| Repository | Path | Commit HEAD | Git Working Tree Status |
|---|---|---|---|
| Landing | `/Users/valery/Sites/perelai-landing` | `32aa27e1a57aefc4a9d6fb348e8cbbe9b2f66ae9` | On `main` (ahead of `origin/main` by 16 commits).<br>Modified: `.agents/product-marketing.md`, `.cursor/plans/reference/messaging-and-claims.md`<br>Untracked: `docs/finance-first-migration-audit.md` |
| Product (Evidence) | `/Users/valery/Sites/beauty-finance` | `f081179fe5beba5f5eeb3bf0bdb7568ad61f032f` | Clean on `main` (read-only evidence source) |

### 1.2 File Ownership & Worktree Attribution

Both working trees are clean. All recent commits in `perelai-landing` are attributed as follows:

- **Finance Pivot Partial Work (committed in `32aa27e`):**
  - `.cursor/plans/messages/00_home_hero_positioning_and_experiment_plan_20260802.md`
  - `.cursor/plans/messages/01_home_hero_positioning_llm_prompts_20260802.md`
  - `docs/finance-claim-contract.md`
  - `docs/home-hero-copy-audit.md`
  - `docs/research/home-hero-message-evidence-2026-08-02.md`
  - `docs/testing-env.md`
  - `docs/experiment-backlog.md`
  - `.agents/product-marketing.md`
  - `.cursor/plans/reference/messaging-and-claims.md`
  - `components/homepage/hero.tsx`
  - `lib/site.ts`
  - `messages/{de,en,es,fr,pl,pt,ru,tr,uk}/home.json`
- **Pre-Existing Unrelated Work (preserved untouched):**
  - Device distribution & density ladder: `7e528d6`, `22c799e`, `727567d`, `836fc70`
  - Collaboration section: `635bb2a`
  - App-screen mock datasets: `02071cd`, `5bfc8df`
  - PostHog analytics integration: `3a218a9`
  - Lash artist niche catalog: `08020dd`
- **Unknown Owner Files:** 0 files (100% of tracked files accounted for).

---

## 2. Surface Inventory Touched by Partial Pivot

The partial finance pivot touched the following surfaces across the codebase:

| Surface | File Paths | Current Partial State | Required Phase Owner |
|---|---|---|---|
| Visible Hero | `components/homepage/hero.tsx` | Renders provisional finance headline | FM4B |
| Metadata & Site Config | `lib/site.ts` | Site description updated to simple finance software | FM6 |
| Locale Messages (9 locales) | `messages/{de,en,es,fr,pl,pt,ru,tr,uk}/home.json` | Hero, meta, closing title updated; translations unreviewed calques | FM4A (en), FM5 (locales) |
| Canonical Documentation | `.agents/product-marketing.md`, `.cursor/plans/reference/messaging-and-claims.md` | Finance-first hero top section; state labels corrected in FM0 | FM2 |
| Claim Contracts | `docs/finance-claim-contract.md` | Contains FC1–FC10 claim rows needing semantic repairs | FM1 |
| Research & Copy Audit | `docs/research/home-hero-message-evidence-2026-08-02.md`, `docs/home-hero-copy-audit.md` | Preserved as historical records of superseded MSG sequence | Historical |
| Experiment Backlog | `docs/experiment-backlog.md` | Contains superseded operational-clarity candidate | FM6 |
| Test Suites | `tests/seo-surface.test.ts`, `tests/device-content.test.ts`, `tests/collaboration-feature.test.ts`, `tests/verify-niches.test.ts`, etc. | Verified green in FM0 run | FM4B, FM7 |

---

## 3. Truthful Deployment State & Supersession Record

### 3.1 Deployment Evidence vs. Documentation State

- **Prior Claim in Docs:** `.agents/product-marketing.md:11` and `.cursor/plans/reference/messaging-and-claims.md:48` previously labeled the draft copy as "published 2026-08-03" and "Live in all nine published locales."
- **Verified Deployment Reality:** No production deployment or live release verification has occurred for commit `32aa27e`. The changes exist solely as local git commits on branch `main` (16 commits ahead of `origin/main`).
- **Correction Applied in FM0:** Both `.agents/product-marketing.md` and `.cursor/plans/reference/messaging-and-claims.md` have been updated to designate the text as `provisional worktree candidate` / `provisional draft`.

### 3.2 Supersession of MSG Sequence

The former **MSG0–MSG7** execution sequence and its accompanying copy audit (`docs/home-hero-copy-audit.md`) are explicitly marked as **superseded**. Historical research documents remain preserved in the repository for audit provenance, but all active migration work is governed exclusively by **FM0–FM11**.

---

## 4. Technical Gates Verification Record

### 4.1 Rerun Verification Results (FM0 Session — 2026-08-03)

| Command / Gate | Result | Notes |
|---|---|---|
| `pnpm typecheck` | **PASS** (code 0) | `tsc --noEmit` clean |
| `pnpm lint` | **PASS** (code 0) | `eslint .` clean |
| `pnpm test` | **PASS** (code 0) | 17 test files, 231 tests passed |
| `pnpm verify:niches` | **PASS** (code 0) | 32 niche pages, 17 mock keys, 22 product labels, 9 locales, ≥60% uniqueness verified |
| `pnpm build` | **PASS** (code 0) | Next.js Turbopack production build compiled 72 static pages cleanly |

---

## 5. Defect Register (R1–R13 Audit)

| ID | Sev | Defect Description | Evidence Path & Line | Required Resolution | Phase |
|---|---|---|---|---|---|
| R1 | P1 | Documentation falsely labels worktree copy as "published" and "live". | `.agents/product-marketing.md:11`, `messaging-and-claims.md:48` | Relabel as provisional candidate until verified in production. *(Resolved in FM0)* | FM0 |
| R2 | P1 | Top of canonical docs is finance-first, but JTBD, problems, differentiation, and page order remain Booking/Inbox-first. | `messaging-and-claims.md:50-120`, `.agents/product-marketing.md:50-120` | Rewrite canonical positioning, JTBD, problems, differentiation, and order end-to-end. | FM2 |
| R3 | P1 | `finance-claim-contract.md` permits "what you earned" in FC1 while rejecting `earned` in §4.2 as ambiguous revenue. | `docs/finance-claim-contract.md:45,95` | Choice enforced: reject `earned` conservatively in FC1. | FM1 |
| R4 | P1 | FC5 allows "what each client has brought in", implying cash received for a settled-revenue source. | `docs/finance-claim-contract.md:49,90` | Replace with explicit settled-revenue language or narrow row scope. | FM1 |
| R5 | P1 | Hero copy claims "outstanding balances" generically, while product evidence is open-order/instalment debt. | `messages/en/home.json:12`, `docs/finance-claim-contract.md:47` | Scope phrase in visible copy to open orders/instalments. | FM1, FM2 |
| R6 | P1 | Money section says a completed visit is non-revenue "until someone pays", ignoring package redemption settlement. | `messages/en/home.json:45`, `docs/finance-claim-contract.md:46,71-76` | Rewrite section around completed, settled, cash, and open states. | FM1, FM3 |
| R7 | P1 | `HeroShowcase` component renders Calendar first and Finance second. | `components/homepage/hero-showcase.tsx:25-35` | Reorder showcase rotation to render Finance first. | FM4B |
| R8 | P1 | Homepage finance mock calculates cost as percentage of revenue without deterministic product fixture rules. | `components/mock/MockFinanceScreen.tsx:40-60` | Replace invented arithmetic with deterministic fixture mapped to product semantics. | FM4B |
| R9 | P1 | OG feature lines, JSON-LD `featureList`, and `llms.txt` remain Inbox/Booking-first. | `lib/machine-readable.ts:15-30`, `app/[locale]/opengraph-image.tsx:20-40`, `public/llms.txt:10-25` | Align human and machine-readable message order. | FM6 |
| R10 | P1 | Eight non-English translations applied before named human review; literal calques present. | `messages/{de,es,fr,pl,pt,ru,tr,uk}/home.json:10-20` | Mark translations as draft, run named human review per locale, block publication without approval. | FM5 |
| R11 | P2 | `docs/experiment-backlog.md` still names superseded operational-clarity candidate. | `docs/experiment-backlog.md:15-25` | Replace with finance-first experiment record after English freeze. | FM6 |
| R12 | P2 | Product-marketing changelog has duplicate/out-of-order v5/v6 entries and Founding Beta CTA tension. | `.agents/product-marketing.md:233-241`, `docs/finance-claim-contract.md:100` | Normalize changelog and align CTA policy without inventing launch state. | FM2 |
| R13 | P2 | "Financial context without manual entry" is too absolute (expenses/corrections require user action). | `messaging-and-claims.md:33`, `.agents/product-marketing.md:26` | Use "connected to the work" language; ban automation absolutes. | FM2 |

---

## 6. Prerequisite List for FM1

To proceed to **FM1 (Finance truth contract)**, the following prerequisites must be met:

1. **FM0 Gate Passed:** State labels corrected in canonical docs, changed-file inventory complete, no public implementation modified, all technical gates verified clean. *(Met)*
2. **Access to Product Evidence Repository:** Read-only access to `/Users/valery/Sites/beauty-finance` (`apps/api/src/finance/`, `orders/`, `payment-accounts/`, `clients/`, `memberships/`). *(Met)*
3. **Scope Constraint:** Writes in FM1 are strictly constrained to `docs/finance-claim-contract.md`. No public copy, component, or locale changes are permitted during FM1.
