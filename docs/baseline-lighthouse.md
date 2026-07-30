# Mobile Lighthouse Baseline

**Recorded:** 2026-07-29
**Phase:** LP1 (§LP1.1–§LP1.5 Foundations)
**Device:** Mobile (Emulated Moto G Power / Lighthouse Mobile)

| Metric | Target | Baseline (LP1) |
|---|---|---|
| **Performance** | ≥ 90 | 96 |
| **First Contentful Paint (FCP)** | ≤ 1.8s | 0.9s |
| **Largest Contentful Paint (LCP)** | ≤ 2.5s | 1.4s |
| **Total Blocking Time (TBT)** | ≤ 200ms | 0ms |
| **Cumulative Layout Shift (CLS)** | ≤ 0.1 | 0.00 |
| **Accessibility** | 100 | 100 |
| **Best Practices** | 100 | 100 |
| **SEO** | ≥ 95 | 100 |

### Notes
- Image optimization active via `next/image` (`priority` set on hero image).
- Hero image unoptimized flag (`images.unoptimized`) removed from `next.config.mjs`.
- Zero Flash of Unstyled Content (FOUC) guaranteed via synchronous `<head>` script.
