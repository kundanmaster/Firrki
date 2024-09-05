

// "use client";

// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import HeaderLayout from "../components/HeaderLayout";
// import { SetStateAction, useState } from "react";
// import Footer from "../components/DashComponents/Footer";

// import ScrollToTopButton from "../components/ScrollToTopButton";

// export default function GiftSection() {



//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const router = useRouter();

//   const images = [
//     { src: "/assets/firbhet/Vector (5).png", alt: "Vector 5", label: "Festival" },
//     { src: "/assets/firbhet/Vector (4).png", alt: "Vector 4", label: "Personalized" },
//     { src: "/assets/firbhet/Vector (6).png", alt: "Vector 6", label: "Corporate" },
//     { src: "/assets/firbhet/Vector (5).png", alt: "Vector 7", label: "Wedding" },
//   ];

//   const handleImageClick = (index: number) => {
//     router.push(`/firrbhet/${index}`);
//   };

//   const secondRowImages = [
//     "/assets/firbhet/Vector (6).png",
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
//   <Image
//     src="/assets/firbhet/image (1).png"
//     alt="Gift2"
//     width={500}
//     height={500}
//     className="relative"
//     style={{ zIndex: 1 }} // Background image
//   />

//   <div className="absolute flex flex-col justify-center items-center text-center" style={{ zIndex: 2 }}>
//     <Image
//       src="/assets/firbhet/Group 45 (4).png"
//       alt="Discover Gift"
//       width={300}
//       height={300}
//     />
//   </div>
// </div>

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
//       <div className="flex flex-col justify-center items-center h-auto">
//           <div className="font-['Times New Roman'] font-bold text-white text-6xl mt-12">
//             Curate for Occasion
//           </div>

//           <div className="relative w-full flex items-center justify-center overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out w-full mx-20"
//               style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
//             >
//               {images.map((image, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 w-full md:w-1/3 lg:h-[37rem] md:h-[20rem] sm:h-[27rem] mt-4 py-10 flex flex-col items-center justify-center"
//                   style={{
//                     flex: "0 0 25%", // Take up one-third of the container
//                   }}
//                   onClick={() => handleImageClick(index)}
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
//           </div>
//         </div>
//       </div>

//       <div
//         className="pb-4"
//         style={{
//           backgroundImage: `url('/assets/dashboard/master188.jpg')`,
//         }}
//       >  

//         <div
//           className=" w-full bg-no-repeat text-center flex items-center   justify-center min-h-[140px] sm:min-h-[50rem] md:min-h-[310px] lg:min-h-[300px] xl:min-h-[420px] 2xl:min-h-[38rem] "
//           style={{
//             backgroundImage: "url(/assets/dashboard/master166.jpg)",
//             backgroundSize: "100% auto",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <div

//             className="relative flex items-center mt-[-10px] justify-center"
//           >
//             <h1 className="  flex flex-col items-center justify-center 
//                 text-center text-[#2C4456] lg:text-6xl md:text-4xl sm:text-2xl text-[The Nautigal] font-bold">
//             <span>Gift Warmth, Gift Memories </span>
//               <span>Gift Love</span>
//             </h1>
//           </div>
//         </div>
//         <div className="grid grid-rows-3 grid-flow-col mt-[-290px] grid-cols-4 gap-4 p-52">
//           <div className="row-span-2 col-span-2 bg-slate-700 h-[70vh]">
//             <Image
//               src="/assets/firbhet/Vector (6).png" // Image from secondRowImages array
//               alt="Image 3"
//               width={1200}
//               height={800}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           <div className="bg-slate-700 h-[34vh]">
//             <Image
//               src="/assets/firbhet/image (5).png" // Image from secondRowImages array
//               alt="Image 3"
//               width={1200}
//               height={800}
//               className="object-cover w-full h-full"
//             />
//           </div>



//           <div className="bg-[#dce4d4] flex items-center justify-center">
//                   <p className="text-[#2a445d] text-2xl text-center font-semibold">
//                   Brighten your loved ones days with surprise gifts that fill their lives with joy and magic.
//                  </p>
//             </div>


//           <div className="row-span-1 bg-slate-700 h-[34vh]">
//             <Image
//               src="/assets/firbhet/image (3).png" // Image from thirdRowImages array
//               alt="Image 8"
//               width={1200}
//               height={800}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           <div className="row-span-2 bg-slate-700 h-[70vh]">
//             <Image
//               src="/assets/firbhet/table.png" // Image from thirdRowImages array
//               alt="Image 8"
//               width={1200}
//               height={800}
//               className="object-cover w-full h-full"
//             />
//           </div>



