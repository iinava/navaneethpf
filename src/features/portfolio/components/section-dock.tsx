"use client"

import { useEffect, useState, useSyncExternalStore } from "react"
import {
  BriefcaseBusinessIcon,
  LayersIcon,
  LayoutGridIcon,
  MapPinIcon,
  MoonIcon,
  SunIcon,
  UserRoundIcon,
} from "lucide-react"
import { motion } from "motion/react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "profile", label: "Profile", icon: <UserRoundIcon /> },
  { id: "stack", label: "Stack", icon: <LayersIcon /> },
  { id: "experience", label: "Experience", icon: <BriefcaseBusinessIcon /> },
  { id: "topics", label: "Topics", icon: <LayoutGridIcon /> },
  { id: "moments", label: "Moments", icon: <MapPinIcon /> },
]

const itemClassName =
  "group/dock-item relative flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:outline-[1.5px] focus-visible:outline-ring focus-visible:outline-dashed [&_svg]:size-5"

export function SectionDock() {
  const active = useActiveSection(SECTIONS.map((section) => section.id))

  return (
    <nav
      aria-label="Sections"
      className="fixed bottom-[calc(--spacing(4)+env(safe-area-inset-bottom,0))] left-1/2 z-50 hidden -translate-x-1/2 items-center sm:flex"
    >
      <ul className="flex items-center gap-1 rounded-full glass-surface p-1 shadow-lg shadow-black/20">
        {SECTIONS.map((section) => {
          const isActive = active === section.id

          return (
            <li key={section.id} className="flex">
              <button
                type="button"
                aria-label={section.label}
                aria-current={isActive ? "location" : undefined}
                onClick={() => scrollToSection(section.id)}
                className={cn(itemClassName, isActive && "text-foreground")}
              >
                {section.icon}
                <DockLabel>{section.label}</DockLabel>
                {isActive && (
                  <motion.span
                    layoutId="section-dock-dot"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    className="absolute bottom-0.5 size-1 rounded-full bg-foreground"
                    aria-hidden
                  />
                )}
              </button>
            </li>
          )
        })}
      </ul>

      <DockThemeToggle />
    </nav>
  )
}

function DockLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="pointer-events-none absolute bottom-full mb-3 rounded-full glass-surface px-3 py-1.5 text-sm/none font-medium whitespace-nowrap glass-pill-primary opacity-0 transition-[opacity,translate] duration-150 group-hover/dock-item:-translate-y-0.5 group-hover/dock-item:opacity-100 group-focus-visible/dock-item:-translate-y-0.5 group-focus-visible/dock-item:opacity-100"
      aria-hidden
    >
      {children}
    </span>
  )
}

function DockThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  const isDark = isMounted && resolvedTheme === "dark"
  const label = isDark ? "Light theme" : "Dark theme"

  return (
    <button
      type="button"
      aria-label={`Switch to ${label.toLowerCase()}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        itemClassName,
        "-ml-1 size-13 glass-surface shadow-lg shadow-black/20"
      )}
    >
      {isDark ? <SunIcon /> : <MoonIcon className="fill-current" />}
      <DockLabel>{label}</DockLabel>
    </button>
  )
}

function scrollToSection(id: string) {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" })
}

/** Tracks the section crossing a band near the middle of the viewport. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  const key = ids.join(",")

  useEffect(() => {
    const elements = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return active
}
