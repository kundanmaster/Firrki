"use client";

import Image from "next/image";
import React from "react";

interface ProductSectionProps {
  images: string[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ images }) => {
  return (
    <div className="flex justify-center space-x-4 mt-8">
      <div className="flex flex-col items-center mt-8">
        <div
          style={{
            width: '210px',
            height: '210px',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
            <Image src="/assets/dashboard/master17.jpeg" alt="alt" width={100} height={100} style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}/>
          {/* <img
            src="/assets/dashboard/master17.jpeg"
            alt="Table linen"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          /> */}
        </div>
        <h3 className="mt-2 text-lg font-semibold">Table linen</h3>
        <a href="#" className="text-sm text-gray-500">View All</a>
      </div>

      {images.map((image, index) => (
        <div key={index} className="w-64 h-87">
          <Image src={image} alt={`Product ${index + 1}`} width={100} height={100} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

const HeroSection3: React.FC = () => {
  const productImages1 = ["/assets/dashboard/master6.jpeg", "/assets/dashboard/master7.jpeg", "/assets/dashboard/master6.jpeg", "/assets/dashboard/master12.jpeg"];
  const productImages2 = ["/assets/dashboard/master8.jpeg", "/assets/dashboard/master7.jpeg", "/assets/dashboard/master6.jpeg", "/assets/dashboard/master8.jpeg"];
  const productImages3 = ["/assets/dashboard/master12.jpeg", "/assets/dashboard/master6.jpeg", "/assets/dashboard/master7.jpeg", "/assets/dashboard/master6.jpeg"];
  const productImages4 = ["/assets/dashboard/master8.jpeg", "/assets/dashboard/master7.jpeg", "/assets/dashboard/master6.jpeg", "/assets/dashboard/master8.jpeg"];

  return (
    <div
      className="relative w-full bg-no-repeat text-center py-12"
      style={{
        backgroundImage: 'url(/assets/dashboard/master18.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <div className="flex flex-col justify-center items-center h-full bg-cover bg-center">
        <h1 className="text-6xl font-bold mb-6 italic" style={{ color: '#2C4456' }}>FEATURED</h1>
        <h1 className="text-6xl font-bold mb-6 italic" style={{ color: '#2C4456' }}>PRODUCTS</h1>

        <ProductSection images={productImages1} />
        <ProductSection images={productImages2} />
        <ProductSection images={productImages3} />
        <ProductSection images={productImages4} />
      </div>
    </div>
  );
};

export default HeroSection3;
