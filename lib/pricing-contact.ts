import { PRODUCTION_LEGAL_IDENTITY } from "@/lib/legal/production-identity"

export function getPricingContactEmail(): string {
  return process.env.NEXT_PUBLIC_LEGAL_SUPPORT_EMAIL?.trim() || PRODUCTION_LEGAL_IDENTITY.supportEmail
}
