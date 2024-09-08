// import React from "react";
// import HeaderLayout from "../components/HeaderLayout";
// import Footer from "../components/DashComponents/Footer";

// const DesignPage = () => {
//   return (
//     <>
//       <HeaderLayout OtherPage={undefined}>.</HeaderLayout>
//       <div className="flex text-6xl bg-primaryrose items-center justify-center">
//         Design
//       </div>

      
//       <Footer />
//     </>
//   );
// };

// export default DesignPage;


import Image from 'next/image'

import HeaderLayout from "../components/HeaderLayout";
import Footer from '../components/DashComponents/Footer';

export default function DesignPage() {
  return (
    <div>
      <HeaderLayout OtherPage={undefined}>.</HeaderLayout>
      
      
       <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl w-full">
        {/* Carousel Section */}
        <div className="relative w-full h-96">
          <Image 
            src="/assets/design/design.jpg" 
            alt="Bedroom Design" 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full object-cover"
          />
          {/* Plus (+) Interactive Icons */}
          <div className="absolute top-1/3 left-1/4 bg-white p-2 rounded-full shadow-lg cursor-pointer">+</div>
          <div className="absolute top-1/2 left-1/3 bg-white p-2 rounded-full shadow-lg cursor-pointer">+</div>
          <div className="absolute top-2/3 left-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer">+</div>
          <div className="absolute top-1/2 right-1/4 bg-white p-2 rounded-full shadow-lg cursor-pointer">+</div>
        </div>
        {/* Product Info Section */}
        <div className="flex justify-between p-6">
          <div className="text-left">
            <h2 className="text-lg font-semibold">Beehive Glass Vase Olive</h2>
            <p className="text-gray-500">
              <span className="line-through">₹5,490.00</span> 
              <span className="text-red-500 ml-2">₹3,897.90</span>
            </p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            View Product
          </button>
        </div>
        {/* Carousel Pagination */}
        <div className="flex justify-center space-x-2 p-4">
          <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
          <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
          <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
          <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
    <Footer/>

    </div>

  )
}
