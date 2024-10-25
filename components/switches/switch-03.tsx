import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Switch03() {
  return (
    <div
      className="inline-flex items-center gap-2"
      style={
        { "--primary": "238.7 83.5% 66.7%", "--ring": "238.7 83.5% 66.7%" } as React.CSSProperties
      }
    >
      <Switch id="switch-03" defaultChecked />
      <Label htmlFor="switch-03" className="sr-only">
        Colored switch
      </Label>
    </div>
  );
}
