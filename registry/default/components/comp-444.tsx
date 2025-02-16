import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";
import { Box, House, PanelsTopLeft } from "lucide-react";

export default function Component() {
  return (
    <Tabs defaultValue="tab-1" orientation="vertical" className="flex w-full gap-2">
      <TabsList className="text-foreground flex-col gap-1 rounded-none bg-transparent px-1 py-0">
        <TabsTrigger
          value="tab-1"
          className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          <House className="-ms-0.5 me-1.5 opacity-60" size={16} aria-hidden="true" />
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          <PanelsTopLeft className="-ms-0.5 me-1.5 opacity-60" size={16} aria-hidden="true" />
          Projects
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          <Box className="-ms-0.5 me-1.5 opacity-60" size={16} aria-hidden="true" />
          Packages
        </TabsTrigger>
      </TabsList>
      <div className="border-border grow rounded-lg border text-start">
        <TabsContent value="tab-1">
          <p className="text-muted-foreground px-4 py-1.5 text-xs">Content for Tab 1</p>
        </TabsContent>
        <TabsContent value="tab-2">
          <p className="text-muted-foreground px-4 py-1.5 text-xs">Content for Tab 2</p>
        </TabsContent>
        <TabsContent value="tab-3">
          <p className="text-muted-foreground px-4 py-1.5 text-xs">Content for Tab 3</p>
        </TabsContent>
      </div>
    </Tabs>
  );
}
