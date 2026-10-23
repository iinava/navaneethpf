import "server-only"

import { GITHUB_USERNAME } from "@/config/site"
import { getCachedContributions } from "@/registry/components/github-contributions/lib/get-cached-contributions"

export function getGitHubContributions() {
  // A missing API URL or a failed fetch should hide the graph, not fail the
  // whole page (and with it the production build).
  return getCachedContributions(GITHUB_USERNAME).catch((error: unknown) => {
    console.error("[github-contributions]", error)
    return []
  })
}
