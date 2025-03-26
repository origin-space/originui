import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs"

export default function Component() {
  return (
    <Tabs defaultValue="tab-1" className="items-center">
      <TabsList className="gap-1 bg-transparent">
        <TabsTrigger
          value="tab-1"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none"
        >
          Tab 1
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none"
        >
          Tab 2
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none"
        >
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">
        <p className="text-muted-foreground p-4 text-center text-xs">
          Content for Tab 1
        </p>
      </TabsContent>
      <TabsContent value="tab-2">
        <p className="text-muted-foreground p-4 text-center text-xs">
          Content for Tab 2
        </p>
      </TabsContent>
      <TabsContent value="tab-3">
        <p className="text-muted-foreground p-4 text-center text-xs">
          Content for Tab 3
        </p>
      </TabsContent>
    </Tabs>
  )
}
