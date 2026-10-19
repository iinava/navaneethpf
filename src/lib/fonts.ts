import { Caveat, IBM_Plex_Serif } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { GeistPixelSquare } from "geist/font/pixel"
import { GeistSans } from "geist/font/sans"

import { cn } from "@/lib/utils"

const fontSans = GeistSans
const fontMono = GeistMono

const fontSerif = IBM_Plex_Serif({
  weight: ["400"],
  display: "swap",
  variable: "--font-serif",
})

const fontDisplay = GeistPixelSquare

const fontHandwritten = Caveat({
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-handwritten",
})

// const fontPixel = localFont({
//   src: "../assets/fonts/DepartureMono-Regular.woff2",
//   weight: "400",
//   fallback: ["monospace"],
//   variable: "--font-pixel",
// })

// const pixelatedMSSansSerif = localFont({
//   src: [
//     {
//       path: "../assets/fonts/ms_sans_serif.woff2",
//       weight: "400",
//     },
//     {
//       path: "../assets/fonts/ms_sans_serif_bold.woff2",
//       weight: "700",
//     },
//   ],
//   fallback: ["Arial"],
//   variable: "--font-98cn",
// })

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontSerif.variable,
  fontDisplay.variable,
  fontHandwritten.variable,
  "[--font-sans:var(--font-geist-sans)]",
  "[--font-mono:var(--font-geist-mono)]",
  "[--font-display:var(--font-geist-pixel-square)]"
)
