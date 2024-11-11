import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input21() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-21">Input with end button</Label>
      <div className="flex rounded-lg shadow-sm shadow-black/5">
        <Input
          id="input-21"
          className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
          placeholder="Email"
          type="email"
        />
        <button className="inline-flex items-center rounded-e-lg border border-input bg-background px-3 text-sm font-medium text-foreground ring-offset-background transition-shadow hover:bg-accent hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
          Send
        </button>
      </div>
    </div>
  );
}
