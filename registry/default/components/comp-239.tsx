"use client"

import {
  Header,
  ListBox,
  ListBoxItem,
  ListBoxSection,
  Separator,
} from "react-aria-components"

import { Label } from "@/registry/default/ui/label"

export default function Component() {
  return (
    <div className="*:not-first:mt-2">
      <Label>Listbox with option groups</Label>
      <div className="border-input overflow-hidden rounded-md border">
        <ListBox
          className="bg-background max-h-72 min-h-20 space-y-2 overflow-auto p-1 text-sm shadow-xs transition-[color,box-shadow]"
          aria-label="Select some foods"
          selectionMode="multiple"
          defaultSelectedKeys={["lettuce", "tuna"]}
        >
          <ListBoxSection className="space-y-1">
            <Header className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
              Veggies
            </Header>
            <ListBoxItem
              id="lettuce"
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
            >
              Lettuce
            </ListBoxItem>
            <ListBoxItem
              id="tomato"
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
            >
              Tomato
            </ListBoxItem>
            <ListBoxItem
              id="onion"
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
            >
              Onion
            </ListBoxItem>
          </ListBoxSection>
          <Separator className="bg-border -mx-1 my-2 h-px" />
          <ListBoxSection className="space-y-1">
            <Header className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
              Protein
            </Header>
            <ListBoxItem
              id="ham"
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
            >
              Ham
            </ListBoxItem>
            <ListBoxItem
              id="tuna"
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
            >
              Tuna
            </ListBoxItem>
            <ListBoxItem
              id="tofu"
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
            >
              Tofu
            </ListBoxItem>
          </ListBoxSection>
          <Separator className="bg-border -mx-1 my-2 h-px" />
          <ListBoxSection className="space-y-1">
            <Header className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
              Condiments
            </Header>
            <ListBoxItem
              id="mayo"
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
            >
              Mayonaise
            </ListBoxItem>
            <ListBoxItem
              id="mustard"
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
            >
              Mustard
            </ListBoxItem>
            <ListBoxItem
              id="ranch"
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
            >
              Ranch
            </ListBoxItem>
          </ListBoxSection>
        </ListBox>
      </div>
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Built with{" "}
        <a
          className="hover:text-foreground underline"
          href="https://react-spectrum.adobe.com/react-aria/ListBox.html"
          target="_blank"
          rel="noopener nofollow"
        >
          React Aria
        </a>
      </p>
    </div>
  )
}
