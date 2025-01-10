"use client";

import { useState, useId, useMemo } from "react"
import { cn } from "@/registry/default/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  RowData,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState, 
  useReactTable,
} from '@tanstack/react-table'
import { Checkbox } from "@/registry/default/ui/checkbox"
import { ExternalLink } from "lucide-react"
import { Label } from "@/registry/default/ui/label"
import { Input } from "@/registry/default/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/default/ui/select"
import { Search, ChevronDown, ChevronUp } from "lucide-react"

declare module '@tanstack/react-table' {
  //allows us to define custom properties for our columns
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: 'text' | 'range' | 'select'
  }
}

type Item = {
  id: string
  keyword: string
  intents: Array<"Informational" | "Navigational" | "Commercial" | "Transactional">
  volume: number
  cpc: number
  traffic: number
  link: string
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
  },
  {
    header: "Keyword",
    accessorKey: "keyword",
    cell: ({ row }) => <div className="font-medium">{row.getValue("keyword")}</div>,
  },
  {
    header: "Intents",
    accessorKey: "intents",
    cell: ({ row }) => {
      const intents = row.getValue("intents") as string[]
      return (
        <div className="flex gap-1">
          {intents.map((intent) => {
            const styles = {
              Informational: "bg-indigo-400/20 text-indigo-500",
              Navigational: "bg-emerald-400/20 text-emerald-500",
              Commercial: "bg-amber-400/20 text-amber-500",
              Transactional: "bg-rose-400/20 text-rose-500"
            }[intent]

            return (
              <div
                key={intent}
                className={cn(
                  "size-5 flex items-center justify-center text-xs font-medium rounded",
                  styles,
                )}
              >
                {intent.charAt(0)}
              </div>
            )
          })}
        </div>
      )
    },
    enableSorting: false,
    meta: {
      filterVariant: 'select',
    },
    filterFn: (row, id, filterValue) => {
      const rowValue = row.getValue(id)
      return Array.isArray(rowValue) && rowValue.includes(filterValue)
    }
  },
  {
    header: "Volume",
    accessorKey: "volume",
    cell: ({ row }) => {
      const volume = parseInt(row.getValue("volume"))
      return new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1
      }).format(volume)
    },
    meta: {
      filterVariant: 'range',
    }
  },
  {
    header: "CPC",
    accessorKey: "cpc",
    cell: ({ row }) => <div>${row.getValue("cpc")}</div>,
    meta: {
      filterVariant: 'range',
    }
  },
  {
    header: "Traffic",
    accessorKey: "traffic",
    cell: ({ row }) => {
      const traffic = parseInt(row.getValue("traffic"))
      return new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1
      }).format(traffic)
    },
    meta: {
      filterVariant: 'range',
    }
  },
  {
    header: "Link",
    accessorKey: "link",
    cell: ({ row }) => <a className="inline-flex items-center gap-1 hover:underline" href={row.getValue("link")} target="_blank">{row.getValue("link")} <ExternalLink size={12} strokeWidth={2} aria-hidden="true" /></a>,
    enableSorting: false,
  },
]

const items: Item[] = [
  {
    id: "1",
    keyword: "react components",
    intents: ["Informational", "Navigational"],
    volume: 2507,
    cpc: 2.50,
    traffic: 88,
    link: "https://www.originui.com",
  },
  {
    id: "2",
    keyword: "buy react templates",
    intents: ["Commercial", "Transactional"],
    volume: 1850,
    cpc: 4.75,
    traffic: 65,
    link: "https://www.originui.com/templates",
  },
  {
    id: "3",
    keyword: "react ui library",
    intents: ["Informational", "Commercial"],
    volume: 3200,
    cpc: 3.25,
    traffic: 112,
    link: "https://www.originui.com/docs",
  },
  {
    id: "4",
    keyword: "tailwind components download",
    intents: ["Transactional"],
    volume: 890,
    cpc: 1.95,
    traffic: 45,
    link: "https://www.originui.com/download",
  },
  {
    id: "5",
    keyword: "react dashboard template free",
    intents: ["Commercial", "Transactional"],
    volume: 4100,
    cpc: 5.50,
    traffic: 156,
    link: "https://www.originui.com/templates/dashboard",
  },
  {
    id: "6",
    keyword: "how to use react components",
    intents: ["Informational"],
    volume: 1200,
    cpc: 1.25,
    traffic: 42,
    link: "https://www.originui.com/tutorials",
  },
  {
    id: "7",
    keyword: "react ui kit premium",
    intents: ["Commercial", "Transactional"],
    volume: 760,
    cpc: 6.80,
    traffic: 28,
    link: "https://www.originui.com/pricing",
  },
  {
    id: "8",
    keyword: "react component documentation",
    intents: ["Informational", "Navigational"],
    volume: 950,
    cpc: 1.80,
    traffic: 35,
    link: "https://www.originui.com/docs/components",
  }
]

