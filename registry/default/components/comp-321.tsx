import { MailIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"
import { Input } from "@/registry/default/ui/input"

export default function Component() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Newsletter</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="mb-2 flex flex-col items-center gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <svg
              className="stroke-zinc-800 dark:stroke-zinc-100"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
            </svg>
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              Never miss an update
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              Subscribe to receive news and special offers.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="*:not-first:mt-2">
            <div className="relative">
              <Input
                id="dialog-subscribe"
                className="peer ps-9"
                placeholder="hi@yourcompany.com"
                type="email"
                aria-label="Email"
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                <MailIcon size={16} aria-hidden="true" />
              </div>
            </div>
          </div>
          <Button type="button" className="w-full">
            Subscribe
          </Button>
        </form>

        <p className="text-muted-foreground text-center text-xs">
          By subscribing you agree to our{" "}
          <a className="underline hover:no-underline" href="#">
            Privacy Policy
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  )
}
