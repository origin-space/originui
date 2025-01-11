import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Feedback</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send us feedback</DialogTitle>
          <DialogDescription>
            Watch{" "}
            <a className="text-foreground hover:underline" href="#">
              tutorials
            </a>
            , read Origin UI&lsquo;s{" "}
            <a className="text-foreground hover:underline" href="#">
              documentation
            </a>
            , or join our{" "}
            <a className="text-foreground hover:underline" href="#">
              Discord
            </a>{" "}
            for community help.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-5">
          <Textarea
            id="feedback"
            placeholder="How can we improve Origin UI?"
            aria-label="Send feedback"
          />
          <div className="flex flex-col sm:flex-row sm:justify-end">
            <Button type="button">Send feedback</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
