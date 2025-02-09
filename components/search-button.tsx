"use client";

import { RiSearch2Line } from "@remixicon/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SearchButton() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        router.push("/search");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <Link
      href="/search"
      className="inline-flex h-10 w-fit min-w-72 cursor-text rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-ring focus:outline-hidden focus:ring-[3px] focus:ring-ring/20"
    >
      <span className="flex grow items-center">
        <RiSearch2Line className="-ms-1 me-2 text-muted-foreground" size={20} aria-hidden="true" />
        <span className="font-normal text-ring">Quick search...</span>
        <div className="pointer-events-none ml-auto flex items-center justify-center text-muted-foreground/80">
          <kbd className="inline-flex font-[inherit] text-xs font-medium text-muted-foreground">
            <span className="opacity-70">⌘</span>K
          </kbd>
        </div>
      </span>
    </Link>
  );
}
