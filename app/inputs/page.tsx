import { getComponents } from '@/lib/utils';
import Cta from "@/components/cta";
import ComponentCard from "@/components/component-card";
import ComponentLoader from "@/components/component-loader-server";
import PageHeader from "@/components/page-header";
import PageGrid from "@/components/page-grid";
import ComponentDetails from "@/components/component-details";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Input and Textarea Components - Origin UI",
  description:
    "A collection of beautiful and accessible input components built with Tailwind CSS and Next.js.",
};

export default function Page() {
  const registryComponents = getComponents(1, ["Input"]);    
  const components = registryComponents.components;  

  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Input and Textarea">
            A growing collection of {components.length} input and textarea components built with
            Next.js and TailwindCSS.
          </PageHeader>

          <PageGrid>
            {components.map((component) => {
              return (
                <ComponentCard key={component.name} component={component}>
                  <ComponentLoader component={component} />
                  <ComponentDetails component={component} />
                </ComponentCard>
              );
            })}
          </PageGrid>

          <Cta />
        </div>
      </div>
    </main>
  );
}
