"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface NeonCardProps extends React.ComponentProps<typeof Card> {
  children: React.ReactNode
  glowOnHover?: boolean
  intensity?: "low" | "medium" | "high"
}

export function NeonCard({ children, className, glowOnHover = true, intensity = "medium", ...props }: NeonCardProps) {
  const getIntensityClasses = () => {
    if (!glowOnHover) return ""

    switch (intensity) {
      case "low":
        return "hover:shadow-[0_0_15px_rgba(0,255,156,0.2)] hover:border-[#00FF9C]"
      case "medium":
        return "hover:shadow-[0_0_25px_rgba(0,255,156,0.3)] hover:border-[#00FF9C]"
      case "high":
        return "hover:shadow-[0_0_35px_rgba(0,255,156,0.4)] hover:border-[#00FF9C]"
      default:
        return "hover:shadow-[0_0_25px_rgba(0,255,156,0.3)] hover:border-[#00FF9C]"
    }
  }

  return (
    <Card className={cn("neon-card", getIntensityClasses(), className)} {...props}>
      {children}
    </Card>
  )
}
