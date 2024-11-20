import { CircleAlert } from "lucide-react";

export default function Alert08() {
  return (
    <div className="px-4 py-3 border border-border rounded-lg">
      <p className="text-sm">
        <CircleAlert className="text-red-500 inline-flex -mt-0.5 me-2" size={16} strokeWidth={2} aria-hidden="true" />
        Some error information.
      </p>
    </div>
  );
}