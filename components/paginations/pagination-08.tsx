import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
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
        <Select defaultValue="1" aria-label="Select page">
          <SelectTrigger id="select-page" className="w-fit whitespace-nowrap">
            <SelectValue placeholder="Select page" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Page 1</SelectItem>
            <SelectItem value="2">Page 2</SelectItem>
            <SelectItem value="3">Page 3</SelectItem>
            <SelectItem value="4">Page 4</SelectItem>
          </SelectContent>
        </Select>
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
  );
}
