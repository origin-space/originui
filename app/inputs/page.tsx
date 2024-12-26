import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
import PageHeader from "@/demo/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Input and Textarea Components - Origin UI",
  description:
    "A collection of beautiful and accessible input components built with Tailwind CSS and Next.js.",
};

const files = [
  "comp-01",
  "comp-02",
  "comp-03",
  "comp-04",
  "comp-05",
  "comp-06",
  "comp-07",
  "comp-08",
  "comp-09",
  "comp-10",
  "comp-11",
  "comp-12",
  "comp-13",
  "comp-14",
  "comp-15",
  "comp-16",
  "comp-17",
  "comp-18",
  "comp-19",
  "comp-20",
  "comp-21",
  "comp-22",
  "comp-23",
  "comp-24",
  "comp-25",
  "comp-26",
  "comp-27",
  "comp-28",
  "comp-29",
  "comp-30",
  "comp-31",
  "comp-32",
  "comp-33",
  "comp-34",
  "comp-35",
  "comp-36",
  "comp-37",
  "comp-38",
  "comp-39",
  "comp-40",
  "comp-41",
  "comp-42",
  "comp-43",
  "comp-44",
  "comp-45",
  "comp-58",
  "comp-46",
  "comp-47",
  "comp-48",
  "comp-49",
  "comp-50",
  "comp-51",
  "comp-52",
  "comp-53",
  "comp-54",
  "comp-55",
  "comp-56",
  "comp-57",
  "comp-59",
  "comp-60",
  "comp-61",
  "comp-62",
  "comp-63",
  "comp-64",
  "comp-65",
  "comp-66",
  "comp-67",
  "comp-68",
  "comp-69",
  "comp-70",
  "comp-71",
  "comp-72",
  "comp-73",
  "comp-74",
  "comp-75",
  "comp-76",
  "comp-77"
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Input and Textarea">
            A growing collection of {files.length} input and textarea components built with Next.js
            and TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {files.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
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