//             <div className="bg-[#c89d9e] flex items-center justify-center">
//                   <p className="text-white text-2xl text-center font-semibold">
//                   Surprise your loved ones with thoughtful gifts that add a touch of magic and happiness to their everyday moments
//                  </p>
//         </div>

//           <div className="bg-slate-700 h-[34vh]">
//             <Image
//               src="/assets/firbhet/image (4).png"
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
//       <div className="bg-[#c89d9e] h-auto flex items-center mt-[-200px] justify-center py-12 ">

//         <div className="container mx-auto flex flex-col lg:flex-row items-center"



//         >
//           <div className="w-full lg:w-1/2">
//             <Image
//               src="/assets/firbhet/gift.png"
//               alt="Gift Card"
//               width={500}
//               height={300}
//               className="max-w-full h-auto ml-32"
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
//       <div className="relative w-full bg-no-repeat text-center flex items-center mt-[px] justify-center min-h-[1px] sm:min-h-[200px] md:min-h-[2px] lg:min-h-[300px] xl:min-h-[40px] 2xl:min-h-[20px] "
//       style={{
//         backgroundImage: "url(/assets/dashboard/master188.jpg)",
//         backgroundSize: "100% auto",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     ></div>
//         <div className="flex h-[50vh]">
//       {/* Left side with image */}
//       <div className="w-1/2 flex items-center h-[50vh] justify-center">
//         <Image
//           src="/assets/firbhet/OT85EJ1.png"
//           alt="Gifting Specialist"
//           className="object-cover h-[50vh] w-[100vh]"
//           width={700}
//           height={100}
//         />
//       </div>

//       {/* Right side with text */}
//       <div className="w-1/2 bg-[#769ba4] flex flex-col justify-center items-center text-center">
//         <h1 className="text-3xl text-white font-semibold mb-4">
//         <span className="block">Connect with our</span>
//         <span className="block">Gifting Specialist</span>  
//              </h1>

//         <a href="/contact-us" className="text-lg text-white underline">
//           Contact Us
//         </a>
//       </div>
//     </div>
//     <br/>

//       <Footer />
//       <ScrollToTopButton/>
//     </div>
//   );
// }



"use client";

import Image from "next/image";
import HeaderLayout from "../components/HeaderLayout";
import { useState } from "react";
import Footer from "../components/DashComponents/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function GiftSection() {
  const [clickedImage, setClickedImage] = useState<{ src: string; alt: string } | null>(null);

  const images = [
    { src: "/assets/firbhet/Vector (5).png", alt: "Vector 5", label: "Festival" },
    { src: "/assets/firbhet/Vector (4).png", alt: "Vector 4", label: "Personalized" },
    { src: "/assets/firbhet/Vector (6).png", alt: "Vector 6", label: "Corporate" },
    { src: "/assets/firbhet/Vector (5).png", alt: "Vector 7", label: "Wedding" },
  ];

  const handleImageClick = (image: { src: string; alt: string }) => {
    setClickedImage(image);
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

          <div className="relative flex justify-center items-center">
            <Image
              src="/assets/firbhet/image (1).png"
              alt="Gift2"
              width={500}
              height={500}
              className="relative"
              style={{ zIndex: 1 }} // Background image
            />
            <div className="absolute flex flex-col justify-center items-center text-center" style={{ zIndex: 2 }}>
              <Image
                src="/assets/firbhet/Group 45 (4).png"
                alt="Discover Gift"
                width={300}
                height={300}
              />
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
          <div className="font-['Times New Roman'] font-bold text-white text-6xl mt-12">
            Curate for Occasion
          </div>

          <div className="relative w-full flex items-center justify-center overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out w-full mx-20"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/3 lg:h-[37rem] md:h-[20rem] sm:h-[27rem] mt-4 py-10 flex flex-col items-center justify-center"
                  style={{
                    flex: "0 0 25%", // Take up one-third of the container
                  }}
                  onClick={() => handleImageClick(image)}
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
          </div>

          {/* Display the clicked image and dummy text */}
          {clickedImage && (
            <div className="flex w-full mt-8">
              <div className="w-1/2 p-4 flex justify-center">
                <Image
                  src={clickedImage.src}
                  alt={clickedImage.alt}
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
              <div className="w-1/2 p-4 flex justify-center items-center">
                <p className="text-white text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel eros et orci euismod pharetra. Curabitur sit amet dui orci. Vivamus vitae ipsum nec est faucibus congue in eu nisl. Aenean vel sapien dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
