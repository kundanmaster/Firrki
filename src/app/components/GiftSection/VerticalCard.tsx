"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  "/assets/tableLinen/image7.png",
  "/assets/tableLinen/image7.png",
  "/assets/tableLinen/image7.png",
  "/assets/tableLinen/image7.png",
];
const VerticalCard = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleUpClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleDownClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="py-2">
      <div className="relative flex h-[40vh] w-full bg-white shadow-lg overflow-hidden">
        {/* Image Slider Section */}
        <div className="flex-none w-[50%] h-full overflow-hidden">
          <div
            className="flex flex-col h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className={`w-full h-full ${
                  index !== currentIndex ? "hidden" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Information Section */}
        <div className="flex flex-grow w-[50%] h-full bg-[#DBE1D3] p-4 justify-center text-left flex-col space-y-2 px-56">
          <p className="text-primaryrose text-md">Lorem ipsum</p>
          <p className="text-3xl">Lorem ipsum odor amet,</p>
          <p className="text-sm">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh enim
            finibus dignissim montes condimentum imperdiet eget? Torquent tortor
            dolor bibendum dui eu purus. Etiam elit feugiat nisl penatibus
            bibendum nam. Congue lobortis suspendisse rutrum vestibulum eu fusce
            class. Orci habitant commodo magna consectetur ultrices vestibulum
            dolor per.
          </p>
          <div className="">
            <button className="bg-primaryrose hover:bg-primaryrosedark py-2 text-white px-14">
              Explore
            </button>
          </div>
        </div>

        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full border-2 border-black ${
                currentIndex === index ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
