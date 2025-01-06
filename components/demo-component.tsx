import { cn } from "@/registry/default/lib/utils";
import { ComponentType } from "react";
import { CodeBlock } from "./code-block";
import ComponentDetails from "./component-details";
import CopyButton from "./copy-button";
import { readComponentSource } from "./read-component-source";

const convertRegistryPaths = (content: string): string => {
  return content
    .replace(/@\/registry\/default\/ui/g, "@/components/ui")
    .replace(/@\/registry\/default\/components/g, "@/components")
    .replace(/@\/registry\/default\/hooks/g, "@/hooks")
    .replace(/@\/registry\/default\/lib/g, "@/lib");
};

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
  const source = convertRegistryPaths((await readComponentSource(componentName)) || "");

  return (
    <div className={cn("group/item relative", className)}>
      <Component {...(props as TProps)} />
      <div className="absolute right-2 top-2 flex gap-2">
        <ComponentDetails name={componentName}>
          <div className="relative">
            <CodeBlock lang="tsx">{source}</CodeBlock>
            <CopyButton componentSource={source} />
          </div>
        </ComponentDetails>
      </div>
    </div>
  );
}
