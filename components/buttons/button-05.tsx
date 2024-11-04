// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export default function Button05() {
  return (
    <Button variant="destructive">
      <Trash className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      Button
    </Button>
  );
}
