"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-3 flex items-center justify-between rounded-full border border-[#F1F3F5] bg-white/70 px-4 py-2.5 shadow-[0_6px_20px_rgba(16,24,40,0.06)] backdrop-blur-xl sm:px-5">
          {/* Logo */}
          <Link href="/landing" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#7d5bff] to-[#5a3bff] shadow-[0_4px_12px_rgba(106,76,255,0.32)]">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="text-[17px] font-semibold tracking-tight text-[#0F1724]">Perelai</span>
          </Link>

          {/* Nav links */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-[14px] font-medium text-[#4B5563] transition-colors hover:text-[#0F1724]">
              Features
            </a>
            <a href="#how" className="text-[14px] font-medium text-[#4B5563] transition-colors hover:text-[#0F1724]">
              How it works
            </a>
            <a href="#pricing" className="text-[14px] font-medium text-[#4B5563] transition-colors hover:text-[#0F1724]">
              Pricing
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="hidden rounded-full px-4 py-2 text-[14px] font-medium text-[#4B5563] transition-colors hover:text-[#0F1724] sm:inline-flex"
            >
              Log in
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-gradient-to-br from-[#7d5bff] to-[#5a3bff] px-4 py-2 text-[14px] font-semibold text-white shadow-[0_4px_14px_rgba(106,76,255,0.32)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
