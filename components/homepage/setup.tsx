import { useTranslations } from "next-intl";
import { Reveal } from "@/components/landing/reveal";

const STEPS = [1, 2, 3] as const;

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

          <Reveal delay={0.04}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {t("setup.title")}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-lg text-muted-foreground">
              {t("setup.body")}
            </p>
          </Reveal>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, index) => (
            <li key={step} className="border-t border-border pt-8">
              <Reveal delay={index * 0.04}>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600/10 text-[15px] font-semibold text-brand-600"
                >
                  {step}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {t(`setup.step${step}Title`)}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {t(`setup.step${step}Body`)}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
