import { TECH_STACK } from "../data/tech-stack"
import type { TechStack as TechStackType } from "../types/tech-stack"
import { Panel, PanelHeader, PanelTitle } from "./panel"
import { PanelTitleCopy } from "./panel-title-copy"

const ID = "stack"

export function TechStack() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Stack</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="flex flex-col">
        {Object.entries(groupByCategory(TECH_STACK)).map(
          ([category, items]) => {
            const categoryId = `${ID}-${category
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")}`

            return (
              <div
                key={category}
                className="grid items-start gap-x-6 gap-y-3 border-b border-line py-5 first:pt-0 last:border-none last:pb-0 sm:grid-cols-[9rem_1fr]"
              >
                <div
                  id={categoryId}
                  className="text-[13px]/8 text-muted-foreground"
                >
                  {category}
                </div>

                <ul
                  aria-labelledby={categoryId}
                  className="flex flex-wrap gap-2"
                >
                  {items.map((item) => (
                    <li key={item.key} className="flex">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener"
                        className="glass-pill inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-[13px]/none font-medium outline-none focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:outline-dashed [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground"
                      >
                        {item.icon}
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          }
        )}
      </div>
    </Panel>
  )
}

function groupByCategory(
  items: TechStackType[]
): Record<string, TechStackType[]> {
  return items.reduce<Record<string, TechStackType[]>>((acc, item) => {
    for (const category of item.categories) {
      ;(acc[category] ??= []).push(item)
    }
    return acc
  }, {})
}
