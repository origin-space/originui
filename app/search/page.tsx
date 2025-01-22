import { Input } from "@/registry/default/ui/input";
import { Search } from "lucide-react";
import PageHeader from "@/components/page-header";

export default function Page() {
  return (
    <main>
      <PageHeader title="Search">
        This is the search page
      </PageHeader>

      <div className="max-w-2xl mx-auto">
        <div className="space-y-2">
          <div className="relative">
            <Input className="peer ps-9" placeholder="Search component..." type="search" autoFocus />
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50" aria-label="Search component">
              <Search size={16} strokeWidth={2} />
            </div>
          </div>
        </div>            
      </div>
    </main>
  );
}
