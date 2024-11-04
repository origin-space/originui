// Dependencies: pnpm install lucide-react

"use client";

import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

export default function Button14() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);
    // Simulate an async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Reset after 1 second
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      data-loading={isLoading}
      className="group relative disabled:opacity-100"
    >
      <span className="group-data-[loading=true]:text-transparent">Click me</span>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoaderCircle className="animate-spin" size={16} strokeWidth={2} aria-hidden="true" />
        </div>
      )}
    </Button>
  );
}
