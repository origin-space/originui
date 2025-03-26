import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
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
      <PaginationContent className="w-full justify-between gap-3">
        <PaginationItem>
          <Button
            variant="ghost"
            className="group aria-disabled:pointer-events-none aria-disabled:opacity-50"
            aria-disabled={currentPage === 1 ? true : undefined}
            role={currentPage === 1 ? "link" : undefined}
          >
            <ArrowLeftIcon
              className="-ms-1 opacity-60 transition-transform group-hover:-translate-x-0.5"
              size={16}
              aria-hidden="true"
            />
            Previous
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            variant="ghost"
            className="group aria-disabled:pointer-events-none aria-disabled:opacity-50"
            aria-disabled={currentPage === totalPages ? true : undefined}
            role={currentPage === totalPages ? "link" : undefined}
          >
            Next
            <ArrowRightIcon
              className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
              size={16}
              aria-hidden="true"
            />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
