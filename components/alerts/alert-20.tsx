import { CircleAlert } from "lucide-react";

export default function Alert19() {
  return (
    <div className="px-4 py-3 border border-border rounded-lg">
      <div className="flex gap-2">
        <CircleAlert className="text-red-500 shrink-0 mt-0.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        <div className="grow space-y-1">
          <p className="text-sm font-medium">
            Password does not meet requirements:
          </p>
          <ul className="text-sm list-disc list-inside">
            <li>Minimum 8 characters</li>
            <li>Inlcude a special character</li>
          </ul>
        </div>
      </div>
    </div>
  );
}