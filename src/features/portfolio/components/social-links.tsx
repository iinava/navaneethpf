import { addQueryParams } from "@/utils/url"

import { UTM_PARAMS } from "@/config/site"
import {
  HandwrittenArrow,
  HandwrittenNote,
} from "@/features/portfolio/components/handwritten-note"
import { Panel } from "@/features/portfolio/components/panel"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"

export function SocialLinks() {
  return (
    <Panel className="py-5">
      <h2 className="sr-only">Social links</h2>

      <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
        {SOCIAL_LINKS.map((item) => (
          <li key={item.name} className="flex">
            <a
              href={addQueryParams(item.href, UTM_PARAMS)}
              target="_blank"
              rel="noopener"
              aria-label={`${item.title} (${item.handle})`}
              className="rounded-full px-3 py-2 text-[15px]/none font-medium text-muted-foreground transition-colors outline-none hover:bg-foreground/[0.04] hover:text-foreground focus-visible:outline-[1.5px] focus-visible:outline-ring focus-visible:outline-dashed"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <HandwrittenNote
        className="-top-4 right-full mr-4 hidden w-20 flex-col items-end lg:flex"
        aria-hidden
      >
        <span className="-rotate-6">follow me</span>
        <HandwrittenArrow className="size-7 translate-x-4 -scale-x-100 -rotate-6" />
      </HandwrittenNote>
    </Panel>
  )
}
