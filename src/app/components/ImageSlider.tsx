import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
  interval?: number; // Interval time in milliseconds
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 6000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesPerSlide = 4;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(slideInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - imagesPerSlide ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - imagesPerSlide : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[60vh]">
      <div className="overflow-hidden relative h-full">
        <div
          className="flex transition-transform ease-out duration-300 h-full gap-1"
          style={{ transform: `translateX(-${currentIndex * (100 / imagesPerSlide)}%)`}}
        >
          {images.map((src, index) => (
            <div key={index} className="min-w-[25%] h-full relative ">
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill
                priority={index < imagesPerSlide} 
                sizes="25vw"
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-md"
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
        {Array(images.length - imagesPerSlide + 1).fill(0).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-10 rounded-full ${
              index === currentIndex
                ? 'bg-white bg-opacity-90'
                : 'bg-gray-400 bg-opacity-60 hover:bg-white'
            } focus:outline-none`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
