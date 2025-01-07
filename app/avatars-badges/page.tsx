import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avatar and Badge Components - Origin UI",
  description:
    "A collection of beautiful and accessible avatar and badge components built with Tailwind CSS and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const center = "flex items-center justify-center";
const components: Component[] = [
  { name: "comp-390", className: center },
  { name: "comp-391", className: center },
  { name: "comp-392", className: center },
  { name: "comp-393", className: center },
  { name: "comp-394", className: center },
  { name: "comp-395", className: center },
  { name: "comp-396", className: center },
  { name: "comp-397", className: center },
  { name: "comp-398", className: center },
  { name: "comp-399", className: center },
  { name: "comp-400", className: center },
  { name: "comp-401", className: center },
  { name: "comp-402", className: center },
  { name: "comp-403", className: center },
  { name: "comp-404", className: center },
  { name: "comp-405", className: center },
  { name: "comp-406", className: center },
  { name: "comp-407", className: center },
  { name: "comp-408", className: center },
  { name: "comp-409", className: center },
  { name: "comp-410", className: center },
  { name: "comp-411", className: center },
  { name: "comp-412", className: center },
  { name: "comp-413", className: center },
  { name: "comp-414", className: center },
  { name: "comp-415", className: center },
  { name: "comp-416", className: center },
  { name: "comp-417", className: center },
  { name: "comp-418", className: center },
  { name: "comp-419", className: center },
  { name: "comp-420", className: center },
  { name: "comp-421", className: center },
  { name: "comp-422", className: center },
  { name: "comp-423", className: center },
  { name: "comp-424", className: center },
  { name: "comp-425", className: center },
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Avatar and Badge">
            A growing collection of {components.length} avatar and badge components built with
            Next.js and TailwindCSS.
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
