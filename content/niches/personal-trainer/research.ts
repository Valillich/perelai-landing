import type { NichePageContent } from "@/content/niches/types"

export const personalTrainerResearch: NichePageContent["research"] = {
  sources: [
    {
      sourceUrl:
        "https://www.reddit.com/r/personaltraining/comments/1cte0mp/client_tracking_sheet/",
      capturedAt: "2026-08-04",
      publishedAt: "2024-05-16",
      sourceKind:
        "Independent personal trainer discussing business administration on Reddit",
      excerpt:
        "I'm starting to lose track of payments and scheduling. I want to start tracking sessions left in a package, scheduling, as well as financial stuff.",
      theme:
        "Payments, package balances and scheduling become hard to track together",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl:
        "https://www.reddit.com/r/personaltraining/comments/1mt68qx/keeping_track_of_finances/",
      capturedAt: "2026-08-04",
      publishedAt: "2025-07-20",
      sourceKind:
        "New personal trainer asking how to track business finances on Reddit",
      excerpt:
        "I'm curious what programs or techniques that you guys use to track expenses, profits, etc. Just a spreadsheet or something more specific?",
      theme:
        "Uncertainty about tracking expenses and profit beyond a spreadsheet",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl: "https://www.trainerize.com/blog/accounting-software/",
      capturedAt: "2026-08-04",
      publishedAt: "2026-06-01",
      sourceKind:
        "ABC Trainerize editorial article about finance software for trainers",
      excerpt: "Tracking it all in a spreadsheet can be a fast lane to burnout",
      theme: "Spreadsheet-based finance tracking is positioned as a growth pain",
      evidenceClass: "competitor_claim",
    },
  ],
  verbatims: [
    {
      phrase:
        "I'm starting to lose track of payments and scheduling. I want to start tracking sessions left in a package, scheduling, as well as financial stuff.",
      sourceUrl:
        "https://www.reddit.com/r/personaltraining/comments/1cte0mp/client_tracking_sheet/",
      theme:
        "Payments, package balances and scheduling become hard to track together",
    },
    {
      phrase:
        "I'm curious what programs or techniques that you guys use to track expenses, profits, etc. Just a spreadsheet or something more specific?",
      sourceUrl:
        "https://www.reddit.com/r/personaltraining/comments/1mt68qx/keeping_track_of_finances/",
      theme:
        "Uncertainty about tracking expenses and profit beyond a spreadsheet",
    },
  ],
}
