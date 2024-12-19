// Dependencies: pnpm install lucide-react

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { PanelsTopLeft, Box, House } from "lucide-react";

export default function TabDemo() {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <TabsTrigger value="tab-1" className="py-3">
                  <House size={16} strokeWidth={2} aria-hidden="true" />
                </TabsTrigger>
              </span>
            </TooltipTrigger>
            <TooltipContent className="px-2 py-1 text-xs">Overview</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <TabsTrigger value="tab-2" className="group py-3">
                  <span className="relative">
                    <PanelsTopLeft size={16} strokeWidth={2} aria-hidden="true" />
                    <Badge className="absolute -top-2.5 left-full min-w-4 -translate-x-1.5 border-background px-0.5 text-[10px]/[.875rem] transition-opacity group-data-[state=inactive]:opacity-50">
                      3
                    </Badge>
                  </span>
                </TabsTrigger>
              </span>
            </TooltipTrigger>
            <TooltipContent className="px-2 py-1 text-xs">Projects</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <TabsTrigger value="tab-3" className="py-3">
                  <Box size={16} strokeWidth={2} aria-hidden="true" />
                </TabsTrigger>
              </span>
            </TooltipTrigger>
            <TooltipContent className="px-2 py-1 text-xs">Packages</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </TabsList>
      <TabsContent value="tab-1">
        <p className="p-4 text-center text-xs text-muted-foreground">Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab-2">
        <p className="p-4 text-center text-xs text-muted-foreground">Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab-3">
        <p className="p-4 text-center text-xs text-muted-foreground">Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  );
}
