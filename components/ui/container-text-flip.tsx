"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface ContainerTextFlipProps {
  words: string[]
  className?: string
  duration?: number
}

export function ContainerTextFlip({ words, className, duration = 3000 }: ContainerTextFlipProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    return () => clearInterval(interval)
  }, [words.length, duration])

  return (
    <div className={cn("relative inline-block", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -20, rotateX: 90 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="block"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
