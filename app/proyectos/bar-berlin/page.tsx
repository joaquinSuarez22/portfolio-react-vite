"use client"

import React from "react"
import Link from "next/link"
import SharedLayout from "../../../src/components/SharedLayout"
import BeamsBackground from "../../../src/components/BeamsBackground"
import Footer from "../../../src/components/Footer"
import { useTheme } from "../../../src/contexts/ThemeContext"
import { ArrowLeft } from "lucide-react"

const BarBerlinPage = () => {
    const { theme } = useTheme()

    const objectives = [
        "Crear identidad visual coherente",
        "Diseñar contenido atractivo para redes",
        "Creación y personalización de Google Maps",
        "Diseño y creación del menú",
        "Comunicar la propuesta del bar",
    ]

    const technologies = [
        "Branding",
        "Redes Sociales",
        "Diseño Gráfico",
        "Google Sheets",
        "Google Maps",
    ]

    const getTechColor = (tech: string) => {
        const colors: Record<string, string> = {
            Branding: "bg-pink-500/20 text-pink-400 border-pink-500/30",
            "Redes Sociales": "bg-purple-600/20 text-purple-300 border-purple-600/30",
            "Diseño Gráfico": "bg-rose-500/20 text-rose-400 border-rose-500/30",
            "Google Sheets": "bg-green-500/20 text-green-300 border-green-500/30",
            "Google Maps": "bg-blue-500/20 text-blue-300 border-blue-500/30",
        }
        return colors[tech] || "bg-accent-custom/20 text-accent-custom border-accent-custom/30"
    }

    const cardClasses = `backdrop-blur-xl border rounded-3xl p-6 transition-all duration-300 shadow-xl hover:scale-[1.01] ${theme === "dark"
        ? "bg-black/20 border-white/10 hover:bg-black/30"
        : "bg-white/10 border-white/20 hover:bg-white/15"
        }`

    return (
        <SharedLayout>
            <BeamsBackground intensity="medium">
                <div className="relative z-10 min-h-screen flex flex-col">
                    <main className="flex-grow container mx-auto px-4 py-24 md:py-32 max-w-4xl space-y-12">
                        {/* Header */}
                        <div className="text-center space-y-4 mb-8">
                            <h1 className={`text-4xl md:text-5xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
                                Bar Berlín
                            </h1>
                            <p className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                                Proyecto integral de branding y diseño de contenido para redes sociales. Se trabajó en la identidad visual
                                completa de la marca, desde el logotipo hasta la paleta de colores y tipografías. Se creó contenido visual
                                atractivo y coherente para Instagram, Facebook y Google Maps, enfocado en destacar la propuesta
                                gastronómica y el ambiente único del bar.
                            </p>
                        </div>

                        {/* Objetivos y Tecnologías */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <section className={cardClasses}>
                                <h2 className={`text-2xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                                    Objetivos
                                </h2>
                                <ul className={`list-disc list-inside space-y-2 ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                                    {objectives.map((obj) => (
                                        <li key={obj}>{obj}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className={cardClasses}>
                                <h2 className={`text-2xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                                    Tecnologías utilizadas
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech) => (
                                        <span key={tech} className={`px-3 py-1.5 rounded-full text-sm border ${getTechColor(tech)}`}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Galería */}
                        <div className="mt-12 space-y-12">

                            {/* FILA 1 – Logos (con border radius) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <img
                                    src="/proyectos-imagenes/berlin/logo-completo-berlin.png"
                                    alt="Logo completo Bar Berlín"
                                    className="w-full max-w-[460px] mx-auto object-contain rounded-2xl"
                                    loading="lazy"
                                />
                                <img
                                    src="/proyectos-imagenes/berlin/isologo-berlin.png"
                                    alt="Isologo Bar Berlín"
                                    className="w-full max-w-[460px] mx-auto object-contain rounded-2xl"
                                    loading="lazy"
                                />
                            </div>

                            {/* FILA 2 – Sticker izquierda / Mobile derecha */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                                <img
                                    src="/proyectos-imagenes/berlin/mockup-logo-sticker.png"
                                    alt="Mockup Sticker Logo"
                                    className="w-full max-w-[460px] mx-auto object-contain"
                                    loading="lazy"
                                />

                                <img
                                    src="/proyectos-imagenes/berlin/mockup-ig-mobile.png"
                                    alt="Mockup Instagram Mobile"
                                    className="w-full max-w-[460px] mx-auto object-contain"
                                    loading="lazy"
                                />
                            </div>

                            {/* FILA 3 – Menú + Logo alternativo */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                                <img
                                    src="/proyectos-imagenes/berlin/mockup-menu-tablet.png"
                                    alt="Mockup Menú sobre mesa"
                                    className="w-full max-w-[460px] mx-auto object-contain"
                                    loading="lazy"
                                />

                                <img
                                    src="/proyectos-imagenes/berlin/mockup-logo.png"
                                    alt="Mockup Alternativo Logo"
                                    className="w-full h-full object-cover rounded-[32px] aspect-square"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Volver */}
                        <div className="mt-16 flex justify-center">
                            <Link
                                href="/proyectos"
                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 ${theme === "dark"
                                    ? "border-white/15 text-white hover:bg-white/10"
                                    : "border-black/15 text-black hover:bg-black/5"
                                    }`}
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Volver a proyectos
                            </Link>
                        </div>
                    </main>

                    <Footer />
                </div>
            </BeamsBackground>
        </SharedLayout>
    )
}

export default BarBerlinPage
