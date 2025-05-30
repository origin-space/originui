import { useId } from "react"
import {
  CommandIcon,
  FileTextIcon,
  GlobeIcon,
  HomeIcon,
  LayersIcon,
  UsersIcon,
} from "lucide-react"

import Logo from "@/registry/default/components/navbar-components/logo"
import ThemeToggle from "@/registry/default/components/navbar-components/theme-toggle"
import UserMenu from "@/registry/default/components/navbar-components/user-menu"
import { Button } from "@/registry/default/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/registry/default/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"

// Navigation links with icons for desktop icon-only navigation
const navigationLinks = [
  { href: "#", label: "Dashboard", icon: HomeIcon, active: true },
  { href: "#", label: "Projects", icon: LayersIcon },
  { href: "#", label: "Documentation", icon: FileTextIcon },
  { href: "#", label: "Team", icon: UsersIcon },
]

// Language options
const languages = [
  { value: "en", label: "En" },
  { value: "es", label: "Es" },
  { value: "fr", label: "Fr" },
  { value: "de", label: "De" },
  { value: "ja", label: "Ja" },
]

export default function Component() {
  const id = useId()

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-4">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
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
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          className="flex-row items-center gap-2 py-1.5"
                          active={link.active}
                        >
                          <Icon
                            size={16}
                            className="text-muted-foreground"
                            aria-hidden="true"
                          />
                          <span>{link.label}</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <a href="#" className="text-primary hover:text-primary/90">
            <Logo />
          </a>

          {/* Desktop navigation - icon only */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              <TooltipProvider>
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.label}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <NavigationMenuLink
                          href={link.href}
                          className={`group inline-flex size-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                            link.active
                              ? "bg-accent text-accent-foreground"
                              : "bg-transparent"
                          }`}
                        >
                          <link.icon size={20} aria-hidden="true" />
                          <span className="sr-only">{link.label}</span>
                        </NavigationMenuLink>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>{link.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </NavigationMenuItem>
                ))}
              </TooltipProvider>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">

          {/* Theme toggle */}
          <ThemeToggle />

          {/* Language selector */}
          <Select defaultValue="en">
            <SelectTrigger
              id={`language-${id}`}
              className="h-8 px-2 [&>svg]:text-muted-foreground/80 [&>svg]:shrink-0 border-none shadow-none hover:bg-accent hover:text-accent-foreground"
              aria-label="Select language"
            >
              <GlobeIcon size={16} className="shrink-0" aria-hidden="true" />
              <SelectValue className="hidden sm:inline-flex" />
            </SelectTrigger>
            <SelectContent className="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0">
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  <span className="flex items-center gap-2">
                    <span className="truncate">{lang.label}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>          

          {/* User menu */}
          <UserMenu />
        </div>
      </div>
    </header>
  )
}
