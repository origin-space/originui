"use client";

import type { RegistryItem } from "@/registry/schema";
import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { LoaderCircle } from "lucide-react";

interface ComponentLoaderProps {
  component: RegistryItem;
}

export default function ComponentLoader<TProps extends object>({
  component,
  ...props
}: ComponentLoaderProps & TProps) {
  const Component = dynamic(
    () => import(`@/registry/default/${component.files[0].path}`).catch(() => () => null),
    {
      loading: () => <div data-loading="true" className="peer min-h-20 flex items-center justify-center">
        <span className="sr-only">Loading component...</span>
        <LoaderCircle
          className="-ms-1 me-2 animate-spin text-input"
          size={24}
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>,
      ssr: false,
    },
  ) as ComponentType<TProps>;

  return <Component {...(props as TProps)} currentPage={1} totalPages={10} />;
}
