"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode
  animationType?: "pulse" | "bounce" | "shake" | "glow" | "slide"
}

export function AnimatedButton({ children, className, animationType = "pulse", ...props }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getAnimationClass = () => {
    switch (animationType) {
      case "pulse":
        return "hover:animate-pulse"
      case "bounce":
        return "hover:animate-bounce"
      case "shake":
        return "hover:animate-shake"
      case "glow":
        return "hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-300"
      case "slide":
        return "relative overflow-hidden group"
      default:
        return "hover:animate-pulse"
    }
  }

  return (
    <Button
      className={cn(
        getAnimationClass(),
        "transition-all duration-300 transform hover:scale-105",
        animationType === "slide" && "relative overflow-hidden",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {animationType === "slide" && (
        <span
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent",
            "transform -skew-x-12 transition-transform duration-700",
            isHovered ? "translate-x-full" : "-translate-x-full",
          )}
        />
      )}
      <span className="relative z-10">{children}</span>
    </Button>
  )
}
