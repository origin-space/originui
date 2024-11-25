import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Send feedback</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send us feedback</DialogTitle>
          <DialogDescription>
            Watch <a className="text-foreground hover:underline" href="#">tutorials</a>, read Origin UI&lsquo;s <a className="text-foreground hover:underline" href="#">documentation</a>, or join our <a className="text-foreground hover:underline" href="#">Discord</a> for community help.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Textarea id="feedback" placeholder="How can we improve origin UI?" aria-label="Send feedback" />
          <div className="flex flex-col sm:flex-row sm:justify-end">
            <Button type="button">
              Send feedback
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

