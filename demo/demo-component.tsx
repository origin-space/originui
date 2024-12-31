import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import CliButton from "./cli-button";
import CopyButton from "./copy-button";
import { readComponentSource } from "./read-component-source";

export default async function DemoComponent({
  directory,
  componentName,
  className,
  withCli,
  ...props
}: {
  directory: string;
  componentName: string;
  className?: string;
  withCli?: boolean;
  [key: string]: any;
}) {
  const Component = (await import(`@/components/${directory}/${componentName}`)).default;
  const source = await readComponentSource(directory, componentName);

  return (
    <div className={cn("group/item relative", className)}>
      <Component {...props} />
      <div className="absolute right-2 top-2 flex items-center transition-opacity lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100">
        <TooltipProvider delayDuration={0}>
          <CopyButton componentSource={source || ""} />
          {withCli && <CliButton componentName={componentName} />}
        </TooltipProvider>
      </div>
    </div>
  );
}
