import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
import PageHeader from "@/demo/page-header";
import ColorPickerDemo from "@/demo/color-picker";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Input - Origin UI",
  description:
    "A collection of beautiful and accessible select components built with Tailwind CSS and Next.js.",
};

const inputDir = "color-inputs";
const inputFiles = [
  "color-input-01",
  "color-input-02",
  "color-input-03",
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Color Inputs">
            A customizable color picker built with Next.js and TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {inputFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={inputDir}
                  componentName={componentName}
                />
              );
            })}
          </div>

          <div className="w-full my-24">
            <ColorPickerDemo />
          </div>

          <div className="my-12 flex items-center justify-center gap-2 text-sm">
            <span className="text-zinc-500">Create by</span>
            <span className="-ml-0.5 flex -space-x-2">
              <a
                className="group relative h-7 w-7 overflow-hidden rounded-full border-2 border-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
                href="https://x.com/intent/follow?screen_name=01_kartic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="absolute inset-0 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  src="/x-kartic.png"
                  alt="Pasquale's profile image"
                  width={24}
                  height={24}
                />
              </a>
            </span>
          </div>

          <Cta />
        </div>
      </div>
    </main>
  );
}
