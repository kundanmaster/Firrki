"use client";

import React from "react";
import Image from "next/image";
const HeroSection2: React.FC = () => {
  return (
    <>
      <div className="p-2 flex">
        <div className="relative h-96 w-[70%] mx-2">
          <div
            className="relative h-full w-full bg-cover bg-center rounded-lg shadow-md flex flex-col justify-between"
            style={{ backgroundImage: 'url("/assets/decore (1).jpg")' }}
          >
            <button className="bg-white text-black py-2 px-4  mx-4 mt-20 self-start hover:bg-gray-300 ml-14">
              Home
            </button>

            <button
              style={{
                marginInlineStart: "4.7rem",
                padding: "6px 42px",
                transform: "translateY(-59px)",
              }}
              className="bg-white text-black py-2 px-4 mx-2 mb-4 self-start hover:bg-gray-300"
            >
              EXPLORE
            </button>
          </div>
        </div>
        <div className="relative h-96 w-[30%] mx-2">
          <Image
            src="/assets/dashboard/master2.jpeg"
            alt="New Section Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="p-2 flex">
        <div className="relative h-96 w-[30%] mx-2">
          <Image
            src="/assets/dashboard/master3.jpeg"
            alt="New Section Image 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="relative h-96 w-[70%] mx-2">
          <div
            className="relative h-full w-full bg-cover bg-center rounded-lg shadow-md flex flex-col justify-between"
            style={{ backgroundImage: 'url("/assets/decore (3).jpg")' }}
          >
            <button
              style={{
                transform: "translateY(1px) translateX(-40px)",
              }}
              className="bg-white text-black py-2 px-4  mx-4 mt-20 self-end hover:bg-gray-300 mr-10"
            >
              Home
            </button>

            <button
              style={{
                padding: "6px 42px",
                transform: "translateY(-64px) translateX(-91px)", // Adjust this value as needed
              }}
              className="bg-white text-black py-2 px-4 mx-2 mb-4 self-end hover:bg-gray-300"
            >
              Discover
            </button>
          </div>
        </div>
      </div>

      <div className="p-2 flex">
        <div className="relative h-24 w-[100%] mx-2">
          <Image
            src="/assets/dashboard/master5.png"
            alt="New Section Image 5"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="p-2 flex">
        <div className="relative h-64 w-[25%] mx-2">
          <Image
            src="/assets/dashboard/master5.jpeg"
            alt="New Section Image 6"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="relative h-64 w-[25%] mx-2">
          <Image
            src="/assets/dashboard/master6.jpeg"
            alt="New Section Image 7"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="relative h-64 w-[25%] mx-2">
          <Image
            src="/assets/dashboard/master7.jpeg"
            alt="New Section Image 8"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="relative h-64 w-[25%] mx-2">
          <Image
            src="/assets/dashboard/master8.jpeg"
            alt="New Section Image 9"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <div
        className="relative w-full bg-no-repeat text-center py-12"
        style={{
          backgroundImage: "url(/assets/dashboard/master16.jpeg)",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <h1
            className="text-6xl font-bold mb-6 italic"
            style={{ color: "#2C4456" }}
          >
            Customized
          </h1>
          <h1
            className="text-6xl font-bold mb-6 italic"
            style={{ color: "#2C4456" }}
          >
            Design
          </h1>

          <div className="flex space-x-6 mt-8">
            {/* First Item */}
            <div className="relative flex flex-col items-center justify-center w-1/3 h-[30rem] mt-20">
              <Image
                src="/assets/dashboard/master6.jpeg"
                alt="alt"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-t-full border-4 border-white"
                style={{
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              {/* <img
              src="/assets/dashboard/master6.jpeg"
              alt="First Image"
              className="w-full h-full object-cover rounded-t-full border-4 border-white"
              style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
            /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="text-white text-4xl">
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>

            {/* Center Text */}
            <div
              className="relative flex flex-col items-center justify-center w-1/3 h-[35rem] rounded-t-full border-4 border-white text-white p-6 mx-6"
              style={{ backgroundColor: "#fde994" }}
            >
              <h2 className="text-2xl font-bold mb-4 text-center">
                Your Vision, Our Craftsmanship
              </h2>
              <h2 className="text-2xl font-bold mb-4 text-center">
                Customized Design for YOU
              </h2>
            </div>

            {/* Second Item */}
            <div className="relative flex flex-col items-center justify-center w-1/3 h-[30rem] mt-20">
              <Image
                src="/assets/dashboard/master2.jpeg"
                alt="alt"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-t-full border-4 border-white"
                style={{
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              {/* <img
              src="/assets/dashboard/master2.jpeg"
              alt="Second Image"
              className="w-full h-full object-cover rounded-t-full border-4 border-white"
              style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
            /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="text-white text-4xl">
                  <span>Design Here</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection2;
