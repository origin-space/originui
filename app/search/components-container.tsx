"use client"

import { useCallback, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import type { RegistryItem } from "shadcn/registry"

import { getComponents } from "@/lib/utils"
import ComponentCard from "@/components/component-card"
import ComponentDetails from "@/components/component-details"
import ComponentLoader from "@/components/component-loader-client"
import PageGrid from "@/components/page-grid"
import type { RegistryTag } from "@/registry/registry-tags"

import SearchField from "./search-field"

export default function ComponentsContainer() {
  const searchParams = useSearchParams()
  const tags = useMemo(() => {
    return (searchParams
      ?.get("tags")
      ?.split(",")
      .filter(Boolean)
      .map((tag) => tag.replace(/\+/g, " ")) || []) as RegistryTag[]
  }, [searchParams])

  const filtered = useMemo(() => {
    if (!tags.length) return []
    return getComponents(tags)
  }, [tags])

  const updateTags = useCallback((newTags: string[]) => {
    const url = new URL(window.location.href)
    if (newTags.length > 0) {
      const formattedTags = newTags
        .map((tag) => tag.replace(/\s+/g, "+"))
        .join(",")
      url.searchParams.set("tags", formattedTags)
    } else {
      url.searchParams.delete("tags")
    }
    window.history.replaceState({}, "", url.toString())
  }, [])

  return (
    <div className="space-y-4">
      <SearchField selectedTags={tags} onTagChange={updateTags} />
      <PageGrid>
        {filtered.map((component: RegistryItem) => (
          <ComponentCard
            key={component.name}
            component={component}
            isSearchPage
          >
            <ComponentLoader component={component} />
            <ComponentDetails component={component} />
          </ComponentCard>
        ))}
        {tags.length > 0 && filtered.length === 0 && (
          <div className="col-span-full py-8 text-center">
            <p className="text-muted-foreground">
              No components found for the selected tags.
            </p>
          </div>
        )}
      </PageGrid>
    </div>
  )
}
