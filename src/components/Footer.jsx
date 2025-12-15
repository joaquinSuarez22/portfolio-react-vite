"use client"

import { useTheme } from "../contexts/ThemeContext"
import { Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()

  const iconStyle = `
    w-6 h-6 
    transition-all duration-300
  `

  const linkBase =
    "flex items-center justify-center p-3 rounded-lg transition-all duration-300"

  const lightMode =
    "text-black hover:bg-black/10 hover:text-black"
  const darkMode =
    "text-white hover:bg-white/10 hover:text-white"

  return (
    <footer className="py-10 border-t border-white/10 mt-16">
      <div className="container mx-auto px-4">

        {/* Redes sociales */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.linkedin.com/in/joaquinsuarez/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBase} ${theme === "dark" ? darkMode : lightMode}`}
            aria-label="LinkedIn"
          >
            <Linkedin className={iconStyle} />
          </a>

          <a
            href="https://www.instagram.com/jjoaco.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBase} ${theme === "dark" ? darkMode : lightMode}`}
            aria-label="Instagram"
          >
            <Instagram className={iconStyle} />
          </a>
        </div>

        {/* Texto */}
        <p
          className={`text-center text-sm ${
            theme === "dark" ? "text-white/60" : "text-black/60"
          }`}
        >
          © {currentYear} Joaquín Suárez — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
