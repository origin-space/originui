"use client";

import CopyButton from "@/components/copy-button";
import { useConfig } from "@/hooks/use-config";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";

export default function CliCommands({ name }: { name: string }) {
  const [config, setConfig] = useConfig();
  const packageManager = config.packageManager || "pnpm";

  const commands = {
    pnpm: `pnpm dlx shadcn@latest add https://originui.com/r/${name}.json`,
    npm: `npx shadcn@latest add https://originui.com/r/${name}.json`,
    yarn: `npx dlx shadcn@latest add https://originui.com/r/${name}.json`,
    bun: `bunx --bun shadcn@latest add https://originui.com/r/${name}.json`,
  };

  return (
    <div className="relative">
      <Tabs
        value={packageManager}
        onValueChange={(value) => {
          setConfig({
            ...config,
            packageManager: value as "pnpm" | "npm" | "yarn" | "bun",
          });
        }}
        className="rounded-lg bg-zinc-950 dark:bg-zinc-900"
      >
        <TabsList className="dark h-auto w-full justify-start rounded-none border-b border-border bg-transparent px-4 py-0">
          <TabsTrigger
            className="relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
            value="pnpm"
          >
            pnpm
          </TabsTrigger>
          <TabsTrigger
            className="relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
            value="npm"
          >
            npm
          </TabsTrigger>
          <TabsTrigger
            className="relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
            value="yarn"
          >
            yarn
          </TabsTrigger>
          <TabsTrigger
            className="relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
            value="bun"
          >
            bun
          </TabsTrigger>
        </TabsList>
        {Object.entries(commands).map(([pkg, command]) => (
          <TabsContent className="m-0" key={pkg} value={pkg}>
            <pre className="overflow-auto p-4 font-mono text-[12.8px] text-zinc-100">{command}</pre>
          </TabsContent>
        ))}
      </Tabs>
      <CopyButton
        componentSource={commands[packageManager as keyof typeof commands]}
        className="top-1"
      />
    </div>
  );
}
