import { CodeXmlIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "nexeor",
    companyName: "Nexeor Creative Ltd",
    companyWebsite: "https://nexeor.com/?utm_source=iinava",
    location: "UAE",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Team Lead",
        employmentPeriod: {
          start: "08.2024",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Leading product delivery and technical execution across multiple client projects while mentoring engineers and coordinating implementation priorities.
- Developed and optimized SEO-friendly business websites using Next.js, Tailwind, and shadcn/ui, significantly improving page load performance, Core Web Vitals, and search engine rankings.
- Built scalable CRM admin dashboards and frontend applications using React and Next.js for both internal teams and client-facing platforms.
- Designed and containerized backend services using FastAPI and Docker for web and Android applications, ensuring reliable deployments and environment consistency.
- Integrated third-party APIs for courier management and payment processing, including Tabby and Stripe, enabling secure and automated order workflows.
- Developed and maintained software applications using Next.js, React, shadcn/ui, Nuxt, and Vue.js, with form validation (react-hook-form + Zod), data fetching (TanStack Query), virtualized tables, and data visualization using Recharts.
- Mentored interns on frontend and backend development, code quality standards, Git workflows, and pull request reviews.
- Designed and implemented secure cookie-based authentication for a software application with FastAPI and Next.js, including JWT access/refresh token flow, protected routes, and persistent user sessions.

Key Projects:
- Multi-tenant E-commerce Platforms — Gobachi and Wishmaster: Designed and implemented scalable multi-tenant architecture using PostgreSQL, Redis, and AWS, supporting order management, courier integrations, payments, and admin dashboards for multiple vendors.
- Enterprise ERP System — Safety Power UAE: Architected and maintained a full ERP solution for an industrial trading and safety equipment company, covering inventory management, operations, reporting, and internal workflows.
- Lead Finder Platform — Nleads: Developed a marketing lead scraping solution enabling automated discovery, filtering, and management of business leads through scalable backend APIs.`,
        skills: [
          "Next.js",
          "React",
          "Tailwind CSS",
          "shadcn/ui",
          "Nuxt.js",
          "Vue.js",
          "FastAPI",
          "Docker",
          "PostgreSQL",
          "Redis",
          "AWS",
          "TanStack Query",
          "Zod",
          "JWT",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
]
