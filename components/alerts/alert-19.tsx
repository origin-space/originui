import { CircleAlert } from "lucide-react";

export default function Alert19() {
  return (
    <div className="px-4 py-3 bg-red-400 bg-opacity-20 dark:bg-opacity-10 text-red-700 dark:text-red-600 rounded-lg">
      <div className="flex gap-3">
        <CircleAlert className="shrink-0 mt-0.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        <div className="grow space-y-1">
          <p className="text-sm font-medium">
            Password does not meet requirements:
          </p>
          <ul className="text-sm list-disc list-inside opacity-80">
            <li>Minimum 8 characters</li>
            <li>Inlcude a special character</li>
          </ul>
        </div>
      </div>
    </div>
  );
}