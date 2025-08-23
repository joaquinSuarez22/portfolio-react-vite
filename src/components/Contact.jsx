"use client"

import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext"

const Contact = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se integrará con Formspree/EmailJS más tarde
    console.log("Form data:", formData)
    alert("Formulario listo para integrar con servicio de email")
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/joaquinsuarez/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/joaquinSuarez22",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:suarezjoaco22@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/541168673889?text=Hola%2C%20me%20interesa%20contactarte%20para%20un%20proyecto",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.090 1.595 5.890L0 24l6.335-1.652c1.746.943 3.71 1.444 5.682 1.444C18.598 23.792 24 18.424 24 11.804 24 5.182 18.598-.186 12.017 0zm5.97 16.971c-.26.731-1.536 1.337-2.114 1.429-.578.092-1.337.092-2.114-.184-.777-.276-1.337-.552-2.298-1.061-4.090-2.114-6.758-6.335-6.942-6.611-.184-.276-1.521-2.022-1.521-3.859s.92-2.759 1.245-3.127c.325-.368.709-.46 1.061-.46.276 0 .552.092.777.092.276 0 .644-.092.92.709.276.801 1.061 2.575 1.153 2.759.092.184.184.46 0 .736-.184.276-.276.46-.552.736-.276.276-.552.552-.276.92.276.368 1.245 2.022 2.667 3.267 1.829 1.613 3.359 2.114 3.727 2.298.368.184.644.184.92-.092.276-.276 1.153-1.337 1.429-1.797.276-.46.552-.368.92-.184.368.184 2.298 1.061 2.667 1.245.368.184.644.276.736.46.092.184.092 1.061-.184 1.792z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          Contacto
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className={`text-lg mb-8 ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. Contáctame y trabajemos juntos para crear
              algo increíble.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 glass hover:bg-white/10 rounded-lg transition-colors glow-hover focus:outline-none focus:ring-2 focus:ring-accent-custom focus:ring-offset-2 focus:ring-offset-slate-900 ${theme === "dark" ? "text-white" : "text-black"}`}
                  aria-label={`Contactar por ${link.name}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 ${theme === "dark" ? "bg-white/5 border-white/10 placeholder-white/50" : "bg-black/5 border-black/20 placeholder-black/50"} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-custom focus:border-transparent transition-colors`}
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 ${theme === "dark" ? "bg-white/5 border-white/10 placeholder-white/50" : "bg-black/5 border-black/20 placeholder-black/50"} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-custom focus:border-transparent transition-colors`}
                    placeholder="suarezjoaco22@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 ${theme === "dark" ? "bg-white/5 border-white/10 placeholder-white/50" : "bg-black/5 border-black/20 placeholder-black/50"} rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-custom focus:border-transparent transition-colors resize-vertical`}
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-accent-custom hover:bg-accent-custom/90 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent-custom focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
