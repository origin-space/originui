// Dependencies: pnpm install react-aria-components

"use client";

import { Label } from "@/components/ui/label";
import { Header, ListBox, ListBoxItem, Section, Separator } from "react-aria-components";

export default function Select51() {
  return (
    <div className="space-y-2">
      <Label>Listbox with option groups</Label>
      <div className="overflow-hidden rounded-lg border border-input">
        <ListBox
          className="max-h-72 min-h-20 space-y-2 overflow-auto bg-background p-1 text-sm shadow-sm shadow-black/[.04] ring-offset-background transition-shadow"
          aria-label="Select some foods"
          selectionMode="multiple"
          defaultSelectedKeys={["lettuce", "tuna"]}
        >
          <Section className="space-y-1">
            <Header className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
              Veggies
            </Header>
            <ListBoxItem
              id="lettuce"
              className="relative rounded-md px-2 py-1.5 focus:outline-none data-[focus-visible]:z-10 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30"
            >
              Lettuce
            </ListBoxItem>
            <ListBoxItem
              id="tomato"
              className="relative rounded-md px-2 py-1.5 focus:outline-none data-[focus-visible]:z-10 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30"
            >
              Tomato
            </ListBoxItem>
            <ListBoxItem
              id="onion"
              className="relative rounded-md px-2 py-1.5 focus:outline-none data-[focus-visible]:z-10 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30"
            >
              Onion
            </ListBoxItem>
          </Section>
          <Separator className="-mx-1 my-1 h-px bg-border" />
          <Section className="space-y-1">
            <Header className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
              Protein
            </Header>
            <ListBoxItem
              id="ham"
              className="relative rounded-md px-2 py-1.5 focus:outline-none data-[focus-visible]:z-10 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30"
            >
              Ham
            </ListBoxItem>
            <ListBoxItem
              id="tuna"
              className="relative rounded-md px-2 py-1.5 focus:outline-none data-[focus-visible]:z-10 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30"
            >
              Tuna
            </ListBoxItem>
            <ListBoxItem
              id="tofu"
              className="relative rounded-md px-2 py-1.5 focus:outline-none data-[focus-visible]:z-10 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30"
            >
              Tofu
            </ListBoxItem>
          </Section>
          <Separator className="-mx-1 my-1 h-px bg-border" />
          <Section className="space-y-1">
            <Header className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
              Condiments
            </Header>
            <ListBoxItem
              id="mayo"
              className="relative rounded-md px-2 py-1.5 focus:outline-none data-[focus-visible]:z-10 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30"
            >
              Mayonaise
            </ListBoxItem>
            <ListBoxItem
              id="mustard"
              className="relative rounded-md px-2 py-1.5 focus:outline-none data-[focus-visible]:z-10 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30"
            >
              Mustard
            </ListBoxItem>
            <ListBoxItem
              id="ranch"
              className="relative rounded-md px-2 py-1.5 focus:outline-none data-[focus-visible]:z-10 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30"
            >
              Ranch
            </ListBoxItem>
          </Section>
        </ListBox>
      </div>
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Built with{" "}
        <a
          className="underline hover:text-foreground"
          href="https://react-spectrum.adobe.com/react-aria/ListBox.html"
          target="_blank"
          rel="noopener nofollow"
        >
          React Aria
        </a>
      </p>
    </div>
  );
}
