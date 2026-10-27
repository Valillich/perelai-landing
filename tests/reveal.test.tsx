import {createElement} from "react"
import {renderToStaticMarkup} from "react-dom/server"
import {describe, expect, it} from "vitest"
import {Reveal} from "@/components/landing/reveal"

// Entrance motion must never hide content: on iOS Safari the IntersectionObserver
// can fire late or not at all, and SSR markup must stay readable regardless.
describe("Reveal", () => {
  it("renders SSR markup without hiding content via opacity", () => {
    const html = renderToStaticMarkup(
      createElement(Reveal, {delay: 0.5, children: createElement("p", null, "Keep me visible")}),
    )
    expect(html).toContain("Keep me visible")
    expect(html).not.toContain("opacity:0")
    expect(html).not.toContain("opacity: 0")
  })

  it("ignores the deprecated fade flag when hiding would risk invisible content", () => {
    const html = renderToStaticMarkup(
      createElement(Reveal, {fade: true, children: createElement("p", null, "Still visible")}),
    )
    expect(html).toContain("Still visible")
    expect(html).not.toContain("opacity:0")
  })
})
