import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Table Components - Origin UI",
  description:
    "A collection of beautiful and accessible table components built with Tailwind CSS and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const components: Component[] = [
  { name: "comp-466" }, // 466
  { name: "comp-477" }, // 467
  { name: "comp-470" }, // 468
  { name: "comp-471" }, // 469
  { name: "comp-472" }, // 470
  { name: "comp-469" }, // 471
  { name: "comp-473" }, // 472
  { name: "comp-467" }, // 473
  { name: "comp-474" }, // 474
  { name: "comp-475" }, // 475
  { name: "comp-476" }, // 476
  { name: "comp-468" }, // 477
  { name: "comp-478" }, // 478
  { name: "comp-479" }, // 479
  { name: "comp-480" }, // 480
  { name: "comp-481" }, // 481
  { name: "comp-482" }, // 482
  { name: "comp-483" }, // 483
  { name: "comp-484" }, // 484
  { name: "comp-485" }, // 485
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Table">
            A growing collection of {components.length} table components built with Next.js and
            TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden [&>*]:relative [&>*]:px-1 [&>*]:py-20 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
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
