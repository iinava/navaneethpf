import { CodeXmlIcon, MessageCircleIcon } from "lucide-react"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "handly-furniture",
    title: "Handly Furnitures (Landing Page)",
    period: {
      start: "10.2026",
      end: "10.2026",
    },
    link: "https://www.handlyfurniture.com/",
    skills: ["Branding", "Landing Page", "Web Design", "Responsive Design"],
    description: `A branded landing page for Handly, a bespoke furniture maker serving B2B wholesale partners.
- Showcased the furniture collection across chairs, tables, sofas, and storage.
- Told the brand story through its heritage craftsmanship and history.
- Featured the store location and contact paths for wholesale inquiries.
- Designed a responsive experience that carries the brand across desktop and mobile.`,
    thumbnail: "/images/projects/handly-furniture.webp",
  },
  {
    id: "realesto",
    title: "Realesto",
    period: {
      start: "08.2023",
      end: "08.2023",
    },
    link: "https://github.com/iinava",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
    description: `A full-stack real estate marketplace using the MERN stack enabling clients to browse properties and connect directly with owners.
- Implemented real-time one-to-one chat functionality using Socket.io for instant communication between clients and property owners.
- Built secure REST APIs for user authentication, property listings, messaging, and pricing details.
- Designed responsive UI components in React for seamless property discovery and inquiry experience.`,
    icon: <MessageCircleIcon />,
  },
  {
    id: "8bit-cn",
    title: "8bit-cn",
    period: {
      start: "01.2024",
    },
    link: "https://github.com/iinava",
    skills: ["Open Source", "Next.js", "shadcn/ui"],
    description:
      "Built and contributed a reusable Tooltip component to the UI library used by thousands of developers.",
    icon: <CodeXmlIcon />,
  },
]
