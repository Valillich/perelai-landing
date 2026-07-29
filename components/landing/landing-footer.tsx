"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Booking links", "Integrations"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Community", "Guides", "Changelog"],
  },
]

export function LandingFooter() {
  return (
    <footer className="border-t border-[#F1F3F5] px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/landing" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#7d5bff] to-[#5a3bff] shadow-[0_4px_12px_rgba(106,76,255,0.32)]">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <span className="text-[17px] font-semibold tracking-tight text-[#0F1724]">Perelai</span>
            </Link>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-[#4B5563]">
              The personal CFO and booking engine for independent service professionals.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-semibold uppercase tracking-wide text-[#0F1724]">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-[#4B5563] transition-colors hover:text-[#0F1724]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#F1F3F5] pt-8 sm:flex-row">
          <p className="text-[13px] text-[#9CA3AF]">© {new Date().getFullYear()} Perelai. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[13px] text-[#4B5563] transition-colors hover:text-[#0F1724]">
              Privacy Policy
            </a>
            <a href="#" className="text-[13px] text-[#4B5563] transition-colors hover:text-[#0F1724]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
