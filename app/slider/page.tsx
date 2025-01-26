import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slider components - Origin UI",
  description:
    "A collection of beautiful and accessible slider components built with Tailwind CSS and React.",
};

const componentsList = [
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
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <main>
      <PageHeader title="Slider">
        A growing collection of {components.length} slider components built with Tailwind CSS and React.
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
