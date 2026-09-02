import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Navaneeth",
  lastName: "B",
  displayName: "Navaneeth B",
  username: "iinava",
  gender: "male",
  pronouns: "he/him",
  bio: "Full-stack Software Engineer building scalable web applications.",
  flipSentences: [
    "Full-stack Software Engineer building scalable web applications.",
    "Software Engineer.",
    "Next.js, FastAPI, PostgreSQL.",
    "Open source contributor.",
  ],
  address: "India",
  phoneNumberB64: "KzkxNzAyNTAzMjQ1OQ==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  emailB64: "Ym5hdmFuZWV0aDIxQGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://github.com/iinava",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Software Engineer",
      company: "Nexeor Creative Ltd",
      website: "https://nexeor.com",
      experienceId: "nexeor",
    },
  ],
  about: `- I’m Navaneeth — a full-stack Software Engineer with experience building scalable web applications using Next.js, TanStack, FastAPI, and PostgreSQL.
- Experienced in system design and third-party API integrations, from payment processing to courier management.
- Currently a Software Engineer at [Nexeor Creative Ltd](https://nexeor.com), building SEO-friendly business websites, CRM dashboards, and multi-tenant e-commerce platforms.
`,
  avatar: "https://assets.chanhdai.com/images/chanhdai-avatar-ghibli.webp",
  avatarVariants: {
    lightOff: "https://assets.chanhdai.com/images/avatar-light-off.webp",
    lightOn: "https://assets.chanhdai.com/images/avatar-light-on.webp",
    darkOff: "https://assets.chanhdai.com/images/avatar-dark-off.webp",
    darkOn: "https://assets.chanhdai.com/images/avatar-dark-on.webp",
  },
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-dark.png?t=1778602757",
  namePronunciationUrl: "https://assets.chanhdai.com/audio/chanhdai.mp3",
  timeZone: "Asia/Kolkata",
  keywords: [
    "navaneeth",
    "navaneeth b",
    "iinava",
    "nexeor",
    "nexeor creative",
    "full-stack developer",
    "software engineer",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
}
