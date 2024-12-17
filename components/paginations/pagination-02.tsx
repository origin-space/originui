import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationDemo() {
  return (
<Pagination>
  <PaginationContent className="inline-flex -space-x-px text-sm">
    <PaginationItem>
      <PaginationPrevious 
        href="#" 
        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border  border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink 
        href="#" 
        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink 
        href="#" 
        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink 
        href="#" 
        isActive
        className="flex items-center justify-center px-3 h-8 text-gray-700 border border-gray-300 bg-gray-200 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
      >
        3
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink 
        href="#" 
        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        4
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink 
        href="#" 
        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        5
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext 
        href="#" 
        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      />
    </PaginationItem>
  </PaginationContent>
</Pagination>








  );
}
