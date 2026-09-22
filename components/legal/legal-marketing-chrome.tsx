"use client"

import { createContext, useContext, useEffect, useState, Suspense, type ReactNode } from "react"
import { useSearchParams } from "next/navigation"
import { LandingFooter } from "@/components/landing/landing-footer"
import { LandingHeader } from "@/components/landing/landing-header"
import { Link } from "@/i18n/navigation"
import { validReturnFrom, type LegalReturnFrom } from "@/lib/legal/return"
import type { PublishedLocale } from "@/i18n/locales"

interface LegalChromeContextValue {
  from: LegalReturnFrom | undefined
  isFromApp: boolean
}

const LegalChromeContext = createContext<LegalChromeContextValue>({
  from: undefined,
  isFromApp: false,
})

function LegalChromeInner({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams()
  const fromParam = searchParams.get("from")
  const from = validReturnFrom(fromParam)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("legal-from-app", Boolean(from))
  }, [from])

  const isFromApp = mounted && Boolean(from)

  return (
    <LegalChromeContext.Provider value={{ from, isFromApp }}>
      {children}
    </LegalChromeContext.Provider>
  )
}

/**
 * Context provider wrapping legal document pages.
 * Handles client query params inside a Suspense boundary to preserve App Router static generation (SSG).
 */
export function LegalChromeProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <LegalChromeInner>{children}</LegalChromeInner>
    </Suspense>
  )
}

/** Hook to consume the current legal chrome context */
export function useLegalChrome(): LegalChromeContextValue {
  return useContext(LegalChromeContext)
}

/** Hook to directly read and validate the from parameter */
export function useLegalFrom(): LegalReturnFrom | undefined {
  const searchParams = useSearchParams()
  return validReturnFrom(searchParams.get("from"))
}

/**
 * Main marketing header for legal pages.
 * Hides itself when an allowlisted app return destination (`from`) is active.
 */
export function LegalMarketingHeader({
  locale,
  canonicalPath,
}: {
  locale: PublishedLocale
  canonicalPath: string
}) {
  const { isFromApp } = useLegalChrome()

  if (isFromApp) {
    return null
  }

  return (
    <div className="legal-marketing-chrome print:hidden">
      <LandingHeader locale={locale} canonicalPath={canonicalPath} />
    </div>
  )
}

/**
 * Main marketing footer for legal pages.
 * Hides itself when an allowlisted app return destination (`from`) is active.
 */
export function LegalMarketingFooter({
  locale,
  canonicalPath,
}: {
  locale: PublishedLocale
  canonicalPath: string
}) {
  const { isFromApp } = useLegalChrome()

  if (isFromApp) {
    return null
  }

  return (
    <div className="legal-marketing-chrome print:hidden">
      <LandingFooter locale={locale} canonicalPath={canonicalPath} />
    </div>
  )
}

/**
 * Home marketing link at the bottom of legal documents.
 * Hides itself when an allowlisted app return destination (`from`) is active.
 */
export function LegalBackHomeLink({ label }: { label: string }) {
  const { isFromApp } = useLegalChrome()

  if (isFromApp) {
    return null
  }

  return (
    <div className="legal-marketing-chrome">
      <Link
        href="/"
        className="text-[15px] font-semibold text-brand-600 transition-colors hover:text-brand-700"
      >
        {label} →
      </Link>
    </div>
  )
}
