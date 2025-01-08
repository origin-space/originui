"use client";

import { useState, useId } from "react"
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
  }
]

export default function Component() {
  const id = useId();
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
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
      <div className="flex items-center justify-between gap-8">
        {/* Results per page */}
        <div className="flex items-center gap-3">
          <Label htmlFor={id}>Rows per page</Label>
          <Select
            value={table.getState().pagination.pageSize.toString()}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}               
          >
            <SelectTrigger id={id} className="w-fit whitespace-nowrap">
              <SelectValue placeholder="Select number of results" />
            </SelectTrigger>
            <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
              {[5, 10, 25, 50].map(pageSize => (
                <SelectItem key={pageSize} value={pageSize.toString()}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Page number information */}
        <div className="flex grow justify-end whitespace-nowrap text-sm text-muted-foreground">
          <p className="whitespace-nowrap text-sm text-muted-foreground" aria-live="polite">
            <span className="text-foreground">{table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}-{table.getState().pagination.pageIndex * table.getState().pagination.pageSize + table.getState().pagination.pageSize}</span> of{" "}
            <span className="text-foreground">{table.getRowCount().toString()}</span>
          </p>
        </div>

        {/* Pagination buttons */}
        <div>
          <Pagination>
            <PaginationContent>
              {/* First page button */}
              <PaginationItem>
                <Button
                  size="icon"
                  variant="outline"
                  className="disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => table.firstPage()}
                  disabled={!table.getCanPreviousPage()}
                  aria-label="Go to first page"
                >
                  <ChevronFirst size={16} strokeWidth={2} aria-hidden="true" />
                </Button>
              </PaginationItem>
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
              {/* Last page button */}
              <PaginationItem>
                <Button
                  size="icon"
                  variant="outline"
                  className="disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => table.lastPage()}
                  disabled={!table.getCanNextPage()}
                  aria-label="Go to last page"
                >
                  <ChevronLast size={16} strokeWidth={2} aria-hidden="true" />
                </Button>
              </PaginationItem>

            </PaginationContent>
          </Pagination>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground text-center">Paginated table made with <a className="underline hover:text-foreground" href="https://tanstack.com/table" target="_blank" rel="noopener noreferrer">TanStack Table</a></p>
    </div>
  )
}
