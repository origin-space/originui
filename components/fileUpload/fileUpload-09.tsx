"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fileUpload09 = () => {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-30">
        Required File Upload <span className="text-destructive">*</span>
      </Label>
      <Input
        className="border-none file:h-9 file:cursor-pointer file:whitespace-nowrap file:rounded-lg file:bg-primary file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-primary-foreground file:shadow-sm file:shadow-black/5 file:ring-offset-background file:transition-colors file:hover:bg-primary/90 file:focus-visible:outline-none file:focus-visible:ring-2 file:focus-visible:ring-ring/70 file:focus-visible:ring-offset-2 file:[&_svg]:pointer-events-none file:[&_svg]:shrink-0"
        type="file"
      />
    </div>
  );
};

export default fileUpload09;
