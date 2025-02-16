import { Button } from "@/registry/default/ui/button";

export default function Component() {
  return (
    <Button variant="outline">
      Messages
      <span className="border-border text-muted-foreground ms-3 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
        18
      </span>
    </Button>
  );
}
