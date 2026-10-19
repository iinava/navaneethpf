import { urlToName } from "@/utils/url"
import {
  LinkIcon,
  MapPinIcon,
  MarsIcon,
  NonBinaryIcon,
  VenusIcon,
} from "lucide-react"

import { Markdown } from "@/components/markdown"
import { USER } from "@/features/portfolio/data/user"
import type { User } from "@/features/portfolio/types/user"

import { CurrentLocalTimeItem } from "./overview/current-local-time-item"
import { EmailItem } from "./overview/email-item"
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./overview/intro-item"
import { JobItem } from "./overview/job-item"
import { PhoneItem } from "./overview/phone-item"
import { Panel } from "./panel"

export function About() {
  return (
    <Panel id="about">
      <h2 className="sr-only">About</h2>

      <div className="typeset typeset-description text-[15px]/relaxed">
        <Markdown>{toParagraphs(USER.about)}</Markdown>
      </div>

      <div className="mt-8 grid gap-x-4 gap-y-3 sm:grid-cols-2">
        {USER.jobs.map((job) => (
          <JobItem
            key={`${job.title}-${job.company}`}
            title={job.title}
            company={job.company}
            website={job.website}
            experienceId={job.experienceId}
          />
        ))}

        <IntroItem>
          <IntroItemIcon>
            <MapPinIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
              aria-label={`Location: ${USER.address}`}
            >
              {USER.address}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        <CurrentLocalTimeItem timeZone={USER.timeZone} />

        <PhoneItem phoneNumberB64={USER.phoneNumberB64} />

        <EmailItem emailB64={USER.emailB64} />

        <IntroItem>
          <IntroItemIcon>
            <LinkIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href={USER.website}
              aria-label={`Personal website: ${urlToName(USER.website)}`}
            >
              {urlToName(USER.website)}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        <IntroItem>
          <IntroItemIcon>{getGenderIcon(USER.gender)}</IntroItemIcon>
          <IntroItemContent aria-label={`Pronouns: ${USER.pronouns}`}>
            {USER.pronouns}
          </IntroItemContent>
        </IntroItem>
      </div>
    </Panel>
  )
}

// `about` is authored as a bullet list; the redesign reads it as prose.
function toParagraphs(markdown: string) {
  return markdown
    .split("\n")
    .map((line) => line.replace(/^\s*-\s+/, "").trim())
    .filter(Boolean)
    .join("\n\n")
}

function getGenderIcon(gender: User["gender"]) {
  switch (gender) {
    case "male":
      return <MarsIcon />
    case "female":
      return <VenusIcon />
    case "non-binary":
      return <NonBinaryIcon />
  }
}
