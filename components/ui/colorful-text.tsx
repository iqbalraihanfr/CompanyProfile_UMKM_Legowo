"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ColorfulTextProps {
  text: string
  className?: string
}

export function ColorfulText({ text, className }: ColorfulTextProps) {
  const words = text.split(" ")

  return (
    <div className={cn("inline-block", className)}>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: idx * 0.1,
          }}
        >
          <span
            className="bg-linear-to-r from-accent-primary via-accent-light to-accent-hover bg-clip-text text-transparent animate-pulse"
            style={{
              animationDelay: `${idx * 0.1}s`,
              animationDuration: "2s",
            }}
          >
            {word}
          </span>
        </motion.span>
      ))}
    </div>
  )
}
