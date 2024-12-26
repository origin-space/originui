import { cn } from "@/registry/default/lib/utils";
import CopyButton from "./copy-button";
import ComponentDetails from "./component-details";
import { readComponentSource } from "./read-component-source";
import { CodeBlock } from "./code-block";

const convertRegistryPaths = (content: string): string => {
  return content
    .replace(/@\/registry\/default\/ui/g, '@/components/ui')
    .replace(/@\/registry\/default\/compositions/g, '@/components')
    .replace(/@\/registry\/default\/hooks/g, '@/hooks')
    .replace(/@\/registry\/default\/lib/g, '@/lib');
};

export default async function DemoComponent({
  componentName,
  className,
  ...props
}: {
  componentName: string;
  className?: string;
  [key: string]: any;
}) {
  const Component = (await import(`@/registry/default/compositions/${componentName}`)).default;
  const source = convertRegistryPaths(await readComponentSource(componentName) || "");

  return (
    <div className={cn("group/item relative", className)}>
      <Component {...props} />
      <div className="absolute right-2 top-2 flex gap-2">
        <CopyButton componentSource={source} />
        <ComponentDetails name={componentName}>
          <div className="relative">
            <CodeBlock lang="tsx">{source}</CodeBlock>
            <CopyButton componentSource={source} codeBlock />
          </div>
        </ComponentDetails>
      </div>
    </div>
  );
}
