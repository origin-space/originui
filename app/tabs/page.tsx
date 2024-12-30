import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tab Components - Origin UI",
  description:
    "A collection of beautiful and accessible tab components built with Tailwind CSS and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const center = "text-center";
const components: Component[] = [
  { name: "comp-426", className: center },
  { name: "comp-427", className: center },
  { name: "comp-428", className: center },
  { name: "comp-429", className: center },
  { name: "comp-430", className: center },
  { name: "comp-431", className: center },
  { name: "comp-432", className: center },
  { name: "comp-433", className: center },
  { name: "comp-434", className: center },
  { name: "comp-435", className: center },
  { name: "comp-436", className: center },
  { name: "comp-437", className: center },
  { name: "comp-438", className: center },
  { name: "comp-439", className: center },
  { name: "comp-440", className: center },
  { name: "comp-441", className: center },
  { name: "comp-442", className: center },
  { name: "comp-443", className: center },
  { name: "comp-444", className: center },
  { name: "comp-445", className: center },
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Tab">
            A growing collection of {components.length} tab components built with Next.js and
            TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {components.map((component) => {
              return (
                <DemoComponent
                  key={component.name}
                  componentName={component.name}
                  className={component.className}
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
