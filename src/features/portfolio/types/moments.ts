export type Moment = {
  /** Stable unique identifier (used as list key). */
  id: string
  /** Photo URL (absolute or path under /public). Cropped to 5:4. */
  image: string
  city: string
  country: string
  /** Caption color for the country line. */
  accent: "red" | "blue" | "green"
  /** Tilt in degrees; small values (about -5 to 5) read as a loose stack. */
  rotate: number
}
