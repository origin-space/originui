import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
import PageHeader from "@/demo/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tooltip and Hover Card Components - Origin UI",
  description:
    "A collection of beautiful and accessible tooltip and hover card components built with Tailwind CSS and Next.js.",
};

const tooltipDir = "tooltips";
const tooltipFiles = [
  "tooltip-01",
  "tooltip-02",
  "tooltip-03",
  "tooltip-04",
  "tooltip-05",
  "tooltip-06",
  "tooltip-07",
  "tooltip-08",
  "tooltip-09",
];

const hoverCardDir = "hover-cards";
const hoverCardFiles = [
  "hover-card-01",
  "hover-card-02",
  "hover-card-03",
];

const totalComponents = tooltipFiles.length + hoverCardFiles.length;

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Tooltip">
            A growing collection of {totalComponents} tooltip and hover card components built with Next.js and
            TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 md:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {tooltipFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={tooltipDir}
                  componentName={componentName}
                  className="text-center"
                />
              );
            })}
            {hoverCardFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={hoverCardDir}
                  componentName={componentName}
                  className="flex justify-center items-start"
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
