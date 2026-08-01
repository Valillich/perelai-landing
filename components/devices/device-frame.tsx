import type { ReactNode } from "react"
import { cn } from "@/lib/cn"

export type DeviceFrameSize = "phone" | "tablet" | "desktop"

/**
 * Corner radius scales with the frame, phone roundest — the only thing that
 * distinguishes the sizes. No notch, no home indicator, no camera dot, no side
 * buttons, no status bar, no browser chrome, no URL bar: a frame that resembles
 * specific hardware is both a trademark problem and a fabricated artifact.
 */
const FRAME_SIZE: Record<DeviceFrameSize, { outer: string; inner: string }> = {
  phone: { outer: "rounded-[26px] p-1.5", inner: "rounded-[20px]" },
  tablet: { outer: "rounded-[20px] p-2", inner: "rounded-[13px]" },
  desktop: { outer: "rounded-[16px] p-2", inner: "rounded-[9px]" },
}

interface DeviceFrameProps {
  size: DeviceFrameSize
  children: ReactNode
  className?: string
}

/**
 * A neutral CSS frame: rounded rectangle, 1px `--border`, `--card` fill, and
 * the same card shadow the rest of the mock kit uses. Every value is an
 * `app/globals.css` token so the composition follows the theme toggle in both
 * directions — the failure mode a screenshot would have shipped.
 */
export function DeviceFrame({ size, children, className }: DeviceFrameProps) {
  const style = FRAME_SIZE[size]

  return (
    <div
      className={cn(
        "flex overflow-hidden border border-border bg-card mock-device-frame-shadow",
        style.outer,
        className,
      )}
    >
      <div className={cn("flex min-w-0 flex-1 overflow-hidden", style.inner)}>
        {children}
      </div>
    </div>
  )
}
