import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alert, Notification, and Banner Components - Origin UI",
  description:
    "A collection of beautiful and accessible alert and banner components built with Tailwind CSS and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const center = "flex items-center justify-center";
const components: Component[] = [
  { name: "comp-267" },
  { name: "comp-268" },
  { name: "comp-269" },
  { name: "comp-270" },
  { name: "comp-271" },
  { name: "comp-272" },
  { name: "comp-273" },
  { name: "comp-274" },
  { name: "comp-275" },
  { name: "comp-276" },
  { name: "comp-277" },
  { name: "comp-278" },
  { name: "comp-279", className: center },
  { name: "comp-280", className: center },
  { name: "comp-281", className: center },
  { name: "comp-282", className: center },
  { name: "comp-283", className: center },
  { name: "comp-284", className: center },
  { name: "comp-285", className: center },
  { name: "comp-286", className: center },
  { name: "comp-287", className: center },
  { name: "comp-288", className: center },
  { name: "comp-289", className: center },
  { name: "comp-290", className: center },
  { name: "comp-291", className: center },
  { name: "comp-292", className: center },
  { name: "comp-293", className: center },
  { name: "comp-294", className: center },
  { name: "comp-295", className: center },
  { name: "comp-296", className: center },
  { name: "comp-297", className: center },
  { name: "comp-298", className: center },
  { name: "comp-299", className: center },
  { name: "comp-300", className: center },
];

const bannerComponents: Component[] = [
  { name: "comp-301" },
  { name: "comp-302" },
  { name: "comp-303" },
  { name: "comp-304" },
  { name: "comp-305" },
  { name: "comp-306" },
  { name: "comp-307" },
  { name: "comp-308" },
  { name: "comp-309" },
  { name: "comp-310" },
  { name: "comp-311" },
  { name: "comp-312" },
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Alert, Notification, and Banner">
            A growing collection of {components.length + bannerComponents.length} alert,
            notification, and banner components built with Next.js and TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden border-b border-border/70 sm:grid-cols-2 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
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

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {bannerComponents.map((component) => {
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
