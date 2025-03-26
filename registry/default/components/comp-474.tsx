import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/registry/default/ui/table"

export default function Component() {
  return (
    <div className="mx-auto max-w-lg">
      <div className="bg-background overflow-hidden rounded-md border">
        <Table>
          <TableBody>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 font-medium">
                Name
              </TableCell>
              <TableCell className="py-2">David Kim</TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 font-medium">
                Email
              </TableCell>
              <TableCell className="py-2">d.kim@company.com</TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 font-medium">
                Location
              </TableCell>
              <TableCell className="py-2">Seoul, KR</TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 font-medium">
                Status
              </TableCell>
              <TableCell className="py-2">Active</TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 font-medium">
                Balance
              </TableCell>
              <TableCell className="py-2">$1,000.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <p className="text-muted-foreground mt-4 text-center text-sm">
        Vertical table
      </p>
    </div>
  )
}
