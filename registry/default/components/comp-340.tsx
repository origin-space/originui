import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/registry/default/ui/accordion"

const items = [
  {
    id: "1",
    title: "Connected accounts",
    sub: "Manage your linked social and work accounts",
    content:
      "Connect your accounts from Google, GitHub, or Microsoft to enable single sign-on and streamline your workflow. Connected accounts can be used for quick login and importing your preferences across platforms. You can revoke access to any connected account at any time.",
  },
  {
    id: "2",
    title: "Notifications",
    sub: "Customize your notification preferences",
    content:
      "Choose which updates you want to receive. You can get notifications for: security alerts, billing updates, newsletter and product announcements, usage reports, and scheduled maintenance. Notifications can be delivered via email, SMS, or push notifications on your devices.",
  },
  {
    id: "3",
    title: "2-step verification",
    sub: "Add an extra layer of security to your account",
    content:
      "Protect your account with two-factor authentication. You can use authenticator apps like Google Authenticator or Authy, receive SMS codes, or use security keys like YubiKey. We recommend using an authenticator app for the most secure experience.",
  },
  {
    id: "4",
    title: "Contact support",
    sub: "We're here to help 24/7",
    content:
      "Our support team is available around the ClockIcon to assist you. For billing inquiries, technical issues, or general questions, you can reach us through live chat, email at support@example.com, or schedule a call with our technical team. Premium support is available for enterprise customers.",
  },
]

export default function Component() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">W/ sub-header and chevron</h2>
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between rounded-md py-2 text-left text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] [&[data-state=open]>svg]:rotate-180">
                <span className="flex flex-col space-y-1">
                  <span>{item.title}</span>
                  {item.sub && (
                    <span className="text-sm font-normal">{item.sub}</span>
                  )}
                </span>
                <ChevronDownIcon
                  size={16}
                  className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="text-muted-foreground pb-2">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
