import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { usePagination } from "@/registry/default/hooks/use-pagination"
import { cn } from "@/registry/default/lib/utils"
import { buttonVariants } from "@/registry/default/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/registry/default/ui/pagination"

type PaginationProps = {
  currentPage: number
  totalPages: number
  paginationItemsToDisplay?: number
}

export default function Component({
  currentPage,
  totalPages,
  paginationItemsToDisplay = 5,
}: PaginationProps) {
  const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
    currentPage,
    totalPages,
    paginationItemsToDisplay,
  })

  return (
    <Pagination>
      <PaginationContent className="inline-flex gap-0 -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
        {/* Previous page button */}
        <PaginationItem className="[&:first-child>a]:rounded-s-md [&:last-child>a]:rounded-e-md">
          <PaginationLink
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "rounded-none shadow-none focus-visible:z-10 aria-disabled:pointer-events-none [&[aria-disabled]>svg]:opacity-50"
            )}
            href={currentPage === 1 ? undefined : `#/page/${currentPage - 1}`}
            aria-label="Go to previous page"
            aria-disabled={currentPage === 1 ? true : undefined}
            role={currentPage === 1 ? "link" : undefined}
          >
            <ChevronLeftIcon size={16} aria-hidden="true" />
          </PaginationLink>
        </PaginationItem>

        {/* Left ellipsis (...) */}
        {showLeftEllipsis && (
          <PaginationItem className="[&:first-child>a]:rounded-s-md [&:last-child>a]:rounded-e-md">
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Page number links */}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              className={cn(
                buttonVariants({
                  variant: "outline",
                }),
                "rounded-none shadow-none focus-visible:z-10",
                page === currentPage && "bg-accent"
              )}
              href={`#/page/${page}`}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Right ellipsis (...) */}
        {showRightEllipsis && (
          <PaginationItem className="[&:first-child>a]:rounded-s-md [&:last-child>a]:rounded-e-md">
            <PaginationEllipsis
              className={cn(
                buttonVariants({
                  variant: "outline",
                }),
                "pointer-events-none rounded-none shadow-none"
              )}
            />
          </PaginationItem>
        )}

        {/* Next page button */}
        <PaginationItem className="[&:first-child>a]:rounded-s-md [&:last-child>a]:rounded-e-md">
          <PaginationLink
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "rounded-none shadow-none focus-visible:z-10 aria-disabled:pointer-events-none [&[aria-disabled]>svg]:opacity-50"
            )}
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
