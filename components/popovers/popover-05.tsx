import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"

export default function PopoverDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            Feedback
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <h2 className="text-sm font-semibold mb-2">Send us feedback</h2>
          <form className="space-y-3">
            <Textarea
              id="feedback"
              placeholder="How can we improve Origin UI?"
              aria-label="Send feedback"
            />
            <div className="flex flex-col sm:flex-row sm:justify-end">
              <Button size="sm">Send feedback</Button>
            </div>
          </form>          
        </PopoverContent>
      </Popover>
    </div>
  );
}
