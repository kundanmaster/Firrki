"use client";

import React from "react";
import Image from "next/image";
const HeroSection2: React.FC = () => {
  return (
    <>
      <div className="px-2 pb-1 flex flex-col md:flex-row">
        <div className="relative h-96 w-full md:w-[70%] pr-0 md:pr-1">
          <div
            className="relative h-full w-full bg-cover bg-center shadow-md flex flex-col justify-between"
            style={{ backgroundImage: 'url("/assets/dashboard/master1.jpeg")' }}
          >
            {/* Content */}
          </div>
        </div>
        <div className="relative h-96 w-full md:w-[30%] pl-0 md:pl-2 mt-2 md:mt-0">
          <Image
            src="/assets/dashboard/master2.jpeg"
            alt="New Section Image 2"
            layout="fill"
            objectFit="cover"
            className="shadow-md"
          />
        </div>
      </div>
      <div className="px-2 pb-1 flex flex-col md:flex-row">
        <div className="relative h-96 w-full md:w-[30%] pr-0 md:pr-1 mt-2 md:mt-0">
          <Image
            src="/assets/dashboard/master3.jpeg"
            alt="New Section Image 3"
            layout="fill"
            objectFit="cover"
            className="shadow-md"
          />
        </div>

        <div className="relative h-96 w-full md:w-[70%] pl-0 md:pl-1 mt-2 md:mt-0">
          <div
            className="relative h-full w-full bg-cover bg-center shadow-md flex flex-col justify-between"
            style={{ backgroundImage: 'url("/assets/dashboard/master4.jpeg")' }}
          >
            {/* Content */}
          </div>
        </div>
      </div>

      <div className="py-2 flex">
        <div className="relative h-24 w-full mx-2">
          <Image
            src="/assets/dashboard/master5.png"
            alt="New Section Image 5"
            layout="fill"
            objectFit="cover"
            className="shadow-md"
          />
        </div>
      </div>

      <div className="py-2 px-2 flex flex-col md:flex-row gap-1">
        <div className="relative h-[70vh] w-full md:w-[25%] mt-2 md:mt-0">
          <Image
            src="/assets/dashboard/master5.jpeg"
            alt="New Section Image 6"
            layout="fill"
            objectFit="cover"
            className="rounded-b-lg shadow-md"
          />
        </div>
        <div className="relative h-[70vh] w-full md:w-[25%] mt-2 md:mt-0">
          <Image
            src="/assets/dashboard/master6.jpeg"
            alt="New Section Image 7"
            layout="fill"
            objectFit="cover"
            className="rounded-b-lg shadow-md"
          />
        </div>
        <div className="relative h-[70vh] w-full md:w-[25%] mt-2 md:mt-0">
          <Image
            src="/assets/dashboard/master7.jpeg"
            alt="New Section Image 8"
            layout="fill"
            objectFit="cover"
            className="rounded-b-lg shadow-md"
          />
        </div>
        <div className="relative h-[70vh] w-full md:w-[25%] mt-2 md:mt-0">
          <Image
            src="/assets/dashboard/master8.jpeg"
            alt="New Section Image 9"
            layout="fill"
            objectFit="cover"
            className="rounded-b-lg shadow-md"
          />
        </div>
      </div>
      <div
        className="relative w-full bg-no-repeat text-center flex items-center justify-center lg:h-[60vh] md:h-[35vh] sm:h-[20vh]"
        style={{
          backgroundImage: "url(/assets/dashboard/fontback.png)",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute flex flex-col items-center justify-center ">
          <h1
            className="lg:text-6xl md:text-4xl sm:text-2xl font-bold mb-6"
            style={{ color: "#2C4456" }}
          >
            CUSTOMIZED
          </h1>
          <h1
            className="lg:text-6xl md:text-4xl sm:text-2xl font-bold mb-6"
            style={{ color: "#2C4456" }}
          >
            DESIGN
          </h1>
        </div>
      </div>

      <div
        className=" w-full bg-no-repeat text-center md:h-auto sm:h-[20vh]"
        style={{
          backgroundImage: "url(/assets/dashboard/master18.jpeg)",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center h-auto">
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 mt-8">
            {/* First Item */}
            <div className="relative flex flex-col items-center justify-center w-full md:w-1/3 lg:h-[30rem] md:h-[20rem] mt-20">
              <Image
                src="/assets/dashboard/master6.jpeg"
                alt="alt"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-t-full border-4 border-white"
                style={{
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="text-white text-4xl">
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>

            {/* Center Text */}
            <div
              className="relative flex flex-col items-center justify-center w-full md:w-1/3 lg:h-[35rem] md:h-[25rem] rounded-t-full border-4 border-white text-white p-6 mx-6"
              style={{ backgroundColor: "#CCBA78" }}
            >
              <h2 className="text-2xl font-bold mb-4 text-center">
                Your Vision, Our Craftsmanship
              </h2>
              <h2 className="text-2xl font-bold mb-4 text-center">
                Customized Design for YOU
              </h2>
            </div>

            {/* Second Item */}
            <div className="relative flex flex-col items-center justify-center w-full md:w-1/3 lg:h-[30rem] md:h-[20rem] mt-20">
              <Image
                src="/assets/dashboard/master2.jpeg"
                alt="alt"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-t-full border-4 border-white"
                style={{
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="text-white text-4xl">
                  <span>Design Here</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative w-full bg-no-repeat text-center flex items-center justify-center lg:h-[60vh] md:h-[35vh] sm:h-[20vh]"
        style={{
          backgroundImage: "url(/assets/dashboard/fontback.png)",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute flex flex-col items-center justify-center ">
          <h1
            className="lg:text-6xl md:text-4xl sm:text-2xl font-bold mb-6"
            style={{ color: "#2C4456" }}
          >
            FEATURED
          </h1>
          <h1
            className="lg:text-6xl md:text-4xl sm:text-2xl font-bold mb-6"
            style={{ color: "#2C4456" }}
          >
            PRODUCTS
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroSection2;
