import { Suspense } from "react"
import { useTranslations } from "next-intl"
import {
  LegalBackHomeLink,
  LegalChromeProvider,
  LegalMarketingFooter,
  LegalMarketingHeader,
} from "@/components/legal/legal-marketing-chrome"
import { LegalMarkdownRenderer } from "@/components/legal/legal-markdown-renderer"
import { LegalNav, LegalNavFallback } from "@/components/legal/legal-nav"
import { LegalPrintButton } from "@/components/legal/legal-print-button"
import { LegalReturnToApp } from "@/components/legal/return-to-app"
import type { PublishedLocale } from "@/i18n/locales"
import type { LoadedLegalDocument } from "@/lib/legal"

export function LegalDocumentPage({
  document,
  locale,
  canonicalUrl,
}: {
  document: LoadedLegalDocument
  locale: PublishedLocale
  canonicalUrl: string
}) {
  const t = useTranslations("legal")
  const { slug, frontMatter, interpolatedMarkdown } = document
  const isDraft = frontMatter.status === "draft"
  const canonicalPath = `/legal/${slug}`

  return (
    <LegalChromeProvider>
      <main className="flex min-h-screen flex-col bg-background text-foreground print:bg-white print:text-black">
        <LegalMarketingHeader locale={locale} canonicalPath={canonicalPath} />

        <article className="flex-1 px-4 py-10 sm:px-6 sm:py-16 print:p-0 print:py-4">
          <div className="mx-auto max-w-4xl print:max-w-none">
            <div className="print:hidden">
              <Suspense fallback={null}>
                <LegalReturnToApp page={slug} locale={locale} version={frontMatter.version} />
              </Suspense>
              <Suspense fallback={<LegalNavFallback currentSlug={slug} />}>
                <LegalNav currentSlug={slug} />
              </Suspense>
            </div>

          {/* DRAFT PREVIEW BANNER */}
          {isDraft && (
            <aside
              role="alert"
              className="my-6 rounded-2xl border-2 border-amber-500/40 bg-amber-500/10 p-5 text-foreground print:hidden"
            >
              <div className="flex items-center gap-2 text-[14px] font-bold tracking-wide uppercase text-amber-700 dark:text-amber-400">
                <span aria-hidden="true">⚠️</span>
                <span>DRAFT — NOT FOR PRODUCTION OR RELIANCE</span>
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                This is an unapproved working draft. Counsel and the business owner must resolve every{" "}
                <code className="rounded bg-muted px-1 py-0.5 font-mono text-[13px]">[TBD]</code> marker,
                verify facts and jurisdiction enforceability, and record approval in the immutable manifest before
                production publication.
              </p>
              <p className="mt-2 text-[13px] text-muted-foreground">
                Notice: Draft documents are strictly excluded from production search indexing (<code>noindex</code>).
              </p>
            </aside>
          )}

          {/* Document Header & Versioning Details */}
          <header className="border-b border-border pb-6 pt-2 print:border-b-2 print:border-black">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-brand-600 print:text-black">
              Legal Centre · {frontMatter.document}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-muted-foreground print:text-black">
              <div>
                <strong className="font-semibold text-foreground print:text-black">Version:</strong>{" "}
                <span className="font-mono">{frontMatter.version}</span>
              </div>
              <div>
                <strong className="font-semibold text-foreground print:text-black">Effective:</strong>{" "}
                <span>{frontMatter.effectiveDate}</span>
              </div>
              {frontMatter.lastReviewedDate && (
                <div>
                  <strong className="font-semibold text-foreground print:text-black">Last reviewed:</strong>{" "}
                  <span>{frontMatter.lastReviewedDate}</span>
                </div>
              )}
              <div>
                <strong className="font-semibold text-foreground print:text-black">Status:</strong>{" "}
                <span className="uppercase font-semibold text-brand-600 print:text-black">
                  {frontMatter.status}
                </span>
              </div>
            </div>

            {/* Archive link */}
            <div className="mt-3 text-[13px] text-muted-foreground print:hidden">
              <span>Prior versions: </span>
              <span className="text-subtle-text">
                Prior immutable versions are archived and available on request from legal@perelai.app.
              </span>
            </div>
          </header>

          {/* Canonical Language Notice for non-English locales */}
          {locale !== "en" && (
            <div className="my-6 rounded-xl border border-border bg-muted/30 p-4 text-[14px] text-muted-foreground print:hidden">
              <p>
                <strong>Notice:</strong> The English text below is the authoritative legal source draft.
                Reviewed translations for other languages will be published as they are approved by counsel.
              </p>
            </div>
          )}

          {/* Rendered Prose */}
          <div className="mt-8 prose prose-slate max-w-none dark:prose-invert print:prose-neutral" lang="en">
            <LegalMarkdownRenderer content={interpolatedMarkdown} />
          </div>

          {/* Return Home Footer Navigation */}
          <div className="mt-14 flex items-center justify-between border-t border-border pt-8 print:hidden">
            <LegalBackHomeLink label={t("backHome")} />
            <LegalPrintButton />
          </div>
        </div>
      </article>

      <LegalMarketingFooter locale={locale} canonicalPath={canonicalPath} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `${frontMatter.document} — Perelai`,
            url: canonicalUrl,
            inLanguage: locale,
          }),
        }}
      />
    </main>
  </LegalChromeProvider>
)
}
