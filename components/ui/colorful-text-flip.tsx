"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ColorfulTextFlipProps {
    words: string[]
    className?: string
    interval?: number
}

export const ColorfulTextFlip = ({
    words,
    className,
    interval = 3000,
}: ColorfulTextFlipProps) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length)
        }, interval)
        return () => clearInterval(timer)
    }, [words.length, interval])

    return (
        <span className="bg-linear-to-r from-accent-primary via-accent-light to-accent-hover bg-clip-text text-transparent animate-pulse">
            {words[index]}
        </span>

    )
}
