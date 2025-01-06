import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

const items = [
  {
    id: "1",
    name: "Alex Thompson",
    username: "@alexthompson",
    image: "/avatar-40-02.jpg",
    email: "alex.t@company.com",
    location: "San Francisco, US",
    status: "Active",
    balance: "$1,250.00",
  },
  {
    id: "2",
    name: "Sarah Chen",
    username: "@sarahchen",
    image: "/avatar-40-01.jpg",
    email: "sarah.c@company.com",
    location: "Singapore",
    status: "Active",
    balance: "$600.00",
  },
  {
    id: "4",
    name: "Maria Garcia",
    username: "@mariagarcia",
    image: "/avatar-40-03.jpg",
    email: "m.garcia@company.com",
    location: "Madrid, Spain",
    status: "Active",
    balance: "$0.00",
  },
  {
    id: "5",
    name: "David Kim",
    username: "@davidkim",
    image: "/avatar-40-05.jpg",
    email: "d.kim@company.com",
    location: "Seoul, KR",
    status: "Active",
    balance: "-$1,000.00",
  }
]

export default function Component() {
  return (
    <Table>
      <TableCaption>Table with images</TableCaption>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <img className="rounded-full" src={item.image} width={40} height={40} alt={item.name} />
                <div>
                  <div className="font-medium">{item.name}</div>
                  <span className="mt-0.5 text-xs text-muted-foreground">{item.username}</span>
                </div>
              </div>
            </TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.location}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell className="text-right">{item.balance}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
