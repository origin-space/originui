import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Rating</Button>
      </DialogTrigger>
      <DialogContent className="p-0 flex flex-col gap-0 [&>button:last-child]:top-3.5">
        <DialogHeader className="text-left contents space-y-0">
          <DialogTitle className="px-6 py-4 border-b border-border text-base">Help us improve</DialogTitle>
        </DialogHeader>
        <div className="px-6 py-4">          
          <div className="flex flex-col gap-4">

            <div>
              <fieldset className="space-y-4">
                <legend className="text-lg font-semibold leading-none text-foreground">
                  How hard was it to set up your account?
                </legend>
                <RadioGroup className="flex gap-0 -space-x-px rounded-lg shadow-sm shadow-black/5">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                    <label
                      key={number}
                      className="relative flex size-9 flex-1 cursor-pointer flex-col items-center justify-center gap-3 border border-input text-center text-sm outline-offset-2 transition-colors first:rounded-s-lg last:rounded-e-lg has-[[data-state=checked]]:z-10 has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[[data-disabled]]:opacity-50 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
                    >
                      <RadioGroupItem
                        id={`radio-17-r${number}`}
                        value={number.toString()}
                        className="sr-only after:absolute after:inset-0"
                      />
                      {number}
                    </label>
                  ))}
                </RadioGroup>
              </fieldset>
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <p>
                  Very easy
                </p>
                <p>
                  Very dificult
                </p>
              </div>            
            </div>

            <div className="space-y-2">
              <Label>Why did you give this rating?</Label>
              <Textarea id="feedback" placeholder="How can we improve Origin UI?" aria-label="Send feedback" />
            </div>

            <Button type="button" className="w-full">
              Send feedback
            </Button>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

