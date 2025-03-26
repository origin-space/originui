import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <div className="bg-muted flex items-center rounded-full p-0.5">
      <div className="flex -space-x-3">
        <img
          className="ring-muted rounded-full ring-2"
          src="/avatar-80-03.jpg"
          width={40}
          height={40}
          alt="Avatar 01"
        />
        <img
          className="ring-muted rounded-full ring-2"
          src="/avatar-80-04.jpg"
          width={40}
          height={40}
          alt="Avatar 02"
        />
        <img
          className="ring-muted rounded-full ring-2"
          src="/avatar-80-05.jpg"
          width={40}
          height={40}
          alt="Avatar 03"
        />
        <img
          className="ring-muted rounded-full ring-2"
          src="/avatar-80-06.jpg"
          width={40}
          height={40}
          alt="Avatar 04"
        />
      </div>
      <Button
        variant="secondary"
        className="text-muted-foreground hover:text-foreground flex items-center justify-center rounded-full bg-transparent px-3 text-xs shadow-none hover:bg-transparent"
      >
        +3
      </Button>
    </div>
  )
}
