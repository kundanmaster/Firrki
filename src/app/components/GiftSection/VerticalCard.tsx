
// "use client";
// import Image from "next/image";
// import React, { useState, useEffect, useRef } from "react";

// const images = [
//   "/assets/shop/bathLinen.png",
//   "/assets/shop/Group 6.png",
//   "/assets/shop/Group 7.png",
//   "/assets/shop/cushionsandthrows.png",
// ];

// const infoSections = [
//   {
//     title: "Lorem ipsum",
//     subtitle: "Lorem ipsum odor amet,",
//     description:
//       "Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh enim finibus dignissim montes condimentum imperdiet eget? Torquent tortor dolor bibendum dui eu purus. Etiam elit feugiat nisl penatibus bibendum nam.",
//   },
//   {
//     title: "Lorem ipsum 2",
//     subtitle: "Lorem ipsum odor amet, 2",
//     description:
//       "Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh enim finibus dignissim montes condimentum imperdiet eget? Torquent tortor dolor bibendum dui eu purus. Etiam elit feugiat nisl penatibus bibendum nam.",
//   },
//   {
//     title: "Lorem ipsum 3",
//     subtitle: "Lorem ipsum odor amet, 3",
//     description:
//       "Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh enim finibus dignissim montes condimentum imperdiet eget? Torquent tortor dolor bibendum dui eu purus. Etiam elit feugiat nisl penatibus bibendum nam.",
//   },
//   {
//     title: "Lorem ipsum 4",
//     subtitle: "Lorem ipsum odor amet, 4",
//     description:
//       "Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh enim finibus dignissim montes condimentum imperdiet eget? Torquent tortor dolor bibendum dui eu purus. Etiam elit feugiat nisl penatibus bibendum nam.",
//   },
// ];

// const VerticalCard = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isImageLeft, setIsImageLeft] = useState(true); // New state to track image position
//   const cardRef = useRef<HTMLDivElement>(null);
//   const isInView = useRef(false);
//   const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (cardRef.current) {
//         const cardRect = cardRef.current.getBoundingClientRect();
//         const isCardInView =
//           cardRect.top <= window.innerHeight && cardRect.bottom >= 0;
//         isInView.current = isCardInView;
//       }
//     };

//     // Add scroll event listener to track visibility of the card section
//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Run once on component mount

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleWheelScroll = (e: WheelEvent) => {
//       if (!isInView.current) return; // Scroll works only when the section is in view

//       const { deltaY } = e;

//       if (scrollTimeout.current) {
//         clearTimeout(scrollTimeout.current);
//       }

//       scrollTimeout.current = setTimeout(() => {
//         const newIndex = currentIndex + (deltaY > 0 ? 1 : -1);
//         if (newIndex >= 0 && newIndex < images.length) {
//           setCurrentIndex(newIndex);
//           setIsImageLeft((prev) => !prev); // Toggle the image position
//         }
//       }, 100); // Adding a timeout to ensure smooth scrolling behavior
//     };

//     window.addEventListener("wheel", handleWheelScroll);

//     return () => {
//       if (scrollTimeout.current) {
//         clearTimeout(scrollTimeout.current);
//       }
//       window.removeEventListener("wheel", handleWheelScroll);
//     };
//   }, [currentIndex]);

//   return (
//     <div ref={cardRef} className="py-2 relative h-[100vh] w-full">
//       <div className="flex h-full w-full bg-white shadow-lg overflow-hidden">
//         {/* Conditional rendering based on isImageLeft */}
//         {isImageLeft ? (
//           <>
//             {/* Image Slider Section */}
//             <div className="flex-none w-[50%] h-full overflow-hidden relative">
//               {images.map((src, index) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
//                     index === currentIndex
//                       ? "opacity-100 translate-y-0 z-10"
//                       : "opacity-0 -translate-y-full z-0"
//                   }`}
//                 >
//                   <Image
//                     src={src}
//                     alt={`Image ${index + 1}`}
//                     layout="fill"
//                     objectFit="cover"
//                     className="w-full h-full"
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Information Slider Section */}
//             <div className="flex flex-grow w-full h-full overflow-hidden bg-[#DBE1D3] relative">
//               {infoSections.map((info, index) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 flex flex-col justify-center p-4 transition-all duration-500 ease-in-out transform ${
//                     index === currentIndex
//                       ? "opacity-100 translate-y-0 z-10"
//                       : "opacity-0 translate-y-full z-0"
//                   }`}
//                 >
//                   <div className="px-10">
//                     <p className="text-primaryrose text-2xl text-md">
//                       {info.title}
//                     </p>
//                     <p className="text-6xl">{info.subtitle}</p>
//                     <p className="text-xl">{info.description}</p>
//                     <div className="pb-6">
//                       <button className="bg-primaryrose hover:bg-primaryrosedark py-2 text-white px-14">
//                         Explore
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <>
//             {/* Information Slider Section */}
//             <div className="flex flex-grow w-full h-full overflow-hidden bg-[#DBE1D3] relative">
//               {infoSections.map((info, index) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 flex flex-col justify-center p-4 transition-all duration-500 ease-in-out transform ${
//                     index === currentIndex
//                       ? "opacity-100 translate-y-0 z-10"
//                       : "opacity-0 translate-y-full z-0"
//                   }`}
//                 >
//                   <div className="px-10">
//                     <p className="text-primaryrose text-2xl text-md">
//                       {info.title}
//                     </p>
//                     <p className="text-6xl">{info.subtitle}</p>
//                     <p className="text-xl">{info.description}</p>
//                     <div className="pb-6">
//                       <button className="bg-primaryrose hover:bg-primaryrosedark py-2 text-white px-14">
//                         Explore
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Image Slider Section */}
//             <div className="flex-none w-[50%] h-full overflow-hidden relative">
//               {images.map((src, index) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
//                     index === currentIndex
//                       ? "opacity-100 translate-y-0 z-10"
//                       : "opacity-0 -translate-y-full z-0"
//                   }`}
//                 >
//                   <Image
//                     src={src}
//                     alt={`Image ${index + 1}`}
//                     layout="fill"
//                     objectFit="cover"
//                     className="w-full h-full"
//                   />
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* Dot Navigation */}
//         <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-10">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               className={`w-5 h-5 rounded-full border-2 border-black transition-opacity duration-500 ease-in-out ${
//                 currentIndex === index
//                   ? "bg-black opacity-100"
//                   : "bg-transparent opacity-50"
//               }`}
             
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerticalCard;


