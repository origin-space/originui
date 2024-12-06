// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Button52() {
  return (
    <Button className="group relative bg-primary text-primary-foreground hover:bg-primary/90">
      Button
      <ChevronRight
        className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-2 group-hover:opacity-100"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );
}
