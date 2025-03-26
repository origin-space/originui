import { useId } from "react"
import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"

import { Label } from "@/registry/default/ui/label"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/registry/default/ui/pagination"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

type PaginationProps = {
  currentPage: number
  totalPages: number
}

export default function Component({
  currentPage,
  totalPages,
}: PaginationProps) {
  const id = useId()
  return (
    <div className="flex items-center justify-between gap-8">
      {/* Results per page */}
      <div className="flex items-center gap-3">
        <Label htmlFor={id}>Rows per page</Label>
        <Select defaultValue="25">
          <SelectTrigger id={id} className="w-fit whitespace-nowrap">
            <SelectValue placeholder="Select number of results" />
          </SelectTrigger>
          <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2">
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Page number information */}
      <div className="text-muted-foreground flex grow justify-end text-sm whitespace-nowrap">
        <p
          className="text-muted-foreground text-sm whitespace-nowrap"
          aria-live="polite"
        >
          <span className="text-foreground">1-25</span> of{" "}
          <span className="text-foreground">100</span>
        </p>
      </div>

      {/* Pagination */}
      <div>
        <Pagination>
          <PaginationContent>
            {/* First page button */}
            <PaginationItem>
              <PaginationLink
                className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
                href={
                  currentPage === 1 ? undefined : `#/page/${currentPage - 1}`
                }
                aria-label="Go to first page"
                aria-disabled={currentPage === 1 ? true : undefined}
                role={currentPage === 1 ? "link" : undefined}
              >
                <ChevronFirstIcon size={16} aria-hidden="true" />
              </PaginationLink>
            </PaginationItem>

            {/* Previous page button */}
            <PaginationItem>
              <PaginationLink
                className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
                href={
                  currentPage === 1 ? undefined : `#/page/${currentPage - 1}`
                }
                aria-label="Go to previous page"
                aria-disabled={currentPage === 1 ? true : undefined}
                role={currentPage === 1 ? "link" : undefined}
              >
                <ChevronLeftIcon size={16} aria-hidden="true" />
              </PaginationLink>
            </PaginationItem>

            {/* Next page button */}
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

            {/* Last page button */}
            <PaginationItem>
              <PaginationLink
                className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
                href={
                  currentPage === totalPages
                    ? undefined
                    : `#/page/${totalPages}`
                }
                aria-label="Go to last page"
                aria-disabled={currentPage === totalPages ? true : undefined}
                role={currentPage === totalPages ? "link" : undefined}
              >
                <ChevronLastIcon size={16} aria-hidden="true" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
