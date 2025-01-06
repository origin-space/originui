import { Button } from "@/registry/default/ui/button";

export default function Component() {
  return (
    <div className="flex -space-x-3">
      <img
        className="rounded-full ring-2 ring-background"
        src="/avatar-80-03.jpg"
        width={40}
        height={40}
        alt="Avatar 01"
      />
      <img
        className="rounded-full ring-2 ring-background"
        src="/avatar-80-04.jpg"
        width={40}
        height={40}
        alt="Avatar 02"
      />
      <img
        className="rounded-full ring-2 ring-background"
        src="/avatar-80-05.jpg"
        width={40}
        height={40}
        alt="Avatar 03"
      />
      <img
        className="rounded-full ring-2 ring-background"
        src="/avatar-80-06.jpg"
        width={40}
        height={40}
        alt="Avatar 04"
      />
      <Button
        variant="secondary"
        className="flex size-10 items-center justify-center rounded-full bg-secondary text-xs text-muted-foreground ring-2 ring-background hover:bg-secondary hover:text-foreground"
        size="icon"
      >
        +3
      </Button>
    </div>
  );
}
