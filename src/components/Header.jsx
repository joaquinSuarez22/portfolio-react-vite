"use client"

import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext"

const Header = () => {
  const { theme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: "Sobre mí" },
    { href: "#experience", label: "Experiencia" },
    { href: "#projects", label: "Proyectos" },
    { href: "#studies", label: "Estudios" },
    { href: "#contact", label: "Contacto" },
  ]

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
      <div className="mt-4 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl">
        <nav className="px-2.5 py-0.5" role="navigation" aria-label="Navegación principal">
          <div className="hidden md:flex items-center justify-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative transition-all duration-300 ease-out focus:outline-none focus:border-none focus:ring-0 focus:shadow-none px-3 py-2 group rounded-md opacity-90 border-transparent border-none ${theme === "dark" ? "text-white/90" : "text-black/90"}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center justify-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md focus:outline-none ${theme === "dark" ? "text-white/90" : "text-black/90"}`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""} ${theme === "dark" ? "bg-white/90" : "bg-black/90"}`}
                ></span>
                <span
                  className={`block w-5 h-0.5 mt-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""} ${theme === "dark" ? "bg-white/90" : "bg-black/90"}`}
                ></span>
                <span
                  className={`block w-5 h-0.5 mt-1 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""} ${theme === "dark" ? "bg-white/90" : "bg-black/90"}`}
                ></span>
              </div>
            </button>
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-2 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`block transition-all duration-300 ease-out focus:outline-none px-3 py-2 rounded-md hover:bg-white/10 ${theme === "dark" ? "text-white/90" : "text-black/90"}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
