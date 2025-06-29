"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NeonButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode
  variant?: "filled" | "outline" | "ghost"
  glowIntensity?: "low" | "medium" | "high"
}

export function NeonButton({
  children,
  className,
  variant = "filled",
  glowIntensity = "medium",
  ...props
}: NeonButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "filled":
        return "neon-button"
      case "outline":
        return "neon-button-outline"
      case "ghost":
        return "bg-transparent border-none text-neon hover:bg-neon-overlay hover:text-white"
      default:
        return "neon-button"
    }
  }

  const getGlowClasses = () => {
    switch (glowIntensity) {
      case "low":
        return "hover:shadow-[0_0_10px_rgba(0,255,156,0.3)]"
      case "medium":
        return "hover:shadow-[0_0_20px_rgba(0,255,156,0.5)]"
      case "high":
        return "hover:shadow-[0_0_30px_rgba(0,255,156,0.7)]"
      default:
        return "hover:shadow-[0_0_20px_rgba(0,255,156,0.5)]"
    }
  }

  return (
    <Button
      className={cn(
        getVariantClasses(),
        getGlowClasses(),
        "transition-all duration-300 transform hover:scale-105",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
