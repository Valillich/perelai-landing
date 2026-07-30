import createNextIntlPlugin from "next-intl/plugin"

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const aliases = ["for-hair-colorists", "for-colorists"]
    const prefixes = ["", "/uk", "/pl"]

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
