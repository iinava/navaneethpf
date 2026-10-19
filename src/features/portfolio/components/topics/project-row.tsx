import Image from "next/image"
import { addQueryParams } from "@/utils/url"
import { ArrowUpRightIcon, BoxIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { Tag } from "@/components/ui/tag"
import {
  Collapsible,
  CollapsibleChevronsUpDownIcon,
} from "@/components/base/collapsible-animated"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import { Markdown } from "@/components/markdown"

import type { Project } from "../../types/projects"
import {
  TopicActionCircle,
  topicRowClassName,
  TopicText,
  TopicThumbnail,
} from "./topic-row"

export function ProjectRow({ project }: { project: Project }) {
  const { start, end } = project.period
  const period = !end
    ? `${start} — Present`
    : end === start
      ? start
      : `${start} — ${end}`

  return (
    <Collapsible defaultOpen={project.isExpanded}>
      <div className="flex items-center gap-2">
        <CollapsibleTrigger className={topicRowClassName}>
          <TopicThumbnail>
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt=""
                fill
                sizes="100px"
                className="object-cover"
              />
            ) : project.logo ? (
              <Image
                src={project.logo}
                alt=""
                width={28}
                height={28}
                className="size-7"
                unoptimized
              />
            ) : (
              (project.icon ?? <BoxIcon />)
            )}
          </TopicThumbnail>

          <TopicText title={project.title} subtitle={period} />

          <span className="shrink-0 text-muted-foreground [&_svg]:size-4">
            <CollapsibleChevronsUpDownIcon duration={0.15} />
          </span>
        </CollapsibleTrigger>

        <a
          href={addQueryParams(project.link, UTM_PARAMS)}
          target="_blank"
          rel="noopener"
          aria-label={`Open ${project.title}`}
          className="group/topic mr-2 rounded-full outline-none focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:outline-dashed"
        >
          <TopicActionCircle>
            <ArrowUpRightIcon />
          </TopicActionCircle>
        </a>
      </div>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-4 pt-2 pr-2 pb-4 pl-2 sm:pl-[124px]">
          {project.description && (
            <div className="typeset typeset-description">
              <Markdown>{project.description}</Markdown>
            </div>
          )}

          {project.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {project.skills.map((skill) => (
                <li key={skill} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
