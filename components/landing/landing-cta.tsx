"use client"

import Link from "next/link"
import { Reveal } from "./reveal"
import { ArrowRight } from "lucide-react"

export function LandingCta() {
  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[32px] border border-[#F1F3F5] bg-white px-6 py-16 text-center shadow-[0_20px_60px_-20px_rgba(106,76,255,0.3)] sm:px-12 sm:py-20">
          {/* Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[360px] w-[600px] -translate-x-1/2 rounded-full opacity-60 blur-[100px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(106,76,255,0.25) 0%, rgba(236,72,153,0.12) 50%, transparent 75%)",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-[32px] font-bold leading-tight tracking-tight text-[#0F1724] sm:text-[46px]">
              Ready to take control of your revenue?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-[17px] leading-relaxed text-[#4B5563]">
              Join the service professionals who own their clients, their bookings, and their bottom line.
            </p>
            <div className="mt-9 flex justify-center">
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#7d5bff] to-[#5a3bff] px-7 py-4 text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(106,76,255,0.36)] transition-transform hover:scale-[1.03] active:scale-95"
              >
                Get Started Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <p className="mt-5 text-[13px] text-[#9CA3AF]">No credit card required · 14-day free trial</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
