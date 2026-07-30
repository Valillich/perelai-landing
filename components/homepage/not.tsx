import { useTranslations } from "next-intl";
import { Reveal } from "@/components/landing/reveal";

export function Not() {
  const t = useTranslations("home");

  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {t("not.title")}
            </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground">
              {t("not.body")}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal delay={0.2}>
            <div className="h-full p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t("not.item1Title")}
              </h3>
              <p className="text-muted-foreground">
                {t("not.item1Body")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="h-full p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t("not.item2Title")}
              </h3>
              <p className="text-muted-foreground">
                {t("not.item2Body")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="h-full p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t("not.item3Title")}
              </h3>
              <p className="text-muted-foreground">
                {t("not.item3Body")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
