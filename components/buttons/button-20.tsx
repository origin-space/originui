// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Button20() {
  return (
    <Button className="rounded-full" variant="outline" size="icon" aria-label="Add new item">
      <Plus size={16} strokeWidth={2} aria-hidden="true" />
    </Button>
  );
}
