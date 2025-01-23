import { cn } from "@/registry/default/lib/utils";
import { ComponentType } from "react";
import CodeBlock from "./code-block";
import ComponentDetails from "./component-details";
import CopyButton from "./copy-button";
import { readComponentSource } from "./read-component-source";
import { convertRegistryPaths } from '@/lib/utils';

interface DemoComponentBaseProps {
  componentName: string;
  className?: string;
}

export default async function DemoComponent<TProps extends object>({
  componentName,
  className,
  ...props
}: DemoComponentBaseProps & TProps) {
  const Component = (await import(`@/registry/default/components/${componentName}`))
    .default as ComponentType<TProps>;
  const source = await readComponentSource(componentName); 
  const code = convertRegistryPaths(source.files[0].content);

  return (
    <div className={cn(
      "group/item relative border border-border -space-x-px",
      source.meta?.cols === 2 ? "sm:col-span-3 lg:col-span-3" :
      source.meta?.cols === 3 ? "sm:col-span-6 lg:col-span-6" : "col-span-6 sm:col-span-3 lg:col-span-2",
      className
    )}>
      <Component {...(props as TProps)} />
      <div className="absolute right-2 top-2 flex gap-2">
        <ComponentDetails name={componentName}>
          <div className="relative">
            <CodeBlock lang="tsx">{code}</CodeBlock>
            <CopyButton componentSource={code} />
          </div>
        </ComponentDetails>
      </div>
    </div>
  );
}
