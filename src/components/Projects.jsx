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
    }
    return colors[tech] || "bg-accent-custom/20 text-accent-custom border-accent-custom/30"
  }

  const projects = [
    {
      id: 1,
      title: "Instituto Juan Pablo II",
      description:
        "Sitio web institucional completo para centro educativo. Incluye secciones de inscripción online, información académica detallada, contacto y noticias. Diseño responsivo y navegación intuitiva para estudiantes y padres.",
      image: "/instituto-juan-pablo-ii.png",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      buttons: [{ label: "Ver Sitio", icon: ExternalLink, href: "#" }],
    },
    {
      id: 2,
      title: "iCasescobar",
      description:
        "Landing page moderna para tienda especializada en iPhones. Catálogo de dispositivos nuevos y usados, servicio técnico especializado, integración directa con WhatsApp para consultas y sistema de cotización online.",
      image: "/icasescobar.png",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      buttons: [{ label: "Ver Sitio", icon: ExternalLink, href: "#" }],
    },
    {
      id: 3,
      title: "Alto Estilo Indumentaria",
      description:
        "Tienda online completa de indumentaria con catálogo organizado por categorías: remeras, pantalones y accesorios. Incluye carrito de compras funcional, sistema de promociones, filtros de búsqueda y checkout integrado.",
      image: "/alto-estilo-indumentaria.png",
      technologies: ["Tienda Nube", "CSS"],
      buttons: [{ label: "Ver Tienda", icon: ExternalLink, href: "#" }],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="w-8 h-8 text-accent-custom" />
            <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>Proyectos</h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:bg-white/15 dark:hover:bg-black/30 transition-all duration-300 shadow-xl"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-3xl order-2 lg:order-1 overflow-hidden"
                />

                {/* Project Details */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div>
                    <h3
                      className={`text-2xl lg:text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}
                    >
                      {project.title}
                    </h3>

                    {/* Technologies */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-sm rounded-full backdrop-blur-sm border text-center ${getTechColor(tech)}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.buttons.map((button) => (
                      <a
                        key={button.label}
                        href={button.href}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                          theme === "dark"
                            ? "bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30"
                            : "bg-black/10 hover:bg-black/20 text-black border-black/20 hover:border-black/30"
                        }`}
                      >
                        <button.icon className="w-4 h-4" />
                        {button.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
