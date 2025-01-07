import { Button } from "@/registry/default/ui/button";
import { Pagination, PaginationContent, PaginationItem } from "@/registry/default/ui/pagination";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Component({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="grow text-sm text-muted-foreground" aria-live="polite">
        Page <span className="text-foreground">{currentPage}</span> of{" "}
        <span className="text-foreground">{totalPages}</span>
      </p>
      <Pagination className="w-auto">
        <PaginationContent className="gap-3">
          <PaginationItem>
            <Button
              variant="outline"
              className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
              aria-disabled={currentPage === 1 ? true : undefined}
              role={currentPage === 1 ? "link" : undefined}
              asChild
            >
              <a href={currentPage === 1 ? undefined : `#/page/${currentPage - 1}`}>Previous</a>
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button
              variant="outline"
              className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
              aria-disabled={currentPage === totalPages ? true : undefined}
              role={currentPage === totalPages ? "link" : undefined}
              asChild
            >
              <a href={currentPage === totalPages ? undefined : `#/page/${currentPage + 1}`}>
                Next
              </a>
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
