import { Button } from "@/registry/default/ui/button";
import { Pagination, PaginationContent, PaginationItem } from "@/registry/default/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Component({ currentPage, totalPages }: PaginationProps) {
  return (
    <Pagination>
      <PaginationContent className="w-full justify-between gap-3">
        <PaginationItem>
          <Button
            variant="outline"
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            aria-disabled={currentPage === 1 ? true : undefined}
            role={currentPage === 1 ? "link" : undefined}
            asChild
          >
            <a href={currentPage === 1 ? undefined : `#/page/${currentPage - 1}`}>
              <ChevronLeft
                className="-ms-1 me-2 opacity-60"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              Previous
            </a>
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
              <ChevronRight
                className="-me-1 ms-2 opacity-60"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
