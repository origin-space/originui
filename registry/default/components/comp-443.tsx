import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";

export default function Component() {
  return (
    <Tabs defaultValue="tab-1" orientation="vertical" className="flex w-full gap-2">
      <TabsList className="flex-col rounded-none border-l border-border bg-transparent p-0">
        <TabsTrigger
          value="tab-1"
          className="relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
        >
          Projects
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
        >
          Packages
        </TabsTrigger>
      </TabsList>
      <div className="grow rounded-lg border border-border text-start">
        <TabsContent value="tab-1">
          <p className="px-4 py-1.5 text-xs text-muted-foreground">Content for Tab 1</p>
        </TabsContent>
        <TabsContent value="tab-2">
          <p className="px-4 py-1.5 text-xs text-muted-foreground">Content for Tab 2</p>
        </TabsContent>
        <TabsContent value="tab-3">
          <p className="px-4 py-1.5 text-xs text-muted-foreground">Content for Tab 3</p>
        </TabsContent>
      </div>
    </Tabs>
  );
}
