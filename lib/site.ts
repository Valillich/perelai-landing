export const siteConfig = {
  name: "Perelai",
  domain: "perelai.com",
  url: "https://perelai.com",
  title: "Perelai — Simple Finance Software for Service Businesses",
  description:
    "Track income, expenses, payments and balances, with financial analytics connected to your clients, services and completed work.",
  links: {
    app: "https://perelai.app",
    booking: "https://book.perelai.app",
  },
} as const

export type SiteConfig = typeof siteConfig
