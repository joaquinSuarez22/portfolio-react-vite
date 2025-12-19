"use client"

import Link from "next/link"
import { useTheme } from "../../../src/contexts/ThemeContext"
import { ExternalLink, ArrowLeft } from "lucide-react"

type ProjectData = {
    title: string
    description: string
    objectives: string[]
    technologies: string[]
    siteUrl: string
    images: {
        desktop: string
        tablet?: string
        mobile?: string
    }
}

const PROJECTS: Record<string, ProjectData> = {
    "chatbot-consorcios": {
        title: "Chatbot WhatsApp para Gestión de Consorcios",
        description:
            "Chatbot automatizado desarrollado para una contadora pública que gestiona múltiples consorcios. La solución permite a los propietarios consultar el estado de sus expensas, obtener información sobre pagos pendientes y recibir atención automatizada las 24 horas del día, los 7 días de la semana. El sistema se integra con Google Sheets para mantener la información actualizada en tiempo real, reduciendo significativamente la carga administrativa y mejorando la experiencia del usuario.",
        objectives: [
            "Automatizar consultas frecuentes sobre expensas",
            "Reducir carga administrativa manual",
            "Brindar atención 24/7 a propietarios",
            "Integrar datos en tiempo real",
        ],
        technologies: ["ManyChat", "Google Sheets", "Apps Script"],
        siteUrl: "",
        images: {
            desktop: "/proyectos-imagenes/chatbot/mockup-mobile.png",
        },
    },

    servilimp: {
        title: "Servilimp Integral Coop.",
        description:
            "Página institucional para una cooperativa de limpieza y mantenimiento, diseñada para comunicar los servicios de forma clara y profesional. El enfoque estuvo en una experiencia simple, rápida y confiable, con llamadas a la acción visibles para facilitar el contacto y convertir visitas en consultas. Además, se cuidó la presentación visual para transmitir seriedad, orden y confianza desde el primer vistazo.",
        objectives: ["Mostrar servicios de forma clara", "Generar confianza", "Captar consultas"],
        technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        siteUrl: "https://servilimp.com.ar/",
        images: {
            desktop: "/proyectos-imagenes/servilimp/servilimp-desktop.png",
            tablet: "/proyectos-imagenes/servilimp/servilimp-tablet.png",
            mobile: "/proyectos-imagenes/servilimp/servilimp-mobile.png",
        },
    },

    "bar-berlin": {
        title: "Bar Berlín",
        description:
            "Proyecto integral de branding y diseño de contenido para redes sociales. Se trabajó en la identidad visual completa de la marca, desde el logotipo hasta la paleta de colores y tipografías. Se creó contenido visual atractivo y coherente para Instagram, Facebook y Google Maps, enfocado en destacar la propuesta gastronómica y el ambiente único del bar. El resultado fue una presencia digital sólida que refleja la personalidad del establecimiento y atrae a su público objetivo.",
        objectives: [
            "Crear identidad visual coherente",
            "Diseñar contenido atractivo para redes",
            "Mejorar presencia en Google Maps",
            "Comunicar la propuesta del bar",
        ],
        technologies: ["Branding", "Redes Sociales", "Diseño Gráfico"],
        siteUrl: "",
        images: {
            desktop: "/proyectos-imagenes/bar-berlin.png",
            tablet: "/proyectos-imagenes/bar-berlin.png",
            mobile: "/proyectos-imagenes/bar-berlin.png",
        },
    },

    "cabral-asociados": {
        title: "Cabral & Asociados — Estudio Contable",
        description:
            "Sitio web institucional desarrollado para un estudio contable con amplia trayectoria. El proyecto se enfocó en transmitir profesionalismo, confianza y experiencia a través de un diseño limpio y moderno. Se priorizó la claridad en la presentación de servicios, facilitando que potenciales clientes comprendan rápidamente la propuesta de valor. Se implementaron formularios de contacto estratégicamente ubicados para maximizar la captación de consultas y nuevos clientes.",
        objectives: [
            "Transmitir confianza y profesionalismo",
            "Presentar servicios de forma clara",
            "Captar consultas de potenciales clientes",
            "Facilitar el contacto directo",
        ],
        technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        siteUrl: "https://cabralasociadosestudiocontable.com.ar/",
        images: {
            desktop: "/proyectos-imagenes/cabral-asociados/cabral-asociados-desktop.png",
            tablet: "/proyectos-imagenes/cabral-asociados/cabralasociadosestudiocontable-tablet.png",
            mobile: "/proyectos-imagenes/cabral-asociados/cabralasociadosestudiocontable-mobile.png",
        },
    },

    "instituto-juan-pablo-ii": {
        title: "Instituto Juan Pablo II",
        description:
            "Sitio web institucional para un centro educativo de nivel inicial, primario y secundario. El proyecto buscó crear una plataforma informativa clara y accesible para padres, alumnos y docentes. Se organizó la información de manera intuitiva, facilitando el acceso a novedades, calendario académico, propuesta educativa y datos de contacto. El diseño responde a las necesidades de una comunidad educativa diversa, priorizando la usabilidad y la navegación sencilla en todos los dispositivos.",
        objectives: [
            "Informar sobre la propuesta educativa",
            "Facilitar comunicación con familias",
            "Organizar información de forma clara",
            "Crear navegación intuitiva y accesible",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        siteUrl: "",
        images: {
            desktop: "/proyectos-imagenes/instituto-juan-pablo-ii/instituto-juan-pablo-ii.png",
        },
    },

    icasescobar: {
        title: "iCasescobar",
        description:
            "Landing page comercial diseñada para una tienda especializada en iPhones y accesorios Apple. El sitio presenta un catálogo visual atractivo de productos disponibles, con información clara de precios y características. Se implementó integración directa con WhatsApp para facilitar consultas y ventas, reduciendo la fricción en el proceso de compra. El diseño moderno y responsive asegura una experiencia óptima tanto en desktop como en dispositivos móviles, donde se concentra la mayor parte del tráfico.",
        objectives: [
            "Mostrar catálogo de productos de forma atractiva",
            "Facilitar contacto directo por WhatsApp",
            "Generar confianza en compradores",
            "Optimizar conversión de visitas a ventas",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        siteUrl: "",
        images: {
            desktop: "/proyectos-imagenes/icasescobar/icasescobar-desktop.png",
            tablet: "/proyectos-imagenes/icasescobar/icasescobar-tablet.png",
            mobile: "/proyectos-imagenes/icasescobar/icasescobar-mobile.png",
        },
    },
}

export default function ProjectClient({ slug }: { slug: string }) {
    const { theme } = useTheme()
    const project = PROJECTS[slug]

    const isDark = theme === "dark"
    const textMain = isDark ? "text-white" : "text-black"
    const textMuted = isDark ? "text-white/70" : "text-black/70"
    const borderSoft = isDark ? "border-white/10" : "border-black/10"
    const card = isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"

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

    if (!project) {
        return (
            <section className="py-40 text-center px-4">
                <h1 className={`text-2xl font-bold ${textMain}`}>Proyecto no encontrado</h1>
                <p className={`mt-2 ${textMuted}`}>Revisá el enlace o volvé a la lista de proyectos.</p>

                <div className="mt-8 flex justify-center">
                    <Link
                        href="/proyectos"
                        className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border ${isDark ? "border-white/15" : "border-black/15"} ${textMain}`}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver a proyectos
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <section className="py-20 md:py-28 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Fondo suave decorativo */}
                <div
                    className={`pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl ${isDark ? "bg-white/5" : "bg-black/5"
                        }`}
                />

                {/* Header */}
                <header className="text-center space-y-5 mb-12">
                    <h1 className={`text-4xl md:text-5xl font-bold tracking-tight ${textMain}`}>
                        {project.title}
                    </h1>

                    <p className={`text-lg md:text-xl leading-relaxed ${textMuted} max-w-3xl mx-auto`}>
                        {project.description}
                    </p>
                </header>

                {/* Layout principal */}
                <div className={`grid gap-10 items-start ${slug === "chatbot-consorcios" ? "max-w-xl mx-auto" : "lg:grid-cols-2"}`}>
                    {/* IZQUIERDA: Info + Tablet abajo */}
                    <div className="space-y-6">
                        <section className={`rounded-3xl border p-6 md:p-8 backdrop-blur-xl ${card}`}>
                            <h2 className={`text-2xl font-semibold mb-4 ${textMain}`}>Objetivos</h2>
                            <ul className={`list-disc list-inside space-y-2 ${textMuted}`}>
                                {project.objectives.map((obj) => (
                                    <li key={obj}>{obj}</li>
                                ))}
                            </ul>
                        </section>

                        <section className={`rounded-3xl border p-6 md:p-8 backdrop-blur-xl ${card}`}>
                            <h2 className={`text-2xl font-semibold mb-4 ${textMain}`}>Tecnologías utilizadas</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className={`px-3 py-1.5 rounded-full text-sm border ${getTechColor(tech)}`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Tablet abajo a la izquierda (más grande + estilo) */}
                        {project.images.tablet && (
                            <div className="relative mt-2">
                                <div
                                    className={`absolute -inset-4 -z-10 rounded-[32px] blur-2xl ${isDark ? "bg-white/5" : "bg-black/5"
                                        }`}
                                />
                                <img
                                    src={project.images.tablet}
                                    alt={`${project.title} tablet`}
                                    className="
                  w-full
                  max-w-[520px]
                  mx-auto
                  lg:mx-0
                  object-contain
                  drop-shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                  rotate-[-2deg]
                  translate-y-1
                  transition-transform
                  duration-300
                  hover:rotate-[-1deg]
                  hover:scale-[1.01]
                "
                                    loading="lazy"
                                />
                            </div>
                        )}
                    </div>

                    {/* DERECHA: Desktop grande + Mobile debajo (en desktop) */}
                    <div className="space-y-8 lg:sticky lg:top-20">
                        {/* Desktop grande - SIN FONDO */}
                        <div className={`relative ${slug === "chatbot-consorcios" ? "max-w-[320px] mx-auto" : ""}`}>
                            <div
                                className={`absolute -inset-4 -z-10 rounded-[40px] blur-2xl ${isDark ? "bg-white/5" : "bg-black/5"
                                    }`}
                            />
                            <img
                                src={project.images.desktop}
                                alt={`${project.title} desktop`}
                                className="w-full rounded-2xl object-contain drop-shadow-[0_35px_90px_rgba(0,0,0,0.35)]"
                                loading="lazy"
                            />
                        </div>

                        {/* Mobile debajo (solo visible en >= md para acompañar) */}
                        {project.images.mobile && (
                            <div className="hidden md:flex justify-center lg:justify-end">
                                <img
                                    src={project.images.mobile}
                                    alt={`${project.title} mobile`}
                                    className="
                  w-full
                  max-w-[320px]
                  object-contain
                  drop-shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                  rotate-[2deg]
                  transition-transform
                  duration-300
                  hover:rotate-[1deg]
                  hover:scale-[1.01]
                "
                                    loading="lazy"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile abajo del todo en pantallas chicas */}
                {project.images.mobile && (
                    <div className="mt-10 md:hidden flex justify-center">
                        <img
                            src={project.images.mobile}
                            alt={`${project.title} mobile`}
                            className="w-full max-w-[360px] object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
                            loading="lazy"
                        />
                    </div>
                )}

                {/* Botones abajo */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        href="/proyectos"
                        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border ${isDark ? "border-white/15 hover:border-white/25" : "border-black/15 hover:border-black/25"
                            } ${textMain} transition`}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver a proyectos
                    </Link>

                    {project.siteUrl && (
                        <a
                            href={project.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent-custom text-white hover:opacity-90 transition"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Ver sitio
                        </a>
                    )}
                </div>
            </div>
        </section>
    )
}
