import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";

type Component = {
  name: string;
  className?: string;
};

const components: Component[] = [
  { name: "comp-240" },
  { name: "comp-241" },
  { name: "comp-242" },
  { name: "comp-243" },
  { name: "comp-244" },
  { name: "comp-245" },
  { name: "comp-246" },
  { name: "comp-247" },
  { name: "comp-248" },
  { name: "comp-249" },
  { name: "comp-250" },
  { name: "comp-251" },
  { name: "comp-252" },
  { name: "comp-253" },
  { name: "comp-254" },
  { name: "comp-255" },
  { name: "comp-256" },
  { name: "comp-257" },
  { name: "comp-258" },
  { name: "comp-259" },
  { name: "comp-260" },
  { name: "comp-261" },
  { name: "comp-262" },
  { name: "comp-263" },
  { name: "comp-264" },
  { name: "comp-265" },
  { name: "comp-266" },
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Slider">
            A growing collection of {components.length} slider components built with Next.js and
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
