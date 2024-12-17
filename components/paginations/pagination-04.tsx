import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export default function PaginationDemo() {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">10</span> of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
      </span>
      <div className="mt-2 inline-flex">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                className="flex h-8 items-center justify-center px-3 text-sm font-medium border ring-ring bg-gray-100 text-gray-800 hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                className="flex h-8 items-center justify-center px-3 text-sm font-medium border ring-ring bg-gray-100 text-gray-800 hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
