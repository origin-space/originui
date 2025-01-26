import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alert components - Origin UI",
  description:
    "A collection of beautiful and accessible alert components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-267" },
  { name: "comp-268" },
  { name: "comp-269" },
  { name: "comp-270" },
  { name: "comp-271" },
  { name: "comp-272" },
  { name: "comp-273" },
  { name: "comp-274" },
  { name: "comp-275" },
  { name: "comp-276" },
  { name: "comp-277" },
  { name: "comp-278" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <main>
      <PageHeader title="Alert">
        A growing collection of {components.length} alert components built with Tailwind CSS and React.
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
