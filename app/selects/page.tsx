import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
import PageHeader from "@/demo/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Select Components - Origin UI",
  description:
    "A collection of beautiful and accessible select components built with Tailwind CSS and Next.js.",
};

const directory = "selects";
const files = [
  "select-01",
  "select-02",
  "select-03",
  "select-04",
  "select-05",
  "select-06",
  "select-07",
  "select-08",
  "select-09",
  "select-10",
  "select-11",
  "select-12",
  "select-13",
  "select-14",
  "select-15",
  "select-16",
  "select-17",
  "select-18",
  "select-19",
  "select-20",
  "select-21",
  "select-22",
  "select-23",
  "select-24",
  "select-25",
  "select-26",
  "select-27",
  "select-28",
  "select-29",
  "select-30",
  "select-31",
  "select-32",
  "select-33",
  "select-34",
  "select-35",
  "select-36",
  "select-37",
  "select-38",
  "select-39",
  "select-40",
  "select-41",
  "select-42",
  "select-43",
  "select-44",
  "select-45",
  "select-46",
  "select-47",
  "select-48",
  "select-49",
  "select-50",
  "select-51",
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Select">
            A growing collection of {files.length} select components built with Next.js and
            TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {files.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={directory}
                  componentName={componentName}
                />
              );
            })}
          </div>

          <Cta />
        </div>
      </div>
    </main>
  );
}
