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
        mobile: string
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
            "Integrar datos en tiempo real"
        ],
        technologies: ["ManyChat", "Google Sheets", "Apps Script"],
        siteUrl: "",
        images: {
            desktop: "/proyectos-imagenes/chatbot-consorcios-desktop.png",
            mobile: "/proyectos-imagenes/chatbot-consorcios-mobile.png",
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
            desktop: "/proyectos-imagenes/servilimp-inicio-desktop.png",
            mobile: "/proyectos-imagenes/servilimp-mobile.png",
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
            "Comunicar la propuesta del bar"
        ],
        technologies: ["Branding", "Redes Sociales", "Diseño Gráfico"],
        siteUrl: "",
        images: {
            desktop: "/proyectos-imagenes/bar-berlin-desktop.png",
            mobile: "/proyectos-imagenes/bar-berlin-mobile.png",
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
            "Facilitar el contacto directo"
        ],
        technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        siteUrl: "https://cabralasociadosestudiocontable.com.ar/",
        images: {
            desktop: "/proyectos-imagenes/cabral-asociados-inicio-desktop.png",
            mobile: "/proyectos-imagenes/cabral-asociados-mobile.png",
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
            "Crear navegación intuitiva y accesible"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        siteUrl: "",
        images: {
            desktop: "/proyectos-imagenes/instituto-juan-pablo-ii.png",
            mobile: "/proyectos-imagenes/instituto-juan-pablo-ii-mobile.png",
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
            "Optimizar conversión de visitas a ventas"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        siteUrl: "",
        images: {
            desktop: "/proyectos-imagenes/icasescobar.png",
            mobile: "/proyectos-imagenes/icasescobar-mobile.png",
        },
    },
}

export default function ProjectClient({ slug }: { slug: string }) {
    const { theme } = useTheme()
    const project = PROJECTS[slug]

    const isDark = theme === "dark"
    const textMain = isDark ? "text-white" : "text-black"
    const textMuted = isDark ? "text-white/70" : "text-black/70"
    const card = isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"

    if (!project) {
        return (
            <section className="py-40 text-center px-4">
                <h1 className={`text-2xl font-bold ${textMain}`}>Proyecto no encontrado</h1>
                <p className={`mt-2 ${textMuted}`}>Revisá el enlace o volvé a la lista de proyectos.</p>

                <div className="mt-8 flex justify-center">
                    <Link
                        href="/proyectos"
                        className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border ${isDark ? "border-white/15" : "border-black/15"
                            } ${textMain}`}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver a proyectos
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <section className="py-32 px-4">
            <div className="container mx-auto max-w-6xl space-y-12">
                {/* ARRIBA: TÍTULO + SUBTÍTULO (MÁS EXTENSO) */}
                <header className="text-center space-y-5">
                    <h1 className={`text-4xl md:text-5xl font-bold tracking-tight ${textMain}`}>
                        {project.title}
                    </h1>

                    <p className={`text-lg md:text-xl leading-relaxed ${textMuted} max-w-3xl mx-auto`}>
                        {project.description}
                    </p>
                </header>

                {/* 2 COLUMNAS: IZQ INFO / DER FOTOS */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                    {/* IZQUIERDA - INFO */}
                    <div className="space-y-6">
                        <section className={`rounded-2xl border p-6 md:p-8 ${card}`}>
                            <h2 className={`text-2xl font-semibold mb-4 ${textMain}`}>Objetivos</h2>
                            <ul className={`list-disc list-inside space-y-2 ${textMuted}`}>
                                {project.objectives.map((obj) => (
                                    <li key={obj}>{obj}</li>
                                ))}
                            </ul>
                        </section>

                        <section className={`rounded-2xl border p-6 md:p-8 ${card}`}>
                            <h2 className={`text-2xl font-semibold mb-4 ${textMain}`}>Tecnologías utilizadas</h2>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className={`px-3 py-1.5 rounded-full text-sm border ${isDark
                                            ? "border-white/10 bg-white/5 text-white/80"
                                            : "border-black/10 bg-black/5 text-black/80"
                                            }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* DERECHA - FOTOS */}
                    <div className="space-y-6 lg:sticky lg:top-24">
                        <div className={`rounded-2xl border overflow-hidden ${card}`}>
                            <img
                                src={project.images.desktop}
                                alt={`Vista de escritorio de ${project.title}`}
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>

                        <div className={`rounded-2xl border overflow-hidden ${card}`}>
                            <img
                                src={project.images.mobile}
                                alt={`Vista móvil de ${project.title}`}
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {/* ABAJO DE TODO: BOTONES */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
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
