"use client";

import { LoaderCircleIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { ComponentType } from "react";
import type { RegistryItem } from "shadcn/registry";

interface ComponentLoaderProps {
  component: RegistryItem;
}

export default function ComponentLoader<TProps extends object>({
  component,
  ...props
}: ComponentLoaderProps & TProps) {
  const Component = dynamic(
    () => import(`@/registry/default/components/${component.name}.tsx`).catch(() => () => null),
    {
      loading: () => (
        <div data-comp-loading="true" className="peer flex min-h-20 items-center justify-center">
          <span className="sr-only">Loading component...</span>
          <LoaderCircleIcon
            className="text-input -ms-1 animate-spin"
            size={24}
            aria-hidden="true"
          />
        </div>
      ),
      ssr: false,
    },
  ) as ComponentType<TProps>;

  return <Component {...(props as TProps)} currentPage={1} totalPages={10} />;
}
