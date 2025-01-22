import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";
import PageGrid from "@/components/page-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accordion Components - Origin UI",
  description:
    "A collection of beautiful and accessible accordion components built with Tailwind CSS and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const components: Component[] = [
  { name: "comp-334" },
  { name: "comp-335" },
  { name: "comp-336" },
  { name: "comp-337" },
  { name: "comp-338" },
  { name: "comp-339" },
  { name: "comp-340" },
  { name: "comp-341" },
  { name: "comp-342" },
  { name: "comp-343" },
  { name: "comp-344" },
  { name: "comp-345" },
  { name: "comp-346" },
  { name: "comp-347" },
  { name: "comp-348" },
  { name: "comp-349" },
  { name: "comp-350" },
  { name: "comp-351" },
  { name: "comp-352" },
  { name: "comp-353" },
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Accordion">
            A growing collection of {components.length} accordion components built with Next.js and
            TailwindCSS.
          </PageHeader>

          <PageGrid>
            {components.map((component) => {
              return (
                <DemoComponent
                  key={component.name}
                  componentName={component.name}
                  className={component.className}
                />
              );
            })}
          </PageGrid>

          <Cta />
        </div>
      </div>
    </main>
  );
}
