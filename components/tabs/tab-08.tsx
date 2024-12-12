import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { House } from "lucide-react"

export default function TabDemo() {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList>
        <TabsTrigger value="tab-1">
          <House className="-ms-0.5 me-1 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
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
