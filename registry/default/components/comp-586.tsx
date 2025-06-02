import { useId } from "react"
import { MicIcon, SearchIcon } from "lucide-react"

import Logo from "@/registry/default/components/navbar-components/logo"
import ThemeToggle from "@/registry/default/components/navbar-components/theme-toggle"
import { Button } from "@/registry/default/ui/button"
import { Input } from "@/registry/default/ui/input"

export default function Component() {
  const id = useId()

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-1">
          <a href="#" className="text-primary hover:text-primary/90">
            <Logo />
          </a>
        </div>
        {/* Middle area */}
        <div className="grow max-sm:hidden">
          {/* Search form */}
          <div className="relative mx-auto w-full max-w-xs">
            <Input
              id={id}
              className="peer h-8 px-8"
              placeholder="Search..."
              type="search"
            />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
              <SearchIcon size={16} />
            </div>
            <button
              className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Press to speak"
              type="submit"
            >
              <MicIcon size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild variant="ghost" size="sm" className="text-sm">
            <a href="#">Community</a>
          </Button>
          <Button asChild size="sm" className="text-sm">
            <a href="#">Get Started</a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
