"use client"

import { ThemeProvider } from "../contexts/ThemeContext"

export default function ThemeProviderWrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

