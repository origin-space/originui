"use client";

import Link from "next/link";

import GithubButton from "@/demo/github-button";
import ThemeToggle from "@/demo/theme-toggle";

export default function Header() {
  return (
    <header>
      <div className="px-4 sm:px-6">
        <div className="mx-auto mb-16 flex h-[72px] w-full max-w-6xl items-center justify-between border-b border-border/70">
          <Link href="/" aria-label="Home">
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
          <nav>
            <ul className="flex items-center gap-4">
              <li>
                <ThemeToggle />
              </li>
              <li>
                <GithubButton />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
