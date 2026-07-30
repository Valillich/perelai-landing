import { cn } from "@/lib/cn"
import { isProductStageEnabled } from "@/lib/product-stage"

/**
 * Landing port of the app's ProductStageBadge, down to the violet pill, so the
 * marketing site and the product read as the same thing.
 */
export function ProductStageBadge({
  label,
  className,
}: {
  label: string
  className?: string
}) {
  if (!isProductStageEnabled()) return null

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-violet-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-violet-700 ring-1 ring-inset ring-violet-200",
        "dark:bg-violet-500/10 dark:text-violet-300 dark:ring-violet-400/20",
        className,
      )}
    >
      {label}
    </span>
  )
}
