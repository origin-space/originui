import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar & Date picker components - Origin UI",
  description:
    "A collection of beautiful and accessible calendar and date picker components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-487" },
  { name: "comp-488" },
  { name: "comp-489" },
  { name: "comp-490" },
  { name: "comp-491" },
  { name: "comp-492" },
  { name: "comp-493" },
  { name: "comp-494" },
  { name: "comp-495" },
  { name: "comp-496" },
  { name: "comp-497" },
  { name: "comp-498" },
  { name: "comp-499" },
  { name: "comp-500" },
  { name: "comp-501" },
  { name: "comp-502" },
  { name: "comp-503" },
  { name: "comp-504" },
  { name: "comp-505" },
  { name: "comp-506" },
  { name: "comp-507" },
  { name: "comp-508" },
  { name: "comp-509" },
  { name: "comp-510" },
  { name: "comp-41" },
  { name: "comp-42" },
  { name: "comp-511" },
  { name: "comp-512" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <>
      <PageHeader title="Calendar & Date picker">
        A growing collection of {components.length} calendar and date picker components built with Tailwind CSS and React.
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
    </>
  );
}
