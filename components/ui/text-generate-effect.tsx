"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextGenerateEffectProps {
  words: string
  className?: string
  filter?: boolean
  duration?: number
}

export function TextGenerateEffect({ words, className, filter = true, duration = 0.5 }: TextGenerateEffectProps) {
  const [scope, setScope] = useState<HTMLDivElement | null>(null)
  const wordsArray = words.split(" ")

  useEffect(() => {
    if (scope) {
      const elements = scope.querySelectorAll(".word")
      elements.forEach((el, idx) => {
        setTimeout(() => {
          el.classList.remove("opacity-0")
          if (filter) {
            el.classList.remove("blur-xs")
          }
        }, idx * 200)
      })
    }
  }, [scope, filter])

  const renderWords = () => {
    return (
      <motion.div ref={setScope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`word opacity-0 ${filter ? "blur-xs" : ""} transition-all duration-500`}
            >
              {word}{" "}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-text-secondary leading-relaxed tracking-wide">{renderWords()}</div>
      </div>
    </div>
  )
}
