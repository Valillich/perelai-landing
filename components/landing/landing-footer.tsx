import Image from "next/image"
import { useTranslations } from "next-intl"
import { InstallHelpLink } from "@/components/devices/install-help-link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Link } from "@/i18n/navigation"
import type { PublishedLocale } from "@/i18n/locales"
import { getEnabledNichePagesForLocale } from "@/config/niche-pages"
import { labelledNichePages } from "@/lib/niche-labels"
import { getPricingContactEmail } from "@/lib/pricing-contact"

export function LandingFooter({
  locale,
  canonicalPath = "/",
}: {
  locale: PublishedLocale
  canonicalPath?: string
}) {
  const t = useTranslations("home.footer")
  // Same reviewed label the header uses, so the two entry points match.
  const tDevices = useTranslations("devices.nav")
  const tNiches = useTranslations("home")
  const tFaq = useTranslations("home.faq")
  const nichePages = labelledNichePages(getEnabledNichePagesForLocale(locale))
  const contactEmail = getPricingContactEmail()

  return (
    <footer className="border-t border-border px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
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
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted-foreground">
              {t("description")}
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-wide text-foreground">{t("product")}</h4>
            <ul className="mt-4 space-y-3">
              {nichePages.map(({ page, keys }) => (
                <li key={page.niche}>
                  <Link
                    href={page.path}
                    className="text-[14px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {tNiches(keys.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-wide text-foreground">{t("help")}</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/#faq" className="text-[14px] text-muted-foreground transition-colors hover:text-foreground">
                  {tFaq("title")}
                </Link>
              </li>
              {/* Reachable from every public route, so `/install` is never an
                  orphan even for visitors who arrive deep in the site. */}
              <li>
                <InstallHelpLink
                  href="/install"
                  sourceSurface="footer"
                  isCurrent={canonicalPath === "/install"}
                  className="text-[14px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {tDevices("label")}
                </InstallHelpLink>
              </li>
              <li>
                <a href={`mailto:${contactEmail}`} className="text-[14px] text-muted-foreground transition-colors hover:text-foreground">
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-[13px] text-subtle-text">© {new Date().getFullYear()} Perelai. {t("rights")}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
            <Link href="/legal/privacy" className="text-[13px] text-subtle-text transition-colors hover:text-foreground">
              {t("privacy")}
            </Link>
            <Link href="/legal/terms" className="text-[13px] text-subtle-text transition-colors hover:text-foreground">
              {t("terms")}
            </Link>
            <Link href="/legal/billing" className="text-[13px] font-medium text-brand-600 transition-colors hover:text-brand-700">
              {t("refund")}
            </Link>
            <Link href="/legal/cookies" className="text-[13px] text-subtle-text transition-colors hover:text-foreground">
              {t("cookies")}
            </Link>
            <LanguageSwitcher locale={locale} canonicalPath={canonicalPath} />
          </div>
        </div>
      </div>
    </footer>
  )
}
