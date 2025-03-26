import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs"

export default function Component() {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList className="before:bg-border relative h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px">
        <TabsTrigger
          value="tab-1"
          className="bg-muted overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
        >
          Tab 1
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="bg-muted overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
        >
          Tab 2
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="bg-muted overflow-hidden rounded-b-none border-x border-t py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
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
