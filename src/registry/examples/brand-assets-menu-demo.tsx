"use client"

import Link from "next/link"

import { BrandAssetsMenu } from "@/registry/transformed/components/brand-assets-menu"

export default function BrandAssetsMenuDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <BrandAssetsMenu
        logomark={<NMark />}
        logomarkSVG={LOGOMARK_SVG}
        logotypeSVG={LOGOTYPE_SVG}
        brandGuidelinesURL="https://example.com/brand"
        brandAssetsURL="https://example.com/brand-assets.zip"
      >
        <Link href="/" aria-label="Home">
          <NMark className="h-8 text-foreground" />
        </Link>
      </BrandAssetsMenu>

      <div className="text-sm text-muted-foreground">
        <span className="hidden pointer-fine:inline-block">
          Right-click the logo
        </span>
        <span className="hidden pointer-coarse:inline-block">
          Press & hold the logo
        </span>
      </div>
    </div>
  )
}

const MARK_PATH =
  "M0 0h64v256H0zM192 0h64v256h-64zM64 64h64v64H64zM128 128h64v64h-64z"

const LOGOMARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256"><path fill="currentColor" d="${MARK_PATH}"/></svg>`

const LOGOTYPE_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1410 258"><text x="1" y="257" font-family="sans-serif" font-size="344" font-weight="600" textLength="1408" lengthAdjust="spacingAndGlyphs" fill="currentColor">NAVANEETH B</text></svg>'

function NMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 256 256"
      aria-hidden
      {...props}
    >
      <path fill="currentColor" d={MARK_PATH} />
    </svg>
  )
}
