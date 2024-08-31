"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  "/assets/tableLinen/image6.png",
  "/assets/tableLinen/image8.png",
  "/assets/tableLinen/image6.png",
  "/assets/tableLinen/image8.png",
];

const infoSections = [
  {
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum odor amet,",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh enim finibus dignissim montes condimentum imperdiet eget? Torquent tortor dolor bibendum dui eu purus. Etiam elit feugiat nisl penatibus bibendum nam. Congue lobortis suspendisse rutrum vestibulum eu fusce class. Orci habitant commodo magna consectetur ultrices vestibulum dolor per.",
  },
  {
    title: "Lorem ipsum 2",
    subtitle: "Lorem ipsum odor amet, 2",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh enim finibus dignissim montes condimentum imperdiet eget? Torquent tortor dolor bibendum dui eu purus. Etiam elit feugiat nisl penatibus bibendum nam. Congue lobortis suspendisse rutrum vestibulum eu fusce class. Orci habitant commodo magna consectetur ultrices vestibulum dolor per.",
  },
  {
    title: "Lorem ipsum 3",
    subtitle: "Lorem ipsum odor amet, 3",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh enim finibus dignissim montes condimentum imperdiet eget? Torquent tortor dolor bibendum dui eu purus. Etiam elit feugiat nisl penatibus bibendum nam. Congue lobortis suspendisse rutrum vestibulum eu fusce class. Orci habitant commodo magna consectetur ultrices vestibulum dolor per.",
  },
  {
    title: "Lorem ipsum 4",
    subtitle: "Lorem ipsum odor amet, 4",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh enim finibus dignissim montes condimentum imperdiet eget? Torquent tortor dolor bibendum dui eu purus. Etiam elit feugiat nisl penatibus bibendum nam. Congue lobortis suspendisse rutrum vestibulum eu fusce class. Orci habitant commodo magna consectetur ultrices vestibulum dolor per.",
  },
];

const VerticalCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="py-2">
        <div className="relative flex h-[100vh] w-full bg-white shadow-lg overflow-hidden">
          {/* Image Slider Section */}
          <div className="flex-none w-[50%] h-full overflow-hidden relative">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                  index === currentIndex
                    ? "opacity-100 translate-y-0 z-10"
                    : "opacity-0 -translate-y-full z-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Information Slider Section */}
          <div className="flex flex-grow w-full h-full overflow-hidden bg-[#DBE1D3] relative">
            {infoSections.map((info, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col justify-center p-4 transition-all duration-500 ease-in-out transform ${
                  index === currentIndex
                    ? "opacity-100 translate-y-0 z-10"
                    : "opacity-0 translate-y-full z-0"
                }`}
              >
                <div className="px-10">
                  <p className="text-primaryrose text-2xl text-md">{info.title}</p>
                  <p className="text-6xl">{info.subtitle}</p>
                  <p className="text-xl">{info.description}</p>
                  <div className="pb-6">
                    <button className="bg-primaryrose hover:bg-primaryrosedark py-2 text-white px-14">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Navigation */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-5 h-5 rounded-full border-2 border-black transition-opacity duration-500 ease-in-out ${
                  currentIndex === index ? "bg-black opacity-100" : "bg-transparent opacity-50"
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalCard;
