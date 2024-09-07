
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const GiftSection = () => {
//   return (
//     <div className="px-4 py-8 md:px-8 md:py-12 mt-12">
//       <div className="grid grid-cols-1 sm:grid-cols-1 mb-20 md:grid-cols-1 lg:grid-cols-6 gap-2">
//         <div className="flex flex-col space-y-1 mb-20  ">
//           <Image
//             src="/assets/dashboard/master6.jpeg"
//             alt="Block Printing"
//             width={500}
//             height={500}
//             className="w-full h-auto object-cover  ml-20 mt-[44px]"
//           />
//           <Link
//             href="#"
//             className="text-sm mt-2 ml-20 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200"
//           >
//             View All
//           </Link>
//         </div>

//         <div className="flex flex-col space-y-1 ml-24 ">
//           <div className="font-semibold text-lg">Technique</div>
//           <ul className="text-sm space-y-2 mt-[90px]">
//             <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
//               <Link href="#">Block Printing</Link>
//             </li>
//             <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
//               <Link href="#">Quilting</Link>
//             </li>
//             <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
//               <Link href="#">Hand Embroidery</Link>
//             </li>
//             <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
//               <Link href="#">Chikankari</Link>
//             </li>
//             <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
//               <Link href="#">Applique</Link>
//             </li>
//             <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
//               <Link href="#">Crochet</Link>
//             </li>
//             <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
//               <Link href="#">Lace</Link>
//             </li>
//             <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
//               <Link href="#">Cutwork</Link>
//             </li>
//             <li className="text-primaryrose hover:text-primaryrosedark hover:font-bold hover:scale-105 transition-transform duration-200">
//               <Link href="#">Handwoven</Link>
//             </li>
//           </ul>
//         </div>

//         <div className="flex flex-col space-y-4">
//           <div className="font-semibold text-lg">Bed Linen</div>
//           <Image
//             src="/assets/shop/bedLinen.jpg"
//             alt="Bed Linen"
//             width={500}
//             height={500}
//             className="w-full h-auto object-cover"
//           />
//           <Link
//             href="#"
//             className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200"
//           >
            
//           </Link>
//         </div>

//         <div className="flex flex-col space-y-4">
//           <div className="font-semibold text-lg">Bath Linen</div>
//           <Image
//             src="/assets/shop/bathLinen.png"
//             alt="Bath Linen"
//             width={500}
//             height={500}
//             className="w-full h-auto object-cover"
//           />
//           <a
//             href="#"
//             className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200"
//           >
            
//           </a>
//         </div>

//         <div className="flex flex-col space-y-4">
//           <div className="font-semibold text-lg">Table Linen</div>
//           <Image
//             src="/assets/shop/tableLinen.png"
//             alt="Table Linen"
//             width={500}
//             height={500}
//             className="w-full h-[340px] object-cover"
//           />
//           <a
//             href="#"
//             className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200"
//           >
            
//           </a>
//         </div>

//         <div className="flex flex-col space-y-4">
//           <div className="font-semibold text-lg">Cushion & Throws</div>
//           <Image
//             src="/assets/shop/cushionsandthrows.png"
//             alt="Cushion & Throws"
//             width={500}
//             height={500}
//             className="w-full h-[340px] object-cover"
//           />
//           <a
//             href="#"
//             className="text-sm mt-2 text-primaryrose hover:text-primaryrosedark hover:scale-105 transition-transform duration-200"
//           >
            
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GiftSection;



// components/GiftShop.js
import Image from 'next/image';

export default function GiftSection() {
  return (
    <div className="flex justify-between w-full p-8 bg-white">
      {/* Left Column */}
      <div className="flex flex-col space-y-2 ml-56">
        <h2 className="font-bold text-lg mb-4">The Gift Shop</h2>
        <ul className="space-y-2 text-base text-gray-800">
          <li>Best of Firrki Gifts</li>
          <li>Comes in Gift Box</li>
          <li>Gifts for her</li>
          <li>Gifts for him</li>
          <li>Gifts Under Rs 2000</li>
          <li>Gifts Under Rs 5000</li>
          <li>Gifts Under Rs 7000</li>
          <li>Gifts Under Rs 10000</li>
          <li>Gift Trees</li>
        </ul>
      </div>
  





      {/* Middle Column */}
      <div className="flex flex-col space-y-2 ml-8">
        <h2 className="font-bold text-lg mb-4">Gift Card</h2>
        <ul className="space-y-2 text-base text-gray-800">
          <li>Shop by Technique </li>
          <li>Bed Linen</li>
          <li>Bath Linen</li>
          <li>Table Linen</li>
          <li>Cushions</li>
         
        </ul>
      </div>

      {/* Right Column with Images */}
      <div className="flex space-x-4 ml-16">
        {/* First Image */}
        <div className="flex flex-col items-center rou">
          <Image
            src="/assets/shop/cushionsandthrows.png" // Replace with the path to shop1.png
            alt="Gift Card"
            width={200}
            height={200}
            className="object-cover h-[19rem] rounded-md"
          />
          <span className="font-bold mt-2">Gift Cards</span>
        </div>

        {/* Second Image */}
        <div className="flex flex-col items-center">
          <Image
            src="/assets/dashboard/master6.jpeg" // Replace with the path to shop2.png
            alt="Festive"
            width={200}
            height={200}
            className="object-cover rounded-md"
          />
          <span className="font-bold mt-2">Festive</span>
        </div>
      </div>
    </div>
  );
}
