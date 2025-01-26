import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Popover components - Origin UI",
  description:
    "A collection of beautiful and accessible popover components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-381" },
  { name: "comp-382" },
  { name: "comp-383" },
  { name: "comp-384" },
  { name: "comp-385" },
  { name: "comp-386" },
  { name: "comp-387" },
  { name: "comp-388" },
  { name: "comp-389" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <main>
      <PageHeader title="Popover">
        A growing collection of {components.length} popover components built with Tailwind CSS and React.
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
