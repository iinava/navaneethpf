import { cn } from "@/lib/utils"
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"
import { LetsTalkButton } from "@/features/portfolio/components/lets-talk-button"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

import { FooterBackToTop, FooterEmailPill } from "./site-footer-actions"
import { footerPillClassName } from "./site-footer-styles"

const HEADLINE = ["Clean code makes", "great products possible."]
const SUBTEXT =
  "I partner with teams to turn complex ideas into scalable, reliable web apps, and ship them with confidence."

const FOOTER_BG_URL = "https://www.diali.ai/images/footer-bg-dark.webp"

const SOCIAL_LINKS = [
  { ...SOCIAL.github, icon: <GitHubIcon /> },
  { ...SOCIAL.linkedin, icon: <LinkedInIcon /> },
  { ...SOCIAL.x, icon: <XIcon /> },
]

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      {/* Full-width hairlines at the card's edges, matching the page sections.
          They sit on a wrapper because the card clips its overflow. */}
      <div className="screen-line-top screen-line-bottom mx-auto group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <div className="relative isolate overflow-hidden border-x border-line">
          <img
            src={FOOTER_BG_URL}
            alt=""
            loading="lazy"
            className="absolute inset-0 -z-2 size-full object-cover select-none"
            aria-hidden
          />
          {/* Darkens the image so the copy stays readable; heavier in light mode
            where the text is dark. */}
          <div
            className="absolute inset-0 -z-1 bg-background/85 dark:bg-background/55"
            aria-hidden
          />

          <div className="flex flex-col items-center px-5 pt-10 pb-6 text-center sm:px-6 sm:pt-12">
            <h2 className="font-display text-[clamp(1.9rem,5vw,2.5rem)]/[1.15] tracking-[-0.3px] text-balance">
              {HEADLINE.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <p className="mt-3 max-w-sm text-[15px]/relaxed text-balance text-muted-foreground">
              {SUBTEXT}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <LetsTalkButton
                emailB64={USER.emailB64}
                className={cn(footerPillClassName, "glass-pill-primary")}
              >
                Contact me
              </LetsTalkButton>
              <FooterEmailPill emailB64={USER.emailB64} />
            </div>

            <p
              className="mt-6 -rotate-3 font-handwritten text-5xl text-muted-foreground/70 select-none"
              aria-hidden
            >
              {USER.firstName}
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-line px-5 py-3 sm:px-6">
            <ul className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ title, href, icon }) => (
                <li key={href} className="flex">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener"
                    aria-label={title}
                    className={cn(
                      footerPillClassName,
                      "size-9 justify-center px-0 text-muted-foreground hover:text-foreground [&_svg]:size-4"
                    )}
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>

            <FooterBackToTop />
          </div>
        </div>
      </div>

      {/* Clears the fixed bottom fade and nav; the column's side lines run on
          to the page end. */}
      <div
        className="mx-auto h-[calc(--spacing(24)+env(safe-area-inset-bottom,0))] border-x border-line group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl"
        aria-hidden
      />
    </footer>
  )
}
