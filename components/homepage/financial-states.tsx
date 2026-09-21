import { useTranslations } from "next-intl"

export function FinancialStates() {
  const t = useTranslations("home")

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <p className="border-t border-border py-6 text-center text-[14px] leading-relaxed text-muted-foreground">
        {t("states.title")}
      </p>
    </div>
  )
}
