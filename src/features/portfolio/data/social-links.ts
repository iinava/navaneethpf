import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  x: {
    title: "X",
    handle: "@iinava",
    href: "https://x.com/iinava",
    sameAs: true,
  },
  github: {
    title: "GitHub",
    handle: "iinava",
    href: "https://github.com/iinava",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "inavaneeth",
    href: "https://linkedin.com/in/inavaneeth",
    sameAs: true,
  },
  dailydotdev: {
    title: "daily.dev",
    handle: "@iinava",
    href: "https://app.daily.dev/iinava",
    sameAs: true,
  },
  discord: {
    title: "Discord",
    handle: "iinava",
    href: "https://discord.com/users/1186630645443739651",
  },
  youtube: {
    title: "YouTube",
    handle: "@iinava",
    href: "https://www.youtube.com/@iinava",
    sameAs: true,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
