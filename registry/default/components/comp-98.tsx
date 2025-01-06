"use client";

import { Button } from "@/registry/default/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Button
      className="group rounded-full"
      variant="outline"
      size="icon"
      onClick={() => setOpen((prevState) => !prevState)}
      aria-expanded={open}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <Plus
        className="transition-transform duration-500 [transition-timing-function:cubic-bezier(0.68,-0.6,0.32,1.6)] group-aria-expanded:rotate-[135deg]"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );
}
