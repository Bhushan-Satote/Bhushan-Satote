"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface DigitalRainProps {
  className?: string
  variant?: "matrix" | "code" | "binary" | "cyber"
  intensity?: "subtle" | "normal" | "intense"
  color?: "neon" | "blue" | "green" | "custom"
  customColor?: string
}

export function DigitalRain({
  className,
  variant = "cyber",
  intensity = "normal",
  color = "neon",
  customColor,
}: DigitalRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    // Character sets for different variants
    const characterSets = {
      matrix: "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789",
      code: "{}[]();.,=+-*/<>!&|^%$#@~`'\"\\:?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      binary: "01",
      cyber: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?",
    }

    // Color schemes
    const colorSchemes = {
      neon: {
        primary: "#00FF9C",
        secondary: "#00C97D",
        accent: "#4EE485",
        fade: "rgba(0, 255, 156, 0.8)",
      },
      blue: {
        primary: "#00BFFF",
        secondary: "#0080FF",
        accent: "#40E0D0",
        fade: "rgba(0, 191, 255, 0.8)",
      },
      green: {
        primary: "#00FF00",
        secondary: "#00CC00",
        accent: "#66FF66",
        fade: "rgba(0, 255, 0, 0.8)",
      },
      custom: {
        primary: customColor || "#00FF9C",
        secondary: customColor || "#00FF9C",
        accent: customColor || "#00FF9C",
        fade: `rgba(0, 255, 156, 0.8)`,
      },
    }

    const chars = characterSets[variant]
    const colors = colorSchemes[color]
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    // Intensity settings
    const intensitySettings = {
      subtle: { opacity: 0.3, speed: 60, trailLength: 0.1, glowChance: 0.02 },
      normal: { opacity: 0.5, speed: 40, trailLength: 0.05, glowChance: 0.05 },
      intense: { opacity: 0.8, speed: 20, trailLength: 0.02, glowChance: 0.1 },
    }

    const settings = intensitySettings[intensity]
    let lastTime = 0

    const draw = (currentTime: number) => {
      if (currentTime - lastTime < settings.speed) {
        requestAnimationFrame(draw)
        return
      }

      lastTime = currentTime

      // Create trailing effect
      ctx.fillStyle = `rgba(0, 0, 0, ${settings.trailLength})`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px 'Courier New', monospace`
      ctx.textAlign = "center"

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize + fontSize / 2
        const y = drops[i] * fontSize

        // Determine character appearance
        const isGlowing = Math.random() < settings.glowChance
        const isAccent = Math.random() < 0.1
        const isFading = drops[i] > canvas.height / fontSize - 10

        if (isGlowing) {
          ctx.shadowColor = colors.primary
          ctx.shadowBlur = 15
          ctx.fillStyle = colors.primary
        } else if (isAccent) {
          ctx.shadowColor = colors.accent
          ctx.shadowBlur = 8
          ctx.fillStyle = colors.accent
        } else {
          ctx.shadowBlur = 0
          const opacity = isFading ? (canvas.height / fontSize - drops[i]) / 10 : settings.opacity
          ctx.fillStyle = `rgba(0, 255, 156, ${opacity * (Math.random() * 0.5 + 0.5)})`
        }

        ctx.fillText(char, x, y)

        // Reset shadow
        ctx.shadowBlur = 0

        // Move drop down
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      requestAnimationFrame(draw)
    }

    const animationId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [variant, intensity, color, customColor])

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed inset-0 pointer-events-none z-0", className)}
      style={{ background: "transparent" }}
    />
  )
}
