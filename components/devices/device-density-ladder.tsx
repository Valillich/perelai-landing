import { DeviceFrame } from "@/components/devices/device-frame"
import { MockDesktopShell } from "@/components/mock/MockDesktopShell"
import { MockMobileShell } from "@/components/mock/MockMobileShell"
import { cn } from "@/lib/cn"
import type { AppScreenDataset } from "@/lib/app-screen-mock"

interface DeviceDensityLadderProps {
  /** One dataset drives every chrome density — different data would read as separate products. */
  dataset: AppScreenDataset
  labels: {
    /**
     * The one sentence that carries the message to assistive technology. It is
     * rendered outside the decorative subtree; everything inside is
     * `aria-hidden`, so a screen-reader user gets this, not a table of fake rows.
     */
    summary: string
    paid: string
    pending: string
    /** Defaults to the generated, localized "Example data" caption. */
    caption?: string
  }
  className?: string
}

/**
 * One workspace, one dataset, at every density the product actually renders:
 * phone (1-pane + bottom nav), tablet (82px rail + 2-pane list/detail), and
 * desktop (82px rail + 2-pane / 3-pane wide contextual pane).
 *
 * The composition is a single object rather than a row of device pictures: the
 * desktop workspace is the ground plane and the tablet and phone sit on its
 * baseline in front of it. What separates each view is the navigation chrome —
 * the 82px rail against the bottom bar — which is the responsive claim stated
 * pre-attentively, before a word of copy is read.
 *
 * Everything is driven by **container** queries at the product's own
 * thresholds, so the same component composes inside the homepage section,
 * inside `/install`, and inside `next/og`:
 *
 * - below `64rem` (the app's `DESKTOP_MIN_WIDTH_REM`) the ladder stacks phone →
 *   tablet → desktop, keeping each frame's minimum width inside a scroll
 *   container rather than being squeezed to illegible dimensions;
 * - from `64rem` every chrome view composes on one baseline;
 * - from `85rem` (`WIDE_DESKTOP_MIN_WIDTH_REM`, 1360px) the desktop workspace
 *   gains its third contextual pane, exactly as `docs/device-capture-manifest.md`
 *   §2 recorded in the real app;
 * - the workspace caps at 1600px, like `DesktopWorkspace`.
 *
 * Deliberately absent: perspective, tilt, glow, gradient backdrop, hardware
 * likeness, fake browser chrome, and any second rotating element — the homepage
 * hero already owns the one auto-advancing component.
 */
export function DeviceDensityLadder({
  dataset,
  labels,
  className,
}: DeviceDensityLadderProps) {
  const caption = labels.caption ?? dataset.base.exampleCaption

  return (
    <figure className={cn("@container", className)}>
      <p className="sr-only">{labels.summary}</p>

      <div className="rounded-[24px] border border-border bg-card/40 p-3 sm:p-4">
        <div className="relative flex flex-col gap-4 @[64rem]:block">
          {/*
            1. Phone density: single-pane focused layout with bottom navigation bar.
            Stacks first on narrow containers; on wide containers it sits on the
            desktop baseline at the front right.
          */}
          <div className="mx-auto w-full max-w-[320px] @[64rem]:absolute @[64rem]:bottom-0 @[64rem]:right-0 @[64rem]:top-10 @[64rem]:z-20 @[64rem]:mx-0 @[64rem]:w-[320px] @[64rem]:max-w-none">
            <DeviceFrame size="phone" className="h-full">
              <MockMobileShell
                dataset={dataset}
                paidLabel={labels.paid}
                pendingLabel={labels.pending}
                className="h-full"
              />
            </DeviceFrame>
          </div>


          {/*
            2. Desktop density: 82px desktop rail + full two-pane / wide 3-pane workspace.
            Spans the full container width as the ground plane composition.
          */}
          <div className="overflow-x-auto @[64rem]:overflow-visible">
            <DeviceFrame
              size="desktop"
              className="min-w-[64rem] @[64rem]:w-full @[64rem]:min-w-0"
            >
              <MockDesktopShell
                dataset={dataset}
                paidLabel={labels.paid}
                pendingLabel={labels.pending}
                contextualPane={true}
              />
            </DeviceFrame>
          </div>
        </div>

        {/* One object, one caption — inside the frame, not floating near it. */}
        <figcaption className="mt-3 text-center text-[12px] font-medium text-subtle-text">
          {caption}
        </figcaption>
      </div>
    </figure>
  )
}
