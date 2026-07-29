import type { Metadata } from "next"
import { LandingHeader } from "@/components/landing/landing-header"
import { LandingHero } from "@/components/landing/landing-hero"
import { LandingFeatures } from "@/components/landing/landing-features"
import { LandingHowItWorks } from "@/components/landing/landing-how-it-works"
import { LandingCta } from "@/components/landing/landing-cta"
import { LandingFooter } from "@/components/landing/landing-footer"

export const metadata: Metadata = {
  title: "Perelai — Booking & personal CFO for service pros",
  description:
    "The frictionless booking engine and personal CFO for premium service professionals. Stop renting your clients. Own your business.",
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#FBFCFE] text-[#0F1724]">
      <LandingHeader />
      <LandingHero />
      <LandingFeatures />
      <LandingHowItWorks />
      <LandingCta />
      <LandingFooter />
    </main>
  )
}
