import { describe, expect, test } from "vitest"
import catalog from "@/data/niche-catalog.generated.json"
import {
  RESERVED_SLUGS,
  getEnabledNichePageBySlug,
  getNicheStaticParams,
} from "@/config/niche-pages"
import { PUBLISHED_LOCALES } from "@/i18n/locales"
import { buildAppSignupUrl } from "@/lib/urls"
import { content as englishContent } from "@/content/niches/premium-colorist/en"

describe("the independent colorist niche page", () => {
  test("publishes only the enabled Wave 1a route for every published locale", () => {
    expect(getNicheStaticParams()).toEqual(
      PUBLISHED_LOCALES.map((locale) => ({ locale, nichePage: "for-independent-colorists" })),
    )
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
})
