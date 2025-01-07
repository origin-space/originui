"use client";

import { Label } from "@/registry/default/ui/label";
import { ListBox, ListBoxItem } from "react-aria-components";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label>Listbox with single option</Label>
      <div className="overflow-hidden rounded-lg border border-input">
        <ListBox
          className="space-y-1 bg-background p-1 text-sm shadow-sm shadow-black/5 transition-shadow"
          aria-label="Select framework"
          selectionMode="single"
          defaultSelectedKeys={["svelte"]}
        >
          <ListBoxItem
            id="react"
            className="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
          >
            React
          </ListBoxItem>
          <ListBoxItem
            id="vue"
            className="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
          >
            Vue
          </ListBoxItem>
          <ListBoxItem
            id="angular"
            className="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
            isDisabled
          >
            Angular
          </ListBoxItem>
          <ListBoxItem
            id="svelte"
            className="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
          >
            Svelte
          </ListBoxItem>
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
