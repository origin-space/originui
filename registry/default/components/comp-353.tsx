import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible";
import {
  AtSign,
  ChevronDown,
  CircleDashed,
  Command,
  Eclipse,
  Gauge,
  LucideIcon,
  Zap,
} from "lucide-react";

const items = [
  {
    id: "1",
    title: "What makes Origin UI different?",
    icon: Command,
    collapsibles: [
      {
        title: "What about performance?",
        content: "We optimize every component for maximum performance and minimal bundle size.",
        icon: Gauge,
      },
      {
        title: "How is the documentation?",
        content:
          "Our documentation is comprehensive and includes live examples for every component.",
        icon: CircleDashed,
      },
    ],
  },
  {
    id: "2",
    title: "How can I customize the components?",
    icon: Eclipse,
    collapsibles: [
      {
        title: "Can I use custom themes?",
        content:
          "Yes, our theming system is fully customizable and supports both light and dark modes.",
        icon: Gauge,
      },
      {
        title: "What about Tailwind support?",
        content: "We have first-class support for Tailwind CSS with custom utility classes.",
        icon: CircleDashed,
      },
    ],
  },
  {
    id: "3",
    title: "Is Origin UI optimized for performance?",
    icon: Zap,
    collapsibles: [
      {
        title: "What's the bundle size impact?",
        content:
          "Our components are tree-shakeable and typically add minimal overhead to your bundle.",
        open: true,
        icon: Gauge,
      },
      {
        title: "How is code splitting handled?",
        content: "We support automatic code splitting for optimal loading performance.",
        icon: CircleDashed,
      },
    ],
  },
  {
    id: "4",
    title: "How accessible are the components?",
    icon: AtSign,
    collapsibles: [
      {
        title: "Which screen readers are supported?",
        content: "We test with NVDA, VoiceOver, and JAWS to ensure broad compatibility.",
        icon: Gauge,
      },
      {
        title: "What about keyboard navigation?",
        content:
          "Full keyboard navigation support is implemented following WAI-ARIA best practices.",
        icon: CircleDashed,
      },
    ],
  },
];

export default function Component() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Multi-level w/ icon</h2>
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger className="justify-start gap-3 text-[15px] leading-6 hover:no-underline [&>svg]:-order-1">
              <span className="flex items-center gap-3">
                <item.icon
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 opacity-60"
                  aria-hidden="true"
                />
                <span>{item.title}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="p-0">
              {item.collapsibles.map((collapsible, index) => (
                <CollapsibleDemo
                  key={index}
                  title={collapsible.title}
                  content={collapsible.content}
                  open={collapsible.open}
                  icon={collapsible.icon}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

function CollapsibleDemo({
  title,
  content,
  open,
  icon: Icon,
}: {
  title: string;
  content: string;
  open?: boolean;
  icon: LucideIcon;
}) {
  return (
    <Collapsible className="space-y-1 border-t border-border py-3 pe-4 ps-6" defaultOpen={open}>
      <CollapsibleTrigger className="flex gap-2 text-[15px] font-semibold leading-6 [&[data-state=open]>svg]:rotate-180">
        <ChevronDown
          size={16}
          strokeWidth={2}
          className="mt-1 shrink-0 opacity-60 transition-transform duration-200"
          aria-hidden="true"
        />
        <span className="flex items-center gap-3">
          <Icon size={16} strokeWidth={2} className="shrink-0 opacity-60" aria-hidden="true" />
          <span>{title}</span>
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden ps-6 text-sm text-muted-foreground transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {content}
      </CollapsibleContent>
    </Collapsible>
  );
}
