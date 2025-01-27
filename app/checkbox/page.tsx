import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkbox components - Origin UI",
  description:
    "A collection of beautiful and accessible checkbox components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-132" },
  { name: "comp-133" },
  { name: "comp-134" },
  { name: "comp-135" },
  { name: "comp-136" },
  { name: "comp-137" },
  { name: "comp-138" },
  { name: "comp-139" },
  { name: "comp-151" },
  { name: "comp-140" },
  { name: "comp-141" },
  { name: "comp-142" },
  { name: "comp-143" },
  { name: "comp-144" },
  { name: "comp-145" },
  { name: "comp-146" },
  { name: "comp-147" },
  { name: "comp-148" },
  { name: "comp-149" },
  { name: "comp-150" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <>
      <PageHeader title="Checkbox">
        A growing collection of {components.length} checkbox components built with Tailwind CSS and React.
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
