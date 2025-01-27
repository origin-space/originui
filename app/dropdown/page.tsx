import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dropdown components - Origin UI",
  description:
    "A collection of beautiful and accessible dropdown components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-366" },
  { name: "comp-367" },
  { name: "comp-368" },
  { name: "comp-369" },
  { name: "comp-370" },
  { name: "comp-371" },
  { name: "comp-372" },
  { name: "comp-373" },
  { name: "comp-374" },
  { name: "comp-375" },
  { name: "comp-376" },
  { name: "comp-377" },
  { name: "comp-378" },
  { name: "comp-379" },
  { name: "comp-380" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <>
      <PageHeader title="Dropdown">
        A growing collection of {components.length} dropdown components built with Tailwind CSS and React.
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
