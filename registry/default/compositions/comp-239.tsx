"use client";

import { Label } from "@/registry/default/ui/label";
import { Header, ListBox, ListBoxItem, ListBoxSection, Separator } from "react-aria-components";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label>Listbox with option groups</Label>
      <div className="overflow-hidden rounded-lg border border-input">
        <ListBox
          className="max-h-72 min-h-20 space-y-2 overflow-auto bg-background p-1 text-sm shadow-sm shadow-black/5 transition-shadow"
          aria-label="Select some foods"
          selectionMode="multiple"
          defaultSelectedKeys={["lettuce", "tuna"]}
        >
          <ListBoxSection className="space-y-1">
            <Header className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
              Veggies
            </Header>
            <ListBoxItem
              id="lettuce"
              className="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
            >
              Lettuce
            </ListBoxItem>
            <ListBoxItem
              id="tomato"
              className="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
            >
              Tomato
            </ListBoxItem>
            <ListBoxItem
              id="onion"
              className="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
            >
              Onion
            </ListBoxItem>
          </ListBoxSection>
          <Separator className="-mx-1 my-1 h-px bg-border" />
          <ListBoxSection className="space-y-1">
            <Header className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
              Protein
            </Header>
            <ListBoxItem
              id="ham"
              className="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
            >
              Ham
            </ListBoxItem>
            <ListBoxItem
              id="tuna"
              className="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
            >
              Tuna
            </ListBoxItem>
            <ListBoxItem
              id="tofu"
              className="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
            >
              Tofu
            </ListBoxItem>
          </ListBoxSection>
          <Separator className="-mx-1 my-1 h-px bg-border" />
          <ListBoxSection className="space-y-1">
            <Header className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
              Condiments
            </Header>
            <ListBoxItem
              id="mayo"
              className="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
            >
              Mayonaise
            </ListBoxItem>
            <ListBoxItem
              id="mustard"
              className="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
            >
              Mustard
            </ListBoxItem>
            <ListBoxItem
              id="ranch"
              className="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
            >
              Ranch
            </ListBoxItem>
          </ListBoxSection>
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
