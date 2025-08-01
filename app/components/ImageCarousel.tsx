import React, { useState, useEffect } from "react";

// IMAGE CAROUSEL
interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;     //Optional
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

const TIMER = 3500;

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
}) => {
	// Current image
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

	// Auto advance
  useEffect(() => {
    if (isPaused || images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, TIMER);

		// Cleanup: stop the timer
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, images.length]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

	// No images
  if (images.length === 0) {
    return (
      <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <p>No images to display</p>
      </div>
    );
  }

  // Single image - no carousel needed
  if (images.length === 1) {
    return (
      <div className="relative rounded-lg bg-gray-50 dark:bg-gray-900 p-4">
        <img src={images[0].src} alt={images[0].alt} className="w-full h-auto rounded-lg mx-auto" />
        {images[0].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2 rounded-b-lg">
            {images[0].caption}
          </div>
        )}
      </div>
    );
  }

  // Multiple images - full carousel
  return (
    <div 
      className="relative aspect-video overflow-hidden rounded-lg group bg-gray-50 dark:bg-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Image */}
      <div className="relative w-full h-full">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-contain transition-opacity duration-300"
        />
        
        {/* Caption */}
        {images[currentIndex].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-3">
            {images[currentIndex].caption}
          </div>
        )}
      </div>

      {/* Navigation arrows*/}
      <>
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Previous image"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Next image"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </>

      {/* Triple dots*/}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export type {CarouselImage, ImageCarouselProps};
