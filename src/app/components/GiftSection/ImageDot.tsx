"use client";
import Image from "next/image";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";

// Extend the Image interface to include hotspots
interface Hotspot {
  id: number;
  top: string; // position from top in percentage or px
  left: string; // position from left in percentage or px
  tooltip: string; // information about the hotspot
}

interface Image {
  id: number;
  src: string;
  alt: string;
  hotspots?: Hotspot[]; // optional property for hotspots
}

interface DesignProps {
  images: Image[];
  relatedImages: Record<number, Image[]>;
}

const Design: React.FC<DesignProps> = ({ images, relatedImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [relatedSlideIndex, setRelatedSlideIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setRelatedSlideIndex(0); // Reset related images slider
  };

  const handleBigPrevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleBigNextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
  };

  const handlePrevSlide = () => {
    setRelatedSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNextSlide = () => {
    const maxIndex = relatedImages[images[currentIndex].id]?.length - 1 || 0;
    setRelatedSlideIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handleHotspotClick = (hotspot: Hotspot) => {
    alert(`Hotspot clicked: ${hotspot.tooltip}`);
    // Here you can handle the click event, e.g., show more information or navigate to a product page.
  };

  return (
    <>
      {/* Previous Slide Button for Main Slider */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
        onClick={handleBigPrevSlide}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      <div className="flex relative">
        {/* Main Slider */}
        <div className="w-2/3 flex flex-col justify-center items-center">
          <div className="overflow-hidden relative h-[70vh]">
            <Image
              src={`/assets/${images[currentIndex].src}`}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />

            {/* Render Hotspots */}
            {images[currentIndex].hotspots?.map((hotspot) => (
              <button
                key={hotspot.id}
                className="absolute bg-white rounded-full w-4 h-4 shadow-lg transition-transform transform hover:scale-125"
                style={{
                  top: hotspot.top,
                  left: hotspot.left,
                }}
                onClick={() => handleHotspotClick(hotspot)}
              >
                <CiCirclePlus />
              </button>
            ))}

            {/* Other UI Elements */}
            <div className="absolute top-32 left-1/2 transform -translate-x-1/2 flex space-x-2 text-white shadow-lg duration-100 transition-transform">
              <button className="bg-white text-black rounded-full">
                <CiCirclePlus />
              </button>
            </div>
          </div>
          {/* Centered Dot Buttons */}
          <div className="flex space-x-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Related Images Slider */}
        <div className="w-1/3 ml-4 relative">
          <div className="flex overflow-hidden h-[70vh] justify-center items-center">
            <div className="flex flex-col space-y-4">
              {relatedImages[images[currentIndex].id]
                ?.slice(relatedSlideIndex, relatedSlideIndex + 1)
                .map((image) => (
                  <div key={image.id} className="relative">
                    <Image
                      src={`/assets/dashboard/${image.src}`}
                      alt={image.alt}
                      className="w-full h-auto"
                      width={1000}
                      height={1000}
                    />
                    <div className="absolute top-2 right-2 flex space-x-2 text-white">
                      <button>
                        <FiShoppingCart />
                      </button>
                      <button>
                        <IoMdHeartEmpty />
                      </button>
                    </div>
                    <div className="flex flex-col bottom-2 justify-center items-center left-2 text-black">
                      <p className="text-lg">Cushion</p>
                      <p>$100.00</p>
                      <button className="bg-primaryrose hover:bg-primaryrosedark p-2 text-white shadow-md">
                        View Product
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Previous Slide Button for Related Images Slider */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
            onClick={handlePrevSlide}
            disabled={relatedSlideIndex === 0}
          >
            &lt;
          </button>

          {/* Next Slide Button for Related Images Slider */}
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
            onClick={handleNextSlide}
            disabled={
              relatedSlideIndex >=
              (relatedImages[images[currentIndex].id]?.length || 0) - 1
            }
          >
            &gt;
          </button>
        </div>
      </div>
      {/* Next Slide Button for Main Slider */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
        onClick={handleBigNextSlide}
        disabled={currentIndex >= images.length - 1}
      >
        &gt;
      </button>
    </>
  );
};

export default Design;
