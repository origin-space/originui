"use client"

import { useState } from "react"
import { RiSearch2Line } from "@remixicon/react"

import { getAvailableTags } from "@/lib/utils"
import type { RegistryTag } from "@/registry/registry-tags"
import { registryTags } from "@/registry/registry-tags"

import MultipleSelector, { Option } from "./multiselect"

interface SearchFieldProps {
  selectedTags: string[]
  onTagChange: (tags: string[]) => void
}

const baseOptions: Option[] = registryTags.map((tag) => ({
  value: tag,
  label: tag,
}))

export default function SearchField({
  selectedTags,
  onTagChange,
}: SearchFieldProps) {
  const [inputValue, setInputValue] = useState("")
  const handleMultipleSelectorChange = (selected: Option[]) => {
    const newTags = selected.map((tag) => tag.value as RegistryTag)
    onTagChange(newTags)
    setInputValue("") // Reset the search input after selection
  }

  const selectedOptions = selectedTags
    .map((tag) => baseOptions.find((option) => option.value === tag))
    .filter((option): option is Option => !!option)

  const getFilteredOptions = () => {
    if (selectedTags.length === 0) {
      return baseOptions.map((option) => ({
        ...option,
        label: `${option.value}`,
      }))
    }

    const availableTags = getAvailableTags(selectedTags as RegistryTag[])

    return baseOptions
      .map((option) => ({
        ...option,
        label: `${option.value}`,
        disable:
          !selectedTags.includes(option.value) &&
          !availableTags.includes(option.value as RegistryTag),
      }))
      .sort((a, b) => {
        // Selected tags first
        if (selectedTags.includes(a.value) && !selectedTags.includes(b.value))
          return -1
        if (!selectedTags.includes(a.value) && selectedTags.includes(b.value))
          return 1

        // Then available tags
        const aAvailable = !a.disable
        const bAvailable = !b.disable
        if (aAvailable && !bAvailable) return -1
        if (!aAvailable && bAvailable) return 1

        // Keep original order
        return 0
      })
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative">
        <MultipleSelector
          commandProps={{
            label: "Search components",
            shouldFilter: false,
          }}
          inputProps={{
            onValueChange: (v) => {
              setInputValue(v)
              return v
            },
            autoFocus: selectedTags.length === 0,
          }}
          defaultOptions={baseOptions}
          options={getFilteredOptions().filter(
            (option) =>
              !inputValue ||
              option.value.toLowerCase().includes(inputValue.toLowerCase())
          )}
          value={selectedOptions}
          hidePlaceholderWhenSelected
          emptyIndicator={<p className="text-center text-sm">No tags found</p>}
          onChange={handleMultipleSelectorChange}
          className="border-border w-full rounded-xl bg-zinc-200/40 ps-[52px] dark:bg-zinc-900"
        />
        <div
          className="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-start justify-center ps-4 pt-2.5"
          aria-label="Search component"
        >
          <RiSearch2Line size={24} aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
