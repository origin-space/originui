import { Badge } from "@/registry/default/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { Box, House, PanelsTopLeft } from "lucide-react";

export default function Component() {
  return (
    <Tabs defaultValue="tab-1" orientation="vertical" className="flex w-full gap-2">
      <TabsList className="flex-col">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <TabsTrigger value="tab-1" className="py-3">
                  <House size={16} strokeWidth={2} aria-hidden="true" />
                </TabsTrigger>
              </span>
            </TooltipTrigger>
            <TooltipContent side="right" className="px-2 py-1 text-xs">
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
                    <PanelsTopLeft size={16} strokeWidth={2} aria-hidden="true" />
                    <Badge className="absolute -top-2.5 left-full min-w-4 -translate-x-1.5 border-background px-0.5 text-[10px]/[.875rem] transition-opacity group-data-[state=inactive]:opacity-50">
                      3
                    </Badge>
                  </span>
                </TabsTrigger>
              </span>
            </TooltipTrigger>
            <TooltipContent side="right" className="px-2 py-1 text-xs">
              Projects
            </TooltipContent>
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
            <TooltipContent side="right" className="px-2 py-1 text-xs">
              Packages
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
