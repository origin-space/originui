import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ExternalLink } from "lucide-react"

import { categories, getCategory } from "@/config/components"
import { getComponentsByNames } from "@/lib/utils"
import ComponentCard from "@/components/component-card"
import ComponentDetails from "@/components/component-details"
import ComponentLoader from "@/components/component-loader-server"
import Cta from "@/components/cta"
import PageGrid from "@/components/page-grid"
import PageHeader from "@/components/page-header"
import { Button } from "@/registry/default/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

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

  return (
    <>
      <PageHeader title={category.name}>
        {components.length === 1
          ? `A ${category.name.toLowerCase()} component built with React and Tailwind CSS.`
          : `A growing collection of ${components.length} ${category.name.toLowerCase()} components built with React and Tailwind CSS.`}
      </PageHeader>
      <PageGrid>
        {components.map((component) => (
          <ComponentCard key={component.name} component={component}>
            <ComponentLoader component={component} />
            <ComponentDetails component={component} />
          </ComponentCard>
        ))}
      </PageGrid>

      {/* Notes for full calendar component */}
      {components[0].name === "comp-542" && (
        <div className="container mx-auto px-4 py-10">
          <h2 className="font-heading text-foreground mb-2 text-2xl font-bold">
            Notes
          </h2>
          <p className="text-muted-foreground mb-4 text-lg">
            This calendar component is in early alpha stage. We are actively
            working on improving it.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="h-7 gap-1 px-2"
            asChild
          >
            <a
              href="https://github.com/origin-space/full-calendar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
              <ExternalLink
                className="-me-0.5 -mt-[3px] size-3 opacity-60"
                aria-hidden="true"
              />
            </a>
          </Button>

          <h2 className="font-heading text-foreground mt-12 mb-2 text-2xl font-bold">
            Props
          </h2>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    events
                  </code>
                </TableCell>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    CalendarEvent[]
                  </code>
                </TableCell>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    []
                  </code>
                </TableCell>
                <TableCell>
                  Array of events to display in the calendar
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    onEventAdd
                  </code>
                </TableCell>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    (event: CalendarEvent) {"->"} void
                  </code>
                </TableCell>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    -
                  </code>
                </TableCell>
                <TableCell>Callback function when an event is added</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    onEventUpdate
                  </code>
                </TableCell>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    (event: CalendarEvent) {"->"} void
                  </code>
                </TableCell>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    -
                  </code>
                </TableCell>
                <TableCell>
                  Callback function when an event is updated
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    onEventDelete
                  </code>
                </TableCell>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    (eventId: string) {"->"} void
                  </code>
                </TableCell>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    -
                  </code>
                </TableCell>
                <TableCell>
                  Callback function when an event is deleted
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    className
                  </code>
                </TableCell>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    string
                  </code>
                </TableCell>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    -
                  </code>
                </TableCell>
                <TableCell>Additional CSS class for styling</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    initialView
                  </code>
                </TableCell>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    &quot;month&quot; | &quot;week&quot; | &quot;day&quot; |
                    &quot;agenda&quot;
                  </code>
                </TableCell>
                <TableCell>
                  <code className="bg-muted rounded px-1 py-0.5 font-mono text-xs">
                    &quot;month&quot;
                  </code>
                </TableCell>
                <TableCell>Initial view mode of the calendar</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
      <Cta />
    </>
  )
}
