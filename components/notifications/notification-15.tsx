import Image from "next/image";
import { RefreshCw, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import AvatarImg from "@/public/avatar-32-01.jpg";

export default function Notification01() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element.
    <div className="px-4 py-3 border border-border rounded-lg shadow-lg shadow-black/5 max-w-sm z-50 bg-background">
      <div className="flex gap-3">
        <Image className="size-9 rounded-full" src={AvatarImg} width={32} height={32} alt="Mary Palmer" />
        <div className="grow flex flex-col gap-3">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              <a className="font-medium text-foreground hover:underline" href="#">Mary Palmer</a> mentioned you in <a className="font-medium text-foreground hover:underline" href="#">project-campaign-02</a>.
            </p>
            <p className="text-xs text-muted-foreground">
            2 min ago 
            </p>
          </div>
          <div className="flex gap-2">
            <Button size="sm">Accept</Button>
            <Button size="sm" variant="outline">Decline</Button>
          </div>
        </div>
        <Button
          variant="ghost"
          className="shrink-0 -me-2 -my-1.5 p-0 size-8 group"
          aria-label="Close notification"
        >
          <X size={16} strokeWidth={2} className="opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
        </Button>          
      </div>
    </div>
  );
}