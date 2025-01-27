import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avatar components - Origin UI",
  description:
    "A collection of beautiful and accessible avatar components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-390" },
  { name: "comp-391" },
  { name: "comp-392" },
  { name: "comp-393" },
  { name: "comp-394" },
  { name: "comp-395" },
  { name: "comp-396" },
  { name: "comp-397" },
  { name: "comp-398" },
  { name: "comp-399" },
  { name: "comp-400" },
  { name: "comp-401" },
  { name: "comp-402" },
  { name: "comp-403" },
  { name: "comp-404" },
  { name: "comp-405" },
  { name: "comp-406" },
  { name: "comp-407" },
  { name: "comp-408" },
  { name: "comp-409" },
  { name: "comp-410" },
  { name: "comp-411" },
  { name: "comp-412" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <>
      <PageHeader title="Avatar">
        A growing collection of {components.length} avatar components built with Tailwind CSS and React.
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
