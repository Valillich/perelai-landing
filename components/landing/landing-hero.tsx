"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export function LandingHero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 sm:px-6 sm:pt-24">
      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(106,76,255,0.22) 0%, rgba(167,139,250,0.12) 45%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-3xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-flex items-center gap-2 rounded-full border border-[#F1F3F5] bg-white/70 px-3.5 py-1.5 text-[13px] font-medium text-[#4B5563] shadow-[0_4px_12px_rgba(16,24,40,0.04)] backdrop-blur-xl"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#6A4CFF]" />
          Next-generation booking &amp; finance
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-6 text-balance text-[40px] font-bold leading-[1.05] tracking-tight text-[#0F1724] sm:text-[58px]"
        >
          Stop renting your clients.{" "}
          <span className="bg-gradient-to-br from-[#7d5bff] to-[#5a3bff] bg-clip-text text-transparent">
            Own your business.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-[#4B5563] sm:text-[19px]"
        >
          The frictionless booking engine and personal CFO for premium service professionals. Save thousands on
          marketplace fees.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#7d5bff] to-[#5a3bff] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(106,76,255,0.32)] transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
          >
            Start 14-day free trial
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="#how"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#F1F3F5] bg-white/70 px-6 py-3.5 text-[15px] font-semibold text-[#0F1724] shadow-[0_4px_12px_rgba(16,24,40,0.04)] backdrop-blur-xl transition-colors hover:bg-white sm:w-auto"
          >
            <Play className="h-4 w-4 text-[#6A4CFF]" />
            See how it works
          </a>
        </motion.div>
      </div>

      {/* App mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative mx-auto mt-14 max-w-4xl sm:mt-20"
      >
        {/* Glow behind mockup */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-10 -top-6 bottom-0 -z-10 rounded-[40px] opacity-70 blur-[80px]"
          style={{
            background: "linear-gradient(135deg, rgba(106,76,255,0.35), rgba(236,72,153,0.18))",
          }}
        />
        <div className="overflow-hidden rounded-[28px] border border-white/60 bg-white/40 p-2 shadow-[0_30px_80px_-20px_rgba(106,76,255,0.35)] backdrop-blur-xl sm:p-3">
          <img
            src="/landing/hero-dashboard.png"
            alt="Perelai dashboard showing net profit, upcoming bookings, and revenue charts"
            className="w-full rounded-[20px]"
          />
        </div>
      </motion.div>
    </section>
  )
}
