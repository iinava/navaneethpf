import { cn } from "@/lib/utils"

export const topicRowClassName =
  "group/topic flex w-full items-center gap-4 rounded-xl p-2 text-left transition-colors outline-none hover:bg-foreground/[0.03] focus-visible:bg-foreground/[0.03]"

export function TopicThumbnail({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "relative flex h-15 w-21 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-(--tab-bg) text-muted-foreground inset-ring-1 inset-ring-foreground/8 sm:h-17.5 sm:w-25 [&_svg:not([class*='size-'])]:size-6",
        className
      )}
    >
      {children}
    </div>
  )
}

export function TopicText({
  title,
  subtitle,
}: {
  title: string
  subtitle?: React.ReactNode
}) {
  return (
    <div className="min-w-0 flex-1">
      <h3 className="truncate text-[15px] font-medium">{title}</h3>
      {subtitle && (
        <p className="mt-0.5 truncate text-sm text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function TopicActionCircle({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <span
      className={cn(
        "glass-pill flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors group-hover/topic:text-foreground [&_svg]:size-4",
        className
      )}
    >
      {children}
    </span>
  )
}
