import { getRequestConfig } from "next-intl/server"
import { isPublishedLocale } from "@/i18n/locales"
import { messagesByLocale } from "@/i18n/messages"

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale
  const locale = isPublishedLocale(requestedLocale) ? requestedLocale : "en"

  return { locale, messages: messagesByLocale[locale] }
})
