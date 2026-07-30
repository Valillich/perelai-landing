export const siteConfig = {
  name: "Perelai",
  domain: "perelai.com",
  url: "https://perelai.com",
  title: "Perelai — Clients, Bookings & Cash Flow for Independent Professionals",
  description:
    "Your clients, bookings and cash flow — finally in one place. Booking + client + money software for independent service professionals.",
  links: {
    app: "https://perelai.app",
    booking: "https://book.perelai.app",
  },
} as const

export type SiteConfig = typeof siteConfig
