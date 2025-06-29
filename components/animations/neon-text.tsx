"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface NeonTextProps {
  children: React.ReactNode
  className?: string
  intensity?: "low" | "medium" | "high"
  animated?: boolean
  color?: "primary" | "secondary" | "accent"
}

export function NeonText({
  children,
  className,
  intensity = "medium",
  animated = false,
  color = "primary",
}: NeonTextProps) {
  const getColorClasses = () => {
    switch (color) {
      case "primary":
        return "text-[#00FF9C]"
      case "secondary":
        return "text-[#00C97D]"
      case "accent":
        return "text-[#4EE485]"
      default:
        return "text-[#00FF9C]"
    }
  }

  const getIntensityClasses = () => {
    const baseColor = color === "primary" ? "#00FF9C" : color === "secondary" ? "#00C97D" : "#4EE485"

    switch (intensity) {
      case "low":
        return `drop-shadow-[0_0_5px_${baseColor}]`
      case "medium":
        return `drop-shadow-[0_0_10px_${baseColor}] drop-shadow-[0_0_15px_${baseColor}]`
      case "high":
        return `drop-shadow-[0_0_15px_${baseColor}] drop-shadow-[0_0_25px_${baseColor}] drop-shadow-[0_0_35px_${baseColor}]`
      default:
        return `drop-shadow-[0_0_10px_${baseColor}] drop-shadow-[0_0_15px_${baseColor}]`
    }
  }

  return (
    <span className={cn(getColorClasses(), getIntensityClasses(), animated && "neon-pulse", className)}>
      {children}
    </span>
  )
}
