"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface CodeRainProps {
  className?: string
  density?: "sparse" | "normal" | "dense"
  codeType?: "binary" | "hex" | "javascript" | "mixed"
}

export function CodeRain({ className, density = "normal", codeType = "mixed" }: CodeRainProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [columns, setColumns] = useState<number>(0)

  const getCodeSnippets = () => {
    switch (codeType) {
      case "binary":
        return ["0", "1"]
      case "hex":
        return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
      case "javascript":
        return [
          "const",
          "let",
          "var",
          "function",
          "=>",
          "if",
          "else",
          "for",
          "while",
          "return",
          "true",
          "false",
          "null",
          "undefined",
          "{",
          "}",
          "[",
          "]",
          "(",
          ")",
          ";",
          ".",
          "=",
          "+",
          "-",
          "*",
          "/",
          "&&",
          "||",
          "!",
          "===",
          "!==",
        ]
      case "mixed":
        return [
          "0",
          "1",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "const",
          "let",
          "=>",
          "if",
          "for",
          "{",
          "}",
          "[",
          "]",
          "(",
          ")",
          ";",
          ".",
          "=",
          "+",
          "-",
          "*",
          "/",
          "&&",
          "||",
          "!",
          "true",
          "false",
          "null",
          "React",
          "Next",
          "JS",
          "TS",
          "CSS",
          "HTML",
          "API",
          "JSON",
          "HTTP",
          "GET",
          "POST",
          "PUT",
          "DELETE",
        ]
      default:
        return ["0", "1"]
    }
  }

  const getDensitySettings = () => {
    switch (density) {
      case "sparse":
        return { columnWidth: 60, dropChance: 0.005 }
      case "normal":
        return { columnWidth: 40, dropChance: 0.01 }
      case "dense":
        return { columnWidth: 25, dropChance: 0.02 }
      default:
        return { columnWidth: 40, dropChance: 0.01 }
    }
  }

  useEffect(() => {
    const updateColumns = () => {
      const { columnWidth } = getDensitySettings()
      setColumns(Math.floor(window.innerWidth / columnWidth))
    }

    updateColumns()
    window.addEventListener("resize", updateColumns)
    return () => window.removeEventListener("resize", updateColumns)
  }, [density])

  useEffect(() => {
    if (!containerRef.current || columns === 0) return

    const container = containerRef.current
    const codeSnippets = getCodeSnippets()
    const { dropChance } = getDensitySettings()

    // Clear existing drops
    container.innerHTML = ""

    const createDrop = (columnIndex: number) => {
      const drop = document.createElement("div")
      drop.className = "absolute text-xs font-mono pointer-events-none select-none"
      drop.style.left = `${(columnIndex * 100) / columns}%`
      drop.style.top = "-20px"
      drop.style.color = "#00FF9C"
      drop.style.opacity = String(Math.random() * 0.7 + 0.3)
      drop.style.fontSize = `${Math.random() * 4 + 10}px`
      drop.style.fontWeight = Math.random() > 0.7 ? "bold" : "normal"

      // Add glow effect randomly
      if (Math.random() > 0.8) {
        drop.style.textShadow = "0 0 10px #00FF9C, 0 0 20px #00FF9C"
        drop.style.color = "#FFFFFF"
      } else if (Math.random() > 0.9) {
        drop.style.textShadow = "0 0 5px #00C97D"
        drop.style.color = "#00C97D"
      }

      drop.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]

      container.appendChild(drop)

      // Animate the drop
      const duration = Math.random() * 3000 + 2000 // 2-5 seconds
      const startTime = Date.now()

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = elapsed / duration

        if (progress >= 1) {
          drop.remove()
          return
        }

        const y = progress * (window.innerHeight + 40)
        drop.style.transform = `translateY(${y}px)`

        // Fade out near the bottom
        if (progress > 0.8) {
          drop.style.opacity = String((1 - progress) * 5 * (Math.random() * 0.7 + 0.3))
        }

        requestAnimationFrame(animate)
      }

      requestAnimationFrame(animate)
    }

    const interval = setInterval(() => {
      for (let i = 0; i < columns; i++) {
        if (Math.random() < dropChance) {
          createDrop(i)
        }
      }
    }, 100)

    return () => {
      clearInterval(interval)
      container.innerHTML = ""
    }
  }, [columns, density, codeType])

  return <div ref={containerRef} className={cn("fixed inset-0 pointer-events-none z-0 overflow-hidden", className)} />
}
