"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  intensity?: "low" | "medium" | "high"
  direction?: "vertical" | "horizontal" | "both"
}

export function FloatingElement({
  children,
  className,
  intensity = "medium",
  direction = "vertical",
}: FloatingElementProps) {
  const getAnimationClass = () => {
    const baseClass = "animate-float"
    const intensityClass =
      intensity === "low" ? "animate-float-slow" : intensity === "high" ? "animate-float-fast" : "animate-float"

    return `${baseClass} ${intensityClass}`
  }

  return <div className={cn(getAnimationClass(), className)}>{children}</div>
}
