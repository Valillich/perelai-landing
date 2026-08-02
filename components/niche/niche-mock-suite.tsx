import {
  MockCalendarMonth,
  MockFinanceKpis,
  MockInboxTriage,
} from "@/components/mock"
import { NICHE_PAGES } from "@/config/niche-pages"
import type { AppScreenDataset } from "@/lib/app-screen-mock"
import type { MockDataset } from "@/lib/mock-data"

type MockVariant = "calendar" | "finance"

/**
 * Stable per-niche hero mock: even registry index → calendar + inbox,
 * odd → finance KPIs. Order in `NICHE_PAGES` is the source of truth.
 */
function mockVariantForNiche(niche: string): MockVariant {
  const index = NICHE_PAGES.findIndex((page) => page.niche === niche)
  return index % 2 === 0 ? "calendar" : "finance"
}

/**
 * Hero mock for niche pages: either the calendar + inbox pair, or finance
 * KPIs alone — one composition per niche, never all three together.
 */
export function NicheMockSuite({
  niche,
  dataset,
  screenDataset,
}: {
  niche: string
  dataset: MockDataset
  screenDataset: AppScreenDataset
}) {
  if (mockVariantForNiche(niche) === "finance") {
    return <MockFinanceKpis dataset={screenDataset} />
  }

  // Calendar slightly wider than inbox: seven day columns need the room;
  // inbox cards read fine in a narrower column. Below `lg` everything stacks.
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <MockCalendarMonth dataset={screenDataset} />
      <MockInboxTriage dataset={dataset} />
    </div>
  )
}
