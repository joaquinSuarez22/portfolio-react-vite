"use client"

import { useTheme } from "../contexts/ThemeContext"
import { CheckCircle2 } from "lucide-react"

const About = () => {
  const { theme } = useTheme()

  // ✅ Skills alineadas con tu Tech Stack real
  const skills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Supabase",
  ]

  const isDark = theme === "dark"
  const textMain = isDark ? "text-white/90" : "text-black/80"
  const textTitle = isDark ? "text-white" : "text-black"

  // Chips adaptados al tema (para que en light mode se vean bien)
  const chipBase =
    "px-3 py-1 text-sm rounded-full border backdrop-blur-sm transition-colors"
  const chipTheme = isDark
    ? "border-white/10 bg-white/5 text-white/90 hover:bg-white/10"
    : "border-black/10 bg-black/5 text-black/80 hover:bg-black/10"

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-10 flex items-center ${textTitle}`}>
              <span className="text-2xl mr-3 float-icon">👤</span>
              Sobre mí
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* IZQUIERDA: Quién soy + Cómo trabajo */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className={`text-xl font-semibold ${textTitle}`}>Quién soy</h3>
                  <p className={`text-lg leading-relaxed ${textMain}`}>
                    Soy <strong>Joaquín Suárez</strong>, <strong>Técnico Universitario en Programación</strong> por la UTN
                    y <strong>Desarrollador Frontend</strong>. Me gusta transformar ideas en sitios web claros,
                    modernos y fáciles de usar para empresas y emprendedores.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className={`text-xl font-semibold ${textTitle}`}>Cómo trabajo</h3>
                  <p className={`text-lg leading-relaxed ${textMain}`}>
                    Combino <strong>desarrollo</strong> y <strong>diseño</strong>. Pienso desde la experiencia del usuario,
                    cuidando la comunicación, los detalles y el resultado final. Busco entregar siempre algo que
                    genere impacto real.
                  </p>
                </div>
              </div>

              {/* DERECHA: Foto (centrada) */}
              <div className="flex justify-center md:justify-center">
                <div className="relative mb-4 md:mb-0">
                  <img
                    src="/joaquin-suarez-avatar.png"
                    alt="Joaquín Suárez - Desarrollador Frontend"
                    className="w-72 h-72 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/25 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* GRID PARA ALINEAR TÍTULOS A LA MISMA ALTURA */}
            <div className="grid md:grid-cols-2 gap-12 items-start mt-10">
              {/* IZQUIERDA: Lo que buscan de mí las empresas */}
              <div className="space-y-3">
                <h3 className={`text-xl font-semibold ${textTitle}`}>
                  Lo que buscan de mí las empresas
                </h3>

                <ul className={`space-y-3 text-base md:text-lg ${textMain}`}>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 min-w-[18px] text-accent-custom" />
                    <span>
                      <strong>Responsabilidad y compromiso</strong> con los plazos y la calidad del trabajo.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 min-w-[18px] text-accent-custom" />
                    <span>
                      Trabajo en equipo y adaptación a <strong>procesos ya establecidos</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 min-w-[18px] text-accent-custom" />
                    <span>
                      <strong>Enfoque en resultados</strong>: cada decisión de diseño o código tiene un porqué.
                    </span>
                  </li>
                </ul>
              </div>

              {/* DERECHA: Tecnologías */}
              <div className="space-y-4">
                <h3 className={`text-xl font-semibold ${textTitle}`}>
                  Tecnologías con las que trabajo
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className={`${chipBase} ${chipTheme}`}>
                      {skill}
                    </span>
                  ))}
                </div>

                <p className={`text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                  *Estas son las tecnologías que uso en proyectos reales y que se reflejan en mi stack del portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
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
