import { getComponentDocs } from "@/features/doc/data/documents"
import { PROJECTS } from "@/features/portfolio/data/projects"

import { Panel } from "../panel"
import { ComponentRow } from "./component-row"
import { ProjectRow } from "./project-row"
import { COMPONENTS_TAB_ICON, PROJECTS_TAB_ICON } from "./tab-icons"
import type { TopicItem } from "./topic-tabs"
import { TopicTabs } from "./topic-tabs"

const ID = "topics"

export function Topics() {
  const components = [...getComponentDocs()].sort(
    (a, b) =>
      new Date(b.metadata.createdAt).getTime() -
      new Date(a.metadata.createdAt).getTime()
  )

  const items: TopicItem[] = [
    ...PROJECTS.map((project) => ({
      key: `project-${project.id}`,
      tab: "projects",
      node: <ProjectRow project={project} />,
    })),
    ...components.map((doc) => ({
      key: `component-${doc.slug}`,
      tab: "components",
      node: <ComponentRow doc={doc} />,
    })),
  ]

  return (
    <Panel id={ID} className="px-5 pt-10 pb-12 sm:px-6">
      <h2 className="mb-8 font-display text-[clamp(1.7rem,5vw,2rem)]/[1.2] tracking-[-0.3px]">
        <a href={`#${ID}`}>Topics</a>
      </h2>

      <TopicTabs
        tabs={[
          {
            value: "components",
            label: "Components",
            icon: COMPONENTS_TAB_ICON,
          },
          { value: "projects", label: "Projects", icon: PROJECTS_TAB_ICON },
        ]}
        items={items}
      />
    </Panel>
  )
}
