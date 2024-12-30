import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Input and Textarea Components - Origin UI",
  description:
    "A collection of beautiful and accessible input components built with Tailwind CSS and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const components: Component[] = [
  { name: "comp-01" },
  { name: "comp-02" },
  { name: "comp-03" },
  { name: "comp-04" },
  { name: "comp-05" },
  { name: "comp-06" },
  { name: "comp-07" },
  { name: "comp-08" },
  { name: "comp-09" },
  { name: "comp-10" },
  { name: "comp-11" },
  { name: "comp-12" },
  { name: "comp-13" },
  { name: "comp-14" },
  { name: "comp-15" },
  { name: "comp-16" },
  { name: "comp-17" },
  { name: "comp-18" },
  { name: "comp-19" },
  { name: "comp-20" },
  { name: "comp-21" },
  { name: "comp-22" },
  { name: "comp-23" },
  { name: "comp-24" },
  { name: "comp-25" },
  { name: "comp-26" },
  { name: "comp-27" },
  { name: "comp-28" },
  { name: "comp-29" },
  { name: "comp-30" },
  { name: "comp-31" },
  { name: "comp-32" },
  { name: "comp-33" },
  { name: "comp-34" },
  { name: "comp-35" },
  { name: "comp-36" },
  { name: "comp-37" },
  { name: "comp-38" },
  { name: "comp-39" },
  { name: "comp-40" },
  { name: "comp-41" },
  { name: "comp-42" },
  { name: "comp-43" },
  { name: "comp-44" },
  { name: "comp-45" },
  { name: "comp-58" },
  { name: "comp-46" },
  { name: "comp-47" },
  { name: "comp-48" },
  { name: "comp-49" },
  { name: "comp-50" },
  { name: "comp-51" },
  { name: "comp-52" },
  { name: "comp-53" },
  { name: "comp-54" },
  { name: "comp-55" },
  { name: "comp-56" },
  { name: "comp-57" },
  { name: "comp-59" },
  { name: "comp-60" },
  { name: "comp-61" },
  { name: "comp-62" },
  { name: "comp-63" },
  { name: "comp-64" },
  { name: "comp-65" },
  { name: "comp-66" },
  { name: "comp-67" },
  { name: "comp-68" },
  { name: "comp-69" },
  { name: "comp-70" },
  { name: "comp-71" },
  { name: "comp-72" },
  { name: "comp-73" },
  { name: "comp-74" },
  { name: "comp-75" },
  { name: "comp-76" },
  { name: "comp-77" },
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Input and Textarea">
            A growing collection of {components.length} input and textarea components built with
            Next.js and TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
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
