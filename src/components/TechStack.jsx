"use client"

import { useTheme } from "../contexts/ThemeContext"
import {
  Code,
  Palette,
  Zap,
  Atom,
  Layers,
  Wind,
  Boxes,
  FileText,
  Cog,
  Database,
  Coffee,
  GitBranch,
  Github,
} from "lucide-react"

export default function TechStack() {
  const { theme } = useTheme()

  // Íconos
  const iconMap = {
    HTML: <Code className="w-6 h-6" color="#E34F26" />,
    CSS: <Palette className="w-6 h-6" color="#1572B6" />,
    JavaScript: <Zap className="w-6 h-6" color="#F7DF1E" />,
    React: <Atom className="w-6 h-6" color="#61DAFB" />,
    "Next.js": <Layers className="w-6 h-6" color={theme === "dark" ? "#ffffff" : "#000000"} />,
    "Tailwind CSS": <Wind className="w-6 h-6" color="#38BDF8" />,
    Bootstrap: <Boxes className="w-6 h-6" color="#7952B3" />,
    WordPress: <FileText className="w-6 h-6" color="#21759B" />,
    Elementor: <FileText className="w-6 h-6" color="#A427B1" />,
    "C++": <Cog className="w-6 h-6" color="#00599C" />,
    SQL: <Database className="w-6 h-6" color="#F29111" />,
    Supabase: <Database className="w-6 h-6" color="#3ECF8E" />,
    Java: <Coffee className="w-6 h-6" color="#E76F00" />,
    Git: <GitBranch className="w-6 h-6" color="#F05032" />,
    GitHub: <Github className="w-6 h-6" color={theme === "dark" ? "#ffffff" : "#181717"} />,
  }

  const categories = [
    {
      title: "FrontEnd",
      description: "Interfaces modernas, rápidas y responsivas.",
      technologies: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "React", "Next.js"],
      fullWidth: true,
    },
    {
      title: "BackEnd",
      description: "Bases sólidas en algoritmos, lógica y programación.",
      technologies: ["Java", "C++"],
    },
    {
      title: "Bases de Datos",
      description: "Almacenamiento, consulta y manipulación de datos.",
      technologies: ["SQL", "Supabase"],
    },
    {
      title: "CMS",
      description: "Sitios administrables para clientes.",
      technologies: ["WordPress", "Elementor"],
    },
    {
      title: "Herramientas",
      description: "Control de versiones y trabajo en equipo.",
      technologies: ["Git", "GitHub"],
    },
  ]

  const introText = (
    <>
      Tecnologías modernas para crear sitios completos:
      <br />
      desde la interfaz visual hasta la lógica y la entrega final.
    </>
  )

  const cardBaseClasses = `
    flex flex-col items-center justify-center
    p-4 h-24 w-24
    rounded-2xl border glass
    transition-all duration-300 cursor-pointer
  `

  const cardThemeClasses =
    theme === "dark"
      ? "border-gray-600 text-gray-400 hover:text-white hover:border-accent-custom hover:bg-white/10"
      : "border-gray-300 text-gray-500 hover:text-black hover:border-accent-custom hover:bg-black/10"

  return (
    <section id="tech-stack" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent-custom text-lg mb-4 font-medium">Tecnologías</p>

          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"
              }`}
          >
            Tech Stack
          </h2>

          <p
            className={`text-lg max-w-3xl mx-auto leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
          >
            {introText}
          </p>
        </div>

        <div className="space-y-12">
          {/* FRONTEND (full width) */}
          {categories
            .filter((cat) => cat.fullWidth)
            .map((category, i) => (
              <div key={i} className="space-y-6">
                <div className="text-center">
                  <h3
                    className={`text-2xl md:text-3xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-black"
                      }`}
                  >
                    {category.title}
                  </h3>
                  <p
                    className={`text-base md:text-lg max-w-2xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                  >
                    {category.description}
                  </p>
                </div>

                {/* Íconos Frontend: flex, centrados, poco espacio */}
                <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
                  {category.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className={`${cardBaseClasses} ${cardThemeClasses}`}
                    >
                      <div className="mb-2 flex items-center justify-center">
                        {iconMap[tech]}
                      </div>
                      <span className="text-xs font-medium text-center leading-tight">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          {/* RESTO DE CATEGORÍAS (Backend, DB, CMS, Herramientas) */}
          <div className="grid md:grid-cols-2 gap-12">
            {categories
              .filter((cat) => !cat.fullWidth)
              .map((category, i) => (
                <div key={i} className="space-y-6">
                  <div className="text-center">
                    <h3
                      className={`text-2xl md:text-3xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-black"
                        }`}
                    >
                      {category.title}
                    </h3>
                    <p
                      className={`text-base md:text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                      {category.description}
                    </p>
                  </div>

                  {/* Íconos compactos, centrados, sin columnas fantasmas */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className={`${cardBaseClasses} ${cardThemeClasses}`}
                      >
                        <div className="mb-2 flex items-center justify-center">
                          {iconMap[tech]}
                        </div>
                        <span className="text-xs font-medium text-center leading-tight">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
