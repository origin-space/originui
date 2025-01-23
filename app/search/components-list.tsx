'use client';

import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getComponents, RegistryComponent } from '@/lib/utils';
import { useEffect } from 'react';
import ComponentCard from '@/components/component-card';
import ComponentLoader from '@/components/component-loader-client';
import ComponentDetails from "@/components/component-details";
import PageGrid from "@/components/page-grid";

interface ComponentsListProps {
  selectedTags: string[];
}

export default function ComponentsList({ selectedTags }: ComponentsListProps) {
  const { ref, inView } = useInView();
  const pageSize = 500;

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['components', selectedTags],
    queryFn: ({ pageParam = 1 }) => getComponents(pageParam, selectedTags, pageSize),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasMore ? allPages.length + 1 : undefined,
    initialPageSize: pageSize,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (status === 'pending') {
    return <div>Loading list...</div>;
  }

  if (status === 'error') {
    return <div>Error loading components</div>;
  }

  const components = data.pages.flatMap((page) => page.components);
  
  return (
    <div>
      <PageGrid>
        {components.map((component: RegistryComponent) => (
          <ComponentCard key={component.name} component={component}>
            <ComponentLoader component={component} />
            <ComponentDetails component={component} />
          </ComponentCard>
        ))}
      </PageGrid>
      {hasNextPage && (
        <div ref={ref} className="col-span-full h-10">
          {isFetchingNextPage && <div>Loading more...</div>}
        </div>
      )}
    </div>
  );
}