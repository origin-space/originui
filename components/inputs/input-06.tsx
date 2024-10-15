import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input06() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-06">Input with error</Label>
      <Input
        id="input-06"
        className="border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/30"
        placeholder="Email"
        type="email"
        defaultValue="invalid@email.com"
      />
      <p className="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
        Email is invalid
      </p>
    </div>
  );
}
