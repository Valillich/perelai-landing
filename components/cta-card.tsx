import { ArrowRight } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { Reveal } from "@/components/landing/reveal"
import type { CtaPosition } from "@/lib/analytics"
import { cn } from "@/lib/cn"
import type { PublishedLocale } from "@/i18n/locales"

interface CtaCardProps {
  locale: PublishedLocale
  /** English canonical path of the page the card sits on. */
  landingPath: string
  location: CtaPosition
  title: string
  body: string
  buttonLabel: string
  microcopy: string
  /** Only niche pages carry an acquisition slug. */
  niche?: string
  className?: string
}

/**
 * The single closing-CTA block. Every page that ends in "create a workspace"
 * renders this one component, so the card and its button cannot drift apart
 * per page the way the homepage and pricing copies did.
 */
export function CtaCard({
  locale,
  landingPath,
  location,
  title,
  body,
  buttonLabel,
  microcopy,
  niche,
  className,
}: CtaCardProps) {
  return (
    <Reveal className={cn("mx-auto max-w-3xl", className)}>
      <div className="relative overflow-hidden rounded-[24px] border border-brand-600/15 bg-brand-600/5 p-8 text-center sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-600/5 to-transparent"
        />
        <div className="relative mx-auto max-w-2xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-balance text-[28px] font-bold leading-tight tracking-tight text-foreground sm:text-[38px]">
              {title}
            </h2>
            <p className="text-pretty text-[17px] leading-relaxed text-muted-foreground">{body}</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <CtaButton
              destination="signup"
              niche={niche}
              landingPath={landingPath}
              locale={locale}
              location={location}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 px-7 py-4 text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(106,76,255,0.32)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              {buttonLabel}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </CtaButton>
            <p className="text-[13px] text-subtle-text">{microcopy}</p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
