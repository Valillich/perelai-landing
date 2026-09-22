import createNextIntlPlugin from "next-intl/plugin"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  trailingSlash: false,
  // Static routes must not gain a random Next build identifier: DVC7 compares
  // the emitted `/install` HTML across consecutive production builds.
  generateBuildId: async () => "perelai-landing-static",
  async redirects() {
    const aliases = ["for-hair-colorists", "for-colorists"]
    // English is the unprefixed "" route.
    const prefixes = ["", "/uk", "/pl", "/ru", "/es", "/fr", "/de", "/pt", "/tr"]

    const nicheRedirects = prefixes.flatMap((prefix) =>
      aliases.map((alias) => ({
        source: `${prefix}/${alias}`,
        destination: `${prefix}/for-independent-colorists`,
        permanent: true,
      })),
    )

    // Legal compatibility aliases per 00_README_execution_plan.md §1
    const legalRedirectMappings = [
      { source: "terms", destination: "legal/terms" },
      { source: "privacy", destination: "legal/privacy" },
      { source: "refund-policy", destination: "legal/billing" },
      { source: "legal/refund-policy", destination: "legal/billing" },
    ]

    const legalRedirects = prefixes.flatMap((prefix) =>
      legalRedirectMappings.map((mapping) => ({
        source: `${prefix}/${mapping.source}`,
        destination: `${prefix}/${mapping.destination}`,
        permanent: true,
      })),
    )

    return [...nicheRedirects, ...legalRedirects]
  },
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
