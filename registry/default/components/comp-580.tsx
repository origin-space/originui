import { useId } from "react"
import { Button } from "@/registry/default/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/registry/default/ui/navigation-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover"
import { ArrowRightIcon, SearchIcon } from "lucide-react"
import { Input } from "@/registry/default/ui/input"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "#", label: "Products" },
  { href: "#", label: "Categories" },
  { href: "#", label: "Deals" }
]

export default function Component() {
  const id = useId()
  
  return (
    <header className="border-b bg-background px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group md:hidden size-8"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="gap-0 md:gap-2 flex-col items-start">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        href={link.href}
                        className="py-1.5 font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Left side */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href="#" className="font-semibold">
              Brand
            </a>
            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      className="py-1.5 font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            {/* Search form */}
            <div className="relative">
              <Input
                id={id}
                className="peer ps-8 pe-2 h-8"
                placeholder="Search..."
                type="search"
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
                <SearchIcon size={16} />
              </div>
            </div>            
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-sm">
            Sign In
          </Button>
          <Button size="sm" className="text-sm">Get Started</Button>
        </div>
      </div>
    </header>
  )
}
