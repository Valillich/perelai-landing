import type { PublishedLocale } from "@/i18n/locales"
import { toAbsoluteLandingUrl } from "@/lib/seo"

type JsonLdNode = Record<string, unknown>

const ORGANIZATION_ID = `${toAbsoluteLandingUrl("/")}#organization`
const WEBSITE_ID = `${toAbsoluteLandingUrl("/")}#website`

export function toJsonLdDocument(nodes: JsonLdNode[]): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  }
}

export function getOrganizationJsonLd(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Perelai",
    url: toAbsoluteLandingUrl("/"),
    logo: toAbsoluteLandingUrl("/brand/perelai-icon-512.png"),
  }
}

export function getWebSiteJsonLd(locale: PublishedLocale): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "Perelai",
    url: toAbsoluteLandingUrl("/"),
    inLanguage: locale,
    publisher: { "@id": ORGANIZATION_ID },
  }
}

export function getSoftwareApplicationJsonLd({
  locale,
  url,
  description,
  featureList,
}: {
  locale: PublishedLocale
  url: string
  description: string
  featureList?: string[]
}): JsonLdNode {
  const node: JsonLdNode = {
    "@type": "SoftwareApplication",
    name: "Perelai",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url,
    inLanguage: locale,
    description,
  }

  if (featureList && featureList.length > 0) {
    node.featureList = featureList
  }

  return node
}

export function getBreadcrumbListJsonLd(
  items: Array<{ name: string; url: string }>,
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
