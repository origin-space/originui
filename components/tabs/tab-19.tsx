// Dependencies: pnpm install lucide-react

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookMarked, Box, House } from "lucide-react";

export default function TabDemo() {
  return (
    <Tabs defaultValue="tab-1" orientation="vertical" className="flex w-full gap-2">
      <TabsList className="flex-col gap-1 rounded-none bg-transparent px-1 py-0 text-foreground">
        <TabsTrigger
          value="tab-1"
          className="relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
        >
          <House
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
        >
          <BookMarked
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          Repositories
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
        >
          <Box className="-ms-0.5 me-1.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
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
