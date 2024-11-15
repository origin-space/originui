import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
import PageHeader from "@/demo/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "File upload Components - Origin UI",
  description:
    "An intuitive and accessible drag-and-drop component library built with Tailwind CSS and Next.js, for seamless user interactions.",
};

const dragDropDir = "fileUpload";
const dragDropFiles: string[] = [
  "fileUpload-01",
  "fileUpload-02",
  "fileUpload-03",
  "fileUpload-04",
  "fileUpload-05",
  "fileUpload-06",
  "fileUpload-07",
  "fileUpload-08",
  "fileUpload-09",
  "fileUpload-10",
  "fileUpload-11",
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="File Upload">
            A growing collection of {dragDropFiles.length} file upload components built with Next.js
            and TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {dragDropFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={dragDropDir}
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
