"use client";

import { Label } from "@/registry/default/ui/label";
import { Header, ListBox, ListBoxItem, ListBoxSection, Separator } from "react-aria-components";

export default function Component() {
  return (
    <div className="*:not-first:mt-2">
      <Label>Listbox with option groups</Label>
      <div className="border-input overflow-hidden rounded-lg border">
        <ListBox
          className="bg-background max-h-72 min-h-20 space-y-2 overflow-auto p-1 text-sm shadow-xs transition-shadow"
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
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground outline-ring/30 dark:outline-ring/40 relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:outline-2"
            >
              Lettuce
            </ListBoxItem>
            <ListBoxItem
              id="tomato"
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground outline-ring/30 dark:outline-ring/40 relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:outline-2"
            >
              Tomato
            </ListBoxItem>
            <ListBoxItem
              id="onion"
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground outline-ring/30 dark:outline-ring/40 relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:outline-2"
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
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground outline-ring/30 dark:outline-ring/40 relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:outline-2"
            >
              Ham
            </ListBoxItem>
            <ListBoxItem
              id="tuna"
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground outline-ring/30 dark:outline-ring/40 relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:outline-2"
            >
              Tuna
            </ListBoxItem>
            <ListBoxItem
              id="tofu"
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground outline-ring/30 dark:outline-ring/40 relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:outline-2"
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
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground outline-ring/30 dark:outline-ring/40 relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:outline-2"
            >
              Mayonaise
            </ListBoxItem>
            <ListBoxItem
              id="mustard"
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground outline-ring/30 dark:outline-ring/40 relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:outline-2"
            >
              Mustard
            </ListBoxItem>
            <ListBoxItem
              id="ranch"
              className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground outline-ring/30 dark:outline-ring/40 relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:outline-2"
            >
              Ranch
            </ListBoxItem>
          </ListBoxSection>
        </ListBox>
      </div>
      <p className="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
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
  );
}
