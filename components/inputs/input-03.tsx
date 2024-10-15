import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input03() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-03">Input with helper text</Label>
      <Input id="input-03" placeholder="Email" type="email" />
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        We won't share your email with anyone
      </p>
    </div>
  );
}
