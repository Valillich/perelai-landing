import type { ReactNode } from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Perelai — Clients, Bookings & Cash Flow for Independent Professionals",
  description:
    "Your clients, bookings and cash flow — finally in one place. Booking + client + money software for independent service professionals.",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
