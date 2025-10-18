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
              className={`text-3xl md:text-4xl font-bold mb-6 flex items-center ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <span className="text-2xl mr-3 float-icon">👤</span>
              Sobre mí
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Texto */}
              <div className="space-y-6">
                <p
                  className={`text-lg leading-relaxed ${
                    theme === "dark" ? "text-white/90" : "text-black/80"
                  }`}
                >
                  Mi nombre es <strong>Joaquín Suárez</strong>, tengo 23 años y soy{" "}
                  <strong>Técnico Universitario en Programación</strong> por la UTN. Desde chico me apasiona la
                  tecnología y la idea de transformar ideas en experiencias digitales que ayuden a las
                  personas.
                </p>

                <p
                  className={`text-lg leading-relaxed ${
                    theme === "dark" ? "text-white/90" : "text-black/80"
                  }`}
                >
                  Me dedico al <strong>desarrollo frontend</strong>, creando{" "}
                  <strong>páginas web modernas y adaptadas a cada cliente</strong>, combinando diseño y
                  código para lograr resultados visualmente atractivos y con propósito.
                </p>

                <p
                  className={`text-lg leading-relaxed ${
                    theme === "dark" ? "text-white/90" : "text-black/80"
                  }`}
                >
                  Además de mi formación técnica, trabajé en áreas de{" "}
                  <strong>atención al cliente y gestión administrativa</strong>, donde aprendí a organizarme, comunicarme
                  con claridad y mantener siempre una <strong>orientación a resultados</strong>.
                </p>

                <p
                  className={`text-lg leading-relaxed ${
                    theme === "dark" ? "text-white/90" : "text-black/80"
                  }`}
                >
                  Actualmente sigo perfeccionándome en <strong>React</strong> y <strong>Tailwind</strong>, con el
                  objetivo de seguir creciendo en el mundo IT y consolidar mi carrera tanto como{" "}
                  <strong>desarrollador profesional</strong> como <strong>freelancer independiente</strong>.
                </p>
              </div>

              {/* Imagen */}
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

      {/* Animación del ícono flotante */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .float-icon {
          display: inline-block;
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default About
