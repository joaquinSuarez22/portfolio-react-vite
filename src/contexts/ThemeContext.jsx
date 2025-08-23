"use client"

import { createContext, useContext, useState } from "react"

// Create theme context for global theme state management
const ThemeContext = createContext()

// Theme provider component that wraps the entire app
export function ThemeProvider({ children }) {
  // State to track if dark mode is active (default: true)
  const [isDark, setIsDark] = useState(true)

  // Function to toggle between dark and light themes
  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  // Computed theme string for easier conditional rendering
  const theme = isDark ? "dark" : "light"

  return <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>{children}</ThemeContext.Provider>
}

// Custom hook to access theme context
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
