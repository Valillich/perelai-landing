"use client"

import { Reveal } from "./reveal"
import { CalendarX2, LineChart } from "lucide-react"

const steps = [
  {
    eyebrow: "Before",
    title: "From a messy calendar that drains you",
    body: "Double-bookings, scattered notes, and no idea what you actually earned. Legacy CRMs make you work for them.",
    image: "/landing/messy-calendar.png",
    alt: "A cluttered legacy calendar with overlapping appointments",
    icon: CalendarX2,
    iconBg: "bg-[#FEE2E2]",
    iconColor: "text-[#C53030]",
    reverse: false,
  },
  {
    eyebrow: "After",
    title: "To one clear number: your Net Profit",
    body: "Perelai connects every booking to your finances automatically, so you always know exactly where your business stands — at a glance.",
    image: "/landing/clear-profit.png",
    alt: "A clean dashboard highlighting net profit with an upward trend",
    icon: LineChart,
    iconBg: "bg-[#6A4CFF]/10",
    iconColor: "text-[#6A4CFF]",
    reverse: true,
  },
]

export function LandingHowItWorks() {
  return (
    <section id="how" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-semibold uppercase tracking-wide text-[#6A4CFF]">How it works</p>
          <h2 className="mt-3 text-balance text-[32px] font-bold leading-tight tracking-tight text-[#0F1724] sm:text-[42px]">
            Trade the chaos for clarity
          </h2>
        </Reveal>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                {/* Text */}
                <Reveal className={step.reverse ? "md:order-2" : "md:order-1"}>
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${step.iconBg}`}>
                    <Icon className={`h-6 w-6 ${step.iconColor}`} />
                  </span>
                  <p className="mt-5 text-[13px] font-semibold uppercase tracking-wide text-[#6A4CFF]">
                    {step.eyebrow}
                  </p>
                  <h3 className="mt-2 text-balance text-[26px] font-semibold leading-snug tracking-tight text-[#0F1724] sm:text-[32px]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md text-pretty text-[17px] leading-relaxed text-[#4B5563]">{step.body}</p>
                </Reveal>

                {/* Image */}
                <Reveal delay={0.1} className={step.reverse ? "md:order-1" : "md:order-2"}>
                  <div className="relative">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-6 -z-10 rounded-[36px] opacity-60 blur-[70px]"
                      style={{
                        background: step.reverse
                          ? "linear-gradient(135deg, rgba(106,76,255,0.3), rgba(167,139,250,0.15))"
                          : "linear-gradient(135deg, rgba(148,163,184,0.25), rgba(148,163,184,0.1))",
                      }}
                    />
                    <div className="overflow-hidden rounded-[24px] border border-white/60 bg-white/40 p-2 shadow-[0_24px_60px_-20px_rgba(16,24,40,0.25)] backdrop-blur-xl">
                      <img src={step.image || "/placeholder.svg"} alt={step.alt} className="w-full rounded-[16px]" />
                    </div>
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
