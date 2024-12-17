import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
import PageHeader from "@/demo/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spinner Components - Origin UI",
  description:
    "A collection of beautiful and accessible spinner components built with Tailwind CSS and Next.js.",
};

const directory = "spinners";
const spinnerFiles = [
  "spinner-01",
  "spinner-02",
  "spinner-03",
  "spinner-04",
  "spinner-05",
  "spinner-06",
  "spinner-07",
  "spinner-08",
  "spinner-09",
  "spinner-10",
  "spinner-11",
  "spinner-12",
  "spinner-13",
  "spinner-14",
  "spinner-15",
  "spinner-16",
  "spinner-17",
  "spinner-18",
  "spinner-19",
  "spinner-20",
  "spinner-21",
  "spinner-22",
  "spinner-23",
  "spinner-24",
  "spinner-25",
  "spinner-26",
  "spinner-27",
  "spinner-28",
  "spinner-29",
  "spinner-30",
  "spinner-31",
  "spinner-32",
  "spinner-33",


];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Spinner">
            A growing collection of {spinnerFiles.length} spinner components built with Next.js and
            TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {spinnerFiles.map((componentName) => {
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
