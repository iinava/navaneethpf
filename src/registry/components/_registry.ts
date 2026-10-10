import type { Registry } from "shadcn/schema"

export const components: Registry["items"] = [
  {
    name: "theme-switcher",
    type: "registry:component",
    title: "Theme Switcher",
    description:
      "Toggle between system, light, and dark themes in Next.js apps.",
    dependencies: ["next-themes", "motion"],
    files: [
      {
        path: "components/theme-switcher/theme-switcher.tsx",
        type: "registry:component",
        target: "@components/theme-switcher.tsx",
      },
    ],
    categories: ["controls"],
    docs: "https://iinava.dev.co/components/theme-switcher",
  },
]
