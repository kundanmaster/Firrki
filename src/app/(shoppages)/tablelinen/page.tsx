"use client";
import Image from "next/image";
import Footer from "../../components/DashComponents/Footer";
import HeaderLayout from "../../components/HeaderLayout";
import { FC, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";

type Category =
  | "PLACEMATS"
  | "NAPKINS"
  | "RUNNERS"
  | "TABLE CLOTH"
  | "COASTERS";

interface ImageConfig {
  src: string;
  alt: string;
  widthClass: string;
  heightClass: string;
}
interface ImageConfig {
  src: string;
  alt: string;
  widthClass: string;
  heightClass: string;
}

const additionalImages: Record<Category, string[]> = {
  PLACEMATS: [
    "/assets/tableLinen/image3.png",
    "/assets/tableLinen/image3.png",
    "/assets/tableLinen/image3.png",
    "/assets/tableLinen/image3.png",
    "/assets/tableLinen/image3.png",
    "/assets/tableLinen/image3.png",
  ],
  NAPKINS: [
    "/assets/tableLinen/image2.png",
    "/assets/tableLinen/image6.png",
    "/assets/tableLinen/image2.png",
    "/assets/tableLinen/image6.png",
    "/assets/tableLinen/image2.png",
    "/assets/tableLinen/image6.png",
  ],
  RUNNERS: [
    "/assets/tableLinen/image1.png",
    "/assets/tableLinen/image22.png",
    "/assets/tableLinen/image3.png",
    "/assets/tableLinen/image22.png",
    "/assets/tableLinen/image3.png",
    "/assets/tableLinen/image22.png",
  ],
  "TABLE CLOTH": [
    "/assets/tableLinen/image7.png",
    "/assets/tableLinen/image8.png",
    "/assets/tableLinen/image7.png",
    "/assets/tableLinen/image8.png",
    "/assets/tableLinen/image7.png",
    "/assets/tableLinen/image8.png",
  ],
  COASTERS: [
    "/assets/tableLinen/image3.png",
    "/assets/tableLinen/image1.png",
    "/assets/tableLinen/image7.png",
    "/assets/tableLinen/image8.png",
    "/assets/tableLinen/image22.png",
    "/assets/tableLinen/image8.png",
  ],
};

const images = [
  "/assets/tableLinen/image.png",
  "/assets/tableLinen/image22.png",
  "/assets/tableLinen/image2.png",
  "/assets/tableLinen/image3.png",
  "/assets/tableLinen/image8.png",
];
const productData = [
  { name: "Product 1", amount: "₹20" },
  { name: "Product 2", amount: "₹30" },
  { name: "Product 3", amount: "₹25" },
  { name: "Product 4", amount: "₹40" },
  { name: "Product 5", amount: "₹50" },
  { name: "Product 6", amount: "₹35" },
  // Add more product data as needed
];

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

const TableLinen: FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [showAdditionalImages, setShowAdditionalImages] =
    useState<boolean>(false);

  const toggleImages = (index: number) => {
    const categories: Category[] = [
      "PLACEMATS",
      "NAPKINS",
      "RUNNERS",
      "TABLE CLOTH",
      "COASTERS",
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
  return (
    <div>
      {/* Table Linen Section */}
      <HeaderLayout OtherPage={undefined}>s</HeaderLayout>
      {/* Table Linen Section */}
      <div
        className="relative flex items-center justify-center"
        style={{
          backgroundImage: `url('/assets/tableLinen/bacgroundimage.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "80vh",
        }}
      >
        <div className="relative w-full">
          {/* Slider Container */}
          <div className="flex items-center justify-between">
            {/* Left Navigation Button */}
            <button className="text-8xl text-gray-600 hover:text-gray-800 ml-4">
              &#x276E;
            </button>

            {/* Center Content */}
            <div className="text-center flex-grow">
              <h1 className="text-5xl font-bold text-[#2c4456]">TABLE LINEN</h1>
              <div className="flex justify-center mt-[-10px] mb-4">
                <Image
                  src="/assets/dashboard/linenLogo.png"
                  alt="Adorn Logo"
                  className="mx-auto md:mx-0 flex items-center mb-8"
                  width={200}
                  height={100}
                />
              </div>
              <p className="text-xl text-[#2c4456] max-w-sm mx-auto mt-[-40px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <button className="mt-4 px-6 py-2 bg-primaryrose hover:bg-primaryrosedark text-white font-semibold z-10">
                VIEW MORE
              </button>
            </div>

            {/* Right Navigation Button */}
            <button className="text-8xl text-gray-600 hover:text-gray-800 mr-4">
              &#x276F;
            </button>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <div
        className="py-12"
        style={{
          backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div
            className="relative h-[500px] mb-4"
            style={{
              backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
            }}
          >
            <div className="flex flex-wrap justify-center gap-8">
              {images.map((image, index) => (
                <div key={index} className="w-[300px]">
                  <div
                    className={`relative cursor-pointer border-4 border-primaryrose hover:border-primaryrosedark ${
                      currentImage === index ? "opacity-100" : "opacity-100"
                    }`}
                    onClick={() => toggleImages(index)}
                  >
                    {/* Image Container */}
                    <div className="h-[40vh] overflow-hidden">
                      <Image
                        src={image}
                        alt={`Master Image ${index + 1}`}
                        className="object-cover w-full h-full"
                        layout="fill"
                      />
                    </div>
                    {/* Text Container */}
                    <div className="absolute inset-x-0 bottom-0">
                      <p className="bg-primaryrose hover:bg-primaryrosedark text-white font-semibold text-center p-4">
                        {
                          // Bed Linen, Bath Linen, Table Linen, Cushion & Throws
                          [
                            "PLACEMATS",
                            "NAPKINS",
                            "RUNNERS",
                            "TABLE CLOTH",
                            "COASTERS",
                          ][index]
                        }
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Display additional images if any image is selected */}
          {selectedCategory && showAdditionalImages && (
            <div
              className="bg-cover bg-center"
              style={{
                backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
              }}
            >
              <div className="flex flex-wrap justify-center gap-4 px-80">
                {currentAdditionalImages.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative w-[30vh] h-[40vh] mb-6"
                  >
                    <div className="relative h-full bg-white shadow-lg overflow-hidden">
                      <Image
                        src={img}
                        alt={`Additional Image ${imgIndex + 1}`}
                        className="w-full h-[60%] object-cover"
                        layout="responsive"
                        width={300}
                        height={300}
                      />
                      <div className="absolute top-2 right-2 flex space-x-2 z-10">
                        <button className="bg-primaryrose text-white p-2 rounded-full shadow-md hover:bg-primaryrosedark">
                          <FiShoppingCart />
                        </button>
                        <button className="bg-primaryrose text-white p-2 rounded-full shadow-md hover:bg-primaryrosedark">
                          <IoMdHeartEmpty />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between h-[40%]">
                      <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-lg font-semibold">
                            {productData[imgIndex]?.name || "Product Name"}
                          </p>
                          <p className="text-lg font-semibold">
                            {productData[imgIndex]?.amount || "₹Amount"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="text-center mt[-10px]"
        style={{
          backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl italic font-bold text-[#2c4456]">
          Bestsellers
        </h1>
        <div className="flex justify-center">
          <Image
            src="/assets/dashboard/linenLogo.png"
            alt="Adorn Logo"
            className="mx-auto md:mx-0 flex item-center mb-8"
            width={200}
            height={100}
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

            <div className="row-span-1 col-span-2 bg-slate-700 h-[33.5vh]">
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TableLinen;
