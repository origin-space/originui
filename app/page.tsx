import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Illustration from "@/demo/illustration";
import DavideImg from "@/public/x-davide.jpg";
import PasqualeImg from "@/public/x-pasquale.jpg";

export default function Page() {
  return (
    <>
      <Illustration />
      <main>
        <div className="px-4 sm:px-6">
          <div className="mx-auto w-full max-w-3xl">
            <div className="mb-4">
              <p className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-background px-3 py-1 text-sm font-medium text-foreground shadow-sm shadow-black/[.12] dark:bg-accent">
                <span className="mr-3 flex shrink-0 border-r border-border pr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
                    <path
                      className="fill-zinc-500"
                      fillRule="evenodd"
                      d="M10.958.713a1 1 0 0 0-1.916 0l-.999 3.33-3.33 1a1 1 0 0 0 0 1.915l3.33.999 1 3.33a1 1 0 0 0 1.915 0l.999-3.33 3.33-1a1 1 0 0 0 0-1.915l-3.33-.999-.999-3.33Z"
                      clipRule="evenodd"
                    />
                    <path
                      className="fill-zinc-400"
                      d="m4.365 11.31.079.212.212.08 1.68.635a.256.256 0 0 1 .164.24.256.256 0 0 1-.163.238l-1.68.635-.213.08-.08.213-.63 1.692v.001a.25.25 0 0 1-.234.164.25.25 0 0 1-.233-.164l-.631-1.693-.08-.213-.212-.08-1.68-.635a.256.256 0 0 1-.164-.239c0-.108.067-.203.163-.24l1.68-.634.213-.08.08-.213.63-1.692c.018-.046.083-.117.234-.117.15 0 .217.07.233.116v.001l.632 1.692Z"
                    />
                  </svg>
                </span>
                New components every week
              </p>
            </div>

            <div className="mb-16">
              <h1 className="mx-auto mb-4 max-w-3xl text-4xl/[1.1] font-extrabold tracking-tight text-foreground md:text-5xl/[1.1]">
                Beautiful UI components built with Tailwind CSS and Next.js.
              </h1>
              <p className="text-lg text-muted-foreground">
                Origin UI is an extensive collection of copy-and-paste components for quickly
                building app UIs. It's free, open-source, and ready to drop into your projects.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="mb-5 text-muted-foreground">Latest components</h2>
              <nav>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/inputs"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-input bg-background p-4 font-bold shadow-sm shadow-black/[0.04] ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                    >
                      Input
                      <ArrowRight size={16} strokeWidth={2} className="-mr-1 ml-2 opacity-60" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/buttons"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-input bg-background p-4 font-bold shadow-sm shadow-black/[0.04] ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                    >
                      Button
                      <ArrowRight size={16} strokeWidth={2} className="-mr-1 ml-2 opacity-60" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/checks-radios-switches"
                      className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-input bg-background p-4 font-bold shadow-sm shadow-black/[0.04] sm:h-14"
                    >
                      Checkbox, Radio, and Switch
                      <ArrowRight size={16} strokeWidth={2} className="-mr-1 ml-2 opacity-60" />
                    </Link>
                  </li>
                  <li>
                    <span className="inline-flex w-full flex-col justify-between gap-2 whitespace-nowrap rounded-lg border border-input bg-background p-4 font-bold shadow-sm shadow-black/[0.04] sm:h-14 sm:flex-row sm:items-center">
                      <span className="flex items-start gap-2">
                        More components available soon
                      </span>
                      <span className="flex items-center gap-2 text-sm">
                        <span className="font-normal text-muted-foreground">
                          Get notified on X -&gt;
                        </span>
                        <span className="-ml-0.5 flex -space-x-2">
                          <a
                            className="group relative h-7 w-7 overflow-hidden rounded-full border-2 border-background"
                            href="https://x.com/pacovitiello"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              className="absolute inset-0 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                              src={PasqualeImg}
                              alt="Pasquale's profile image"
                              width={24}
                              height={24}
                            />
                          </a>
                          <a
                            className="group relative z-10 h-7 w-7 overflow-hidden rounded-full border-2 border-background"
                            href="https://x.com/DavidePacilio"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              className="absolute inset-0 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                              src={DavideImg}
                              alt="Davide's profile image"
                              width={24}
                              height={24}
                            />
                          </a>
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
