"use client"

import { use, useEffect, useRef } from "react"
import { formatNumber } from "@/utils/format"
import {
  addDays,
  differenceInCalendarDays,
  format,
  formatISO,
  getDay,
  parseISO,
  subDays,
} from "date-fns"
import { LoaderIcon } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import type { Activity } from "@/registry/components/contribution-graph"

type Week = Array<Activity | undefined>

const CELL_SIZE = 12
const CELL_GAP = 2
const WEEK_WIDTH = CELL_SIZE + CELL_GAP
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""]

export function GitHubContributionGraph({
  contributions,
}: {
  contributions: Promise<Activity[]>
}) {
  const data = use(contributions)
  const scrollRef = useRef<HTMLDivElement>(null)

  // On narrow screens the graph overflows; start at the most recent weeks.
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollLeft = el.scrollWidth
  }, [])

  if (data.length === 0) {
    return null
  }

  const weeks = groupByWeeks(data)
  const monthLabels = getMonthLabels(weeks)
  const totalCount = data.reduce((sum, activity) => sum + activity.count, 0)

  return (
    <figure>
      <header className="mb-8 flex flex-col gap-2">
        <h2 className="font-display text-[clamp(1.7rem,5vw,2rem)]/[1.2] tracking-[-0.3px]">
          Contributions
        </h2>
        <figcaption className="text-[13px]/none text-muted-foreground tabular-nums">
          <strong className="font-medium text-foreground">
            {formatNumber(totalCount)}
          </strong>{" "}
          contributions in the last year
        </figcaption>
      </header>

      <div className="flex items-start gap-2" aria-hidden>
        <div
          className="mt-6 grid w-7 shrink-0 gap-0.5 text-right text-xs/3 text-muted-foreground"
          style={{ gridTemplateRows: `repeat(7, ${CELL_SIZE}px)` }}
        >
          {DAY_LABELS.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>

        <div
          ref={scrollRef}
          className="-m-0.5 no-scrollbar min-w-0 flex-1 scroll-fade-x overflow-x-auto overflow-y-hidden p-0.5"
        >
          <div
            className="relative mb-2 h-4"
            style={{ width: weeks.length * WEEK_WIDTH }}
          >
            {monthLabels.map(({ weekIndex, label }) => (
              <span
                key={weekIndex}
                className="absolute text-xs/4 whitespace-nowrap text-muted-foreground"
                style={{ left: weekIndex * WEEK_WIDTH }}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex gap-0.5">
            {weeks.map((week, weekIndex) => (
              <div
                key={weekIndex}
                className="grid shrink-0 gap-0.5"
                style={{ gridTemplateRows: `repeat(7, ${CELL_SIZE}px)` }}
              >
                {week.map((activity, dayIndex) =>
                  activity ? (
                    <Cell key={activity.date} activity={activity} />
                  ) : (
                    <span key={dayIndex} />
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  )
}

function Cell({ activity }: { activity: Activity }) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <span
            data-level={activity.level}
            className="relative block size-3 rounded-[3px] contribution-cell transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:z-1 hover:scale-130 motion-reduce:transition-none motion-reduce:hover:scale-100"
          />
        }
      />
      <TooltipContent className="font-sans">
        <p>
          {activity.count} contribution{activity.count === 1 ? "" : "s"} on{" "}
          {format(parseISO(activity.date), "d MMM yyyy")}
        </p>
      </TooltipContent>
    </Tooltip>
  )
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-45 w-full items-center justify-center">
      <LoaderIcon className="animate-spin text-muted-foreground" />
    </div>
  )
}

function groupByWeeks(activities: Activity[]): Week[] {
  const sorted = [...activities].sort((a, b) => a.date.localeCompare(b.date))
  const byDate = new Map(sorted.map((activity) => [activity.date, activity]))

  const first = parseISO(sorted[0].date)
  const last = parseISO(sorted[sorted.length - 1].date)
  // Weeks start on Sunday so rows line up with the day labels.
  const start = subDays(first, getDay(first))
  const totalDays = differenceInCalendarDays(last, start) + 1

  const days: Array<Activity | undefined> = Array.from(
    { length: totalDays },
    (_, i) => {
      const day = addDays(start, i)
      if (day < first) return undefined
      const date = formatISO(day, { representation: "date" })
      return byDate.get(date) ?? { date, count: 0, level: 0 }
    }
  )

  return Array.from({ length: Math.ceil(days.length / 7) }, (_, i) =>
    days.slice(i * 7, i * 7 + 7)
  )
}

function getMonthLabels(weeks: Week[]) {
  const labels: { weekIndex: number; label: string }[] = []
  let previousMonth = -1

  weeks.forEach((week, weekIndex) => {
    const firstDay = week.find(Boolean)
    if (!firstDay) return

    const date = parseISO(firstDay.date)
    const month = date.getMonth()
    if (month === previousMonth) return
    previousMonth = month

    labels.push({ weekIndex, label: format(date, "MMM") })
  })

  // A partial first month leaves too little room and collides with the next.
  if (labels.length > 1 && labels[1].weekIndex - labels[0].weekIndex < 3) {
    labels.shift()
  }

  return labels
}
