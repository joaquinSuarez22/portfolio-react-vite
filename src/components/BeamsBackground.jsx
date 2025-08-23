"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useTheme } from "../contexts/ThemeContext"

// Creates a single animated beam with random properties
function createBeam(width, height) {
  const angle = -35 + Math.random() * 10
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle: angle,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.12 + Math.random() * 0.16,
    hue: 190 + Math.random() * 70,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  }
}

// Animated background component with moving light beams
export default function BeamsBackground({ className = "", intensity = "medium", children }) {
  const canvasRef = useRef(null)
  const beamsRef = useRef([])
  const animationFrameRef = useRef(0)
  const MINIMUM_BEAMS = 20
  const { isDark } = useTheme() // Theme context for dark/light mode

  // Intensity mapping for beam opacity
  const opacityMap = {
    subtle: 0.4,
    medium: 0.6,
    strong: 0.8,
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Setup canvas size and create initial beams
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)

      const totalBeams = MINIMUM_BEAMS * 1.5
      beamsRef.current = Array.from({ length: totalBeams }, () => createBeam(canvas.width, canvas.height))
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    // Reset beam position when it goes off-screen
    function resetBeam(beam, index, totalBeams) {
      if (!canvas) return beam

      const column = index % 3
      const spacing = canvas.width / 3

      beam.y = canvas.height + 100
      beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5
      beam.width = 100 + Math.random() * 100
      beam.speed = 0.5 + Math.random() * 0.4
      beam.hue = 190 + (index * 70) / totalBeams
      beam.opacity = 0.2 + Math.random() * 0.1
      return beam
    }

    // Draw individual beam with gradient and theme-aware colors
    function drawBeam(ctx, beam) {
      ctx.save()
      ctx.translate(beam.x, beam.y)
      ctx.rotate((beam.angle * Math.PI) / 180)

      const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2) * opacityMap[intensity]

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length)

      // Theme-aware beam colors
      if (isDark) {
        // Dark theme: bright beams
        gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`)
        gradient.addColorStop(0.1, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`)
        gradient.addColorStop(0.4, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`)
        gradient.addColorStop(0.6, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`)
        gradient.addColorStop(0.9, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`)
        gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`)
      } else {
        // Light theme: darker beams with dynamic color variation
        const lightHue = 200 + Math.sin(beam.pulse) * 20
        gradient.addColorStop(0, `hsla(${lightHue}, 60%, 40%, 0)`)
        gradient.addColorStop(0.1, `hsla(${lightHue}, 60%, 40%, ${pulsingOpacity * 0.8})`)
        gradient.addColorStop(0.4, `hsla(${lightHue}, 60%, 40%, ${pulsingOpacity * 1.2})`)
        gradient.addColorStop(0.6, `hsla(${lightHue}, 60%, 40%, ${pulsingOpacity * 1.2})`)
        gradient.addColorStop(0.9, `hsla(${lightHue}, 60%, 40%, ${pulsingOpacity * 0.8})`)
        gradient.addColorStop(1, `hsla(${lightHue}, 60%, 40%, 0)`)
      }

      ctx.fillStyle = gradient
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)
      ctx.restore()
    }

    // Main animation loop
    function animate() {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.filter = "blur(35px)"

      const totalBeams = beamsRef.current.length
      beamsRef.current.forEach((beam, index) => {
        // Move beam upward and update pulse
        beam.y -= beam.speed
        beam.pulse += beam.pulseSpeed

        // Reset beam when it goes off-screen
        if (beam.y + beam.length < -100) {
          resetBeam(beam, index, totalBeams)
        }

        drawBeam(ctx, beam)
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup function
    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [intensity, isDark])

  return (
    // Main container with theme-aware background
    <div className={`relative min-h-screen ${isDark ? "bg-slate-950" : "bg-gray-50"} ${className}`}>
      {/* Canvas for beam animation */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ filter: "blur(15px)" }} />

      {/* Animated overlay for additional atmosphere */}
      <motion.div
        className={`fixed inset-0 ${isDark ? "bg-slate-950/20" : "bg-white/40"} pointer-events-none z-0`}
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
        style={{
          backdropFilter: "blur(50px)",
        }}
      />

      {/* Content wrapper with proper z-index */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
