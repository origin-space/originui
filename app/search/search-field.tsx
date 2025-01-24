'use client';

import MultipleSelector, { Option } from "@/registry/default/ui/multiselect";
import { registryTags } from "@/registry/registry-tags";
import type { RegistryTag } from "@/registry/registry-tags";
import { Search } from "lucide-react";

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
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <MultipleSelector
          commandProps={{
            label: "Search components",
          }}
          defaultOptions={options}
          value={options.filter(option => selectedTags.includes(option.value as RegistryTag))}
          //placeholder="Filter by tags"
          hideClearAllButton
          hidePlaceholderWhenSelected
          emptyIndicator={<p className="text-center text-sm">No results found</p>}
          onChange={handleMultipleSelectorChange}
          className="w-full ps-9"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-start pt-2.5 justify-center ps-3 text-muted-foreground/80" aria-label="Search component">
          <Search size={16} strokeWidth={2} />
        </div>      
      </div>
    </div>
  );
}