export type Moment = {
  /** Stable unique identifier (used as list key). */
  id: string
  /** Photo URL (absolute or path under /public). Cropped to 5:4. */
  image: string
  /** Main caption line, set in the display font. */
  title: string
  /** Small colored line under the title. */
  subtitle: string
  /** Color of the subtitle. */
  accent: "red" | "blue" | "green"
  /** Tilt in degrees; small values (about -5 to 5) read as a loose stack. */
  rotate: number
}
