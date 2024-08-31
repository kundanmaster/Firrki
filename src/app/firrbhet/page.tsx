"use client";

import Image from "next/image";
import HeaderLayout from "../components/HeaderLayout";
import { SetStateAction, useState } from "react";
import Footer from "../components/DashComponents/Footer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function GiftSection() {
  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };
  const [activeTab, setActiveTab] = useState("FESTIVE");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftArrowClick = () => {
    // Decrease index to show previous item
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleRightArrowClick = () => {
    // Increase index to show next item
    setCurrentIndex(
      (prevIndex) => (prevIndex < 2 ? prevIndex + 1 : prevIndex) // Assuming you have 3 items
    );
  };
  return (
    <div>
      <HeaderLayout OtherPage={undefined}>s</HeaderLayout>

      <div
        className="relative flex justify-center items-center w-full bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/dashboard/master18.jpeg')` }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4 py-6">
          <div className="relative flex justify-center sm:justify-end">
            <Image
              src="/assets/firbhet/image.png"
              alt="Decorative Plate"
              width={500} // Increased size
              height={500} // Increased size
              className=""
              style={{ marginRight: "10px" }}
            />
          </div>

          <div className="relative flex justify-center">
            <Image
              src="/assets/firbhet/image (1).png"
              alt="Gift2"
              width={500} // Increased size
              height={500} // Increased size
              className=""
              style={{ zIndex: 10 }}
            />
          </div>

          <div className="relative flex justify-center sm:justify-start">
            <Image
              src="/assets/firbhet/image (2).png"
              alt="Gift Box"
              width={500} // Increased size
              height={500} // Increased size
              className=""
              style={{ marginLeft: "10px" }}
            />
          </div>
        </div>
      </div>

      {/* <div
        className="w-full bg-no-repeat text-center md:h-auto sm:h-[100vh] mt-0"
        style={{
          backgroundColor: "#c89d9e",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="flex flex-col justify-center items-center h-auto">
        
          <div className="font-bold text-white text-4xl mt-12">
            Shop by Occasion
          </div>
          <div className="font-semibold text-white text-xl mt-6 mb-6">
            <a
              href="#"
              onClick={() => handleTabClick("FESTIVE")}
              className={`inline-block mx-2 px-4 py-2 ${
                activeTab === "FESTIVE" ? "underline" : ""
              }`}
            >
              FESTIVE
            </a>
            <a
              href="#"
              onClick={() => handleTabClick("HOUSEWARMING")}
              className={`inline-block mx-2 px-4 py-2 ${
                activeTab === "HOUSEWARMING" ? "underline" : ""
              }`}
            >
              HOUSEWARMING
            </a>
            <a
              href="#"
              onClick={() => handleTabClick("BIRTHDAY")}
              className={`inline-block mx-2 px-4 py-2 ${
                activeTab === "BIRTHDAY" ? "underline" : ""
              }`}
            >
              BIRTHDAY
            </a>
            <a
              href="#"
              onClick={() => handleTabClick("WEDDING")}
              className={`inline-block mx-2 px-4 py-2 ${
                activeTab === "WEDDING" ? "underline" : ""
              }`}
            >
              WEDDING
            </a>
          </div>

          <div className="flex flex-col md:flex-row space-x-0 md:space-x-6">
            
            <div className="flex flex-col items-center justify-center w-full md:w-1/3 lg:h-[30rem] md:h-[20rem] mt-4">
              <Image
                src="/assets/firbhet/Vector (5).png"
                alt="Vector 5"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-t-full border-4 border-white"
                style={{
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              <div className="text-white text-center mt-2 text-2xl">Lorem</div>
            </div>

         
            <div className="flex flex-col items-center justify-center w-full md:w-1/3 lg:h-[30rem] md:h-[20rem] mt-4">
              <Image
                src="/assets/firbhet/Vector (4).png"
                alt="Vector 4"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-t-full border-4 border-white"
                style={{
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              <div className="text-white text-center text-2xl mt-2">Lorem</div>
            </div>

          
            <div className="flex flex-col items-center justify-center w-full md:w-1/3 lg:h-[31.3rem] md:h-[25rem] mt-4">
              <Image
                src="/assets/firbhet/Vector (6).png"
                alt="Vector 6"
                width={500}
                height={530}
                className="w-full h-full object-cover rounded-t-full border-4 border-white"
                style={{
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              <div className="text-white text-2xl text-center mt-2">Lorem</div>
            </div>
          </div>
        </div>
      </div> */}

      <div
        className="w-full bg-no-repeat text-center md:h-auto sm:h-[100vh] mt-0"
        style={{
          backgroundColor: "#c89d9e",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="flex flex-col justify-center items-center h-auto">
          <div className="font-bold text-white text-4xl mt-12">
            Shop by Occasion
          </div>
          <div className="font-semibold text-white text-xl mt-6 mb-6">
            <a
              href="#"
              onClick={() => handleTabClick("FESTIVE")}
              className={`inline-block mx-2 px-4 py-2 ${
                activeTab === "FESTIVE" ? "underline" : ""
              }`}
            >
              FESTIVE
            </a>
            <a
              href="#"
              onClick={() => handleTabClick("HOUSEWARMING")}
              className={`inline-block mx-2 px-4 py-2 ${
                activeTab === "HOUSEWARMING" ? "underline" : ""
              }`}
            >
              HOUSEWARMING
            </a>
            <a
              href="#"
              onClick={() => handleTabClick("BIRTHDAY")}
              className={`inline-block mx-2 px-4 py-2 ${
                activeTab === "BIRTHDAY" ? "underline" : ""
              }`}
            >
              BIRTHDAY
            </a>
            <a
              href="#"
              onClick={() => handleTabClick("WEDDING")}
              className={`inline-block mx-2 px-4 py-2 ${
                activeTab === "WEDDING" ? "underline" : ""
              }`}
            >
              WEDDING
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 relative">
            <button
              className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
              onClick={handleLeftArrowClick}
            >
              <FaArrowLeft className="text-[#c89d9e] text-2xl" />
            </button>

            <div className="flex flex-col items-center justify-center w-full md:w-1/3 lg:h-[30rem] md:h-[20rem] mt-4">
              <Image
                src="/assets/firbhet/Vector (5).png"
                alt="Vector 5"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-t-full border-4 border-white"
                style={{
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              <div className="text-white text-center mt-2 text-2xl">Lorem</div>
            </div>

            <div className="flex flex-col items-center justify-center w-full md:w-1/3 lg:h-[30rem] md:h-[20rem] mt-4">
              <Image
                src="/assets/firbhet/Vector (4).png"
                alt="Vector 4"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-t-full border-4 border-white"
                style={{
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              <div className="text-white text-center text-2xl mt-2">Lorem</div>
            </div>

            <div className="flex flex-col items-center justify-center w-full md:w-1/3 lg:h-[31.3rem] md:h-[25rem] mt-4">
              <Image
                src="/assets/firbhet/Vector (6).png"
                alt="Vector 6"
                width={500}
                height={530}
                className="w-full h-full object-cover rounded-t-full border-4 border-white"
                style={{
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              <div className="text-white text-2xl text-center mt-2">Lorem</div>
            </div>

            <button
              className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
              onClick={handleRightArrowClick}
            >
              <FaArrowRight className="text-[#c89d9e] text-2xl" />
            </button>
          </div>
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
                className="h-[60vh] w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/assets/dashboard/shop2.jpeg"
                alt="Second Image"
                className="h-[40vh] w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/assets/dashboard/shop3.jpeg"
                alt="Third Image"
                className="h-[40vh] w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>

            {/* Second Row */}
            <div className="col-span-1 row-span-1">
              <Image
                src="/assets/dashboard/shop4.jpeg"
                alt="Fourth Image"
                className="h-[40vh] w-full object-cover "
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-1 row-span-1 ">
              <Image
                src="/assets/dashboard/shop5.jpeg"
                alt="Fifth Image"
                className="h-[40vh] w-full object-cover "
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-1 row-span-1 mt-[-11rem]">
              <Image
                src="/assets/dashboard/shop6.jpeg"
                alt="Sixth Image"
                className="h-[60vh] w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="col-span-1 row-span-1 mt-[-11rem]">
              <Image
                src="/assets/dashboard/shop5.jpeg"
                alt="Fifth Image"
                className="h-[30vh] w-full object-cover pb-6"
                width={1000}
                height={1000}
              />
              <Image
                src="/assets/dashboard/shop5.jpeg"
                alt="Fifth Image"
                className="h-[30vh] w-full object-cover "
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#c89d9e] h-auto flex items-center justify-center py-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <Image
              src="/assets/firbhet/gift.png"
              alt="Gift Card"
              width={500}
              height={300}
              className="max-w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 lg:ml-12">
            <h2 className="text-4xl text-white font-semibold mb-4">
              Gift Cards
            </h2>
            <p className="text-xl mb-4 text-white">
              Surprise your loved ones with a thoughtful gift. Customize your
              experience by choosing the perfect gift card amount and design for
              a personal touch.
            </p>
            <button className="bg-green-100 text-green-900 px-6 py-3 mt-4 font-semibold rounded shadow hover:bg-green-200">
              SHOP GIFT CARDS
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
