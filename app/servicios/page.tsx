"use client"

import { useTheme } from "../../src/contexts/ThemeContext"
import SharedLayout from "../../src/components/SharedLayout"
import BeamsBackground from "../../src/components/BeamsBackground"
import Footer from "../../src/components/Footer"
import {
  Code2,
  Building2,
  LayoutTemplate,
  Sparkles,
  ArrowRight,
  Phone,
} from "lucide-react"

// ------------ CONTENIDO PRINCIPAL DE SERVICIOS ------------
const ServicesContent = () => {
  const { theme } = useTheme()

  const isDark = theme === "dark"
  const textTitle = isDark ? "text-white" : "text-black"
  const textMuted = isDark ? "text-white/80" : "text-black/80"
  const cardBg =
    "backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10"

  const services = [
    {
      id: 2,
      badge: "Dale presencia online a tu marca",
      title: "Web Institucional",
      icon: Building2,
      description:
        "Para empresas, profesionales y proyectos que necesitan una presencia sólida en internet y captar nuevos clientes.",
      features: [
        "Sitio autoadministrable",
        "Carga rápida",
        "Sección Nosotros",
        "Sección Servicios",
        "Sección Contacto",
        "Sección de testimonios o casos (opcional)",
        "Formulario de contacto optimizado",
        "Soporte mensual",
      ],
      ctaLabel: "Cotizar Web Institucional",
    },
    {
      id: 3,
      badge: "Convertí visitas en clientes",
      title: "Landing Page / Onepage",
      icon: LayoutTemplate,
      description:
        "Perfecto para campañas, lanzamientos, captación de leads o páginas personales con foco en conversión.",
      features: [
        "Carga rápida y enfocada en performance",
        "Llamadas a la acción estratégicas",
        "Información clave en una sola página",
        "Formulario de contacto o lead magnet",
        "Método de pago (opcional)",
        "Funnel de ventas (opcional)",
        "Enlaces anclados para navegación rápida",
        "Plantilla de posts para blog",
        "Soporte mensual",
      ],
      ctaLabel: "Cotizar Landing / Onepage",
    },
    {
      id: 4,
      badge: "Hacemos realidad tu idea",
      title: "Proyecto Personalizado",
      icon: Sparkles,
      description:
        "Cuando tu idea no entra en una sola categoría. Webs a medida con integraciones, catálogos especiales o funciones avanzadas.",
      features: [
        "Arquitectura pensada según tu proyecto",
        "Secciones a medida",
        "Integraciones con software o APIs externas",
        "Maquetado completo del diseño",
        "Trabajo en equipo con tu negocio",
        "Escalable para futuras mejoras",
        "Soporte mensual",
      ],
      ctaLabel: "Cotizar Proyecto Personalizado",
    },
  ]

  const processSteps = [
    {
      title: "1. Relevamiento inicial",
      description:
        "Conversamos sobre tu negocio, objetivos, público y referencias. Definimos juntos el tipo de web que mejor se adapta a lo que necesitás.",
    },
    {
      title: "2. Propuesta y estructura",
      description:
        "Te presento la estructura del sitio (secciones, navegación, objetivos de cada pantalla) y una propuesta alineada a tus metas.",
    },
    {
      title: "3. Diseño y maquetado",
      description:
        "Diseño la interfaz pensando en claridad, experiencia de usuario y tu identidad de marca. Luego la llevo a código con buenas prácticas.",
    },
    {
      title: "4. Desarrollo y ajustes",
      description:
        "Implemento todas las secciones, formularios, integraciones y optimizaciones. Revisamos juntos y ajustamos lo necesario.",
    },
    {
      title: "5. Lanzamiento y soporte",
      description:
        "Publicamos la web en tu dominio, la dejo lista para recibir visitas y te asesoro sobre mantenimiento, contenido y próximos pasos.",
    },
  ]

  const siteIncludes = [
    "Diseño responsive (móvil, tablet y escritorio)",
    "Optimización básica para posicionamiento (SEO inicial)",
    "Integración con WhatsApp",
    "Formulario de contacto funcional",
    "Enlace a redes sociales",
    "Google Maps (si aplica)",
    "Certificado SSL (sitio seguro https)",
    "Buenas prácticas de rendimiento",
  ]

  const whatsappUrl =
    "https://wa.me/541168673889?text=" +
    encodeURIComponent(
      "Hola Joaquín, quiero cotizar una página web para mi negocio."
    )

  return (
    <section id="services" className="py-40">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="float-icon mb-4">
            <Code2 className="w-8 h-8 text-accent-custom" />
          </div>
          <h1 className={`text-3xl md:text-4xl font-bold mb-3 ${textTitle}`}>
            Servicios de diseño y desarrollo web
          </h1>
          <p className={`max-w-2xl text-base md:text-lg ${textMuted}`}>
            Esta sección está pensada para{" "}
            <strong>negocios, emprendedores y profesionales</strong> que
            necesitan una web clara, moderna y preparada para conseguir
            clientes. Elegí el tipo de web que mejor se adapte a tu proyecto.
          </p>
        </div>

        {/* Grid de tipos de web */}
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.id}
                className={`${cardBg} rounded-2xl p-6 flex flex-col h-full hover:translate-y-[-4px] hover:scale-[1.01] transition-all duration-300 shadow-xl`}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-accent-custom/15 border border-accent-custom/30">
                      <Icon className="w-6 h-6 text-accent-custom" />
                    </div>
                    <h2 className={`text-xl font-semibold ${textTitle}`}>
                      {service.title}
                    </h2>
                  </div>
                  {service.badge && (
                    <span className="text-[11px] md:text-xs px-3 py-1 rounded-full bg-accent-custom/10 text-accent-custom font-medium whitespace-nowrap">
                      {service.badge}
                    </span>
                  )}
                </div>

                <p className={`text-sm md:text-base mb-4 ${textMuted}`}>
                  {service.description}
                </p>

                <ul className={`space-y-2 text-sm md:text-base ${textMuted} flex-1`}>
                  {service.features.map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-center">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-custom" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Botones dentro de la tarjeta */}
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#projects"
                    className={`inline-flex items-center justify-center px-5 py-2 rounded-lg text-sm font-medium border transition-colors ${
                      isDark
                        ? "border-white/20 text-white hover:bg-white/10"
                        : "border-black/20 text-black hover:bg-black/10"
                    }`}
                  >
                    Ver ejemplos
                  </a>
                  <a
                    href={`https://wa.me/541168673889?text=${encodeURIComponent(
                      `Hola Joaquín, quiero cotizar ${service.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2 rounded-lg text-sm font-medium bg-accent-custom text-white hover:bg-accent-custom/90 transition-colors"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {/* Sección: Cómo trabajo */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="flex flex-col items-center text-center mb-8">
            <Sparkles className="w-7 h-7 text-accent-custom mb-3" />
            <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${textTitle}`}>
              ¿Cómo trabajamos tu página web?
            </h2>
            <p className={`max-w-2xl text-sm md:text-base ${textMuted}`}>
              Un proceso claro, con comunicación constante y foco en que tu web
              realmente te ayude a cumplir objetivos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className={`${cardBg} rounded-2xl p-5 h-full flex flex-col`}
              >
                <h3
                  className={`text-sm md:text-base font-semibold mb-2 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {step.title}
                </h3>
                <p className={`text-sm ${textMuted}`}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección: Qué incluye tu sitio */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="flex flex-col items-center text-center mb-8">
            <Code2 className="w-7 h-7 text-accent-custom mb-3" />
            <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${textTitle}`}>
              ¿Qué incluye tu sitio web?
            </h2>
            <p className={`max-w-2xl text-sm md:text-base ${textMuted}`}>
              Más que una página linda: diseño, funcionalidad y bases técnicas
              para que tu web esté lista para crecer.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {siteIncludes.map((item, idx) => (
              <div
                key={idx}
                className={`${cardBg} rounded-2xl p-4 flex items-center gap-3`}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-custom" />
                <p className={`text-sm md:text-base ${textMuted}`}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-20 flex flex-col items-center text-center gap-4">
          <p className={`text-base md:text-lg ${textMuted}`}>
            ¿Querés que veamos juntos qué tipo de web necesita tu proyecto?
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium bg-accent-custom text-white hover:bg-accent-custom/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-custom focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Solicitar presupuesto
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium border transition-colors gap-2 ${
                isDark
                  ? "bg-white/5 border-white/20 text-white hover:bg-white/10"
                  : "bg-black/5 border-black/20 text-black hover:bg-black/10"
              }`}
            >
              <Phone className="w-5 h-5" />
              Hablemos por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Animación ícono header */}
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

// ------------ PÁGINA ENVUELTA EN EL LAYOUT COMPARTIDO ------------
export default function ServiciosPage() {
  return (
    <SharedLayout>
      <BeamsBackground intensity="medium">
        <div className="relative z-10 min-h-screen">
          <ServicesContent />
          <Footer />
        </div>
      </BeamsBackground>
    </SharedLayout>
  )
}
