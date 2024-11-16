// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Button52() {
  return (
    <Button className="group relative overflow-hidden">
      <div className="absolute inset-0 z-10 grid w-1/4 place-items-center bg-primary-foreground/15 transition-all duration-500 group-hover:w-full">
        <ArrowLeft className="opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      </div>
      <span className="w-20 translate-x-2 transition-opacity duration-500 group-hover:opacity-0">
        Back
      </span>
    </Button>
  );
}
