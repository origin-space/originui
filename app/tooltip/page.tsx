import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tooltip components - Origin UI",
  description:
    "A collection of beautiful and accessible tooltip components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-354" },
  { name: "comp-355" },
  { name: "comp-356" },
  { name: "comp-357" },
  { name: "comp-358" },
  { name: "comp-359" },
  { name: "comp-360" },
  { name: "comp-361" },
  { name: "comp-362" },
  { name: "comp-363" },
  { name: "comp-364" },
  { name: "comp-365" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <main>
      <PageHeader title="Tooltip">
        A growing collection of {components.length} tooltip components built with Tailwind CSS and React.
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
