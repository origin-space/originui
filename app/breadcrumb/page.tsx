import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breadcrumb components - Origin UI",
  description:
    "A collection of beautiful and accessible breadcrumb components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-446" },
  { name: "comp-447" },
  { name: "comp-448" },
  { name: "comp-449" },
  { name: "comp-450" },
  { name: "comp-451" },
  { name: "comp-452" },
  { name: "comp-453" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <main>
      <PageHeader title="Breadcrumb">
        A growing collection of {components.length} breadcrumb components built with Tailwind CSS and React.
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
    </main>
  );
}
