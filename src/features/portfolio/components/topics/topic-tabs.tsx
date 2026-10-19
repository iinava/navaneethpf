"use client"

import { useId, useState } from "react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export type TopicTab = {
  value: string
  label: string
  icon?: React.ReactNode
}

export type TopicItem = {
  key: string
  tab: string
  node: React.ReactNode
}

const MAX_VISIBLE = 6

const pillClassName =
  "glass-pill inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-sm/none font-medium outline-none select-none focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:outline-dashed [&_svg]:size-4 [&_svg]:shrink-0"

export function TopicTabs({
  tabs,
  items,
}: {
  tabs: TopicTab[]
  items: TopicItem[]
}) {
  const id = useId()
  const [active, setActive] = useState("all")
  const [expanded, setExpanded] = useState(false)

  const filtered =
    active === "all" ? items : items.filter((item) => item.tab === active)
  const visible = expanded ? filtered : filtered.slice(0, MAX_VISIBLE)

  return (
    <>
      <div
        role="tablist"
        aria-label="Filter topics"
        className="mb-6 flex flex-wrap gap-2"
      >
        {[{ value: "all", label: "All" }, ...tabs].map((tab) => {
          const isActive = tab.value === active

          return (
            <button
              key={tab.value}
              type="button"
              role="tab"
              id={`${id}-tab-${tab.value}`}
              aria-selected={isActive}
              aria-controls={`${id}-panel`}
              onClick={() => {
                setActive(tab.value)
                setExpanded(false)
              }}
              className={cn(
                pillClassName,
                isActive
                  ? "glass-pill-primary"
                  : "[&_svg]:text-muted-foreground"
              )}
            >
              {"icon" in tab && tab.icon}
              {tab.label}
            </button>
          )
        })}
      </div>

      <ul
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${active}`}
        className="-mx-2 flex flex-col gap-1"
      >
        {visible.map((item) => (
          <li key={item.key}>{item.node}</li>
        ))}
      </ul>

      {filtered.length > MAX_VISIBLE && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
            className={pillClassName}
          >
            {expanded ? "Show less" : "Show more"}
            <ChevronDownIcon
              className={cn(
                "text-muted-foreground transition-transform",
                expanded && "rotate-180"
              )}
            />
          </button>
        </div>
      )}
    </>
  )
}
