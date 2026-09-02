import { CodeXmlIcon, MessageCircleIcon } from "lucide-react"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
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
    isExpanded: true,
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
