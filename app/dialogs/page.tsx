import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dialog Components - Origin UI",
  description:
    "A collection of beautiful and accessible dialog components built with Tailwind CSS and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const center = "text-center";
const components: Component[] = [
  { name: "comp-313", className: center },
  { name: "comp-314", className: center },
  { name: "comp-315", className: center },
  { name: "comp-316", className: center },
  { name: "comp-317", className: center },
  { name: "comp-318", className: center },
  { name: "comp-319", className: center },
  { name: "comp-320", className: center },
  { name: "comp-321", className: center },
  { name: "comp-322", className: center },
  { name: "comp-323", className: center },
  { name: "comp-324", className: center },
  { name: "comp-325", className: center },
  { name: "comp-326", className: center },
  { name: "comp-327", className: center },
  { name: "comp-328", className: center },
  { name: "comp-329", className: center },
  { name: "comp-330", className: center },
  { name: "comp-331", className: center },
  { name: "comp-332", className: center },
  { name: "comp-333", className: center },
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Dialog">
            A growing collection of {components.length} dialog components built with Next.js and
            TailwindCSS.
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
