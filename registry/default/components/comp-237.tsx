"use client"

import { ListBox, ListBoxItem } from "react-aria-components"

import { Label } from "@/registry/default/ui/label"

export default function Component() {
  return (
    <div className="*:not-first:mt-2">
      <Label>Listbox with single option</Label>
      <div className="border-input overflow-hidden rounded-md border">
        <ListBox
          className="bg-background space-y-1 p-1 text-sm shadow-xs transition-[color,box-shadow]"
          aria-label="Select framework"
          selectionMode="single"
          defaultSelectedKeys={["svelte"]}
        >
          <ListBoxItem
            id="react"
            className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
          >
            React
          </ListBoxItem>
          <ListBoxItem
            id="vue"
            className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
          >
            Vue
          </ListBoxItem>
          <ListBoxItem
            id="angular"
            className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
            isDisabled
          >
            Angular
          </ListBoxItem>
          <ListBoxItem
            id="svelte"
            className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
          >
            Svelte
          </ListBoxItem>
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
