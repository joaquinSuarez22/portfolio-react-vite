"use client"

import { useTheme } from "../contexts/ThemeContext"

export default function TechStack() {
  const { theme } = useTheme()

  const technologies = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "💛" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "WordPress", icon: "📝" },
    { name: "C++", icon: "⚙️" },
    { name: "SQL", icon: "🗄️" },
    { name: "Java", icon: "☕" },
    { name: "Git", icon: "🔧" }, // Added Git to the technologies list
  ]

  return (
    <section id="tech-stack" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-accent-custom text-lg mb-4 font-medium">Tecnologías</p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
            Tech Stack
          </h2>
          <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            Tecnologías con las que trabajo a diario
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 md:grid-rows-2 gap-y-3 gap-x-0 justify-items-center max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-3 h-20 w-20 rounded-2xl border transition-all duration-300 cursor-pointer ${
                theme === "dark"
                  ? "border-gray-600 text-gray-400 hover:text-white hover:border-accent-custom hover:bg-white/5"
                  : "border-gray-300 text-gray-500 hover:text-black hover:border-accent-custom hover:bg-black/5"
              }`}
            >
              <span className="text-xl mb-1">{tech.icon}</span>
              <span className="text-xs font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
