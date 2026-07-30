import { useTranslations } from "next-intl";
import { Reveal } from "@/components/landing/reveal";

export function Setup() {
  const t = useTranslations("home");

  return (
    <section id="how" className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Reveal>
            <p className="text-sm font-semibold tracking-wide text-brand-600 uppercase">
              {t("setup.eyebrow")}
            </p>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {t("setup.title")}
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground">
              {t("setup.body")}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal delay={0.3}>
            <div className="space-y-4">
              <span className="text-5xl font-bold text-brand-600/20">01</span>
              <h3 className="text-xl font-semibold text-foreground">
                {t("setup.step1Title")}
              </h3>
              <p className="text-muted-foreground">
                {t("setup.step1Body")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="space-y-4">
              <span className="text-5xl font-bold text-brand-600/20">02</span>
              <h3 className="text-xl font-semibold text-foreground">
                {t("setup.step2Title")}
              </h3>
              <p className="text-muted-foreground">
                {t("setup.step2Body")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="space-y-4">
              <span className="text-5xl font-bold text-brand-600/20">03</span>
              <h3 className="text-xl font-semibold text-foreground">
                {t("setup.step3Title")}
              </h3>
              <p className="text-muted-foreground">
                {t("setup.step3Body")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
