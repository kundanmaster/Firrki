"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Sample data for image details
interface ImageDetail {
  title: string;
  description: string;
}

const imageDetails: Record<string, ImageDetail> = {
  "assets/dashboard/master9.png": {
    title: "Main Image",
    description: "This is the main image description.",
  },
  "/assets/dashboard/master10.jpeg": {
    title: "Image 10",
    description: "Description for image 10.",
  },
  "/assets/dashboard/master11.jpeg": {
    title: "Image 11",
    description: "Description for image 11.",
  },
  "/assets/dashboard/master12.jpeg": {
    title: "Image 12",
    description: "Description for image 12.",
  },
  "/assets/dashboard/master13.jpeg": {
    title: "Image 13",
    description: "Description for image 13.",
  },
  "/assets/dashboard/master14.jpeg": {
    title: "Image 14",
    description: "Description for image 14.",
  },
  "/assets/dashboard/master15.jpeg": {
    title: "Image 15",
    description: "Description for image 15.",
  },
  "/assets/dashboard/master5.jpeg": {
    title: "Image 5",
    description: "Description for image 5.",
  },
  "/assets/dashboard/master6.jpeg": {
    title: "Image 6",
    description: "Description for image 6.",
  },
};

const LandingPage1: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const imageWrapperStyle: React.CSSProperties = {
    position: "relative",
    height: "16rem",
    width: "100%",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  };

  const largeImageStyle: React.CSSProperties = {
    position: "relative",
    height: "7rem",
    width: "100%",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  };

  const imageStyle: React.CSSProperties = {
    transition: "transform 0.3s ease",
  };

  const secondRowImages = [
    "/assets/dashboard/master10.jpeg",
    "/assets/dashboard/master11.jpeg",
    "/assets/dashboard/master12.jpeg",
    "/assets/dashboard/master13.jpeg",
  ];
  const thirdRowImages = [
    "/assets/dashboard/master14.jpeg",
    "/assets/dashboard/master15.jpeg",
    "/assets/dashboard/master5.jpeg",
    "/assets/dashboard/master6.jpeg",
  ];

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const handleMouseEnter = (src: string) => {
    const timeout = setTimeout(() => {
      setSelectedImage(src);
      setModalOpen(true);
    }, 1000);
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleModalImageClick = () => {
    if (isMounted && selectedImage) {
      router.push(`/image-details?src=${selectedImage}`);
    }
  };

  return (
    <>
      
      <div className="bg-gray-100 p-4">
        <div className="grid gap-4">
          {/* First row with one large image */}
          <div style={largeImageStyle}>
            <Image
              src="/assets/dashboard/master9.png"
              alt="Main Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
              style={imageStyle}
            />
          </div>

          {/* Second row with four images */}
          <div className="grid grid-cols-4 gap-4">
            {secondRowImages.map((src, index) => (
              <div
                key={index}
                style={imageWrapperStyle}
                onMouseEnter={() => handleMouseEnter(src)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleImageClick(src)}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                  style={imageStyle}
                />
              </div>
            ))}
          </div>

          {/* Third row with four images */}
          <div className="grid grid-cols-4 gap-4">
            {thirdRowImages.map((src, index) => (
              <div
                key={index + 4}
                style={imageWrapperStyle}
                onMouseEnter={() => handleMouseEnter(src)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleImageClick(src)}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 5}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                  style={imageStyle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for displaying image details */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg relative flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            {selectedImage && (
              <div>
                <Image
                  src={selectedImage}
                  alt={imageDetails[selectedImage]?.title || "Selected Image"}
                  width={370}
                  height={305}
                  objectFit="cover"
                  className="rounded-lg shadow-md cursor-pointer"
                  onClick={handleModalImageClick}
                />
                <h2 className="text-xl font-semibold mt-4">
                  {imageDetails[selectedImage]?.title || "Untitled"}
                </h2>
                <p className="mt-2">
                  {imageDetails[selectedImage]?.description ||
                    "No description available."}
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Add to Cart
                  </button>
                  <button className="bg-green-500 text-white py-2 px-4 rounded-lg">
                    Shop Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage1;
