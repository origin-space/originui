import Illustration from "@/components/illustration";
import Newsletter from "@/components/subscribe-form";
import XLinks from "@/components/x-links";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
                  <li>
                    <Link
                      href="/inputs"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                    >
                      <span className="truncate">Input and Textarea</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="-mr-1 ml-2 shrink-0 opacity-60"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/buttons"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                    >
                      <span className="truncate">Button</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="-mr-1 ml-2 shrink-0 opacity-60"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/checks-radios-switches"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                    >
                      <span className="truncate">Checkbox, Radio, and Switch</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="-mr-1 ml-2 shrink-0 opacity-60"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/selects"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                    >
                      <span className="truncate">Select</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="-mr-1 ml-2 shrink-0 opacity-60"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sliders"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                    >
                      <span className="truncate">Slider</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="-mr-1 ml-2 shrink-0 opacity-60"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/alerts-notifications-banners"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                    >
                      <span className="truncate">Alert, Notification, and Banner</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="-mr-1 ml-2 shrink-0 opacity-60"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dialogs"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                    >
                      <span className="truncate">Dialog</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="-mr-1 ml-2 shrink-0 opacity-60"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/accordions"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                    >
                      <span className="truncate">Accordion</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="-mr-1 ml-2 shrink-0 opacity-60"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tooltips"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                    >
                      <span className="truncate">Tooltip</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="-mr-1 ml-2 shrink-0 opacity-60"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dropdowns-popovers"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                    >
                      <span className="truncate">Dropdown and Popover</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="-mr-1 ml-2 shrink-0 opacity-60"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/avatars-badges"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                    >
                      <span className="truncate">Avatar and Badge</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="-mr-1 ml-2 shrink-0 opacity-60"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tabs"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                    >
                      <span className="truncate">Tab</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="-mr-1 ml-2 shrink-0 opacity-60"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/breadcrumbs-paginations"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                    >
                      <span className="truncate">Breadcrumb and Pagination</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="-mr-1 ml-2 shrink-0 opacity-60"
                      />
                    </Link>
                  </li>
                  <li>
                    <span className="inline-flex w-full flex-col justify-between gap-2 rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 sm:h-14 sm:flex-row sm:items-center">
                      Layouts, Navigation menus, Tables, and more...
                      <span className="text-xs font-medium uppercase text-zinc-400 dark:text-zinc-600">
                        Coming in 2025
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
