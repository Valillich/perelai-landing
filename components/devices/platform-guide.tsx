"use client"

import { useTranslations } from "next-intl"
import {
  DeviceEmphasisPanel,
  DeviceEmphasisTabs,
} from "@/components/devices/device-emphasis-tabs"
import { analytics } from "@/lib/analytics"
import { cn } from "@/lib/cn"

const GUIDE_IDS = ["iphone", "ipad", "android", "desktop", "embedded"] as const

type GuideId = (typeof GUIDE_IDS)[number]

interface PlatformGuideProps {
  className?: string
}

/**
 * Installation guidance kept in the DOM for every platform. Tabs show one
 * guide at a time without unmounting the others. No UA sniffing, no install
 * button, no browser-version matrix.
 */
export function PlatformGuide({ className }: PlatformGuideProps) {
  const t = useTranslations("devices.guides")

  const guides = GUIDE_IDS.map((id) => ({
    id,
    title: t(`${id}.title` as `${GuideId}.title`),
    body: t(`${id}.body` as `${GuideId}.body`),
  }))

  return (
    <section className={cn("space-y-8", className)}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-[28px] font-bold leading-tight tracking-tight text-foreground sm:text-[36px]">
          {t("title")}
        </h2>
        <p className="mt-4 text-pretty text-[17px] leading-relaxed text-muted-foreground">
          {t("body")}
        </p>
      </div>

      <DeviceEmphasisTabs
        label={t("tablistLabel")}
        defaultId="iphone"
        items={guides.map((guide) => ({ id: guide.id, label: guide.title }))}
        onSelect={(id) => {
          const platform = id === "embedded" ? "browser" : (id as "iphone" | "ipad" | "android" | "desktop")
          analytics.track({
            name: "install_guide_opened",
            properties: {
              platform,
              source_page: "/install",
            },
          })
        }}
      >
        <div className="grid gap-3">
          {guides.map((guide) => (
            <DeviceEmphasisPanel key={guide.id} id={guide.id}>
              <h3 className="text-[18px] font-semibold tracking-tight text-foreground">
                {guide.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {guide.body}
              </p>
            </DeviceEmphasisPanel>
          ))}
        </div>
      </DeviceEmphasisTabs>
    </section>
  )
}
