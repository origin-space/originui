import GithubLink from "@/components/github-link";
import ThemeToggle from "@/components/theme-toggle";
import LogoDark from "@/public/logo-dark.svg";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative mb-14 before:absolute before:-inset-x-32 before:bottom-0 before:h-px before:bg-[linear-gradient(to_right,theme(colors.border/.3),theme(colors.border)_200px,theme(colors.border)_calc(100%-200px),theme(colors.border/.3))]">
      <div
        className="before:absolute before:-bottom-px before:-left-12 before:z-10 before:-ml-px before:size-[3px] before:bg-ring after:absolute after:-bottom-px after:-right-12 after:z-10 after:-mr-px after:size-[3px] after:bg-ring"
        aria-hidden="true"
      ></div>
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-3">
        <Link
          href="/"
          aria-label="Home"
          className="rounded-full outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
        >
          <span className="sr-only">Origin UI</span>
          <Image src={Logo} alt="Origin UI logo" width={117} height={24} className="dark:hidden" />
          <Image
            src={LogoDark}
            alt="Origin UI logo"
            width={117}
            height={24}
            className="hidden dark:block"
          />
        </Link>
        <div className="flex items-center gap-4">
          <GithubLink />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
