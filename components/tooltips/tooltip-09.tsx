import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">Rich</Button>
        </TooltipTrigger>
        <TooltipContent className="py-3">
          <div className="space-y-2">
            <div className="text-[13px] font-medium">Tuesday, Aug 13</div>
            <div className="flex items-center gap-2 text-xs">
              <svg width="8" height="8" fill="currentColor" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-indigo-500" aria-hidden="true"><circle cx="4" cy="4" r="4"></circle></svg>
              <span className="flex gap-2 grow">Sales <span className="ml-auto font-medium">$40</span></span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <svg width="8" height="8" fill="currentColor" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-purple-500" aria-hidden="true"><circle cx="4" cy="4" r="4"></circle></svg>
              <span className="flex gap-2 grow">Appointments <span className="ml-auto font-medium">$280</span></span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <svg width="8" height="8" fill="currentColor" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-rose-500" aria-hidden="true"><circle cx="4" cy="4" r="4"></circle></svg>
              <span className="flex gap-2 grow">Expenses <span className="ml-auto font-medium">$410</span></span>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
