"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link component
import HeaderLayout from "../components/HeaderLayout";
import { useState, useEffect } from "react";
import Footer from "../components/DashComponents/Footer";
import Home from "../page";

const AdornComponent = () => {
  const images = [
    "/assets/dashboard/master17.jpeg",
    "/assets/dashboard/master19.jpeg",
    "/assets/dashboard/master20.jpeg",
    "/assets/dashboard/master21.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const mainImages = [
    "/assets/dashboard/master10.jpeg",
    "/assets/dashboard/master12.jpeg",
    "/assets/dashboard/master12.jpeg",
  ];
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMainImageIndex((prevIndex) => (prevIndex + 1) % mainImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [mainImages.length]);

  return (
    <div className="h-[100vh]">
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/dashboard/master18.jpeg')` }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-70">
          <div className="max-w-12xl w-full mx-auto px- flex items-start justify-between">
            {/* Image Section */}
            <div className="relative w-11/12" style={{ marginLeft: "-140px" }}>
              <Image
                src={mainImages[mainImageIndex]} // Dynamically update the image source
                alt="Adorn Bed Image"
                className="rounded-md object-cover"
                layout="responsive"
                width={1200}
                height={800}
              />
              <div className="absolute inset-y-1/3 flex items-center justify-between w-full px-2">
                <button
                  onClick={handlePrevImage}
                  className="text-2xl font-bold text-gray-600"
                >
                  &#x276E;
                </button>
                <button
                  onClick={handleNextImage}
                  className="text-2xl font-bold text-gray-600"
                >
                  &#x276F;
                </button>
              </div>
            </div>

            {/* Text Section */}
            <div className="relative mt-32 w-5/12 md:text-left pl-32">
              <h1 className="text-6xl font-bold text-gray-800 mt-4">ADORN</h1>

              {/* Logo */}
              <div className="pl-16 mt-[-40px]">
                <Image
                  src="/assets/dashboard/logoo2.png"
                  alt="Adorn Logo"
                  className="mx-auto md:mx-0"
                  width={200}
                  height={100}
                />
              </div>

              {/* Text */}
              <p className="mt-[-20px] text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>

              {/* Button */}
              <div className="mt-6 pl-10">
                <button className="px-8 py-4 bg-[#c89d9e] text-white font-semibold rounded-md text-lg">
                  VIEW MORE
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div
            className="relative h-[900px]"
            style={{
              backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
            }}
          >
            <div className="flex justify-center space-x-16">
              {images.map((image, index) => (
                <Link
                  href={`/${
                    ["tablelinen", "bath-linen", "cushion-throws", "bed-linen"][
                      index
                    ]
                  }`}
                  key={index}
                >
                  <div
                    className={`relative cursor-pointer ${
                      currentImage === index ? "opacity-100" : "opacity-100"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Master Image ${index + 1}`}
                      className="rounded-full object-cover mt-10"
                      layout="fixed"
                      width={300}
                      height={300}
                    />
                    <div className="absolute inset-x-0 bottom-[-60px] text-center mt-10">
                      <p className="bg-[#c89d9e] text-white font-semibold py-3 rounded-md mt-16">
                        {
                          [
                            "Table Linen",
                            "Bath Linen",
                            "Cushion & Throws",
                            "Bed Linen",
                          ][index]
                        }
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <h2 className="text-center text-5xl font-bold text-gray-800 mb-8 mt-32">
              <em>Bestsellers</em>
            </h2>
            <h2 className="text-center text-7xl font-bold text-gray-800 mb-8 mt-10">
              POPULAR PRODUCTS
            </h2>
            <div className="mt-[-99px] pl-[600px]">
              <Image
                src="/assets/dashboard/logoo2.png"
                alt="Adorn Logo"
                className="mx-auto md:mx-0 flex item-center mb-8"
                width={300}
                height={200}
              />
            </div>

            {/* New Section with 6 Images */}
            <div className="grid grid-cols-4 gap-4 mt-20 px-1">
              <div className="col-span-2">
                <Image
                  src="/assets/dashboard/shop1.jpeg"
                  alt="Master Image 25"
                  className="rounded-md"
                  layout="responsive"
                  width={600}
                  height={900}
                />
              </div>
              <div className="col-span-1" style={{ height: "130px" }}>
                <Image
                  src="/assets/dashboard/shop2.jpeg"
                  alt="Master Image 26"
                  className="object-cover rounded-md"
                  layout="responsive"
                  width={200}
                  height={50}
                />
              </div>
              <div className="col-span-1" style={{ height: "130px" }}>
                <Image
                  src="/assets/dashboard/shop3.jpeg"
                  alt="Master Image 27"
                  className="object-cover rounded-md"
                  layout="responsive"
                  width={300}
                  height={450}
                />
              </div>

              <div className="col-span-1">
                <Image
                  src="/assets/dashboard/shop4.jpeg"
                  alt="Master Image 28"
                  className="object-cover rounded-md"
                  layout="responsive"
                  width={300}
                  height={450}
                  style={{ height: "330px" }}
                />
              </div>
              <div className="col-span-1">
                <Image
                  src="/assets/dashboard/shop5.jpeg"
                  alt="Master Image 29"
                  className="object-cover rounded-md"
                  layout="responsive"
                  width={300}
                  height={450}
                />
              </div>
              <div className="col-span-2">
                <Image
                  src="/assets/dashboard/shop6.jpeg"
                  alt="Master Image 30"
                  className="object-cover rounded-md"
                  layout="responsive"
                  width={600}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdornComponent;
