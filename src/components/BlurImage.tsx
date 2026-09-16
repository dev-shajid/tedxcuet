'use client'

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'

export default function BlurImage({
  src,
  alt,
  className = '',
  id = 0,
  width = 1200,
  height = 900,
  quality = 75,
  priority = false
}: {
  src: string,
  alt?: string,
  className?: string,
  id?: number,
  width?: number,
  height?: number,
  quality?: number,
  priority?: boolean
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [inView, setInView] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  // Create a color-based placeholder
  const generatePlaceholder = () => {
    // Create a simple color based on the src
    const hash = src.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0)
    const hue = hash % 360

    // Create a tiny, blurry image as base64
    // This is more effective than SVG for Next.js blur placeholder
    return `data:image/svg+xml;base64,${Buffer.from(
      `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="hsl(${hue}, 40%, 30%)"/>
        <filter id="b"><feGaussianBlur stdDeviation="20"/></filter>
        <rect width="100%" height="100%" fill="hsl(${hue}, 40%, 30%)" filter="url(#b)"/>
      </svg>`
    ).toString('base64')}`
  }

  // Set up intersection observer to detect when image comes into view
  useEffect(() => {
    // Skip for priority images
    if (priority) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setInView(true)
          // Once in view, no need to observe anymore
          if (imageRef.current) {
            observer.unobserve(imageRef.current)
          }
        }
      },
      {
        rootMargin: '200px', // Start loading a bit before it comes into view
        threshold: 0.1
      }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [priority])

  // Handle image load completion with staggered reveal
  const handleImageLoad = () => {
    // Add a small delay based on the id for staggered effect
    setTimeout(() => {
      setIsLoading(false)
    }, id * 200)
  }

  return (
    <div ref={imageRef} className="w-full overflow-hidden">
      {(inView || priority) ? (
        <div className="relative w-full h-full">
          {/* Show shimmer effect while loading */}
          {isLoading && (
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                        animate-shimmer"
              style={{
                backgroundSize: '200% 100%',
                backgroundPosition: '-100% 0',
                animation: 'shimmer 1.5s infinite'
              }}
            />
          )}

          <Image
            src={src || "/placeholder.svg"}
            alt={alt || 'Image'}
            width={width}
            height={height}
            quality={quality}
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
            className={`
              transition-all duration-700 ease-in-out
              ${isLoading ? 'scale-110 blur-2xl' : 'scale-100 blur-0'}
              ${className}
            `}
            onLoadingComplete={handleImageLoad}
            placeholder="blur"
            blurDataURL={generatePlaceholder()}
          />
        </div>
      ) : (
        // Placeholder while not in view
        <div
          className={`w-full h-full bg-gray-800 animate-pulse ${className}`}
          style={{
            aspectRatio: `${width}/${height}`,
            backgroundImage: `url("${generatePlaceholder()}")`,
            backgroundSize: 'cover'
          }}
        />
      )}
    </div>
  )
}
