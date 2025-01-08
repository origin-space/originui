"use client";

import { useState, useId } from "react"
import { usePagination } from "@/registry/default/hooks/use-pagination";
import { cn } from "@/registry/default/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"
import { Label } from "@/registry/default/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationEllipsis,
} from "@/registry/default/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Checkbox } from "@/registry/default/ui/checkbox"
import { Badge } from "@/registry/default/ui/badge"
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/registry/default/ui/button"

type Item = {
  id: string
  name: string
  email: string
  location: string
  flag: string
  status: "Active" | "Inactive" | "Pending"
  balance: number
}

const columns: ColumnDef<Item>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
    />,
    size: 28,
    enableSorting: false,
  },
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
    size: 180,
  },
  {
    header: "Email",
    accessorKey: "email",
    size: 200,
  },
  {
    header: "Location",
    accessorKey: "location",
    cell: ({ row }) => (
      <div>
        <span className="text-lg leading-none">{row.original.flag}</span>{" "}
        {row.getValue("location")}
      </div>
    ),
    size: 180,
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => <Badge className={cn(
      row.getValue("status") === 'Inactive' && "bg-muted text-muted-foreground"
    )}>{row.getValue("status")}</Badge>,
    size: 120,
  },
  {
    header: "Balance",
    accessorKey: "balance",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("balance"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return formatted
    },    
    size: 120,
  },
]

const items: Item[] = [
  {
    id: "1",
    name: "Samuel Carteron",
    email: "sa.carteron@company.com",
    location: "San Francisco, US",
    flag: "🇺🇸",
    status: "Inactive",
    balance: 1250,
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "s.chen@company.com",
    location: "Tokyo, JP",
    flag: "🇯🇵",
    status: "Active",
    balance: 600,
  },
  {
    id: "3",
    name: "David Kim",
    email: "d.kim@company.com",
    location: "Paris, FR",
    flag: "🇫🇷",
    status: "Active",
    balance: 890,
  },
  {
    id: "4",
    name: "Ana Silva",
    email: "a.silva@company.com",
    location: "Rome, IT",
    flag: "🇮🇹",
    status: "Active",
    balance: 0,
  },
  {
    id: "5",
    name: "Lars Nielsen",
    email: "l.nielsen@company.com",
    location: "Dubai, AE",
    flag: "🇦🇪",
    status: "Active",
    balance: 1000,
  },
  {
    id: "6",
    name: "Eva Kowalski",
    email: "e.kowalski@company.com",
    location: "Seoul, KR",
    flag: "🇰🇷",
    status: "Active",
    balance: 920,    
  },
  {
    id: "7",
    name: "Emma Laurent",
    email: "e.laurent@company.com",
    location: "Berlin, DE",
    flag: "🇩🇪",
    status: "Active",
    balance: 1200,
  },
  {
    id: "8",
    name: "Marco Rossi",
    email: "m.rossi@company.com",
    location: "Madrid, Spain",
    flag: "🇪🇸",
    status: "Active",
    balance: 2100,
  },
  {
    id: "9",
    name: "Yuki Tanaka",
    email: "y.tanaka@company.com",
    location: "Warsaw, PL",
    flag: "🇵🇱",
    status: "Active",
    balance: 450,
  },
  {
    id: "10",
    name: "Mike Allison",
    email: "m.allison@company.com",
    location: "San Francisco, US",
    flag: "🇺🇸",
    status: "Inactive",
    balance: 1250,    
  },
  {
    id: "11",
    name: "Maria Garcia",
    email: "m.garcia@company.com",
    location: "London, UK",
    flag: "🇬🇧",
    status: "Active",
    balance: 780,
  },
  {
    id: "12",
    name: "James Wilson",
    email: "j.wilson@company.com",
    location: "Singapore",
    flag: "🇸🇬",
    status: "Active",
    balance: 650,
  },
  {
    id: "13",
    name: "Lucia Sorna",
    email: "lucia.sorna@company.com",
    location: "Copenhagen, DK",
    flag: "🇩🇰",
    status: "Inactive",
    balance: 1890,    
  },
  {
    id: "14",
    name: "Alex Thompson",
    email: "a.tompson@company.com",
    location: "San Francisco, US",
    flag: "🇺🇸",
    status: "Inactive",
    balance: 1750,
  },
  {
    id: "15",
    name: "Ahmed Hassan",
    email: "a.hassan@company.com",
    location: "São Paulo, BR",
    flag: "🇧🇷",
    status: "Active",
    balance: 2100,
  },
  {
    id: "16",
    name: "Olivia Brown",
    email: "o.brown@company.com",
    location: "Sydney, AU",
    flag: "🇦🇺",
    status: "Active",
    balance: 1600,
  },
  {
    id: "17",
    name: "Hiroshi Yamamoto",
    email: "h.yamamoto@company.com",
    location: "Osaka, JP",
    flag: "🇯🇵",
    status: "Active",
    balance: 2200,
  },
  {
    id: "18",
    name: "Sophie Dubois",
    email: "s.dubois@company.com",
    location: "Montreal, CA",
    flag: "🇨🇦",
    status: "Inactive",
    balance: 950,
  },
  {
    id: "19",
    name: "Carlos Mendoza",
    email: "c.mendoza@company.com",
    location: "Mexico City, MX",
    flag: "🇲🇽",
    status: "Active",
    balance: 1800,
  },
  {
    id: "20",
    name: "Lena Müller",
    email: "l.mueller@company.com",
    location: "Vienna, AT",
    flag: "🇦🇹",
    status: "Active",
    balance: 1350,
  },
  {
    id: "21",
    name: "Raj Patel",
    email: "r.patel@company.com",
    location: "Mumbai, IN",
    flag: "🇮🇳",
    status: "Active",
    balance: 2500,
  },
  {
    id: "22",
    name: "Astrid Andersen",
    email: "a.andersen@company.com",
    location: "Oslo, NO",
    flag: "🇳🇴",
    status: "Inactive",
    balance: 1100,
  },
  {
    id: "23",
    name: "Fatima Al-Sayed",
    email: "f.alsayed@company.com",
    location: "Cairo, EG",
    flag: "🇪🇬",
    status: "Active",
    balance: 1950,
  },
  {
    id: "24",
    name: "Javier Fernández",
    email: "j.fernandez@company.com",
    location: "Buenos Aires, AR",
    flag: "🇦🇷",
    status: "Active",
    balance: 1700,
  },
  {
    id: "25",
    name: "Zoe Williams",
    email: "z.williams@company.com",
    location: "Auckland, NZ",
    flag: "🇳🇿",
    status: "Active",
    balance: 2300,
  },
  {
    id: "26",
    name: "Nikolai Petrov",
    email: "n.petrov@company.com",
    location: "Moscow, RU",
    flag: "🇷🇺",
    status: "Active",
    balance: 3100,
  },
  {
    id: "27",
    name: "Isabella Rossi",
    email: "i.rossi@company.com",
    location: "Milan, IT",
    flag: "🇮🇹",
    status: "Inactive",
    balance: 1850,
  },
  {
    id: "28",
    name: "Cheng Wei",
    email: "c.wei@company.com",
    location: "Shanghai, CN",
    flag: "🇨🇳",
    status: "Active",
    balance: 2700,
  },
  {
    id: "29",
    name: "Aisha Patel",
    email: "a.patel@company.com",
    location: "Nairobi, KE",
    flag: "🇰🇪",
    status: "Active",
    balance: 1400,
  },
  {
    id: "30",
    name: "Mateo Gonzalez",
    email: "m.gonzalez@company.com",
    location: "Bogotá, CO",
    flag: "🇨🇴",
    status: "Active",
    balance: 2050,
  }
]

