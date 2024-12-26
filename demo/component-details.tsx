import { Button } from "@/registry/default/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/registry/default/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"
import ComponentCli from "./component-cli";
import { DialogDescription } from "@radix-ui/react-dialog";

const ComponentDetails = ({
  name,
  children
}: {
  name: string
  children: React.ReactNode
}) => {
  return (
    <Dialog>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-muted-foreground/80 hover:bg-transparent hover:text-foreground disabled:opacity-100"
                >
                  View code
                </Button>
              </DialogTrigger>
            </span>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs text-muted-foreground">View code</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-left">CLI Installation</DialogTitle>
          <DialogDescription className="sr-only">Command for installing the component via the CLI</DialogDescription>
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
