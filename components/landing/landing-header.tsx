"use client"

import Image from "next/image"
import { MonitorSmartphone } from "lucide-react"
import { useTranslations } from "next-intl"
import { CtaButton } from "@/components/cta-button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { MobileNav, type MobileNavItem } from "@/components/landing/mobile-nav"
import { NicheMenu, type NicheMenuItem } from "@/components/landing/niche-menu"
import { getEnabledNichePages } from "@/config/niche-pages"
import { Link } from "@/i18n/navigation"
import { localizePath } from "@/i18n/paths"
import type { PublishedLocale } from "@/i18n/locales"
import { analytics } from "@/lib/analytics"
import { cn } from "@/lib/cn"
import { labelledNichePages } from "@/lib/niche-labels"
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
  const tNiche = useTranslations("home")
  // Reuses the reviewed `/install` label from the devices namespace instead of
  // duplicating it under `home.nav`, so the two can never disagree.
  const tDevices = useTranslations("devices.nav")

  // Pages without those sections still need reachable nav, so their anchors
  // resolve against the homepage in the reader's own locale.
  const homePath = localizePath(locale, "/")
  const sectionHref = (id: string) =>
    sectionAnchors ? `#${id}` : `${homePath === "/" ? "/" : homePath}#${id}`

  const isPricing = canonicalPath === "/pricing"
  const isInstall = canonicalPath === "/install"

  // One list for both breakpoints, so the two navs cannot drift apart.
  // Five entries with the niche menu — inside the 4–7 primary-nav budget.
  // `/install` sits last: it answers a support question, so it ranks below
  // the pages a visitor uses to decide whether the product fits at all.
  const navItems: MobileNavItem[] = [
    { href: sectionHref("features"), label: t("features") },
    { href: sectionHref("how"), label: t("how") },
    { href: localizePath(locale, "/pricing"), label: t("pricing"), current: isPricing },
    { href: localizePath(locale, "/install"), label: tDevices("label"), current: isInstall },
  ]

  const nicheItems: NicheMenuItem[] = labelledNichePages(getEnabledNichePages()).map(
    ({ page, keys }) => ({
      href: localizePath(locale, page.path),
      label: tNiche(keys.label),
      description: tNiche(keys.description),
      current: canonicalPath === page.path,
    }),
  )
  const nicheMenuLabel = tNiche("nicheRouter.title")

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

          {/* Nav links. The niche menu leads: self-identification is the first
              decision a visitor makes, and it is what the niche pages sell. */}
          <nav aria-label={t("primaryLabel")} className="hidden items-center gap-6 lg:flex">
            {nicheItems.length > 0 ? (
              <NicheMenu triggerLabel={nicheMenuLabel} items={nicheItems} />
            ) : null}
            {navItems.map((item) => {
              const isInstallLink = item.href.includes("/install")
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  aria-label={isInstallLink ? item.label : undefined}
                  onClick={() => {
                    if (!item.current && isInstallLink) {
                      analytics.track({
                        name: "install_help_clicked",
                        properties: { source_surface: "header" },
                      })
                    }
                  }}
                  className={cn(
                    navLinkClass,
                    item.current ? activeNavLinkClass : inactiveNavLinkClass,
                    isInstallLink && "inline-flex items-center",
                  )}
                >
                  {isInstallLink ? (
                    <MonitorSmartphone className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  ) : (
                    item.label
                  )}
                </a>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* The header pill has no spare width below `lg`, so these two move
                into the menu panel rather than being dropped. */}
            <div className="hidden items-center gap-2 lg:flex">
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
              group={
                nicheItems.length > 0
                  ? { label: nicheMenuLabel, items: nicheItems }
                  : undefined
              }
            >
              <ThemeToggle />
              <LanguageSwitcher locale={locale} canonicalPath={canonicalPath} />
            </MobileNav>
          </div>
        </div>
      </div>
    </header>
  )
}
