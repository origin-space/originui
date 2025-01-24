import type { RegistryItem } from "@/registry/schema";
import { ComponentType } from "react";

interface ComponentLoaderProps {
  component: RegistryItem;
}

export default async function ComponentLoader<TProps extends object>({
  component,
  ...props
}: ComponentLoaderProps & TProps) {
  const Component = (await import(`@/registry/default/components/${component.name}`))
    .default as ComponentType<TProps>;

  return <Component {...(props as TProps)} />;
}
