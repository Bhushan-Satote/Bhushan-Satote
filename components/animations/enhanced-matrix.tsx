"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface EnhancedMatrixProps {
  className?: string
  showWaves?: boolean
  showGlitches?: boolean
  interactive?: boolean
  theme?: "blue" | "green" | "purple"
}

export function EnhancedMatrix({
  className,
  showWaves = true,
  showGlitches = true,
  interactive = false,
  theme = "blue",
}: EnhancedMatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Enhanced character set with programming symbols
    const chars =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]();.,=+-*/<>!&|^%$#@~`'\"\\:?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    // Theme colors
    const themeColors = {
      blue: {
        primary: "#00BFFF",
        secondary: "#0080FF",
        accent: "#40E0D0",
        fade: "rgba(0, 191, 255, 0.8)",
      },
      green: {
        primary: "#00FF9C",
        secondary: "#00C97D",
        accent: "#4EE485",
        fade: "rgba(0, 255, 156, 0.8)",
      },
      purple: {
        primary: "#8A2BE2",
        secondary: "#9932CC",
        accent: "#DA70D6",
        fade: "rgba(138, 43, 226, 0.8)",
      },
    }

    const colors = themeColors[theme]
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []
    const speeds: number[] = []
    const glitchTimers: number[] = []

    // Initialize arrays
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
      speeds[i] = Math.random() * 0.5 + 0.5
      glitchTimers[i] = 0
    }

    let time = 0
    let lastTime = 0

    const draw = (currentTime: number) => {
      if (currentTime - lastTime < 30) {
        requestAnimationFrame(draw)
        return
      }

      time += 0.01
      lastTime = currentTime

      // Create trailing effect with slight variation
      ctx.fillStyle = "rgba(10, 14, 26, 0.04)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px 'Courier New', monospace`
      ctx.textAlign = "center"

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize + fontSize / 2
        const y = drops[i] * fontSize

        // Interactive effect - characters glow near mouse
        let distanceToMouse = 1
        if (interactive) {
          const dx = x - mousePos.x
          const dy = y - mousePos.y
          distanceToMouse = Math.sqrt(dx * dx + dy * dy)
        }

        // Wave effect
        let waveOffset = 0
        if (showWaves) {
          waveOffset = Math.sin(time + i * 0.1) * 2
        }

        // Glitch effect
        let glitchOffset = 0
        if (showGlitches) {
          glitchTimers[i]--
          if (glitchTimers[i] <= 0 && Math.random() < 0.001) {
            glitchTimers[i] = 30 + Math.random() * 20
          }
          if (glitchTimers[i] > 0) {
            glitchOffset = (Math.random() - 0.5) * 10
          }
        }

        const finalX = x + waveOffset + glitchOffset
        const finalY = y

        // Determine character appearance based on various factors
        const isLeading = drops[i] < 5 // Leading characters in the stream
        const isGlowing = Math.random() < 0.03 || (interactive && distanceToMouse < 100)
        const isGlitching = glitchTimers[i] > 0

        if (isLeading || isGlowing) {
          ctx.shadowColor = colors.primary
          ctx.shadowBlur = isGlowing ? 20 : 10
          ctx.fillStyle = "#FFFFFF"
        } else if (isGlitching) {
          ctx.shadowColor = colors.accent
          ctx.shadowBlur = 15
          ctx.fillStyle = colors.accent
        } else if (Math.random() < 0.1) {
          ctx.shadowColor = colors.secondary
          ctx.shadowBlur = 5
          ctx.fillStyle = colors.secondary
        } else {
          ctx.shadowBlur = 0
          const opacity = Math.max(0.1, 1 - drops[i] / 50)
          ctx.fillStyle = `rgba(0, 191, 255, ${opacity * (Math.random() * 0.5 + 0.5)})`
        }

        ctx.fillText(char, finalX, finalY)

        // Reset shadow
        ctx.shadowBlur = 0

        // Move drop down with variable speed
        drops[i] += speeds[i]

        // Reset drop when it goes off screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
          speeds[i] = Math.random() * 0.5 + 0.5
        }
      }

      requestAnimationFrame(draw)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (interactive) {
        setMousePos({ x: e.clientX, y: e.clientY })
      }
    }

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    const animationId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove)
      }
      cancelAnimationFrame(animationId)
    }
  }, [showWaves, showGlitches, interactive, mousePos, theme])

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed inset-0 pointer-events-none z-0", className)}
      style={{ background: "transparent" }}
    />
  )
}
