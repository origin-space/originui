"use client"

import { useState } from "react"
import { Button } from "@/registry/default/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/registry/default/ui/navigation-menu"

export default function Component() {
  const [navOpen, setNavOpen] = useState<boolean>(false)

  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button
            className="group md:hidden size-8"
            variant="ghost"
            size="icon"
            onClick={() => setNavOpen((prevState) => !prevState)}
            aria-expanded={navOpen}
            aria-label={navOpen ? "Close menu" : "Open menu"}
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
          <div className="flex items-center gap-6">      
            <a href="/" className="font-semibold">
              Brand
            </a>
            <NavigationMenu className="max-md:hidden absolute">
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>      
                  <NavigationMenuLink href="#" className="py-1.5 font-medium text-muted-foreground transition-colors hover:text-primary">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>      
                  <NavigationMenuLink href="#" className="py-1.5 font-medium text-muted-foreground transition-colors hover:text-primary">
                    Features
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>      
                  <NavigationMenuLink href="#" className="py-1.5 font-medium text-muted-foreground transition-colors hover:text-primary">
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>      
                  <NavigationMenuLink href="#" className="py-1.5 font-medium text-muted-foreground transition-colors hover:text-primary">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
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
