"use client"

import { useTheme } from "../contexts/ThemeContext"

const Hero = () => {
  const { theme } = useTheme()

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className={`block ${theme === "dark" ? "text-white" : "text-black"}`}>Joaquin Suarez</span>
                <span className="block text-accent-custom text-2xl md:text-3xl font-normal mt-2">
                  Tecnico Universitario en Programación
                </span>
              </h1>

              <p className={`text-lg md:text-xl max-w-2xl ${theme === "dark" ? "text-white/80" : "text-black/70"}`}>
                {
                  "Transformando ideas en soluciones digitales claras y accesibles.\nApasionado por el código limpio y el diseño intuitivo ✨"
                }
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className={`inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-accent-custom focus:ring-offset-2 focus:ring-offset-transparent hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] ${theme === "dark" ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl text-white hover:bg-white/15" : "bg-black/10 backdrop-blur-md border border-black/20 shadow-xl text-black hover:bg-black/15"}`}
              >
                Ver Proyectos
              </a>
              <a
                href="/cv-joaquin-suarez.pdf"
                download
                className={`inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-accent-custom focus:ring-offset-2 focus:ring-offset-transparent hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] ${theme === "dark" ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl text-white hover:bg-white/15" : "bg-black/10 backdrop-blur-md border border-black/20 shadow-xl text-black hover:bg-black/15"}`}
              >
                Descargar CV
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="glass rounded-2xl p-8 glow-hover">
              <img
                src="/joaquin-suarez-avatar.png"
                alt="Joaquín Suárez - Frontend Developer"
                className="w-64 h-64 rounded-full object-cover mx-auto"
                onError={(e) => {
                  e.target.src = "/joaquin-suarez-avatar.png"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
