import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabDemo() {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList className="relative h-auto w-full p-0 bg-transparent gap-0.5 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border">
        <TabsTrigger value="tab-1" className="py-2 overflow-hidden border-x border-t border-border rounded-b-none bg-muted data-[state=active]:shadow-none data-[state=active]:z-10">Tab 1</TabsTrigger>
        <TabsTrigger value="tab-2" className="py-2 overflow-hidden border-x border-t border-border rounded-b-none bg-muted data-[state=active]:shadow-none data-[state=active]:z-10">Tab 2</TabsTrigger>
        <TabsTrigger value="tab-3" className="py-2 overflow-hidden border-x border-t border-border rounded-b-none bg-muted data-[state=active]:shadow-none data-[state=active]:z-10">Tab 3</TabsTrigger>
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
