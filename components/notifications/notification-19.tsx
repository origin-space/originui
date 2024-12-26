// Dependencies: pnpm install lucide-react

"use client";

import { Button } from "@/registry/default/ui/button";
import { ToastAction } from "@/registry/default/ui/toast";
import { useToast } from "@/registry/default/hooks/use-toast";

export default function NotificationDemo() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "We couldn't complete your request!",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }}
    >
      Show toast
    </Button>
  );
}
