"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import SparkleGridBackground from "@/components/pixel-perfect/sparkle-grid-background"

/**
 * Sparkle grid sized to its content. Content goes inside as children so the
 * pointer-following cluster tracks the cursor across it. Style the canvas
 * alone through `[&>canvas]:` classes (e.g. opacity, mask) so text on top
 * stays readable.
 */
export function SparkleBackdrop({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const { resolvedTheme } = useTheme()
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  // Canvas fills cannot read CSS variables, so resolve the glyph color here.
  const color = isMounted && resolvedTheme === "light" ? "#18181b" : "#f4f4f5"

  return (
    <SparkleGridBackground
      color={color}
      backgroundColor="transparent"
      size={28}
      speed={0.8}
      className={cn("h-auto!", className)}
    >
      {children}
    </SparkleGridBackground>
  )
}
