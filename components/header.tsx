import Link from "next/link";

import GithubButton from "@/components/github-button";
import SocialDropdown from "@/components/social-dropdown";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header>
      <div className="px-4 sm:px-6">
        <div className="mx-auto mb-16 flex h-[72px] w-full max-w-6xl items-center justify-between gap-3 border-b border-border/70">
          <Link
            href="/"
            aria-label="Home"
            className="rounded-full outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
          >
            <span className="sr-only">Origin UI</span>
            <svg
              className="stroke-zinc-800 dark:stroke-zinc-100"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
            </svg>
          </Link>
          <div className="flex items-center gap-2">
            <GithubButton />
            <ThemeToggle />
            <SocialDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}
