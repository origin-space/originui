'use client';

import MultipleSelector, { Option } from "@/registry/default/ui/multiselect";
import { registryTags } from "@/registry/registry-tags";
import type { RegistryTag } from "@/registry/registry-tags";

interface SearchFieldProps {
  selectedTags: string[];
  onTagChange: (tags: string[]) => void;
}

const options: Option[] = registryTags.map(tag => ({
  value: tag,
  label: tag
}));

export default function SearchField({ selectedTags, onTagChange }: SearchFieldProps) {

  const handleMultipleSelectorChange = (selected: Option[]) => {
    const newTags = selected.map((tag) => tag.value as RegistryTag);
    onTagChange(newTags);
  };

  const clearAllTags = () => {
    onTagChange([]);
  };

  return (
    <MultipleSelector
      commandProps={{
        label: "Search components",
      }}
      defaultOptions={options}
      value={options.filter(option => selectedTags.includes(option.value as RegistryTag))}
      placeholder="Filter by tags"
      hideClearAllButton
      hidePlaceholderWhenSelected
      emptyIndicator={<p className="text-center text-sm">No results found</p>}
      onChange={handleMultipleSelectorChange}
      className="w-full sm:w-72"
    />
  );
}