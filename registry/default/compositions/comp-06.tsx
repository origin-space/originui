import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-06">Input with error</Label>
      <Input
        id="input-06"
        className="border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/20"
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
