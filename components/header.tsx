import ExternalLink from "@/components/external-link";
import ThemeToggle from "@/components/theme-toggle";
import LogoDark from "@/public/logo-dark.svg";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] relative mb-14 before:absolute before:-inset-x-32 before:bottom-0 before:h-px">
      <div
        className="before:bg-ring/50 after:bg-ring/50 before:absolute before:-bottom-px before:-left-12 before:z-10 before:-ml-px before:size-[3px] after:absolute after:-right-12 after:-bottom-px after:z-10 after:-mr-px after:size-[3px]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-3">
        <Link
          href="/"
          aria-label="Home"
          className="outline-ring/30 dark:outline-ring/40 rounded-full outline-offset-2 focus-visible:outline-2"
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
        <div className="flex items-center gap-4 sm:gap-8">
          <ExternalLink text="GitHub" href="https://github.com/origin-space/originui" />
          <ExternalLink text="Follow us" href="https://x.com/origin_ui" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
