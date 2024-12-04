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
];

const popoverDir = "popovers";
const popoverFiles = [
  "popover-01",
];

const totalComponents = dropdownFiles.length + popoverFiles.length;

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Checkbox, Radio, and Switch">
            A growing collection of {totalComponents} checkbox, radio and switch components built
            with Next.js and TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {dropdownFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={dropdownDir}
                  componentName={componentName}
                />
              );
            })}
            {popoverFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={popoverDir}
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
