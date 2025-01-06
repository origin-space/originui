import { Button } from "@/registry/default/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/default/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          className="size-auto overflow-hidden rounded-full bg-transparent p-0 hover:bg-transparent"
          aria-label="My profile"
          asChild
        >
          <a href="#">
            <img src="/avatar-40-04.jpg" width={40} height={40} alt="Avatar" />
          </a>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-[340px]">
        <div className="flex items-start gap-3">
          <img
            className="shrink-0 rounded-full"
            src="/avatar-40-04.jpg"
            width={40}
            height={40}
            alt="Avatar"
          />
          <div className="space-y-1">
            <p className="text-sm font-medium">@Origin_UI</p>
            <p className="text-sm text-muted-foreground">
              Beautiful UI components built with Tailwind CSS and Next.js.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
