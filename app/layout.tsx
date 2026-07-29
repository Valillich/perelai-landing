import type { ReactNode } from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Perelai — Booking & personal CFO for service pros",
  description:
    "The frictionless booking engine and personal CFO for premium service professionals. Stop renting your clients. Own your business.",
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
