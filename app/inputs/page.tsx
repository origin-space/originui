import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
import PageHeader from "@/demo/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Input and Textarea Components - Origin UI",
  description:
    "A collection of beautiful and accessible input components built with Tailwind CSS and Next.js.",
};

const inputDir = "inputs";
const inputFiles = [
  "input-simple", //input-01
  "input-required", //input-02
  "input-with-helper-text", //input-03
  "input-with-hint", //input-04
  "input-with-ring", //input-05
  "input-with-error", //input-06
  "input-with-gray-background", //input-07
  "input-disabled", //input-08
  "input-with-start-icon", //input-09
  "input-with-end-icon", //input-10
  "input-with-start-inline-addon", //"input-11",
  "input-with-end-inline-addon", //"input-12",
  "input-with-inline-addons", //"input-13",
  "input-with-start-addon", //"input-14",
  "input-with-end-addon", //"input-15",
  "input-with-inline-start-and-end-add-on", //input-16
  "input-with-start-select", //input-17
  "input-with-end-select", //input-18
  "input-with-end-inline-button", //input-19
  "input-with-end-icon-button", //input-20
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
  "input-58",
  "input-46",
  "input-47",
  "input-48",
  "input-49",
  "input-50",
  "input-51",
  "input-52",
  "input-53",
  "input-54",
  "input-55",
  "input-56",
  "input-57",
];

const textareaDir = "textareas";
const textareaFiles = [
  "textarea-01",
  "textarea-02",
  "textarea-03",
  "textarea-04",
  "textarea-05",
  "textarea-06",
  "textarea-07",
  "textarea-08",
  "textarea-09",
  "textarea-10",
  "textarea-11",
  "textarea-12",
  "textarea-13",
  "textarea-14",
  "textarea-15",
  "textarea-16",
  "textarea-17",
  "textarea-18",
  "textarea-19",
];

const files = [...inputFiles, ...textareaFiles];

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
            {inputFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={inputDir}
                  withCli={true}
                  componentName={componentName}
                />
              );
            })}
            {textareaFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={textareaDir}
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
