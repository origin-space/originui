import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
import PageHeader from "@/demo/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Textarea Components - Origin UI",
  description:
    "A collection of beautiful and accessible textarea components built with Tailwind CSS and Next.js.",
};

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

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Textarea">
            A growing collection of {textareaFiles.length} input components built with Next.js and
            TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
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
