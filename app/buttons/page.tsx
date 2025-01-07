import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Button Components - Origin UI",
  description:
    "A collection of beautiful and accessible button components built with Tailwind CSS and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const center = "text-center";
const components: Component[] = [
  { name: "comp-78", className: center },
  { name: "comp-79", className: center },
  { name: "comp-80", className: center },
  { name: "comp-81", className: center },
  { name: "comp-82", className: center },
  { name: "comp-83", className: center },
  { name: "comp-84", className: center },
  { name: "comp-85", className: center },
  { name: "comp-86", className: center },
  { name: "comp-87", className: center },
  { name: "comp-88", className: center },
  { name: "comp-89", className: center },
  { name: "comp-90", className: center },
  { name: "comp-91", className: center },
  { name: "comp-92", className: center },
  { name: "comp-93", className: center },
  { name: "comp-94", className: center },
  { name: "comp-95", className: center },
  { name: "comp-96", className: center },
  { name: "comp-97", className: center },
  { name: "comp-98", className: center },
  { name: "comp-99", className: center },
  { name: "comp-100", className: center },
  { name: "comp-101", className: center },
  { name: "comp-129", className: center },
  { name: "comp-130", className: center },
  { name: "comp-102", className: center },
  { name: "comp-103", className: center },
  { name: "comp-104", className: center },
  { name: "comp-105", className: center },
  { name: "comp-106", className: center },
  { name: "comp-107", className: center },
  { name: "comp-108", className: center },
  { name: "comp-109", className: center },
  { name: "comp-110", className: center },
  { name: "comp-111", className: center },
  { name: "comp-112", className: center },
  { name: "comp-113", className: center },
  { name: "comp-114", className: center },
  { name: "comp-131", className: center },
  { name: "comp-115", className: center },
  { name: "comp-116", className: center },
  { name: "comp-117", className: center },
  { name: "comp-118", className: center },
  { name: "comp-119", className: center },
  { name: "comp-120", className: center },
  { name: "comp-121", className: center },
  { name: "comp-122", className: center },
  { name: "comp-123", className: center },
  { name: "comp-124", className: center },
  { name: "comp-125", className: center },
  { name: "comp-126", className: center },
  { name: "comp-127", className: center },
  { name: "comp-128", className: center },
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Button">
            A growing collection of {components.length} button components built with Next.js and
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