"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const images = [
  "/assets/shop/bathLinen.png",
  "/assets/shop/Group 6.png",
  "/assets/shop/Group 7.png",
  "/assets/shop/cushionsandthrows.png",
];

const infoSections = [
  {
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum odor amet,",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh enim finibus dignissim montes condimentum imperdiet eget? Torquent tortor dolor bibendum dui eu purus. Etiam elit feugiat nisl penatibus bibendum nam.",
  },
  {
    title: "Lorem ipsum 2",
    subtitle: "Lorem ipsum odor amet, 2",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh enim finibus dignissim montes condimentum imperdiet eget? Torquent tortor dolor bibendum dui eu purus. Etiam elit feugiat nisl penatibus bibendum nam.",
  },
  {
    title: "Lorem ipsum 3",
    subtitle: "Lorem ipsum odor amet, 3",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh enim finibus dignissim montes condimentum imperdiet eget? Torquent tortor dolor bibendum dui eu purus. Etiam elit feugiat nisl penatibus bibendum nam.",
  },
  {
    title: "Lorem ipsum 4",
    subtitle: "Lorem ipsum odor amet, 4",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh enim finibus dignissim montes condimentum imperdiet eget? Torquent tortor dolor bibendum dui eu purus. Etiam elit feugiat nisl penatibus bibendum nam.",
  },
];

const VerticalCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLeft, setIsImageLeft] = useState(true); // Track image position
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const cardRect = cardRef.current.getBoundingClientRect();
        const isCardInView =
          cardRect.top <= window.innerHeight && cardRect.bottom >= 0;
        isInView.current = isCardInView;
      }
    };

    // Add scroll event listener to track visibility of the card section
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleWheelScroll = (e: WheelEvent) => {
      if (!isInView.current) return; // Scroll works only when the section is in view

      const { deltaY } = e;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        const newIndex = currentIndex + (deltaY > 0 ? 1 : -1);
        if (newIndex >= 0 && newIndex < images.length) {
          setCurrentIndex(newIndex);
          setIsImageLeft((prev) => !prev); // Toggle the image position
        }
      }, 100); // Adding a timeout to ensure smooth scrolling behavior
    };

    window.addEventListener("wheel", handleWheelScroll);

    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      window.removeEventListener("wheel", handleWheelScroll);
    };
  }, [currentIndex]);

  return (
    <div ref={cardRef} className="py-2 relative h-[100vh] w-full overflow-hidden">
      <div className="flex h-full w-full bg-white shadow-lg">
        {/* Conditional rendering based on isImageLeft */}
        {isImageLeft ? (
          <>
            {/* Image Slider Section */}
            <div className="flex-none w-[40%] h-[80%] overflow-hidden relative">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                    index === currentIndex
                      ? "opacity-100 translate-y-0 z-10"
                      : "opacity-0 -translate-y-full z-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Information Slider Section */}
            <div className="flex flex-grow w-full h-full overflow-hidden bg-[#DBE1D3] relative">
              {infoSections.map((info, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col justify-center p-4 transition-all duration-500 ease-in-out transform ${
                    index === currentIndex
                      ? "opacity-100 translate-y-0 z-10"
                      : "opacity-0 translate-y-full z-0"
                  }`}
                >
                  <div className="px-10">
                    <p className="text-primaryrose text-2xl">{info.title}</p>
                    <p className="text-4xl">{info.subtitle}</p>
                    <p className="text-xl">{info.description}</p>
                    <div className="pb-6">
                      <button className="bg-primaryrose hover:bg-primaryrosedark py-2 text-white px-14">
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Information Slider Section */}
            <div className="flex flex-grow w-full h-full overflow-hidden bg-[#DBE1D3] relative">
              {infoSections.map((info, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col justify-center p-4 transition-all duration-500 ease-in-out transform ${
                    index === currentIndex
                      ? "opacity-100 translate-y-0 z-10"
                      : "opacity-0 translate-y-full z-0"
                  }`}
                >
                  <div className="px-10">
                    <p className="text-primaryrose text-2xl">{info.title}</p>
                    <p className="text-4xl">{info.subtitle}</p>
                    <p className="text-xl">{info.description}</p>
                    <div className="pb-6">
                      <button className="bg-primaryrose hover:bg-primaryrosedark py-2 text-white px-14">
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Slider Section */}
            <div className="flex-none w-[40%] h-[80%] overflow-hidden relative">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                    index === currentIndex
                      ? "opacity-100 translate-y-0 z-10"
                      : "opacity-0 -translate-y-full z-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Dot Navigation */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-10">
  {images.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentIndex(index)} // Update currentIndex on click
      className={`w-5 h-5 rounded-full border-2 border-black transition-opacity duration-500 ease-in-out ${
        currentIndex === index
          ? "bg-primaryrosedark opacity-100"
          : "bg-transparent opacity-50"
      }`}
    />
  ))}
</div>

      </div>
    </div>
  );
};

export default VerticalCard;
