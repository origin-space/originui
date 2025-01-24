'use client';

import SearchField from './search-field';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import type { RegistryTag } from "@/registry/registry-tags";
import { getComponents } from '@/lib/utils';
import type { RegistryItem } from '@/registry/schema';
import PageGrid from "@/components/page-grid";
import ComponentCard from '@/components/component-card';
import ComponentLoader from '@/components/component-loader-client';
import ComponentDetails from "@/components/component-details";

export default function ComponentsContainer() {
  const searchParams = useSearchParams();
  const tags = (searchParams?.get('tags')?.split(',').filter(Boolean).map(tag => tag.replace(/\+/g, ' ')) || []) as RegistryTag[];

  const filtered = useMemo(() => {
    if (!tags.length) return [];
    return getComponents(tags);
  }, [tags]);

  const updateTags = useCallback(
    (newTags: string[]) => {
      const url = new URL(window.location.href);
      if (newTags.length > 0) {        
        const formattedTags = newTags.map(tag => tag.replace(/\s+/g, '+')).join(',');
        url.searchParams.set("tags", formattedTags);
      } else {
        url.searchParams.delete("tags");
      }
      window.history.replaceState({}, '', url.toString());
    },
    []
  );

  return (
    <main>
      <div className="space-y-4">
        <SearchField selectedTags={tags} onTagChange={updateTags} />
        <PageGrid>
          {filtered.map((component: RegistryItem) => (
            <ComponentCard key={component.name} component={component}>
              <ComponentLoader component={component} />
              <ComponentDetails component={component} />
            </ComponentCard>
          ))}
        </PageGrid>
      </div>
    </main>
  );
}