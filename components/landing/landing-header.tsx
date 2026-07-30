import Image from "next/image"
import { useTranslations } from "next-intl"
import { CtaButton } from "@/components/cta-button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { MobileNav, type MobileNavItem } from "@/components/landing/mobile-nav"
import { Link } from "@/i18n/navigation"
import { localizePath } from "@/i18n/paths"
import type { PublishedLocale } from "@/i18n/locales"
import { cn } from "@/lib/cn"
import { ThemeToggle } from "../theme-toggle"

const navLinkClass = "relative text-[14px] font-medium transition-colors"
const activeNavLinkClass =
  "text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-brand-600"
const inactiveNavLinkClass = "text-muted-foreground hover:text-foreground"

export function LandingHeader({
  locale,
  canonicalPath = "/",
  niche,
  sectionAnchors = false,
}: {
  locale: PublishedLocale
  canonicalPath?: string
  niche?: string
  /** True on pages that render their own `#features` / `#how` sections. */
  sectionAnchors?: boolean
}) {
  const t = useTranslations("home.nav")

  // Pages without those sections still need reachable nav, so their anchors
  // resolve against the homepage in the reader's own locale.
  const homePath = localizePath(locale, "/")
  const sectionHref = (id: string) =>
    sectionAnchors ? `#${id}` : `${homePath === "/" ? "/" : homePath}#${id}`

  const isPricing = canonicalPath === "/pricing"

  // One list for both breakpoints, so the two navs cannot drift apart.
  const navItems: MobileNavItem[] = [
    { href: sectionHref("features"), label: t("features") },
    { href: sectionHref("how"), label: t("how") },
    { href: localizePath(locale, "/pricing"), label: t("pricing"), current: isPricing },
  ]

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-3 flex items-center justify-between gap-3 rounded-full border border-border bg-background/70 px-4 py-2.5 shadow-[0_6px_20px_rgba(16,24,40,0.06)] backdrop-blur-xl sm:px-5">
          {/* Logo — never compresses, or a long localized CTA overlaps the wordmark. */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
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
          <nav aria-label={t("primaryLabel")} className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={cn(navLinkClass, item.current ? activeNavLinkClass : inactiveNavLinkClass)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* The header pill has no spare width below `md`, so these two move
                into the menu panel rather than being dropped. */}
            <div className="hidden items-center gap-2 md:flex">
              <ThemeToggle />
              <LanguageSwitcher locale={locale} canonicalPath={canonicalPath} />
            </div>
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
              {t("start_short")}
            </CtaButton>
            <MobileNav
              triggerLabel={t("menuLabel")}
              navLabel={t("primaryLabel")}
              items={navItems}
            >
              <ThemeToggle />
              <LanguageSwitcher locale={locale} canonicalPath={canonicalPath} variant="inline" />
            </MobileNav>
          </div>
        </div>
      </div>
    </header>
  )
}
