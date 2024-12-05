import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
import PageHeader from "@/demo/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dropdown and Popover Components - Origin UI",
  description:
    "A collection of beautiful and accessible dropdown and popover components built with Tailwind CSS and Next.js.",
};

const dropdownDir = "dropdowns";
const dropdownFiles = [
  "dropdown-01",
  "dropdown-01b",
  "dropdown-02",
  "dropdown-03",
  "dropdown-04",
  "dropdown-05",
  "dropdown-07",
  "dropdown-08",
  "dropdown-06",
  "dropdown-09",
  "dropdown-10",
  "dropdown-11",
  "dropdown-12",
  "dropdown-13",
  "dropdown-14",
];

const popoverDir = "popovers";
const popoverFiles = [
  "popover-01",
  "popover-01b",
  "popover-02",
  "popover-04",
  "popover-05",
  "popover-06",
  "popover-01x",
  "popover-02x",
  "popover-03x",
];

const totalComponents = dropdownFiles.length + popoverFiles.length;

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Dropdown and Popover">
            A growing collection of {totalComponents} dropdown and popover components built
            with Next.js and TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {dropdownFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={dropdownDir}
                  componentName={componentName}
                  className="flex items-start justify-center"
                />
              );
            })}
            {popoverFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={popoverDir}
                  componentName={componentName}
                  className="flex items-start justify-center"
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
