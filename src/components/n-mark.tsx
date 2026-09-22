// "N" drawn on the same 64px pixel grid the rest of the site's geometry uses.
const MARK_PATH =
  "M0 0h64v256H0zM192 0h64v256h-64zM64 64h64v64H64zM128 128h64v64h-64z"

export function NMark(props: React.ComponentProps<"svg">) {
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

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256"><path fill="currentColor" d="${MARK_PATH}"/></svg>`
}
