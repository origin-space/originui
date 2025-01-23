import { components } from "@/registry/registry-components";
import type { RegistryTag } from "@/registry/registry-tags";

// xxx: usare schema???
export interface RegistryComponent {
  name: string;
  type: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: {
    path: string;
    type: string;
  }[];
  tags: RegistryTag[];
  meta: {
    cols: number;
  }
}

// Pre-compute all available tags
const ALL_TAGS = Array.from(
  new Set(
    components.flatMap(component => component.tags)
  )
).sort();

export const getAllTags = () => ALL_TAGS;

export const getComponents = (page: number = 1, selectedTags: RegistryTag[] = [], pageSize: number = 0) => {
  const filteredComponents = selectedTags.length
    ? components.filter((component) =>
        component.tags ? selectedTags.every((tag) => component.tags.includes(tag)) : false
      )
    : components;

  // If pageSize is 0, return all components
  if (pageSize === 0) {
    return {
      components: filteredComponents,
      hasMore: false,
      total: filteredComponents.length,
    };
  }

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const hasMore = end < filteredComponents.length;

  return {
    components: filteredComponents.slice(start, end),
    hasMore,
    total: filteredComponents.length,
  };
};

export const convertRegistryPaths = (content: string): string => {
  return content
    .replace(/@\/registry\/default\/ui/g, '@/components/ui')
    .replace(/@\/registry\/default\/compositions/g, '@/components')
    .replace(/@\/registry\/default\/hooks/g, '@/hooks')
    .replace(/@\/registry\/default\/lib/g, '@/lib');
};