"use client";

import MultipleSelector, { Option } from "./multiselect";
import type { RegistryTag } from "@/registry/registry-tags";
import { registryTags } from "@/registry/registry-tags";
import { Search } from "lucide-react";
import { getAvailableTags } from "@/lib/utils";

interface SearchFieldProps {
  selectedTags: string[];
  onTagChange: (tags: string[]) => void;
}

const baseOptions: Option[] = registryTags.map((tag) => ({
  value: tag,
  label: tag,
}));

export default function SearchField({ selectedTags, onTagChange }: SearchFieldProps) {
  const handleMultipleSelectorChange = (selected: Option[]) => {
    const newTags = selected.map((tag) => tag.value as RegistryTag);
    onTagChange(newTags);
  };

  const selectedOptions = selectedTags
    .map((tag) => baseOptions.find((option) => option.value === tag))
    .filter((option): option is Option => !!option);

  const getFilteredOptions = () => {    
    if (selectedTags.length === 0) {
      return baseOptions.map(option => ({
        ...option,
        label: `${option.value}`,
      }));
    }
    
    const availableTags = getAvailableTags(selectedTags as RegistryTag[]);
    
    return baseOptions.map((option) => ({
      ...option,
      label: `${option.value}`,
      disable: !selectedTags.includes(option.value) && !availableTags.includes(option.value as RegistryTag),
    }))
    .sort((a, b) => {
      // Selected tags first
      if (selectedTags.includes(a.value) && !selectedTags.includes(b.value)) return -1;
      if (!selectedTags.includes(a.value) && selectedTags.includes(b.value)) return 1;
      
      // Then available tags
      const aAvailable = !a.disable;
      const bAvailable = !b.disable;
      if (aAvailable && !bAvailable) return -1;
      if (!aAvailable && bAvailable) return 1;
      
      // Keep original order
      return 0;
    });
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative">
        <MultipleSelector
          commandProps={{
            label: "Search components",
          }}
          defaultOptions={baseOptions}
          options={getFilteredOptions()}
          value={selectedOptions}
          hidePlaceholderWhenSelected
          emptyIndicator={<p className="text-center text-sm">No tags found</p>}
          onChange={handleMultipleSelectorChange}
          inputProps={{ autoFocus: selectedTags.length === 0 }}
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
