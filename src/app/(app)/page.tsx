import { Suspense } from "react"
import type { Metadata } from "next"
import type { ProfilePage, WithContext } from "schema-dts"

import { JSON_LD_ID } from "@/config/json-ld"
import { JsonLdScript } from "@/lib/json-ld"
import { absoluteUrl, cn } from "@/lib/utils"
import { Education } from "@/features/portfolio/components/education"
import { Experiences } from "@/features/portfolio/components/experiences"
import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import { Hello } from "@/features/portfolio/components/hello"
import {
  Insights,
  InsightsSkeleton,
} from "@/features/portfolio/components/insights"
import { Moments } from "@/features/portfolio/components/moments"
import { Overview } from "@/features/portfolio/components/overview"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { SocialLinks } from "@/features/portfolio/components/social-links"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { Topics } from "@/features/portfolio/components/topics"
import { USER } from "@/features/portfolio/data/user"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={getProfilePageJsonLd()} />

      {/* `layout-headerless` hides the site header; zero its height so
          anchor offsets don't leave a gap. */}
      <div
        data-slot="layout-headerless"
        className="[--header-height:0px] [--separator-height:--spacing(8)] **:data-[slot=panel]:scroll-mt-[calc(var(--header-height)+var(--separator-height))] **:data-[slot=panel-title]:font-display **:data-[slot=panel-title]:text-4xl **:data-[slot=panel-title]:font-normal **:data-[slot=panel-title]:tracking-normal"
      >
        <div className="mx-auto md:max-w-3xl">
          <ProfileHeader />
          <Separator />

          <Overview />
          <SocialLinks />
          <GitHubContributions />
          <Separator />

          <Hello />
          <Separator />

          <TechStack />
          <Separator />

          <Experiences />
          <Separator />

          <Education />
          <Separator />

          <Topics />
          <Separator />

          <Suspense fallback={<InsightsSkeleton />}>
            <Insights />
          </Suspense>
          <Separator />

          <Moments />
        </div>
      </div>
    </>
  )
}

function getProfilePageJsonLd(): WithContext<ProfilePage> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl("/"),
    dateCreated: new Date(USER.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    // Reference the Person defined in the WebSite node (rendered globally in
    // the root layout) so both blocks resolve to the same entity.
    mainEntity: { "@id": JSON_LD_ID.person },
  }
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "stripe-divider h-(--separator-height) w-full border-x border-line",
        className
      )}
    >
      {/* <div
        className="absolute -top-1.25 -left-1.25 z-2 flex size-2.25 border bg-background"
        aria-hidden
      />
      <div
        className="absolute -top-1.25 -right-1.25 z-2 flex size-2.25 border bg-background"
        aria-hidden
      /> */}
    </div>
  )
}
