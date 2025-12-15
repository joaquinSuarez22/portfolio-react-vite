"use client"

import { Briefcase, Code2, Users } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

const WorkExperience = () => {
  const { theme } = useTheme()

  /**
   * type:
   * - "tech" => experiencia en programación (prioridad visual y textual)
   * - "other" => experiencia complementaria (soft skills)
   */
  const experiences = [
    {
      title: "Desarrollo Web – Freelance",
      company: "Independiente",
      period: "2023 – Actualidad",
      type: "tech",
      description:
        "Diseño y desarrollo de páginas web para clientes y pequeñas empresas. Trabajo con tecnologías como React, Tailwind CSS y Next.js, enfocándome en crear interfaces modernas, responsivas y optimizadas para conversión. Gestión integral del proyecto: relevamiento, desarrollo, publicación y soporte.",
      current: true,
    },
    {
      title: "WebStudio — Co-Founder",
      company: "WebStudio",
      period: "2023 – 2025",
      type: "tech",
      description:
        "Co-fundador de un estudio digital orientado al desarrollo de sitios web para pequeños negocios. Participé en el diseño, maquetado y desarrollo de proyectos web, además de la coordinación con clientes, definición de requerimientos y seguimiento de entregas.",
      current: false,
    },
    {
      title: "Ventas de Tarjeta de Crédito",
      company: "Cenco Pay",
      period: "2025 – 2025",
      type: "other",
      description:
        "Experiencia en ventas y atención al cliente, con foco en comunicación efectiva, cumplimiento de objetivos y seguimiento de métricas. Desarrollo de habilidades de negociación, organización y trabajo orientado a resultados.",
      current: false,
    },
    {
      title: "Asesor Comercial",
      company: "Renault Galante D'Antonio",
      period: "2025 - 2025",
      type: "other",
      description:
        "Asesoramiento comercial y acompañamiento al cliente durante el proceso de compra. Gestión administrativa y trabajo bajo objetivos, fortaleciendo habilidades de trato con clientes y responsabilidad profesional.",
      current: false,
    },
    {
      title: "Atención al Cliente & Repositor",
      company: "Arcolim SRL",
      period: "2022 – 2023",
      type: "other",
      description:
        "Atención personalizada al cliente, organización del área de trabajo y control de stock. Trabajo en equipo y responsabilidad operativa en entornos dinámicos.",
      current: false,
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
            <h2
              className={`text-3xl md:text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"
                }`}
            >
              Experiencia laboral
            </h2>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isTech = exp.type === "tech"

              return (
                <div key={index} className="relative flex gap-6">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-3 h-3 rounded-full mt-2 ${isTech ? "bg-accent-custom" : "bg-gray-500"
                        }`}
                    ></div>
                    {index < experiences.length - 1 && (
                      <div className="w-px h-full bg-gray-600 mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="mb-2">
                      <div className="flex items-center gap-2 mb-1">
                        {isTech ? (
                          <Code2 className="w-4 h-4 text-accent-custom" />
                        ) : (
                          <Users className="w-4 h-4 text-gray-400" />
                        )}

                        <h3
                          className={`text-xl font-bold ${isTech ? "text-accent-custom" : "text-white"
                            }`}
                        >
                          {exp.title}
                        </h3>

                        {isTech && (
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-accent-custom/15 text-accent-custom font-medium">
                            Programación
                          </span>
                        )}
                      </div>

                      <p
                        className={`text-lg font-medium ${theme === "dark" ? "text-white" : "text-black"
                          }`}
                      >
                        {exp.company}
                      </p>

                      <p
                        className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                      >
                        {exp.period}
                      </p>
                    </div>

                    <p
                      className={`leading-relaxed ${theme === "dark"
                        ? isTech
                          ? "text-gray-300"
                          : "text-gray-400"
                        : "text-gray-700"
                        }`}
                    >
                      {exp.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Animación ícono */}
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
