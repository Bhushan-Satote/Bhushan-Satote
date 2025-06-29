"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface MatrixRainProps {
  className?: string
  intensity?: "low" | "medium" | "high"
  speed?: "slow" | "medium" | "fast"
  characters?: string
  columns?: number
}

export function MatrixRain({
  className,
  intensity = "medium",
  speed = "medium",
  characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  columns,
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || dimensions.width === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const fontSize = 14
    const cols = columns || Math.floor(dimensions.width / fontSize)
    const drops: number[] = []

    // Initialize drops
    for (let i = 0; i < cols; i++) {
      drops[i] = Math.random() * -100
    }

    const getIntensitySettings = () => {
      switch (intensity) {
        case "low":
          return { opacity: 0.3, trailLength: 0.08 }
        case "medium":
          return { opacity: 0.5, trailLength: 0.05 }
        case "high":
          return { opacity: 0.7, trailLength: 0.03 }
        default:
          return { opacity: 0.5, trailLength: 0.05 }
      }
    }

    const getSpeedSettings = () => {
      switch (speed) {
        case "slow":
          return 50
        case "medium":
          return 30
        case "fast":
          return 15
        default:
          return 30
      }
    }

    const { opacity, trailLength } = getIntensitySettings()
    const frameDelay = getSpeedSettings()
    let lastTime = 0

    const draw = (currentTime: number) => {
      if (currentTime - lastTime < frameDelay) {
        animationRef.current = requestAnimationFrame(draw)
        return
      }

      lastTime = currentTime

      // Create trailing effect
      ctx.fillStyle = `rgba(0, 0, 0, ${trailLength})`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set text properties
      ctx.fillStyle = `rgba(0, 255, 156, ${opacity})`
      ctx.font = `${fontSize}px 'Courier New', monospace`
      ctx.textAlign = "center"

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)]
        const x = i * fontSize + fontSize / 2
        const y = drops[i] * fontSize

        // Add glow effect for some characters
        if (Math.random() > 0.95) {
          ctx.shadowColor = "#00FF9C"
          ctx.shadowBlur = 10
          ctx.fillStyle = "#00FF9C"
        } else if (Math.random() > 0.9) {
          ctx.shadowColor = "#00C97D"
          ctx.shadowBlur = 5
          ctx.fillStyle = "#00C97D"
        } else {
          ctx.shadowBlur = 0
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

      animationRef.current = requestAnimationFrame(draw)
    }

    animationRef.current = requestAnimationFrame(draw)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, intensity, speed, characters, columns])

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed inset-0 pointer-events-none z-0", className)}
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
    />
  )
}
