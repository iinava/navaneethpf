"use client"

import { decodeEmail } from "@/utils/string"

// The address is decoded only on click so it never appears in the HTML,
// keeping it out of reach of scrapers.
export function LetsTalkButton({
  emailB64,
  ...props
}: Omit<React.ComponentProps<"button">, "onClick"> & { emailB64: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = `mailto:${decodeEmail(emailB64)}`
      }}
      {...props}
    />
  )
}
