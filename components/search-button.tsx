import Link from "next/link";
import { Search } from "lucide-react";

export default function SearchButton() {
  return (
    <Link href="/search"
      className="inline-flex h-9 w-fit min-w-64 rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus:border-ring focus:outline-none focus:ring-[3px] focus:ring-ring/20 cursor-text"
    >
      <span className="flex grow items-center">
        <Search
          className="-ms-1 me-2 text-muted-foreground/80"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        <span className="font-normal text-muted-foreground/70">Search component...</span>
      </span>
    </Link>            
  );
}
