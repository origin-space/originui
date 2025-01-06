"use client";

import { useState, useMemo, useEffect } from "react"
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
  Column,
  ColumnDef,
  ColumnFiltersState,
  RowData,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Checkbox } from "@/registry/default/ui/checkbox"
import { ExternalLink } from "lucide-react"

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
  volume: string
  cpc: string
  traffic: string
  position: string
  link: string
}

const items: Item[] = [
  {
    id: "1",
    keyword: "react components",
    intents: ["Informational", "Navigational"],
    volume: "2507",
    cpc: "2.50",
    traffic: "88",
    position: "1",
    link: "https://www.originui.com",
  },
]

export default function Component() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )

  const columns = useMemo<ColumnDef<Item>[]>(
    () => [
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
    },
    {
      header: "CPC",
      accessorKey: "cpc",
      cell: ({ row }) => <div>${row.getValue("cpc")}</div>,
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
      header: "Position",
      accessorKey: "position",
    },
    {
      header: "Link",
      accessorKey: "link",
      cell: ({ row }) => <a className="inline-flex items-center gap-1 hover:underline" href={row.getValue("link")} target="_blank">{row.getValue("link")} <ExternalLink size={12} strokeWidth={2} aria-hidden="true" /></a>,
    },
  ],
  []
) 

  const table = useReactTable({
    data: items,
    columns,
    filterFns: {},
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <>
      <Table>
        <TableCaption>Data table made with <a className="underline hover:text-foreground" href="https://tanstack.com/table" target="_blank" rel="noopener noreferrer">TanStack Table</a></TableCaption>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="hover:bg-transparent">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                  {header.isPlaceholder ? null : (
                    <>
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                      {header.column.getCanFilter() ? (
                        <div>
                          <Filter column={header.column} />
                        </div>
                      ) : null}
                    </>
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
      <pre>
        {JSON.stringify(
          { columnFilters: table.getState().columnFilters },
          null,
          2
        )}
      </pre>
    </>
  )
}

function Filter({ column }: { column: Column<any, unknown> }) {
  const columnFilterValue = column.getFilterValue()
  const { filterVariant } = column.columnDef.meta ?? {}

  return filterVariant === 'range' ? (
    <div>
      <div className="flex space-x-2">
        {/* See faceted column filters example for min max values functionality */}
        <DebouncedInput
          type="number"
          value={"1"}
          onChange={value =>
            column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min`}
          className="w-24 border shadow rounded"
        />
        <DebouncedInput
          type="number"
          value={"100"}
          onChange={value =>
            column.setFilterValue((old: [number, number]) => [old?.[0], value])
          }
          placeholder={`Max`}
          className="w-24 border shadow rounded"
        />
      </div>
      <div className="h-1" />
    </div>
  ) : filterVariant === 'select' ? (
    <select
      onChange={e => column.setFilterValue(e.target.value)}
      value={columnFilterValue?.toString()}
    >
      {/* See faceted column filters example for dynamic select options */}
      <option value="">All</option>
      <option value="complicated">complicated</option>
      <option value="relationship">relationship</option>
      <option value="single">single</option>
    </select>
  ) : (
    <DebouncedInput
      className="w-36 border shadow rounded"
      onChange={value => column.setFilterValue(value)}
      placeholder={`Search...`}
      type="text"
      value={(columnFilterValue ?? '') as string}
    />
    // See faceted column filters example for datalist search suggestions
  )
}

// A typical debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (
    <input {...props} value={value} onChange={e => setValue(e.target.value)} />
  )
}
