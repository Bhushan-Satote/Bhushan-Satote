"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface DeveloperAvatarProps {
  className?: string
  animated?: boolean
}

export function DeveloperAvatar({ className, animated = true }: DeveloperAvatarProps) {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (!animated) return

    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [animated])

  const skills = [
    { text: "<Full Stack/>", angle: 0, radius: 160, size: "text-xs" },
    { text: "React Master", angle: 60, radius: 180, size: "text-xs" },
    { text: "{Developer}", angle: 120, radius: 170, size: "text-xs" },
    { text: "UI/UX Designer", angle: 180, radius: 190, size: "text-xs" },
    { text: "async_master()", angle: 240, radius: 165, size: "text-xs" },
    { text: "Full Stack Ninja", angle: 300, radius: 175, size: "text-xs" },
  ]

  return (
    <div className={cn("relative w-[400px] h-[400px] flex items-center justify-center", className)}>
      {/* Outer Animated Ring */}
      <div
        className="absolute inset-0 rounded-full border border-neon/30"
        style={{
          width: "380px",
          height: "380px",
          transform: `rotate(${rotation}deg)`,
          background:
            "conic-gradient(from 0deg, transparent, rgba(0,191,255,0.1), transparent, rgba(138,43,226,0.1), transparent)",
        }}
      />

      {/* Middle Ring */}
      <div
        className="absolute inset-0 rounded-full border border-neon-accent/20"
        style={{
          width: "320px",
          height: "320px",
          left: "40px",
          top: "40px",
          transform: `rotate(${-rotation * 0.7}deg)`,
          background: "conic-gradient(from 90deg, transparent, rgba(64,224,208,0.1), transparent)",
        }}
      />

      {/* Inner Ring */}
      <div
        className="absolute inset-0 rounded-full border border-neon-secondary/25"
        style={{
          width: "260px",
          height: "260px",
          left: "70px",
          top: "70px",
          transform: `rotate(${rotation * 1.2}deg)`,
          background: "conic-gradient(from 180deg, transparent, rgba(0,128,255,0.1), transparent)",
        }}
      />

      {/* Floating Skill Labels */}
      {skills.map((skill, index) => {
        const angle = (skill.angle + rotation * 0.3) * (Math.PI / 180)
        const x = Math.round(Math.cos(angle) * skill.radius * 10) / 10;
        const y = Math.round(Math.sin(angle) * skill.radius * 10) / 10;

        return (
          <div
            key={skill.text}
            className={cn(
              "absolute font-mono text-neon bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neon/40 whitespace-nowrap shadow-lg",
              skill.size,
            )}
            style={{
              transform: `translate(${x}px, ${y}px)`,
              animation: `float 4s ease-in-out infinite`,
              animationDelay: `${index * 0.7}s`,
              boxShadow: "0 0 15px rgba(0,191,255,0.3)",
            }}
          >
            {skill.text}
          </div>
        )
      })}

      {/* Central Avatar Container */}
      <div className="relative z-10 w-36 h-36 rounded-full overflow-hidden border-4 border-neon shadow-[0_0_40px_rgba(0,191,255,0.6)]">
        {/* IT Professional SVG Avatar */}
        <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative">
          <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none">
            {/* Desk */}
            <rect x="20" y="90" width="80" height="12" rx="3" fill="#222E3A" />
            {/* Laptop */}
            <rect x="50" y="65" width="32" height="18" rx="2" fill="#E2E8F0" stroke="#00BFFF" strokeWidth="2" />
            <rect x="54" y="69" width="24" height="10" rx="1" fill="#CBD5E1" />
            {/* Person */}
            <ellipse cx="66" cy="60" rx="10" ry="13" fill="#FCD7B6" />
            {/* Head */}
            <circle cx="66" cy="48" r="8" fill="#FCD7B6" />
            {/* Hair */}
            <ellipse cx="66" cy="45" rx="8" ry="5" fill="#2D3748" />
            {/* Shirt */}
            <rect x="58" y="68" width="16" height="10" rx="3" fill="#3B82F6" />
            {/* Arms */}
            <rect x="56" y="70" width="4" height="10" rx="2" fill="#FCD7B6" />
            <rect x="76" y="70" width="4" height="10" rx="2" fill="#FCD7B6" />
            {/* Glasses */}
            <ellipse cx="63.5" cy="50" rx="2" ry="1.2" fill="#fff" stroke="#00BFFF" strokeWidth="0.7" />
            <ellipse cx="68.5" cy="50" rx="2" ry="1.2" fill="#fff" stroke="#00BFFF" strokeWidth="0.7" />
            <rect x="65.5" y="50" width="1" height="0.5" fill="#00BFFF" />
          </svg>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-8 left-12 w-2 h-2 bg-neon rounded-full animate-pulse opacity-60" />
      <div
        className="absolute top-16 right-20 w-1.5 h-1.5 bg-neon-accent rounded-full animate-pulse opacity-50"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-20 left-16 w-1 h-1 bg-neon-secondary rounded-full animate-pulse opacity-70"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-12 right-14 w-1.5 h-1.5 bg-neon rounded-full animate-pulse opacity-40"
        style={{ animationDelay: "0.5s" }}
      />
    </div>
  )
}
