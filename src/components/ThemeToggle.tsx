
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <Button 
      variant="ghost" 
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 p-0"
    >
      {darkMode ? (
        <span className="text-lg">☀️</span>
      ) : (
        <span className="text-lg">🌙</span>
      )}
    </Button>
  )
}
