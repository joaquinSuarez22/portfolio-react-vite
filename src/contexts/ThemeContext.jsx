"use client"

import { createContext, useContext, useEffect, useState } from "react"

// Contexto (puede ser null si algo se renderiza sin Provider)
const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true)

  // Leer tema guardado al montar (cliente)
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme === "light") setIsDark(false)
      else setIsDark(true)
    } catch {
      setIsDark(true)
    }
  }, [])

  // Guardar tema + aplicar clase dark en <html>
  useEffect(() => {
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light")
      document.documentElement.classList.toggle("dark", isDark)
    } catch {
      // noop
    }
  }, [isDark])

  const toggleTheme = () => setIsDark((prev) => !prev)

  const theme = isDark ? "dark" : "light"

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// ✅ Hook seguro: NO rompe build /404 /error si falta el Provider
export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    return {
      isDark: true,
      theme: "dark",
      toggleTheme: () => { },
    }
  }

  return context
}
