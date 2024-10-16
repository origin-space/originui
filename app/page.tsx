import DemoComponent from "@/demo/demo-component";
import Image from "next/image";

import DavideImg from "@/public/x-davide.jpg";
import PasqualeImg from "@/public/x-pasquale.jpg";

// Define an array of input file names
const inputFiles = [
  "input-01",
  "input-02",
  "input-03",
  "input-04",
  "input-05",
  "input-06",
  "input-07",
  "input-08",
  "input-09",
  "input-10",
  "input-11",
  "input-12",
  "input-13",
  "input-14",
  "input-15",
  "input-16",
  "input-17",
  "input-18",
  "input-19",
  "input-20",
  "input-21",
  "input-22",
  "input-23",
  "input-24",
  "input-25",
  "input-26",
  "input-27",
  "input-28",
  "input-29",
  "input-30",
  "input-31",
  "input-32",
  "input-33",
  "input-34",
  "input-35",
  "input-36",
  "input-37",
  "input-38",
  "input-39",
  "input-40",
  "input-41",
  "input-42",
  "input-43",
  "input-44",
  "input-45",
  "input-46",
  "input-47",
  "input-48",
  "input-49",
  "input-50",
  "input-51",
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        <div className="mb-16 flex w-full items-center justify-between gap-2 sm:px-8 xl:px-12">
          <header>
            <h1 className="mb-3 text-3xl font-bold text-foreground">Input</h1>
            <p className="text-muted-foreground">
              A growing collection of over 50 input components built with Next.js and TailwindCSS.
            </p>
          </header>
          <div>
            <a
              className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm shadow-black/[.04] transition-shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              href="https://github.com/origin-space/originui"
              target="_blank"
            >
              <svg
                className="mr-2 fill-current text-zinc-400 dark:text-zinc-900"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                aria-hidden="true"
                role="presentation"
              >
                <path d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6C16 3.6 12.4 0 8 0Z" />
              </svg>
              <span className="text-primary-foreground">Star</span>
              <svg
                className="-mt-0.5 ml-1.5 fill-current text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
                fill="none"
              >
                <path d="M1.65 8.514.74 7.6l5.514-5.523H2.028l.01-1.258h6.388v6.394H7.16l.01-4.226L1.65 8.514Z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
          {inputFiles.map((componentName) => {
            const directory = "inputs";
            return (
              <DemoComponent
                key={componentName}
                directory={directory}
                componentName={componentName}
              />
            );
          })}
        </div>

        <div className="my-16 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground">Can't find a specific input?</h2>
          <p className="mb-6 text-muted-foreground">
            Let us know on X and we will add it to this collection.👇
          </p>
          <a
            className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm shadow-black/[.04] transition-shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            href="https://x.com/pacovitiello/status/1846137917049110662"
            target="_blank"
          >
            <span className="text-primary-foreground">Send Suggestion</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-zinc-500">Brought to you by</span>
          <span className="-ml-0.5 flex -space-x-2">
            <a
              className="group relative h-7 w-7 overflow-hidden rounded-full border-2 border-white"
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
              className="group relative z-10 h-7 w-7 overflow-hidden rounded-full border-2 border-white"
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
        </div>
      </div>
    </div>
  );
}
