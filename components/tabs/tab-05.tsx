import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabDemo() {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList className="p-0 bg-background shadow-sm shadow-black/5 -space-x-px rtl:space-x-reverse h-auto">
        <TabsTrigger value="tab-1" className="relative py-2 overflow-hidden border border-border rounded-none first:rounded-s last:rounded-e data-[state=active]:bg-muted after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:after:bg-primary">Tab 1</TabsTrigger>
        <TabsTrigger value="tab-2" className="relative py-2 overflow-hidden border border-border rounded-none first:rounded-s last:rounded-e data-[state=active]:bg-muted after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:after:bg-primary">Tab 2</TabsTrigger>
        <TabsTrigger value="tab-3" className="relative py-2 overflow-hidden border border-border rounded-none first:rounded-s last:rounded-e data-[state=active]:bg-muted after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:after:bg-primary">Tab 3</TabsTrigger>
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
