"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface RadialGlowProps {
  children: React.ReactNode
  className?: string
  intensity?: "low" | "medium" | "high"
  animated?: boolean
}

export function RadialGlow({ children, className, intensity = "medium", animated = true }: RadialGlowProps) {
  const getIntensityClasses = () => {
    switch (intensity) {
      case "low":
        return "bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,156,0.1)_0%,rgba(0,201,125,0.05)_25%,transparent_50%)]"
      case "medium":
        return "bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,156,0.15)_0%,rgba(0,201,125,0.1)_25%,rgba(78,228,133,0.05)_50%,transparent_70%)]"
      case "high":
        return "bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,156,0.2)_0%,rgba(0,201,125,0.15)_25%,rgba(78,228,133,0.1)_50%,transparent_70%)]"
      default:
        return "bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,156,0.15)_0%,rgba(0,201,125,0.1)_25%,rgba(78,228,133,0.05)_50%,transparent_70%)]"
    }
  }

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "absolute inset-0 pointer-events-none",
          getIntensityClasses(),
          animated && "radial-glow-animation",
        )}
      />
      {children}
    </div>
  )
}
