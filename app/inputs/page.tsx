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
  "input-with-end-button", //input-21
  "input-with-button", //input-22
  "show-hide-password-input", //input-23
  "input-with-clear-button", //input-24
  "search-input-with-kbd", //input-25
  "search-input-with-icon-and-button", //input-26
  "search-input-with-loader", //input-27
  "number-input-with-plus-minus-buttons", //input-28
  "number-input-with-chevrons", //input-29
  "file-input", //input-30",
  "input-with-overlapping-label", // input-31
  "input-with-label-animation", // input-32
  "input-with-inset-label", // input-33
  "input-with-character-limit", //input-34
  "input-with-characters-left", //input-35
  "date-input", //input-36
  "time-input", //input-37
  "time-input-with-start-icon", //input-38
  "time-input-with-end-icon", //input-39
  "date-and-time-input", //input-40
  "date-picker", //input-41
  "date-range-picker", //input-42
  "date-range-picker-unavailable", // input-43
  "otp-input-single", //input-44
  "otp-input-double", //input-45
  "phone-number-input", //input-46
  "card-number", //input-47
  "expiry-date", //input-48
  "cvv-code-input", //input-49
  "input-card-detail", //input-50
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
