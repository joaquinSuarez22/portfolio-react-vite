"use client"

import { createContext, useContext, useState, useEffect } from "react"

// Create theme context for global theme state management
const ThemeContext = createContext()

// Theme provider component that wraps the entire app
export function ThemeProvider({ children }) {
  // Initialize state from localStorage or default to true (dark mode)
  const [isDark, setIsDark] = useState(() => {
    // Only access localStorage on client side
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme !== null) {
        return savedTheme === "dark"
      }
    }
    return true // Default to dark mode
  })

  // Persist theme to localStorage and update HTML class whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", isDark ? "dark" : "light")
      // Add or remove 'dark' class from html element
      const html = document.documentElement
      if (isDark) {
        html.classList.add("dark")
      } else {
        html.classList.remove("dark")
      }
    }
  }, [isDark])

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
