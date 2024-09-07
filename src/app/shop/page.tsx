



"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderLayout from "../components/HeaderLayout";
import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import GiftFooter from "../components/GiftSection/GiftFooter";
import VerticalCard from "../components/GiftSection/VerticalCard";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import ImageDot from "../components/GiftSection/ImageDot";
import { NextPage } from "next";
import ScrollToTopButton from "../components/ScrollToTopButton";
type Category = "Table Linen" | "Bath Linen" | "Cushion & Throws" | "Bed Linen";

const images = [
  "/assets/dashboard/master21.jpeg",
  "/assets/dashboard/master19.jpeg",
  "/assets/dashboard/master17.jpeg",
  "/assets/dashboard/master20.jpeg",
];

const mainImages = [
  "/assets/dashboard/master10.jpeg",
  "/assets/dashboard/master12.jpeg",
  "/assets/dashboard/master12.jpeg",
];

const additionalImages: Record<Category, string[]> = {
  "Table Linen": [
    "/assets/tableLinen/image3.png",
    "/assets/tableLinen/image3.png",
    "/assets/tableLinen/image3.png",
    "/assets/tableLinen/image3.png",
    "/assets/tableLinen/image3.png",
    "/assets/tableLinen/image3.png",
  ],
  "Bath Linen": [
    "/assets/tableLinen/image2.png",
    "/assets/tableLinen/image6.png",
    "/assets/tableLinen/image2.png",
    "/assets/tableLinen/image6.png",
    "/assets/tableLinen/image2.png",
    "/assets/tableLinen/image6.png",
  ],
  "Cushion & Throws": [
    "/assets/tableLinen/image1.png",
    "/assets/tableLinen/image22.png",
    "/assets/tableLinen/image3.png",
    "/assets/tableLinen/image22.png",
    "/assets/tableLinen/image3.png",
    "/assets/tableLinen/image22.png",
  ],
  "Bed Linen": [
    "/assets/tableLinen/image7.png",
    "/assets/tableLinen/image8.png",
    "/assets/tableLinen/image7.png",
    "/assets/tableLinen/image8.png",
    "/assets/tableLinen/image7.png",
    "/assets/tableLinen/image8.png",
  ],
};

const productData = [
  { name: "Product 1", amount: "₹20" },
  { name: "Product 2", amount: "₹30" },
  { name: "Product 3", amount: "₹25" },
  { name: "Product 4", amount: "₹40" },
  { name: "Product 5", amount: "₹50" },
  { name: "Product 6", amount: "₹35" },
  // Add more product data as needed
];

const imagess = [
  { id: 1, src: "/assets/dashboard/decore (1).jpg", alt: "Image 1", price: "₹100", busy: false },
  { id: 2, src: "/assets/dashboard/decore (2).jpg", alt: "Image 2", price: "₹150", busy: true },
  { id: 3, src: "/assets/dashboard/decore (3).jpg", alt: "Image 3", price: "₹120", busy: false },
];

const relatedImages = {
  1: [
    { id: 11, src: "l1.png", alt: "Related Image 1-1", price: "₹100", busy: false },
    { id: 12, src: "l2.png", alt: "Related Image 1-2", price: "₹120", busy: true },
  ],
  2: [
    { id: 21, src: "l3.png", alt: "Related Image 2-1", price: "₹130", busy: false },
    { id: 22, src: "l4.png", alt: "Related Image 2-2", price: "₹140", busy: true },
  ],
  3: [
    { id: 31, src: "l2.png", alt: "Related Image 3-1", price: "₹110", busy: false },
    { id: 32, src: "l3.png", alt: "Related Image 3-2", price: "₹150", busy: true },
  ],
};



