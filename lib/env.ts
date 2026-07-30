export interface PublicEnvironment {
  NEXT_PUBLIC_APP_URL: string
  NEXT_PUBLIC_BOOKING_URL: string
  NEXT_PUBLIC_LANDING_URL: string
  NEXT_PUBLIC_DEFAULT_CAMPAIGN: string
}

type EnvironmentSource = Record<string, string | undefined>

function requiredValue(source: EnvironmentSource, key: keyof PublicEnvironment): string {
  const value = source[key]?.trim()

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }

  return value
}

function validUrl(value: string, key: keyof PublicEnvironment): string {
  try {
    return new URL(value).toString()
  } catch {
    throw new Error(`Invalid required environment variable: ${key}`)
  }
}

/**
 * Parses public configuration at module load so configuration problems fail the
 * build instead of becoming broken outbound links at runtime.
 */
export function readPublicEnvironment(source: EnvironmentSource): PublicEnvironment {
  const appUrl = requiredValue(source, "NEXT_PUBLIC_APP_URL")
  const bookingUrl = requiredValue(source, "NEXT_PUBLIC_BOOKING_URL")
  const landingUrl = requiredValue(source, "NEXT_PUBLIC_LANDING_URL")
  const defaultCampaign = requiredValue(source, "NEXT_PUBLIC_DEFAULT_CAMPAIGN")

  return {
    NEXT_PUBLIC_APP_URL: validUrl(appUrl, "NEXT_PUBLIC_APP_URL"),
    NEXT_PUBLIC_BOOKING_URL: validUrl(bookingUrl, "NEXT_PUBLIC_BOOKING_URL"),
    NEXT_PUBLIC_LANDING_URL: validUrl(landingUrl, "NEXT_PUBLIC_LANDING_URL"),
    NEXT_PUBLIC_DEFAULT_CAMPAIGN: defaultCampaign,
  }
}

export const env = readPublicEnvironment({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_BOOKING_URL: process.env.NEXT_PUBLIC_BOOKING_URL,
  NEXT_PUBLIC_LANDING_URL: process.env.NEXT_PUBLIC_LANDING_URL,
  NEXT_PUBLIC_DEFAULT_CAMPAIGN: process.env.NEXT_PUBLIC_DEFAULT_CAMPAIGN,
})
