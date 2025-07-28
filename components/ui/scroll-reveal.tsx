"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  duration?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 50,
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const hasAnimated = useRef(false)
  const isInView = useInView(ref, {
    once: false, // We'll handle the "once" logic manually
    margin: "-100px 0px -100px 0px", // Trigger when element is 100px into viewport
  })
  const controls = useAnimation()

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0 }
      case "down":
        return { y: -distance, opacity: 0 }
      case "left":
        return { x: distance, opacity: 0 }
      case "right":
        return { x: -distance, opacity: 0 }
      default:
        return { y: distance, opacity: 0 }
    }
  }

  const getAnimatePosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { y: 0, opacity: 1 }
      case "left":
      case "right":
        return { x: 0, opacity: 1 }
      default:
        return { y: 0, opacity: 1 }
    }
  }

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      controls.start(getAnimatePosition())
    }
    // No reverse animation when scrolling up
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={getInitialPosition()}
      animate={controls}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}
