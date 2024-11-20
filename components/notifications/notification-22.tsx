"use client";

import { toast } from "sonner"
import { Button } from "@/components/ui/button";

export default function Notification01() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast("Your request was completed!", {
          description: "It was a long journey, but we made it!",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          }
        })
      }}
    >
      Show sonner
    </Button>
  );
}
