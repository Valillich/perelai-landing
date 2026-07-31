import { CtaButton } from "@/components/cta-button"
import { CtaCard } from "@/components/cta-card"
import { LandingFooter } from "@/components/landing/landing-footer"
import { LandingHeader } from "@/components/landing/landing-header"
import {
  MockCalendarMonth,
  MockFinanceKpis,
  MockInboxTriage,
} from "@/components/mock"
import type { NichePageContent } from "@/content/niches/types"
import type { NichePage } from "@/config/niche-pages"
import type { PublishedLocale } from "@/i18n/locales"
import { Link } from "@/i18n/navigation"
import { buildAppScreenDataset } from "@/lib/app-screen-mock"
import { buildMockDataset } from "@/lib/mock-data"
import { localePrimaryMarket } from "@/lib/market"
import { PageViewTracker } from "@/components/analytics/page-view-tracker"
import { NicheFaq } from "./niche-faq"

interface NichePageProps {
  locale: PublishedLocale
  page: NichePage
  content: NichePageContent
}

function NicheMockSuite({ locale, page }: Pick<NichePageProps, "locale" | "page">) {
  const market = localePrimaryMarket(locale)
  const dataset = buildMockDataset(page.templateId, locale, market, "2026-07-15T12:00:00.000Z")
  // The calendar mock renders the real app grid, which needs a full month
  // rather than the two-week strip the shared niche dataset carries.
  const screenDataset = buildAppScreenDataset(page.templateId, locale, market)

  // Calendar slightly wider than inbox: seven day columns need the room;
  // inbox cards read fine in a narrower column. Below `lg` everything stacks.
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <MockCalendarMonth dataset={screenDataset} />
      <MockInboxTriage dataset={dataset} />
      <MockFinanceKpis dataset={screenDataset} className="lg:col-span-2" />
    </div>
  )
}

export function NichePage({ locale, page, content }: NichePageProps) {
  const canonicalPath = page.path

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageViewTracker
        landingPath={canonicalPath}
        locale={locale}
        pageType="niche"
        niche={page.niche}
        templateId={page.templateId}
        wave={page.wave}
      />
      <LandingHeader
        locale={locale}
        canonicalPath={canonicalPath}
        niche={page.niche}
        sectionAnchors
      />

      <section className="px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-[13px] text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-foreground">
                  Perelai
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="font-medium text-foreground">
                {content.hero.eyebrow}
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4">
            <div>
              <p className="text-[13px] font-semibold text-brand-600">{content.hero.eyebrow}</p>
              <h1 className="mt-4 max-w-xl text-balance text-[42px] font-bold leading-[1.05] tracking-tight text-foreground sm:text-[48px]">
                {content.hero.h1}
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-[18px] leading-relaxed text-muted-foreground">
                {content.hero.subhead}
              </p>
              <CtaButton
                destination="signup"
                niche={page.niche}
                landingPath={canonicalPath}
                locale={locale}
                location="niche_hero"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(106,76,255,0.28)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {content.cta.label}
              </CtaButton>
            </div>
            <NicheMockSuite locale={locale} page={page} />
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-border bg-card-subtle px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-2xl text-balance text-[32px] font-bold leading-tight tracking-tight text-foreground sm:text-[42px]">
            {content.pains[0]?.title}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {content.pains.map((pain) => (
              <article
                key={pain.title}
                className="rounded-[20px] border border-border bg-background p-6"
              >
                <h3 className="text-[20px] font-semibold tracking-tight text-foreground">{pain.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">{pain.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-balance text-[32px] font-bold leading-tight tracking-tight text-foreground sm:text-[42px]">
              {content.dayInLife.title}
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">{content.dayInLife.body}</p>
          </div>
          <ol className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
            {content.dayInLife.steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[auto_1fr] gap-4">
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600/10 text-[13px] font-semibold text-brand-600">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-[20px] font-semibold tracking-tight text-foreground">{step.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-card-subtle px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-2xl text-balance text-[32px] font-bold leading-tight tracking-tight text-foreground sm:text-[42px]">
            {content.labels.terminologyTitle}
          </h2>
          <div className="mt-10 overflow-x-auto rounded-[20px] border border-border bg-card">
            <table className="w-full min-w-[680px] text-left">
              <thead className="bg-card-subtle text-[13px] font-semibold text-muted-foreground">
                <tr>
                  <th className="px-5 py-4">{content.labels.inYourChair}</th>
                  <th className="px-5 py-4">{content.labels.inPerelai}</th>
                  <th className="px-5 py-4">{content.labels.whyItMatters}</th>
                </tr>
              </thead>
              <tbody>
                {content.terminology.map((row) => (
                  <tr key={row.theirWord} className="border-t border-border align-top">
                    <td className="px-5 py-4 text-[15px] leading-relaxed text-foreground">{row.theirWord}</td>
                    <td className="px-5 py-4 text-[15px] font-semibold leading-relaxed text-brand-600">{row.perelaiWord}</td>
                    <td className="px-5 py-4 text-[15px] leading-relaxed text-muted-foreground">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card-subtle px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <h2 className="text-balance text-[32px] font-bold leading-tight tracking-tight text-foreground sm:text-[42px]">
              {content.setup.title}
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">{content.setup.body}</p>
          </div>
          <div className="space-y-8">
            {content.setup.steps.map((step) => (
              <div key={step.title}>
                <h3 className="text-[20px] font-semibold tracking-tight text-foreground">{step.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-balance text-[32px] font-bold leading-tight tracking-tight text-foreground sm:text-[42px]">
              {content.whatItIsNot.title}
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">{content.whatItIsNot.body}</p>
          </div>
          <div className="grid gap-4">
            {content.whatItIsNot.items.map((item) => (
              <article key={item.title} className="rounded-[20px] border border-border bg-card p-6">
                <h3 className="text-[19px] font-semibold tracking-tight text-foreground">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card-subtle px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <NicheFaq title={content.labels.faqTitle} items={content.faq} />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <CtaCard
          locale={locale}
          landingPath={canonicalPath}
          niche={page.niche}
          location="niche_final_cta"
          title={content.cta.title}
          body={content.cta.body}
          buttonLabel={content.cta.label}
          microcopy={content.cta.microcopy}
        />
      </section>

      <LandingFooter locale={locale} canonicalPath={canonicalPath} />
    </main>
  )
}
