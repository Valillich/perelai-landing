import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    env: {
      NEXT_PUBLIC_APP_URL: "https://app.perelai.com",
      NEXT_PUBLIC_BOOKING_URL: "https://booking.perelai.com",
      NEXT_PUBLIC_LANDING_URL: "https://perelai.com",
      NEXT_PUBLIC_DEFAULT_CAMPAIGN: "landing",
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
})
