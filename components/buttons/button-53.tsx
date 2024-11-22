// Dependencies: pnpm install lucide-react next-themes

'use client'

import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'

export default function ButtonDemo() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Toggle Between dark and light theme`}
    >
      <Sun 
        size={16} 
        strokeWidth={2} 
        aria-hidden='true' 
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon 
        size={16} 
        strokeWidth={2} 
        aria-hidden='true' 
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
