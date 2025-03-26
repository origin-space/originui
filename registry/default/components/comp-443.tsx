import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs"

export default function Component() {
  return (
    <Tabs
      defaultValue="tab-1"
      orientation="vertical"
      className="w-full flex-row"
    >
      <TabsList className="flex-col rounded-none border-l bg-transparent p-0">
        <TabsTrigger
          value="tab-1"
          className="data-[state=active]:after:bg-primary relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="data-[state=active]:after:bg-primary relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Projects
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="data-[state=active]:after:bg-primary relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Packages
        </TabsTrigger>
      </TabsList>
      <div className="grow rounded-md border text-start">
        <TabsContent value="tab-1">
          <p className="text-muted-foreground px-4 py-3 text-xs">
            Content for Tab 1
          </p>
        </TabsContent>
        <TabsContent value="tab-2">
          <p className="text-muted-foreground px-4 py-3 text-xs">
            Content for Tab 2
          </p>
        </TabsContent>
        <TabsContent value="tab-3">
          <p className="text-muted-foreground px-4 py-3 text-xs">
            Content for Tab 3
          </p>
        </TabsContent>
      </div>
    </Tabs>
  )
}
