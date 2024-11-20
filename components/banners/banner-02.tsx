import { Eclipse } from "lucide-react";

export default function Banner02() {
    return (
      <div className="px-4 py-3 bg-muted text-foreground dark">
        <p className="text-sm text-center">
          <Eclipse className="inline-flex -mt-0.5 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
          Get the most out of your app with real-time updates and analytics{" "}<span className="text-muted-foreground">·</span>{" "}<a href="#" className="font-medium underline hover:no-underline">Upgrade</a>
        </p>
      </div>
    );
  }