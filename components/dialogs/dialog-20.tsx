import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Store, Check } from "lucide-react";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Change plan</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
            aria-hidden="true"
          >
            <Store className="opacity-80" size={16} strokeWidth={2} />
          </div>
          <DialogHeader>
            <DialogTitle className="text-left">Change your plan</DialogTitle>
            <DialogDescription className="text-left">
              Pick one of the following plans.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <RadioGroup className="gap-2" defaultValue="plan-02">
            {/* Radio card #1 */}
            <div className="relative flex w-full items-center gap-2 rounded-lg border border-input px-4 py-3 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent">
              <RadioGroupItem
                value="plan-01"
                id="plan-01"
                aria-describedby="plan-01-description"
                className="order-1 after:absolute after:inset-0"
              />
              <div className="grid grow gap-1">
                <Label htmlFor="plan-01">
                  Essential
                </Label>
                <p id="plan-01-description" className="text-xs text-muted-foreground">
                  $4 per member/month
                </p>
              </div>
            </div>
            {/* Radio card #2 */}
            <div className="relative flex w-full items-center gap-2 rounded-lg border border-input px-4 py-3 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent">
              <RadioGroupItem
                value="plan-02"
                id="plan-02"
                aria-describedby="plan-02-description"
                className="order-1 after:absolute after:inset-0"
              />
              <div className="grid grow gap-1">
                <Label htmlFor="plan-02">
                  Standard
                </Label>
                <p id="plan-02-description" className="text-xs text-muted-foreground">
                  $19 per member/month
                </p>
              </div>
            </div>
            {/* Radio card #3 */}
            <div className="relative flex w-full items-center gap-2 rounded-lg border border-input px-4 py-3 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent">
              <RadioGroupItem
                value="plan-03"
                id="plan-03"
                aria-describedby="plan-03-description"
                className="order-1 after:absolute after:inset-0"
              />
              <div className="grid grow gap-1">
                <Label htmlFor="plan-03">
                Enterprise
                </Label>
                <p id="plan-03-description" className="text-xs text-muted-foreground">
                  $32 per member/month
                </p>
              </div>
            </div>
          </RadioGroup>

          <div className="space-y-3">
            <p><strong className="text-sm font-medium">Features include:</strong></p>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <Check size={16} strokeWidth={2} className="shrink-0 text-primary mt-0.5" aria-hidden="true" />
                Create unlimited projects.
              </li>
              <li className="flex gap-2">
                <Check size={16} strokeWidth={2} className="shrink-0 text-primary mt-0.5" aria-hidden="true" />
                Remove watermarks.
              </li>
              <li className="flex gap-2">
                <Check size={16} strokeWidth={2} className="shrink-0 text-primary mt-0.5" aria-hidden="true" />
                Add unlimited users and free viewers.
              </li>
              <li className="flex gap-2">
                <Check size={16} strokeWidth={2} className="shrink-0 text-primary mt-0.5" aria-hidden="true" />
                Upload unlimited files.
              </li>
              <li className="flex gap-2">
                <Check size={16} strokeWidth={2} className="shrink-0 text-primary mt-0.5" aria-hidden="true" />
                7-day money back guarantee.
              </li>
              <li className="flex gap-2">
                <Check size={16} strokeWidth={2} className="shrink-0 text-primary mt-0.5" aria-hidden="true" />
                Advanced permissions.
              </li>                                                                      
            </ul>
          </div>

          <div className="grid gap-2">
            <Button type="button" className="w-full">
              Change plan
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="ghost" className="w-full">
                Cancel
              </Button>
            </DialogClose>
          </div>
        </form>

      </DialogContent>
    </Dialog>
  )
}
