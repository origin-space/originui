import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Subscribe</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border"
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
            <DialogTitle className="sm:text-center">Never miss an update</DialogTitle>
            <DialogDescription className="sm:text-center">
            Subscribe to receive news and special offers.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="subscribe-email">Email</Label>
            <div className="relative">
              <Input id="input-09" className="peer ps-9" placeholder="youremail@domain.com" type="email" />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                <Mail size={16} strokeWidth={2} aria-hidden="true" />
              </div>
            </div>
          </div>              
          <DialogFooter>
            <Button type="button" className="w-full">
              Subscribe
            </Button>
          </DialogFooter>
          <p className="text-xs text-muted-foreground text-center">By subscribing you agree to our <a className="underline hover:no-underline" href="#">Privacy Policy</a>.</p>
        </div>

      </DialogContent>
    </Dialog>
  )
}
