import { useTranslations } from "next-intl"
import { Reveal } from "@/components/landing/reveal"

export function Problem() {
  const t = useTranslations("home")

  return (
    <section className="py-20 sm:py-28 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12 text-center">
            {t("problem.title")}
          </h2>
        </Reveal>

        <div className="flex flex-col space-y-0 divide-y divide-border">
          <Reveal delay={0.1}>
            <div className="py-8">
              <h3 className="text-xl font-medium text-foreground mb-3">
                {t("problem.pain1Title")}
              </h3>
              <p className="text-muted-foreground text-lg">
                {t("problem.pain1Body")}
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="py-8">
              <h3 className="text-xl font-medium text-foreground mb-3">
                {t("problem.pain2Title")}
              </h3>
              <p className="text-muted-foreground text-lg">
                {t("problem.pain2Body")}
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="py-8">
              <h3 className="text-xl font-medium text-foreground mb-3">
                {t("problem.pain3Title")}
              </h3>
              <p className="text-muted-foreground text-lg">
                {t("problem.pain3Body")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
