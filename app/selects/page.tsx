import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Select Components - Origin UI",
  description:
    "A collection of beautiful and accessible select components built with Tailwind CSS and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const components: Component[] = [
  { name: "comp-189" },
  { name: "comp-190" },
  { name: "comp-191" },
  { name: "comp-192" },
  { name: "comp-193" },
  { name: "comp-194" },
  { name: "comp-195" },
  { name: "comp-196" },
  { name: "comp-197" },
  { name: "comp-198" },
  { name: "comp-199" },
  { name: "comp-200" },
  { name: "comp-201" },
  { name: "comp-202" },
  { name: "comp-203" },
  { name: "comp-204" },
  { name: "comp-205" },
  { name: "comp-206" },
  { name: "comp-207" },
  { name: "comp-208" },
  { name: "comp-209" },
  { name: "comp-210" },
  { name: "comp-211" },
  { name: "comp-212" },
  { name: "comp-213" },
  { name: "comp-214" },
  { name: "comp-215" },
  { name: "comp-216" },
  { name: "comp-217" },
  { name: "comp-218" },
  { name: "comp-219" },
  { name: "comp-220" },
  { name: "comp-221" },
  { name: "comp-222" },
  { name: "comp-223" },
  { name: "comp-224" },
  { name: "comp-225" },
  { name: "comp-226" },
  { name: "comp-227" },
  { name: "comp-228" },
  { name: "comp-229" },
  { name: "comp-230" },
  { name: "comp-231" },
  { name: "comp-232" },
  { name: "comp-233" },
  { name: "comp-234" },
  { name: "comp-235" },
  { name: "comp-236" },
  { name: "comp-237" },
  { name: "comp-238" },
  { name: "comp-239" },
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Select">
            A growing collection of {components.length} select components built with Next.js and
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
