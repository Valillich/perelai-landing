"use client"

import type { ReactNode } from "react"
import { Link } from "@/i18n/navigation"
import { analytics, type InstallHelpClickedEvent } from "@/lib/analytics"

export function InstallHelpLink({
  href = "/install",
  sourceSurface,
  children,
  className,
  isCurrent = false,
}: {
  href?: string
  sourceSurface: InstallHelpClickedEvent["properties"]["source_surface"]
  children: ReactNode
  className?: string
  isCurrent?: boolean
}) {
  return (
    <Link
      href={href}
      onClick={() => {
        if (!isCurrent) {
          analytics.track({
            name: "install_help_clicked",
            properties: { source_surface: sourceSurface },
          })
        }
      }}
      className={className}
    >
      {children}
    </Link>
  )
}
