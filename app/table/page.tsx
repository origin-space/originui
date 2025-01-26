import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Table components - Origin UI",
  description:
    "A collection of beautiful and accessible table components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-466" },
  { name: "comp-467" },
  { name: "comp-468" },
  { name: "comp-469" },
  { name: "comp-470" },
  { name: "comp-471" },
  { name: "comp-472" },
  { name: "comp-473" },
  { name: "comp-474" },
  { name: "comp-475" },
  { name: "comp-476" },
  { name: "comp-477" },
  { name: "comp-478" },
  { name: "comp-479" },
  { name: "comp-480" },
  { name: "comp-481" },
  { name: "comp-482" },
  { name: "comp-483" },
  { name: "comp-484" },
  { name: "comp-485" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <main>
      <PageHeader title="Table">
        A growing collection of {components.length} table components built with Tailwind CSS and React.
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