import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Switch03() {
  return (
    <div
      className="flex items-center space-x-2"
      style={
        { "--primary": "238.7 83.5% 66.7%", "--ring": "238.7 83.5% 66.7%" } as React.CSSProperties
      }
    >
      <Switch id="switch-03" defaultChecked />
      <Label htmlFor="switch-03">Colored switch</Label>
    </div>
  );
}
