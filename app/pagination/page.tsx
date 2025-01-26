import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagination components - Origin UI",
  description:
    "A collection of beautiful and accessible pagination components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-454" },
  { name: "comp-455" },
  { name: "comp-456" },
  { name: "comp-457" },
  { name: "comp-458" },
  { name: "comp-459" },
  { name: "comp-460" },
  { name: "comp-461" },
  { name: "comp-462" },
  { name: "comp-463" },
  { name: "comp-464" },
  { name: "comp-465" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <main>
      <PageHeader title="Pagination">
        A growing collection of {components.length} pagination components built with Tailwind CSS and React.
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
