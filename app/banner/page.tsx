import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banner components - Origin UI",
  description:
    "A collection of beautiful and accessible banner components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-301" },
  { name: "comp-302" },
  { name: "comp-303" },
  { name: "comp-304" },
  { name: "comp-305" },
  { name: "comp-306" },
  { name: "comp-307" },
  { name: "comp-308" },
  { name: "comp-309" },
  { name: "comp-310" },
  { name: "comp-311" },
  { name: "comp-312" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <main>
      <PageHeader title="Banner">
        A growing collection of {components.length} banner components built with Tailwind CSS and React.
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
