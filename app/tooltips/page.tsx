import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";
import PageGrid from "@/components/page-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tooltip and Hover Card Components - Origin UI",
  description:
    "A collection of beautiful and accessible tooltip and hover card components built with Tailwind CSS and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const center = "flex items-center justify-center";
const components: Component[] = [
  { name: "comp-354", className: center },
  { name: "comp-355", className: center },
  { name: "comp-356", className: center },
  { name: "comp-357", className: center },
  { name: "comp-358", className: center },
  { name: "comp-359", className: center },
  { name: "comp-360", className: center },
  { name: "comp-361", className: center },
  { name: "comp-362", className: center },
  { name: "comp-363", className: center },
  { name: "comp-364", className: center },
  { name: "comp-365", className: center },
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Tooltip">
            A growing collection of {components.length} tooltip and hover card components built with
            Next.js and TailwindCSS.
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
