export const siteConfig = {
  name: "Perelai",
  domain: "perelai.com",
  url: "https://perelai.com",
  title: "Perelai — Appointments, Clients & Payment Tracking",
  description:
    "Appointments, client history, payment records and prepaid service packages for independent professionals and small teams.",
  links: {
    app: "https://perelai.app",
    booking: "https://book.perelai.app",
  },
} as const

export type SiteConfig = typeof siteConfig
