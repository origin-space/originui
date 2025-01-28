import type { RegistryItem } from "@/registry/schema";
import { ComponentType } from "react";

interface ComponentLoaderProps {
  component: RegistryItem;
}

export default async function ComponentLoader<TProps extends object>({
  component,
  ...props
}: ComponentLoaderProps & TProps) {
  if (!component?.name) {
    console.error('Component name is undefined');
    return null;
  }

  try {
    const Component = (await import(`@/registry/default/components/${component.name}`))
      .default as ComponentType<TProps>;

    return <Component {...(props as TProps)} currentPage={1} totalPages={10} />;
  } catch (error) {
    console.error(`Failed to load component ${component.name}:`, error);
    return null;
  }
}
