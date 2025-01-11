import { Eclipse } from "lucide-react";

export default function Component() {
  return (
    <div className="dark bg-muted px-4 py-3 text-foreground">
      <p className="text-center text-sm">
        <Eclipse
          className="-mt-0.5 me-3 inline-flex opacity-60"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Get the most out of your app with real-time updates and analytics{" "}
        <span className="text-muted-foreground">·</span>{" "}
        <a href="#" className="font-medium underline hover:no-underline">
          Upgrade
        </a>
      </p>
    </div>
  );
}
