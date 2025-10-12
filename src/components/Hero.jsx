"use client"

import { useTheme } from "../contexts/ThemeContext"

const Hero = () => {
  const { theme } = useTheme()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
          {/* Texto (alineado a la izquierda) */}
          <div className="space-y-4 animate-slide-up max-w-xl w-full">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-left">
              <span className={`${theme === "dark" ? "text-white" : "text-black"} inline-flex items-center`}>
                Joaquin Suarez
                {/* Emoji mano saludando */}
                <img
                  src="/waving-hand.png"
                  alt="Saludo"
                  className="wave ml-2 w-8 md:w-10 h-auto inline-block align-middle"
                />
              </span>
              <span className="block text-accent-custom text-2xl md:text-3xl font-normal mt-1">
                Tecnico Universitario en Programación
              </span>
            </h1>

            <p className={`text-lg md:text-xl ${theme === "dark" ? "text-white/80" : "text-black/70"} text-left`}>
              Transformando ideas en soluciones digitales claras y accesibles.
              Apasionado por el código limpio y el diseño intuitivo.
            </p>

            {/* Botones (alineados a la izquierda) */}
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

          {/* Imagen (más cerca del texto) */}
          <div className="animate-fade-in">
            <div className="glass rounded-2xl p-4 glow-hover">
              <img
                src="/FotoCarnetJoaquinSuarez.jpeg"
                alt="Joaquin Suárez - Frontend Developer"
                className="w-52 h-52 md:w-60 md:h-60 rounded-full object-cover"
                onError={(e) => {
                  e.target.src = "/FotoCarnetJoaquinSuarez.jpeg"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animación del emoji de saludo */}
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
      `}</style>
    </section>
  )
}

export default Hero
