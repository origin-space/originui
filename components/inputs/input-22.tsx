import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input22() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-22">Input with button</Label>
      <div className="flex gap-2">
        <Input id="input-22" className="flex-1" placeholder="Email" type="email" />
        <button className="inline-flex items-center rounded-lg border border-input bg-background px-3 text-sm font-medium text-foreground ring-offset-background transition-shadow hover:bg-accent hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
          Send
        </button>
      </div>
    </div>
  );
}
