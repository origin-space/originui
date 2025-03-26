import { CheckIcon, MonitorIcon, SmartphoneIcon, XIcon } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

const items = [
  {
    feature: "scroll-timeline",
    desktop: [
      { name: "Chrome", supported: true, version: "115" },
      { name: "Edge", supported: true, version: "115" },
      { name: "Firefox", supported: false, version: "111" },
      { name: "Opera", supported: true, version: "101" },
      { name: "Safari", supported: false, version: "No" },
    ],
    mobile: [
      { name: "Chrome Android", supported: true, version: "115" },
      { name: "Firefox Android", supported: false, version: "No" },
      { name: "Opera Android", supported: true, version: "77" },
      { name: "Safari iOS", supported: false, version: "No" },
      { name: "Samsung Internet", supported: true, version: "23" },
    ],
  },
  {
    feature: "view-timeline",
    desktop: [
      { name: "Chrome", supported: true, version: "115" },
      { name: "Edge", supported: true, version: "115" },
      { name: "Firefox", supported: false, version: "114" },
      { name: "Opera", supported: true, version: "101" },
      { name: "Safari", supported: false, version: "No" },
    ],
    mobile: [
      { name: "Chrome Android", supported: true, version: "115" },
      { name: "Firefox Android", supported: false, version: "No" },
      { name: "Opera Android", supported: true, version: "77" },
      { name: "Safari iOS", supported: false, version: "No" },
      { name: "Samsung Internet", supported: true, version: "23" },
    ],
  },
  {
    feature: "font-size-adjust",
    desktop: [
      { name: "Chrome", supported: true, version: "127" },
      { name: "Edge", supported: true, version: "127" },
      { name: "Firefox", supported: false, version: "3" },
      { name: "Opera", supported: true, version: "113" },
      { name: "Safari", supported: true, version: "16.4" },
    ],
    mobile: [
      { name: "Chrome Android", supported: true, version: "127" },
      { name: "Firefox Android", supported: true, version: "4" },
      { name: "Opera Android", supported: true, version: "84" },
      { name: "Safari iOS", supported: true, version: "16.4" },
      { name: "Samsung Internet", supported: false, version: "No" },
    ],
  },
]

export default function Component() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="*:border-border border-y-0 hover:bg-transparent [&>:not(:last-child)]:border-r">
          <TableCell></TableCell>
          <TableHead className="border-b text-center" colSpan={5}>
            <MonitorIcon className="inline-flex" size={16} aria-hidden="true" />
            <span className="sr-only">Desktop browsers</span>
          </TableHead>
          <TableHead className="border-b text-center" colSpan={5}>
            <SmartphoneIcon
              className="inline-flex"
              size={16}
              aria-hidden="true"
            />
            <span className="sr-only">Mobile browsers</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableHeader>
        <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
          <TableCell></TableCell>
          {items[0].desktop.map((browser) => (
            <TableHead
              key={browser.name}
              className="text-foreground h-auto py-3 align-bottom"
            >
              <span className="relative left-[calc(50%-.5rem)] block rotate-180 leading-4 whitespace-nowrap [text-orientation:sideways] [writing-mode:vertical-rl]">
                {browser.name}
              </span>
            </TableHead>
          ))}
          {items[0].mobile.map((browser) => (
            <TableHead
              key={browser.name}
              className="text-foreground h-auto py-3 align-bottom"
            >
              <span className="relative left-[calc(50%-.5rem)] block rotate-180 leading-4 whitespace-nowrap [text-orientation:sideways] [writing-mode:vertical-rl]">
                {browser.name}
              </span>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow
            key={item.feature}
            className="*:border-border [&>:not(:last-child)]:border-r"
          >
            <TableHead className="text-foreground font-medium">
              {item.feature}
            </TableHead>
            {[...item.desktop, ...item.mobile].map((browser, index) => (
              <TableCell
                key={`${browser.name}-${index}`}
                className="space-y-1 text-center"
              >
                {browser.supported ? (
                  <CheckIcon
                    className="inline-flex stroke-emerald-600"
                    size={16}
                    aria-hidden="true"
                  />
                ) : (
                  <XIcon
                    className="inline-flex stroke-red-600"
                    size={16}
                    aria-hidden="true"
                  />
                )}
                <span className="sr-only">
                  {browser.supported ? "Supported" : "Not supported"}
                </span>
                <div className="text-muted-foreground text-xs font-medium">
                  {browser.version}
                </div>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
