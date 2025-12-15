"use client"

import { useTheme } from "../contexts/ThemeContext"
import { Code2, Palette, Sparkles } from "lucide-react"

const WhatIDo = () => {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const textTitle = isDark ? "text-white" : "text-black"
  const textMuted = isDark ? "text-white/80" : "text-black/80"
  const cardBase =
    "glass rounded-2xl p-6 h-full flex flex-col gap-3 border backdrop-blur-xl transition-all duration-300 hover:translate-y-[-3px] hover:scale-[1.01] shadow-xl"

  const cards = [
    {
      id: 1,
      title: "Desarrollo Web",
      icon: Code2,
      description:
        "Diseño y desarrollo sitios web modernos, claros y pensados para convertir visitas en clientes.",
      bullets: [
        "Webs institucionales y landings",
        "Diseño responsive (móvil, tablet y escritorio)",
        "Integración con formularios y WhatsApp",
      ],
    },
    {
      id: 2,
      title: "Diseño gráfico para redes",
      icon: Palette,
      description:
        "Creo piezas visuales coherentes con tu marca para que tu presencia en redes se vea profesional.",
      bullets: [
        "Diseño de posts, historias y portadas",
        "Feeds organizados y alineados a tu marca",
        "Adaptación de piezas para distintas plataformas",
      ],
    },
    {
      id: 3,
      title: "Branding de marca",
      icon: Sparkles,
      description:
        "Trabajo la identidad visual de tu marca para que comunique claro quién sos y qué ofrecés.",
      bullets: [
        "Definición de paleta y tipografías",
        "Aplicación en web y redes sociales",
        "Soporte visual para comunicar mejor tus servicios",
      ],
    },
  ]

  return (
    <section id="what-i-do" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Título + subtítulo */}
        <div className="text-center mb-10">
          <p className="text-accent-custom text-sm font-semibold tracking-wide uppercase mb-2">
            Qué hago
          </p>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-3 ${textTitle}`}
          >
            Te ayudo con tu presencia digital
          </h2>
          <p
            className={`text-sm md:text-base max-w-2xl mx-auto ${textMuted}`}
          >
            Combino desarrollo web, diseño y branding para que tu negocio tenga
            una presencia online clara, profesional y alineada a tus objetivos.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <article
                key={card.id}
                className={`${cardBase} ${
                  isDark
                    ? "border-white/10 bg-white/5 hover:bg-white/10"
                    : "border-black/10 bg-black/5 hover:bg-black/10"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent-custom/15 border border-accent-custom/30">
                    <Icon className="w-5 h-5 text-accent-custom" />
                  </div>
                  <h3 className={`text-lg font-semibold ${textTitle}`}>
                    {card.title}
                  </h3>
                </div>

                <p className={`text-sm ${textMuted}`}>{card.description}</p>

                <ul className={`mt-2 space-y-1.5 text-xs md:text-sm ${textMuted}`}>
                  {card.bullets.map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-center">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-custom" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
