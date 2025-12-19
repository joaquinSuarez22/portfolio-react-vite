"use client"

import React, { useState, useEffect } from "react"
import { useTheme } from "../contexts/ThemeContext"
import { ChevronDown, X, Linkedin, Instagram } from "lucide-react"

const Hero = () => {
  const { theme } = useTheme()
  const [isCvOpen, setIsCvOpen] = useState(false)

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (isCvOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isCvOpen])

  const textColor = theme === "dark" ? "text-white" : "text-black"
  const textMuted = theme === "dark" ? "text-white/80" : "text-black/70"
  const buttonBaseClasses =
    "inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-accent-custom focus:ring-offset-2 hover:scale-[1.02] hover:shadow-lg"
  const primaryButtonClasses =
    theme === "dark"
      ? "bg-white text-black border border-white/20 hover:bg-white/90"
      : "bg-black text-white border border-black/20 hover:bg-black/90"
  const secondaryButtonClasses =
    theme === "dark"
      ? "bg-white/10 border border-white/20 text-white hover:bg-white/15"
      : "bg-black/10 border border-black/20 text-black hover:bg-black/15"

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center pt-32 md:pt-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">

          {/* Texto */}
          <div className="space-y-4 animate-slide-up max-w-xl w-full">
            <h1 className="leading-tight text-left">

              {/* ¡Hola! */}
              <span className={`block text-3xl md:text-5xl font-bold ${textColor}`}>
                ¡Hola! Soy
                <img
                  src="/waving-hand.png"
                  alt="Saludo"
                  className="wave ml-2 w-8 md:w-10 h-auto inline-block align-middle"
                />
              </span>

              {/* Nombre */}
              <span className={`block text-4xl md:text-6xl font-bold ${textColor}`}>
                Joaquin Suarez
              </span>

              {/* Títulos separados en dos líneas */}
              <span className="block text-accent-custom text-xl md:text-2xl font-normal mt-2">
                <span className="block">Desarrollador FrontEnd</span>
                <span className="block">Técnico universitario en programación</span>
              </span>
            </h1>

            {/* Descripción */}
            <p className={`text-lg md:text-xl ${textMuted} text-left`}>
              Ayudo a empresas y emprendedores a tener sitios web modernos, rápidos y claros.
              Combino desarrollo frontend y diseño para crear páginas que no solo se ven bien,
              sino que también convierten.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3 justify-start mt-2 items-center">
              <a
                href="#projects"
                className={`${buttonBaseClasses} ${primaryButtonClasses}`}
              >
                Ver proyectos
              </a>

              <button
                type="button"
                onClick={() => setIsCvOpen(true)}
                className={`${buttonBaseClasses} ${secondaryButtonClasses}`}
              >
                Ver CV
              </button>

              {/* Redes Sociales */}
              <div className="flex gap-3 ml-2">
                <a
                  href="https://www.linkedin.com/in/joaquinsuarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${theme === "dark"
                    ? "text-white hover:text-white/80"
                    : "text-black hover:text-black/80"
                    }`}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/jjoaco.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${theme === "dark"
                    ? "text-white hover:text-white/80"
                    : "text-black hover:text-black/80"
                    }`}
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="animate-fade-in">
            <div className="glass rounded-2xl p-4 glow-hover">
              <img
                src="/FotoHero.png"
                alt="Joaquín Suárez - Frontend Developer"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/FotoHero.png"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Flecha centrada */}
      <a
        href="#whatido"
        aria-label="Desliza hacia abajo para ver qué hago"
        className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-20 md:bottom-28 group"
      >
        <span
          className={`inline-flex items-center justify-center w-12 h-12 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${theme === "dark"
            ? "text-white border-white/20 bg-white/10 hover:bg-white/20"
            : "text-black border-black/20 bg-black/10 hover:bg-black/20"
            } animate-bounce-y`}
        >
          <ChevronDown className="w-6 h-6" />
        </span>
      </a>

      {/* Modal CV */}
      {isCvOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div
            className={`relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col ${theme === "dark" ? "bg-[#050816]" : "bg-white"
              }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-white/10">
              <h2 className={`text-lg md:text-xl font-semibold ${textColor}`}>Curriculum Vitae</h2>
              <button
                onClick={() => setIsCvOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Cerrar CV"
              >
                <X className={theme === "dark" ? "text-white" : "text-black"} />
              </button>
            </div>

            {/* PDF */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src="/CV Joaquin Suarez.pdf#view=FitH"
                className="w-full h-[60vh] md:h-[70vh]"
                title="CV Joaquin Suarez"
              />
            </div>

            {/* Footer */}
            <div className="flex flex-col md:flex-row justify-between gap-3 items-center px-4 md:px-6 py-3 border-t border-white/10">
              <button
                onClick={() => setIsCvOpen(false)}
                className={`${buttonBaseClasses} ${secondaryButtonClasses} w-full md:w-auto`}
              >
                Cerrar
              </button>
              <a
                href="/CV Joaquin Suarez.pdf"
                download
                className={`${buttonBaseClasses} ${primaryButtonClasses} w-full md:w-auto`}
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Animaciones */}
      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(14deg); }
          30% { transform: rotate(-8deg); }
          45% { transform: rotate(14deg); }
          60% { transform: rotate(-4deg); }
          75% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
        .wave {
          transform-origin: 70% 70%;
          animation: wave 1.8s ease-in-out infinite;
        }

        @keyframes bounceY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .animate-bounce-y {
          animation: bounceY 1.6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero
