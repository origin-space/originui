import { components } from "@/registry/registry-components";
import type { RegistryTag } from "@/registry/registry-tags";
import type { RegistryItem } from '@/registry/schema';

export const getComponents = (selectedTags: RegistryTag[] = []): RegistryItem[] => {
  return selectedTags.length
    ? components.filter((component) =>
        component.tags ? selectedTags.every((tag) => component.tags.includes(tag)) : false
      )
    : components;
};

export const convertRegistryPaths = (content: string): string => {
  return content
    .replace(/@\/registry\/default\/ui/g, '@/components/ui')
    .replace(/@\/registry\/default\/compositions/g, '@/components')
    .replace(/@\/registry\/default\/hooks/g, '@/hooks')
    .replace(/@\/registry\/default\/lib/g, '@/lib');
};