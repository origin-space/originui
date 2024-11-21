import { CircleAlert } from "lucide-react";

export default function Alert08() {
  return (
    <div className="px-4 py-3 border border-border rounded-lg">
      <p className="text-sm">
        <CircleAlert className="text-red-500 inline-flex -mt-0.5 me-3" size={16} strokeWidth={2} aria-hidden="true" />
        An error occurred!
      </p>
    </div>
  );
}