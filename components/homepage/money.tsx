import { useTranslations } from "next-intl";
import { Reveal } from "@/components/landing/reveal";
import { MockFinanceKpis } from "@/components/mock/MockFinanceKpis";
import { buildAppScreenDataset } from "@/lib/app-screen-mock";
import { localePrimaryMarket } from "@/lib/market";
import type { PublishedLocale } from "@/i18n/locales";

interface MoneyProps {
  locale: PublishedLocale;
}

export function Money({ locale }: MoneyProps) {
  const t = useTranslations("home");
  const dataset = buildAppScreenDataset(
    "independent_colorist",
    locale,
    localePrimaryMarket(locale)
  );

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <MockFinanceKpis dataset={dataset} />
          </Reveal>
          
          <div className="space-y-6">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {t("money.title")}
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground">
                {t("money.body")}
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-base text-subtle-text">
                {t("money.detail")}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
