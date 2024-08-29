"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderLayout from "../components/HeaderLayout";
import { useState, useEffect } from "react";
import Footer from "../components/DashComponents/Footer";
import Home from "../page";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const AdornComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/assets/dashboard/master17.jpeg",
    "/assets/dashboard/master19.jpeg",
    "/assets/dashboard/master20.jpeg",
    "/assets/dashboard/master21.jpeg",
  ];

  const mainImages = [
    "/assets/dashboard/master10.jpeg",
    "/assets/dashboard/master12.jpeg",
    "/assets/dashboard/master12.jpeg",
  ];

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMainImageIndex((prevIndex) => (prevIndex + 1) % mainImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [mainImages.length]);

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
  return (
    <>
      <HeaderLayout OtherPage={undefined}>s</HeaderLayout>
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
        }}
      >
        <div className="flex">
          {/* Image Collage Section */}
          <div className="flex-2/3 relative">
            <div className="relative">
              <Image
                src={mainImages[mainImageIndex]}
                alt="Adorn Bed Image"
                className="object-cover"
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
          </div>

          {/* Text Section */}
          <div className="flex-1/3  p-8">
            <div className="flex flex-col h-full justify-center items-center text-center">
              <h1 className="text-8xl font-bold text-gray-800">ADORN</h1>
              <div>
                <Image
                  src="/assets/dashboard/Group 52.png"
                  alt="Adorn Logo"
                  width={200}
                  height={100}
                />
              </div>

              {/* Text */}
              <p className="text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>

              {/* Button */}
              <div className="mt-6">
                <button className="px-4 py-4 bg-primaryrose hover:bg-primaryrosedark text-white font-semibold text-lg">
                  VIEW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="relative h-[450px]"
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
                    <p className="bg-primaryrose hover:bg-primaryrosedark text-white font-semibold py-3 mt-16">
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
        </div>
      </div>

      <div
        className="pb-4"
        style={{
          backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
        }}
      >
        <div className="py-2">
          <div className="flex items-center justify-center h-[50vh] bg-primaryrose">
            <div className="text-center">
              {/* Subtitle */}
              <h2 className="text-xl font-light text-white uppercase mb-2">
                All for Home
              </h2>

              {/* Main Title */}
              <h1 className="text-5xl font-bold text-white mb-4">
                New Arrivals
              </h1>

              {/* Description */}
              <p className="text-white text-sm max-w-2xl mx-auto">
                Lorem ipsum dolor amet, consectetur adipiscing elit. Nibh enim
                finibus dignissim montes condimentum imperdiet eget? Torquent
                tortor dolor bibendum dui purus. Etiam elit feugiat nisl
                penatibus bibendum nam. Congue lobortis suspendisse rutrum
                vestibulum vestibulum et fusce class. Orci habitant commodo
                magna consectetur ultricies vestibulum dolor per.
              </p>
            </div>
          </div>
        </div>

        <div className="py-2">
          <div className="relative flex h-[40vh] w-full bg-white shadow-lg overflow-hidden">
            {/* Image Slider Section */}
            <div className="flex-none w-[30%] h-full overflow-hidden">
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
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Information Section */}
            <div className="flex flex-grow w-[70%] h-full bg-[#DBE1D3] p-4 justify-center text-left flex-col space-y-2 px-56">
              <p className="text-primaryrose text-md">Lorem ipsum</p>
              <p className="text-3xl">Lorem ipsum odor amet,</p>
              <p className="text-sm">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh enim
                finibus dignissim montes condimentum imperdiet eget? Torquent
                tortor dolor bibendum dui eu purus. Etiam elit feugiat nisl
                penatibus bibendum nam. Congue lobortis suspendisse rutrum
                vestibulum eu fusce class. Orci habitant commodo magna
                consectetur ultrices vestibulum dolor per.
              </p>
              <div className="">
                <button className="bg-primaryrose hover:bg-primaryrosedark py-2 text-white px-14">
                  Explore
                </button>
              </div>
            </div>

            {/* Slider Buttons */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2">
              <button
                onClick={handleUpClick}
                className="border-2 border-black text-black px-2 py-2 rounded-full hover:bg-black hover:text-white"
              ></button>
              <button
                onClick={handleDownClick}
                className="border-2 border-black text-black px-2 py-2 rounded-full hover:bg-black hover:text-white"
              ></button>
            </div>
          </div>
        </div>

        <h2 className="text-center text-7xl font-bold text-gray-800 mt-20">
          POPULAR PRODUCTS
        </h2>
        <div className="flex items-center justify-center">
          <Image
            src="/assets/dashboard/Group 52.png"
            alt="Adorn Logo"
            className="mx-auto md:mx-0 flex item-center mb-8"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div>
        <div
          className="pb-4"
          style={{
            backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
          }}
        >
          <div className="grid grid-cols-4 gap-4">
            {/* First Row */}
            <div className="col-span-2 row-span-1">
              <Image
                src="/assets/dashboard/shop1.jpeg"
                alt="First Image"
                className="h-[50vh] w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/assets/dashboard/shop2.jpeg"
                alt="Second Image"
                className="h-[70vh] w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/assets/dashboard/shop3.jpeg"
                alt="Third Image"
                className="h-[70vh] w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>

            {/* Second Row */}
            <div className="col-span-1 row-span-1">
              <Image
                src="/assets/dashboard/shop4.jpeg"
                alt="Fourth Image"
                className="h-[70vh] w-full object-cover mt-[-13.4rem]"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/assets/dashboard/shop5.jpeg"
                alt="Fifth Image"
                className="h-[70vh] w-full object-cover mt-[-13.4rem]"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-2 row-span-1">
              <Image
                src="/assets/dashboard/shop6.jpeg"
                alt="Sixth Image"
                className="h-[50vh] w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url('/assets/dashboard/footer2.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        className="relative mt-auto flex flex-col items-center h-auto min-h-[600px] sm:min-h-[2000px] md:min-h-[900px] lg:min-h-[1024px] xl:min-h-[1200px] 2xl:min-h-[1500px] py-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl text-center sm:text-left px-4">
          <div className="space-y-5">
            <div className="flex flex-col items-center sm:items-start">
              {/* Logo */}
              <div className="flex justify-center sm:justify-start w-full mb-6">
                <Image
                  src="/assets/dashboard/Firrki_Logo.png"
                  alt="Logo"
                  width={220}
                  height={90}
                  className="h-25 w-25"
                />
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-7 justify-center sm:justify-start">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black p-2 rounded-full"
                >
                  <FaFacebookF className="text-white text-3xl hover:text-gray-500" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black p-2 rounded-full"
                >
                  <FaInstagram className="text-white text-3xl hover:text-gray-500" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black p-2 rounded-full"
                >
                  <FaYoutube className="text-white text-3xl hover:text-gray-500" />
                </a>
              </div>
            </div>

            <div className="mt-6 sm:mt-0">
              <p className="mb-6 text-gray-600 text-xl font-semibold">
                Discover New Arrivals and Exclusive Discounts First
              </p>
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="px-4 py-2 w-full max-w-md border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl">
            <div className="text-center sm:text-left">
              <h2 className="text-4xl font-semibold mb-3">QUICK LINKS</h2>
              <ul className="space-y-2 text-gray-700 text-xl font-semibold">
                <li>
                  <a href="#" className="hover:text-gray-500">
                    Our story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-500">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-500">
                    Returns and Exchange
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-500">
                    Refunds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-500">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-4xl font-semibold mb-3">CATEGORIES</h3>
              <ul className="space-y-2 text-gray-700 text-xl font-semibold">
                <li>
                  <a href="/new-arrivals" className="hover:text-gray-500">
                    New arrivals
                  </a>
                </li>
                <li>
                  <a href="/bed-linen" className="hover:text-gray-500">
                    Bed Linen
                  </a>
                </li>
                <li>
                  <a href="/cushions" className="hover:text-gray-500">
                    Cushions
                  </a>
                </li>
                <li>
                  <a href="/table-linen" className="hover:text-gray-500">
                    Table Linen
                  </a>
                </li>
                <li>
                  <a href="/gifting" className="hover:text-gray-500">
                    Gifting
                  </a>
                </li>
                <li>
                  <a href="/personalization" className="hover:text-gray-500">
                    Personalization
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdornComponent;
