"use client"

import { copyToClipboardWithEvent } from "@/utils/copy"
import { decodeEmail } from "@/utils/string"
import { ArrowUpIcon } from "lucide-react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { useIsClient } from "@/hooks/use-is-client"

import { footerPillClassName } from "./site-footer-styles"

// Decoded only on the client so the address never appears in the HTML.
export function FooterEmailPill({ emailB64 }: { emailB64: string }) {
  const isClient = useIsClient()
  const email = isClient ? decodeEmail(emailB64) : ""

  return (
    <button
      type="button"
      className={cn(footerPillClassName, "min-w-40 justify-center")}
      aria-label="Copy email address"
      onClick={() => {
        copyToClipboardWithEvent(email, {
          name: "copy_email",
          properties: { method: "footer" },
        })
        toast.success("Email copied")
      }}
      suppressHydrationWarning
    >
      {email || "Copy email"}
    </button>
  )
}

export function FooterBackToTop() {
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
      }}
      className={cn(
        footerPillClassName,
        "size-10 justify-center px-0 text-muted-foreground hover:text-foreground"
      )}
    >
      <ArrowUpIcon className="size-4" />
    </button>
  )
}
