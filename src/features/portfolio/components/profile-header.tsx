import { SpotlightLogo } from "@/registry/transformed/components/spotlight-logo"
import { USER } from "@/features/portfolio/data/user"

import { FlipSentences } from "./flip-sentences"
import { HandwrittenArrow, HandwrittenNote } from "./handwritten-note"
import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom grid grid-cols-[auto_1fr] overflow-y-clip border-x border-line">
      {/* The mark spans the full width so the identity row below reads as part
          of the same block; its own width is capped so it stays a figure
          rather than a banner. */}
      <figure className="relative col-span-2 p-2 sm:p-4">
        <div className="mx-auto w-full max-w-sm">
          <SpotlightLogo />
        </div>

        {/* w-36 needs ~1088px before the gutter can hold it without clipping,
            and the mark ignores coarse pointers, so nothing to annotate there. */}
        <HandwrittenNote
          className="right-4 bottom-16 hidden w-36 flex-col items-start pointer-fine:xl:flex"
          aria-hidden
        >
          <HandwrittenArrow className="-scale-x-100 -rotate-6" />
          <span className="ml-1 -rotate-6">
            follows your cursor
            <span className="block" />
            click for a sound
          </span>
        </HandwrittenNote>

        <figcaption className="pointer-events-none absolute right-4 bottom-4 text-sm leading-none tracking-wide text-[color-mix(in_oklab,var(--muted-foreground)_60%,var(--background))] tabular-nums select-none sm:right-6 sm:bottom-6">
          Fig. 1.
        </figcaption>
      </figure>

      <div className="screen-line-top border-r border-line">
        <div className="relative mx-0.5 my-0.75 size-30 min-[24rem]:size-32 sm:size-40">
          <img
            className="size-full rounded-md object-cover select-none"
            src={USER.avatar}
            alt={`${USER.displayName}'s avatar`}
            fetchPriority="high"
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-md inset-ring-1 inset-ring-foreground/10"
            aria-hidden
          />
        </div>
      </div>

      <div className="flex flex-col justify-end border-t border-line">
        <div className="flex items-center gap-2 pl-4">
          <h1 className="-translate-y-px text-[2rem]/none font-medium tracking-tight">
            {USER.displayName}
          </h1>

          <VerifiedIcon className="size-4.5 select-none" aria-hidden />

          {USER.namePronunciationUrl && (
            <PronounceMyName namePronunciationUrl={USER.namePronunciationUrl} />
          )}
        </div>

        <FlipSentences className="h-12.5 border-t border-line py-1 pl-4 sm:h-9">
          {USER.flipSentences}
        </FlipSentences>
      </div>
    </div>
  )
}
