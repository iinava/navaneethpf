"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

const VIEWBOX_WIDTH = 445
const VIEWBOX_HEIGHT = 290

// The demo mark is a letterform laid out on a 30-degree isometric grid and
// extruded downward. `TOP` is the union outline of its faces, `SKIRT` the same
// outline dropped by the extrusion depth, and `VERTICALS` the corner edges that
// join the two. Drawing the skirt first and painting the faces over it leaves
// only the front-facing sides visible, so pressing the mark is a single
// translate of the face group rather than a path morph.
const TOP =
  "M222.2 0.5L443.9 128.5L388.48 160.5L333.05 128.5L277.63 160.5L222.2 128.5L277.63 96.5L166.78 32.5ZM55.93 96.5L111.35 128.5L166.78 96.5L222.2 128.5L166.78 160.5L277.63 224.5L222.2 256.5L0.5 128.5Z"

const SKIRT =
  "M222.2 32.5L443.9 160.5L388.48 192.5L333.05 160.5L277.63 192.5L222.2 160.5L277.63 128.5L166.78 64.5ZM55.93 128.5L111.35 160.5L166.78 128.5L222.2 160.5L166.78 192.5L277.63 256.5L222.2 288.5L0.5 160.5Z"

const VERTICALS =
  "M222.2 0.5V32.5M166.78 32.5V64.5M55.93 96.5V128.5M0.5 128.5V160.5M166.78 96.5V128.5M111.35 128.5V160.5M277.63 96.5V128.5M222.2 128.5V160.5M166.78 160.5V192.5M333.05 128.5V160.5M277.63 160.5V192.5M443.9 128.5V160.5M388.48 160.5V192.5M277.63 224.5V256.5M222.2 256.5V288.5"

const faceVariants = {
  normal: { transform: "translate(0px, 0px)" },
  pressed: { transform: "translate(0px, 16px)" },
}

/**
 * An SVG mark whose outline is traced by a gradient highlight that follows the
 * cursor, paired with a springy press effect and a tactile click sound.
 *
 * Swap the SVG paths below for your own artwork. The interaction is driven by:
 * - a `radialGradient` whose center springs toward the pointer (the spotlight),
 *   reused as a second stroke layered over the base outline.
 * - `whileTap="pressed"` translating the face group so the extrusion compresses.
 */
export function SpotlightLogo() {
  const id = useId()
  const ids = {
    facePattern: `spotlight-logo-face-pattern-${id}`,
    faceStroke: `spotlight-logo-face-stroke-${id}`,
    baseStroke: `spotlight-logo-base-stroke-${id}`,
    radialGradient: `spotlight-logo-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)

  const [play] = useSound(metalClickSound)

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, VIEWBOX_WIDTH]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, VIEWBOX_HEIGHT]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return
    }

    if (window.matchMedia("(hover: none)").matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
      onTap={() => play()}
    >
      <defs>
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1"
          />
        </pattern>

        <g id={ids.baseStroke}>
          <path d={SKIRT} />
          <path d={VERTICALS} />
        </g>

        <path id={ids.faceStroke} d={TOP} />

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#fff]"
            stopColor="var(--color-zinc-700)"
          />
          <stop
            className="dark:[stop-color:var(--color-zinc-600)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>
      </defs>

      <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
        <path d="M-500 -416.46L1000 449.56" />
        <path d="M-500 417.46L1000 -448.56" />
        <path d="M-500 705.46L1000 -160.56" />
      </g>

      <path d={SKIRT} className="fill-background" />
      <use href={`#${ids.baseStroke}`} stroke="var(--stroke)" />
      <use href={`#${ids.baseStroke}`} stroke={`url(#${ids.radialGradient})`} />

      <motion.g variants={faceVariants} transition={transition}>
        <path d={TOP} className="fill-background" />
        <path d={TOP} fill={`url(#${ids.facePattern})`} />
        <use href={`#${ids.faceStroke}`} stroke="var(--stroke)" />
        <use
          href={`#${ids.faceStroke}`}
          stroke={`url(#${ids.radialGradient})`}
        />
      </motion.g>
    </motion.svg>
  )
}
