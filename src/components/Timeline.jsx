"use client"

import { studies } from "../data/studies"
import { useTheme } from "../contexts/ThemeContext"
import { GraduationCap } from "lucide-react" // <-- Icono de estudios

const Timeline = () => {
  const { theme } = useTheme()

  return (
    <section id="studies" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <span className="float-icon">
            <GraduationCap className="w-8 h-8 text-accent-custom" />
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Estudios
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Línea del timeline */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-custom to-purple-600"></div>

            {/* Items */}
            <div className="space-y-12">
              {studies.map((study, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Punto */}
                  <div className="absolute left-[9px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-accent-custom rounded-full border-4 border-slate-900 glow z-10"></div>

                  {/* Tarjeta */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                    }`}
                  >
                    <article className="glass rounded-2xl p-6 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3
                          className={`text-lg font-semibold ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        >
                          {study.title}
                        </h3>
                        <span className="text-accent-custom text-sm font-medium">
                          {study.range}
                        </span>
                      </div>

                      <p
                        className={`font-medium ${
                          theme === "dark" ? "text-white/80" : "text-black/80"
                        }`}
                      >
                        {study.place}
                      </p>

                      {study.detail && (
                        <div className="text-sm space-y-1">
                          {study.detail.split("\n").map((line, lineIndex) => (
                            <p
                              className={`${
                                theme === "dark"
                                  ? "text-white/70"
                                  : "text-black/70"
                              }`}
                              key={lineIndex}
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      )}
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animación del ícono flotante */}
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

export default Timeline
