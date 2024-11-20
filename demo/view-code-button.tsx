import { Button } from "@/components/ui/button";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CodeXmlIcon, CopyIcon } from "lucide-react";
import { CodeBlock } from "./code-block";
import { ComposableCopyButton } from "./composable-copy-button";

const ViewCodeButton = ({ componentSource }: { componentSource: string }) => {
  return (
    <div className="absolute right-8 top-2 transition-opacity lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100">
      <Credenza>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <CredenzaTrigger asChild>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground/80 hover:bg-transparent hover:text-foreground disabled:opacity-100"
                >
                  <div className="absolute scale-100 opacity-100 transition-all">
                    <CodeXmlIcon size={16} strokeWidth={2} aria-hidden="true" />
                  </div>
                </Button>
              </TooltipTrigger>
            </CredenzaTrigger>
            <TooltipContent className="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground">
              View Code
            </TooltipContent>
            <CredenzaContent className="flex max-h-[90vh] max-w-5xl flex-col md:w-[80vw]">
              <CredenzaHeader>
                <CredenzaTitle>View Code</CredenzaTitle>
              </CredenzaHeader>
              <CredenzaBody className="flex-1 overflow-x-auto">
                <CodeBlock code={componentSource} />
              </CredenzaBody>
              <CredenzaFooter>
                <CredenzaClose asChild>
                  <ComposableCopyButton text={componentSource}>
                    <CopyIcon className="mr-2 h-4 w-4" />
                    Copy & Close
                  </ComposableCopyButton>
                </CredenzaClose>
                <CredenzaClose asChild>
                  <Button variant="outline">Close</Button>
                </CredenzaClose>
              </CredenzaFooter>
            </CredenzaContent>
          </Tooltip>
        </TooltipProvider>
      </Credenza>
    </div>
  );
};

export default ViewCodeButton;
