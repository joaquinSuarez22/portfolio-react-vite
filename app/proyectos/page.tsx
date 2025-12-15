"use client"

import { useTheme } from "../../src/contexts/ThemeContext"
import SharedLayout from "../../src/components/SharedLayout"
import BeamsBackground from "../../src/components/BeamsBackground"
import Footer from "../../src/components/Footer"
import { ExternalLink, Code, ArrowRight } from "lucide-react"

const ProjectsContent = () => {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      HTML: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      CSS: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      JavaScript: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      Bootstrap: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Next.js": "bg-black/80 text-white border-gray-600",
      React: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Tailwind CSS": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      TypeScript: "bg-blue-600/20 text-blue-300 border-blue-600/30",
      ManyChat: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      "Google Sheets": "bg-green-600/20 text-green-300 border-green-600/30",
      "Apps Script": "bg-yellow-600/20 text-yellow-300 border-yellow-600/30",
      Branding: "bg-pink-500/20 text-pink-400 border-pink-500/30",
      "Redes Sociales": "bg-purple-600/20 text-purple-300 border-purple-600/30",
      "Diseño Gráfico": "bg-rose-500/20 text-rose-400 border-rose-500/30",
    }
    return colors[tech] || "bg-accent-custom/20 text-accent-custom border-accent-custom/30"
  }

  const projects = [
    {
      id: 1,
      slug: "chatbot-consorcios",
      title: "Chatbot WhatsApp para Gestión de Consorcios",
      type: "Automatización",
      description:
        "Chatbot automatizado para contadora pública que gestiona consorcios. Consultas de expensas y atención 24/7.",
      image: "/placeholder.svg",
      technologies: ["ManyChat", "Google Sheets", "Apps Script"],
    },
    {
      id: 2,
      slug: "servilimp",
      title: "Servilimp Integral Coop.",
      type: "Web institucional",
      description:
        "Página institucional para cooperativa de limpieza y mantenimiento, con foco en claridad y profesionalismo.",
      image: "/proyectos-imagenes/servilimp-inicio-desktop.png",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Next.js"],
      siteUrl: "https://servilimp.com.ar/",
    },
    {
      id: 3,
      slug: "bar-berlin",
      title: "Bar Berlín",
      type: "Branding & redes",
      description:
        "Branding de marca y diseño de contenido para redes sociales y Google Maps.",
      image: "/placeholder.svg",
      technologies: ["Branding", "Redes Sociales", "Diseño Gráfico"],
    },
    {
      id: 4,
      slug: "cabral-asociados",
      title: "Cabral & Asociados — Estudio Contable",
      type: "Web institucional",
      description:
        "Sitio institucional con foco en servicios, confianza profesional y captación de consultas.",
      image: "/proyectos-imagenes/cabral-asociados-inicio-desktop.png",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Next.js"],
      siteUrl: "https://cabralasociadosestudiocontable.com.ar/",
    },
    {
      id: 5,
      slug: "instituto-juan-pablo-ii",
      title: "Instituto Juan Pablo II",
      type: "Web educativa",
      description:
        "Web institucional para centro educativo con información clara y navegación sencilla.",
      image: "/proyectos-imagenes/instituto-juan-pablo-ii.png",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      id: 6,
      slug: "icasescobar",
      title: "iCasescobar",
      type: "Landing comercial",
      description:
        "Landing page para tienda de iPhones con catálogo y contacto directo por WhatsApp.",
      image: "/proyectos-imagenes/icasescobar.png",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
  ]

  return (
    <section className="py-40 px-4">
      <div className="container mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="float-icon">
              <Code className="w-8 h-8 text-accent-custom" />
            </span>
            <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-black"}`}>
              Proyectos
            </h1>
          </div>
          <p className={`text-base md:text-lg max-w-3xl mx-auto ${isDark ? "text-white/70" : "text-black/70"}`}>
            Proyectos reales donde combiné <strong>desarrollo web, branding y diseño</strong>,
            resolviendo necesidades concretas de cada negocio.
          </p>
        </div>

        {/* CARDS */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-3xl p-6 shadow-xl transition hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 items-center">

                {/* INFO */}
                <div className="flex flex-col gap-4 text-center lg:text-left">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-accent-custom mb-1">
                      {project.type}
                    </p>
                    <h2 className={`text-2xl lg:text-3xl font-bold ${isDark ? "text-white" : "text-black"}`}>
                      {project.title}
                    </h2>
                  </div>

                  <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    {project.description}
                  </p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full border ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <a
                      href={`/proyectos/${project.slug}`}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium bg-accent-custom text-white hover:bg-accent-custom/90 transition"
                    >
                      Ver proyecto
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>

                    {project.siteUrl && (
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium border transition ${isDark
                            ? "bg-white/5 border-white/20 text-white hover:bg-white/10"
                            : "bg-black/5 border-black/20 text-black hover:bg-black/10"
                          }`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver sitio
                      </a>
                    )}
                  </div>
                </div>

                {/* IMAGE */}
                <div className="w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-xl"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FLOAT ICON */}
      <style jsx global>{`
        @keyframes floatY {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .float-icon {
          animation: floatY 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default function ProyectosPage() {
  return (
    <SharedLayout>
      <BeamsBackground intensity="medium">
        <div className="relative z-10 min-h-screen">
          <ProjectsContent />
          <Footer />
        </div>
      </BeamsBackground>
    </SharedLayout>
  )
}
