import { CircleAlert } from "lucide-react";

export default function Component() {
  return (
    <div className="rounded-lg border border-border px-4 py-3">
      <div className="flex gap-3">
        <CircleAlert
          className="mt-0.5 shrink-0 text-red-500 opacity-60"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        <div className="grow space-y-1">
          <p className="text-sm font-medium">Password does not meet requirements:</p>
          <ul className="list-inside list-disc text-sm text-muted-foreground">
            <li>Minimum 8 characters</li>
            <li>Inlcude a special character</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
