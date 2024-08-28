"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CustomTooltip from "../Popover";

// Sample data for image details
interface ImageDetail {
  title: string;
  description: string;
  price: string; // Adding price for tooltip
  image: string;
}

const imageDetails: Record<string, ImageDetail> = {
  "/assets/dashboard/master10.jpeg": {
    title: "Image 10",
    description: "Description for image 10.",
    price: "$10.00",
    image: "/assets/dashboard/master10.jpeg",
  },
  "/assets/dashboard/master11.jpeg": {
    title: "Image 11",
    description: "Description for image 11.",
    price: "$11.00",
    image: "/assets/dashboard/master11.jpeg",
  },
  "/assets/dashboard/master12.jpeg": {
    title: "Image 12",
    description: "Description for image 12.",
    price: "$12.00",
    image: "/assets/dashboard/master12.jpeg",
  },
  "/assets/dashboard/master13.jpeg": {
    title: "Image 13",
    description: "Description for image 13.",
    price: "$13.00",
    image: "/assets/dashboard/master13.jpeg",
  },
  "/assets/dashboard/master14.jpeg": {
    title: "Image 14",
    description: "Description for image 14.",
    price: "$14.00",
    image: "/assets/dashboard/master14.jpeg",
  },
  "/assets/dashboard/master15.jpeg": {
    title: "Image 15",
    description: "Description for image 15.",
    price: "$15.00",
    image: "/assets/dashboard/master15.jpeg",
  },
  "/assets/dashboard/master5.jpeg": {
    title: "Image 5",
    description: "Description for image 5.",
    price: "$5.00",
    image: "/assets/dashboard/master5.jpeg",
  },
  "/assets/dashboard/master6.jpeg": {
    title: "Image 6",
    description: "Description for image 6.",
    price: "$6.00",
    image: "/assets/dashboard/master6.jpeg",
  },
};

const items = [
  {
    title: "Image 10",
    description: "Description for image 10.",
    price: "$10.00",
    image: "/assets/dashboard/master10.jpeg",
  },
  // Add more items as needed
];

const LandingPage1: React.FC = () => {
  const router = useRouter();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handleModalImageClick = (src: string) => {
    router.push(`/image-details?src=${src}`);
  };

  return (
    <>
      <div
        className="relative w-full bg-no-repeat text-center flex items-center justify-center min-h-[140px] sm:min-h-[200px] md:min-h-[250px] lg:min-h-[300px] xl:min-h-[420px] 2xl:min-h-[500px]"
        style={{
          backgroundImage: "url(/assets/dashboard/master166.jpg)",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative flex items-center justify-center h-20">
          <h1 className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#2C4456] lg:text-6xl md:text-4xl sm:text-2xl  font-bold ">
            <span>INSTAGRAM</span>
            <span>HIGHLIGHTS</span>
          </h1>
        </div>
      </div>
      {/* <div className="relative bg-gray-100 p-4">
        <div className="grid grid-cols-4 gap-4 p-4">
          <div className="flex flex-col gap-4">
            {secondRowImages.map((src, index) => (
              <div key={index} className="h-[60]">
                {isSmallScreen ? (
                  
                    <Image
                      src={src}
                      alt={`Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="shadow-md cursor-pointer"
                    />
                  
                ) : (
                  <CustomTooltip
                    items={[imageDetails[src]]}
                    triggerElement={
                      <Image
                        src={src}
                        alt={`Image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="shadow-md cursor-pointer"
                      />
                    }
                    placement={index % 2 === 0 ? "left" : "right"} // Alternate left and right placement
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {thirdRowImages.map((src, index) => (
              <div
                key={index + 4}
                className="h-[40]"
              >
                {isSmallScreen ? (
                  <Image
                    src={src}
                    alt={`Image ${index + 5}`}
                    layout="fill"
                    objectFit="cover"
                    className="shadow-md cursor-pointer"
                  />
                ) : (
                  <CustomTooltip
                    items={[imageDetails[src]]}
                    triggerElement={
                      <Image
                        src={src}
                        alt={`Image ${index + 5}`}
                        layout="fill"
                        objectFit="cover"
                        className="shadow-md cursor-pointer"
                      />
                    }
                    placement={index % 2 === 0 ? "left" : "right"} // Alternate left and right placement
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div
        className="relative w-full bg-no-repeat text-center"
        style={{
          backgroundImage: `url("/assets/dashboard/master188.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          paddingLeft: "30px", // Add left padding for overall page
        }}
      >
        <div className="grid grid-cols-4 gap-4 p-4">
          {/* First Column */}
          <div className="flex flex-col gap-4">
            <div className="h-[60vh]">
              <CustomTooltip
                items={items}
                triggerElement={
                  <Image
                    src={secondRowImages[0]} // Image from secondRowImages array
                    alt="Image 1"
                    width={1200}
                    height={800}
                    className="object-cover w-full h-full"
                  />
                }
                placement="left" // Customize placement as needed
              />
            </div>
            <div className="h-[40vh]">
              <Image
                src={secondRowImages[1]} // Image from secondRowImages array
                alt="Image 2"
                width={1200}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-4">
            <div className="h-[70vh]">
              <Image
                src={secondRowImages[2]} // Image from secondRowImages array
                alt="Image 3"
                width={1200}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[30vh]">
              <Image
                src={secondRowImages[3]} // Image from secondRowImages array
                alt="Image 4"
                width={1200}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col gap-4">
            <div className="h-[60vh]">
              <Image
                src={thirdRowImages[0]} // Image from thirdRowImages array
                alt="Image 5"
                width={1200}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[40vh]">
              <Image
                src={thirdRowImages[1]} // Image from thirdRowImages array
                alt="Image 6"
                width={1200}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Fourth Column */}
          <div className="flex flex-col gap-4">
            <div className="h-[70vh]">
              <Image
                src={thirdRowImages[2]} // Image from thirdRowImages array
                alt="Image 7"
                width={1200}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[30vh]">
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
    </>
  );
};

export default LandingPage1;
