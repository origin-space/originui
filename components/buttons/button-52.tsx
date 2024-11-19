"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function Button52() {
  const [isLoading, setIsLoading] = useState(false);
  const handleLoading = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API call
    setIsLoading(false);
    console.log("Action Completed");
  };
  return (
    <Button onClick={handleLoading} disabled={isLoading}>
      {isLoading && <Loader2 size={20} className="mr-2 animate-spin" />}
      Submit
    </Button>
  );
}
