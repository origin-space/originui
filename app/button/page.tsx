import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Button components - Origin UI",
  description:
    "A collection of beautiful and accessible button components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-78" },
  { name: "comp-79" },
  { name: "comp-80" },
  { name: "comp-81" },
  { name: "comp-82" },
  { name: "comp-83" },
  { name: "comp-84" },
  { name: "comp-85" },
  { name: "comp-86" },
  { name: "comp-87" },
  { name: "comp-88" },
  { name: "comp-89" },
  { name: "comp-90" },
  { name: "comp-91" },
  { name: "comp-92" },
  { name: "comp-93" },
  { name: "comp-94" },
  { name: "comp-95" },
  { name: "comp-96" },
  { name: "comp-97" },
  { name: "comp-98" },
  { name: "comp-99" },
  { name: "comp-100" },
  { name: "comp-101" },
  { name: "comp-129" },
  { name: "comp-130" },
  { name: "comp-102" },
  { name: "comp-103" },
  { name: "comp-104" },
  { name: "comp-105" },
  { name: "comp-106" },
  { name: "comp-107" },
  { name: "comp-108" },
  { name: "comp-109" },
  { name: "comp-110" },
  { name: "comp-111" },
  { name: "comp-112" },
  { name: "comp-113" },
  { name: "comp-114" },
  { name: "comp-131" },
  { name: "comp-115" },
  { name: "comp-116" },
  { name: "comp-117" },
  { name: "comp-118" },
  { name: "comp-119" },
  { name: "comp-120" },
  { name: "comp-121" },
  { name: "comp-122" },
  { name: "comp-123" },
  { name: "comp-124" },
  { name: "comp-125" },
  { name: "comp-126" },
  { name: "comp-127" },
  { name: "comp-128" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <>
      <PageHeader title="Button">
        A growing collection of {components.length} button components built with Tailwind CSS and React.
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
