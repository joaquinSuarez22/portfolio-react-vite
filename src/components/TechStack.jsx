"use client"

import { useTheme } from "../contexts/ThemeContext"
import {
  Code,
  Palette,
  Zap,
  Atom,
  Layers,
  Wind,
  Boxes,
  FileText,
  Cog,
  Database,
  Coffee,
  GitBranch,
} from "lucide-react"

export default function TechStack() {
  const { theme } = useTheme()

  const technologies = [
    { name: "HTML", icon: <Code className="w-6 h-6" color="#E34F26" /> },
    { name: "CSS", icon: <Palette className="w-6 h-6" color="#1572B6" /> },
    { name: "JavaScript", icon: <Zap className="w-6 h-6" color="#F7DF1E" /> },
    { name: "React", icon: <Atom className="w-6 h-6" color="#61DAFB" /> },
    { name: "Next.js", icon: <Layers className="w-6 h-6" color="#000000" /> },
    { name: "Tailwind CSS", icon: <Wind className="w-6 h-6" color="#38BDF8" /> },
    { name: "Bootstrap", icon: <Boxes className="w-6 h-6" color="#7952B3" /> },
    { name: "WordPress", icon: <FileText className="w-6 h-6" color="#21759B" /> },
    { name: "C++", icon: <Cog className="w-6 h-6" color="#00599C" /> },
    { name: "SQL", icon: <Database className="w-6 h-6" color="#F29111" /> },
    { name: "Java", icon: <Coffee className="w-6 h-6" color="#E76F00" /> },
    { name: "Git", icon: <GitBranch className="w-6 h-6" color="#F05032" /> },
  ]

  return (
    <section id="tech-stack" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-accent-custom text-lg mb-4 font-medium">Tecnologías</p>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Tech Stack
          </h2>
          <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            Tecnologías con las que trabajo a diario
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 md:grid-rows-2 gap-y-4 justify-items-center max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-5 h-24 w-24 rounded-2xl border transition-all duration-300 cursor-pointer ${
                theme === "dark"
                  ? "border-gray-600 text-gray-400 hover:text-white hover:border-accent-custom hover:bg-white/5"
                  : "border-gray-300 text-gray-500 hover:text-black hover:border-accent-custom hover:bg-black/5"
              }`}
            >
              <div className="mb-2">{tech.icon}</div>
              <span className="text-xs font-medium text-center leading-tight">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
