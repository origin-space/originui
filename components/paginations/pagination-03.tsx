import { Button } from "@/components/ui/button";

export default function PaginationDemo() {
  return (
    <div className="flex justify-between items-center gap-3">
      <div className="grow text-muted-foreground text-sm">
        Page <span className="text-foreground">1</span> of <span className="text-foreground">10</span>
      </div>      
      <Button variant="outline" asChild>
        <a href="#" className="pointer-events-none opacity-50" aria-disabled="true">Previous</a>
      </Button>
      <Button variant="outline" asChild>
        <a href="#">Next</a>
      </Button>
    </div>
  );
}
