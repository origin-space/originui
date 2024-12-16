import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PaginationDemo() {
  return (
    <div className="flex justify-between items-center gap-4">
      <div>
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
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" aria-label="Go to next page">
                <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="flex items-center gap-3">
        <Label htmlFor="pagination-input" className="whitespace-nowrap">Go to page</Label>
        <Input id="pagination-input" type="text" className="w-14" defaultValue={2} />
      </div>      
    </div>
  );
}
