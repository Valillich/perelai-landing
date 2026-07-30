import Image from "next/image"
import { useTranslations } from "next-intl"
import { CtaButton } from "@/components/cta-button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Link } from "@/i18n/navigation"
import type { PublishedLocale } from "@/i18n/locales"
import { ThemeToggle } from "../theme-toggle"

export function LandingHeader({
  locale,
  canonicalPath = "/",
  niche,
  showNavigation = true,
}: {
  locale: PublishedLocale
  canonicalPath?: string
  niche?: string
  showNavigation?: boolean
}) {
  const t = useTranslations("home.nav")

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-3 flex items-center justify-between rounded-full border border-border bg-background/70 px-4 py-2.5 shadow-[0_6px_20px_rgba(16,24,40,0.06)] backdrop-blur-xl sm:px-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/brand/perelai-mark-64.png"
              alt="Perelai"
              width={32}
              height={32}
              className="h-8 w-8 rounded-xl shadow-[0_4px_12px_rgba(106,76,255,0.32)]"
            />
            <span className="text-[17px] font-semibold tracking-tight text-foreground">Perelai</span>
          </Link>

          {/* Nav links */}
          {showNavigation ? (
            <nav className="hidden items-center gap-8 md:flex">
              <a href="#features" className="text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground">
                {t("features")}
              </a>
              <a href="#how" className="text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground">
                {t("how")}
              </a>
              <Link href="/pricing" className="text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground">
                {t("pricing")}
              </Link>
            </nav>
          ) : (
            <div className="hidden md:block" aria-hidden />
          )}

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher locale={locale} canonicalPath={canonicalPath} />
            <CtaButton
              destination="login"
              location="header_login"
              className="hidden rounded-full px-4 py-2 text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              {t("login")}
            </CtaButton>
            <CtaButton
              destination="signup"
              niche={niche}
              landingPath={canonicalPath}
              locale={locale}
              location="header_signup"
              className="inline-flex items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 px-4 py-2 text-[14px] font-semibold text-white shadow-[0_4px_14px_rgba(106,76,255,0.32)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              {t("start")}
            </CtaButton>
          </div>
        </div>
      </div>
    </header>
  )
}
