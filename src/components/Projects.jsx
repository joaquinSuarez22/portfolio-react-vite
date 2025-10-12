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
      title: "Cabral & Asociados — Estudio Contable",
      description:
        "Página institucional para estudio contable: servicios, presentación del equipo, información de contacto y formulario de consulta. Diseño claro, profesional y adaptable a dispositivos móviles.",
      image: "/placeholder.svg",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Next.js"],
      buttons: [{ label: "Ver Sitio", icon: ExternalLink, href: "https://cabralasociadosestudiocontable.com.ar/" }],
    },
    {
      id: 2,
      title: "Instituto Juan Pablo II",
      description:
        "Sitio web institucional completo para centro educativo. Incluye secciones de inscripción online, información académica detallada, contacto y noticias. Diseño responsivo y navegación intuitiva para estudiantes y padres.",
      image: "/instituto-juan-pablo-ii.png",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      buttons: [{ label: "Ver Sitio", icon: ExternalLink, href: "#" }],
    },
    {
      id: 3,
      title: "iCasescobar",
      description:
        "Landing page moderna para tienda especializada en iPhones. Catálogo de dispositivos nuevos y usados, servicio técnico especializado, integración directa con WhatsApp para consultas y sistema de cotización online.",
      image: "/icasescobar.png",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      buttons: [{ label: "Ver Sitio", icon: ExternalLink, href: "#" }],
    },
    {
      id: 4,
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
        {/* Header con ícono flotante */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="float-icon">
              <Code className="w-8 h-8 text-accent-custom" />
            </span>
            <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
              Proyectos
            </h2>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-3xl p-6 hover:scale-[1.02] hover:bg-white/15 dark:hover:bg-black/30 transition-all duration-300 shadow-xl"
            >
              {/* Mobile: reordenado; Desktop: igual que antes */}
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 items-center">
                {/* ===== Detalles ===== */}
                <div className="w-full text-center lg:text-left order-1 flex flex-col gap-4">
                  {/* 1) Título (mobile y desktop primero) */}
                  <h3
                    className={`order-1 lg:order-1 text-2xl lg:text-3xl font-bold ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* 2) Texto (mobile 2°, desktop 3°) */}
                  <p
                    className={`order-2 lg:order-3 text-base leading-relaxed ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* 3) Tecnologías (mobile 3°, desktop 2°) */}
                  <div className="order-3 lg:order-2 grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2 justify-center lg:justify-start">
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

                  {/* Botones desktop (se mantienen en la columna de detalles) */}
                  <div className="hidden lg:flex order-4 flex-wrap gap-4 mt-2">
                    {project.buttons.map((button) => (
                      <a
                        key={button.label}
                        href={button.href}
                        target="_blank"
                        rel="noopener noreferrer"
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

                {/* ===== Imagen ===== */}
                {/* Mobile: queda 4° por flujo (después de detalles); Desktop: igual que antes (columna derecha) */}
                <div className="order-2 w-full">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-3xl overflow-hidden"
                  />
                </div>

                {/* 5) Botón en mobile (debajo de la foto) */}
                <div className="lg:hidden w-full flex justify-center mt-2 order-3">
                  {project.buttons.map((button) => (
                    <a
                      key={button.label}
                      href={button.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full max-w-xs inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
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
          ))}
        </div>
      </div>

      {/* Animación flotante del ícono del header */}
      <style jsx global>{`
        @keyframes floatY {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
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
