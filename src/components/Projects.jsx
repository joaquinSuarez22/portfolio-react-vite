"use client"

import { ExternalLink, Code } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

const Projects = () => {
  const { theme } = useTheme()

  const getTechColor = (tech) => {
    const colors = {
      HTML: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      CSS: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      JavaScript: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      Bootstrap: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Tienda Nube": "bg-green-500/20 text-green-400 border-green-500/30",
      "Next.js": "bg-black/80 text-white border-gray-600",
      React: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Tailwind CSS": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      TypeScript: "bg-blue-600/20 text-blue-300 border-blue-600/30",
      "Node.js": "bg-green-500/20 text-green-400 border-green-500/30",
      Branding: "bg-pink-500/20 text-pink-400 border-pink-500/30",
      "Redes Sociales": "bg-purple-600/20 text-purple-300 border-purple-600/30",
      "Diseño Gráfico": "bg-rose-500/20 text-rose-400 border-rose-500/30",
    }
    return colors[tech] || "bg-accent-custom/20 text-accent-custom border-accent-custom/30"
  }

  // Proyectos destacados
  const projects = [
    {
      id: 4,
      slug: "servilimp",
      title: "Servilimp Integral Coop.",
      description:
        "Página institucional para cooperativa de limpieza y mantenimiento, destacando servicios integrales y enfoque cooperativo.",
      image: "/proyectos-imagenes/servilimp/servilimp.png",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Next.js"],
      buttons: [
        {
          label: "Ver proyecto",
          icon: ExternalLink,
          href: "/proyectos/servilimp",
        },
      ],
    },
    {
      id: 5,
      slug: "bar-berlin",
      title: "Bar Berlín",
      description:
        "Branding de marca y diseño de contenido para redes sociales y Google Maps para un bar temático.",
      image: "/proyectos-imagenes/berlin/logo-completo-berlin.png",
      technologies: ["Branding", "Redes Sociales", "Diseño Gráfico"],
      buttons: [
        {
          label: "Ver proyecto",
          icon: ExternalLink,
          href: "/proyectos/bar-berlin",
        },
      ],
    },
    {
      id: 1,
      slug: "cabral-asociados",
      title: "Cabral & Asociados — Estudio Contable",
      description:
        "Sitio institucional para un estudio contable, con foco en servicios, confianza profesional y captación de consultas.",
      image: "/proyectos-imagenes/cabral-asociados/cabral-asociados.png",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Next.js"],
      buttons: [
        {
          label: "Ver proyecto",
          icon: ExternalLink,
          href: "/proyectos/cabral-asociados",
        },
      ],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header con ícono flotante */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="float-icon">
              <Code className="w-8 h-8 text-accent-custom" />
            </span>
            <h2
              className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"
                }`}
            >
              Proyectos destacados
            </h2>
          </div>
          <p
            className={`text-base md:text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"
              }`}
          >
            Una selección de proyectos reales en los que combiné desarrollo frontend,
            diseño y foco en resultados.
          </p>
        </div>

        {/* Lista de proyectos */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-3xl p-6 hover:scale-[1.02] hover:bg-white/15 dark:hover:bg-black/30 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 items-center">
                {/* Detalles */}
                <div className="w-full text-center lg:text-left order-1 flex flex-col gap-4">
                  <h3
                    className={`text-2xl lg:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"
                      }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-base leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                  >
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2 justify-center lg:justify-start">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm rounded-full backdrop-blur-sm border text-center ${getTechColor(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botones Desktop (solo si existen botones definidos) */}
                  {project.buttons && project.buttons.length > 0 && (
                    <div className="hidden lg:flex flex-wrap gap-4 mt-2">
                      {project.buttons.map((button) => (
                        <a
                          key={button.label}
                          href={button.href}
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${theme === "dark"
                            ? "bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30"
                            : "bg-black/10 hover:bg-black/20 text-black border-black/20 hover:border-black/30"
                            }`}
                        >
                          <button.icon className="w-4 h-4" />
                          {button.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Imagen */}
                <div className="order-2 w-full">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-xl overflow-hidden"
                  />
                </div>

                {/* Botón en mobile (si hay botones) */}
                {project.buttons && project.buttons.length > 0 && (
                  <div className="lg:hidden w-full flex justify-center mt-2 order-3">
                    {project.buttons.map((button) => (
                      <a
                        key={button.label}
                        href={button.href}
                        className={`w-full max-w-xs inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${theme === "dark"
                          ? "bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30"
                          : "bg-black/10 hover:bg-black/20 text-black border-black/20 hover:border-black/30"
                          }`}
                      >
                        <button.icon className="w-4 h-4" />
                        {button.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver más proyectos */}
        <div className="mt-12 flex justify-center">
          <a
            href="/proyectos"
            className={`inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border ${theme === "dark"
              ? "bg-white/5 text-white border-white/20 hover:bg-white/15"
              : "bg-black/5 text-black border-black/20 hover:bg-black/10"
              }`}
          >
            Ver más proyectos
          </a>
        </div>
      </div>

      {/* Animación flotante del ícono del header */}
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

export default Projects
