import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, ChevronFirst, ChevronLast } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PaginationDemo() {
  return (
    <div className="flex justify-between items-center gap-8">
      <div className="flex items-center gap-3">
        <Label htmlFor="rows-per-page">Rows per page</Label>
        <Select defaultValue="25">
          <SelectTrigger id="rows-per-page" className="w-fit whitespace-nowrap">
            <SelectValue placeholder="Select number of results" />
          </SelectTrigger>
          <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grow text-muted-foreground text-sm whitespace-nowrap flex justify-end">
        <div className="text-muted-foreground text-sm whitespace-nowrap">
          <span className="text-foreground">1-25</span> of <span className="text-foreground">100</span>
        </div>
      </div>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#" aria-label="Go to first page">
                <ChevronFirst size={16} strokeWidth={2} aria-hidden="true" />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" aria-label="Go to previous page">
                <ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" aria-label="Go to next page">
                <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" aria-label="Go to last page">
                <ChevronLast size={16} strokeWidth={2} aria-hidden="true" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
