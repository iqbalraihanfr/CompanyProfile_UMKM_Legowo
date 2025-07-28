"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface GalleryImage {
  id: string
  src: string
  title: string
  category: string
  description?: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  className?: string
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length
    setCurrentIndex(nextIndex)
    setSelectedImage(images[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(prevIndex)
    setSelectedImage(images[prevIndex])
  }

  return (
    <>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => openLightbox(image, index)}
          >
            <div className="relative overflow-hidden rounded-xl bg-background-secondary border border-border-primary hover:border-accent-primary/30 transition-all duration-300">
              <div className="aspect-4/3 overflow-hidden">
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
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 rounded-lg p-4">
                <h3 className="text-heading-lg font-semibold text-white mb-1">{selectedImage.title}</h3>
                <p className="text-body-md text-gray-300 mb-2">{selectedImage.category}</p>
                {selectedImage.description && <p className="text-body-sm text-gray-400">{selectedImage.description}</p>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
