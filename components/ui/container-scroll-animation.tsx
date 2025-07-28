"use client"

import type React from "react"
import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ContainerScrollProps {
  children: React.ReactNode
  className?: string
}

export function ContainerScrollAnimation({ children, className }: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y, opacity }} className="relative z-10">
        {children}
      </motion.div>
    </div>
  )
}
