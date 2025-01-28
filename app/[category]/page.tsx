import { notFound } from "next/navigation";
import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import { getCategory } from "@/config/components";
import type { Metadata } from "next";

interface Props {
  params: {
    category: string;
  };
}

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const category = getCategory(params.category);

  if (!category) {
    return {};
  }

  return {
    title: `${category.name} components - Origin UI`,
    description: `A collection of beautiful and accessible ${category.name.toLowerCase()} components built with Tailwind CSS and React.`
  }
}

export default async function Page({
  params,
}: {
  params: { category: string }
}) {
  const category = getCategory(params.category);

  if (!category) {
    notFound()
  }

  const components = getComponentsByNames(category.components.map(item => item.name));

  return (
    <>
      <PageHeader title={category.name}>
        A growing collection of {components.length} {category.name.toLowerCase()} components built with Tailwind CSS and React.
      </PageHeader>
      <PageGrid>
        {components.map((component) => (
          <ComponentCard key={component.name} component={component}>
            <ComponentLoader component={component} />
            <ComponentDetails component={component} />
          </ComponentCard>
        ))}
      </PageGrid>
      <Cta />
    </>
  );
}
