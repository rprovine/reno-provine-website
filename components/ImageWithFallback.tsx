'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  fallbackSrc?: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function ImageWithFallback({
  src,
  fallbackSrc = '/images/placeholder.svg',
  alt,
  width,
  height,
  className,
  priority = false
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  return (
    <>
      {!hasError && width && height ? (
        <Image
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          className={className}
          priority={priority}
          onError={() => {
            setImgSrc(fallbackSrc)
            setHasError(true)
          }}
        />
      ) : (
        <div 
          className={`${className} bg-navy-900/50 flex items-center justify-center text-gray-500`}
          style={{ width, height }}
        >
          <span className="text-sm">{alt}</span>
        </div>
      )}
    </>
  )
}