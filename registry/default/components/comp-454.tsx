import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

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
            variant="outline"
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            aria-disabled={currentPage === 1 ? true : undefined}
            role={currentPage === 1 ? "link" : undefined}
            asChild
          >
            <a
              href={currentPage === 1 ? undefined : `#/page/${currentPage - 1}`}
            >
              <ChevronLeftIcon
                className="-ms-1 opacity-60"
                size={16}
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
            <a
              href={
                currentPage === totalPages
                  ? undefined
                  : `#/page/${currentPage + 1}`
              }
            >
              Next
              <ChevronRightIcon
                className="-me-1 opacity-60"
                size={16}
                aria-hidden="true"
              />
            </a>
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
