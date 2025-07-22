"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { IconButton } from "@/registry/default/ui/icon-button";

export default function SubmitButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1500));
    toast.success("Message sent!");

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center w-full min-h-[120px]">
      <IconButton
        onClick={handleClick}
        disabled={loading}
        iconPosition="left"
        variant="outline"
        icon={
          loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )
        }
      >
        {loading ? "Sending..." : "Send Message"}
      </IconButton>
    </div>
  );
}
