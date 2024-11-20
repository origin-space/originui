"use client";

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";

export default function Notification01() {
	const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "We couldn't complete your request!",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }}
    >
      Show toast
    </Button>
  );
}