const secondRowImages = [
  "/assets/dashboard/master10.jpeg",
  "/assets/dashboard/master11.jpeg",
  "/assets/dashboard/master12.jpeg",
  "/assets/dashboard/master13.jpeg",
];
const thirdRowImages = [
  "/assets/dashboard/master14.jpeg",
  "/assets/dashboard/master15.jpeg",
  "/assets/dashboard/master5.jpeg",
  "/assets/dashboard/master6.jpeg",
];
const AdornComponent = () => {
  const [mainImageIndex, setMainImageIndex] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [showAdditionalImages, setShowAdditionalImages] =
    useState<boolean>(false);

  const toggleImages = (index: number) => {
    const categories: Category[] = [
      "Table Linen",
      "Bath Linen",
      "Cushion & Throws",
      "Bed Linen",
    ];

    const category = categories[index];
    if (selectedCategory === category) {
      setShowAdditionalImages(!showAdditionalImages);
    } else {
      setSelectedCategory(category);
      setShowAdditionalImages(true);
    }
  };

  const currentAdditionalImages = selectedCategory
    ? additionalImages[selectedCategory]
    : [];

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
  }, []);

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
        style={{ backgroundImage: `url('/assets/dashboard/master18.jpeg')` }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Image Collage Section */}
          <div className="lg:flex-2/3 relative lg:order-1">
            <div className="relative">
              <Image
                src={mainImages[mainImageIndex]}
                alt="Adorn Bed Image"
                className="object-cover"
                layout="responsive"
                width={1200}
                height={800}
              />
              {/* <div className="absolute inset-y-1/3 flex items-center justify-between w-full px-2">
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
              </div> */}
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:flex-1/3 p-8 lg:order-2">
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

      {/* Master Image Section */}
      <div
        className="pb-4"
        style={{
          backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 md:gap-y-0 justify-items-center pb-20">
          {images.map((image, index) => (
            <Link
              href={`/${
                ["bed-linen", "bath-linen", "tablelinen", "cushion-throws"][
                  index
                ]
              }`}
              key={index}
            >
              <div
                className={`relative cursor-pointer items-center justify-center ${
                  currentImage === index ? "opacity-100" : "opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`Master Image ${index + 1}`}
                  className="rounded-full object-cover mt-4 md:mt-10 lg:mt-16"
                  width={300}
                  height={300}
                />
                <div className="absolute inset-x-0 bottom-[-60px] text-center mt-10">
                  <p className="bg-primaryrose hover:bg-primaryrosedark text-white font-semibold py-3 mt-16">
                    {
                      [
                        "Bed Linen",
                        "Bath Linen",
                        "Table Linen",
                        "Cushion & Throws",
                      ][index]
                    }
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

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
              Explore our newest arrivals. Each piece is meticulously handcrafted by skilled artisans, blending timeless craftsmanship with contemporary design. Transform your home with exclusive, one-of-a-kind décor that speaks to your unique style.
              </p>
            </div>
          </div>
        </div>

        <VerticalCard />

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
     
      <div
        className="pb-4"
        style={{
          backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
        }}
      >
      <div className="grid grid-rows-3 grid-flow-col grid-cols-4 gap-4 p-4">
        <div className="row-span-1 col-span-2 bg-slate-700 h-[34vh]">
          <Image
            src={secondRowImages[2]} // Image from secondRowImages array
            alt="Image 3"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="row-span-2 bg-slate-700 h-[70vh]">
          <Image
            src={secondRowImages[2]} // Image from secondRowImages array
            alt="Image 3"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="row-span-2 bg-slate-700 h-[70vh]">
          <Image
            src={secondRowImages[2]} // Image from secondRowImages array
            alt="Image 3"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="row-span-2 bg-slate-700 h-[70vh]">
          <Image
            src={thirdRowImages[3]} // Image from thirdRowImages array
            alt="Image 8"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="row-span-1 col-span-2 bg-slate-700 h-[34vh]">
          <Image
            src={thirdRowImages[3]} // Image from thirdRowImages array
            alt="Image 8"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="row-span-2 bg-slate-700 h-[70vh]">
          <Image
            src={thirdRowImages[3]} // Image from thirdRowImages array
            alt="Image 8"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      
         <div className="container mx-auto p-4">
          <ImageDot images={imagess} relatedImages={relatedImages} />
        </div>
      </div>
      <GiftFooter />
      <ScrollToTopButton/>
    </>
  );
};

export default AdornComponent;
