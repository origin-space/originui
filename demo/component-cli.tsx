"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";
import { useConfig } from "@/hooks/use-config"
import CopyButton from "./copy-button";

export default function ComponentCli({ name } : { name: string }) {
  const [config, setConfig] = useConfig()  
  const packageManager = config.packageManager || "pnpm"

  const commands = {
    pnpm: `pnpm dlx shadcn@latest add https://originui.com/${name}`,
    npm: `npx shadcn@latest add https://originui.com/${name}`,
    yarn: `yarn dlx shadcn@latest add https://originui.com/${name}`,
    bun: `bunx --bun shadcn@latest add https://originui.com/${name}`
  }

  return (
    <div className="relative">
      <Tabs
        value={packageManager}
        onValueChange={(value) => {
          setConfig({
            ...config,
            packageManager: value as "pnpm" | "npm" | "yarn" | "bun",
          })
        }}
        className="bg-zinc-950 dark:bg-zinc-900 rounded-lg"
      >
        <TabsList className="dark w-full justify-start px-4 py-0 h-auto rounded-none border-b border-border bg-transparent">
          <TabsTrigger className="relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary" value="pnpm">pnpm</TabsTrigger>
          <TabsTrigger className="relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary" value="npm">npm</TabsTrigger>
          <TabsTrigger className="relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary" value="yarn">yarn</TabsTrigger>
          <TabsTrigger className="relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary" value="bun">bun</TabsTrigger>
        </TabsList>
        {Object.entries(commands).map(([pkg, command]) => (
          <TabsContent className="m-0" key={pkg} value={pkg}>
            <pre className="p-4 text-sm font-mono text-zinc-100 overflow-auto">
              {command}
            </pre>
          </TabsContent>
        ))}      
      </Tabs>     
      <CopyButton componentSource={commands[packageManager as keyof typeof commands]} className="top-1" codeBlock /> 
    </div>
  );
}
