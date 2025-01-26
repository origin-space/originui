import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Badge components - Origin UI",
  description:
    "A collection of beautiful and accessible badge components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-413" },
  { name: "comp-414" },
  { name: "comp-415" },
  { name: "comp-416" },
  { name: "comp-417" },
  { name: "comp-418" },
  { name: "comp-419" },
  { name: "comp-420" },
  { name: "comp-421" },
  { name: "comp-422" },
  { name: "comp-423" },
  { name: "comp-424" },
  { name: "comp-425" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <main>
      <PageHeader title="Badge">
        A growing collection of {components.length} badge components built with Tailwind CSS and React.
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
