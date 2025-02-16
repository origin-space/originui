"use client";

import { LoaderCircle } from "lucide-react";
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
  if (!component.files?.length) {
    return null;
  }
  const path = component.files[0].path;
  const newPath = path.replace("registry/", "");
  const Component = dynamic(() => import(`@/registry/${newPath}`).catch(() => () => null), {
    loading: () => (
      <div data-comp-loading="true" className="peer flex min-h-20 items-center justify-center">
        <span className="sr-only">Loading component...</span>
        <LoaderCircle className="text-input -ms-1 me-2 animate-spin" size={24} aria-hidden="true" />
      </div>
    ),
    ssr: false,
  }) as ComponentType<TProps>;

  return <Component {...(props as TProps)} currentPage={1} totalPages={10} />;
}
