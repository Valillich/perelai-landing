export const siteConfig = {
  name: "Perelai",
  domain: "perelai.com",
  url: "https://perelai.com",
  title: "Perelai — Simple Finance Software for Service Businesses",
  description:
    "Track revenue, costs and profit for any period, with category and client breakdowns connected to the work behind them.",
  links: {
    app: "https://perelai.app",
    booking: "https://book.perelai.app",
  },
} as const

export type SiteConfig = typeof siteConfig
