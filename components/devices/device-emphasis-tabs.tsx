"use client"

import {
  createContext,
  useContext,
  useId,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react"
import { cn } from "@/lib/cn"

interface DeviceEmphasisTabsContextValue {
  activeId: string
  setActiveId: (id: string) => void
  baseId: string
}

const DeviceEmphasisTabsContext =
  createContext<DeviceEmphasisTabsContextValue | null>(null)

function useDeviceEmphasisTabs() {
  const ctx = useContext(DeviceEmphasisTabsContext)
  if (!ctx) {
    throw new Error("DeviceEmphasisTabs compound parts require a provider")
  }
  return ctx
}

interface DeviceEmphasisTabsProps {
  items: ReadonlyArray<{ id: string; label: string }>
  defaultId: string
  /** Accessible name for the tablist. */
  label: string
  onSelect?: (id: string) => void
  children: ReactNode
  className?: string
}

/**
 * Tabs that keep every panel in the DOM for crawlers and no-JS readers, but
 * only the active panel is shown. Selecting a tab updates aria-selected and
 * which panel is visible.
 */
export function DeviceEmphasisTabs({
  items,
  defaultId,
  label,
  onSelect,
  children,
  className,
}: DeviceEmphasisTabsProps) {
  const baseId = useId()
  const [activeId, setActiveId] = useState(defaultId)

  const handleSelect = (id: string) => {
    setActiveId(id)
    onSelect?.(id)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = items.findIndex((item) => item.id === activeId)
    if (index < 0) return

    let next = index
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (index + 1) % items.length
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (index - 1 + items.length) % items.length
    } else if (event.key === "Home") {
      next = 0
    } else if (event.key === "End") {
      next = items.length - 1
    } else {
      return
    }

    event.preventDefault()
    const nextId = items[next]!.id
    handleSelect(nextId)
    document.getElementById(`${baseId}-tab-${nextId}`)?.focus()
  }

  return (
    <DeviceEmphasisTabsContext.Provider value={{ activeId, setActiveId: handleSelect, baseId }}>
      <div className={cn("space-y-6", className)}>
        <div
          role="tablist"
          aria-label={label}
          onKeyDown={onKeyDown}
          className="flex flex-wrap gap-2"
        >
          {items.map((item) => {
            const selected = item.id === activeId
            return (
              <button
                key={item.id}
                id={`${baseId}-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => handleSelect(item.id)}
                className={cn(
                  "min-h-11 rounded-full border px-4 py-2 text-[14px] font-semibold transition-colors",
                  selected
                    ? "border-brand-600/30 bg-brand-600/10 text-brand-600"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </button>
            )
          })}
        </div>
        {children}
      </div>
    </DeviceEmphasisTabsContext.Provider>
  )
}

interface DeviceEmphasisPanelProps {
  id: string
  children: ReactNode
  className?: string
}

/** Panel stays in the DOM; inactive panels are hidden, not unmounted. */
export function DeviceEmphasisPanel({
  id,
  children,
  className,
}: DeviceEmphasisPanelProps) {
  const { activeId, baseId } = useDeviceEmphasisTabs()
  const active = id === activeId

  return (
    <div
      id={`${baseId}-panel-${id}`}
      role="tabpanel"
      aria-labelledby={`${baseId}-tab-${id}`}
      hidden={!active}
      data-active={active ? "true" : "false"}
      className={cn(
        "rounded-[20px] border border-border bg-background p-4 sm:p-5 overflow-auto",
        active && "ring-1 ring-brand-600/20",
        className,
      )}
    >
      {children}
    </div>
  )
}
