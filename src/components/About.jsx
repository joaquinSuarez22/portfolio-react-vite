"use client"

import { useTheme } from "../contexts/ThemeContext"

const About = () => {
  const { theme } = useTheme()

  const skills = [
    "React & React Hooks",
    "Tailwind CSS & Responsive Design",
    "JavaScript ES6+",
    "Git & GitHub",
    "Vite & Build Tools",
    "Accesibilidad Web (a11y)",
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 flex items-center ${theme === "dark" ? "text-white" : "text-black"}`}
            >
              <span className="text-2xl mr-3">👤</span>
              Sobre mí
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-white/90" : "text-black/80"}`}>
                  Soy Joaquín Suárez, Técnico Universitario en Programación en la UTN. Me apasiona la tecnología y
                  disfruto creando soluciones digitales claras, útiles y fáciles de usar.
                </p>

                <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-white/90" : "text-black/80"}`}>
                  Cuento con experiencia en el desarrollo de páginas web personalizadas para clientes y pequeñas
                  empresas, además de haber trabajado en atención al cliente y gestión administrativa, lo que fortaleció
                  mis habilidades de organización, comunicación y orientación a resultados.
                </p>

                <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-white/90" : "text-black/80"}`}>
                  Actualmente sigo ampliando mis conocimientos en desarrollo frontend con React y Tailwind, con el
                  objetivo de crecer como profesional IT, aportar valor a los proyectos en los que participe y mantener
                  siempre una actitud de aprendizaje continuo.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <img
                    src="/joaquin-suarez-avatar.png"
                    alt="Joaquín Suárez - Desarrollador Frontend"
                    className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
