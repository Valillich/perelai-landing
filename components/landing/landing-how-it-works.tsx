import Image from "next/image"
import { Reveal } from "./reveal"
import { CalendarX2, LineChart } from "lucide-react"
import { useTranslations } from "next-intl"

export function LandingHowItWorks() {
  const t = useTranslations("home.how")
  const steps = [
    { eyebrow: t("before"), title: t("beforeTitle"), body: t("beforeBody"), image: "/landing/messy-calendar.png", alt: t("beforeAlt"), icon: CalendarX2, iconBg: "bg-badge-danger-bg", iconColor: "text-badge-danger-text", reverse: false },
    { eyebrow: t("after"), title: t("afterTitle"), body: t("afterBody"), image: "/landing/clear-profit.png", alt: t("afterAlt"), icon: LineChart, iconBg: "bg-brand-600/10", iconColor: "text-brand-600", reverse: true },
  ]

  return (
    <section id="how" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-semibold uppercase tracking-wide text-brand-600">{t("eyebrow")}</p>
          <h2 className="mt-3 text-balance text-[32px] font-bold leading-tight tracking-tight text-foreground sm:text-[42px]">
            {t("title")}
          </h2>
        </Reveal>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                {/* Text */}
                <Reveal className={step.reverse ? "md:order-2" : "md:order-1"}>
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${step.iconBg}`}>
                    <Icon className={`h-6 w-6 ${step.iconColor}`} />
                  </span>
                  <p className="mt-5 text-[13px] font-semibold uppercase tracking-wide text-brand-600">
                    {step.eyebrow}
                  </p>
                  <h3 className="mt-2 text-balance text-[26px] font-semibold leading-snug tracking-tight text-foreground sm:text-[32px]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md text-pretty text-[17px] leading-relaxed text-muted-foreground">{step.body}</p>
                </Reveal>

                {/* Image */}
                <Reveal delay={0.1} className={step.reverse ? "md:order-1" : "md:order-2"}>
                  <div className="relative">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-6 -z-10 rounded-[36px] opacity-60 blur-[70px]"
                      style={{
                        background: step.reverse
                          ? "linear-gradient(135deg, rgba(106,76,255,0.3), rgba(167,139,250,0.15))"
                          : "linear-gradient(135deg, rgba(148,163,184,0.25), rgba(148,163,184,0.1))",
                      }}
                    />
                    <div className="overflow-hidden rounded-[24px] border border-border bg-card/40 p-2 shadow-[0_24px_60px_-20px_rgba(16,24,40,0.25)] backdrop-blur-xl">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        width={1024}
                        height={1024}
                        sizes="(max-width: 768px) 100vw, 576px"
                        className="w-full h-auto rounded-[16px]"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
