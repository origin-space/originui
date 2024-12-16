import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#" aria-label="Go to previous page">
            <ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="More pages">
                <PaginationEllipsis />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-12 [&_a]:justify-center">
              <DropdownMenuItem asChild>
                <a href="#">4</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#">5</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#">6</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#">7</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#">8</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">9</PaginationLink>
        </PaginationItem>        
        <PaginationItem>
          <PaginationLink href="#" aria-label="Go to next page">
            <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
