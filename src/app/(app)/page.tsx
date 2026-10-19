import { Suspense } from "react"
import type { Metadata } from "next"
import type { ProfilePage, WithContext } from "schema-dts"

import { JSON_LD_ID } from "@/config/json-ld"
import { JsonLdScript } from "@/lib/json-ld"
import { absoluteUrl } from "@/lib/utils"
import { About } from "@/features/portfolio/components/about"
import { Education } from "@/features/portfolio/components/education"
import { Experiences } from "@/features/portfolio/components/experiences"
import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import {
  Insights,
  InsightsSkeleton,
} from "@/features/portfolio/components/insights"
import { Moments } from "@/features/portfolio/components/moments"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { SectionDock } from "@/features/portfolio/components/section-dock"
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
          anchor offsets don't leave a gap. Sections stack as one bordered
          column with rounded ends, joined by single hairlines. */}
      <div
        data-slot="layout-headerless"
        className="pt-2 [--header-height:0px] **:data-[slot=icon-tile]:border-none **:data-[slot=icon-tile]:glass-surface **:data-[slot=icon-tile]:ring-0 **:data-[slot=panel]:scroll-mt-2"
      >
        <div className="mx-auto md:max-w-3xl">
          <div className="*:last:rounded-b-2xl *:last:border-b">
            <ProfileHeader />
            <GitHubContributions />
            <SocialLinks />
            <About />
            <TechStack />
            <Experiences />
            <Education />
            <Topics />
            <Suspense fallback={<InsightsSkeleton />}>
              <Insights />
            </Suspense>
          </div>

          <Moments />
        </div>

        <SectionDock />
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
