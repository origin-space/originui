"use client";

import { useId, useState, CSSProperties } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"
import {
  Cell,
  ColumnDef,
  Header,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,    
  useReactTable,
} from "@tanstack/react-table"
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  type DragEndEvent,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers'
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical } from "lucide-react"
import { Button } from "@/registry/default/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"

type Item = {
  id: string
  name: string
  email: string
  location: string
  flag: string
  status: "Active" | "Inactive" | "Pending"
  balance: string
}

const columns: ColumnDef<Item>[] = [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => <div className="font-medium truncate">{row.getValue("name")}</div>,
    sortUndefined: 'last',
    sortDescFirst: false,    
  },
  {
    id: "email",
    header: "Email",
    accessorKey: "email",
  },
  {
    id: "location",
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
    id: "status",
    header: "Status",
    accessorKey: "status",
  },
  {
    id: "balance",
    header: "Balance",
    accessorKey: "balance",
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
    balance: "$1,250.00",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah.c@company.com",
    location: "Singapore",
    flag: "🇸🇬",
    status: "Active",
    balance: "$600.00",
  },
  {
    id: "3",
    name: "James Wilson",
    email: "j.wilson@company.com",
    location: "London, UK",
    flag: "🇬🇧",
    status: "Inactive",
    balance: "$650.00",
  },
  {
    id: "4",
    name: "Maria Garcia",
    email: "m.garcia@company.com",
    location: "Madrid, Spain",
    flag: "🇪🇸",
    status: "Active",
    balance: "$0.00",
  },
  {
    id: "5",
    name: "David Kim",
    email: "d.kim@company.com",
    location: "Seoul, KR",
    flag: "🇰🇷",
    status: "Active",
    balance: "-$1,000.00",
  }
]

export default function Component() {
  const id = useId()
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnOrder, setColumnOrder] = useState<string[]>(() =>
    columns.map(c => c.id!)
  )

  const table = useReactTable({
    data: items,
    columns,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
      columnOrder,
    },  
    onColumnOrderChange: setColumnOrder,    
    enableSortingRemoval: false  
  })

  // reorder columns after drag & drop
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (active && over && active.id !== over.id) {
      setColumnOrder(columnOrder => {
        const oldIndex = columnOrder.indexOf(active.id as string)
        const newIndex = columnOrder.indexOf(over.id as string)
        return arrayMove(columnOrder, oldIndex, newIndex) //this is just a splice util
      })
    }
  }

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  )  

  return (
    <DndContext
      id={id}
      collisionDetection={closestCenter}
      modifiers={[restrictToHorizontalAxis]}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-muted/50">
              <SortableContext
                items={columnOrder}
                strategy={horizontalListSortingStrategy}
              >
                {headerGroup.headers.map(header => (
                  <DraggableTableHeader key={header.id} header={header} />
                ))}
              </SortableContext>             
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
                  <SortableContext
                    key={cell.id}
                    items={columnOrder}
                    strategy={horizontalListSortingStrategy}
                  >
                    <DragAlongCell key={cell.id} cell={cell} />
                  </SortableContext>                  
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
      <p className="mt-4 text-sm text-muted-foreground text-center">Draggable columns made with <a className="underline hover:text-foreground" href="https://tanstack.com/table" target="_blank" rel="noopener noreferrer">TanStack Table</a> and <a href="https://dndkit.com/" target="_blank" rel="noopener noreferrer">dnd kit</a></p>
    </DndContext>
  )
}

const DraggableTableHeader = ({
  header,
}: {
  header: Header<Item, unknown>
}) => {
  const { attributes, isDragging, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: header.column.id,
    })

  const style: CSSProperties = {
    opacity: isDragging ? 0.8 : 1,
    position: 'relative',
    transform: CSS.Translate.toString(transform),
    transition,
    whiteSpace: 'nowrap',
    width: header.column.getSize(),
    zIndex: isDragging ? 1 : 0,
  }

  return (
    <TableHead
      ref={setNodeRef}
      className="relative h-10 border-t before:absolute before:inset-y-0 before:start-0 before:w-px before:bg-border first:before:bg-transparent"
      style={style}
      aria-sort={
        header.column.getIsSorted() === "asc"
          ? "ascending"
          : header.column.getIsSorted() === "desc"
          ? "descending"
          : "none"
      }
    >                  
      <div className="flex items-center justify-start gap-0.5">
        <Button
          size="icon"
          variant="ghost"
          className="size-7 shadow-none -ml-2"
          {...attributes}
          {...listeners}
          aria-label="Drag to reorder"
        >
          <GripVertical size={16} strokeWidth={2} aria-hidden="true" />
        </Button>        
        <span className="grow truncate">
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </span>
        <Button
          size="icon"
          variant="ghost"
          className="size-7 shadow-none -mr-1 group"
          onClick={header.column.getToggleSortingHandler()}
          onKeyDown={(e) => {
            if (header.column.getCanSort() && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              header.column.getToggleSortingHandler()?.(e);
            }
          }}
        >
          {{
            asc: <ChevronUp className="opacity-60 shrink-0" size={16} strokeWidth={2} aria-hidden="true" />,
            desc: <ChevronDown className="opacity-60 shrink-0" size={16} strokeWidth={2} aria-hidden="true" />,
          }[header.column.getIsSorted() as string] ?? <ChevronUp className="opacity-0 group-hover:opacity-60 shrink-0" size={16} strokeWidth={2} aria-hidden="true" />}
        </Button>         
      </div>
    </TableHead>
  )
}

const DragAlongCell = ({ cell }: { cell: Cell<Item, unknown> }) => {
  const { isDragging, setNodeRef, transform, transition } = useSortable({
    id: cell.column.id,
  })

  const style: CSSProperties = {
    opacity: isDragging ? 0.8 : 1,
    position: 'relative',
    transform: CSS.Translate.toString(transform),
    transition,
    width: cell.column.getSize(),
    zIndex: isDragging ? 1 : 0,
  }

  return (
    <TableCell ref={setNodeRef} className="truncate" style={style}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </TableCell>    
  )
}