import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/registry/default/ui/table"

export default function Component() {
  return (
    <div className="max-w-lg mx-auto">
      <div className="border border-border bg-background rounded-lg overflow-hidden">
        <Table>
          <TableBody>
            <TableRow className="hover:bg-transparent [&>:not(:last-child)]:border-r *:border-border">
              <TableCell className="font-medium bg-muted/50 py-2">Name</TableCell>
              <TableCell className="py-2">David Kim</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent [&>:not(:last-child)]:border-r *:border-border">
              <TableCell className="font-medium bg-muted/50 py-2">Email</TableCell>
              <TableCell className="py-2">d.kim@company.com</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent [&>:not(:last-child)]:border-r *:border-border">
              <TableCell className="font-medium bg-muted/50 py-2">Location</TableCell>
              <TableCell className="py-2">Seoul, KR</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent [&>:not(:last-child)]:border-r *:border-border">
              <TableCell className="font-medium bg-muted/50 py-2">Status</TableCell>
              <TableCell className="py-2">Active</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent [&>:not(:last-child)]:border-r *:border-border">
              <TableCell className="font-medium bg-muted/50 py-2">Balance</TableCell>
              <TableCell className="py-2">$1,000.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <p className="mt-4 text-sm text-muted-foreground text-center">Vertical table</p>
    </div>      
  )
}
