import { Monitor, Smartphone, Tablet } from "lucide-react"
import { useTranslations } from "next-intl"
import { DeviceFrame } from "@/components/devices/device-frame"
import {
  DeviceEmphasisPanel,
  DeviceEmphasisTabs,
} from "@/components/devices/device-emphasis-tabs"
import { MockDesktopShell } from "@/components/mock/MockDesktopShell"
import { MockMobileShell } from "@/components/mock/MockMobileShell"
import type { PublishedLocale } from "@/i18n/locales"
import type { AppScreenDataset } from "@/lib/app-screen-mock"
import { cn } from "@/lib/cn"

interface DeviceShowcaseProps {
  locale: PublishedLocale
  dataset: AppScreenDataset
  paidLabel: string
  pendingLabel: string
  className?: string
}

/**
 * `/install` responsive proof: live focused, wide, and wider compositions.
 * Tabs show one panel at a time; every panel stays in the server-rendered DOM.
 */
export function DeviceShowcase({
  dataset,
  paidLabel,
  pendingLabel,
  className,
}: DeviceShowcaseProps) {
  const t = useTranslations("devices.showcase")

  const panels = [
    {
      id: "phone",
      title: t("phone.title"),
      body: t("phone.body"),
      icon: Smartphone,
      visual: (
        <DeviceFrame size="phone" className="mx-auto w-full max-w-[380px]">
          <MockMobileShell
            dataset={dataset}
            paidLabel={paidLabel}
            pendingLabel={pendingLabel}
            className="min-h-[420px]"
          />
        </DeviceFrame>
      ),
    },
    {
      id: "ipad",
      title: t("ipad.title"),
      body: t("ipad.body"),
      icon: Tablet,
      visual: (
        <DeviceFrame size="tablet" className="mx-auto w-full min-w-[720px] max-w-[820px]">
          <MockDesktopShell
            dataset={dataset}
            paidLabel={paidLabel}
            pendingLabel={pendingLabel}
            contextualPane={false}
            className="min-h-[360px]"
          />
        </DeviceFrame>
      ),
    },
    {
      id: "desktop",
      title: t("desktop.title"),
      body: t("desktop.body"),
      icon: Monitor,
      // The full wide-desktop view: rail, Inbox, calendar, and the contextual
      // pane in the passive state the app itself shows before anything is
      // selected. Rendered at the product's own `85rem` threshold, so the
      // third pane appears for the same reason it does in the app.
      visual: (
        <div className="overflow-x-auto">
          <DeviceFrame size="desktop">
            <MockDesktopShell
              dataset={dataset}
              paidLabel={paidLabel}
              pendingLabel={pendingLabel}
              className="min-h-[520px] min-w-[85rem]"
            />
          </DeviceFrame>
        </div>
      ),
    },
  ] as const

  return (
    <section className={cn("space-y-10", className)}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-[28px] font-bold leading-tight tracking-tight text-foreground sm:text-[36px]">
          {t("title")}
        </h2>
        <p className="mt-4 text-pretty text-[17px] leading-relaxed text-muted-foreground">
          {t("body")}
        </p>
        <p className="sr-only">{t("summary")}</p>
      </div>

      <DeviceEmphasisTabs
        label={t("tablistLabel")}
        defaultId="phone"
        items={panels.map((panel) => ({ id: panel.id, label: panel.title }))}
      >
        <div className="grid gap-4">
          {panels.map((panel) => {
            const Icon = panel.icon
            return (
              <DeviceEmphasisPanel key={panel.id} id={panel.id}>
                <div className="flex items-start gap-3">
                  <Icon
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                    strokeWidth={1.75}
                  />
                  <div>
                    <h3 className="text-[18px] font-semibold tracking-tight text-foreground">
                      {panel.title}
                    </h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">
                      {panel.body}
                    </p>
                  </div>
                </div>
                <div className="mt-5" aria-hidden="true">
                  {panel.visual}
                </div>
                <p className="mt-3 text-center text-[12px] font-medium text-subtle-text">
                  {t("caption")}
                </p>
              </DeviceEmphasisPanel>
            )
          })}
        </div>
      </DeviceEmphasisTabs>
    </section>
  )
}
