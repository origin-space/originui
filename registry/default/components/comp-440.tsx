import { BoxIcon, HouseIcon, PanelsTopLeftIcon } from "lucide-react"

import { Badge } from "@/registry/default/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"

export default function Component() {
  return (
    <Tabs defaultValue="tab-1" className="items-center">
      <TabsList>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <TabsTrigger value="tab-1" className="py-3">
                  <HouseIcon size={16} aria-hidden="true" />
                </TabsTrigger>
              </span>
            </TooltipTrigger>
            <TooltipContent className="px-2 py-1 text-xs">
              Overview
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <TabsTrigger value="tab-2" className="group py-3">
                  <span className="relative">
                    <PanelsTopLeftIcon size={16} aria-hidden="true" />
                    <Badge className="border-background absolute -top-2.5 left-full min-w-4 -translate-x-1.5 px-0.5 text-[10px]/[.875rem] transition-opacity group-data-[state=inactive]:opacity-50">
                      3
                    </Badge>
                  </span>
                </TabsTrigger>
              </span>
            </TooltipTrigger>
            <TooltipContent className="px-2 py-1 text-xs">
              Projects
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <TabsTrigger value="tab-3" className="py-3">
                  <BoxIcon size={16} aria-hidden="true" />
                </TabsTrigger>
              </span>
            </TooltipTrigger>
            <TooltipContent className="px-2 py-1 text-xs">
              Packages
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
