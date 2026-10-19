import { cn } from "@/lib/utils"
import { USER } from "@/features/portfolio/data/user"

import { HandwrittenArrow, HandwrittenNote } from "./handwritten-note"
import { HeroThemeSwitcher } from "./hero-theme-switcher"
import { LetsTalkButton } from "./lets-talk-button"
import { PronounceMyName } from "./pronounce-my-name"
import { SparkleBackdrop } from "./sparkle-backdrop"
import { VerifiedIcon } from "./verified-icon"

const TAGLINE = {
  highlight: "Building scalable products",
  rest: "with intentional code.",
}

const pillClassName =
  "glass-pill inline-flex h-9 items-center rounded-full px-3 text-sm/none font-medium outline-none select-none focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:outline-dashed"

export function ProfileHeader() {
  const job = USER.jobs[0]

  return (
    <section
      id="profile"
      className="screen-line-top screen-line-bottom relative scroll-mt-2 border-x border-line"
    >
      <SparkleBackdrop className="[&>canvas]:mask-[radial-gradient(60%_85%_at_88%_35%,black,transparent)] [&>canvas]:opacity-45">
        <div className="px-5 pt-6 pb-10 sm:px-6">
          <div className="pointer-events-none relative glass-pill size-10 overflow-hidden rounded-[10px] p-[2.5px] sm:size-12 sm:rounded-xl sm:p-[3px]">
            <img
              className="size-full rounded-[7.5px] object-cover select-none sm:rounded-[9px]"
              src={USER.avatar}
              alt={`${USER.displayName}'s avatar`}
              fetchPriority="high"
            />
          </div>

          <div className="mt-3 flex items-center gap-1.5 sm:mt-4">
            <h1 className="text-base font-medium sm:text-[17px]">
              {USER.displayName}
            </h1>

            <VerifiedIcon
              className="size-3.5 text-info select-none"
              aria-hidden
            />

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          <p className="mt-0.5 text-xs text-muted-foreground">
            {job ? `${job.title} at ${job.company}` : USER.jobTitle}
          </p>

          <h2 className="mt-10 font-display text-[min(2.3rem,calc(11.9vw-7.86px))]/[1.1] tracking-[-0.3px] text-balance sm:mt-16 sm:text-[clamp(2.3rem,5vw,3rem)]/[1.1]">
            {/* A blurred copy behind the first line gives it a soft glow. */}
            <span className="relative inline-block">
              {TAGLINE.highlight}
              <span
                className="pointer-events-none absolute inset-0 -z-1 opacity-60 blur-[20px] select-none"
                aria-hidden
              >
                {TAGLINE.highlight}
              </span>
            </span>
            <br />
            {TAGLINE.rest}
          </h2>

          <div className="mt-6 flex flex-wrap gap-2">
            <LetsTalkButton
              emailB64={USER.emailB64}
              className={cn(pillClassName, "glass-pill-primary")}
            >
              Let&apos;s talk
            </LetsTalkButton>

            <a
              href={USER.website}
              target="_blank"
              rel="noopener"
              className={pillClassName}
            >
              View GitHub
            </a>
          </div>
        </div>
      </SparkleBackdrop>

      <HeroThemeSwitcher className="absolute top-6 right-5 sm:hidden" />

      <HandwrittenNote
        className="right-full bottom-14 mr-4 hidden w-20 flex-col items-end lg:flex"
        aria-hidden
      >
        <span className="-rotate-6">say hi!</span>
        <HandwrittenArrow className="size-7 translate-x-4 -scale-x-100 -rotate-12" />
      </HandwrittenNote>
    </section>
  )
}
