import * as AccordionPrimitive from "@radix-ui/react-accordion"
import {
  AtSignIcon,
  CommandIcon,
  EclipseIcon,
  PlusIcon,
  ZapIcon,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/registry/default/ui/accordion"

const items = [
  {
    id: "1",
    icon: CommandIcon,
    title: "What makes Origin UI different?",
    content:
      "Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.",
  },
  {
    id: "2",
    icon: EclipseIcon,
    title: "How can I customize the components?",
    content:
      "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
  },
  {
    id: "3",
    icon: ZapIcon,
    title: "Is Origin UI optimized for performance?",
    content:
      "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
  },
  {
    id: "4",
    icon: AtSignIcon,
    title: "How accessible are the components?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
]

export default function Component() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">W/ icon and plus-minus</h2>
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                <span className="flex items-center gap-3">
                  <item.icon
                    size={16}
                    className="shrink-0 opacity-60"
                    aria-hidden="true"
                  />
                  <span>{item.title}</span>
                </span>
                <PlusIcon
                  size={16}
                  className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="text-muted-foreground ps-7 pb-2">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
