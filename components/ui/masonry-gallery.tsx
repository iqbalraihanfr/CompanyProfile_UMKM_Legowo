"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MasonryImage {
  id: string
  src: string
  title: string
  category: string
  height: number
  description?: string
}

interface MasonryGalleryProps {
  images: MasonryImage[]
  className?: string
  onImageClick?: (image: MasonryImage, index: number) => void
}

export function MasonryGallery({ images, className, onImageClick }: MasonryGalleryProps) {
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 768) {
        setColumns(1)
      } else if (window.innerWidth < 1024) {
        setColumns(2)
      } else {
        setColumns(3)
      }
    }

    updateColumns()
    window.addEventListener("resize", updateColumns)
    return () => window.removeEventListener("resize", updateColumns)
  }, [])

  const getColumnImages = (columnIndex: number) => {
    return images.filter((_, index) => index % columns === columnIndex)
  }

  return (
    <div className={cn("flex gap-6", className)}>
      {Array.from({ length: columns }, (_, columnIndex) => (
        <div key={columnIndex} className="flex-1 space-y-6">
          {getColumnImages(columnIndex).map((image, index) => {
            const originalIndex = images.findIndex((img) => img.id === image.id)
            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: originalIndex * 0.1 }}
                className="group cursor-pointer"
                onClick={() => onImageClick?.(image, originalIndex)}
              >
                <div className="relative overflow-hidden rounded-xl bg-background-secondary border border-border-primary hover:border-accent-primary/30 transition-all duration-300">
                  <div style={{ height: `${image.height}px` }} className="overflow-hidden">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-heading-md font-semibold text-white mb-1">{image.title}</h3>
                    <p className="text-body-sm text-gray-300">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