export default function Component() {
  const pageSize = 5;

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize,
  })

  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "name",
      desc: false,
    },    
  ])  

  const table = useReactTable({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    enableSortingRemoval: false,
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      sorting,
      pagination,
    }, 
  })

  const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
    currentPage: table.getState().pagination.pageIndex + 1,
    totalPages: table.getPageCount(),
    paginationItemsToDisplay: 5
  });    

  return (
    <div className="space-y-4">
      <div className="border border-border bg-background rounded-lg overflow-hidden">
        <Table className="table-fixed">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} style={{ width: `${header.getSize()}px` }}>
                    {header.isPlaceholder ? null : (
                      header.column.getCanSort() ? (
                      <div
                        className={cn(
                          header.column.getCanSort()
                            && 'cursor-pointer select-none flex items-center justify-between gap-2 h-full'
                        )}
                        onClick={header.column.getToggleSortingHandler()}
                        onKeyDown={(e) => {
                          if (header.column.getCanSort() && (e.key === "Enter" || e.key === " ")) {
                            e.preventDefault();
                            header.column.getToggleSortingHandler()?.(e);
                          }
                        }}
                        tabIndex={header.column.getCanSort() ? 0 : undefined}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <ChevronUp className="opacity-60 shrink-0" size={16} strokeWidth={2} aria-hidden="true" />,
                          desc: <ChevronDown className="opacity-60 shrink-0" size={16} strokeWidth={2} aria-hidden="true" />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                      ) : (
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )
                      )
                    )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between gap-3">
        {/* Page number information */}
        <p className="flex-1 whitespace-nowrap text-sm text-muted-foreground" aria-live="polite">
          Page <span className="text-foreground">{table.getState().pagination.pageIndex + 1}</span> of{" "}
          <span className="text-foreground">{table.getPageCount()}</span>
        </p>

        {/* Pagination buttons */}
        <div className="grow">
          <Pagination>
            <PaginationContent>
              {/* Previous page button */}
              <PaginationItem>
                <Button
                  size="icon"
                  variant="outline"
                  className="disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  aria-label="Go to previous page"
                >
                  <ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
                </Button>
              </PaginationItem>

              {/* Left ellipsis (...) */}
              {showLeftEllipsis && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {/* Page number buttons */}
              {pages.map((page) => {
                const isActive = page === (table.getState().pagination.pageIndex + 1)
                return (
                  <PaginationItem key={page}>
                    <Button
                      size="icon"
                      variant={`${isActive ? "outline" : "ghost"}`}
                      onClick={() => table.setPageIndex(page-1)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {page}
                    </Button>                
                  </PaginationItem>
                )
              })}

              {/* Right ellipsis (...) */}
              {showRightEllipsis && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {/* Next page button */}
              <PaginationItem>
                <Button
                  size="icon"
                  variant="outline"
                  className="disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  aria-label="Go to next page"
                >
                  <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        {/* Results per page */}
        <div className="flex flex-1 justify-end">
          <Select
            value={table.getState().pagination.pageSize.toString()}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}               
            aria-label="Results per page"
          >            
            <SelectTrigger id="results-per-page" className="w-fit whitespace-nowrap">
              <SelectValue placeholder="Select number of results" />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 25, 50].map(pageSize => (
                <SelectItem key={pageSize} value={pageSize.toString()}>
                  {pageSize} / page
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>        
      </div>
      <p className="mt-4 text-sm text-muted-foreground text-center">Numeric pagination made with <a className="underline hover:text-foreground" href="https://tanstack.com/table" target="_blank" rel="noopener noreferrer">TanStack Table</a></p>
    </div>
  )
}
