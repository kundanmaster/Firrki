

"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FaStar, FaRegStar, FaShoppingCart, FaHeart } from "react-icons/fa";

const ProductDetail: React.FC = () => {
  const searchParams = useSearchParams();
  const image = searchParams.get("image");
  const description = searchParams.get("description");

  // Check if the query parameters are available
  if (!image || !description) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-row items-start justify-center min-h-screen p-4">
      <div className="flex flex-col items-center justify-center w-1/2 p-4">
        <Image
          src={image}
          alt="Product Detail"
          width={350}  // Reduced image size
          height={250} // Reduced image size
          className="mb-4"
        />
        <div className="flex space-x-4 mt-4">
          <Image src="/green.png" alt="Green Fabric" width={50} height={50} />
          <Image src="/blue.png" alt="Blue Fabric" width={50} height={50} />
          <Image src="/red.png" alt="Red Fabric" width={50} height={50} />
          <Image src="/orange.png" alt="Orange Fabric" width={50} height={50} />
        </div>
      </div>

      <div className="w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-2">Bedclothes</h2>
        <p className="text-xl font-semibold mb-4">$580</p>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex items-center mb-4">
          <div className="flex text-yellow-500">
            {Array(4).fill("").map((_, i) => (
              <FaStar key={i} className="w-5 h-5" />
            ))}
            <FaRegStar className="w-5 h-5 text-gray-400" />
          </div>
          <p className="ml-2 text-gray-600">Total Reviews: 14</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Fabric color</h3>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            <div className="w-8 h-8 bg-red-700 rounded-full"></div>
            <div className="w-8 h-8 bg-orange-600 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-900 rounded-full"></div>
            <div className="w-8 h-8 bg-black rounded-full"></div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Leg finish</h3>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="w-8 h-8 bg-brown-500 rounded-full"></div>
            <div className="w-8 h-8 bg-black rounded-full"></div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Upgrades</h3>
          <div className="flex flex-col">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Lumbar Pillows +$200
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Fancy Metals +$120
            </label>
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded flex items-center justify-center">
            <FaShoppingCart className="mr-2" /> Add To Cart
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded flex items-center justify-center">
            <FaHeart className="text-gray-800" />
          </button>
          <button className="flex-1 px-4 py-2 bg-green-500 text-white rounded flex items-center justify-center">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
