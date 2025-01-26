"use client";

import type { RegistryItem } from "@/registry/schema";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

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
      loading: () => <div>Loading component...</div>,
      ssr: false,
    },
  ) as ComponentType<TProps>;

  return <Component {...(props as TProps)} currentPage={1} totalPages={10} />;
}
