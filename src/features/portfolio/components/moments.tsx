import { cn } from "@/lib/utils"
import {
  HandwrittenArrow,
  HandwrittenNote,
} from "@/features/portfolio/components/handwritten-note"
import { MOMENTS } from "@/features/portfolio/data/moments"
import type { Moment } from "@/features/portfolio/types/moments"

import { SparkleBackdrop } from "./sparkle-backdrop"

const ACCENT_CLASS: Record<Moment["accent"], string> = {
  red: "text-[oklch(0.52_0.17_25)] dark:text-[oklch(0.72_0.13_25)]",
  blue: "text-[oklch(0.45_0.13_262)] dark:text-[oklch(0.74_0.1_255)]",
  green: "text-[oklch(0.45_0.1_160)] dark:text-[oklch(0.76_0.1_160)]",
}

export function Moments() {
  if (MOMENTS.length === 0) {
    return null
  }

  return (
    <section id="moments" className="screen-line-bottom border-x border-line">
      <SparkleBackdrop className="[&>canvas]:mask-[radial-gradient(70%_70%_at_50%_55%,black,transparent)] [&>canvas]:opacity-35">
        <div className="px-5 py-10 sm:px-8">
          <h2 className="mx-auto mb-10 w-4/5 text-center font-display text-[28px]/[31px] tracking-[-0.3px] text-balance sm:mb-8 sm:w-3/5 sm:text-4xl/10">
            Moments captured along the way
          </h2>

          <ul className="grid grid-cols-2 items-end gap-x-2.5 gap-y-4 sm:grid-cols-3 sm:gap-4">
            {MOMENTS.map((moment) => (
              <li key={moment.id}>
                <MomentStamp moment={moment} />
              </li>
            ))}
          </ul>
        </div>
      </SparkleBackdrop>

      <HandwrittenNote
        className="top-32 left-full ml-4 hidden w-20 flex-col items-start pointer-fine:lg:flex"
        aria-hidden
      >
        <span className="rotate-3">hover me</span>
        <HandwrittenArrow className="mt-1 -translate-x-1 rotate-6" />
      </HandwrittenNote>
    </section>
  )
}

function MomentStamp({ moment }: { moment: Moment }) {
  const label = `${moment.title}: ${moment.subtitle}`

  return (
    <figure
      className="relative rotate-(--tilt) transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none pointer-fine:hover:z-10 pointer-fine:hover:scale-105 pointer-fine:hover:rotate-0"
      style={{ "--tilt": `${moment.rotate}deg` } as React.CSSProperties}
    >
      {/* drop-shadow follows the perforated outline; box-shadow would not. */}
      <div className="[filter:drop-shadow(0_1px_1px_#0000001a)_drop-shadow(0_12px_16px_#00000012)] dark:[filter:drop-shadow(0_1px_1px_#00000080)_drop-shadow(0_12px_18px_#00000059)]">
        <div className="stamp-frame px-3 pt-3 pb-2.5">
          <div className="stamp-photo relative mb-2.25 aspect-5/4 overflow-hidden rounded-[1px] bg-muted">
            <img
              src={moment.image}
              alt={label}
              loading="lazy"
              className="size-full object-cover object-[50%_40%]"
            />
          </div>

          <figcaption className="flex flex-col items-center gap-0.5 pb-0.5">
            <span className="font-display text-[15px]/[18px] tracking-[0.04em] uppercase sm:text-[17px]">
              {moment.title}
            </span>
            <span
              className={cn(
                "text-[8px]/[10px] font-semibold tracking-[0.18em] uppercase",
                ACCENT_CLASS[moment.accent]
              )}
            >
              {moment.subtitle}
            </span>
          </figcaption>
        </div>
      </div>
    </figure>
  )
}
