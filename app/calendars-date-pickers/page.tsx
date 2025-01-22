import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";
import PageGrid from "@/components/page-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar and Date picker Components - Origin UI",
  description:
    "A collection of beautiful and accessible calendar and date picker components built with Tailwind CSS and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const center = "flex justify-center items-start";
const components: Component[] = [
  { name: "comp-487", className: center },
  { name: "comp-488", className: center },
  { name: "comp-489", className: center },
  { name: "comp-490", className: center },
  { name: "comp-491", className: center },
  { name: "comp-492", className: center },
  { name: "comp-493", className: center },
  { name: "comp-494", className: center },
  { name: "comp-495", className: center },
  { name: "comp-496", className: center },
  { name: "comp-497", className: center },
  { name: "comp-498", className: center },
  { name: "comp-499", className: center },
  { name: "comp-500", className: center },
  { name: "comp-501", className: center },
  { name: "comp-502", className: center },
  { name: "comp-503", className: center },
  { name: "comp-504", className: center },
  { name: "comp-505", className: center },
  { name: "comp-506", className: center },
  { name: "comp-507", className: center },
  { name: "comp-508", className: center },
  { name: "comp-509", className: center },
  { name: "comp-510", className: center },  
  { name: "comp-41" },
  { name: "comp-42" },
  { name: "comp-511" },
  { name: "comp-512" },  
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Calendar and Date picker">
            A growing collection of{" "}
            {components.length} calendar and date
            picker components built with Next.js and TailwindCSS.
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
