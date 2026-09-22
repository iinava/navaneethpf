"use client"

import { copyText } from "@/utils/copy"
import { useTiks } from "@rexa-developer/tiks/react"
import { toast } from "sonner"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/base/ui/context-menu"

import { getMarkSVG, NMark } from "./n-mark"

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { success } = useTiks()

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-fit">
        <ContextMenuItem
          onClick={() => {
            copyText(getMarkSVG())
            toast.success("Mark as SVG copied")
            success()
          }}
        >
          <NMark />
          Copy Mark as SVG
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default BrandContextMenu
