import { ComponentType } from "react";
import dynamic from 'next/dynamic';
import { cn } from "@/registry/default/lib/utils"
import ComponentDetails from "@/components/component-details";
import CopyButton from "@/components/copy-button";
import CodeBlock from "@/components/code-block";
import type { RegistryItem } from '@/registry/schema';
import { convertRegistryPaths } from '@/lib/utils';

interface ComponentLoaderProps {
  component: RegistryItem
  className?: string
}

export default async function ComponentLoader<TProps extends object>({
  component,
  className,
  ...props
}: ComponentLoaderProps & TProps) {
  
  const Component = (await import(`@/registry/default/components/${component.name}`))
    .default as ComponentType<TProps>;

  // useEffect(() => {
  //   const loadCode = async () => {
  //     try {
  //       const response = await fetch(`/r/${component.name}.json`);
  //       const data = await response.json();        
  //       setCode(convertRegistryPaths(data.files[0].content) || '');
  //     } catch (err) {
  //       setError('Failed to load code');
  //     }
  //   };

  //   loadCode();
  // }, [component.name]);  

  // if (error) return <div>{error}</div>;  

  return <Component {...(props as TProps)} />
}