/* eslint-disable react/no-unescaped-entities */
// "use client";

// import Image from "next/image";
// import HeaderLayout from "../components/HeaderLayout";
// import { SetStateAction, useState } from "react";
// import Footer from "../components/DashComponents/Footer";
// import { MdArrowForwardIos } from "react-icons/md";
// import { MdArrowBackIos } from "react-icons/md";

// export default function GiftSection() {
//   const [activeTab, setActiveTab] = useState<string>("FESTIVE");
//   const [currentIndex, setCurrentIndex] = useState<number>(0);

//   const images = [
//     { src: "/assets/firbhet/Vector (5).png", alt: "Vector 5", label: "Lorem" },
//     { src: "/assets/firbhet/Vector (4).png", alt: "Vector 4", label: "Lorem" },
//     { src: "/assets/firbhet/Vector (6).png", alt: "Vector 6", label: "Lorem" },
//     { src: "/assets/firbhet/Vector (5).png", alt: "Vector 7", label: "Lorem" },
//     { src: "/assets/firbhet/Vector (4).png", alt: "Vector 8", label: "Lorem" },
//   ];

//   const handleTabClick = (tab: string) => {
//     setActiveTab(tab);
//   };

//   const handleLeftArrowClick = () => {
//     // If at the first image, loop to the last image
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 3 : prevIndex - 1
//     );
//   };

//   const handleRightArrowClick = () => {
//     // If at the last visible image set, loop to the first image
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 3 ? 0 : prevIndex + 1
//     );
//   };

//   const secondRowImages = [
//     "/assets/dashboard/master10.jpeg",
//     "/assets/dashboard/master11.jpeg",
//     "/assets/dashboard/master12.jpeg",
//     "/assets/dashboard/master13.jpeg",
//   ];
//   const thirdRowImages = [
//     "/assets/dashboard/master14.jpeg",
//     "/assets/dashboard/master15.jpeg",
//     "/assets/dashboard/master5.jpeg",
//     "/assets/dashboard/master6.jpeg",
//   ];
//   return (
//     <div>
//       <HeaderLayout OtherPage={undefined}>s</HeaderLayout>

//       <div
//         className="relative flex justify-center items-center w-full bg-cover bg-center"
//         style={{ backgroundImage: `url('/assets/dashboard/master18.jpeg')` }}
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4 py-6">
//           <div className="relative flex justify-center sm:justify-end">
//             <Image
//               src="/assets/firbhet/image.png"
//               alt="Decorative Plate"
//               width={500} // Increased size
//               height={500} // Increased size
//               className=""
//               style={{ marginRight: "10px" }}
//             />
//           </div>
//           <div className="relative flex justify-center items-center">
//             <Image
//               src="/assets/firbhet/image (1).png"
//               alt="Gift2"
//               width={500} // Increased size
//               height={500} // Increased size
//               className=""
//               style={{ zIndex: 1 }}
//             />

//             <div
//               className="absolute flex flex-col justify-center items-center text-center rounded-b-full rounded-t-full"
//               style={{
//                 zIndex: 2,
//                 backgroundColor: "#c89d9ee8", // Adjust opacity for semi-transparency
//                 padding: "20px",
//                 width: "340px",
//                 height: "420px", // Increased height to match the design
//                 top: "50%", // Centering vertically
//                 left: "50%", // Centering horizontally
//                 transform: "translate(-50%, -50%)", // Adjust positioning
//                 border: "", // Outer Border similar to the UI
//               }}
//             >
//               <div
//                 className="rounded-b-full rounded-t-full"
//                 style={{
//                   position: "absolute",
//                   top: "10px",
//                   left: "10px",
//                   right: "10px",
//                   bottom: "10px",
//                   // borderRadius: "50%", // Inner rounded border
//                   border: "3px solid rgba(255, 255, 255, 0.5)",
//                 }}
//               ></div>

//               <Image
//                 src="/assets/firbhet/flower.png" // Replace this with the correct path to your flower image (flr.png)
//                 alt="Flower"
//                 width={90}
//                 height={90}
//                 className="mb-4 mt-8" // Adds margin above and below the flower image
//               />

//               <hr
//                 style={{
//                   width: "102%",
//                   borderTop: "2px solid rgba(255, 255, 255, 0.8)",
//                   marginBottom: "16px", // Margin below the line
//                 }}
//               />

//               <h2 className="text-3xl font-bold mb-8 text-white">
//                 Cherished Gems
//               </h2>
//               <p className="text-lg text-white mb-8">
//                 Crafted with care, our designs offer timeless elegance and
//                 allure.
//               </p>
//               <a href="#" className="text-white font-semibold mb-12">
//                 DISCOVER GIFTING
//               </a>
//             </div>
//           </div>

