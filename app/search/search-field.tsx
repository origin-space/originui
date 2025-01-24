"use client";

import MultipleSelector, { Option } from "./multiselect";
import type { RegistryTag } from "@/registry/registry-tags";
import { registryTags } from "@/registry/registry-tags";
import { Search } from "lucide-react";

interface SearchFieldProps {
  selectedTags: string[];
  onTagChange: (tags: string[]) => void;
}

const options: Option[] = registryTags.map((tag) => ({
  value: tag,
  label: tag,
}));

export default function SearchField({ selectedTags, onTagChange }: SearchFieldProps) {
  const handleMultipleSelectorChange = (selected: Option[]) => {
    const newTags = selected.map((tag) => tag.value as RegistryTag);
    onTagChange(newTags);
  };

  const selectedOptions = selectedTags
    .map((tag) => options.find((option) => option.value === tag))
    .filter((option): option is Option => !!option);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative">
        <MultipleSelector
          commandProps={{
            label: "Search components",
          }}
          defaultOptions={options}
          value={selectedOptions}
          hidePlaceholderWhenSelected
          emptyIndicator={<p className="text-center text-sm">No tags found</p>}
          onChange={handleMultipleSelectorChange}
          className="w-full ps-9"
        />
        <div
          className="pointer-events-none absolute inset-y-0 start-0 flex items-start justify-center ps-3 pt-2.5 text-muted-foreground/80"
          aria-label="Search component"
        >
          <Search size={16} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
