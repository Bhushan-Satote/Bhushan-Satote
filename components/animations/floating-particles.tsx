"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speed: number
}

interface FloatingParticlesProps {
  count?: number
  className?: string
}

export function FloatingParticles({ count = 20, className }: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = []
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 2 + 1,
      })
    }
    setParticles(newParticles)
  }, [count])

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-[#00FF9C] floating-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.speed * 3}s`,
            animationDelay: `${particle.id * 0.2}s`,
            boxShadow: `0 0 ${particle.size * 2}px #00FF9C`,
          }}
        />
      ))}
    </div>
  )
}
