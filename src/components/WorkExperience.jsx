"use client"

import { Briefcase } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

const WorkExperience = () => {
  const { theme } = useTheme()

  const experiences = [
    {
      title: "Ventas de Tarjeta de Crédito",
      company: "Cenco Pay",
      period: "2025 – Actualidad",
      description:
        "Gestión integral de ventas de tarjetas de crédito para nuevos clientes. Prospección y calificación de leads, asesoramiento personalizado y cierre comercial por canales presenciales. Seguimiento postventa, reporte de métricas y cumplimiento de objetivos semanales.",
      current: true,
      hasLink: false,
    },
    {
      title: "Desarrollo Web - Freelance",
      company: "Independiente",
      period: "2023 – Actualidad",
      description:
        "Diseño y desarrollo de páginas web personalizadas para clientes y pequeñas empresas. Creación de interfaces modernas con React y Tailwind, optimización de la experiencia de usuario y adaptación responsive. Gestión integral de proyectos: contacto inicial, desarrollo, soporte y mantenimiento.",
      current: true,
      hasLink: false,
    },
    {
      title: "Asesor Comercial",
      company: "Renault Galante D'Antonio",
      period: "2025",
      description:
        "Asesoramiento en la venta de vehículos 0km por Plan Rombo. Gestión de cartera de clientes, tareas administrativas y acompañamiento en el proceso de suscripción hasta la entrega final.",
      current: false,
      hasLink: false,
    },
    {
      title: "WebStudio — Co-Founder",
      company: "WebStudio",
      period: "2023 – 2025",
      description:
        "Diseño y desarrollo de sitios web para pequeños negocios. Coordinación de tareas administrativas y seguimiento de proyectos. Atención al cliente y colaboración en campañas digitales y redes sociales.",
      current: false,
      hasLink: false,
    },
    {
      title: "Atención al Cliente & Repositor",
      company: "Arcolim SRL",
      period: "2022 – 2023",
      description:
        "Atención personalizada al cliente, resolución de consultas y reposición de mercadería. Control de stock, organización del área de trabajo y colaboración en equipo.",
      current: false,
      hasLink: false,
    },
  ]

  return (
    <section id="experiencia" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass rounded-3xl p-8 md:p-12">
          {/* Header */}
          <div className="flex items-center gap-3 mb-12">
            <span className="float-icon">
              <Briefcase className="w-8 h-8 text-accent-custom" />
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
              Experiencia laboral
            </h2>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-accent-custom rounded-full mt-2"></div>
                  {index < experiences.length - 1 && <div className="w-px h-full bg-gray-600 mt-2"></div>}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-accent-custom mb-1">{exp.title}</h3>
                    <p className={`text-lg font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>
                      {exp.company}
                    </p>
                    <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{exp.period}</p>
                  </div>

                  <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
                    {exp.description}
                  </p>

                  {exp.hasLink && (
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-accent-custom hover:text-accent-custom/80 transition-colors font-medium"
                    >
                      Saber más
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animación del ícono flotante */}
      <style jsx global>{`
        @keyframes floatY {
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
          will-change: transform;
          animation: floatY 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default WorkExperience
