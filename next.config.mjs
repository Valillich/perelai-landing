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

    return prefixes.flatMap((prefix) =>
      aliases.map((alias) => ({
        source: `${prefix}/${alias}`,
        destination: `${prefix}/for-independent-colorists`,
        permanent: true,
      })),
    )
  },
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
