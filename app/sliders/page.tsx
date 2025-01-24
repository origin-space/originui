import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponents } from "@/lib/utils";
import type { Metadata } from "next";

const componentName = "Slider";

export const metadata: Metadata = {
  title: `${componentName} Components - Origin UI`,
  description:
    `A collection of beautiful and accessible ${componentName} components built with Tailwind CSS and React.`,
};

export default function Page() {
  const components = getComponents([componentName]);

  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title={componentName}>
            A growing collection of {components.length} {componentName} components built with
            Tailwind CSS and React.
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
