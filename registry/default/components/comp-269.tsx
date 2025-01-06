import { CircleAlert } from "lucide-react";

export default function Component() {
  return (
    <div className="rounded-lg border border-border px-4 py-3">
      <p className="text-sm">
        <CircleAlert
          className="-mt-0.5 me-3 inline-flex text-red-500"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        An error occurred!
      </p>
    </div>
  );
}
