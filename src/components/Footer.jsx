"use client"

import { useTheme } from "../contexts/ThemeContext"

const Footer = () => {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className={`${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
            © {currentYear} Joaquín Suárez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
