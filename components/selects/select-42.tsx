// Dependencies: pnpm install react-aria-components

"use client";

import { Label } from "@/components/ui/label";
import { Section, Header, Separator, ListBox, ListBoxItem } from 'react-aria-components';

export default function Select42() {
  return (
    <div className="space-y-2">
      <Label>Listbox with option groups</Label>
      <ListBox className="min-h-20 max-h-72 overflow-auto border border-input bg-background shadow-sm shadow-black/[.04] ring-offset-background transition-shadow rounded-lg p-1 text-sm space-y-2" aria-label="Select some foods" selectionMode="multiple" defaultSelectedKeys={["lettuce", "tuna"]}>
        <Section className="space-y-1">
          <Header className="px-2 py-1.5 font-medium text-muted-foreground text-xs">Veggies</Header>
          <ListBoxItem id="lettuce" className="relative rounded-md focus:outline-none px-2 py-1.5 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:z-10">Lettuce</ListBoxItem>
          <ListBoxItem id="tomato" className="relative rounded-md focus:outline-none px-2 py-1.5 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:z-10">Tomato</ListBoxItem>
          <ListBoxItem id="onion" className="relative rounded-md focus:outline-none px-2 py-1.5 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:z-10">Onion</ListBoxItem>
        </Section>
        <Separator className="-mx-1 my-1 h-px bg-border" />
        <Section className="space-y-1">
          <Header className="px-2 py-1.5 font-medium text-muted-foreground text-xs">Protein</Header>
          <ListBoxItem id="ham" className="relative rounded-md focus:outline-none px-2 py-1.5 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:z-10">Ham</ListBoxItem>
          <ListBoxItem id="tuna" className="relative rounded-md focus:outline-none px-2 py-1.5 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:z-10">Tuna</ListBoxItem>
          <ListBoxItem id="tofu" className="relative rounded-md focus:outline-none px-2 py-1.5 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:z-10">Tofu</ListBoxItem>
        </Section>
        <Separator className="-mx-1 my-1 h-px bg-border" />
        <Section className="space-y-1">
          <Header className="px-2 py-1.5 font-medium text-muted-foreground text-xs">Condiments</Header>
          <ListBoxItem id="mayo" className="relative rounded-md focus:outline-none px-2 py-1.5 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:z-10">Mayonaise</ListBoxItem>
          <ListBoxItem id="mustard" className="relative rounded-md focus:outline-none px-2 py-1.5 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:z-10">Mustard</ListBoxItem>
          <ListBoxItem id="ranch" className="relative rounded-md focus:outline-none px-2 py-1.5 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[focus-visible]:border-ring data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:z-10">Ranch</ListBoxItem>
        </Section>
      </ListBox>
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
