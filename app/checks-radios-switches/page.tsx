import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkbox, Radio, and Switch Components - Origin UI",
  description:
    "A collection of beautiful and accessible checkbox, radio and switch components built with Tailwind CSS and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const center = "flex justify-center";
const components: Component[] = [
  { name: "comp-132" },
  { name: "comp-133" },
  { name: "comp-134" },
  { name: "comp-135" },
  { name: "comp-136" },
  { name: "comp-137" },
  { name: "comp-138" },
  { name: "comp-139" },
  { name: "comp-151" },
  { name: "comp-140" },
  { name: "comp-141" },
  { name: "comp-142" },
  { name: "comp-143" },
  { name: "comp-144" },
  { name: "comp-145" },
  { name: "comp-146" },
  { name: "comp-147" },
  { name: "comp-148" },
  { name: "comp-149" },
  { name: "comp-150" },
  { name: "comp-152" },
  { name: "comp-153" },
  { name: "comp-154" },
  { name: "comp-155" },
  { name: "comp-156" },
  { name: "comp-157" },
  { name: "comp-158" },
  { name: "comp-159" },
  { name: "comp-160" },
  { name: "comp-161" },
  { name: "comp-162" },
  { name: "comp-163" },
  { name: "comp-164" },
  { name: "comp-165" },
  { name: "comp-166" },
  { name: "comp-171", className: center },
  { name: "comp-167" },
  { name: "comp-168" },
  { name: "comp-169" },
  { name: "comp-170" },
  { name: "comp-172", className: center },
  { name: "comp-173", className: center },
  { name: "comp-174", className: center },
  { name: "comp-175", className: center },
  { name: "comp-176", className: center },
  { name: "comp-177", className: center },
  { name: "comp-178", className: center },
  { name: "comp-179", className: center },
  { name: "comp-180", className: center },
  { name: "comp-181", className: center },
  { name: "comp-182", className: center },
  { name: "comp-183", className: center },
  { name: "comp-184", className: center },
  { name: "comp-185", className: center },
  { name: "comp-186", className: center },
  { name: "comp-187", className: center },
  { name: "comp-188", className: center },
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Checkbox, Radio, and Switch">
            A growing collection of {components.length} checkbox, radio and switch components built
            with Next.js and TailwindCSS.
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
