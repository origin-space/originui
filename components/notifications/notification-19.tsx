import { Button } from "@/components/ui/button";

export default function Notification01() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 inset-x-4` to the container element.
    <div className="px-4 py-3 md:py-2 border border-border rounded-lg shadow-lg shadow-black/5 z-[100] bg-background">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-3">
        <p className="text-sm">
          We use cookies to improve your experience, analyze site usage, and show personalized content.
        </p>
        <div className="flex max-md:flex-wrap gap-2">
          <Button size="sm">Accept</Button>
          <Button
            variant="outline"
            size="sm"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}
