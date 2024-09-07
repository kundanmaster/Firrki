


"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImageSlider from "../ImageSlider";
import { AiOutlineClose } from "react-icons/ai"; // Close Icon

const HeroSection2: React.FC = () => {
  // State to manage popup visibility
  const [showPopup, setShowPopup] = useState<boolean>(true);

  useEffect(() => {
    // Show the popup for the first 3 seconds on component render
    const firstPopupTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    // Show the popup again after 1 minute
    const secondPopupTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 500000);

    return () => {
      clearTimeout(firstPopupTimeout);
      clearTimeout(secondPopupTimeout);
    };
  }, []);

  // Function to close the popup when cross button is clicked
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const largeImageStyle: React.CSSProperties = {
    position: "relative",
    height: "7rem",
    width: "100%",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  };

  const images = [
    "/assets/dashboard/master1.jpeg",
    "/assets/dashboard/master4.jpeg",
    "/assets/dashboard/master5.jpeg",
    "/assets/dashboard/master6.jpeg",
    "/assets/dashboard/master7.jpeg",
    "/assets/dashboard/master8.jpeg",
    "/assets/dashboard/master10.jpeg",
  ];

  return (
    <>
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black  mt-32 bg-opacity-50">
          <div className="relative bg-[#002244] p-8 w-[90%] max-w-md h-[34rem] rounded-lg shadow-lg">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={handleClosePopup}
            >
              <AiOutlineClose size={20} color="white" />
            </button>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/dashboard/giftpop2.png" // Diwali Offer Banner
                alt="Diwali Offer"
                width={500}
                height={300}
                className="object-cover h-[25rem]  mb-4"
              />
              <h2 className="text-2xl font-bold text-center text-white">
                🎉 Diwali Special Offer 🎉
              </h2>
              <p className="text-center text-white mt-2">
                Get up to 50% off on all products! Limited time offer. Don't miss out!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="px-2 pb-1 flex flex-col md:flex-row gap-x-2 ">
        <div className="relative h-96 w-full md:w-[70%] ">
          <div
            className="relative h-full w-full bg-cover bg-center shadow-md flex flex-col justify-between"
            style={{ backgroundImage: 'url("/assets/dashboard/master1.jpeg")' }}
          >
            {/* Content */}
          </div>
        </div>
        <div className="relative h-96 w-full md:w-[30%] ">
          <Image
            src="/assets/dashboard/master2.jpeg"
            alt="New Section Image 2"
            width={1200}
            height={384}
            className="shadow-md"
            style={{ objectFit: "cover", height: "24rem" }}
          />
        </div>
      </div>

      <div className="px-2 pb-1 pt-1 flex flex-col md:flex-row gap-x-2 ">
        <div className="relative h-96 w-full md:w-[30%] ">
          <Image
            src="/assets/dashboard/master3.jpeg"
            alt="New Section Image 3"
            width={1200}
            height={384}
            className="shadow-md"
            style={{ objectFit: "cover", height: "24rem" }}
          />
        </div>

        <div className="relative h-96 w-full md:w-[70%] ">
          <div
            className="relative h-full w-full bg-cover bg-center shadow-md flex flex-col justify-between"
            style={{ backgroundImage: 'url("/assets/dashboard/master4.jpeg")' }}
          >
            {/* Content */}
          </div>
        </div>
      </div>

      <div className="pb-2 pt-1 flex">
        <div className="relative h-24 w-full mx-2">
          <Image
            src="/assets/dashboard/traditional.jpg"
            alt="New Section Image 5"
            width={1200}
            height={50}
            className="shadow-md object-cover w-full h-24"
          />
        </div>
      </div>

      <div>
        <ImageSlider images={images} />
      </div>

      <div
        className="pb-4"
        style={{
          backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
        }}
      >
        <div
          className="relative w-full bg-no-repeat text-center flex items-center justify-center min-h-[140px] sm:min-h-[200px] md:min-h-[250px] lg:min-h-[300px] xl:min-h-[420px] 2xl:min-h-[500px] "
          style={{
            backgroundImage: "url(/assets/dashboard/master166.jpg)",
            backgroundSize: "100% auto",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={largeImageStyle}
            className="relative flex items-center justify-center"
          >
            <h1 className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#2C4456] lg:text-6xl md:text-4xl sm:text-2xl  font-bold ">
              <span> CUSTOMIZED</span>
              <span> DESIGN</span>
            </h1>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default HeroSection2;
