"use client"

import type React from "react"

import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function StaggerContainer({ children, className, staggerDelay = 0.1, once = false }: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: once,
    margin: "-50px 0px -50px 0px",
  })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [isInView, controls, once])

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 30,
}: {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  distance?: number
}) {
  const getVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "down":
        return {
          hidden: { y: -distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "left":
        return {
          hidden: { x: distance, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "right":
        return {
          hidden: { x: -distance, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      default:
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
    }
  }

  return (
    <motion.div className={cn(className)} variants={getVariants()} transition={{ duration: 0.6, ease: "easeOut" }}>
      {children}
    </motion.div>
  )
}
