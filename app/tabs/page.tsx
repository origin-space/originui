import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabs components - Origin UI",
  description:
    "A collection of beautiful and accessible tabs components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-426" },
  { name: "comp-427" },
  { name: "comp-428" },
  { name: "comp-429" },
  { name: "comp-430" },
  { name: "comp-431" },
  { name: "comp-432" },
  { name: "comp-433" },
  { name: "comp-434" },
  { name: "comp-435" },
  { name: "comp-436" },
  { name: "comp-437" },
  { name: "comp-438" },
  { name: "comp-439" },
  { name: "comp-440" },
  { name: "comp-441" },
  { name: "comp-442" },
  { name: "comp-443" },
  { name: "comp-444" },
  { name: "comp-445" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <>
      <PageHeader title="Tabs">
        A growing collection of {components.length} tabs components built with Tailwind CSS and React.
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