import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { categories, getCategory } from "@/config/components"
import { getComponentsByNames } from "@/lib/utils"
import ComponentCard from "@/components/component-card"
import ComponentDetails from "@/components/component-details"
import ComponentLoader from "@/components/component-loader-server"
import Cta from "@/components/cta"
import PageGrid from "@/components/page-grid"
import PageHeader from "@/components/page-header"

type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).category)

  if (!category) {
    return {}
  }

  // Get components to check count
  const components = getComponentsByNames(
    category.components.map((item) => item.name)
  )

  const isSingleComponent = components.length === 1

  // Custom title and description for event-calendar
  if (category.slug === "event-calendar") {
    return {
      title:
        "Event calendar component built with React and Tailwind CSS - Origin UI",
      description:
        "An event calendar component built with React and Tailwind CSS. Originally built in v0 and currently in early alpha stage.",
    }
  }

  return {
    title: isSingleComponent
      ? `${category.name} component built with React and Tailwind CSS - Origin UI`
      : `${category.name} components built with React and Tailwind CSS - Origin UI`,
    description: isSingleComponent
      ? `A beautiful and accessible ${category.name.toLowerCase()} component built with React and Tailwind CSS.`
      : `A collection of beautiful and accessible ${category.name.toLowerCase()} components built with React and Tailwind CSS.`,
  }
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export default async function Page({ params }: Props) {
  const category = getCategory((await params).category)

  if (!category) {
    notFound()
  }

  const components = getComponentsByNames(
    category.components.map((item) => item.name)
  )

  // Determine the description text based on category
  const getDescriptionText = () => {
    // Special case for event-calendar
    if (category.slug === "event-calendar") {
      return (
        <span className="block text-balance">
          An event calendar component built with React and Tailwind CSS.
          Originally built in{" "}
          <a
            href="https://v0.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            v0
          </a>{" "}
          and currently in early alpha stage.{" "}
          <a
            href="https://github.com/origin-space/event-calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary inline-flex items-center gap-1 hover:underline"
          >
            Docs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="9"
              className="-mt-1 fill-current"
            >
              <path d="m1.55 8.445-.776-.776 5.767-5.777H2.087l.01-1.074H8.39v6.304H7.307l.01-4.454L1.55 8.445Z" />
            </svg>
          </a>
        </span>
      )
    }

    // Default case based on component count
    return components.length === 1
      ? `A ${category.name.toLowerCase()} component built with React and Tailwind CSS.`
      : `A growing collection of ${components.length} ${category.name.toLowerCase()} components built with React and Tailwind CSS.`
  }

  return (
    <>
      <PageHeader title={category.name}>{getDescriptionText()}</PageHeader>
      <PageGrid>
        {components.map((component) => (
          <ComponentCard
            key={component.name}
            component={component}
            className="data-[slot=comp-542]:px-0"
          >
            <ComponentLoader component={component} />
            <ComponentDetails component={component} />
          </ComponentCard>
        ))}
      </PageGrid>
      <Cta />
    </>
  )
}
