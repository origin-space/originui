import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radio components - Origin UI",
  description:
    "A collection of beautiful and accessible radio components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-152" },
  { name: "comp-153" },
  { name: "comp-154" },
  { name: "comp-155" },
  { name: "comp-156" },
  { name: "comp-157" },
  { name: "comp-158" },
  { name: "comp-159" },
  { name: "comp-160" },
  { name: "comp-161" },
  { name: "comp-162" },
  { name: "comp-163" },
  { name: "comp-164" },
  { name: "comp-165" },
  { name: "comp-166" },
  { name: "comp-171" },
  { name: "comp-167" },
  { name: "comp-168" },
  { name: "comp-169" },
  { name: "comp-170" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <>
      <PageHeader title="Radio">
        A growing collection of {components.length} radio components built with Tailwind CSS and React.
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
