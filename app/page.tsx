import Illustration from "@/demo/illustration";
import Newsletter from "@/demo/subscribe-form";
import XLinks from "@/demo/x-links";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Origin UI - Beautiful UI components built with Tailwind CSS and Next.js",
  description:
    "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
};

const componentLinks = [
  { href: "/inputs", label: "Input and Textarea" },
  { href: "/buttons", label: "Button" },
  { href: "/checks-radios-switches", label: "Checkbox, Radio, and Switch" },
  { href: "/selects", label: "Select" },
  { href: "/sliders", label: "Slider" },
  { href: "/alerts-notifications-banners", label: "Alert, Notification, and Banner" },
  { href: "/dialogs", label: "Dialog" },
  { href: "/accordions", label: "Accordion" },
  { href: "/tooltips", label: "Tooltip" },
];

export default function Page() {
  return (
    <>
      <Illustration />
      <main>
        <div className="px-4 sm:px-6">
          <div className="mx-auto w-full max-w-3xl">
            <div className="mb-4">
              <p className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-background px-3 py-1 text-sm font-medium text-foreground shadow-sm shadow-black/[.12] dark:bg-accent">
                <span className="mr-2 flex shrink-0 border-r border-border pr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none">
                    <path
                      className="fill-zinc-500"
                      d="M6.958.713a1 1 0 0 0-1.916 0l-.999 3.33-3.33 1a1 1 0 0 0 0 1.915l3.33.999 1 3.33a1 1 0 0 0 1.915 0l.999-3.33 3.33-1a1 1 0 0 0 0-1.915l-3.33-.999-1-3.33Z"
                    />
                  </svg>
                </span>
                New releases every week
              </p>
            </div>

            <div className="mb-16">
              <h1 className="mx-auto mb-4 max-w-3xl text-4xl/[1.1] font-extrabold tracking-tight text-foreground md:text-5xl/[1.1]">
                Beautiful UI components built with Tailwind CSS and Next.js.
              </h1>
              <p className="text-lg text-muted-foreground">
                Origin UI is an extensive collection of copy-and-paste components for quickly
                building app UIs. It&lsquo;s free, open-source, and ready to drop into your
                projects.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-5 text-muted-foreground">Components</h2>
              <nav>
                <ul className="flex flex-col gap-2">
                  {componentLinks.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                      >
                        <span className="truncate">{label}</span>
                        <ArrowRight
                          size={16}
                          strokeWidth={2}
                          className="-mr-1 ml-2 shrink-0 opacity-60"
                        />
                      </Link>
                    </li>
                  ))}
                  <li>
                    <span className="inline-flex w-full flex-col justify-between gap-2 whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 sm:h-14 sm:flex-row sm:items-center">
                      Dropdown & Popover
                      <span className="text-xs font-medium uppercase text-zinc-400 dark:text-zinc-600">
                        Available soon!
                      </span>
                    </span>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="mb-16">
              <h2 className="mb-5 text-muted-foreground">Utilities</h2>
              <nav>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/easings"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                    >
                      <span className="truncate">Tailwind CSS easing classes</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="-mr-1 ml-2 shrink-0 opacity-60"
                      />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <Newsletter />

            <div className="mt-16">
              <XLinks />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
