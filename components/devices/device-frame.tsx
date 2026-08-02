import type { ReactNode } from "react"
import { cn } from "@/lib/cn"

export type DeviceFrameSize = "phone" | "tablet" | "desktop"

/**
 * What separates the three sizes is silhouette, and nothing else.
 *
 * `outer` is the bezel. Its corner radius and its thickness *relative to the
 * frame's width* are the two cues that make a rounded rectangle read as
 * something held rather than as a card: 10px around a 320px phone is ~3% of
 * its width and reads chunky, while 12px around an 800px tablet is ~1.5% and
 * reads thin — which is the difference between the two objects in real life.
 *
 * `inner` is the screen. Its radius sits well inside the bezel's, and it
 * carries its own hairline edge so the bezel is legible *as* a bezel instead
 * of looking like padding. That inset is the whole trick; without it all three
 * sizes are the same card at three widths.
 *
 * Deliberately absent, and not an oversight — plan §8.4 plus the §8.9
 * reject-on-sight list: no notch, no Dynamic Island, no camera dot, no speaker
 * grille, no side or home buttons, no home indicator, no status bar with an
 * invented clock or battery, no browser chrome, no URL bar, no traffic lights,
 * no hardware render, no device photography. A frame that resembles a specific
 * handset is both a trademark implication (§8.6) and a fabricated artifact,
 * and frames are where that rule is most often broken.
 */
const FRAME_SIZE: Record<DeviceFrameSize, { outer: string; inner: string }> = {
  // Roundest, and the thickest bezel as a share of width — held in one hand.
  phone: { outer: "rounded-[2.25rem] p-2.5", inner: "rounded-[1.6rem]" },
  // Larger and squarer; more bezel in pixels, less as a share of width.
  tablet: { outer: "rounded-[1.5rem] p-3", inner: "rounded-[0.9rem]" },
  // Squarest: a display, not something carried.
  desktop: { outer: "rounded-[1rem] p-2", inner: "rounded-[0.55rem]" },
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
        // `mock-device-bezel` carries the brand wash and the edge colour:
        // `--card` and `--background` are the same white in light mode, so an
        // untinted bezel is invisible on a white page.
        "flex overflow-hidden border border-border bg-card mock-device-bezel mock-device-frame-shadow",
        style.outer,
        className,
      )}
    >
      <div
        className={cn(
          // `bg-background` separates the screen from the tinted bezel, so the
          // two read as different materials in light and dark alike.
          "flex min-w-0 flex-1 overflow-hidden border border-border bg-background mock-device-screen",
          size === "desktop" && "overflow-x-auto scrollbar-hide",
          style.inner,
        )}
      >
        {children}
      </div>
    </div>
  )
}
