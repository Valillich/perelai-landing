import React from "react"

interface MarkdownRendererProps {
  content: string
}

function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = []
  // Matches: links [text](url), bold **bold**, code `code`, italic *italic*
  const inlineRegex =
    /(\[(.+?)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)|\*\*(.+?)\*\*|`([^`]+)`|\*([^*]+)\*)/g

  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = inlineRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    if (match[2] && match[3]) {
      // Link [text](url)
      const isExternal = match[3].startsWith("http")
      nodes.push(
        <a
          key={`link-${match.index}`}
          href={match[3]}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
        >
          {match[2]}
        </a>
      )
    } else if (match[4]) {
      // Bold **text**
      nodes.push(
        <strong key={`bold-${match.index}`} className="font-semibold text-foreground">
          {match[4]}
        </strong>
      )
    } else if (match[5]) {
      // Inline code `code`
      nodes.push(
        <code
          key={`code-${match.index}`}
          className="rounded bg-muted px-1.5 py-0.5 text-[14px] font-mono text-foreground"
        >
          {match[5]}
        </code>
      )
    } else if (match[6]) {
      // Italic *text*
      nodes.push(
        <em key={`italic-${match.index}`} className="italic">
          {match[6]}
        </em>
      )
    }

    lastIndex = inlineRegex.lastIndex
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

export function LegalMarkdownRenderer({ content }: MarkdownRendererProps) {
  const lines = content.split(/\r?\n/)
  const elements: React.ReactNode[] = []

  let i = 0
  let keyIndex = 0

  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()

    if (!trimmed) {
      i++
      continue
    }

    // Horizontal Rule
    if (trimmed === "---" || trimmed === "***" || trimmed === "___") {
      elements.push(<hr key={`hr-${keyIndex++}`} className="my-8 border-border" />)
      i++
      continue
    }

    // Heading 1
    if (trimmed.startsWith("# ")) {
      elements.push(
        <h1
          key={`h1-${keyIndex++}`}
          className="mt-8 mb-4 text-[32px] font-bold tracking-tight text-foreground sm:text-[40px] print:text-[28px]"
        >
          {renderInline(trimmed.slice(2))}
        </h1>
      )
      i++
      continue
    }

    // Heading 2
    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${keyIndex++}`}
          className="mt-10 mb-4 text-[22px] font-semibold tracking-tight text-foreground sm:text-[26px] print:mt-6 print:text-[20px] print:break-after-avoid"
        >
          {renderInline(trimmed.slice(3))}
        </h2>
      )
      i++
      continue
    }

    // Heading 3
    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3
          key={`h3-${keyIndex++}`}
          className="mt-6 mb-3 text-[18px] font-semibold tracking-tight text-foreground sm:text-[20px] print:text-[16px] print:break-after-avoid"
        >
          {renderInline(trimmed.slice(4))}
        </h3>
      )
      i++
      continue
    }

    // Blockquote
    if (trimmed.startsWith("> ")) {
      const quoteLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""))
        i++
      }
      elements.push(
        <blockquote
          key={`quote-${keyIndex++}`}
          className="my-6 rounded-r-xl border-l-4 border-brand-600/40 bg-brand-600/5 px-5 py-4 text-[15px] leading-relaxed text-foreground"
        >
          {quoteLines.map((qLine, idx) => (
            <p key={idx} className={idx > 0 ? "mt-2" : ""}>
              {renderInline(qLine)}
            </p>
          ))}
        </blockquote>
      )
      continue
    }

    // Tables
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const tableRows: string[][] = []
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
        const rowLine = lines[i].trim()
        // Skip separator row |---|---|
        if (!/^\|(?:\s*[-:]+\s*\|)+$/.test(rowLine)) {
          const cells = rowLine
            .slice(1, -1)
            .split("|")
            .map((c) => c.trim())
          tableRows.push(cells)
        }
        i++
      }

      if (tableRows.length > 0) {
        const headerRow = tableRows[0]
        const dataRows = tableRows.slice(1)

        elements.push(
          <div key={`table-${keyIndex++}`} className="my-6 overflow-x-auto print:overflow-visible">
            <table className="w-full border-collapse text-left text-[14px]">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  {headerRow.map((header, idx) => (
                    <th key={idx} className="px-4 py-3 font-semibold text-foreground">
                      {renderInline(header)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {dataRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-muted/30">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 text-muted-foreground align-top">
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
      continue
    }

    // Code block ```
    if (trimmed.startsWith("```")) {
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i])
        i++
      }
      if (i < lines.length) i++ // skip closing ```
      elements.push(
        <pre
          key={`codeblock-${keyIndex++}`}
          className="my-6 overflow-x-auto rounded-xl bg-muted/80 p-4 font-mono text-[13px] leading-relaxed text-foreground print:border print:border-border"
        >
          <code>{codeLines.join("\n")}</code>
        </pre>
      )
      continue
    }

    // Unordered list (- or *)
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const items: string[] = []
      while (i < lines.length) {
        const itemLine = lines[i].trim()
        if (itemLine.startsWith("- ") || itemLine.startsWith("* ")) {
          items.push(itemLine.slice(2).trim())
          i++
        } else if (itemLine && lines[i].startsWith("  ") && items.length > 0) {
          // Indented list continuation line
          items[items.length - 1] += ` ${itemLine}`
          i++
        } else {
          break
        }
      }

      elements.push(
        <ul key={`ul-${keyIndex++}`} className="my-4 ml-6 list-disc space-y-2 text-[15px] leading-relaxed text-muted-foreground">
          {items.map((item, idx) => (
            <li key={idx} className="pl-1">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      )
      continue
    }

    // Ordered list (1. 2. etc)
    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = []
      while (i < lines.length) {
        const itemLine = lines[i].trim()
        const match = itemLine.match(/^\d+\.\s(.*)/)
        if (match) {
          items.push(match[1].trim())
          i++
        } else if (itemLine && lines[i].startsWith("   ") && items.length > 0) {
          items[items.length - 1] += ` ${itemLine}`
          i++
        } else {
          break
        }
      }

      elements.push(
        <ol key={`ol-${keyIndex++}`} className="my-4 ml-6 list-decimal space-y-2 text-[15px] leading-relaxed text-muted-foreground">
          {items.map((item, idx) => (
            <li key={idx} className="pl-1">
              {renderInline(item)}
            </li>
          ))}
        </ol>
      )
      continue
    }

    // Regular Paragraph
    const paragraphLines: string[] = []
    while (i < lines.length) {
      const current = lines[i]
      const currentTrimmed = current.trim()
      if (
        !currentTrimmed ||
        currentTrimmed.startsWith("#") ||
        currentTrimmed.startsWith(">") ||
        currentTrimmed.startsWith("- ") ||
        currentTrimmed.startsWith("* ") ||
        /^\d+\.\s/.test(currentTrimmed) ||
        currentTrimmed.startsWith("```") ||
        (currentTrimmed.startsWith("|") && currentTrimmed.endsWith("|")) ||
        currentTrimmed === "---"
      ) {
        break
      }
      paragraphLines.push(currentTrimmed)
      i++
    }

    if (paragraphLines.length > 0) {
      elements.push(
        <p
          key={`p-${keyIndex++}`}
          className="my-4 text-[16px] leading-relaxed text-muted-foreground print:text-[14px] print:text-black"
        >
          {renderInline(paragraphLines.join(" "))}
        </p>
      )
    }
  }

  return <div className="space-y-1">{elements}</div>
}
