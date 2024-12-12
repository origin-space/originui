import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabDemo() {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList className="px-0 py-1 gap-2 bg-transparent rounded-none border-b border-border h-auto text-foreground">
        <TabsTrigger value="tab-1" className="relative hover:bg-accent hover:text-foreground data-[state=active]:hover:bg-accent data-[state=active]:shadow-none data-[state=active]:bg-transparent after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:after:bg-primary">Tab 1</TabsTrigger>
        <TabsTrigger value="tab-2" className="relative hover:bg-accent hover:text-foreground data-[state=active]:hover:bg-accent data-[state=active]:shadow-none data-[state=active]:bg-transparent after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:after:bg-primary">Tab 2</TabsTrigger>
        <TabsTrigger value="tab-3" className="relative hover:bg-accent hover:text-foreground data-[state=active]:hover:bg-accent data-[state=active]:shadow-none data-[state=active]:bg-transparent after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:after:bg-primary">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">
        <p className="text-xs text-muted-foreground p-4">Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab-2">
        <p className="text-xs text-muted-foreground p-4">Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab-3">
        <p className="text-xs text-muted-foreground p-4">Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  );
}
