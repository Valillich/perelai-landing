import Image from "next/image"
import type { PublishedLocale } from "@/i18n/locales"

const copy = {
  en: {
    alt: "Perelai music-teacher calendar with an illustrative piano lesson",
    caption: "Illustrative app screen with synthetic data: an unconfirmed piano lesson, USD 45, not yet paid. This amount is not a received payment.",
  },
  ru: {
    alt: "Календарь Perelai для преподавателя музыки с примером урока фортепиано",
    caption: "Пример интерфейса на синтетических данных: неподтверждённый урок фортепиано, 45 USD, ещё не оплачен. Эта сумма не является полученной оплатой.",
  },
  uk: {
    alt: "Календар Perelai для викладача музики з прикладом уроку фортепіано",
    caption: "Приклад інтерфейсу на синтетичних даних: непідтверджений урок фортепіано, 45 USD, ще не оплачений. Ця сума не є отриманою оплатою.",
  },
}

/** Bounded screenshot evidence until the shared mock export supports edu. */
export function MusicCalendarPreview({ locale }: { locale: PublishedLocale }) {
  if (!(locale in copy)) return null
  const text = copy[locale as keyof typeof copy]
  return (
    <figure>
      <Image
        src={`/images/niches/music-calendar-${locale}.png`}
        alt={text.alt}
        width={1280}
        height={900}
        className="h-auto w-full rounded-[20px] border border-border"
      />
      <figcaption className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
        {text.caption}
      </figcaption>
    </figure>
  )
}
