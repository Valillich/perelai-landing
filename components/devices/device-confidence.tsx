import { useTranslations } from "next-intl"
import { InstallHelpLink } from "@/components/devices/install-help-link"
import { cn } from "@/lib/cn"

interface DeviceConfidenceProps {
  className?: string
}

/**
 * Compact device reassurance for homepage microcopy and niche pages.
 * One line, one internal link to `/install` — no product surface, no second CTA.
 */
export function DeviceConfidence({ className }: DeviceConfidenceProps) {
  const t = useTranslations("devices.compact")

  return (
    <p className={cn("text-[13px] leading-relaxed text-subtle-text", className)}>
      {t("text")}{" "}
      <InstallHelpLink
        href="/install"
        sourceSurface="niche"
        className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-brand-600"
      >
        {t("link")}
      </InstallHelpLink>
    </p>
  )
}
