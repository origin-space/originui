import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabDemo() {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList className="bg-transparent">
        <TabsTrigger value="tab-1" className="data-[state=active]:bg-muted data-[state=active]:shadow-none">Tab 1</TabsTrigger>
        <TabsTrigger value="tab-2" className="data-[state=active]:bg-muted data-[state=active]:shadow-none">Tab 2</TabsTrigger>
        <TabsTrigger value="tab-3" className="data-[state=active]:bg-muted data-[state=active]:shadow-none">Tab 3</TabsTrigger>
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
