"use client"

import { useState, useEffect, Fragment } from "react"
import { cn } from "@/lib/utils"

interface TextPart {
  text: string
  className?: string
}

interface TypingTextProps {
  parts: TextPart[]
  speed?: number
  cursorBlinkSpeed?: number
  active?: boolean
  cursorClassName?: string
}

export default function TypingText({
  parts,
  speed = 100,
  cursorBlinkSpeed = 500,
  active = true,
  cursorClassName,
}: TypingTextProps) {
  const [typedCharsCount, setTypedCharsCount] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (active) {
      setTypedCharsCount(0)
      setIsTypingComplete(false)
      setShowCursor(true)
    }
  }, [active])

  useEffect(() => {
    if (!active || isTypingComplete) {
      return
    }

    const totalChars = parts.reduce((sum, part) => sum + part.text.length, 0)

    if (typedCharsCount < totalChars) {
      const typingInterval = setInterval(() => {
        setTypedCharsCount((prev) => prev + 1)
      }, speed)
      return () => clearInterval(typingInterval)
    } else {
      setIsTypingComplete(true)
    }
  }, [typedCharsCount, parts, speed, active, isTypingComplete])

  useEffect(() => {
    if (isTypingComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, cursorBlinkSpeed)
      return () => clearInterval(cursorInterval)
    } else {
      setShowCursor(true)
    }
  }, [isTypingComplete, cursorBlinkSpeed])

  let currentChars = 0
  const renderedParts = parts.map((part, partIndex) => {
    const startChar = currentChars
    const endChar = currentChars + part.text.length
    currentChars = endChar

    if (typedCharsCount <= startChar) {
      return <Fragment key={partIndex}></Fragment>
    } else if (typedCharsCount >= endChar) {
      return (
        <span key={partIndex} className={part.className}>
          {part.text}
        </span>
      )
    } else {
      const charsToDisplay = typedCharsCount - startChar
      return (
        <span key={partIndex} className={part.className}>
          {part.text.substring(0, charsToDisplay)}
        </span>
      )
    }
  })

  return (
    <>
      {renderedParts}
      {active && (
        <span
          className={cn("blinking-cursor", cursorClassName)}
          style={{ visibility: showCursor ? "visible" : "hidden" }}
        >
          |
        </span>
      )}
    </>
  )
}
