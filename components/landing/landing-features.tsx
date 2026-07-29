"use client"

import { Reveal } from "./reveal"
import { Wallet, Link2, HeartHandshake, Inbox } from "lucide-react"

export function LandingFeatures() {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-semibold uppercase tracking-wide text-[#6A4CFF]">Everything in one place</p>
          <h2 className="mt-3 text-balance text-[32px] font-bold leading-tight tracking-tight text-[#0F1724] sm:text-[42px]">
            Run your whole practice from your pocket
          </h2>
          <p className="mt-4 text-pretty text-[16px] leading-relaxed text-[#4B5563]">
            Booking, payments, and profit — beautifully connected, so you spend time on clients, not spreadsheets.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Card 1 - Large */}
          <Reveal className="md:row-span-2">
            <article className="flex h-full flex-col justify-between rounded-[24px] border border-[#F1F3F5] bg-white p-7 shadow-[0_6px_20px_rgba(16,24,40,0.06)]">
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7d5bff] to-[#5a3bff] shadow-[0_6px_16px_rgba(106,76,255,0.32)]">
                  <Wallet className="h-6 w-6 text-white" />
                </span>
                <h3 className="mt-6 text-[24px] font-semibold tracking-tight text-[#0F1724]">One-Swipe Finances</h3>
                <p className="mt-3 max-w-md text-[16px] leading-relaxed text-[#4B5563]">
                  One list of what still needs your decision — it stays there until you resolve it, not until you read
                  it. Revenue, costs and what&apos;s still outstanding — without a spreadsheet.
                </p>
              </div>

              {/* Mini visual */}
              <div className="mt-8 rounded-2xl border border-[#F1F3F5] bg-[#FBFCFE] p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[13px] font-medium text-[#4B5563]">
                    <Inbox className="h-4 w-4 text-[#6A4CFF]" />
                    Inbox triage
                  </div>
                  <span className="rounded-full bg-[#6A4CFF]/10 px-2.5 py-1 text-[12px] font-semibold text-[#6A4CFF]">
                    +$1,240 today
                  </span>
                </div>
                <div className="mt-4 space-y-2.5">
                  {[
                    { name: "Balayage — Mia", amount: "$150" },
                    { name: "Deep tissue — Leo", amount: "$70" },
                    { name: "Gel manicure — Ana", amount: "$45" },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between rounded-xl border border-[#F1F3F5] bg-white px-3.5 py-2.5"
                    >
                      <span className="text-[14px] font-medium text-[#0F1724]">{row.name}</span>
                      <span className="text-[14px] font-semibold text-[#1b8a4a]">{row.amount}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-center text-[12px] font-medium text-[#9CA3AF]">Example data</p>
              </div>
            </article>
          </Reveal>

          {/* Card 2 - Medium */}
          <Reveal delay={0.08}>
            <article className="h-full rounded-[24px] border border-[#F1F3F5] bg-white p-7 shadow-[0_6px_20px_rgba(16,24,40,0.06)]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3E8FF]">
                <Link2 className="h-6 w-6 text-[#7C3AED]" />
              </span>
              <h3 className="mt-6 text-[22px] font-semibold tracking-tight text-[#0F1724]">Direct Booking Links</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-[#4B5563]">
                Share one link on Instagram or TikTok and take zero-commission bookings directly. Your clients, your
                revenue — no marketplace middleman.
              </p>
            </article>
          </Reveal>

          {/* Card 3 - Medium */}
          <Reveal delay={0.16}>
            <article className="h-full rounded-[24px] border border-[#F1F3F5] bg-white p-7 shadow-[0_6px_20px_rgba(16,24,40,0.06)]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DBEAFE]">
                <HeartHandshake className="h-6 w-6 text-[#2563EB]" />
              </span>
              <h3 className="mt-6 text-[22px] font-semibold tracking-tight text-[#0F1724]">Smart Client Retention</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-[#4B5563]">
                Automated reminders bring clients back, while lifetime-value tracking shows you exactly who your best
                regulars are.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
