"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { useRouter } from "next/navigation";

interface ProductSectionProps {
  mainImage: string;
  images: string[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ mainImage, images }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleImageClick = (image: string, description: string) => {
    router.push(
      `/productdetails?image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}`
    );
  };

  return (
    <div className="flex justify-center space-x-4 mt-8">
      <div className="flex flex-col items-center mt-8">
        <div
          style={{
            width: '210px',
            height: '210px',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Image
            src={mainImage}
            alt="Main product"
            width={210}
            height={210}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
            className="group"
          />
          <a
            href="#"
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            style={{
              color: 'white',
              fontSize: '24px',
              textAlign: 'center',
              pointerEvents: 'none',
            }}
          >
            <FaSearch />
          </a>
        </div>
        <h3 className="mt-2 text-lg font-semibold">Table linen</h3>
        <a href="#" className="text-sm text-gray-500">View All</a>
      </div>

      {images.map((image, index) => (
        <div
          key={index}
          className="relative w-43 h-96 transition-transform duration-300 flex flex-col items-center"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            width: hoveredIndex === index ? '70%' : '30%',
            transition: 'width 0.3s ease',
          }}
          onClick={() => handleImageClick(image, `Description for image ${index + 1}`)}
        >
          <Image
            src={image}
            alt={`Product ${index + 1}`}
            width={256}
            height={256}
            className={`w-full h-full object-cover transition-transform duration-300`}
            style={{
              transition: 'transform 0.3s ease',
            }}
          />
          <a
            href="#"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{
              color: 'white',
              fontSize: '24px',
              pointerEvents: 'none',
            }}
          >
            <FaSearch />
          </a>
        </div>
      ))}
    </div>
  );
};

const HeroSection3: React.FC = () => {
  const productImages1 = ["/assets/dashboard/master6.jpeg", "/assets/dashboard/master7.jpeg", "/assets/dashboard/master6.jpeg", "/assets/dashboard/master7.jpeg", "/assets/dashboard/master22.jpeg", "/assets/dashboard/master24.jpeg", "/assets/dashboard/master25.jpeg"];
  const productImages2 = ["/assets/dashboard/master8.jpeg", "/assets/dashboard/master7.jpeg", "/assets/dashboard/master6.jpeg", "/assets/dashboard/master8.jpeg", "/assets/dashboard/master6.jpeg", "/assets/dashboard/master7.jpeg", "/assets/dashboard/master6.jpeg"];
  const productImages3 = ["/assets/dashboard/master22.jpeg", "/assets/dashboard/master6.jpeg", "/assets/dashboard/master7.jpeg", "/assets/dashboard/master6.jpeg", "/assets/dashboard/master24.jpeg", "/assets/dashboard/master25.jpeg", "/assets/dashboard/master22.jpeg"];
  const productImages4 = ["/assets/dashboard/master24.jpeg", "/assets/dashboard/master25.jpeg", "/assets/dashboard/master22.jpeg", "/assets/dashboard/master8.jpeg", "/assets/dashboard/master6.jpeg", "/assets/dashboard/master7.jpeg", "/assets/dashboard/master6.jpeg"];

  return (
    <div
      className="relative w-full bg-no-repeat text-center py-12"
      style={{
        backgroundImage: `url("/assets/dashboard/master188.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        paddingLeft: '30px', // Add left padding for overall page
      }}
    >
      <div className="flex flex-col justify-center items-center h-full bg-cover bg-center">
        <ProductSection mainImage="/assets/dashboard/master17.jpeg" images={productImages1} />
        <ProductSection mainImage="/assets/dashboard/master19.jpeg" images={productImages2} />
        <ProductSection mainImage="/assets/dashboard/master20.jpeg" images={productImages3} />
        <ProductSection mainImage="/assets/dashboard/master21.jpeg" images={productImages4} />
      </div>
    </div>
  );
};

export default HeroSection3;