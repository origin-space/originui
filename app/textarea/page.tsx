import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Textarea components - Origin UI",
  description:
    "A collection of beautiful and accessible textarea components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-59" },
  { name: "comp-60" },
  { name: "comp-61" },
  { name: "comp-62" },
  { name: "comp-63" },
  { name: "comp-64" },
  { name: "comp-65" },
  { name: "comp-66" },
  { name: "comp-67" },
  { name: "comp-68" },
  { name: "comp-69" },
  { name: "comp-70" },
  { name: "comp-71" },
  { name: "comp-72" },
  { name: "comp-73" },
  { name: "comp-74" },
  { name: "comp-75" },
  { name: "comp-76" },
  { name: "comp-77" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <>
      <PageHeader title="Textarea">
        A growing collection of {components.length} textarea components built with Tailwind CSS and React.
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
