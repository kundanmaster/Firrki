import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
  interval?: number; // Interval time in milliseconds
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 6000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[60vh]">
      <div className="overflow-hidden relative h-full">
        <div
          className="flex transition-transform ease-out duration-300 h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="min-w-full h-full relative">
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill
                priority={index === 0} // Add priority to the first image
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                className="rounded-none"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 w-24 h-full transform -translate-y-1/2 text-white bg-black bg-opacity-5 p-2 hover:bg-opacity-25 focus:outline-none"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 w-24 h-full right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-5 p-2 hover:bg-opacity-25 focus:outline-none"
      >
        &#10095;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-24 rounded-full ${
              index === currentIndex
                ? 'bg-white bg-opacity-40'
                : 'bg-gray-400 bg-opacity-25 hover:bg-white'
            } focus:outline-none`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
