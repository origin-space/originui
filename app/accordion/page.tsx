import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accordion components - Origin UI",
  description:
    "A collection of beautiful and accessible accordion components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-334" },
  { name: "comp-335" },
  { name: "comp-336" },
  { name: "comp-337" },
  { name: "comp-338" },
  { name: "comp-339" },
  { name: "comp-340" },
  { name: "comp-341" },
  { name: "comp-342" },
  { name: "comp-343" },
  { name: "comp-344" },
  { name: "comp-345" },
  { name: "comp-346" },
  { name: "comp-347" },
  { name: "comp-348" },
  { name: "comp-349" },
  { name: "comp-350" },
  { name: "comp-351" },
  { name: "comp-352" },
  { name: "comp-353" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <main>
      <PageHeader title="Accordion">
        A growing collection of {components.length} accordion components built with Tailwind CSS and React.
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
