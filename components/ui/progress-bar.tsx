"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ProgressBarProps {
  value: number
  className?: string
  animated?: boolean
  showPercentage?: boolean
  color?: string
}

export function ProgressBar({
  value,
  className,
  animated = true,
  showPercentage = false,
  color = "primary",
}: ProgressBarProps) {
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setAnimatedValue(value)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setAnimatedValue(value)
    }
  }, [value, animated])

  return (
    <div className={cn("relative w-full", className)}>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className={cn(
            `h-full bg-${color} rounded-full transition-all duration-1000 ease-out`,
            animated && "animate-pulse",
          )}
          style={{ width: `${animatedValue}%` }}
        />
      </div>
      {showPercentage && (
        <span className="absolute right-0 top-0 text-xs text-muted-foreground mt-1">{animatedValue}%</span>
      )}
    </div>
  )
}
