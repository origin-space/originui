import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";
import PageGrid from "@/components/page-grid";
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
