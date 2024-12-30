import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dropdown and Popover Components - Origin UI",
  description:
    "A collection of beautiful and accessible dropdown and popover components built with Tailwind CSS and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const center = "flex items-center justify-center";
const components: Component[] = [
  { name: "comp-366", className: center },
  { name: "comp-367", className: center },
  { name: "comp-368", className: center },
  { name: "comp-369", className: center },
  { name: "comp-370", className: center },
  { name: "comp-371", className: center },
  { name: "comp-372", className: center },
  { name: "comp-373", className: center },
  { name: "comp-374", className: center },
  { name: "comp-375", className: center },
  { name: "comp-376", className: center },
  { name: "comp-377", className: center },
  { name: "comp-378", className: center },
  { name: "comp-379", className: center },
  { name: "comp-380", className: center },
  { name: "comp-381", className: center },
  { name: "comp-382", className: center },
  { name: "comp-383", className: center },
  { name: "comp-384", className: center },
  { name: "comp-385", className: center },
  { name: "comp-386", className: center },
  { name: "comp-387", className: center },
  { name: "comp-388", className: center },
  { name: "comp-389", className: center },
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Dropdown and Popover">
            A growing collection of {components.length} dropdown menu and popover components built
            with Next.js and TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 md:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
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
