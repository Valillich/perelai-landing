import { useTranslations } from "next-intl"
import { MockCollaborationWorkspace } from "@/components/mock/MockCollaborationWorkspace"
import { CollaborationSectionTracker } from "@/components/analytics/collaboration-section-tracker"
import type { PublishedLocale } from "@/i18n/locales"

interface CollaborationProps {
  locale: PublishedLocale
}

export function Collaboration({ locale }: CollaborationProps) {
  const t = useTranslations("home")

  return (
    <section className="relative py-20 sm:py-28 bg-background border-t border-border">
      <CollaborationSectionTracker locale={locale} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {t("collaboration.title")}
            </h2>

            <p className="text-lg text-muted-foreground">
              {t("collaboration.body")}
            </p>

            <div className="space-y-3 rounded-2xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground">
                {t("collaboration.teamTitle")}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("collaboration.teamBody")}
              </p>
              <div className="border-t border-border pt-3">
                <p className="text-xs font-medium leading-relaxed text-muted-foreground">
                  {t("collaboration.notesDetail")}
                </p>
              </div>
            </div>
          </div>

          <MockCollaborationWorkspace
            locale={locale}
            summary={t("collaboration.summary")}
            exampleCaption={t("collaboration.caption")}
            mockData={{
              pinnedNote: t("collaboration.mock.pinnedNote"),
              visitNote: t("collaboration.mock.visitNote"),
              hours1: t("collaboration.mock.hours1"),
              hours2: t("collaboration.mock.hours2"),
              hours3: t("collaboration.mock.hours3"),
            }}
          />
        </div>
      </div>
    </section>
  )
}