//           <div className="relative flex justify-center sm:justify-start">
//             <Image
//               src="/assets/firbhet/image (2).png"
//               alt="Gift Box"
//               width={500} // Increased size
//               height={500} // Increased size
//               className=""
//               style={{ marginLeft: "10px" }}
//             />
//           </div>
//         </div>
//       </div>

//       <div
//         className="w-full bg-no-repeat text-center md:h-auto sm:h-[100vh] mt-0"
//         style={{
//           backgroundColor: "#c89d9e",
//           backgroundSize: "100% auto",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="flex flex-col justify-center items-center h-auto">
//           <div className="font-bold text-white text-4xl mt-12">
//             Shop by Occasion
//           </div>
//           <div className="font-semibold text-white text-xl mt-6 mb-6">
//             <a
//               href="#"
//               onClick={() => handleTabClick("FESTIVE")}
//               className={`inline-block mx-2 px-4 py-2 ${
//                 activeTab === "FESTIVE" ? "underline" : ""
//               }`}
//             >
//               FESTIVE
//             </a>
//             <a
//               href="#"
//               onClick={() => handleTabClick("HOUSEWARMING")}
//               className={`inline-block mx-2 px-4 py-2 ${
//                 activeTab === "HOUSEWARMING" ? "underline" : ""
//               }`}
//             >
//               HOUSEWARMING
//             </a>
//             <a
//               href="#"
//               onClick={() => handleTabClick("BIRTHDAY")}
//               className={`inline-block mx-2 px-4 py-2 ${
//                 activeTab === "BIRTHDAY" ? "underline" : ""
//               }`}
//             >
//               BIRTHDAY
//             </a>
//             <a
//               href="#"
//               onClick={() => handleTabClick("WEDDING")}
//               className={`inline-block mx-2 px-4 py-2 ${
//                 activeTab === "WEDDING" ? "underline" : ""
//               }`}
//             >
//               WEDDING
//             </a>
//           </div>

//           <div className="relative w-full flex items-center justify-center overflow-hidden">
//             {/* Left Arrow */}
//             <button
//               className="absolute left-0 h-[100vh] top-1/2 transform -translate-y-1/2 z-10 bg-[#c89d9e] p-3"
//               onClick={handleLeftArrowClick}
//             >
//               <MdArrowBackIos className="text-white text-2xl" size={100} />
//             </button>

//             {/* Carousel Images */}
//             <div
//               className="flex transition-transform duration-500 ease-in-out w-full mx-20"
//               style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
//             >
//               {images.map((image, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 w-full md:w-1/3 lg:h-[40rem] md:h-[20rem] sm:h-[30rem] mt-4 py-10 flex flex-col items-center justify-center"
//                   style={{
//                     flex: "0 0 33.3333%", // Take up one-third of the container
//                   }}
//                 >
//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     width={500}
//                     height={500}
//                     className="w-full h-full object-cover rounded-t-full px-10"
//                     style={{
//                       borderBottomLeftRadius: 0,
//                       borderBottomRightRadius: 0,
//                     }}
//                   />
//                   <div className="text-white text-center mt-2 text-2xl">
//                     {image.label}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right Arrow */}
//             <button
//               className="absolute right-0 h-[100vh] top-1/2 transform -translate-y-1/2 z-10 bg-[#c89d9e] p-3"
//               onClick={handleRightArrowClick}
//             >
//               <MdArrowForwardIos className="text-white text-2xl" size={100} />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div
//         className="pb-4"
//         style={{
//           backgroundImage: `url('/assets/dashboard/master18.jpeg')`,
//         }}
//       >
//         <div className="grid grid-rows-3 grid-flow-col grid-cols-4 gap-4 p-4">
//           <div className="row-span-2 col-span-2 bg-slate-700 h-[70vh]">
//             <Image
//               src={secondRowImages[2]} // Image from secondRowImages array
//               alt="Image 3"
//               width={1200}
//               height={800}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           <div className="bg-slate-700 h-[34vh]">
//             <Image
//               src={secondRowImages[2]} // Image from secondRowImages array
//               alt="Image 3"
//               width={1200}
//               height={800}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           <div className="bg-slate-700 h-[34vh]">
//             <Image
//               src={secondRowImages[2]} // Image from secondRowImages array
//               alt="Image 3"
//               width={1200}
//               height={800}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           <div className="row-span-1 bg-slate-700 h-[34vh]">
//             <Image
//               src={thirdRowImages[3]} // Image from thirdRowImages array
//               alt="Image 8"
//               width={1200}
//               height={800}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           <div className="row-span-2 bg-slate-700 h-[70vh]">
//             <Image
//               src={thirdRowImages[3]} // Image from thirdRowImages array
//               alt="Image 8"
//               width={1200}
//               height={800}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           <div className="row-span-1 bg-slate-700 h-[34vh]">
//             <Image
//               src={thirdRowImages[3]}
//               alt="Image 8"
//               width={1200}
//               height={800}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           <div className="bg-slate-700 h-[34vh]">
//             <Image
//               src={thirdRowImages[3]}
//               alt="Image 8"
//               width={1200}
//               height={800}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           <div className="bg-slate-700 h-[34vh]">
//             <Image
//               src={thirdRowImages[3]}
//               alt="Image 8"
//               width={1200}
//               height={800}
//               className="object-cover w-full h-full"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="bg-[#c89d9e] h-auto flex items-center justify-center py-12">
//         <div className="container mx-auto flex flex-col lg:flex-row items-center">
//           <div className="w-full lg:w-1/2">
//             <Image
//               src="/assets/firbhet/gift.png"
//               alt="Gift Card"
//               width={500}
//               height={300}
//               className="max-w-full h-auto"
//             />
//           </div>
//           <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 lg:ml-12">
//             <h2 className="text-4xl text-white font-semibold mb-4">
//               Gift Cards
//             </h2>
//             <p className="text-xl mb-4 text-white">
//               Surprise your loved ones with a thoughtful gift. Customize your
//               experience by choosing the perfect gift card amount and design for
//               a personal touch.
//             </p>
//             <button className="bg-green-100 text-green-900 px-6 py-3 mt-4 font-semibold rounded shadow hover:bg-green-200">
//               SHOP GIFT CARDS
//             </button>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }



