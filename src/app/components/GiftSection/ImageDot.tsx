// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { FiShoppingCart } from "react-icons/fi";
// import { IoMdHeartEmpty } from "react-icons/io";
// import Hotspot from "../DashComponents/Hotspot";

// // Hotspot interface for defining the structure of hotspots in an image
// interface Hotspot {
//   id: number;
//   top: number; // position from top as a number
//   left: number; // position from left as a number
//   tooltip: string; // information about the hotspot
// }

// // Image interface for defining the structure of each image object
// interface ImageProps {
//   id: number;
//   src: string;
//   alt: string;
//   hotspots?: Hotspot[]; // optional property for hotspots
// }

// const secondRowImages = [
//   "/assets/dashboard/master10.jpeg",
//   "/assets/dashboard/master11.jpeg",
//   "/assets/dashboard/master12.jpeg",
//   "/assets/dashboard/master13.jpeg",
// ];
// const thirdRowImages = [
//   "/assets/decore (1).jpg",
//   "/assets/decore (2).jpg",
//   "/assets/decore (3).jpg",
//   "/assets/decore (4).jpg",
// ];

// // DesignProps interface for the props passed to the Design component
// interface DesignProps {
//   images: ImageProps[];
//   relatedImages: Record<number, ImageProps[]>; // a map of image ids to arrays of related images
// }

// const ImageDot: React.FC<DesignProps> = ({ images, relatedImages }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [relatedSlideIndex, setRelatedSlideIndex] = useState<number>(0);

//   const handleDotClick = (index: number): void => {
//     setCurrentIndex(index);
//     setRelatedSlideIndex(0);
//   };

//   const handleBigPrevSlide = (): void => {
//     setCurrentIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const handleBigNextSlide = (): void => {
//     setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
//   };

//   const handlePrevSlide = (): void => {
//     setRelatedSlideIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const handleNextSlide = (): void => {
//     const maxIndex = relatedImages[images[currentIndex].id]?.length - 1 || 0;
//     setRelatedSlideIndex((prev) => Math.min(prev + 1, maxIndex));
//   };

//   const handleHotspotClick = (spot: string): void => {
//     console.log(`Hotspot ${spot} clicked!`);
//   };

//   return (
//     <>
//       {/* Previous Slide Button for Main Slider */}
//       <button
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
//         onClick={handleBigPrevSlide}
//         disabled={currentIndex === 0}
//       >
//         &lt;
//       </button>
//       <div className="flex relative">
//         {/* Main Slider */}
//         <div className="w-2/3 flex flex-col justify-center items-center">
//           <div className="overflow-hidden relative h-[70vh]">
//             <div className="relative w-full h-[50vh]">
//               <Image
//                 src={images[currentIndex].src}
//                 alt={images[currentIndex].alt}
//                 width={1200}
//                 height={800}
//                 className="h-[60vh]"
//               />
//               {/* Render Hotspots */}
//               {images[currentIndex].hotspots?.map((hotspot) => (
//                 <Hotspot
//                   key={hotspot.id}
//                   top={hotspot.top}
//                   left={hotspot.left}
//                   content={hotspot.tooltip}
//                   onClick={() => handleHotspotClick(hotspot.tooltip)}
//                 />
//               ))}
//             </div>
//           </div>
//           {/* Centered Dot Buttons */}
//           <div className="flex space-x-2 mt-4">
//             {images.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-3 h-3 rounded-full ${
//                   index === currentIndex ? "bg-gray-800" : "bg-gray-400"
//                 }`}
//                 onClick={() => handleDotClick(index)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Related Images Slider */}
//         <div className="w-1/3 ml-4 relative">
//           <div className="flex overflow-hidden h-[70vh] justify-center items-center">
//             <div className="flex flex-col space-y-4">
//               {relatedImages[images[currentIndex].id]
//                 ?.slice(relatedSlideIndex, relatedSlideIndex + 1)
//                 .map((image) => (
//                   <div key={image.id} className="relative">
//                     <Image
//                       src={`/assets/dashboard/${image.src}`}
//                       alt={image.alt}
//                       className="w-full h-auto"
//                       width={1000}
//                       height={1000}
//                     />
//                     <div className="absolute top-2 right-2 flex space-x-2 text-white">
//                       <button>
//                         <FiShoppingCart />
//                       </button>
//                       <button>
//                         <IoMdHeartEmpty />
//                       </button>
//                     </div>
//                     <div className="flex flex-col bottom-2 justify-center items-center left-2 text-black">
//                       <p className="text-lg">Cushion</p>
//                       <p>$100.00</p>
//                       <button className="bg-primaryrose hover:bg-primaryrosedark p-2 text-white shadow-md">
//                         View Product
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>

