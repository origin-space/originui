import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/registry/default/ui/pagination"

type PaginationProps = {
  currentPage: number
  totalPages: number
}

export default function Component({
  currentPage,
  totalPages,
}: PaginationProps) {
  return (
    <Pagination>
      <PaginationContent className="gap-3">
        <PaginationItem>
          <PaginationLink
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={currentPage === 1 ? undefined : `#/page/${currentPage - 1}`}
            aria-label="Go to previous page"
            aria-disabled={currentPage === 1 ? true : undefined}
            role={currentPage === 1 ? "link" : undefined}
          >
            <ChevronLeftIcon size={16} aria-hidden="true" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <p className="text-muted-foreground text-sm" aria-live="polite">
            Page <span className="text-foreground">{currentPage}</span> of{" "}
            <span className="text-foreground">{totalPages}</span>
          </p>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={
              currentPage === totalPages
                ? undefined
                : `#/page/${currentPage + 1}`
            }
            aria-label="Go to next page"
            aria-disabled={currentPage === totalPages ? true : undefined}
            role={currentPage === totalPages ? "link" : undefined}
          >
            <ChevronRightIcon size={16} aria-hidden="true" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
