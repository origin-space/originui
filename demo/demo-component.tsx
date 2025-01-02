import { cn } from "@/lib/utils";
import CopyButton from "./copy-button";
import DemoComponentLinkButton from "./demo-component-link-button";
import { readComponentSource } from "./read-component-source";

export default async function DemoComponent({
  directory,
  componentName,
  className,
  ...props
}: {
  directory: string;
  componentName: string;
  className?: string;
  [key: string]: any;
}) {
  const Component = (await import(`@/components/${directory}/${componentName}`)).default;
  const source = await readComponentSource(directory, componentName);

  return (
    <div className={cn("group/item relative", className)} id={componentName}>
      <Component {...props} />
      <div className="absolute right-2 top-2 flex items-center gap-1">
        <DemoComponentLinkButton componentName={componentName || ""} />
        <CopyButton componentSource={source || ""} />
      </div>
    </div>
  );
}