"use client";

import Image from "next/image";
import HeaderLayout from "../components/HeaderLayout";
import { SetStateAction, useState } from "react";
import Footer from "../components/DashComponents/Footer";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

export default function GiftSection() {
  const [activeTab, setActiveTab] = useState<string>("FESTIVE");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const images = [
    { src: "/assets/firbhet/Vector (5).png", alt: "Vector 5", label: "Lorem" },
    { src: "/assets/firbhet/Vector (4).png", alt: "Vector 4", label: "Lorem" },
    { src: "/assets/firbhet/Vector (6).png", alt: "Vector 6", label: "Lorem" },
    { src: "/assets/firbhet/Vector (5).png", alt: "Vector 7", label: "Lorem" },
    { src: "/assets/firbhet/Vector (4).png", alt: "Vector 8", label: "Lorem" },
  ];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleLeftArrowClick = () => {
    // If at the first image, loop to the last image
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    // If at the last visible image set, loop to the first image
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? 0 : prevIndex + 1
    );
  };

  const secondRowImages = [
    "/assets/firbhet/Vector (6).png",
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
          <div className="relative flex justify-center items-center">
            <Image
              src="/assets/firbhet/image (1).png"
              alt="Gift2"
              width={500} // Increased size
              height={500} // Increased size
              className=""
              style={{ zIndex: 1 }}
            />

            <div
              className="absolute flex flex-col justify-center items-center text-center rounded-b-full rounded-t-full"
              style={{
                zIndex: 2,
                backgroundColor: "#c89d9ee8", // Adjust opacity for semi-transparency
                padding: "20px",
                width: "340px",
                height: "420px", // Increased height to match the design
                top: "50%", // Centering vertically
                left: "50%", // Centering horizontally
                transform: "translate(-50%, -50%)", // Adjust positioning
                border: "", // Outer Border similar to the UI
              }}
            >
              <div
                className="rounded-b-full rounded-t-full"
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  right: "10px",
                  bottom: "10px",
                  // borderRadius: "50%", // Inner rounded border
                  border: "3px solid rgba(255, 255, 255, 0.5)",
                }}
              ></div>

              <Image
                src="/assets/firbhet/flower.png" // Replace this with the correct path to your flower image (flr.png)
                alt="Flower"
                width={90}
                height={90}
                className="mb-4 mt-8" // Adds margin above and below the flower image
              />

              <hr
                style={{
                  width: "102%",
                  borderTop: "2px solid rgba(255, 255, 255, 0.8)",
                  marginBottom: "16px", // Margin below the line
                }}
              />

              <h2 className="text-3xl font-bold mb-8 text-white">
                Cherished Gems
              </h2>
              <p className="text-lg text-white mb-8">
                Crafted with care, our designs offer timeless elegance and
                allure.
              </p>
              <a href="#" className="text-white font-semibold mb-12">
                DISCOVER GIFTING
              </a>
            </div>
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

      <div
        className="w-full bg-no-repeat text-center md:h-auto sm:h-[100vh] mt-0"
        style={{
          backgroundColor: "#c89d9e",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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

          <div className="relative w-full flex items-center justify-center overflow-hidden">
            <button
              className="absolute left-0 h-[100vh] top-1/2 transform -translate-y-1/2 z-10 bg-[#c89d9e] p-3"
              onClick={handleLeftArrowClick}
            >
              <MdArrowBackIos className="text-white text-2xl" size={100} />
            </button>

            <div
              className="flex transition-transform duration-500 ease-in-out w-full mx-20"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/3 lg:h-[40rem] md:h-[20rem] sm:h-[30rem] mt-4 py-10 flex flex-col items-center justify-center"
                  style={{
                    flex: "0 0 33.3333%", // Take up one-third of the container
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-t-full px-10"
                    style={{
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <div className="text-white text-center mt-2 text-2xl">
                    {image.label}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="absolute right-0 h-[100vh] top-1/2 transform -translate-y-1/2 z-10 bg-[#c89d9e] p-3"
              onClick={handleRightArrowClick}
            >
              <MdArrowForwardIos className="text-white text-2xl" size={100} />
            </button>
          </div>
        </div>
      </div>

      <div
        className="pb-4"
        style={{
          backgroundImage: `url('/assets/dashboard/master188.jpg')`,
        }}
      >  
        {/* <div className="relative flex items-center justify-center h-32">
        <h1 className="absolute inset-0 flex flex-col items-center justify-center 
        text-center text-[#2C4456] lg:text-6xl md:text-4xl sm:text-2xl text-[The Nautigal] font-bold ">
        <span>Gift Warmth, Gift Memories ,Gift Love</span>
        
      </h1>
    </div> */}
        <div
          className="relative w-full bg-no-repeat text-center flex items-center mt-[px] justify-center min-h-[140px] sm:min-h-[200px] md:min-h-[310px] lg:min-h-[300px] xl:min-h-[420px] 2xl:min-h-[280px] "
          style={{
            backgroundImage: "url(/assets/dashboard/master166.jpg)",
            backgroundSize: "100% auto",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            
            className="relative flex items-center mt-[-110px] justify-center"
          >
            <h1 className="  flex flex-col items-center justify-center 
                text-center text-[#2C4456] lg:text-6xl md:text-4xl sm:text-2xl text-[The Nautigal] font-bold">
            <span>Gift Warmth, Gift Memories </span>
              <span>Gift Love</span>
            </h1>
          </div>
        </div>
        <div className="grid grid-rows-3 grid-flow-col mt-[-290px] grid-cols-4 gap-4 p-52">
          <div className="row-span-2 col-span-2 bg-slate-700 h-[70vh]">
            <Image
              src="/assets/firbhet/Vector (6).png" // Image from secondRowImages array
              alt="Image 3"
              width={1200}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="bg-slate-700 h-[34vh]">
            <Image
              src="/assets/firbhet/image (5).png" // Image from secondRowImages array
              alt="Image 3"
              width={1200}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>

         
         
          <div className="bg-[#dce4d4] flex items-center justify-center">
                  <p className="text-[#2a445d] text-2xl text-center font-semibold">
                  Brighten your loved ones' days with surprise gifts that fill their lives with joy and magic.
                 </p>
            </div>


          <div className="row-span-1 bg-slate-700 h-[34vh]">
            <Image
              src="/assets/firbhet/image (3).png" // Image from thirdRowImages array
              alt="Image 8"
              width={1200}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="row-span-2 bg-slate-700 h-[70vh]">
            <Image
              src="/assets/firbhet/table.png" // Image from thirdRowImages array
              alt="Image 8"
              width={1200}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>

        
        
            <div className="bg-[#c89d9e] flex items-center justify-center">
                  <p className="text-white text-2xl text-center font-semibold">
                  Surprise your loved ones with thoughtful gifts that add a touch of magic and happiness to their everyday moments..
                 </p>
        </div>

          <div className="bg-slate-700 h-[34vh]">
            <Image
              src="/assets/firbhet/image (4).png"
              alt="Image 8"
              width={1200}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="bg-slate-700 h-[34vh]">
            <Image
              src={thirdRowImages[3]}
              alt="Image 8"
              width={1200}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#c89d9e] h-auto flex items-center mt-[-200px] justify-center py-12 ">

        <div className="container mx-auto flex flex-col lg:flex-row items-center"
        
        
        
        >
          <div className="w-full lg:w-1/2">
            <Image
              src="/assets/firbhet/gift.png"
              alt="Gift Card"
              width={500}
              height={300}
              className="max-w-full h-auto ml-32"
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
      <div className="relative w-full bg-no-repeat text-center flex items-center mt-[px] justify-center min-h-[1px] sm:min-h-[200px] md:min-h-[2px] lg:min-h-[300px] xl:min-h-[40px] 2xl:min-h-[20px] "
      style={{
        backgroundImage: "url(/assets/dashboard/master188.jpg)",
        backgroundSize: "100% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>

      <Footer />
    </div>
  );
}
