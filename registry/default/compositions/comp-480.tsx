"use client"

import { CSSProperties, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { Button } from "@/registry/default/ui/button";
import { Ellipsis, ArrowRightToLine, ArrowLeftToLine, PinOff } from "lucide-react";
import {
  Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'

type Item = {
  id: string
  name: string
  email: string
  location: string
  flag: string
  status: "Active" | "Inactive" | "Pending"
  balance: number
  department: string
  role: string
  joinDate: string
  lastActive: string
  performance: "Excellent" | "Good" | "Average" | "Poor"
}

const getCommonPinningStyles = (column: Column<Item>): CSSProperties => {
  const isPinned = column.getIsPinned()
  return {
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  }
}

const columns: ColumnDef<Item>[] = [
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => <div className="font-medium truncate">{row.getValue("name")}</div>,
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Location",
    accessorKey: "location",
    cell: ({ row }) => (
      <div className="truncate">
        <span className="text-lg leading-none">{row.original.flag}</span>{" "}
        {row.getValue("location")}
      </div>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
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
  },
  {
    header: "Department",
    accessorKey: "department",
  },
  {
    header: "Role",
    accessorKey: "role",
  },
  {
    header: "Join Date",
    accessorKey: "joinDate",
  },
  {
    header: "Last Active",
    accessorKey: "lastActive",
  },
  {
    header: "Performance",
    accessorKey: "performance",
  },
]

const items: Item[] = [
  {
    id: "1",
    name: "Alex Thompson",
    email: "alex.t@company.com",
    location: "San Francisco, US",
    flag: "🇺🇸",
    status: "Active",
    balance: 1250,
    department: "Engineering",
    role: "Senior Developer",
    joinDate: "2023-03-15",
    lastActive: "2025-01-06",
    performance: "Excellent",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah.c@company.com",
    location: "Singapore",
    flag: "🇸🇬",
    status: "Active",
    balance: 600,
    department: "Marketing",
    role: "Marketing Manager",
    joinDate: "2022-01-01",
    lastActive: "2024-12-31",
    performance: "Good",
  },
  {
    id: "3",
    name: "James Wilson",
    email: "j.wilson@company.com",
    location: "London, UK",
    flag: "🇬🇧",
    status: "Inactive",
    balance: 650,
    department: "Sales",
    role: "Sales Representative",
    joinDate: "2021-06-01",
    lastActive: "2023-12-31",
    performance: "Average",
  },
  {
    id: "4",
    name: "Maria Garcia",
    email: "m.garcia@company.com",
    location: "Madrid, Spain",
    flag: "🇪🇸",
    status: "Active",
    balance: 0,
    department: "HR",
    role: "HR Manager",
    joinDate: "2020-01-01",
    lastActive: "2024-06-30",
    performance: "Excellent",
  },
  {
    id: "5",
    name: "David Kim",
    email: "d.kim@company.com",
    location: "Seoul, KR",
    flag: "🇰🇷",
    status: "Active",
    balance: -1000,
    department: "Finance",
    role: "Financial Analyst",
    joinDate: "2022-07-01",
    lastActive: "2024-12-31",
    performance: "Poor",
  }
]

export default function Component() {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data: items,
    columns,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
    enableSortingRemoval: false
  })

  return (
    <div>
      <Table
        className="table-fixed border-separate border-spacing-0 [&_tr]:border-none [&_th]:border-b [&_th]:border-border [&_tr:not(:last-child)_td]:border-b [&_td]:border-border [&_tfoot_td]:border-t"
        style={{
          width: table.getTotalSize(),
        }}
      >
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-muted/50">
              {headerGroup.headers.map((header) => {
                const { column } = header
                return (
                  <TableHead
                    key={header.id}
                    className="relative truncate  border-t [&[data-sticky]]:bg-muted/90 [&[data-sticky]]:backdrop-blur-sm [&[data-sticky=left][data-last-col=left]]:border-r [&[data-sticky=right][data-last-col=right]]:border-l [&[data-sticky][data-last-col]]:border-border [&:not([data-sticky]):has(+[data-sticky])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=left]_div.cursor-col-resize:last-child]:opacity-0 [&[data-sticky=right]:last-child_div.cursor-col-resize:last-child]:opacity-0 h-10"
                    colSpan={header.colSpan}
                    style={{ ...getCommonPinningStyles(column) }}
                    data-sticky={header.column.getIsPinned() || undefined}
                    data-last-col={
                      (column.getIsPinned() === 'left' && column.getIsLastColumn('left')) ? 'left' :
                        (column.getIsPinned() === 'right' && column.getIsFirstColumn('right')) ? 'right' :
                          undefined
                    }
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </span>
                      {!header.isPlaceholder && header.column.getCanPin() && (
                        header.column.getIsPinned() ? (
                          <Button
                            size="icon"
                            variant="ghost"
                            className="size-7 shadow-none -mr-1"
                            onClick={() => header.column.pin(false)}
                            aria-label="Unstick column"
                          >
                            <PinOff size={16} strokeWidth={2} aria-hidden="true" />
                          </Button>
                        ) : (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="size-7 shadow-none -mr-1"
                                aria-label="Pin column"
                              >
                                <Ellipsis size={16} strokeWidth={2} aria-hidden="true" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => header.column.pin('left')}
                              >
                                <ArrowLeftToLine size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
                                Stick to left
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => header.column.pin('right')}
                              >
                                <ArrowRightToLine size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
                                Stick to right
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        )
                      )}
                      {header.column.getCanResize() && (
                        <div
                          {...{
                            onDoubleClick: () => header.column.resetSize(),
                            onMouseDown: header.getResizeHandler(),
                            onTouchStart: header.getResizeHandler(),
                            className: "absolute top-0 h-full w-4 cursor-col-resize user-select-none touch-none -right-2 z-10 flex justify-center before:absolute before:w-px before:inset-y-0 before:bg-border before:-translate-x-px",
                          }}
                        />
                      )}
                    </div>
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
                {row.getVisibleCells().map(cell => {
                  const { column } = cell
                  return (
                    <TableCell
                      key={cell.id}
                      className="truncate [&[data-sticky]]:bg-background/90 [&[data-sticky]]:backdrop-blur-sm [&[data-sticky=left][data-last-col=left]]:border-r [&[data-sticky=right][data-last-col=right]]:border-l [&[data-sticky][data-last-col]]:border-border"
                      style={{ ...getCommonPinningStyles(column) }}
                      data-sticky={cell.column.getIsPinned() || undefined}
                      data-last-col={
                        (column.getIsPinned() === 'left' && column.getIsLastColumn('left')) ? 'left' :
                          (column.getIsPinned() === 'right' && column.getIsFirstColumn('right')) ? 'right' :
                            undefined
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  )
                })}
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
      <p className="mt-4 text-sm text-muted-foreground text-center">Pinnable columns made with <a className="underline hover:text-foreground" href="https://tanstack.com/table" target="_blank" rel="noopener noreferrer">TanStack Table</a></p>
    </div>
  )
}
