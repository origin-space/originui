import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

const items = [
  {
    id: "1",
    name: "Alex Thompson",
    email: "alex.t@company.com",
    location: "San Francisco, US",
    status: "Active",
    balance: "$1,250.00",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah.c@company.com",
    location: "Singapore",
    status: "Active",
    balance: "$600.00",
  },
  {
    id: "3",
    name: "James Wilson",
    email: "j.wilson@company.com",
    location: "London, UK",
    status: "Inactive",
    balance: "$650.00",
  },
  {
    id: "4",
    name: "Maria Garcia",
    email: "m.garcia@company.com",
    location: "Madrid, Spain",
    status: "Active",
    balance: "$0.00",
  },
  {
    id: "5",
    name: "David Kim",
    email: "d.kim@company.com",
    location: "Seoul, KR",
    status: "Active",
    balance: "-$1,000.00",
  },
]

export default function Component() {
  return (
    <div>
      <Table>
        <TableHeader className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Balance</TableHead>
          </TableRow>
        </TableHeader>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
          {items.map((item) => (
            <TableRow
              key={item.id}
              className="odd:bg-muted/50 odd:hover:bg-muted/50 border-none hover:bg-transparent"
            >
              <TableCell className="py-2.5 font-medium">{item.name}</TableCell>
              <TableCell className="py-2.5">{item.email}</TableCell>
              <TableCell className="py-2.5">{item.location}</TableCell>
              <TableCell className="py-2.5">{item.status}</TableCell>
              <TableCell className="py-2.5 text-right">
                {item.balance}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
        <TableFooter className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <p className="text-muted-foreground mt-4 text-center text-sm">
        Striped table
      </p>
    </div>
  )
}
