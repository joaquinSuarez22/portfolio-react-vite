"use client"

import { useTheme } from "../contexts/ThemeContext"
import { ChevronDown } from "lucide-react"

const Hero = () => {
  const { theme } = useTheme()

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
          {/* Texto (alineado a la izquierda) */}
          <div className="space-y-4 animate-slide-up max-w-xl w-full">
            <h1 className="leading-tight text-left">
              {/* ¡Hola! con mismo estilo que el nombre pero más chico */}
              <span
                className={`block text-3xl md:text-5xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                ¡Hola!
                <img
                  src="/waving-hand.png"
                  alt="Saludo"
                  className="wave ml-2 w-8 md:w-10 h-auto inline-block align-middle"
                />
              </span>

              {/* Nombre */}
              <span
                className={`block text-4xl md:text-6xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Joaquin Suarez
              </span>

              {/* Subtítulo */}
              <span className="block text-accent-custom text-2xl md:text-3xl font-normal mt-1">
                Desarrollador frontend & Técnico universitario en programación
              </span>
            </h1>

            {/* Descripción */}
            <p
              className={`text-lg md:text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/70"
              } text-left`}
            >
              Diseño y construyo páginas web funcionales, modernas y pensadas para destacar.
              Combino código limpio, diseño intuitivo y una mentalidad estratégica para que cada
              proyecto tenga impacto real.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3 justify-start mt-2">
              <a
                href="#projects"
                className={`inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-accent-custom focus:ring-offset-2 hover:scale-[1.02] hover:shadow-lg ${
                  theme === "dark"
                    ? "bg-white/10 border border-white/20 text-white hover:bg-white/15"
                    : "bg-black/10 border border-black/20 text-black hover:bg-black/15"
                }`}
              >
                Ver Proyectos
              </a>
              <a
                href="/CV Joaquin Suarez.pdf"
                download
                className={`inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-accent-custom focus:ring-offset-2 hover:scale-[1.02] hover:shadow-lg ${
                  theme === "dark"
                    ? "bg-white/10 border border-white/20 text-white hover:bg-white/15"
                    : "bg-black/10 border border-black/20 text-black hover:bg-black/15"
                }`}
              >
                Descargar CV
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="animate-fade-in">
            <div className="glass rounded-2xl p-4 glow-hover">
              <img
                src="/FotoCarnetJoaquinSuarez.jpeg"
                alt="Joaquín Suárez - Frontend Developer"
                className="w-52 h-52 md:w-60 md:h-60 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/FotoCarnetJoaquinSuarez.jpeg"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Flecha centrada */}
      <a
        href="#projects"
        aria-label="Desliza hacia abajo para ver los proyectos"
        className="absolute left-1/2 -translate-x-1/2 bottom-20 md:bottom-28 group"
      >
        <span
          className={`inline-flex items-center justify-center w-12 h-12 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
            theme === "dark"
              ? "text-white border-white/20 bg-white/10 hover:bg-white/20"
              : "text-black border-black/20 bg-black/10 hover:bg-black/20"
          } animate-bounce-y`}
        >
          <ChevronDown className="w-6 h-6" />
        </span>
      </a>

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
