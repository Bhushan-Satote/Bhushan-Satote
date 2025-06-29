"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface AnimatedCardProps extends React.ComponentProps<typeof Card> {
  children: React.ReactNode
  hoverEffect?: "lift" | "tilt" | "glow" | "scale" | "rotate"
  glowColor?: string
}

export function AnimatedCard({
  children,
  className,
  hoverEffect = "lift",
  glowColor = "primary",
  ...props
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getHoverClass = () => {
    switch (hoverEffect) {
      case "lift":
        return "hover:-translate-y-2 hover:shadow-xl"
      case "tilt":
        return "hover:rotate-1 hover:scale-105"
      case "glow":
        return `hover:shadow-lg hover:shadow-${glowColor}/30`
      case "scale":
        return "hover:scale-105"
      case "rotate":
        return "hover:rotate-2"
      default:
        return "hover:-translate-y-2 hover:shadow-xl"
    }
  }

  return (
    <Card
      className={cn("transition-all duration-300 cursor-pointer", getHoverClass(), className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </Card>
  )
}
