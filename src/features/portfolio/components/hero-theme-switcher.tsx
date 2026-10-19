"use client"

import { useSyncExternalStore } from "react"
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react"
import { motion } from "motion/react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

const OPTIONS = [
  { value: "light", label: "Light", icon: <SunIcon /> },
  { value: "dark", label: "Dark", icon: <MoonIcon className="fill-current" /> },
  { value: "system", label: "System", icon: <LaptopIcon /> },
]

export function HeroThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()

  // The stored theme is only known on the client; render no active thumb on
  // the server to avoid a hydration mismatch.
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className={cn("flex gap-0.5 rounded-full glass-surface p-1", className)}
    >
      {OPTIONS.map((option) => {
        const isActive = isMounted && theme === option.value

        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={`${option.label} theme`}
            onClick={() => setTheme(option.value)}
            className={cn(
              "relative flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:outline-[1.5px] focus-visible:outline-ring focus-visible:outline-dashed [&_svg]:relative [&_svg]:z-1 [&_svg]:size-4",
              isActive && "text-background hover:text-background"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="hero-theme-thumb"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                className="absolute inset-0 rounded-full glass-surface glass-pill-primary"
                aria-hidden
              />
            )}
            {option.icon}
          </button>
        )
      })}
    </div>
  )
}
