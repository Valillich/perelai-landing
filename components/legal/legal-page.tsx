import { Suspense } from "react"
import { LandingFooter } from "@/components/landing/landing-footer"
import { LandingHeader } from "@/components/landing/landing-header"
import { LegalReturnToApp } from "@/components/legal/return-to-app"
import {
  LEGAL_CONTACT_EMAIL,
  LEGAL_DRAFT_EFFECTIVE_DATE,
  LEGAL_DRAFTS,
  type LegalPageName,
} from "@/content/legal"
import { Link } from "@/i18n/navigation"
import type { PublishedLocale } from "@/i18n/locales"

export function LegalPage({ page, locale, canonicalUrl }: {
  page: LegalPageName
  locale: PublishedLocale
  canonicalUrl: string
}) {
  const content = LEGAL_DRAFTS[page]
  const canonicalPath = `/${page}`

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <LandingHeader locale={locale} canonicalPath={canonicalPath} showNavigation={false} />
      <article className="flex-1 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Suspense fallback={null}>
            <LegalReturnToApp page={page} locale={locale} />
          </Suspense>

          <p className="mt-8 text-[13px] font-semibold uppercase tracking-wide text-brand-600">
            Founding Beta legal draft
          </p>
          <h1 className="mt-3 text-balance text-[38px] font-bold tracking-tight text-foreground sm:text-[50px]">
            {content.title}
          </h1>
          <p className="mt-4 text-[15px] text-muted-foreground">
            Last updated: {LEGAL_DRAFT_EFFECTIVE_DATE}
          </p>

          <aside className="mt-8 rounded-2xl border border-brand-600/25 bg-brand-600/5 p-5 text-[15px] leading-relaxed text-foreground">
            <p>
              <strong>Draft.</strong> These {page === "terms" ? "terms" : "privacy details"} are being
              finalised while Perelai is in Founding Beta. The current version is effective from {LEGAL_DRAFT_EFFECTIVE_DATE}; we will email registered users before any material change.
            </p>
            <p className="mt-3">
              Questions: <a className="font-semibold text-brand-600 hover:text-brand-700" href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>
            </p>
          </aside>

          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            The English version is the legally binding one. Final, dated owner and legal-approved text
            must replace this development and staging draft before public signup traffic is enabled.
          </p>

          <div className="mt-12 space-y-10">
            {content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-[22px] font-semibold tracking-tight text-foreground">{section.heading}</h2>
                <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-14 border-t border-border pt-8">
            <Link href="/" className="text-[15px] font-semibold text-brand-600 transition-colors hover:text-brand-700">
              Back to Perelai →
            </Link>
          </div>
        </div>
      </article>
      <LandingFooter locale={locale} canonicalPath={canonicalPath} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: content.title,
            url: canonicalUrl,
            inLanguage: locale,
          }),
        }}
      />
    </main>
  )
}
