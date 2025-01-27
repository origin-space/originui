import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Switch components - Origin UI",
  description:
    "A collection of beautiful and accessible toggle switch components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-172" },
  { name: "comp-173" },
  { name: "comp-174" },
  { name: "comp-175" },
  { name: "comp-176" },
  { name: "comp-177" },
  { name: "comp-178" },
  { name: "comp-179" },
  { name: "comp-180" },
  { name: "comp-181" },
  { name: "comp-182" },
  { name: "comp-183" },
  { name: "comp-184" },
  { name: "comp-185" },
  { name: "comp-186" },
  { name: "comp-187" },
  { name: "comp-188" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <>
      <PageHeader title="Switch">
        A growing collection of {components.length} toggle switch components built with Tailwind CSS and React.
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