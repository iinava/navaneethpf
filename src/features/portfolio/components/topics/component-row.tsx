import type { Route } from "next"
import Link from "next/link"
import { format } from "date-fns"

import { ComponentIcon } from "@/features/doc/components/component-icon"
import type { Doc } from "@/features/doc/types/document"

import { COMPONENTS_TAB_ICON } from "./tab-icons"
import {
  TopicActionCircle,
  topicRowClassName,
  TopicText,
  TopicThumbnail,
} from "./topic-row"

export function ComponentRow({ doc }: { doc: Doc }) {
  return (
    <Link
      href={`/components/${doc.slug}` as Route}
      className={topicRowClassName}
    >
      <TopicThumbnail className="text-foreground">
        <ComponentIcon slug={doc.slug} />
      </TopicThumbnail>

      <TopicText
        title={doc.metadata.title}
        subtitle={format(new Date(doc.metadata.createdAt), "MMMM yyyy")}
      />

      <TopicActionCircle>{COMPONENTS_TAB_ICON}</TopicActionCircle>
    </Link>
  )
}
