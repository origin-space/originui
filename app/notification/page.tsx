import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notification components - Origin UI",
  description:
    "A collection of beautiful and accessible notification components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-279" },
  { name: "comp-280" },
  { name: "comp-281" },
  { name: "comp-282" },
  { name: "comp-283" },
  { name: "comp-284" },
  { name: "comp-285" },
  { name: "comp-286" },
  { name: "comp-287" },
  { name: "comp-288" },
  { name: "comp-289" },
  { name: "comp-290" },
  { name: "comp-291" },
  { name: "comp-292" },
  { name: "comp-293" },
  { name: "comp-294" },
  { name: "comp-295" },
  { name: "comp-296" },
  { name: "comp-297" },
  { name: "comp-298" },
  { name: "comp-299" },
  { name: "comp-300" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <>
      <PageHeader title="Notification">
        A growing collection of {components.length} notification components built with Tailwind CSS and React.
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
