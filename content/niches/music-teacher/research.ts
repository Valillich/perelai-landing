import type { NichePageContent } from "@/content/niches/types"

export const musicTeacherResearch: NichePageContent["research"] = {
  sources: [
    {
      sourceUrl:
        "https://www.reddit.com/r/pianoteachers/comments/1t3mao4/how_do_you_keep_track_of_your_payments/",
      capturedAt: "2026-08-04",
      publishedAt: "2026-05-12",
      sourceKind:
        "Private music teacher discussing payment tracking on Reddit",
      excerpt:
        "I have a spreadsheet where I keep track and mark each student for each month.",
      theme:
        "Monthly tuition payments are tracked student by student in a spreadsheet",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl:
        "https://www.reddit.com/r/MusicTeachers/comments/1q2x3xl/private_lesson_student_management/",
      capturedAt: "2026-08-04",
      publishedAt: "2025-12-10",
      sourceKind:
        "Private music teacher describing a spreadsheet-and-paper workflow on Reddit",
      excerpt:
        "I keep payment records and contact info in Excel … and lesson notes handwritten on paper.",
      theme:
        "Payment records, contact details and lesson notes live in separate systems",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl:
        "https://www.reddit.com/r/pianoteachers/comments/1n8exa1/prepay_discount/",
      capturedAt: "2026-08-04",
      publishedAt: "2025-10-04",
      sourceKind:
        "Private music teacher discussing semester prepayment on Reddit",
      excerpt: "I really don't enjoy sending reminders again and again.",
      theme: "Repeated payment reminders add recurring studio administration",
      evidenceClass: "independent_forum",
    },
    {
      sourceUrl:
        "https://www.mymusicstaff.com/success-stories/tyler-carlisle-carlisle-music-studio/",
      capturedAt: "2026-08-04",
      publishedAt: "2026-05-15",
      sourceKind: "Named music teacher in a My Music Staff customer story",
      excerpt:
        "Spreadsheets, texting for payments, making phone calls to confirm things.",
      theme:
        "Scheduling, payment collection and confirmations were managed manually",
      evidenceClass: "vendor_hosted_customer",
    },
  ],
  verbatims: [
    {
      phrase:
        "I have a spreadsheet where I keep track and mark each student for each month.",
      sourceUrl:
        "https://www.reddit.com/r/pianoteachers/comments/1t3mao4/how_do_you_keep_track_of_your_payments/",
      theme:
        "Monthly tuition payments are tracked student by student in a spreadsheet",
    },
    {
      phrase:
        "I keep payment records and contact info in Excel … and lesson notes handwritten on paper.",
      sourceUrl:
        "https://www.reddit.com/r/MusicTeachers/comments/1q2x3xl/private_lesson_student_management/",
      theme:
        "Payment records, contact details and lesson notes live in separate systems",
    },
    {
      phrase: "I really don't enjoy sending reminders again and again.",
      sourceUrl:
        "https://www.reddit.com/r/pianoteachers/comments/1n8exa1/prepay_discount/",
      theme: "Repeated payment reminders add recurring studio administration",
    },
  ],
}