//           {/* Previous Slide Button for Related Images Slider */}
//           <button
//             className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
//             onClick={handlePrevSlide}
//             disabled={relatedSlideIndex === 0}
//           >
//             &lt;
//           </button>

//           {/* Next Slide Button for Related Images Slider */}
//           <button
//             className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
//             onClick={handleNextSlide}
//             disabled={
//               relatedSlideIndex >=
//               (relatedImages[images[currentIndex].id]?.length || 0) - 1
//             }
//           >
//             &gt;
//           </button>
//         </div>
//       </div>
//       {/* Next Slide Button for Main Slider */}
//       <button
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
//         onClick={handleBigNextSlide}
//         disabled={currentIndex >= images.length - 1}
//       >
//         &gt;
//       </button>
//     </>
//   );
// };

// export default ImageDot;

"use client";
import Image from "next/image";
import { useState } from "react";
import Hotspot from "../DashComponents/Hotspot";

// Extend the Image interface to include hotspots
interface Hotspot {
  id: number;
  top: string; // position from top in percentage or px
  left: string; // position from left in percentage or px
  tooltip: string; // information about the hotspot
}

interface Image {
  id: number;
  src: string;
  alt: string;
  description?: string; // Added description for the image
  hotspots?: Hotspot[]; // optional property for hotspots
}

interface DesignProps {
  images: Image[];
  relatedImages: Record<number, Image[]>;
}

const secondRowImages: Image[] = [
  {
    src: "/assets/dashboard/wall.jpg",
    alt: "Image 1",
    description: "This is the first image description.",
    id: 0,
  },
  {
    src: "/assets/dashboard/seen.png",
    alt: "Image 2",
    description: "This is the second image description.",
    id: 1,
  },
  {
    src: "/assets/dashboard/sofa.png",
    alt: "Image 3",
    description: "This is the third image description.",
    id: 2,
  },
  {
    src: "/assets/dashboard/master13.jpeg",
    alt: "Image 4",
    description: "This is the fourth image description.",
    id: 3,
  },
];

const thirdRowImages = [
  "/assets/dashboard/decore (1).jpg",
  "/assets//dashboard/decore (2).jpg",
  "/assets//dashboard/decore (3).jpg",
  "/assets//dashboard/decore (4).jpg",
];

const Design: React.FC<DesignProps> = ({ images, relatedImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rightSideImage, setRightSideImage] = useState<Image | null>(null); // State to hold the right-side image object

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setRightSideImage(secondRowImages[index]); // Set the right-side image when a dot is clicked
  };

  const handleHotspotClick = (index: number) => {
    setRightSideImage(secondRowImages[index]); // Set the right-side image when a hotspot is clicked
  };

  return (
    <>
      <div className="flex relative">
        <div className="w-2/3 flex flex-col justify-center items-center">
          <div className="overflow-hidden relative h-[70vh]">
            <div className="relative w-full h-[50vh]">
              <Image
                src={thirdRowImages[currentIndex]} // Change image based on currentIndex
                alt="Image with Hotspots"
                width={1200}
                height={800}
                className="h-[60vh]"
              />
              <div className="absolute top-1/2 left-1/3">
                <div
                  className="w-4 h-4 rounded-full bg-white blink"
                  onClick={() => handleHotspotClick(0)}
                ></div>
              </div>
              <div className="absolute top-1/2 left-2/3">
                <div
                  className="w-4 h-4 rounded-full bg-white blink"
                  onClick={() => handleHotspotClick(1)}
                ></div>
              </div>
              <div className="absolute top-3/4 left-1/2">
                <div
                  className="w-4 h-4 rounded-full bg-white blink"
                  onClick={() => handleHotspotClick(2)}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 flex flex-col justify-center items-center">
          {rightSideImage ? (
            <>
              <Image
                src={rightSideImage.src} // Display the image based on the clicked dot or hotspot
                alt={rightSideImage.alt}
                width={400} // Reduced width
                height={300} // Reduced height
                className="h-[50vh] w-[50vh]" // Further reduce the height
              />
              <p className="text-gray-600 text-center mt-2">
                {rightSideImage.description}
              </p>{" "}
            </>
          ) : (
            <div className="h-[30vh] flex items-center justify-center text-gray-500"></div>
          )}
        </div>
      </div>

      <style jsx>{`
        .blink {
          animation: blink 2s infinite;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Design;
