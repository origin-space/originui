import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dialog components - Origin UI",
  description:
    "A collection of beautiful and accessible dialog components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-313" },
  { name: "comp-314" },
  { name: "comp-315" },
  { name: "comp-316" },
  { name: "comp-317" },
  { name: "comp-318" },
  { name: "comp-319" },
  { name: "comp-320" },
  { name: "comp-321" },
  { name: "comp-322" },
  { name: "comp-323" },
  { name: "comp-324" },
  { name: "comp-325" },
  { name: "comp-326" },
  { name: "comp-327" },
  { name: "comp-328" },
  { name: "comp-329" },
  { name: "comp-330" },
  { name: "comp-331" },
  { name: "comp-332" },
  { name: "comp-333" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <main>
      <PageHeader title="Dialog">
        A growing collection of {components.length} dialog components built with Tailwind CSS and React.
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
