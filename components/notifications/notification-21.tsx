"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function NotificationDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast("Your request was completed!", {
          description: "It was a long journey, but we made it!",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
      }}
    >
      Show sonner
    </Button>
  );
}
