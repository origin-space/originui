import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";

export default function Component() {
  return (
    <Tabs defaultValue="tab-1" orientation="vertical" className="flex w-full gap-2">
      <TabsList className="flex-col">
        <TabsTrigger value="tab-1" className="w-full">
          Overview
        </TabsTrigger>
        <TabsTrigger value="tab-2" className="w-full">
          Projects
        </TabsTrigger>
        <TabsTrigger value="tab-3" className="w-full">
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
