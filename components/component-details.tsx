import ComponentCli from "@/components/cli-commands";
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Code } from "lucide-react";

const ComponentDetails = ({ name, children }: { name: string; children: React.ReactNode }) => {
  return (
    <Dialog>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground/80 transition-none hover:bg-transparent hover:text-foreground disabled:opacity-100 lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100"
                >
                  <Code size={16} strokeWidth={2} aria-hidden={true} />
                </Button>
              </DialogTrigger>
            </span>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs text-muted-foreground">
            View code
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-left">Installation</DialogTitle>
          <DialogDescription className="sr-only">
            Use the CLI to add components to your project
          </DialogDescription>
        </DialogHeader>
        <div className="min-w-0 space-y-5">
          <ComponentCli name={name} />
          <div className="space-y-4">
            <p className="text-lg font-semibold tracking-tight">Code</p>
            {children}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComponentDetails;
