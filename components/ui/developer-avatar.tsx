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
        const x = Math.cos(angle) * skill.radius
        const y = Math.sin(angle) * skill.radius

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
        {/* Avatar Character */}
        <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative">
          {/* Character SVG */}
          <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none">
            {/* Head */}
            <circle cx="60" cy="45" r="25" fill="#FDBCB4" />

            {/* Hair */}
            <path
              d="M35 35 Q45 15 60 15 Q75 15 85 35 Q87 40 82 45 L78 40 Q73 35 60 35 Q47 35 42 40 L38 45 Q33 40 35 35"
              fill="#8B4513"
            />

            {/* Glasses Frame */}
            <g stroke="#00BFFF" strokeWidth="2.5" fill="rgba(0,191,255,0.15)">
              <circle cx="50" cy="42" r="9" />
              <circle cx="70" cy="42" r="9" />
              <line x1="59" y1="42" x2="61" y2="42" strokeWidth="2" />
              <line x1="41" y1="42" x2="37" y2="40" strokeWidth="2" />
              <line x1="79" y1="42" x2="83" y2="40" strokeWidth="2" />
            </g>

            {/* Eyes behind glasses */}
            <circle cx="50" cy="42" r="3" fill="#2C3E50" />
            <circle cx="70" cy="42" r="3" fill="#2C3E50" />
            <circle cx="51" cy="41" r="1" fill="white" />
            <circle cx="71" cy="41" r="1" fill="white" />

            {/* Nose */}
            <ellipse cx="60" cy="50" rx="2" ry="3" fill="#F4A460" />

            {/* Smile */}
            <path d="M52 58 Q60 65 68 58" stroke="#8B4513" strokeWidth="2.5" fill="none" strokeLinecap="round" />

            {/* Beard */}
            <path
              d="M42 60 Q47 75 60 75 Q73 75 78 60 Q80 70 75 75 Q70 80 60 80 Q50 80 45 75 Q40 70 42 60"
              fill="#8B4513"
            />

            {/* Shirt collar */}
            <path d="M35 85 L85 85 L85 120 L35 120 Z" fill="white" />
            <path d="M35 85 L85 85 L85 95 L35 95 Z" fill="#00BFFF" />

            {/* Tie */}
            <path d="M55 95 L65 95 L63 110 L57 110 Z" fill="#8A2BE2" />
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
