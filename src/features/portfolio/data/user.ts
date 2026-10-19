import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Navaneeth",
  lastName: "B",
  displayName: "Navaneeth B",
  username: "iinava",
  gender: "male",
  pronouns: "he/him",
  bio: "Software Engineer building scalable web applications.",
  flipSentences: [
    "Software Engineer building scalable web applications.",
    "Team Lead.",
    "Software Engineer.",
    "Next.js, FastAPI, PostgreSQL.",
    "Open source contributor.",
  ],
  address: "India",
  phoneNumberB64: "KzkxNzAyNTAzMjQ1OQ==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  emailB64: "Ym5hdmFuZWV0aDIxQGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://github.com/iinava",
  jobTitle: "Team Lead",
  jobs: [
    {
      title: "Team Lead",
      company: "Nexeor Creative Ltd",
      website: "https://nexeor.com/?utm_source=iinava",
      experienceId: "nexeor",
    },
  ],
  about: `- I’m Navaneeth — a Software Engineer with experience building scalable web applications using Next.js, TanStack, FastAPI, and PostgreSQL.
- Experienced in system design and third-party API integrations, from payment processing to courier management.
- Currently a Team Lead and Software Engineer at [Nexeor Creative Ltd](https://nexeor.com/?utm_source=iinava), building SEO-friendly business websites, CRM dashboards, multi-tenant e-commerce platforms, and my own SaaS products.
`,
  avatar: "/images/avatar.webp",
  ogImage:
    "/og/simple?title=Navaneeth%20B&description=Software%20Engineer%20building%20scalable%20web%20applications.",
  timeZone: "Asia/Kolkata",
  keywords: [
    "navaneeth",
    "navaneeth b",
    "iinava",
    "nexeor",
    "nexeor creative",
    "team lead",
    "software engineer",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
}
