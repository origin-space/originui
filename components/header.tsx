import Link from "next/link";

import GithubButton from "@/components/github-button";
import SocialDropdown from "@/components/social-dropdown";
import ThemeToggle from "@/components/theme-toggle";
import { Search } from "lucide-react";

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
            <Link href="/search"
              className="inline-flex h-9 w-fit rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20"
            >
              <span className="flex grow items-center">
                <Search
                  className="-ms-1 me-3 text-muted-foreground/80"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className="font-normal text-muted-foreground/70">Search</span>
              </span>
              <kbd className="-me-1 ms-12 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
                ⌘K
              </kbd>
            </Link>            
            <GithubButton />
            <ThemeToggle />
            <SocialDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}
