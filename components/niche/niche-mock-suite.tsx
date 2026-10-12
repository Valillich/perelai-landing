import {
  MockCalendarMonth,
  MockFinanceKpis,
  MockInboxTriage,
} from "@/components/mock"
import type { AppScreenDataset } from "@/lib/app-screen-mock"
import type { MockDataset } from "@/lib/mock-data"

type MockVariant = "calendar" | "finance"

/** Existing beauty compositions stay stable when registry entries are added. */
function mockVariantForNiche(niche: string): MockVariant {
  return niche === "lash-artist" || niche === "hair-salon" ? "finance" : "calendar"
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
