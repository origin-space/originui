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
          <div className="mx-auto w-full max-w-5xl text-center">
            <div className="mb-4">
              <Link
                href="/inputs"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-background px-3 py-1 text-sm text-muted-foreground shadow-sm shadow-black/[.12] ring-offset-background transition-all hover:bg-primary/[.03] hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 dark:bg-accent dark:hover:bg-primary/10"
              >
                <span>
                  Check out the first{" "}
                  <span className="font-medium text-foreground">50+ input components</span>{" "}
                  <svg
                    className="-mt-1.5 inline fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="9"
                    fill="none"
                  >
                    <path d="m.87 8.445-.775-.776 5.767-5.777H1.408l.01-1.074h6.294v6.304H6.628l.01-4.454L.87 8.445Z" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="space-y-8">
              <div>
                <h1 className="mx-auto mb-4 max-w-3xl text-4xl/[1.1] font-black tracking-tight text-foreground md:text-5xl/[1.1]">
                  Beautiful UI components built with Tailwind CSS and Next.js.
                </h1>
                <p className="text-lg text-muted-foreground">
                  OriginUI is an extensive collection of copy-and-paste components for quickly
                  building app UIs.
                  <br className="max-md:hidden" /> It's free, open-source, and ready to drop into
                  your projects.
                </p>
              </div>
              <p className="text-[15px] text-muted-foreground">
                Follow us on X to never miss an update 👇
              </p>
              <div className="inline-flex gap-4">
                <a
                  className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm shadow-black/[.04] ring-offset-background transition-shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2"
                  href="https://x.com/pacovitiello"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="-ml-1 mr-2 rounded-full"
                    src={PasqualeImg}
                    alt="Pasquale's profile image"
                    width={24}
                    height={24}
                    aria-hidden="true"
                  />
                  @pacovitiello
                </a>
                <a
                  className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm shadow-black/[.04] ring-offset-background transition-shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2"
                  href="https://x.com/DavidePacilio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="-ml-1 mr-2 rounded-full"
                    src={DavideImg}
                    alt="Davide's profile image"
                    width={24}
                    height={24}
                    aria-hidden="true"
                  />
                  @DavidePacilio
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="px-4 sm:px-6">
          <div className="mx-auto w-full max-w-5xl py-8 text-center">
            <p className="text-[13px] text-muted-foreground">
              A project by the team behind{" "}
              <a
                className="underline outline-ring/70 hover:text-foreground hover:no-underline"
                href="https://cruip.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Cruip website (opens in a new tab)"
              >
                Cruip
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
