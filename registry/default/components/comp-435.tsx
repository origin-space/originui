import { BoxIcon, HouseIcon, PanelsTopLeftIcon } from "lucide-react"

import { ScrollArea, ScrollBar } from "@/registry/default/ui/scroll-area"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs"

export default function Component() {
  return (
    <Tabs defaultValue="tab-1">
      <ScrollArea>
        <TabsList className="bg-background mb-3 h-auto -space-x-px p-0 shadow-xs rtl:space-x-reverse">
          <TabsTrigger
            value="tab-1"
            className="data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
          >
            <HouseIcon
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
          >
            <PanelsTopLeftIcon
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Projects
          </TabsTrigger>
          <TabsTrigger
            value="tab-3"
            className="data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
          >
            <BoxIcon
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Packages
          </TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent value="tab-1">
        <p className="text-muted-foreground p-4 pt-1 text-center text-xs">
          Content for Tab 1
        </p>
      </TabsContent>
      <TabsContent value="tab-2">
        <p className="text-muted-foreground p-4 pt-1 text-center text-xs">
          Content for Tab 2
        </p>
      </TabsContent>
      <TabsContent value="tab-3">
        <p className="text-muted-foreground p-4 pt-1 text-center text-xs">
          Content for Tab 3
        </p>
      </TabsContent>
    </Tabs>
  )
}
