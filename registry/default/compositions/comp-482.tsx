"use client";

import { Fragment } from "react"
import { cn } from "@/registry/default/lib/utils"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Checkbox } from "@/registry/default/ui/checkbox"
import { Badge } from "@/registry/default/ui/badge"
import { Button } from "@/registry/default/ui/button"
import { ChevronDown, ChevronUp, Info } from "lucide-react"

type Item = {
  id: string
  name: string
  email: string
  location: string
  flag: string
  status: "Active" | "Inactive" | "Pending"
  balance: number
  note?: string
}

const columns: ColumnDef<Item>[] = [
  {
    id: 'expander',
    header: () => null,
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <Button
          {...{
            className: "size-7 shadow-none text-muted-foreground",
            onClick: row.getToggleExpandedHandler(),
            "aria-expanded": row.getIsExpanded(),
            "aria-label": row.getIsExpanded() 
              ? `Collapse details for ${row.original.name}` 
              : `Expand details for ${row.original.name}`,
            size: "icon",
            variant: "ghost"
          }}
        >
          {row.getIsExpanded() ? 
            <ChevronUp size={16} strokeWidth={2} aria-hidden="true" />
          : 
            <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
          }
        </Button>
      ) : undefined
    },
  },
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
  },
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },
  {
    header: "Email",
    accessorKey: "email",
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
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => <Badge className={cn(
      row.getValue("status") === 'Inactive' && "bg-muted text-muted-foreground"
    )}>{row.getValue("status")}</Badge>,
  },
  {
    header: () => <div className="text-right">Balance</div>,
    accessorKey: "balance",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("balance"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="text-right">{formatted}</div>
    },  
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
    note: "Key team member in our San Francisco office, leading several major client projects. Consistently exceeds performance targets and maintains excellent client relationships. Recently completed advanced certification in project management. Scheduled for quarterly performance review on January 15, 2025.",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah.c@company.com",
    location: "Singapore",
    flag: "🇸🇬",
    status: "Active",
    balance: 600,
    note: "Regional coordinator for APAC markets, demonstrating strong leadership in cross-cultural team management. Successfully launched three new product lines in Q4 2024. Currently working on expanding our presence in emerging Southeast Asian markets. Next strategy meeting scheduled for January 20, 2025.",
  },
  {
    id: "3",
    name: "James Wilson",
    email: "j.wilson@company.com",
    location: "London, UK",
    flag: "🇬🇧",
    status: "Inactive",
    balance: 650,
  },
  {
    id: "4",
    name: "Maria Garcia",
    email: "m.garcia@company.com",
    location: "Madrid, Spain",
    flag: "🇪🇸",
    status: "Active",
    balance: 0,
    note: "New hire as of December 2024, showing promising results in initial assignments. Currently completing onboarding process and training modules. Assigned mentor: Alex Thompson. First project deliverable expected by end of January 2025. Demonstrates strong analytical skills.",
  },
  {
    id: "5",
    name: "David Kim",
    email: "d.kim@company.com",
    location: "Seoul, KR",
    flag: "🇰🇷",
    status: "Active",
    balance: -1000,
    note: "Technical lead for APAC innovation hub, spearheading new technology initiatives. Currently managing budget overrun issues from Q4 2024 project. Scheduled to present recovery plan in next board meeting. Despite challenges, team morale remains high with strong focus on project completion.",
  }
]

export default function Component() {
  const table = useReactTable({
    data: items,
    columns,
    getRowCanExpand: (row) => Boolean(row.original.note),
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),    
  })

  return (
    <Table>
      <TableCaption>Expanding sub-row made with <a className="underline hover:text-foreground" href="https://tanstack.com/table" target="_blank" rel="noopener noreferrer">TanStack Table</a></TableCaption>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className="hover:bg-transparent">
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
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
            <Fragment key={row.id}>
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="whitespace-nowrap [&:has([aria-expanded])]:py-0 [&:has([aria-expanded])]:pr-0 [&:has([aria-expanded])]:w-px">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
              {row.getIsExpanded() && (
                <TableRow>
                  <TableCell colSpan={row.getVisibleCells().length}>
                    <div className="py-2 flex items-start text-muted-foreground">
                      <span className="w-7 flex justify-center shrink-0 me-3 mt-0.5" aria-hidden="true">
                        <Info className="opacity-60" size={16} strokeWidth={2} />
                      </span>
                      <p className="text-sm">{row.original.note}</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </Fragment>
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
  )
}
