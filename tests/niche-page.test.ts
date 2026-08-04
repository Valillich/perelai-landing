import { describe, expect, test } from "vitest"
import catalog from "@/data/niche-catalog.generated.json"
import {
  NICHE_PAGES,
  RESERVED_SLUGS,
  getEnabledNichePageBySlug,
  getNichePageLocales,
  getNicheStaticParams,
} from "@/config/niche-pages"
import { PUBLISHED_LOCALES } from "@/i18n/locales"
import { getLocalizedAlternates } from "@/i18n/paths"
import { getNicheContent } from "@/content/niches"
import { nicheLabelKeys } from "@/lib/niche-labels"
import { buildAppSignupUrl } from "@/lib/urls"
import de from "@/messages/de/home.json"
import en from "@/messages/en/home.json"
import es from "@/messages/es/home.json"
import fr from "@/messages/fr/home.json"
import pl from "@/messages/pl/home.json"
import pt from "@/messages/pt/home.json"
import ru from "@/messages/ru/home.json"
import tr from "@/messages/tr/home.json"
import uk from "@/messages/uk/home.json"

const homeMessages = { de, en, es, fr, pl, pt, ru, tr, uk }
import { content as englishContent } from "@/content/niches/premium-colorist/en"
import { content as lashEnglishContent } from "@/content/niches/lash-artist/en"

describe("the published niche pages", () => {
  test("publishes the fully translated Wave 1a and Wave 1b routes for every published locale", () => {
    expect(getNicheStaticParams()).toEqual(
      [
        "for-independent-colorists",
        "for-lash-artists",
        "for-massage-therapists",
        "for-salons",
        "for-personal-trainers",
        "for-music-teachers",
      ].flatMap((nichePage) => PUBLISHED_LOCALES.map((locale) => ({ locale, nichePage }))),
    )
  })

  test("publishes reciprocal hreflang clusters for every enabled niche page", () => {
    for (const path of [
      "/for-lash-artists",
      "/for-salons",
      "/for-massage-therapists",
      "/for-personal-trainers",
      "/for-music-teachers",
    ]) {
      expect(Object.keys(getLocalizedAlternates(path, "en")).sort()).toEqual(
        [...PUBLISHED_LOCALES, "x-default"].sort(),
      )
    }
  })

  test("every locale a page declares has a content module and its router label keys", () => {
    for (const page of NICHE_PAGES.filter((candidate) => candidate.enabled)) {
      for (const locale of getNichePageLocales(page)) {
        expect(() => getNicheContent(page, locale)).not.toThrow()

        const keys = nicheLabelKeys(page)
        if (!keys) continue
        const messages = homeMessages[locale] as unknown as Record<
          string,
          Record<string, unknown>
        >
        for (const key of [keys.label, keys.description]) {
          const [namespace, name] = key.split(".")
          expect(
            messages[namespace]?.[name],
            `${page.niche}: missing ${key} in messages/${locale}/home.json`,
          ).toBeTruthy()
        }
      }
    }
  })

  test("keeps application and locale routes out of the niche-page namespace", () => {
    expect(RESERVED_SLUGS).toEqual(
      expect.arrayContaining(["pricing", "privacy", "sitemap.xml", "en", "uk", "pl"]),
    )
    expect(getEnabledNichePageBySlug("pricing")).toBeUndefined()
    expect(getEnabledNichePageBySlug("for-independent-colorists")?.niche).toBe("premium-colorist")
  })

  test("uses actual independent-colorist service, add-on and expense vocabulary", () => {
    const template = catalog.templates.find((item) => item.id === "independent_colorist")
    expect(template?.services.map((item) => item.nameKey)).toContain(
      "templates.independent_colorist.services.ic2",
    )
    expect(template?.addons.map((item) => item.nameKey)).toContain(
      "templates.independent_colorist.addons.ic_add_bond",
    )
    expect(template?.expenses.map((item) => item.nameKey)).toContain(
      "templates.independent_colorist.expenses.ice1",
    )
    const coloristWords = englishContent.terminology.map((row) => row.theirWord).join(" ")
    expect(coloristWords.indexOf("Root Color")).toBeLessThan(coloristWords.indexOf("Bond Treatment"))
    expect(coloristWords.indexOf("Bond Treatment")).toBeLessThan(coloristWords.indexOf("Color Product"))
  })

  test("hands the app the colorist niche and the English canonical landing path", () => {
    const url = new URL(
      buildAppSignupUrl({
        niche: getEnabledNichePageBySlug("for-independent-colorists")?.niche,
        landingPath: "/for-independent-colorists",
        locale: "uk",
      }),
    )

    expect(url.pathname).toBe("/register")
    expect(url.searchParams.get("niche")).toBe("premium-colorist")
    expect(url.searchParams.get("landing_path")).toBe("/for-independent-colorists")
    expect(url.searchParams.get("lng")).toBe("uk")
  })

  test("uses the lash artist template vocabulary and hands off the approved lash slug", () => {
    const template = catalog.templates.find((item) => item.id === "brow_lash_artist")
    expect(template?.bookingConfig.requiresStaff).toBe(false)
    expect(template?.services.map((item) => item.nameKey)).toEqual(
      expect.arrayContaining([
        "templates.brow_lash_artist.services.bl5",
        "templates.brow_lash_artist.services.bl6",
      ]),
    )
    expect(template?.addons.map((item) => item.nameKey)).toContain(
      "templates.brow_lash_artist.addons.bl_add_tint",
    )
    expect(template?.expenses.map((item) => item.nameKey)).toContain(
      "templates.brow_lash_artist.expenses.ble1",
    )

    expect(lashEnglishContent.setup.steps).toHaveLength(3)
    expect(lashEnglishContent.terminology.map((row) => row.theirWord).join(" ")).toContain(
      "Lash Extensions",
    )
    expect(lashEnglishContent.terminology.map((row) => row.theirWord).join(" ")).toContain(
      "Supplies & Adhesive",
    )

    const url = new URL(
      buildAppSignupUrl({
        niche: getEnabledNichePageBySlug("for-lash-artists")?.niche,
        landingPath: "/for-lash-artists",
        locale: "pl",
      }),
    )

    expect(url.pathname).toBe("/register")
    expect(url.searchParams.get("niche")).toBe("lash-artist")
    expect(url.searchParams.get("landing_path")).toBe("/for-lash-artists")
    expect(url.searchParams.get("lng")).toBe("pl")
  })
})
