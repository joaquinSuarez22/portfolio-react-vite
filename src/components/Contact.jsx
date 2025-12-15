"use client"

import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext"
import { Linkedin, Github, Mail, Instagram, Phone } from "lucide-react"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdkwpozq"

const Contact = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    motivo: "",
    message: "",
    _gotcha: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg("")

    // Honeypot: si el bot completa _gotcha, abortamos
    if (formData._gotcha) return

    try {
      setSubmitting(true)
      const data = new FormData()
      data.append("name", formData.name)
      data.append("email", formData.email)
      data.append("motivo", formData.motivo)
      data.append("message", formData.message)
      data.append(
        "_subject",
        `Nuevo mensaje desde jjoaco.dev · Motivo: ${formData.motivo || "Sin especificar"}`
      )

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setSucceeded(true)
        setFormData({
          name: "",
          email: "",
          motivo: "",
          message: "",
          _gotcha: "",
        })
      } else {
        const json = await res.json().catch(() => ({}))
        const msg = json?.errors?.[0]?.message || "No se pudo enviar el formulario."
        setErrorMsg(msg)
      }
    } catch (err) {
      setErrorMsg("Hubo un problema al enviar. Intenta de nuevo en unos minutos.")
    } finally {
      setSubmitting(false)
    }
  }

  // Link dinámico de WhatsApp con mensaje pre-armado
  const buildWhatsAppUrl = () => {
    const base = "https://wa.me/541168673889"
    const motivoTexto = formData.motivo || "un proyecto"
    const nombre = formData.name ? `Soy ${formData.name} y ` : ""
    const texto = `${nombre}te escribo desde tu portfolio porque me interesa contactarte por ${motivoTexto}.`
    const encoded = encodeURIComponent(texto)
    return `${base}?text=${encoded}`
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/joaquinsuarez/",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/joaquinSuarez22",
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: "Email",
      href: "mailto:suarezjoaco22@gmail.com",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/541168673889?text=Hola%2C%20me%20interesa%20contactarte%20para%20un%20proyecto",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/jjoaco.dev/",
      icon: <Instagram className="w-6 h-6" />,
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header con icono y animación */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <span className="float-icon">
            <Mail className="w-8 h-8 text-accent-custom" />
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Contacto
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="mb-8 text-center">
              <span
                className={`block text-2xl font-semibold mb-1 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                ¿Tienes un proyecto en mente?
              </span>
              <span
                className={`block text-lg ${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                }`}
              >
                Me encantaría escucharlo. Contáctame y trabajemos juntos para crear algo increíble.
              </span>
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 glass hover:bg-white/10 rounded-lg transition-colors glow-hover focus:outline-none focus:ring-2 focus:ring-accent-custom focus:ring-offset-2 focus:ring-offset-slate-900 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                  aria-label={`Contactar por ${link.name}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 md:p-12">
            {succeeded ? (
              <div
                className={`text-center ${theme === "dark" ? "text-white" : "text-black"}`}
                role="status"
                aria-live="polite"
              >
                <h3 className="text-2xl font-semibold mb-2">¡Mensaje enviado!</h3>
                <p className={`${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                  Gracias por contactarte. Te responderé a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot anti-spam (oculto) */}
                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
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
                      className={`w-full px-4 py-3 ${
                        theme === "dark"
                          ? "bg-white/5 border-white/10 placeholder-white/50"
                          : "bg-black/5 border-black/20 placeholder-black/50"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-custom focus:border-transparent transition-colors`}
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
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
                      className={`w-full px-4 py-3 ${
                        theme === "dark"
                          ? "bg-white/5 border-white/10 placeholder-white/50"
                          : "bg-black/5 border-black/20 placeholder-black/50"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-custom focus:border-transparent transition-colors`}
                      placeholder="TuEmail@gmail.com"
                    />
                  </div>
                </div>

                {/* Motivo */}
                <div>
                  <label
                    htmlFor="motivo"
                    className={`block text-sm font-medium mb-2 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    Motivo de contacto
                  </label>
                  <select
  id="motivo"
  name="motivo"
  value={formData.motivo}
  onChange={handleChange}
  required
  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-custom focus:border-transparent transition-colors
    ${theme === "dark"
      ? "bg-white/5 border border-white/10 text-white"
      : "bg-black/5 border border-black/20 text-black"
    }
  `}
>
  <option
    value=""
    className={theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"}
  >
    Selecciona un motivo
  </option>

  <option
    value="Trabajo"
    className={theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"}
  >
    Trabajo
  </option>

  <option
    value="Presupuesto"
    className={theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"}
  >
    Presupuesto
  </option>

  <option
    value="Consulta"
    className={theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"}
  >
    Consulta
  </option>
</select>

                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
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
                    className={`w-full px-4 py-3 ${
                      theme === "dark"
                        ? "bg-white/5 border-white/10 placeholder-white/50"
                        : "bg-black/5 border-black/20 placeholder-black/50"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-custom focus:border-transparent transition-colors resize-vertical`}
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                {errorMsg && (
                  <p className="text-sm text-red-500" role="alert" aria-live="assertive">
                    {errorMsg}
                  </p>
                )}

                {/* Botones centrados: Enviar + WhatsApp */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full md:w-auto px-8 py-3 bg-accent-custom hover:bg-accent-custom/90 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent-custom focus:ring-offset-2 focus:ring-offset-slate-900 ${
                      submitting ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                  >
                    {submitting ? "Enviando..." : "Enviar mensaje"}
                  </button>

                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full md:w-auto px-8 py-3 font-medium rounded-lg transition-colors flex items-center justify-center gap-2 border ${
                      theme === "dark"
                        ? "bg-white/5 border-white/20 text-white hover:bg-white/10"
                        : "bg-black/5 border-black/20 text-black hover:bg-black/10"
                    }`}
                  >
                    <Phone className="w-5 h-5" />
                    Escribir por WhatsApp
                  </a>
                </div>
              </form>
            )}
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

export default Contact
