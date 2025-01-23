'use client';

import ComponentsList from './components-list';
//import TagFilter from './tag-filter';
import SearchField from './search-field';
import { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { getAllTags } from '@/lib/utils';

export default function ComponentsContainer() {
  const searchParams = useSearchParams();
  const tags = searchParams?.get('tags')?.split(',').filter(Boolean).map(tag => tag.replace(/\+/g, ' ')) || [];

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

  // Validate URL params on mount
  // useEffect(() => {
  //   const validTags = getAllTags();
  //   const validatedTags = tags.filter(tag => validTags.includes(tag));
    
  //   if (validatedTags.length !== tags.length) {
  //     updateTags(validatedTags);
  //   }
  // }, [tags, updateTags]);

  return (
    <main>
      <div className="space-y-4">
        <SearchField selectedTags={tags} onTagChange={updateTags} />
        <ComponentsList selectedTags={tags} />
      </div>
    </main>
  );
}