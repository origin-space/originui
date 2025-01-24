"use client";

import type { RegistryItem } from "@/registry/schema";
import dynamic from "next/dynamic";

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
  );

  return <Component {...props} />;
}
