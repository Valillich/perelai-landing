import createMiddleware from "next-intl/middleware"
import { NextResponse, type NextRequest } from "next/server"
import { isAppLocale, isPublishedLocale, type PublishedLocale } from "@/i18n/locales"
import { negotiatePublishedLocale } from "@/i18n/negotiation"
import { routing } from "@/i18n/routing"

const handleI18nRouting = createMiddleware(routing)
function explicitLocale(pathname: string): string | undefined {
  const segment = pathname.split("/")[1]?.toLowerCase()
  return isAppLocale(segment) ? segment : undefined
}

function continueWithLocale(request: NextRequest, locale: PublishedLocale) {
  const headers = new Headers(request.headers)
  // next-intl reads this request header in getRequestConfig. Keeping it here
  // avoids asking the middleware to normalize /en/* away from an explicit URL.
  headers.set("X-NEXT-INTL-LOCALE", locale)
  return NextResponse.next({ request: { headers } })
}

/**
 * The landing negotiates only at the entry point. A path that already names a
 * locale is authoritative, which keeps every indexed URL stable for crawlers.
 */
export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const pathLocale = explicitLocale(pathname)

  if (pathLocale) {
    if (!isPublishedLocale(pathLocale)) {
      // Let the static route reject an unpublished locale with a real 404.
      return NextResponse.next()
    }

    // `as-needed` prefixing puts English on the unprefixed path, so /en/* is a
    // duplicate of a URL that already exists. Serving both would give every
    // English page a second address whose canonical points somewhere else.
    if (pathLocale === routing.defaultLocale) {
      const url = request.nextUrl.clone()
      url.pathname = pathname.slice(pathLocale.length + 1) || "/"
      return NextResponse.redirect(url, 308)
    }

    return continueWithLocale(request, pathLocale)
  }

  if (pathname === "/") {
    const locale = negotiatePublishedLocale({
      cookieLocale: request.cookies.get("NEXT_LOCALE")?.value,
      acceptLanguage: request.headers.get("accept-language"),
    })

    if (locale !== "en") {
      const url = request.nextUrl.clone()
      url.pathname = `/${locale}`
      const response = NextResponse.redirect(url, 307)
      response.cookies.set("NEXT_LOCALE", locale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      })
      return response
    }
  }

  return handleI18nRouting(request)
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
