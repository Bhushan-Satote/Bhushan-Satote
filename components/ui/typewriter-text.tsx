"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TypewriterTextProps {
  texts: string[]
  className?: string
  speed?: number
  deleteSpeed?: number
  delayBetween?: number
}

export function TypewriterText({
  texts,
  className,
  speed = 100,
  deleteSpeed = 50,
  delayBetween = 2000,
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex]

        if (!isDeleting) {
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.substring(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), delayBetween)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(fullText.substring(0, currentText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delayBetween])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={cn("inline-block", className)}>
      {currentText}
      <span className={cn("ml-1", showCursor ? "opacity-100" : "opacity-0")}>|</span>
    </span>
  )
}