export default function Component() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "traffic",
      desc: false,
    },    
  ])  

  const table = useReactTable({
    data: items,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client-side filtering
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(), // client-side faceting
    getFacetedUniqueValues: getFacetedUniqueValues(), // generate unique values for select filter/autocomplete
    getFacetedMinMaxValues: getFacetedMinMaxValues(), // generate min/max values for range filter
    onSortingChange: setSorting,    
    enableSortingRemoval: false  
  })

  return (
    <div className="space-y-6">

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        {/* Search input */}
        <div className="w-44">
          <Filter column={table.getColumn("keyword")!} />
        </div>
        {/* Intents select */}
        <div className="w-36">
          <Filter column={table.getColumn("intents")!} />
        </div>
        {/* Volume inputs */}
        <div className="w-36">
          <Filter column={table.getColumn("volume")!} />
        </div>
        {/* CPC inputs */}
        <div className="w-36">
          <Filter column={table.getColumn("cpc")!} />
        </div>
        {/* Traffic inputs */}
        <div className="w-36">
          <Filter column={table.getColumn("traffic")!} />
        </div>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-muted/50">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="relative select-none h-10 border-t"
                    aria-sort={
                      header.column.getIsSorted() === "asc"
                        ? "ascending"
                        : header.column.getIsSorted() === "desc"
                        ? "descending"
                        : "none"
                    }
                  >
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
                          }[header.column.getIsSorted() as string] ?? <span className="size-4" aria-hidden="true" />}
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
      <p className="mt-4 text-sm text-muted-foreground text-center">Data table with filters made with <a className="underline hover:text-foreground" href="https://tanstack.com/table" target="_blank" rel="noopener noreferrer">TanStack Table</a></p>
    </div>
  )
}

function Filter({ column }: { column: Column<any, unknown> }) {
  const id = useId();
  const columnFilterValue = column.getFilterValue()
  const { filterVariant } = column.columnDef.meta ?? {}
  const columnHeader = typeof column.columnDef.header === 'string'
    ? column.columnDef.header
    : ''
  const sortedUniqueValues = useMemo(
    () => {
      if (filterVariant === 'range') return []

      // Get all unique values from the column
      const values = Array.from(column.getFacetedUniqueValues().keys())

      // If the values are arrays, flatten them and get unique items
      const flattenedValues = values.reduce((acc: string[], curr) => {
        if (Array.isArray(curr)) {
          return [...acc, ...curr]
        }
        return [...acc, curr]
      }, [])

      // Get unique values and sort them
      return Array.from(new Set(flattenedValues))
        .sort()
    },
    [column.getFacetedUniqueValues(), filterVariant]
  )

  if (filterVariant === 'range') {
    return (
      <div className="space-y-2">
        <Label>
          {columnHeader}
        </Label>
        <div className="flex">
          <Input
            id={`${id}-range-1`}
            className="flex-1 rounded-e-none focus:z-10 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            value={(columnFilterValue as [number, number])?.[0] ?? ''}
            onChange={e =>
              column.setFilterValue((old: [number, number]) => [
                e.target.value ? Number(e.target.value) : undefined,
                old?.[1]
              ])
            }
            placeholder="Min"
            type="number"
            aria-label={`${columnHeader} min`}
          />
          <Input
            id={`${id}-range-2`}
            className="flex-1 rounded-s-none focus:z-10 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none -ms-px"
            value={(columnFilterValue as [number, number])?.[1] ?? ''}
            onChange={e =>
              column.setFilterValue((old: [number, number]) => [
                old?.[0],
                e.target.value ? Number(e.target.value) : undefined
              ])
            }
            placeholder="Max"
            type="number"
            aria-label={`${columnHeader} max`}
          />
        </div>
      </div>
    )
  }

  if (filterVariant === 'select') {
    return (
      <div className="space-y-2">
        <Label htmlFor={`${id}-select`}>{columnHeader}</Label>
        <Select
          value={columnFilterValue?.toString() ?? "all"}
          onValueChange={(value) => {
            column.setFilterValue(value === "all" ? undefined : value)
          }}
        >
          <SelectTrigger id={`${id}-select`}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {sortedUniqueValues.map(value => (
              <SelectItem key={String(value)} value={String(value)}>
                {String(value)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={`${id}-input`}>{columnHeader}</Label>
      <div className="relative">
        <Input
          id={`${id}-input`}
          className="peer ps-9"
          value={(columnFilterValue ?? '') as string}
          onChange={e => column.setFilterValue(e.target.value)}
          placeholder={`Search ${columnHeader.toLowerCase()}`}
          type="text"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Search size={16} strokeWidth={2} />
        </div>
      </div>
    </div>
  )
}
