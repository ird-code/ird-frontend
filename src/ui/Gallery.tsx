'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';


const galleryImages = [
  { src: '/assets/images/image1.png', alt: 'Image 1' },
  { src: '/assets/images/image2.png', alt: 'Image 2' },
  { src: '/assets/images/image3.png', alt: 'Image 3' },
  { src: '/assets/images/image4.png', alt: 'Image 4' },
  { src: '/assets/images/image5.png', alt: 'Image 5' },
  { src: '/assets/images/image6.png', alt: 'Image 6' },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;

    // Prevent navigating out of bounds
    if (direction === 'next' && selectedImage === galleryImages.length - 1) return;
    if (direction === 'prev' && selectedImage === 0) return;

    const newIndex = direction === 'next' 
      ? selectedImage + 1
      : selectedImage - 1;
    
    setSelectedImage(newIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        switch (e.key) {
          case 'Escape':
            closeImage();
            break;
          case 'ArrowRight':
            navigateImage('next');
            break;
          case 'ArrowLeft':
            navigateImage('prev');
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className="relative w-full aspect-square cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => openImage(index)}
          >
            <Image 
              src={image.src} 
              alt={image.alt} 
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeImage}
        >
          <div 
            className="relative max-w-[90%] max-h-[90%]"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeImage} 
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>

            {/* Left Navigation Arrow */}
            <button 
              onClick={() => navigateImage('prev')}
              className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 
                ${selectedImage === 0 ? 'text-gray-600' : 'text-white hover:text-gray-300'}`}
            >
              <ChevronLeft size={48} />
            </button>

            {/* Right Navigation Arrow */}
            <button 
              onClick={() => navigateImage('next')}
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-10
                ${selectedImage === galleryImages.length - 1 ? 'text-gray-600' : 'text-white hover:text-gray-300'}`}
            >
              <ChevronRight size={48} />
            </button>

            {/* Selected Image */}
            <Image 
              src={galleryImages[selectedImage].src} 
              alt={galleryImages[selectedImage].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}